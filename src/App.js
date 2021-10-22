import './App.css';
import Entries from "./components/Entries/Entries";
import NewEntry from "./components/NewEntry/NewEntry";


export default function App() {
  return (
    <div className="App">
        <NewEntry />
        <Entries />
    </div>
  );
}

