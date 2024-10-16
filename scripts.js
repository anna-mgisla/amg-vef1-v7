/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean}`true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  //nef ekki strengur null
  if (!isString(str)) {
    return ' ';
  }
  const words = split(str, ' ');

   let shortest = ' '; 
  for (const word of words) {
    if (word.length > shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}
console.assert(longest ('er að testa') === 'testa', 'longest: skilar lengsta orði í streng');
//NOTAÐI ChatGPT TIL AÐ HJÁLPA VIÐ ÞETTA!

function shortest(str) {
  if (!isString(str)) {
    return ' ';
  }
  const words = split(str, ' ');

   let longest = words [0]; 
  for (const word of words) {
    if (word.length < longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.assert(shortest ('er að testa') === 'er', 'shortest: skilar stysta orði í streng');
//NOTAÐI ChatGPT TIL AÐ HJÁLPA VIÐ ÞETTA!


function reverse(str) {
  if (isString(str)) {
  const split = str.split('');
  const reversed = split.reverse();
  return reversed.join('');
  }
  return null;
}
console.assert(reverse ('halló') === 'óllah', 'reverse: snýr við einföldum streng' );
console.assert(reverse (false) === null, 'reverse: ef ekki strengur skila null');


// "halló" > false
// "hah" > true
//null / false / 0 > false
// "" ??? > false
// "Hah" ?? > true
function palindrome(str) {
if (isString(str) && str !== '' ) {
  const reversed = reverse (str)
  return str.toLowerCase() === reversed.toLowerCase()
   
} 
  return false;
}
console.assert(palindrome ('halló') === false, 'palidrome: strengur, réttur strengur');
console.assert(palindrome ('hah') === true, 'palidrome: strengur, réttur strengur');
console.assert(palindrome ('') === false, 'palidrome: réttur strengur');


  // Útfæra


function vowels(str) {
  if (isString(str)) {
    vowelArr = [];
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i).toLowerCase();
      if (VOWELS.includes(char)) {
        vowelArr.push(char);
      }
    }
    return vowelArr.join(' , ');
  }
  return null;
}
console.assert(vowels ('halló') === 'a , ó', 'vowels: skilar sérhljóðum í streng');
//NOTAÐI ChatGPT TIL AÐ HJÁPA

function consonants(str) {
  if (isString(str)) {
    constonantArr = [];
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i).toLowerCase();
      if (CONSONANTS.includes(char)) {
        constonantArr.push(char);
      }
    }
    return constonantArr.join(' , ');
  }
  return null;
}
console.assert(consonants('halló') === 'h , l , l', 'consonants: skilar samhljóðum í streng ');
//NOTAÐI ChatGPT TIL AÐ HJÁLPA

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Halló! Hér getur þú skrifað streng og fengið upplýsinhar um hann');
  let result = prompt('Vinsamlegast færðu mér streng');
  if (isString(result)) {
    const lengsta = longest(result);
    const stysta = shortest(result);
    const rev = reverse(result);
    const pal = palindrome(result);
    const ser = vowels(result);
    const sam = consonants(result);
    
    let uttak = `Upplýsingar um strenginn þinn "${result}":\n`;
    uttak += `Lengsta orðið er: ${lengsta}\n`;
    uttak += `Stysta orðið er: ${stysta}\n`;
    uttak += `Hérna er það snúið við: ${rev}\n`;
    uttak += `Er það eins aftur á bak?: ${pal}\n`;
    uttak += `Sérhljóðarnir í strengnum eru: ${ser}\n`;
    uttak += `og samhljóðarnir eru: ${sam}\n`;

    alert(uttak);
    return {
      lengsta,
      stysta,
      rev,
      pal,
      ser,
      sam};
    }
    return '';
  }
 //NOTAÐI ChatGPT TIL AÐ HJÁLPA