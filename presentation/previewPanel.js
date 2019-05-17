import React from 'react';
import SlidePreview from './slidePreview';
import './previewPanel.css'

export default class PreviewPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const slides = this.props.slides.map((x, i) => 
			(<SlidePreview key={i} slide={x} />));

		return (
			<div className='previewPanel'>
				{slides}
			</div>
		);
	}
}