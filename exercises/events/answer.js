class Events {
    constructor() {
      this.events = {};
    }
    // Register an event handler
    on(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName].push(callback);
      } else {
        this.events[eventName] = [callback];
      }
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
      if (this.events[eventName]) {
        for (let callback of this.events[eventName]) {
          callback();
        }
      }
    }
  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
      delete this.events[eventName];
    }
  }

  //2
  /*
on()
1. lookup the events object, see if the eventName exist as a key
  a. does not exist, 
    i. create a new entry with the eventName as a key
    ii. array of callback functions as the value

  b. exists
    i. add callback function to the array

trigger()
1. lookup the events object, see if the eventName exist as a key
  a. does not exist,
    i do nothing and return void
  b. exists
    i. iterate through the array of callbacks and run each function

off()
1. delete the key from the events object
*/

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    } 
    this.events[eventName].push(callback);   
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.events[eventName]){
      return;
    }

    const arr = this.events[eventName];
    //const retArr = [];
    
    for (let fn of arr) {
      // const response = fn();
      // retArr.push(response);
      fn();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]){
      delete this.events[eventName];
    }
  }
}