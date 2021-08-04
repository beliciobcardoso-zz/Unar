 0
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 let votos = ["C", "B", "A", "C", "B", "A", "C", "B", "A", "C", "A","B"];

urna(votos);

function urna(votos) {
  // Escreva seu código aqui
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

  console.log("votos do Candidato A = " + candid 0
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  atoA)
  console.log("votos do Candidato B = " +  0
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  )
  console.log("votos do Candidato C = " + candidatoC)

  if (result == "empate") {
    if (candidatoA == candidatoB) {
      console.log("Empate entre o candidato A e candidato B")
    } else if (candidatoA == candidatoC) {
      console.log("Empate entre o candidato A e candidato C")
    } else if (candidatoB == candidatoC) {
      console.log("Empate entre o candidato B e candidato C")
    } else  {
      console.log("Empate entre o candidato A, candidato B e candidato C")
    }

  }  

  return result

}