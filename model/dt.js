window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class Dt extends Model {
    constructor() {
      super()
      this.set(1)
    }
    set (dt) {
      this.dt = Number(dt)
      this.notifyObservers({ dt: this.dt })
    }
    get () {
      return this.dt
    }
  }

  model.Dt = Dt
})(window, window.model)
