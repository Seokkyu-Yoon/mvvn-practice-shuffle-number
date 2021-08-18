window.view = window.view || {};
(($w, view) => {
  const { View } = $w
  class Shuffle extends View {
    constructor() {
      super()
      this.el = $w.document.querySelector('#shuffle')
      this.el.addEventListener('click', this.emitClick.bind(this))
    }
    onClick (callback) {
      this.on('click', callback)
    }
    offClick (callback) {
      this.off('click', callback)
    }
    emitClick (e) {
      this.emit('click', e)
    }
  }

  view.Shuffle = Shuffle
})(window, window.view)