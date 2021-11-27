const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const Apellido = document.getElementById('Apellido');
const Email = document.getElementById('Email');
const Telefono = document.getElementById('Telefono');
const Asunto = document.getElementById('Asunto');
const Mensaje = document.getElementById('Mensaje');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkImputs();
});

function checkImputs(){
    const NombreValue = Nombre.value.trim();
    const ApellidoValue = Apellido.value.trim();
    const EmailValue = Email.value.trim();
    const TelefonoValue = Telefono.value.trim();
    const AsuntoValue = AsuntoValue.value.trim();
    const MensajeValue = Mensaje.value.trim();
    
    if(NombreValue === ''){
        setErrorFor(Nombre, 'Ingrese su Nombre');
    }else{
        setSuccessFor(Nombre);
    }

    if(ApellidoValue === ''){
        setErrorFor(Apellido, 'Ingrese su Apellido');
    }else{
        setSuccessFor(Apellido);
    }

    if(EmailValue === ''){
        setErrorFor(Email, 'Ingrese su Email');
    }else{
        setSuccessFor(Email);
    }
    
    if(TelefonoValue === ''){
        setErrorFor(Telefono, 'Ingrese su Telefono');
    }else{
        setSuccessFor(Telefono);
    }

    if(AsuntoValue === ''){
        setErrorFor(Asunto, 'Ingrese el Asunto');
    }else{
        setSuccessFor(Asunto);
    }

    if(MensajeValue === ''){
        setErrorFor(Mensaje, 'Ingrese el Mensaje');
    }else{
        setSuccessFor(Mensaje);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success'
}