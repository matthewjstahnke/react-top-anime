import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAnimes } from './actions';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ErrorPage from './components/Error';
import Form from './components/Form';
import Index from './components/Index';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAnimes();
  }
  
  render() {
    if (this.props.loading){
      return (
        <h3>Loading...</h3>
      )
    }

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/animes" component={ Index } />
          <Route exact path="/animes/new" component={ Form } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>


    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getAnimes })(App);
