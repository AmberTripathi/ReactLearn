import logo from './logo.svg';
import './App.css';
import { Greet } from './MyComponents/Greet';
import {Welcome} from './MyComponents/Welcome'
import {Hello} from './MyComponents/Hello';
function App() {
  return (
    <>
    <Greet name="Amber" />
    <Welcome name = "Tripathi"/>
    <Hello name="Amber Bhai" last="Tripathi" standard="10"/>
    </>
    
  );
}

export default App;
