import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row } from 'reactstrap';
import './Layout.css';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../Context/AppContext';
import Loader from '../Components/Loader';
import Partners from '../Components/Partners';


export default class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            IsTop: true,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    listenScrollEvent = () => {
        if (window.scrollY > 200) {
            this.setState({ isTop: false })
            
        } else {
            this.setState({ isTop: true })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    //Pour changer la taille des images au scroll => code a mettre sur les images en className == {this.state.isTop ? 'logo' : 'logoSmall'} 

    render() {
        return (
            <AppConsumer>
                {({ waiting, partners }) => {
                    return (
                        <>
                            <Loader show={waiting} />
                            <Container fluid className="p-0 bgDark" >
                                <Navbar className="darkCustom" color="darkCustom" dark expand="md" sticky="top">
                                    <NavbarBrand href="/"> <img className='logoSmall' src={'Img/logo_agp.png'} alt="logo" /> </NavbarBrand>
                                    <NavbarBrand className="m-0" href="/"> <img className='logoSmall' src={'Img/discord.png'} alt="logo_discord" /> </NavbarBrand>
                                    <NavbarBrand className="m-0" href="/"> <img className='logoSmall' src={'Img/twitter.png'} alt="logo_discord" /> </NavbarBrand>
                                    <NavbarBrand className="m-0" href="/"> <img className='logoSmall' src={'Img/twitch.png'} alt="logo_discord" /> </NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto align-items-center" navbar>
                                            <NavItem className="pr-5">
                                                <Link className="navItem hoverA" to="/">Acceuil</Link>
                                            </NavItem>
                                            <NavItem className="pr-5">
                                                <Link className="navItem hoverA" to="/about">AGP</Link>
                                            </NavItem>
                                            <NavItem className="pr-5">
                                                <Link className="navItem hoverA" to="/news">News</Link>
                                            </NavItem>
                                            <NavItem className="pr-5">
                                                <Link className="navItem hoverA" to="/equipes">Line Up</Link>
                                            </NavItem>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle className="pr-5 hoverA" nav caret>
                                                    Communauté
                                            </DropdownToggle>
                                                <DropdownMenu right className="darkCustom" color="darkCustom">
                                                    <DropdownItem href="#/webtv">
                                                    Web TV
                                                    </DropdownItem>
                                                    <DropdownItem href="#/discord">
                                                         Discord 
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Nav>
                                    </Collapse>
                                </Navbar>

                                {this.props.children}

                                <Partners datas={partners} />

                                <footer className="bg-dark container-fluid mx-auto row justify-content-around mt-5">
                                    <Row className=" footerLink pt-5">
                                        <ul style={{ listStyleType: "none" }}>
                                            <li><Link to="">Mentions légales</Link></li>
                                            <li><Link to="">Cookies</Link></li>
                                            <li><Link to="">Politique confidentialité</Link></li>
                                        </ul>
                                    </Row>
                                    <Row className="pt-5">
                                        <Link to=""> <img className="logo" src="Img/discord.png" alt="logo_discord" /> </Link>
                                        <Link to=""> <img className="logo" src="Img/twitter.png" alt="logo twitter" /> </Link>
                                        <Link to=""> <img className="logo" src="Img/twitch.png" alt="logo twitch" /> </Link>
                                    </Row>

                                </footer>
                            </Container>
                        </>
                    )
                }}
            </AppConsumer>

        );
    }
}