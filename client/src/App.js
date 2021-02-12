import Header from './PageComponents/Header'
import './App.css';
import Footer from './PageComponents/Footer';
import ServerCalc from './Projects/WaitStaffCalc/ServerCalc';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='app-container'>
     <ServerCalc />
     </div>
     <Footer />
    </div>
  );
}

export default App;
