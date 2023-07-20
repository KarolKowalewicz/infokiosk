import * as ReactDOM from 'react-dom';
import App from './components/app'
import './styles.css'
import MyBrowserRouter from './browser-router';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <MyBrowserRouter>
    <App />
  </MyBrowserRouter>,
  document.getElementById('root') as HTMLElement
);