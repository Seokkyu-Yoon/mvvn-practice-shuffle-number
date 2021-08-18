window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class RandomInt extends Model {
    constructor () {
      super()
      this.setDt(1)
      this.setAxis(0)
      this.shuffle()
    }
    setAxis (axis) {
      this.axis = axis
    }
    setDt (dt) {
      this.dt = dt
    }
    setRandomInt (randomInt) {
      this.randomInt = randomInt
      this.notifyObservers({ randomInt: this.randomInt })
    }
    shuffle() {
      const randomInt = Math.round(Math.random() * this.dt) + this.axis
      this.setRandomInt(randomInt)
    }
    get() {
      return this.randomInt
    }
  }

  model.RandomInt = RandomInt
})(window, window.model)
