//ocultar secciones del DOM.

document.getElementById('teacherView').style.display = 'none';
document.getElementById('studentView').style.display = 'none';
document.getElementById('answer').style.display = 'none';


//botones para acceder a las vistas.
var buttonStudent= document.getElementById("student");
var buttonTeacher= document.getElementById("teacher");
var buttonBack= document.getElementById("back");


buttonStudent.addEventListener("click",viewStudent);
buttonTeacher.addEventListener("click",viewTeacher);
buttonBack.addEventListener("click",viewPrincipal);

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

//función para crear quiz


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



//función para insertar respuestas y código del estudiantes


var myAnswer = []; //Array con las respuestas de cada estudiante
var myCode= []; //Array con el código de cada estudiante

var theAnswer = document.getElementById ("answerOfStudet");   //cada respuesta insertada
var theCode = document.getElementById ("codeOfStudent"); //cada código insertado

var sendAnswer = document.getElementById ("code");
sendAnswer.addEventListener('click', pasteAnswer);

 function pasteAnswer () {
   let newAnswer = theAnswer.value;
   myAnswer.push(newAnswer);
   let newCode = theCode.value;
   myCode.push (newCode);

document.getElementById("viewCode").innerHTML =  myCode.join("<br>");
 
document.getElementById("viewAnswer").innerHTML =myAnswer.join ("<br>")
 
 }