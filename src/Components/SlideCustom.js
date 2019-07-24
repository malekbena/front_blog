import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'
/* import Axios from 'axios';
 */import Actu from '../Components/Actu';

/* import { domain } from '../Helpers/config'
 */


export default class SlideCustom extends Component {
    /*     state = {
            posts: {},
            waiting: true
        } */

    /*     componentDidMount() {
            this.getPosts().then(() => {
                this.setState({
                    waiting: false
                })
            })
        } */

    nextClick = (e) => {
    }

    /*     getPosts = async () => {
            Axios
                .get(`${domain}/posts.json`)
                .then(resp => {
                    this.setState({
                        posts: resp.data.posts,
                    });
                })
                .catch(err => {
                    throw err;
                });
        } */
    render() {
        let { posts } = this.props
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 3,
            speed: 500,
            draggable: true,
            focusOnSelect: true,
            afterChange: this.nextClick,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1008,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },

              ]
        };
        return (
            <div className="w-90 mx-auto">
                <h2 className="text-light text-center"> Actus </h2>
                <Slider {...settings}>
                    {
                        posts.length &&
                        posts.map((post, k) => {
                            return (
                                <div key={k} className="m-0 mb-5 justify-content-center align-items-center d-flex flex-column p-5">
                                    <Actu button={"aller a l'article"} post={post} />
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        );
    }
}