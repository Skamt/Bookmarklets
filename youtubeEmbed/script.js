(({ searchParams, host }) => {
	if (host.includes("youtube.com") && (v = searchParams.get("v"))) {
		window.stop();
		document.documentElement.innerHTML = '';
		document.location.href = `https://www.youtube.com/embed/${v}?hl=en&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0&autoplay=1`;
	}
})(new URL(window.location))