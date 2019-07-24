import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AppProvider } from '../Context/AppContext';

import Home from '../Screens/Home';
import About from '../Screens/About';
import Equipes from '../Screens/Equipes';
import Post from '../Screens/Post';
import Partner from '../Screens/Partner';
import News from '../Screens/News';
import Webtv from '../Screens/Webtv';
import Discord from '../Screens/Discord';
import Joinus from '../Screens/Joinus';


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <AppProvider>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/equipes" exact component={Equipes} />
                    <Route path="/webtv" exact component={Webtv} />
                    <Route path="/discord" exact component={Discord} />
                    <Route path="/joinus" exact component={Joinus} />
                    <Route path="/news" exact component={News} />
                    <Route path="/post/:slug" component={Post} />
                    <Route path="/partner/:slug" component={Partner} />
                </AppProvider>
            </Router>
        )
    }
}

export default AppRouter;