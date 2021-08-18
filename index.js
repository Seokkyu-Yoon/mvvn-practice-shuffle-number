(($w, view, model, viewModel) => {
  $w.onload = () => {
    const modelAxis = new model.Axis()
    const modelDt = new model.Dt()
    const modelRandomInt = new model.RandomInt()

    const viewAxis = new view.Axis()
    const viewDt = new view.Dt()
    const viewRandomInt = new view.RandomInt()
    const viewShuffle = new view.Shuffle()

    const viewModelAxis = new viewModel.Axis(modelAxis)
    const viewModelDt = new viewModel.Dt(modelDt)
    const viewModelRandomInt = new viewModel.RandomInt(modelRandomInt)

    viewModelAxis.bind(viewAxis, modelRandomInt)
    viewModelDt.bind(viewDt, modelRandomInt)
    viewModelRandomInt.bind(viewRandomInt, viewShuffle)
  }
})(window, window.view, window.model, window.viewModel)
