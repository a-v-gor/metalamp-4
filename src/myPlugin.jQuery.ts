import jQueryFactory from 'jquery';
const $ = jQueryFactory(window, true);

export default class MyPlugin {
  greetingString: string = "Hello! This is myPlugin project.";

  constructor(newString?: string) {
    if (newString !== undefined) {
      this.greetingString = newString;
    }
    
  }

  sayHi() {
    console.log(this.greetingString);
    console.log($);
  }
}

