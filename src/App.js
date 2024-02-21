import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <>
    <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} haircolor={"Black"}></PersonCard>
    <PersonCard lastName={"John"} firstName={"Smith"} age={88} haircolor={"Brown"}></PersonCard>
    <PersonCard lastName={"Millard"} firstName={"Filmore"} age={50} haircolor={"Brown"}></PersonCard>
    <PersonCard lastName={"Maria"} firstName={"Smith"} age={62} haircolor={"Brown"}></PersonCard>
    </>
  );
}

export default App;
