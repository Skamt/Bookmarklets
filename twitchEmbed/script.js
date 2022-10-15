(({ pathname, searchParams, host }) => {
	if(!host.includes("twitch.tv") || searchParams.get("video")) return;
	const execute = param => {
		window.stop();
		document.documentElement.innerHTML = '';
		document.location.href = `https://player.twitch.tv/?parent=player.twitch.tv&${param}=${pathname.split('/').pop()}`;
	};
	if(channel = searchParams.get("channel")) 
		window.open(`https://www.twitch.tv/embed/${channel}/chat?parent=player.twitch.tv`, '_blank');
	else if(pathname.includes("/videos/")) 
		execute("video");
	else 
		execute("channel");
})(new URL(window.location))