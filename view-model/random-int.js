window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class RandomInt extends ViewModel {
    constructor (modelRandomInt) {
      super(modelRandomInt)
    }
    bind (viewRandomInt, viewShuffle) {
      this.model.subscribe(({ randomInt }) => {
        viewRandomInt.set(randomInt)
      })
      viewShuffle.onClick(() => {
        this.model.shuffle()
      })

      this.model.shuffle()
    }
  }

  viewModel.RandomInt = RandomInt
})(window, window.viewModel)