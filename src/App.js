import logo from './logo.svg';
import './App.css';
import { Greet } from './MyComponents/Greet';
import {Welcome} from './MyComponents/Welcome'
import {Hello} from './MyComponents/Hello';
import {Message} from "./MyComponents/Message";
import {Counter} from "./MyComponents/Counter";

function App() {
  return (
    <>
    <Greet name="Amber" heroName="LionSlayer" />
    <Welcome name = "Tripathi"/>
    <Hello name="Amber Bhai" last="Tripathi" standard="10"/>
    <Message/>
    <Counter/>
  </>
  );
}

export default App;
