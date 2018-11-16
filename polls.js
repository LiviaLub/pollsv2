


var container = document.querySelector("#results-container");


function loadDoc() {

    var requestURL = 'json-data.json'
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var questionsText = this.responseText;
      var questions = JSON.parse(questionsText);


      showResults(questions);

    }
  };
  xhttp.open("GET", requestURL, true);

  xhttp.send();
}

function showResults(jsonObj){


    var questionArray = jsonObj.question;
    for (var i = 0; i < questionArray.length; i++) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var list = document.createElement('ul');

        h3.textContent = questionArray[i].title;

        var choicesArray = questionArray[i].choices;
        for (var j = 0; j < choicesArray.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = choicesArray[j];
            list.appendChild(listItem);


        }
        div.appendChild(h3);
        div.appendChild(list);
        container.appendChild(div);

    }
}




















