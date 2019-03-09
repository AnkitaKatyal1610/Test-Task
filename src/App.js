import React, { Component } from 'react';

import Players from './players';
import teams from './sort';

class App extends Component {
  render() {
    return (
      <div>
        <Players teams={teams} />
      </div >
    );
  }
}

export default App;
