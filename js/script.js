// Seleziono il bottone

const generateButton = document.getElementById('generate-ticket');

generateButton.addEventListener('click',
    function() {
        // Raccolgo i dati tramite il form
        const userName = document.getElementById("user-name").value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;

        // Calcolo il prezzo base del biglietto
        let ticketPrice = userKm * 0.21;

        // Applico gli sconti
        if( userAge === 'junior') {
            ticketPrice = ticketPrice * 80 / 100;
        } else if( userAge === 'senior') {
            ticketPrice = ticketPrice * 60 / 100;
        } 

        // Imposto i vari tipi di offerta
        let userOffer 

        if( userAge === 'regular') {
            userOffer = 'Biglietto Standard'
        } else if( userAge === 'junior') {
            userOffer = 'Biglietto Junior'
        } else if( userAge === 'senior') {
            userOffer = 'Biglietto Senior'
        }

        // Genero il numero della carrozza
        const carriageNumber = Math.floor(Math.random() * 10) + 1;

        // Genero il codice CP
        const cpCode = Math.floor(Math.random() * 10000) + 1;

        // Stampo nel DOM i valori precedentemente generati
        document.getElementById("user-name-selected").innerHTML = userName;

        document.getElementById("user-offer").innerHTML = userOffer;

        document.getElementById("user-carriage").innerHTML = carriageNumber;

        document.getElementById("user-cp-code").innerHTML = cpCode;

        document.getElementById("ticket-price").innerHTML = ticketPrice.toFixed(2);

        // Rendo visibile la sezione riguardante il biglietto
        document.getElementById("your-ticket").classList.add('active');
    }
)

