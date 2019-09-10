import React from 'react';
import {createStore} from 'redux';
import './App.css';
import './components/Degrees';
import Degrees from "./components/Degrees";

const URL = 'api.openweathermap.org/data/2.5/weather?q=';

class App extends React.Component {
  // state = {
  //     city: ''
  // };
  //
  // onChange = async (text) => {
  //     if (text.contains) {}
  //     const city = await text.toLowerCase();
  //     const urlFull = `${URL}${city}`;
  //     console.log(urlFull)
  //
  //     // this.setState({
  //     //     city: text
  //     // })
  // };
  //
  // handleChange = debounce(this.onChange, 500);
  //
  // render() {
  //   return (
  //       <div className='App'>
  //         <header className='App-header'>
  //           <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
  //             Learn React
  //           </a>
  //         </header>
  //       <br /><br />
  //
  //       <label> Your city: <br />
  //           <input type='text' name={'city'} onChange={event => this.handleChange(event.target.value)}/>
  //       </label>
  //       <br /><br />
  //       <p>{}</p>
  //
  //       </div>
  //   );
  // }

    render() {
        return(
            <div>
                <Degrees />
            </div>
        )
    }
}

export default App;
