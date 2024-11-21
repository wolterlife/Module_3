// https://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str){
    let s = str.split("");
    
   for (let i=0;i<s.length;i++){
      s[i]=String.fromCharCode( s[i].charCodeAt()-3);
      let r = s[i].charCodeAt()
      if(r < 97 && r > 90|| r < 65 && r > 58) {
        s[i]= String.fromCharCode(r + 26);
     }    
      if (r < 57) {
       s[i]=String.fromCharCode(r + 3);
     }
   } 
   return(s.join(""));
}
     