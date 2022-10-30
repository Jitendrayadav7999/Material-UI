import './App.css';
import  MaterialCheckBox  from './Componets/MaterialCheckBox';
import MatrialBtn from "./Componets/MatrialBtn"
import MaterialRadioBtn from "./Componets/MaterialRadioBtn"
import MaterialSlider from "./Componets/MaterialSlider"
import RangeSliderMaterial from "./Componets/RangeSliderMaterial"
import SelectMaterial from "./Componets/SelectMaterial"
import TextFieldMateria from "./Componets/TextFieldMaterial"
import SwitchMaterial from "./Componets/SwitchMaterial"
import BoxMaterial from "./Componets/BoxMaterial"
import ContainerMaterial from "./Componets/ContainerMaterial"
import GridMaterial from "./Componets/GridMaterial"
function App() {
  return (
     <div className='App'>
      <MatrialBtn  data="jitendra"/>
      <br /><br />
      <MaterialCheckBox />
      <br /><br />
      <MaterialRadioBtn />
      <br /><br />
      <MaterialSlider />
      <br /><br />
      <RangeSliderMaterial/>
      <br /><br />
      <SelectMaterial />
      <br /><br />
      <TextFieldMateria/>
      <br /><br />
      <SwitchMaterial/>
      <br /><br />
      <BoxMaterial/>
      <br /><br />
      <ContainerMaterial/>
      <br /><br />
      <GridMaterial/>
     </div>
  );
}

export default App;
