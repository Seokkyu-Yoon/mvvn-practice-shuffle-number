window.view = window.view || {};
(($w, view) => {
  const { View } = $w

  class Dt extends View {
    constructor() {
      super()
      this.el = $w.document.querySelector('#dt')
      this.el.addEventListener('change', this.emitChange.bind(this))
    }
    set (dt) {
      this.el.value = dt
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

  view.Dt = Dt
})(window, window.view)