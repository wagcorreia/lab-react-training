import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import CreditCard from './CreditCard';

let people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: '1988-05-11',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {people.map((personObj) => {
        return (
          <IdCard
            picture={personObj.picture}
            firstName={personObj.firstName}
            lastName={personObj.lastName}
            gender={personObj.gender}
            height={personObj.height}
            birth={personObj.birth}
          />
        );
      })}
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
