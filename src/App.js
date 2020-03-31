import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


import home from './pages/home';
import login from './pages/login'
import signup from './pages/signup';
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c158dc',
      main: '#8e24aa',
      dark: '#5c007a',
      contrastText: '#000',
    },
    
  },
  typography:{
    useNextVariant: true
  }
})

export class App extends Component {
  render() {
    return (
      <div className = "App">
       <MuiThemeProvider theme={theme}>
       <Router>
        <Navbar/>{/*keeps navbar outside switch so it stays staionaary */}
         <div className="container">
         
          <Switch>
            <Route exact path ="/" component ={home}/>
            <Route exact path ="/login" component={login}/>
            <Route exact path ="/signup" component={signup}/>

          </Switch>
         </div>
        </Router>
       </MuiThemeProvider>
        
      </div>
    )
  }
}

export default App
