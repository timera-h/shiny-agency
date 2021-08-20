import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './utils/context';

const GlobalStyle = createGlobalStyle `
  div {
        font-family: 'Trebuchet Ms', Helvetica, sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
