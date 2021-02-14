import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/components/home/home'
import MBTI from './components/mbti/mbti'
import Result from '../src/components/result/result'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/tripMBTI">
					<MBTI />
				</Route>
				<Route path="/result">
					<Result />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
