import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {CardComponent} from './components/Card';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

function App() {
  return (
    <>
        <Header/>
        <div className="container d-flex justify-content-evenly flex-wrap">
          <CardComponent title="Robot 1" url="https://robohash.org/user1" description="Robot verde, sólo un ojo rojo"/>
          <CardComponent title="Robot 2" url="https://robohash.org/user2" description="Robot gris, con pelos de metal"/>
          <CardComponent title="Robot 3" url="https://robohash.org/user3" description="Robot café, con mostacho"/>
          <CardComponent title="Robot 4" url="https://robohash.org/user4" description="Robot café, con nariz de pinocho"/>
          <CardComponent title="Robot 5" url="https://robohash.org/user5" description="Robot verde,lanza láser"/>
          <CardComponent title="Robot 6" url="https://robohash.org/user6" description="Robot gris,con mostacho"/>
        </div>
        <Footer/>
    </> 
  );
}

export default App;
