import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

type IframeProps = {
	url: string
};
const Iframe = ({ url }: IframeProps) => {
	return (
		<BrowserOnly>
			{() => {
				return (
					<iframe style={{ width: '100%', height: '600px' }}
						src={useBaseUrl(url)} />
				);
			}}
		</BrowserOnly>
	);
}

export default Iframe;
