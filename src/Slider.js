import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.suryasukses.com/images/product/.tmb/thumb_ff9d1-cover_adaptiveResize_768_501.jpg',
    altText: 'Découvrez notre gamme',
    caption: 'Articles de cuisine'
  },
  {
    src: 'http://rallypoint6.org/wp-content/uploads/2019/01/white-garden-table-plastic-plastic-outside-table-white-plastic-garden-table-ebay.jpg',
    altText: 'Découvrez notre gamme',
    caption: 'Articles de jardin'
  },
  {
    src: 'http://www.bottonandgardiner.com.au/getattachment/b-g-Blog/Blog/February-2015/Adelaide-Central-Plaza/BG_ACD_03.jpg.aspx',
    altText: 'Découvrez notre gamme',
    caption: 'Salon de thé'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className='slider-img'src={item.src} alt={item.altText} />
          <CarouselCaption className="text"captionText={item.altText} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (<div>
      <style>
          {
            `.slider-img {
                width: 100%;
                height: 500px;
                background: white;
              }
              .text{
                color:black;
              }`
          }
        </style>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default Example;