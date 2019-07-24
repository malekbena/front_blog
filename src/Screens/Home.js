import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Layout from '../Containers/Layout'
import ParallaxComp from '../Components/ParallaxComp'
import CarouselComp from '../Components/CarouselComp'
import SlideCustom from '../Components/SlideCustom'
import Card from '../Components/Card'

import { AppConsumer } from '../Context/AppContext';

const image1 = {
    cover: "Img/equipe.png",
    title: "image 1",
    color: 1150

}
const image2 = {
    cover: "Img/webtv.png",
    title: "image 2",
    color: 500
}

class Home extends Component {
    state = {
        dark: true
    }
    handleChangeTheme = () => {
        this.setState({
            dark: !this.state.dark
        })
    }
    render() {
        return (
            <AppConsumer>
                {({ posts, slides }) => {
                    return (
                        <Layout>
                            
                            {
                                slides.length &&
                                <CarouselComp items={slides} />
                            }
                            <SlideCustom posts={posts} />
                            <ParallaxComp item={image1} />
                            <Container>
                                <Card button={'team'} reverse={false} img={image1.cover} link={"/equipes"} />
                                <Card button={'Web tv'} reverse={true} img={image2.cover} link={"/webtv"} />
                                <Card button={'nous rejoindre'} reverse={false} img={image1.cover} link={"/Joinus"} />
                            </Container>
                        </Layout>
                    )
                }}
            </AppConsumer>

        );
    }
}

export default Home;