$("#multiRange").slider({
  range: true,
  orientation: "horizontal",
  min: 0,
  max: 10000,
  values: [0, 10000],
  step: 100,

  slide: function (event, ui) {
    if (ui.values[0] == ui.values[1]) {
      return false;
    }
    $("#minPrice").val(ui.values[0]);
    $("#maxPrice").val(ui.values[1]);
  }
});