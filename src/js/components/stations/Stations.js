import Component from '../../core/Component.js';
import { stationsTemplate } from './template.js';
import { $ } from '../../utils/index.js';

export default class Stations extends Component {
  constructor() {
    super();
  }

  render() {
    $('main').innerHTML = stationsTemplate();
  }
}
