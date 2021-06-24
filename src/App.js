import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import CreditCard from './CreditCard';
import Rating from './Rating';
import BoxColor from './BoxColor';
import DriverCard from './DriverCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import NumbersTable from './NumbersTable';
import Dice from './Dice';
import Carousel from './Carousel';

let people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
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
      <h1> Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <div>
        <h1> Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} class="border border-dark m-2 d-flex p-1">
          rgb(255,0,0)
        </BoxColor>
        <BoxColor
          r={128}
          g={255}
          b={0}
          class="border border-dark m-2 d-flex p-1"
        >
          rgb(128,255,0)
        </BoxColor>
      </div>

      <div className="d-flex flex-wrap">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <div>
        <h1>Like Button</h1>
        <LikeButton />
        <LikeButton />

        <h1>Clickable Picture</h1>
        <ClickablePicture
          img="/img/persons/mFalconnew.png"
          imgClicked="/img/persons/mFalconnew2.png"
        />
      </div>

      <Dice />

      <h1>Numbers Table</h1>
      <NumbersTable limit={12} />
      <div>
        <Carousel
          imgs={[
            'https://i.ytimg.com/vi/U4tvpTiWgew/hqdefault.jpg',
            'https://www.voceselembra.com/wp-content/uploads/2007/06/carrossel.01jpg.jpg',
            'http://1.bp.blogspot.com/_lX-OSdHeE8o/S6F0nWwmCrI/AAAAAAAAS1g/uMTXNk2524M/s320/Carrossel44Carrossel.png',
            'https://www.voceselembra.com/wp-content/uploads/2007/06/carrossel08.jpg',
          ]}
        />
      </div>
    </div>
  );
}

export default App;
