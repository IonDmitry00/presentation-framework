import React from 'react';
import { Deck, Slide } from 'spectacle';
import './currentEditedSlide.css'

export default class CurrentEditedSlide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className="editedSlide">
			<Deck>
				<Slide>
					{this.props.slide}
				</Slide>
			</Deck>
		</div>
		);
	}
}