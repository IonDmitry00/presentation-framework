import React from 'react';
import { Slide } from 'spectacle';
import './slidePreview.css'

export default class SlidePreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="slidePreview">{this.props.slide}</div>)
	}
}