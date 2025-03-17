const rangeContainer =document.querySelector('.range-container');
const inputRange =rangeContainer.querySelector('input[type="range"]');
const lengthCounter =rangeContainer.querySelector('h1');
const generateBtn =document.querySelector('.generator form button');
const passwordHeading =document.querySelector('.password-container h1');

const handleChange= () => {
    lengthCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLength) => {
    let result ='';
    let characters ='';

    //obtener las opciones que estèn seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowecase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    //Creamos un conjunto de carcateres a usar en la contraseña
    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUV';
    if(useLowecase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!@#~€¬+*';

    //si no selecciona ninguna opcion
    if(characters ===''){
        passwordHeading.textContent = 'Selecciona al menos una opcion';
        return '';
    }

    //Generador de contraseña aleatoria
    for (let i=0; i<passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return result;
    console.log(result)
};



//funcion que imprima la contraseña
const PrintPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if (password){
        passwordHeading.textContent= password; //Muestra la contraseña generada
    }
};

//Configuracion de eventos

inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);