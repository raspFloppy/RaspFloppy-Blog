import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`)
		const { slug } = params
		return {
			content: post.default,
			meta: { ...post.metadata, slug }
		}
	} catch (err) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
