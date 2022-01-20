import Data from "./Data";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <section className='main'>
        <div className='wrapper'>
          <div className='col'>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          </div>
        </div>
      </section>

    </div>
    
  );
}

export default App;
