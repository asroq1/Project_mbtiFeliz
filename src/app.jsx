import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/components/home/home'
import MBTI from './components/mbti/mbti'
import Profile from './components/profile/profile'
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/tripMBTI">
					<MBTI />
				</Route>
				<Route path="/profiles/:username" component={Profile} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
