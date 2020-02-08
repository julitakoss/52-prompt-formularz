let imie = prompt('Wpisz swoje imię');
let nazwisko = prompt('Wpisz swoje nazwisko');
let email = prompt ("Wpisz swój adres email");

let imie_h = document.getElementById('f_imie');
let nazwisko_h = document.getElementById('f_nazwisko');
let email_h = document.getElementById('f_mail');

imie_h.value = imie;
nazwisko_h.value = nazwisko;
email_h.value = email;

function walidacja() {
    if(imie_h.value == ''){
        alert('Błąd puste imię');
    }

    if(nazwisko_h.value == ''){
        alert('Błąd puste nazwisko');
    }

    if (email_h.value == '') {
    alert('Błąd pusty email');
    }
    
}