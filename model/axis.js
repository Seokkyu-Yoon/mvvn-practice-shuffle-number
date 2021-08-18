window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class Axis extends Model {
    constructor() {
      super()
      this.set(0)
    }
    set (axis) {
      this.axis = Number(axis)
      this.notifyObservers({ axis: this.axis })
    }
    get () {
      return this.axis
    }
  }

  model.Axis = Axis
})(window, window.model)
