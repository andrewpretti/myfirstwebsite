const btn = document.getElementById('myBtn');
const input = document.getElementById('myInput');
const output = document.getElementById('greeting_string');
const answer = document.getElementById('answer');

answer.style.display = "none";
/*
// Legge il file txt
    fetch('text_table.txt')
      .then(response => response.text())
      .then(data => {
        // Trasforma il contenuto in una variabile JS
        const righe = data.trim().split('\n'); // array di righe
        const tabella = righe.map(riga => riga.split(',').map(nome => nome.trim()));
        // Ora puoi accedere alla variabile "tabella"
        console.log(tabella);
        // Esempio: tabella[0][0] = "Mario", tabella[0][1] = "Luigi"
      })
      .catch(error => console.error('Errore nel caricamento del file:', error));
*/

let tabella = [["Gerardo", "Andrea"],["Andrea", "Fabio"],["Fabio", "Susanna"],["Susanna", "Gianluca"],["Gianluca", "Anna"],["Anna", "Luigi"],["Luigi", "Gerardo"]];

// Click event
btn.addEventListener('click', () => {
    answer.style.display = "block";
    if (input.value.trim() === "") {
        output.textContent = "Please enter a valid name";
    }
    else {
        output.textContent = "Hey king, I am sorry but you are not part of this year's secret santa. Keep slaying tho!";
    }
    for (let i = 0; i <= 6; i++) {
        if (strcmp(input.value.toLowerCase(), tabella[i][0].toLowerCase()) === 0) { 
            output.textContent = "Hi " + tabella[i][0] + " you have to find a present for " + tabella[i][1] + "!";
        }
    }
    //output.textContent = nome_trovato;
    output.style.margin = "0";
});

function strcmp(str1, str2) {
    // Ensure inputs are strings
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new TypeError("Both arguments must be strings");
    }
    return str1.localeCompare(str2);
}


