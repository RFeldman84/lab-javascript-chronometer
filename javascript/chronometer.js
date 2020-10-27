class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    //this.milliIntervalId = 0;
  // this.milliCurrentTime = 0;
  // this.milliseconds = 0;
  }
  startClick(callback) { 
    setInterval(()=> this.currentTime++
     , 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
    
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {
    return "  "
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
   return this.currentTime=0
  }
  splitClick() {
    return '00:00'
  }
}



