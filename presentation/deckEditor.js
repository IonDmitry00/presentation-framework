import React from 'react';
import PreviewPanel from './previewPanel';
import CurrentEditedSlide from './currentEditedSlide';

const slidesImports = [
	import("./SlidesContent/1"),
	import("./SlidesContent/2"),
	import("./SlidesContent/3"),
	import("./SlidesContent/4")
];

export default class DeckEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlideNumber: 0,
			slides: Array(slidesImports.length).fill(<Slide key="loading" />)
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
			<div>
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