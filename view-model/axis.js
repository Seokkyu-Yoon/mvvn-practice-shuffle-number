window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class Axis extends ViewModel {
    constructor (modelAxis) {
      super(modelAxis)
    }
    bind (viewAxis, modelRandomInt) {
      this.model.subscribe(({ axis }) => {
        viewAxis.set(axis)
        modelRandomInt.setAxis(axis)
      })
      viewAxis.onChange((e) => {
        const axis = e.target.value
        this.model.set(axis)
      })

      this.model.set(0)
    }
  }

  viewModel.Axis = Axis
})(window, window.viewModel)