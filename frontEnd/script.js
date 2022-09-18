function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
}

function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
 };

 function logMessage(message) {
    console.log(message + "<br>");
 }

 let textarea = document.getElementById("edit-acercade")
 textarea.addEventListener('keyup' , (e) => {
    logMessage('key "${e.key}" released  [event: keuyp]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
 });
//
 function showfile(input) {
    let file =input.files[0];
    alert('File name: ${file.name}');
    alert('Last modified: ${file.lastModified}');

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
    } 
   
   /*function move() {
        var elem = document.getElementById("myBar");   
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 70) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
          }
        }
   }*/

      function move() {
        var elem = document.getElementById("myBar");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 70) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = width * 1  + '%';
          }
        }
      }

      function move1() {
        var elem = document.getElementById("myBar1");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 80) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label1").innerHTML = width * 1  + '%';
          }
        }
      }

      function move2() {
        var elem = document.getElementById("myBar2");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 80) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label2").innerHTML = width * 1  + '%';
          }
        }
      }

      function move3() {
        var elem = document.getElementById("myBar3");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 70) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label3").innerHTML = width * 1  + '%';
          }
        }
      }

      function move4() {
        var elem = document.getElementById("myBar4");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label4").innerHTML = width * 1  + '%';
          }
        }
      }

      function move5() {
        var elem = document.getElementById("myBar5");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label5").innerHTML = width * 1  + '%';
          }
        }
      }

      function move6() {
        var elem = document.getElementById("myBar6");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 85) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label6").innerHTML = width * 1  + '%';
          }
        }
      }

      function move7() {
        var elem = document.getElementById("myBar7");   
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 90) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label7").innerHTML = width * 1  + '%';
          }
        }
      }