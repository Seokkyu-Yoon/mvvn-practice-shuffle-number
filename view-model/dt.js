window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class Dt extends ViewModel {
    constructor (modelDt) {
      super(modelDt)
    }
    bind (viewDt, modelRandomInt) {
      this.model.subscribe(({ dt }) => {
        viewDt.set(dt)
        modelRandomInt.setDt(dt)
      })
      viewDt.onChange((e) => {
        const dt = e.target.value
        this.model.set(dt)
      })

      this.model.set(1)
    }
  }

  viewModel.Dt = Dt
})(window, window.viewModel)