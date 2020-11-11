// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti  

var squadre = [
  {
    "nome": 'Real Madrid',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Arsenal',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Milan',
    "punti": 0,
    "falli": 0
  },
  {
    "nome": 'Inter',
    "punti": 0,
    "falli": 0
  }
];

// aggiungo random
for (var i = 0; i < squadre.length; i++) {
  for (var key in squadre[i]) {
    squadre[i].punti = Math.floor(Math.random() * 10) + 1;
    squadre[i].falli = Math.floor(Math.random() * 10) + 1;
  }
  
};
console.log(squadre);