import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/components/home/home'
import Countries from '../src/components/countries/countries'
import Animation from '../src/components/anmation/animation'
import GlobalStyle from './common/css/globalStyle'
import Options from './components/options/option'
const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/tripMBTI">
					<Options />
				</Route>
				<Route path="/result/:countryName" component={Countries} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
