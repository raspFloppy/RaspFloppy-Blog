import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'

async function getPosts(limit: number | null, skip: number): Promise<Post[]> {
	let posts: Post[] = []
	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	if (skip) {
		posts = posts.slice(skip)
	}

	if (limit) {
		posts = posts.slice(0, limit)
	}

	return posts
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const limit = searchParams.get('limit') || null
	const skip = searchParams.get('skip') || 0
	const posts = await getPosts(limit, skip)
	return json(posts)
}
