window.view = window.view || {};
(($w, view) => {
  const { View } = $w
  class RandomInt extends View {
    constructor () {
      super()
      this.el = $w.document.querySelector('#random-int')
    }
    set (randomInt) {
      this.el.innerHTML = randomInt
    }
  }

  view.RandomInt = RandomInt
})(window, window.view)