import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/IdCard';
import './App.css';

function App() {
  return (
   
    <div>
    <IdCard
      lastName="Doe"
      firstName="John"
      gender="male"
      height={178}
      birth={new Date('1992-07-14')}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    <IdCard
      lastName="Delores "
      firstName="Obrien"
      gender="female"
      height={172}
      birth={new Date('1988-05-11')}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    </div>
  );
}

export default App;






 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>