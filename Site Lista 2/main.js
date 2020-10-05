document.querySelector("#read-button").addEventListener('click', function() {
	if(document.querySelector("#file-input").files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// first file selected by user
	var file = document.querySelector("#file-input").files[0];

	// perform validation on file type & size if required

	// read the file
	var reader = new FileReader();

	// file reading started
	reader.addEventListener('loadstart', function() {
	    console.log('File reading started');
	});

	// file reading finished successfully
	reader.addEventListener('load', function(e) {
	   // contents of file in variable     
	    var text = e.target.result;

      console.log(text);
      let nossoJson = JSON.parse(text);

      addPessoas(nossoJson);
	});

	// file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// file read progress 
	reader.addEventListener('progress', function(e) {
	    if(e.lengthComputable == true) {
	    	var percent_read = Math.floor((e.loaded/e.total)*100);
	    	console.log(percent_read + '% read');
	    }
	});

	// read as text file
	reader.readAsText(file);
});

// GAMBIARRA ANTES DISSO
var h = window.innerHeight;
var w = window.innerWidth;

h = h / 2 - 100;
w = w / 2 - 320;

var uri = document.documentURI;

var myJson = JSON.parse(
  '[{"cpf": "02233505670","donoConta": "Lucao"},{"cpf": "13125886678","donoConta": "Guga"}]'
);

setTimeout(() => {
  console.log(MyFilho);
}, 10000);
// console.log(MyFilho);
uri = location.search;

//document.getElementById("div1").style.marginLeft = w + "px";
//document.getElementById("div1").style.marginTop = h + "px";
var cont = 1;
var login = uri.substr(7, uri.length);
login = login.split("&")[0];

document.getElementById("title").innerHTML = "Contatos de " + login;

function novo() {
  var nomes = document.getElementsByName("nome");
  var tels = document.getElementsByName("tel");


  if (tels[tels.length-1].value == "" && nomes[nomes.length-1].value == "" ) {
    alert("Ambos campos vazios !");
    nomes[nomes.length - 1].focus;
  } else if (tels[tels.length-1].value == "") {
    alert("Telefone Vazio !");
    tels[tels.length-1].focus;
  } else if (nomes[nomes.length-1].value == "") {
    alert("Nome Vazio !");
    nomes[nomes.length - 1].focus;
  } else {
    
    var body = document.getElementsByClassName("cont");

    var inputn = document.createElement("input");
    inputn.setAttribute("type", "text");
    inputn.setAttribute("id", "nome");
    inputn.setAttribute("name", "nome");

    var row = document.createElement("div");
    row.setAttribute("class", "row cont");
    
    var divex = document.createElement("div");
    divex.setAttribute("id", cont);


    var inpfieldn = document.createElement("div");
    inpfieldn.setAttribute("class", "input-field col s5");

    var labeln = document.createElement("label");
    labeln.setAttribute("for", "nome");

    var labelt = document.createElement("label");
    labelt.setAttribute("for", "tel");
    labeln.innerHTML = "Nome";
    labelt.innerHTML = "Telefone";

    var inputt = document.createElement("input");
    inputt.setAttribute("type", "text");
    inputt.setAttribute("id", "tel");
    inputt.setAttribute("name", "tel");

    var inpfieldt = document.createElement("div");
    inpfieldt.setAttribute("class", "input-field col s4");

    var inpfieldex = document.createElement("div");
    inpfieldex.setAttribute("class", "input-field col s3");

    var buttonex = document.createElement("button");    
    buttonex.setAttribute("class", "btn waves-effect waves-light red");
    buttonex.setAttribute("type", "submit");
    buttonex.setAttribute("name", "ex");
    buttonex.setAttribute("id", cont);
    buttonex.setAttribute("onclick", "excluir("+cont+")");

    var icon = document.createElement("i");
    icon.setAttribute("class", "material-icons right");
    icon.innerHTML = "clear";

    

    buttonex.append(icon);
    inpfieldex.append(buttonex);

    
    
    inpfieldn.append(inputn);
    inpfieldn.append(labeln);

    inpfieldt.append(inputt);
    inpfieldt.append(labelt);
    
    divex.appendChild(inpfieldn);
    divex.appendChild(inpfieldt);
    divex.appendChild(inpfieldex);

    row.append(divex);

    body[body.length-1].appendChild(row);
    
    cont++;
  }
}

function addPessoas(nossoJson) {
  
  let body = document.getElementsByClassName("cont");
  for (let i = 0; i < nossoJson.length; i++) {
    let donoConta = document.createElement("label");
    donoConta.innerHTML = nossoJson[i].donoConta;

    let cpf = document.createElement("label");
    cpf.innerHTML = nossoJson[i].cpf;

    let hr = document.createElement("hr");
    
      body[body.length - 1].append(donoConta);
      body[body.length - 1].append(cpf);
      body[body.length - 1].append(hr);

      alert(nossoJson[0].donoConta);
  } 
}

function excluir(cont)
{
  var div = document.getElementById(cont);

  if(div)
  {
    div.remove();
  }
}



