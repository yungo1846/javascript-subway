import Component from '../core/Component.js';
import Navigation from './navigation/Navigation.js';
import Sections from './sections/Sections.js';
import Stations from './stations/Stations.js';
import Lines from './lines/Lines.js';
import Login from './login/Login.js';
import Signup from './signup/Signup.js';
import Main from './main/Main.js';

export default class App extends Component {
  constructor() {
    super();
  }

  mountComponent() {
    this.Navigation = new Navigation();
    this.Stations = new Stations();
    this.Lines = new Lines();
    this.Sections = new Sections();
    this.Login = new Login();
    this.Signup = new Signup();
    this.Main = new Main();
  }
}
