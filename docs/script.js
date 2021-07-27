let weightSlider = document.getElementById("weight-slider");

let fontWeight = document.getElementById("font");

weightSlider.oninput = function() {
  fontWeight.style.setProperty('font-weight',weightSlider.value.toString()) 
}
