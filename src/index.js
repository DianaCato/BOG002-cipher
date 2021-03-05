import cipher from "./cipher.js";


//ocultar secciones del DOM (Solo queda visible la vista inicial)

document.getElementById('teacherView').style.display = 'none';  
document.getElementById('studentView').style.display = 'none';
document.getElementById('answer').style.display = 'none';

//botones para acceder a las vistas.

var buttonStudent= document.getElementById("student");  
var buttonTeacher= document.getElementById("teacher");  
var buttonBack= document.getElementById("back");        


buttonStudent.addEventListener("click",viewStudent);   //Botón para ingresar a la vista del estudiante
buttonTeacher.addEventListener("click",viewTeacher);   // Botón para ingresar a la vista del profesor
buttonBack.addEventListener("click",viewPrincipal);    // Bontón para regresar a la vista inicial

//funciones para acceder a las vistas.
function viewTeacher()
{
  document.getElementById('teacherView').style.display = 'block';
  document.getElementById('answer').style.display = 'block';
  document.getElementById('principal').style.display = 'none';
}

function viewStudent()
{
  document.getElementById('studentView').style.display = 'block';
  document.getElementById('principal').style.display = 'none';
  document.getElementById('answer').style.display = 'block';
}

function viewPrincipal()
{
  document.getElementById('principal').style.display = 'flex';
  document.getElementById('teacherView').style.display = 'none';
  document.getElementById('studentView').style.display = 'none';
  document.getElementById('answer').style.display = 'none';
}

//función para imprimir el quiz creado por el profesor en la vista del estudiante


var buttonQuiz= document.getElementById('send');

buttonQuiz.addEventListener("click",sendQuiz);

function sendQuiz()
{
var quiz= document.getElementById('quizSend').value;   
localStorage.setItem('quizSend',quiz);
window.location="index.html";                     

}

var pasteQuiz= document.getElementById('question');
pasteQuiz.innerHTML=localStorage.getItem("quizSend");


// funcion codificar 

var buttonCode=document.getElementById('code');
    buttonCode.addEventListener('click',newCipher);

 function newCipher(){

   let codeStudent=document.getElementById('codeOfStudent').value;   //se toma el número que ingresa cada estudiante
   let offSet = parseInt (codeStudent);                              
   var newAnswer = document.getElementById('answerOfStudet').value;  // se accede a la respuesta de cada estudiante
   let string = newAnswer.toUpperCase();                               //se pasan todos los caracteres a mayúsculas
 
  
   var newTr = document.createElement("tr");                          // Crear nodo de tipo Element para insertar respuestas en la tabla
   
   var codeNew = document.createTextNode(codeStudent + " - ");              // Crear nodo de tipo Text con los valores para llamar la función
   var answerNew = document.createTextNode(cipher.encode (offSet,string));

   newTr.appendChild (codeNew);                                  // Añadir el nodo con las respuestas como hijo del nodo tipo Element
   newTr.appendChild (answerNew);

   document.getElementById ('allAnswer').appendChild(newTr);     //añadir el nodo Element como hijo a la tabla
 
 } 
 

// funcion para decodificar las respuestas de los estudiantes (solo tiene acceso el profesor)

 var buttonDecode= document.getElementById("decodeButton");          //Botón para decodificar las respuestas
     buttonDecode.addEventListener ("click", cipherDecode);

function cipherDecode(){
  let codeStudentTwo= document.getElementById('codeTwo').value;
  let offSet = parseInt (codeStudentTwo); 
  let answerPaste =document.getElementById('answerTwoStudent').value; 
  let string = answerPaste.toUpperCase(); 
  
  confirm (cipher.decode (offSet,string));  
   
}