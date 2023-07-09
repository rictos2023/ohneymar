function submitVote() {
  var selectedCandidate = document.querySelector('input[name="candidate"]:checked');
  
  if (selectedCandidate) {
    var candidateName = selectedCandidate.value;
    
    // Enviar voto para o servidor PHP
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "submit_vote.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("voteCount").innerHTML = this.responseText;
      }
    };
    xhttp.send("candidate=" + candidateName);
  } else {
    alert("Por favor, selecione um candidato.");
  }
}
