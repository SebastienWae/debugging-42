import React, { useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

type AsciinemaPlayerProps = {
	src: string;
	cols: string;
	rows: string;
	autoPlay: boolean
	preload: boolean;
	loop: boolean | number;
	startAt: number | string;
	speed: number;
	idleTimeLimit: number;
	theme: string;
	poster: string;
	fit: string;
	fontSize: string;
};

const Player: React.FC<AsciinemaPlayerProps> = ({ src, ...asciinemaOptions }) => {
	const AsciinemaPlayerLibrary = require('asciinema-player');
	require('asciinema-player/dist/bundle/asciinema-player.css');
	const ref = useRef<HTMLDivElement>(null);

	src = useBaseUrl(src);
	useEffect(() => {
		const currentRef = ref.current;
		AsciinemaPlayerLibrary.create( src, currentRef, asciinemaOptions);
	}, [src]);

	return <div ref={ref} />;
};

const AsciinemaPlayer: React.FC<AsciinemaPlayerProps> = ({ src, ...asciinemaOptions }) => {
	return (
		<BrowserOnly>
			{() => { return <Player src={src} {...asciinemaOptions} />; }}
		</BrowserOnly>
	);
};

export default AsciinemaPlayer;
