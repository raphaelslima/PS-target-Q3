const data = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

// Item 1
/* 

Nas instruções da questão 2 para definir qual é o menor valor não se pediu para desconsiderar 
os dias com faturamento zerados, porém em meu algoritmo optei por excluir os dias com faturamento zerado, 
pois em um cenário real uma função que considerasse dias que não teve faturamente,  
que possívelmente são dias não úteis, dificilmente iria atender ao problema do cliente.

Caso se deseje considerar, basta excluir o if da linha 139

*/

function calcSmallerBilling(data) {
  let smallerNumber = data[0].valor;
  for (let i = 0; i < data.length; i++) {
    if (data[i].valor > 0) {
      smallerNumber =
        smallerNumber <= data[i].valor ? smallerNumber : data[i].valor;
    }
  }

  return smallerNumber.toFixed(2);
}

const smallerNumber = `O menor valor é R$ ${calcSmallerBilling(data)}`;

// Item 2

function calcbiggerBilling(data) {
  let biggerNumber = data[0].valor;
  for (let i = 0; i < data.length; i++) {
    biggerNumber = biggerNumber >= data[i].valor ? biggerNumber : data[i].valor;
  }

  return biggerNumber.toFixed(2);
}

const biggerNumber = `O maior valor é R$ ${calcbiggerBilling(data)}`;

// Item 3

function calcAverageBilling(data) {
  const sum = data
    .reduce((acc, curr) => (acc = acc + parseFloat(curr.valor)), 0)
    .toFixed(2);

  let daysWork = 0;
  data.map((day) => {
    day.valor > 0 ? daysWork++ : daysWork;
  });

  return (sum / daysWork).toFixed(2);
}

const avarage = `A média é R$ ${calcAverageBilling(data)}`;

var smallerValue = document.getElementById("smallerValue");
var biggerValue = document.getElementById("biggerValue");
var avarageValue = document.getElementById("avarageValue");

smallerValue.innerHTML = smallerNumber;
biggerValue.innerHTML = biggerNumber;
avarageValue.innerHTML = avarage;
