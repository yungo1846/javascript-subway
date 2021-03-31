import App from '../components/App.js';
import { LOCAL_STORAGE_KEY, MESSAGE } from '../constants/index.js';
import { getLocalStorageItem } from '../utils/index.js';
import { serviceAPI } from '../service/index.js';

export default class Router {
  constructor(App) {
    this.App = App;
    this.bindEvent();
  }

  bindEvent() {
    window.addEventListener('popstate', this.changeTemplate.bind(this));
  }

  async changeTemplate() {
    const pathName = window.location.pathname;
    const router = {
      '/': (token = '') => this.App.Main.load(token),
      '/stations': (token = '') => this.App.Stations.load(token),
      '/lines': (token = '') => this.App.Lines.load(token),
      '/sections': (token = '') => this.App.Sections.load(token),
      '/login': (token = '') => this.App.Login.load(token),
      '/signup': (token = '') => this.App.Signup.load(token),
    };
    const token = getLocalStorageItem({ key: LOCAL_STORAGE_KEY.TOKEN });
    const isLoggedIn = await serviceAPI.isValidToken(token);

    if (!isLoggedIn) {
      console.error(MESSAGE.REQUIRE_LOGIN);
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
      this.App.Navigation.render();
      router[pathName]?.();

      return;
    }

    this.App.Navigation.render(token);
    await router[pathName]?.(token);
  }
}
