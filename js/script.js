/* 
Scrivere un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
MILESTONE 2:
Creiamo un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi via JS.
Possiamo usare varie tecniche  (template literals, innerHTML, appendecc)
MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1,
a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche (style , className, classList
*/

/*
1-scriviamo un ciclo for che stampi i numeri da 1 a 100 in console.
2-isoliamo i multipli di 3 e stampiamo al suo posto Fizz.
3-isoliamo i multipli di 5 e stampiamo al suo posto Buzz.
4-isoliamo i multipli sia di 3 che di 5 e stampiamo al loro posto FizzBuzz.
5-creiamo un contenitore nel DOM e importiamolo in JS.
6-creiamo una variabile d'appoggio per i dati da stampare in pagina.
7-riempiamo la pagina con gli elementi JS creati.
8-impostiamo uno stile ai vari elementi da noi creati inserendoli nel DOM usando JS(numeri,fizz,buzz,fizzbuzz).
*/

//6 - creiamo una variabile d'appoggio per i dati da stampare in pagina.



//1 - scriviamo un ciclo "for" che stampi i numeri da 1 a 100 in console.

for(let i = 1; i <=100; i++) {
    
//2 - isoliamo i multipli di 3 e stampiamo al suo posto fizz   

    if((i % 3 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    console.log('Fizz')
    }

//3 - isoliamo i multipli di 5 e stampiamo al suo posto Buzz.

    if((i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    console.log('Buzz')
    }  
    
//4 - isoliamo i multipli sia di 3 che di 5 e stampiamo al loro posto FizzBuzz.
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }

    else if ( !(i % 3 === 0 || i % 5 === 0) ) {
        console.log(i);
    }

}
//5 - creiamo un contenitore nel DOM e importiamolo in JS

const board = document.getElementById('board')

