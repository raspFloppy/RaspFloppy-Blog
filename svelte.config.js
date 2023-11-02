import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { escapeSvelte, mdsvex } from 'mdsvex'
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import readingTime from 'mdsvex-reading-time'

/**@type {import('mdsvex'.MdsvexCompileOptions)} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdlayout.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))

			return `{@html \`${html}\`}`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }], readingTime],
	rehypePlugins: [rehypeSlug, rehypeKatex]
}

/**@type {import('@sveltejs/kit'.Config)} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
}
export default config
