import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import History from './components/History';
import Home from './components/Home';
import Nav from './components/Nav';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [],
    }
  }

  handleHistory = (history) => {
    this.setState((prevState) => ({history: [...prevState.history, history]}))
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
          
          <Switch>
            <Route exact path="/" component={() => <Home onClick={this.handleHistory} />}/>
            <Route exact path="/history" component={() => <History {...this.state} />}/>
            <Route
              exact
              path="/search/:searchTerm"
              component={ (props) => <Search { ...props}  />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
