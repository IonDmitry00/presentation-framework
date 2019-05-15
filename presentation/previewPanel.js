import React from 'react';
import SlidePreview from './slidePreview';

export default class PreviewPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const slides = this.props.slides.map(x => (<SlidePreview>{x}</SlidePreview>));

		return (
			<div className='previewPanel'>
				{slides}
			</div>
		);
	}
}