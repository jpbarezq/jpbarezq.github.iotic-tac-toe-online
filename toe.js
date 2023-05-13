//hacer un bucle que seleccione los elementos del class grid
//getelementby class name 
//luego hacer el for
//onclick

const gridItems = document.getElementsByClassName("grid-item");
let turno = "X"
let ganador = null;
const ganancias = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //Diagonales
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].onclick = (event)=> {
    event.target.innerHTML = turno;
    event.target.onclick =(event)=>{
    };

    for (let linea of ganancias) {
        if (gridItems[linea[0]].innerHTML === turno &&
            gridItems[linea[1]].innerHTML === turno &&
            gridItems[linea[2]].innerHTML === turno) {
          ganador = turno;
    }
//Avisa de quien es el del turno (Integración del setTimeout)
    const turner = document.querySelector('.turner');
    turner.style.opacity = 1;
        setTimeout(() => {
            turner.style.opacity = 0;
        }, 1000);
  }
 //Sigue hacer una funcion que cheque en linea si es true or false de ganado o no
    if (ganador) {
        alert(`¡${ganador} GANA!`);
        location.reload();
//Para cuando no se pueda ganar
    } else if (
        [...gridItems].every((item) => item.innerHTML !== "") &&
        ganador === null
      ) {
        alert("¡EMPATE!");
        location.reload();
      }

    turno = turno === "X"? "O" : "X";
    document.getElementById("counter").innerHTML = turno;
    

  };
}
