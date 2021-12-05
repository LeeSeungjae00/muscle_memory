import styles from './App.module.css';
import Login from './components/login/login';
import Main from './components/main/main';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className={styles.app}>
        <Routes>
          <Route exact path="/" element = {<Login/>}></Route>
          <Route exact path="/main" element = {<Main></Main>}></Route>
        </Routes>
    </div>
  );
}

export default App;
