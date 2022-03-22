import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//Se importa bootstrap con componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/ItemListContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
         
        <img src={logo} className="App-logo" alt="logo" />
        
       </header>

       <ItemListContainer/>

    </div>

        
  );
}

export default App;
