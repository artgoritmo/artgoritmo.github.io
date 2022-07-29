<!DOCTYPE html>
<html lang="en" >

<head>

  <meta charset="UTF-8">
  

  <title>CodePen - Cómo personalizar un input file</title>
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  
<style>
/**********File Inputs**********/
.container-input {
    text-align: center;
    background: #282828;
    border-top: 5px solid #c39f77;
    padding: 50px 0;
    border-radius: 6px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
}

.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.inputfile + label {
    max-width: 80%;
    font-size: 1.25rem;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 0.625rem 1.25rem;
}

.inputfile + label svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    margin-right: 0.25em;
}

.iborrainputfile {
	font-size:16px; 
	font-weight:normal;
	font-family: 'Lato';
}



/* style 2 */

.inputfile-2 + label {
    color: #c39f77;
    border: 2px solid currentColor;
}

.inputfile-2:focus + label,
.inputfile-2.has-focus + label,
.inputfile-2 + label:hover {
    color: #9f8465;
}


@media screen and (max-width: 50em) {
	.inputfile-7 + label strong {
		display: block;
	}
}
/**********End File Inputs**********/
</style>

 


</head>

<body translate="no" >
 


<!--ESTILO 2-->
<div class="container-input">
    <input type="file" name="file-2" id="file" class="inputfile inputfile-2" data-multiple-caption="{count} archivos seleccionados"  accept=".jpg,.png" />
    <label for="file">
        
    <span class="iborrainputfile">Seleccionar archivo</span>
    </label>
    </div>


<button id="btnUploadFile">Guardar</button>  




  
      <script id="rendered-js" >

$(document).ready(function () {


$('#btnUploadFile').on('click', function () {

    var data = new FormData();

    var files = $("#file").get(0).files;

    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("UploadedImage", files[0]);
    }

    $.ajax({
        type: "POST",
        url: "https://aetechnologies.somee.com/AE/Admin/requestnoti.ashx?Comando=ArchivosBlapeer",
        contentType: false,
        processData: false,
        data: data
}).done(function (Response) {
     console.log("Bien: " + Response);
    })
.fail(function (Response) {
        console.log("Nada: " + Response);
    });

});


});



'use strict';

;(function (document, window, index)
{
  var inputs = document.querySelectorAll('.inputfile');
  Array.prototype.forEach.call(inputs, function (input)
  {
    var label = input.nextElementSibling,
    labelVal = label.innerHTML;

    input.addEventListener('change', function (e)
    {
      var fileName = '';
      if (this.files && this.files.length > 1)
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else

      fileName = e.target.value.split('\\').pop();

      if (fileName)

      label.querySelector('span').innerHTML = fileName;else

      label.innerHTML = labelVal;
    });
  });
})(document, window, 0);
//# sourceURL=pen.js
    </script>

  

</body>

</html>
 





