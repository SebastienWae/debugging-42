import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import AsciinemaPlayer from '@site/src/components/Asciinema';
import Godbolt from '@site/src/components/Godbolt';
import 'asciinema-player/dist/bundle/asciinema-player.css';

export default {
	...MDXComponents,
	AsciinemaPlayer,
	Godbolt
};
