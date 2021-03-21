import Component from '../../core/Component.js';
import { $, API, showSnackbar } from '../../utils/index.js';
import { loginTemplate } from './template.js';
import { SNACKBAR_MESSAGE } from '../../constants/index.js';
import Navigation from '../navigation/Navigation.js';

export default class Login extends Component {
  constructor({ changeTemplate }) {
    super();
    this.changeTemplate = changeTemplate;
  }

  bindEvent() {
    $('#login-form').addEventListener(
      'submit',
      this.handleLoginForm.bind(this),
    );
    $('#signup-button').addEventListener(
      'click',
      this.handleSingupButton.bind(this),
    );
  }

  async handleLoginForm(e) {
    e.preventDefault();

    const email = e.target.elements['login-email'].value;
    const password = e.target.elements['login-password'].value;

    const response = await API.login({ email, password });

    if (!response.ok) {
      showSnackbar(SNACKBAR_MESSAGE.LOGIN_FAILURE);
      return;
    }

    showSnackbar(SNACKBAR_MESSAGE.LOGIN_SUCCESS);
    this.changeTemplate('/');
    history.pushState({ url: '/' }, null, '/');
    Navigation.changeSelectedButtonColor();
  }

  handleSingupButton(e) {
    e.preventDefault();

    const url = e.target.closest('.navigation-link').getAttribute('href');
    this.changeTemplate(url);
    history.pushState({ url }, null, url);
  }

  render() {
    $('main').innerHTML = loginTemplate();
  }

  load() {
    this.render();
    this.bindEvent();
  }
}
