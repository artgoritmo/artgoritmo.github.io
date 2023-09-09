
//Tipos: success, error, warning, info
function msgAlert(tipo, titu, msg){
    cuteAlert({
        type: tipo,
        title: titu,
        message: msg,
        buttonText: "Ok"
    })
}
//Tipos: success, error, warning, info
function msgToast(tipo, msg){
    cuteToast({
        type: tipo,
        message: msg,
        timer: 5000
    })
}

function msgQuestion(titu, msg){
    cuteAlert({
        type: "question",
        title: titu,
        message: msg,
        confirmText: "Ok",
        cancelText: "Cancelar"
    }).then((e)=>{
      if ( e == ("confirm")){
    } else {
      alert(":-(");
    }
    })
}

