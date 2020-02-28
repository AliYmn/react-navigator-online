import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from './example';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='*' component={Example} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;