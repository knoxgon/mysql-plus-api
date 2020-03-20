//Our super small api call state
const ApiCounter = {
  totalApiCall: 0, //Normal init state

  visit() { //increase the number by 1 upon call
    this.totalApiCall++;
  },
  display() { //return the total call
    return this.totalApiCall;
  }
}

module.exports = ApiCounter;
