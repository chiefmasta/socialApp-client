import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import Navbar from './components/Navbar';

// TODO
// const theme = createMuiTheme({});

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={home} />
                            <Route exact path="/login" component={login} />
                            <Route exact path="/signup" component={signup} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
