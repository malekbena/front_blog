import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'
import Actu from '../Components/Actu';


export default class DynamicPost extends Component {


    nextClick = (e) => {
        console.log(this.props.datas[e]);
    }


    render() {
        let { datas } = this.props
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
        };
        return (

            <div className="w-90 mx-auto">
                <h2 className="text-light text-center"> Actus </h2>
                <Slider {...settings}>
                    {
                        datas.length &&
                        datas.map((data, k) => {
                            return (
                                <div key={k}>
                                    {
                                        data.posts.map((post, j) => {
                                            return (
                                                <div key={j} className="m-0 mb-5 justify-content-center align-items-center d-flex flex-column p-5">
                                                    < Actu button={"aller a l'article"} post={post} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        );
    }
}