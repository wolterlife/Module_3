// https://www.codewars.com/kata/5735956413c2054a680009ec/

function rndSymbols (arr, number) {
    if (arr) {
      const res = [];
      const rnd = Math.floor(Math.random() * arr.length);
      for (let i = 0; i < number; i++) res.push(arr[rnd]);
      return res.join('');
    };
    
    if (number) {
      const res = [];
      for (let i = 0; i < number; i++) res.push(Math.floor(Math.random()*10));
      return res.join('');
    }
  }
  
  function rndCode(){
    const letters = "ABCDEFGHIJKLM";
    const symbols = "~!@#$%^&*";
    return rndSymbols(letters, 2) + rndSymbols(null, 4) + rndSymbols(symbols, 2);
  }
  