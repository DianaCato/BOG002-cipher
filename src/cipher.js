const cipher = {

  encode (offSet,string)
  {
    if (typeof offSet === 'number'  && typeof string === 'string')
    {

      let firstAnswer=[];                                          //array con las respuestas sin codificar
      let answerInCesar=[];
      
      for (let i=0;i<string.length;i++)
        {
           if (string.charCodeAt (i) <= 64 || string.charCodeAt (i) >= 91)    //Si se insertar valores diferentes a letras, no serán codificados
           {
              answerInCesar.push(string.charAt (i));
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

      for (let i=0;i<string.length;i++)
      {          
        if (string.charCodeAt (i) <= 64 || string.charCodeAt (i) > 90)    //Si se insertar valores diferentes a letras, no serán codificados
        {
          answerDecode.push(string.charAt (i));
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
