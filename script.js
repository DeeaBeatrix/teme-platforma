// TEMA 3.1.6

// Ex 1
// Returnează un boolean dacă un număr este divizibil cu 10
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

let functionTrueFalse = (trueFalse) => {

  if (trueFalse % 10 === 0) {
    return true;
  }
  return false;
};

console.log(functionTrueFalse(200));
console.log(functionTrueFalse(25));

// Ex 2
// Scrieți o funcție numită tellFortune care:
// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

let tellFortune = (p4, p3, p2, p1) => {
  console.log(`Vei fi un ${p1} în ${p2}, căsătorit cu ${p3} și vei avea ${p4} copii.`);
};

console.log(tellFortune(3, 'Emanuel', 'Italia', 'Programator'));

// Ex 3
// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei 
// zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

let zileSaptamana = () => {
  switch (new Date().getDay()) {
    case 1:
    day = "Luni";
    break;
    case 2:
    day = "Marti";
    break;
    case 3:
      day = "Miercuri";
    break;
    case 4:
    day = "Joi";
    break;
    case 5:
    day = "Vineri";
    break;
    case 6:
    day = "Sambata";
    break;
    case 7:
    day = "Duminica";
    break;
  }
};

console.log(zileSaptamana(6));

// TEMA 3.2.7

// Ex 1
// Tipăriți toate numerele pare de la 0 la 10
// Încercați să rezolvați această problemă cât mai eficient posibil. 
// Luați în considerare utilizarea buclelor care vă vor permite să tastați cele mai puține 
// caractere / comenzi (se acceptă orice abordare bazată pe bucle). 
// Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați 
// într-un mod în care să funcționeze indiferent de limita setată (până la 10 sau chiar până la 10.000).

const numerePare = (numere) => {
let n = [];

  for (let i=0; i<numere.length; i++) {
    if (numere[i] %2 === 0) {
      n.push(numere[i]);
    }
  }
  return n;
};

let numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerePare(numere));

for (let i=0; i <=10; i++) {
  if (i %2 ===0) {
    console.log(i);
  }
}

// Ex 2
// Calculați suma numerelor dintr-un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă 
// cu câteva seturi diferite pentru a vă verifica soluția. 
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

const sumaNumere = (numbers) => {
let suma = 0;

  for (let i=0; i<numbers.length;i++) {
  suma += numbers[i];
  }
return suma;
};

console.log(sumaNumere([2,3,4,5,6]));

// Ex 3
// Creați o funcție care inversează un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă 
// cu câteva seturi diferite pentru a vă verifica soluția. 
// De asemenea, puteți încerca să utilizați matrice de lungimi diferite. 
// Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna 
// un șir nou de numere cu elementele primului în ordine inversă.

const sirNumere = (numerele) => {
  return numerele.reverse();
};

console.log(sirNumere([2, 4, 7, 1, 20]));

// Ex 4
// Returnează numărul de vocale dintr-un șir de caractere (string)
// Creați o funcție care va returna un număr întreg al numărului de vocale
// găsite într-un șir. Aceasta este o modalitate excelentă de a practica 
// determinarea caracteristicilor unui set de date.

const countVowels = (str) => {

  let vowels = 'aeiouAEIOU';
 
  let vowelCount = 0;

  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return vowelCount;
}

// TEMA 3.3.7

// Ex 1
// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), 
// porții (un număr) și ingrediente (o șir de elemente - array). 
// Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate 
// informațiile obiectului după crearea acestuia.

const creeazaRetetaPreferata = (titlu, portii, ingrediente) => {
  
  const reteta = {
      titlu: titlu,
      portii: portii,
      ingrediente: ingrediente
  };

  console.log("Titlu: " + reteta.titlu);
  console.log("Porții: " + reteta.portii);
  console.log("Ingrediente: " + reteta.ingrediente.join(", "));
}

creeazaRetetaPreferata(
  "Spaghetti Carbonara", 
  4, 
  ["Spaghetti", "Ouă", "Pancetta", "Parmezan", "Piper negru"]
);


// Ex 2
// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, 
// iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

const eliminaProprietate = (obj, proprietateDeEliminat) => {

  let noulObj = {};

  for (let proprietate in obj) {
      if (proprietate !== proprietateDeEliminat) {
          noulObj[proprietate] = obj[proprietate];
      }
  }

  return noulObj;
}


// Ex 3
// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți 
// precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și 
// esteCitită (un boolean care indică dacă ați citit-o).
// Scrieți o funcție care:
// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: 
// “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că 
// ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un 
// mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un 
// mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.


const carti = [
  { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
  { titlu: "Mândrie și prejudecată", autor: "Jane Austen", esteCitita: false },
  { titlu: "1984", autor: "George Orwell", esteCitita: true },
  { titlu: "Cronicile din Narnia", autor: "C.S. Lewis", esteCitita: false }
];


const afiseazaCarti = (carti) => {
  carti.forEach(carte => {
      const mesaj = `"${carte.titlu}" de ${carte.autor}`;
      if (carte.esteCitita) {
          console.log(`Ai citit deja ${mesaj}`);
      } else {
          console.log(`Trebuie să citești ${mesaj}`);
      }
  });
}

afiseazaCarti(carti);
