import React, { Component } from 'react';
import arrowRight from './img/right-arrow.png';
import arrowLeft from './img/left-arrow.png';
class CarouselCustom extends Component {
    componentDidMount(){
        setTimeout(
            function() {
                this.setState({position: 1});
            }
            .bind(this),
            3000
        );
    }
    constructor() {
        super();
        this.state = {
            // holding the current index for the image that has to be rendered at each time on the screen 
            currentImageIndex: 0,
            // array of the source links to the images, simple placeholders for now
            images: [
                'https://via.placeholder.com/200x150?text=first',
                'https://via.placeholder.com/200x150?text=second',
                'https://via.placeholder.com/200x150?text=third',
                'https://via.placeholder.com/200x150?text=fourth',
                'https://via.placeholder.com/200x150?text=fifth',
                'https://via.placeholder.com/200x150?text=sixth',
                'https://via.placeholder.com/200x150?text=seventh',
                'https://via.placeholder.com/200x150?text=eighth',
                'https://via.placeholder.com/200x150?text=ninth',
                'https://via.placeholder.com/200x150?text=tenth'
            ],
            // imported images of right and left arrows
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    prevSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the last index again
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        })
    }
    nextSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        });
    }
    render() {
        // get current image index
        const index = this.state.currentImageIndex;
        // create a new array with 5 videos from the source images
        let firstFiveVideo = this.state.images.slice(index, index + 5);
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstFiveVideo.length < 5) {
            // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
            firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 5 - firstFiveVideo.length))
        }
        return (
            <div>
                {/*                 render the left arrow */}
                <img src={this.state.arrowPrev} onClick={this.prevSlide} />
                {/*                  render images */}
                {firstFiveVideo.map((image, index) =>
                    <img className="m-2" key={index} src={image} alt="" />
                )}
                {/*                  render the right arrow */}
                <img src={this.state.arrowNext} onClick={this.nextSlide} />
            </div>
        );
    }
}
export default CarouselCustom;