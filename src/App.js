import logo from './logo.svg';
import './App.css';
import context from "./Components/Context";
import {useState} from "react";
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';

//To use global store in the component, first step is to inform component that global store exists and it is done by wrapping it in <context.Provider>
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <context.Provider value = {theme}>
      <button onClick={()=>setTheme(!theme)}>change Theme</button>
      <Navbar/>
      <Parent1/>
      <Parent2/>   
    </context.Provider>
  );
}

export default App;
