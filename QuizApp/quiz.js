
// ---------------------Home Page--------------------------------


let userName = "";
function enter() {
  document.querySelector("home").style.display = "none";

}
function enter() {
  userName = document.getElementById("name").value.trim();
  if (!userName) {
    alert("Please enter your name properly ");
    return;
  }

  document.querySelector(".logo ").style.display = "none";

}


// -----------------------------------Middle Page--------------------------

const subjects = {
  html: [
    { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Multi Language', 'Hyperlink and Text Markup Language', 'Hyper Transfer Markup Language'], correct: 0 },
    { question: 'Which tag is used to create an ordered list?', options: ['<ol>', '<ul>', '<li>', '<dl>'], correct: 0 },
    { question: 'What is the purpose of the alt attribute in images?', options: ['To provide alternative text for screen readers', 'To specify the alignment of the image', 'To add a title to the image', 'To define the size of the image'], correct: 0 },
    { question: 'Which element is used to create a hyperlink?', options: ['<a>', '<link>', '<h1>', '<p>'], correct: 0 },
    { question: 'The year in which HTML was created?', options: ['1993', '1997', '1992', '1972'], correct: 0 },
    { question: 'Fundamental HTML block is known as?', options: ['Html body', 'Html tag', 'Html attribute', 'Html element'], correct: 1 },
    { question: 'A part from <b> tag,what other tag makes text bold?', options: ['<fat>', '<black>', '<strong>', '<emp>'], correct: 2 },
    { question: 'What should be the first tag in any HTML document?', options: ['<head>', '<title>', '<document>', '<html>'], correct: 3 },
    { question: 'What tag is used to display picture in a HTML page?', options: ['<a>', '<picture>', '<img>', '<src>'], correct: 2 },
    { question: 'HTML web page can be read and rendered by ?', options: ['Web Browser', 'compiler', 'server', 'interpreter'], correct: 0 }
  ],
  css: [
    { question: 'What does CSS stand for?', options: ['Counter Strike: Source', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'], correct: 1 },
    { question: 'Which property is used to change the background color?', options: ['color', 'background-color', 'bgcolor', 'background'], correct: 1 },
    { question: 'What does the acronym CSS stand for?', options: ['Counter Strike: Source', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'], correct: 1 },
    { question: 'Which CSS property is used to control the text size?', options: ['font-size', 'text-style', 'text-size', 'font-style'], correct: 0 },
    { question: 'In how many ways can CSS be return in?', options: ['1', '2', '3', '4'], correct: 2 },
    { question: 'Which HTML tag is used to declare internal CSS?', options: ['<style>', '<iink>', '<script>', '<none of above>'], correct: 0 },
    { question: 'How can we select an element with specific class in CSS?', options: ['#', '.', '^', '/'], correct: 1 },
    { question: 'How can we write comments in CSS?', options: ['/**/', 'All of the above', '//', '#'], correct: 0 },
    { question: 'Which of the following are valid CSS position property values?', options: ['static', 'relative', 'fixed', 'All of the above'], correct: 3 },
    { question: 'Which of the following properties is uesd to aling text in CSS?', options: ['text-aling', 'text-alingments', 'text', 'text-position'], correct: 1 }

  ],
  java: [
    { question: 'Which of the following is not a valid data type in Java?', options: ['int', 'float', 'char', 'string'], correct: 3 },
    { question: 'What is the output of the following code snippet?\n\n```\nint x = 5;\nint y = x++;\nSystem.out.println(y);\n```', options: ['5', '6', '0', '1'], correct: 0 },
    { question: 'Which keyword is used for inheritance in Java?', options: ['extends', 'implements', 'inherit', 'interface'], correct: 0 },
    { question: 'What is the main purpose of the Java Virtual Machine (JVM)?', options: ['To convert Java code into machine code', 'To provide a runtime environment for Java programs', 'To compile Java code', 'To debug Java programs'], correct: 1 },
    { question: 'Among the following which contains date information?', options: ['java.sql timestamp', 'java.io.time', 'java.io.timespam', 'java.sql.time'], correct: 2 },
    { question: 'The total JDBC components in java software provides is?', options: ['2', '3', '4', '5'], correct: 1 },
    { question: 'The total JDBC drives available is?', options: ['1', '7', '4', '5'], correct: 2 },
    { question: 'TCP,FTP,SMTP,Telnet are example of?', options: ['ip address', 'Protocol', 'Socket', 'MAC address'], correct: 1 },
    { question: 'Total TCP/IP ports reserved for specific protocol is?', options: ['1024', '2048', '512', '32'], correct: 0 },
    { question: 'What is the total numbers of bits in IP address?', options: ['4', '8', '6', '32'], correct: 3 },
  ],
  javascript: [
    { question: 'Which keyword is used to declare a variable in JavaScript?', options: ['var', 'let', 'const', 'variable'], correct: 0 },
    { question: 'What is the result of the expression 5 + "3" in JavaScript?', options: ['53', '8', '35', 'undefined'], correct: 0 },
    { question: 'Which built-in method removes the last element from an array and returns that element?', options: ['last()', 'pop()', 'push()', 'removeLast()'], correct: 1 },
    { question: 'What is the purpose of the JavaScript `setTimeout` function?', options: ['To pause the execution of the program', 'To execute a function after a specified time interval', 'To set a timer for the program', 'To set a timeout for user interactions'], correct: 1 },
    { question: 'How can be datatype be declare to be a constant type?', options: ['let', 'var', 'constatnt', 'const'], correct: 3 },
    { question: 'What keyword is used to check whether a given property is valid or not?', options: ['is', 'in', 'exists', 'lies'], correct: 0 },
    { question: 'When an operators value is NULL ,the typof returend by the unary operator is?', options: ['boolean', 'undefined', 'object', 'integer'], correct: 2 },
    { question: 'Which function is used to serialize an object into a JSON string in JavaScript?', options: ['stringify()', 'parse()', 'convert()', 'None of the above'], correct: 0 },
    { question: 'Which of the following are closures in JavaScript?', options: ['variables', 'functions', 'objects', 'class'], correct: 1 },
    { question: 'Which of the following is not JavaScript framnework?', options: ['Node', 'Vae', 'React', 'Cassandra'], correct: 3 },
  ]
};

let currentSubject = '';
let currentQuestion = 0;
let score = 0;
let attemptedQuestions = 0;
let timer;
let startTime, endTime;

function showSubjects() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
}

function startQuiz(subject) {
  currentSubject = subject;
  currentQuestion = 0;
  score = 0;
  startTime = new Date();
  attemptedQuestions = 0;
  showQuiz();
  showQuestion();

}

function showQuiz() {
  document.getElementById('subject-list').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const currentQuiz = subjects[currentSubject][currentQuestion];

  questionElement.textContent = currentQuiz.question;
  optionsContainer.innerHTML = '';

  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuiz = subjects[currentSubject][currentQuestion];
  attemptedQuestions++;
  if (selectedIndex === currentQuiz.correct) {
    score++;
  }
  if (currentQuestion < subjects[currentSubject].length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    endQuiz();
  }
}
// --------------------------------------------Result Page---------------------------------

function endQuiz() {

  endTime = new Date();
  const totalTime = Math.floor((endTime - startTime) / 1000); // in seconds
  const totalQuestions = subjects[currentSubject].length;
  const correctQuestions = score;
  const wrongQuestions = attemptedQuestions - correctQuestions;
  const scorePercentage = (score / totalQuestions) * 100;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById("result-name").textContent = `Name of participaint: ${userName}`;
  document.getElementById('total-questions').textContent = `Total Questions: ${totalQuestions}`;
  document.getElementById("total-time").textContent = `total-time:${totalTime}s`;
  document.getElementById('correct-questions').textContent = `Correct Answers: ${correctQuestions}`;
  document.getElementById('wrong-questions').textContent = `Wrong Answers: ${wrongQuestions}`;
  document.getElementById('attempted-questions').textContent = `Questions Attempted: ${attemptedQuestions}`;
  document.getElementById('score').textContent = `Score: ${scorePercentage.toFixed(2)}%`;
}

function startQuizAgain() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('subject-list').style.display = 'block';
}

function goToHomePage() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('home').style.display = 'block';
}
