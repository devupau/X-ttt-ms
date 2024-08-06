import React, { Component} from 'react'
import { Link } from 'react-router'

import SetName from './SetName'
import SetGameType from './SetGameType'

import GameMain from './GameMain'

import TttStats from './TttStats'

const DEFAULT_STATS = {
	wins: 0,
	losses: 0,
	draws: 0
}
const DEFAULT_COMP_OPTIONS = {
	size: "3",
}

export default class Ttt extends Component {

	constructor (props) {
		super(props)

		this.state = {
			game_step: this.set_game_step(),
			// Object spreading not available using "es2015" babel preset
			// Must use Object.assign() instead to create unique object references
			comp_stats: Object.assign({}, DEFAULT_STATS),
			live_stats: Object.assign({}, DEFAULT_STATS), 
			comp_options: DEFAULT_COMP_OPTIONS 
		}

		this.upd_stats = this.upd_stats.bind(this)
	 
	}

//	------------------------	------------------------	------------------------

	render () {

		const {game_step} = this.state

		console.log(game_step)

		return (
			<section id='TTT_game'>
				<div id='page-container'>
					{game_step == 'set_name' && <SetName 
														onSetName={this.saveUserName.bind(this)} 
												/>}

					{game_step != 'set_name' && 
						<div>
							<h2>Welcome, {app.settings.curr_user.name}</h2>
						</div>
					}

					{game_step == 'set_game_type' && <SetGameType 
														onSetType={this.saveGameType.bind(this)} 
														compGameOpts={this.state.comp_options}
														updCompGameOpts={this.upd_comp_opt.bind(this)}
													/>}
					{game_step == 'set_game_type' && <TttStats 
														stats={{
															comp_stats: this.state.comp_stats,
															live_stats: this.state.live_stats
														}}
													/>}													
					{game_step == 'start_game' && <GameMain 
														game_type={this.state.game_type}
														onEndGame={this.gameEnd.bind(this)} 
														updateStats={this.upd_stats}
														compGameOpts={this.state.comp_options}
													/>}

				</div>
			</section>
		)
	}

//	------------------------	------------------------	------------------------

	saveUserName (n) {
		app.settings.curr_user = {}
		app.settings.curr_user.name = n

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	saveGameType (t) {
		this.state.game_type = t

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------

	gameEnd (t) {
		this.state.game_type = null

		this.upd_game_step()
	}

//	------------------------	------------------------	------------------------
//	------------------------	------------------------	------------------------

	upd_game_step () {

		this.setState({
			game_step: this.set_game_step()
		})
	}

//	------------------------	------------------------	------------------------

	set_game_step () {

		if (!app.settings.curr_user || !app.settings.curr_user.name)
			return 'set_name'
		else if (!this.state.game_type)
			return 'set_game_type'
		else
			return 'start_game'
	}

//	------------------------	------------------------	------------------------

	upd_stats (mode, stat) {

		this.setState((prevState) => {
			prevState[mode][stat] += 1
			return prevState
		})

	}

//	------------------------	------------------------	------------------------


	upd_comp_opt (opt, value) {
		this.setState(prevState => {
			return prevState.comp_options[opt] = value
		})
	}

//	------------------------	------------------------	------------------------


}


Ttt.propTypes = {
	params: React.PropTypes.any
}

Ttt.contextTypes = {
  router: React.PropTypes.object.isRequired
}