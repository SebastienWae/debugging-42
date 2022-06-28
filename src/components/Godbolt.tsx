import React from 'react';

type GodboltProps = {
	url: string
};
const Godbolt = ({ url }: GodboltProps) => {
	const path = url.split("#", 2)[1]
	return (
		<iframe style={{ width: '100%', height: '600px' }}
			src={`https://godbolt.org/e?hideEditorToolbars=true#${path}`}>
		</iframe>
	);
}

export default Godbolt;
