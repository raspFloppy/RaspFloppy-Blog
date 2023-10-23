const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

const config = {
	plugins: [
		postcssJitProps(OpenProps),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer')
	]
}

module.exports = config
