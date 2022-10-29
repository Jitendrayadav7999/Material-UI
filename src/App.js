import './App.css';
import  MaterialCheckBox  from './Componets/MaterialCheckBox';
import MatrialBtn from "./Componets/MatrialBtn"
import MaterialRadioBtn from "./Componets/MaterialRadioBtn"
import MaterialSlider from "./Componets/MaterialSlider"
function App() {
  return (
     <div className='App'>
      <MatrialBtn />
      <br /><br />
      <MaterialCheckBox />
      <br /><br />
      <MaterialRadioBtn />
      <br /><br />
      <MaterialSlider />
     </div>
  );
}

export default App;
