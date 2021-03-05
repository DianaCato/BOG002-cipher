const cipher = {

  encode (offSet,string)
  {
    if (typeof offSet === 'number'  && typeof string === 'string')
    {

      let firstAnswer=[];                                          //array con las respuestas sin codificar
      let answerInCesar=[];
      const arrayNumbers =['7','8','9','0','Ó','Á','É','Í','Ú','Ñ','1','2','3','4','5','6'];

      
      for (let i=0;i<string.length;i++)
        {
           if (string.charCodeAt (i) <= 64 || string.charCodeAt (i) >= 91)    //Si se insertar valores como 'Ñ', letras con tilde o números, se codifican empleando un array
           {
            let positionInitial =arrayNumbers.indexOf(string.charAt (i)); 

            if (positionInitial >= 0) {
              let positionFinal = (positionInitial + (offSet % arrayNumbers.length))% arrayNumbers.length;
              answerInCesar.push (arrayNumbers[positionFinal]);
              
            }
            else 
            {
              answerInCesar.push(string.charAt(i));                             //Si se insertar valores diferentes a letras o números, no serán codificados
            }
           }
           
           else 
           {
              firstAnswer [i]=(string.charCodeAt(i)- 65 + offSet)%26+ 65;
              answerInCesar.push(String.fromCharCode(firstAnswer[i]));  
           }
        }
         return answerInCesar.join('');
    } 
     else 
    {
      throw new TypeError;
    }           
  },
    
  decode (offSet,string)
  {
    if (typeof offSet === 'number'  && typeof string === 'string') 
    {
      let answerCipher=[];
      let answerDecode=[];
      const arrayNumbersDecode =['7','8','9','0','Ó','Á','É','Í','Ú','Ñ','1','2','3','4','5','6'];


      for (let i=0;i<string.length;i++)
      {          
        if (string.charCodeAt (i) <= 64 || string.charCodeAt (i) > 90)    //Si se insertar valores diferentes a letras o números, no serán codificados
        {         
          let positionInitialDecode =arrayNumbersDecode.indexOf(string.charAt (i)); 

          if (positionInitialDecode >= 0) {
            let positionFinal = positionInitialDecode - (offSet % arrayNumbersDecode.length);

            if (positionFinal < 0){
             let positionFinalTwo = arrayNumbersDecode.length + positionFinal;                   // si la posición da un número negativo, se resta el numero de elementos del array
              answerDecode.push (arrayNumbersDecode[positionFinalTwo]); 

            }else {
              answerDecode.push (arrayNumbersDecode[positionFinal]);                       //Si se insertan valores como números, vocales con tilde o la 'Ñ', se decodifican con un array    

            }
                  
          }
          else 
          {
            answerDecode.push(string.charAt (i));                           
          } 
        } 
        else 
        {
          answerCipher [i]=(string.charCodeAt(i)-65-offSet)%26;

          if (answerCipher[i]<= -1) 
          {
             answerCipher[i]= (91 + answerCipher[i]);
          } 
          else 
          {
            answerCipher[i]=answerCipher[i]+ 65;
          }
        
          answerDecode.push(String.fromCharCode(answerCipher[i]));   
        }    
      }
        return answerDecode.join('');
    } 
    else 
    {
      throw new TypeError;
    }
  }    
};

export default cipher;
