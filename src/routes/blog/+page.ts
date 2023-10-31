import type { Post } from '$lib/types.js'

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	const totalPost = posts.length
	return { posts, totalPost }
}
