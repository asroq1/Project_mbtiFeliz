import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/components/home/home'
import MBTI from './components/mbti/mbti'
import Countries from '../src/components/countries/countries'
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
				<Route path="/result/:countryName" component={Countries} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
