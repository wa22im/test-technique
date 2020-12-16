class Joueur {
  id;
  position;
  constructor(id, position) {
    this.id = id;
    this.position = position;
  }
}
//cobinaison = 3;
// 15 joueur ,
var position = { AT: 4, CB: 6, MID: 5 };
const forwards = [];
const defffenders = [];
const milieu = [];
// remplir de tableau de joueurs
for (var i = 0; i < 15; i++) {
  if (position["AT"] != 0) {
    forwards.push(new Joueur(i, "AT"));
    position["AT"] -= 1;
  } else if (position["CB"] != 0) {
    defffenders.push(new Joueur(i, "CB"));
    position["CB"] -= 1;
  } else if (position["MID"] != 0) {
    milieu.push(new Joueur(i, "MID"));
    position["MID"] -= 1;
  }
}

//console.log(forwards);
//console.log(defffenders);
//console.log(milieu);
//console.log(position);

const arr = [1, 2, 3, 4, 5, 6];
//          1                            2                                   3
//12                   13                        14              23   24     25                 34       35      36
//123 124 125        134     135 136          145   146 ......

const combine = (arr, n, numberCombinaison) => {
  // arr = tableau de donne , /  n = lenght de tableau  /  , r = 11 //

  const data = [];
  faireCombine(arr, data, 0, n - 1, 0, numberCombinaison);
};

const faireCombine = (arr, data, start, end, index, numberCombinaison) => {
  // arr  = tableau de donne , data  = store data ,
  //data temporary  ,  store current combination
  //start = keeps the element of arr we are in
  // end = end of iteration , end arr
  // index =index for the element that we going to add to "data" 
  // r iteration / number of possible combination
  //console.log(data, arr, start, end, index, r);

  if (index == numberCombinaison) {
    console.log(data);
    return;
  }
  var i = start;

  while (i <= end && end - i + 1 >= numberCombinaison - index) {
    data[index] = arr[i];
    faireCombine(arr, data, i + 1, end, index + 1, numberCombinaison);
    i++;
  }
};

// fix the index  and implement  tree for potential combination  ,
//combine(arr, arr.length, 3);

// Formation 4-4-2
// combine(forwards, forwards.length, 2);

const formation = [
  [4, 4, 2],
  [3, 5, 2],
  [4, 3, 3],
];

for (var j = 0; j < formation.length; j++) {
  console.log(
    `****** Formation : ${formation[j][0]}-${formation[j][1]}-${formation[j][2]}`
  );
  console.log(
    " défense : combinaison possible",
    formation[j][0],
    "-",
    formation[j][1],
    "-",
    formation[j][2]
  );
  combine(defffenders, defffenders.length, formation[j][0]);
  console.log(
    " Milieu : combinaison possible",
    formation[j][0],
    "-",
    formation[j][1],
    "-",
    formation[j][2]
  );
  combine(milieu, milieu.length, formation[j][1]);
  console.log(
    " Attack : combinaison possible",
    formation[j][0],
    "-",
    formation[j][1],
    "-",
    formation[j][2]
  );
  combine(forwards, forwards.length, formation[j][2]);
  console.log(
    `******Fin Formation : ${formation[j][0]}-${formation[j][1]}-${formation[j][2]}`
  );
}
