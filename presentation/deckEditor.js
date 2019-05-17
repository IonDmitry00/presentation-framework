import React from 'react';
import { Slide } from 'spectacle'
import PreviewPanel from './previewPanel';
import CurrentEditedSlide from './currentEditedSlide';
import './deckEditor.css'

const slidesImports = [
	import("./SlidesContent/1"),
	import("./SlidesContent/2"),
	import("./SlidesContent/3"),
	import("./SlidesContent/4")
];

export default class DeckEditor extends React.Component {
	constructor(props) {
		super(props);

		console.log("deckEditor.js");

		this.state = {
			currentSlideNumber: 0,
			slides: []
		};
	}

	componentDidMount() {
		const importedSlides = [];
		Promise.all(slidesImports).then((slidesImportsResolved) => {
			slidesImportsResolved.forEach((slide) => {
				importedSlides.push(slide.default);
			});
	
			this.setState({ slides: importedSlides });
		});
	}



	render() {
		return (
			<div className="deckEditor">
				<PreviewPanel 
					slides={this.state.slides}
				/>
				<CurrentEditedSlide 
					slide={this.state.slides[this.state.currentSlideNumber]}
				/>
			</div>
		);
	}
}