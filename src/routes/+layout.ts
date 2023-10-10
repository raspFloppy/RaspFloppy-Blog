export function load({ url }) {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
}