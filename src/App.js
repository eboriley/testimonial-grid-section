import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive";
import './App.css';

function App() {
  return (
    <div className="App">
      <SectionOne className="section_one section"/>
      <SectionTwo className="section_two section"/>
      <SectionThree className="section_three section"/>
      <SectionFour className="section_four section"/>
      <SectionFive className="section_five section"/>
    </div>
  );
}

export default App;
