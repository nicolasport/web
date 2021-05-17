import './App.css';
import Sidebar from "./Components/Sidebar"
import NewsPage from "./Components/Pages/NewsPage"
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <div className="App">
        <div className="mainContainer">
          <Sidebar/>
          <NewsPage className="newsContent"/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
