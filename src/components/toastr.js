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
  "hideDuration": 100000,
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "slideDown"
}

export function showMessage(title, message, type, hideDuration){
  toastr[type](message, title, hideDuration)
}

export function errMessage(message, duration){
  showMessage('Erro', message, 'error', duration)
}

export function successMessage(message, duration){
  showMessage('Sucesso', message, 'success', duration)
}

export function warningMessage(message, duration){
  showMessage('Alerta', message, 'warning', duration)
}