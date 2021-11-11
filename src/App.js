import Main from './components/MainComponent';
import './App.css';
import { Component } from 'react';
import {HashRouter} from 'react-router-dom';
class App extends Component{


  
  render(){
    return (
      <HashRouter>
      <div >
    
     <Main/>
      </div>
      </HashRouter>
    );
  }
}




export default App;
