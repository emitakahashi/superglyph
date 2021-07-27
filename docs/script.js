let weightSlider = document.getElementById("weight-slider");

let fontWeight = document.getElementById("font", "fonttwo");

weightSlider.oninput = function() {
  fontWeight.style.setProperty('font-weight',weightSlider.value.toString(10)) 
}




  var section1 = document.querySelector('.section1');
  var editable1 = document.querySelector('.editable1');
  var textareaHTML1 = document.querySelector('.playable-html1');
  var textareaCSS1 = document.querySelector('.playable-css1');
  var section2 = document.querySelector('.section2');
  var editable2 = document.querySelector('.editable2');
  var textareaHTML2 = document.querySelector('.playable-html2');
  var textareaCSS2 = document.querySelector('.playable-css2');
  var rangeinput = document.querySelector('.controls--slider');
  var reset = document.getElementById('reset');
  var htmlCode1 = textareaHTML1.value;
  var cssCode1 = textareaCSS1.value;
  var htmlCode2 = textareaHTML2.value;
  var cssCode2 = textareaCSS2.value;
  var rangeValue = rangeinput.value;

  function fillCode() {
    editable1.innerHTML = textareaCSS1.value;
    section1.innerHTML = textareaHTML1.value;
    editable2.innerHTML = textareaCSS2.value;
    section2.innerHTML = textareaHTML2.value;
    rangeinput.value = 88;
    document.querySelector('.demo2').style.setProperty('--text-axis', 88);
  }

  reset.addEventListener('click', function () {
    textareaHTML1.value = htmlCode1;
    textareaCSS1.value = cssCode1;
    textareaHTML2.value = htmlCode2;
    textareaCSS2.value = cssCode2;
    fillCode();
  });

  textareaHTML1.addEventListener('input', fillCode);
  textareaCSS1.addEventListener('input', fillCode);
  textareaHTML2.addEventListener('input', fillCode);
  textareaCSS2.addEventListener('input', fillCode);
  window.addEventListener('load', fillCode);

  // get the inputs
  const inputs = [].slice.call(document.querySelectorAll('.demo2 .controls input'));

  // listen for changes
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  function handleUpdate(e) {
    document.querySelector('.demo2').style.setProperty(`--${this.id}`, this.value);
  }