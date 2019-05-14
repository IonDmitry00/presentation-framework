import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const slidesImports = [
  import("./SlidesContent/1"),
  import("./SlidesContent/2"),
  import("./SlidesContent/3"),
  import("./SlidesContent/4")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { text: '' } // You can also pass a Quill Delta here
    // this.handleChange = this.handleChange.bind(this)
    this.state = {
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

  // handleChange(value) {
  //   this.setState({ text: value })
  // }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => 
            <Slide key={index}>{slide}</Slide>
          )
        }
      </Deck>
    );
  }

  // render() {
  //   return (
  //     <Deck
  //       theme={theme}
  //       transition={['zoom', 'slide']}
  //       transitionDuration={500}
  //     >
  //       <Slide>
  //         <ReactQuill value={this.state.text}
  //           onChange={this.handleChange} />
  //       </Slide>
  //       <Slide transition={['zoom']} bgColor="primary">
  //         <Heading size={1} fit caps lineHeight={1} textColor="secondary">
  //           Spectacle Boilerplate
  //         </Heading>
  //         <Text margin="10px 0 0" textColor="tertiary" fit bold>
  //           open the presentation/index.js file to get started
  //         </Text>
  //       </Slide>
  //       <Slide bgColor="secondary">
  //         <Image src={images.formidagon} width={800} />
  //       </Slide>
  //       <Slide transition={['fade']} bgColor="tertiary">
  //         <Heading size={6} textColor="primary" caps>
  //           Typography
  //         </Heading>
  //         <Heading size={1} textColor="secondary">
  //           Heading 1
  //         </Heading>
  //         <Heading size={2} textColor="secondary">
  //           Heading 2
  //         </Heading>
  //         <Heading size={3} textColor="secondary">
  //           Heading 3
  //         </Heading>
  //         <Heading size={4} textColor="secondary">
  //           Heading 4
  //         </Heading>
  //         <Heading size={5} textColor="secondary">
  //           Heading 5
  //         </Heading>
  //         <Text size={6} textColor="secondary">
  //           Standard text
  //         </Text>
  //       </Slide>
  //       <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
  //         <div id="konvaSlide">
  //           <Heading size={6} textColor="secondary" caps>
  //             Standard List
  //           </Heading>
  //           <List>
  //             <ListItem>Item 1</ListItem>
  //             <ListItem>Item 2</ListItem>
  //             <ListItem>Item 3</ListItem>
  //             <ListItem>Item 4</ListItem>
  //           </List>
  //         </div>
  //       </Slide>
  //       <Slide transition={['fade']} bgColor="secondary" textColor="primary">
  //         <BlockQuote>
  //           <Quote>Example Quote</Quote>
  //           <Cite>Author</Cite>
  //         </BlockQuote>
  //       </Slide>
  //       <Slide>
  //         <Image src={images.goodWork} width={500} />
  //       </Slide>
  //     </Deck>
  //   );
  // }
}