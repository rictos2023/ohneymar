<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $candidate = $_POST["candidate"];
  
  // Salvar o voto em um banco de dados ou arquivo
  
  // Exemplo de contagem de votos
  $votes = [
    "candidato1" => 0,
    "candidato2" => 0,
    "candidato3" => 0
  ];
  
  // Contabilizar os votos
  $votes[$candidate]++;
  
  // Retornar a contagem atualizada
  echo "Candidato 1: " . $votes["candidato1"] . "<br>";
  echo "Candidato 2: " . $votes["candidato2"] . "<br>";
  echo "Candidato 3: " . $votes["candidato3"];
}
?>
