import './index.scss';
import MyPlugin from './myPlugin.jQuery';

const myPlugin = new MyPlugin();
const myNewPlugin = new MyPlugin('It\'s Ok');
myPlugin.sayHi();
myNewPlugin.sayHi();