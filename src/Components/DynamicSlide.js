import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'
import Team from './Team';

export default class DynamicSlide extends Component {
    // la fonction nextClick récupère l'element actuellement au centre du carousel nous avons donc la position de l'element dans le talbeau data grace à la variable position
    // nous avons juste alors à prendre la position dans le tableau pour nous retourner l'element et donc avoir l'id de la team selectionnée
    // ensuite nous appelons la props action qui est = à handleChangeTeam dans la pas équipe pour mettre à jour l'équipe selectionnée
    nextClick = (position) =>{
        this.props.action(this.props.datas[position].id, this.props.datas)
    }

    render() {
        let { datas, title } = this.props

        
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: datas.length >= 5 ? "0px" : "50px",
            slidesToShow: datas.length >= 5 ? 5 : datas.length,
            speed: 500,
            draggable: true,
            focusOnSelect: true,
            afterChange: this.nextClick,
          };
        return (
            <div className="w-90 mx-auto pt-5 pb-5">
                <h2 className="text-light text-center"> { title } </h2>
                <Slider {...settings}>
                    {
                        datas.length &&
                        datas.map((data, k) => {
                            return (
                                <div key={k} className="p-5">
                                    <Team button={"aller a l'article"} post={data} />
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
        );
    }
}