 let votos = ["C", "B", "C", "A", "C", "A", "C", "A","B","A","B","B","C","A","B","B"];

urna(votos);

function urna(votos) {
 
  let result
  let candidatoA = 0;
  let candidatoB = 0;
  let candidatoC = 0;

  for (let i = 0; votos.length >= i; i++) {
    if (votos[i] === "A") {
      candidatoA++;
    } else if (votos[i] === "B") {
      candidatoB++;
    } else if (votos[i] === "C") {
      candidatoC++;
    }
  }

  if (candidatoA > candidatoB && candidatoA > candidatoC) {
    result = "A"
  } else if (candidatoB > candidatoA && candidatoB > candidatoC) {
    result = "B"
  } else if (candidatoC > candidatoA && candidatoC > candidatoB) {
    result = "C"
  } else {
    result = "empate"
  }

  console.log("votos do Candidato A = " + candidatoA)
  console.log("votos do Candidato B = " + candidatoB)
  console.log("votos do Candidato C = " + candidatoC)

  if (result == "empate") {  
    if (candidatoA == candidatoB && candidatoA != candidatoC) {
      return result = "Empate entre o candidato A e candidato B"
    } else if (candidatoA == candidatoC && candidatoA != candidatoB) {
      return result = "Empate entre o candidato A e candidato C"
    } else if (candidatoB == candidatoC && candidatoB != candidatoA) {
      return result = "Empate entre o candidato B e candidato C"
    } else  {
     return result = "Empate entre os candidatos A, B e C"
    }  
  }  

  return "Vitoria do candidato " + result

}