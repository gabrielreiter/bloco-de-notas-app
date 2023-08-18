import toastr from "toastr"
import 'toastr/build/toastr.min'
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "3000000",
  "hideDuration": "100000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeout"
}

export function showMessage(title, message, type){
  toastr[type](message, title)
}

export function errMessage(message){
  showMessage('Erro', message, 'error')
}

export function successMessage(message){
  showMessage('Sucesso', message, 'success')
}

export function alertMessage(message){
  showMessage('Alerta', message, 'alert')
}