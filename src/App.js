import React, {Component} from 'react';

import Header from './components/header';


/*
function App() {
  return (
    <div className="App">
      <h1>Hello Léo Serrão</h1>
    </div>
  );
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}
*/

const App = () => (
  <div className="App">
    <Header />
  </div>
);

export default App;
