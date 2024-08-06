import React, {Component, Fragment} from 'react'

import SetCompGameOptions from './SetCompGameOptions'

export default class SetGameType extends Component {

	constructor (props) {
		super(props)

		this.state = {
			show_comp_opts: false
		}
	}

//	------------------------	------------------------	------------------------

	render () {
		const { show_comp_opts } = this.state

		return (
			<div id='SetGameType'>

				<h1>Choose game type</h1>

				<button type='submit' onClick={this.selTypeLive.bind(this)} className='button long'><span>Live against another player <span className='fa fa-caret-right'></span></span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='submit' onClick={this.show_comp_opts.bind(this)} className='button long'><span>Against a computer <span className='fa fa-caret-right'></span></span></button>

				{show_comp_opts && 
					<div>
						<SetCompGameOptions 
							options={this.props.compGameOpts} 
							updOptions={this.props.updCompGameOpts}
						/>
						<button className='button'  onClick={this.selTypeComp.bind(this)}>
							Start Game
						</button>
					</div>
				}

			</div>
		)
	}

//	------------------------	------------------------	------------------------

	selTypeLive (e) {
		// const { name } = this.refs
		// const { onSetType } = this.props
		// onSetType(name.value.trim())
		this.setState({show_comp_opts: false})
		this.props.onSetType('live')
	}

//	------------------------	------------------------	------------------------

	selTypeComp (e) {
		// const { name } = this.refs
		// const { onSetType } = this.props
		// onSetType(name.value.trim())

		this.props.onSetType('comp')
	}

	show_comp_opts() {
		this.setState({show_comp_opts: true})
	}

}
