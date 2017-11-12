import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//components
import Emoji from './Emoji'

//styles
import './App.scss'
import './App.less'
import './App.styl'

import PageHome from './pages/PageHome/PageHome'
import PageCountries from './pages/PageCountries/PageCountries'
import PageCountriesDetail from './pages/PageCountriesDetail/PageCountriesDetail'

//modules
import cssStyles from './First.module.css'
import sassStyles from './Second.module.scss'
import lessStyles from './Third.module.less'
import stylusStyles from './Fourth.module.styl'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={PageHome} />
          <Route exact path="/countries" component={PageCountries} />
          <Route exact path="/countries/:id" component={PageCountriesDetail} />          
        </div>
      </Router>
    )
  }
}

export default App
