import './App.css';
import Login from './component/login/Login';
import Registration from './component/registration/Registration';
// import Table from './component/table/Table'
// import Dummy from './component/login/dummy'

function App() {
  return (
    <div className="App">
      <Login/>
      <Registration/>
      {/* <Table /> */}
      {/* <Dummy /> */}
    </div>
  );
}

export default App;
