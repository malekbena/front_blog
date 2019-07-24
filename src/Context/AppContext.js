import React, { Component } from 'react';
import Axios from 'axios';
import { domain } from '../Helpers/config';

const AppContext = React.createContext()

class AppProvider extends Component {
	state = {
		posts: {},
		teams: {},
		partners: {},
		selectedTeam: {},
		selectedPost: {},
		selectedPartner: {},
		selectStreamers: {},
		slides: {},
		waiting: true
	}

	componentDidMount() {
		this.getSlides().then(() => {
			this.getSettings().then(() => {
				this.getPosts().then(() => {
					this.getTeam().then(() => {
						this.getPartners().then(() => {
							this.handleChangeTeam(this.state.teams[0].id, this.state.teams).then(() => {
								this.findStreamers('streamer', this.state.teams).then(() => {
									this.setState({
										waiting: false
									})
								})
							})
						})
					})
				})
			})
		})
	}

	getSlides = async () => {
		await Axios
			.get(`${domain}/slides.json`)
			.then(resp => {
				this.setState({
					slides: resp.data.slides,
				});
			})
			.catch(err => {
				throw err;
			});
	}

	getSettings = async () => {
		await Axios
			.post(`${domain}/settings.json`)
			.then(resp => {
				this.setState({
					settings: resp.data.settings,
				});
			})
			.catch(err => {
				throw err;
			});
	}

	getTeam = async () => {
		await Axios
			.get(`${domain}/teams.json`)
			.then(resp => {
				this.setState({
					teams: resp.data.teams,
				});
			})
			.catch(err => {
				throw err;
			});
	}

	getPartners = async () => {
		await Axios
			.get(`${domain}/partners.json`)
			.then(resp => {
				this.setState({
					partners: resp.data.partners,
				});
			})
			.catch(err => {
				throw err;
			});
	}

	getPosts = async () => {
		await Axios
			.get(`${domain}/posts.json`)
			.then(resp => {
				this.setState({
					posts: resp.data.posts,
				});
			})
			.catch(err => {
				throw err;
			});
	}

	sendEmail = (e, message, from) => {
		e.preventDefault()
		 Axios.post(`${domain}/sendEmail.json`, {
			message: message.value,
			from: from.value 
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
			
 	}

	handleChangeTeam = async (id, teams) => {
		let selectedTeam = teams.filter(team => team.id === id)
		this.setState({
			selectedTeam: selectedTeam[0]
		})
	}
	findPost = async (slug) => {
		let selectedPost = this.state.posts.find(post => post.slug === slug)
		this.setState({
			selectedPost: selectedPost
		})
	}

	findPartner = async (slug) => {
		let selectedPartner = this.state.partners.find(partner => partner.slug === slug)
		this.setState({
			selectedPartner: selectedPartner
		})
	}

	findStreamers = async (slug, teams) => {
		let selectStreamers = teams.filter(team => team.slug === slug)
		await this.setState({
			selectStreamers: selectStreamers
		})
	}

	findSetting = (key) => {
		let {settings} = this.state
		let setting = settings.filter(setting => setting.meta_key === key)
		return setting[0]
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					handleChangeTeam: this.handleChangeTeam,
					findPost: this.findPost,
					findPartner: this.findPartner,
					findStreamers: this.findStreamers,
					teams: this.state.teams,
					posts: this.state.posts,
					partners: this.state.partners,
					slides: this.state.slides,
					selectedTeam: this.state.selectedTeam,
					selectedPost: this.state.selectedPost,
					selectedPartner: this.state.selectedPartner,
					selectStreamers: this.state.selectStreamers,
					findSetting: this.findSetting,
					waiting: this.state.waiting,
					sendEmail : this.sendEmail
				}}>


				{this.props.children}

			</AppContext.Provider>
		);
	}
}

const AppConsumer = AppContext.Consumer
export { AppProvider, AppConsumer, AppContext }