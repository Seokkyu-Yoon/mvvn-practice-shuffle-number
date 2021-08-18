window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Axis extends View {
    constructor() {
      super()
      this.el = $w.document.querySelector('#axis')
      this.el.addEventListener('change', this.emitChange.bind(this))
    }
    set(axis) {
      this.el.value = axis
    }
    onChange (callback) {
      this.on('change', callback)
    }
    offChange (callback) {
      this.off('change', callback)
    }
    emitChange (e) {
      this.emit('change', e)
    }
  }

  view.Axis = Axis
})(window, window.view)