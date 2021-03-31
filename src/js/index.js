// import '../css/index.css';
import App from './components/App.js';
import Router from './core/Router.js';

window.addEventListener('DOMContentLoaded', () => {
  const App = new App();
  const Router = new Router(App);
  const popStateEvent = new Event('popstate');
  window.dispatchEvent(popStateEvent);
});
