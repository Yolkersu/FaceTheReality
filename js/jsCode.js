//Variables globales
var table = document.getElementById("plateau");
var sizeX = 20;
var sizeY = 11;


//Initialisation du tableau de base
for (i = 0; i < sizeY; i++)
{
    var  trNode = document.createElement("tr");
    trNode.id = "Line_" + i;
    for (j = 0; j < sizeX; j++)
    {
        var tdNode = document.createElement("td");
        tdNode.className = "dead";
        tdNode.id = j + "_" + i;
        trNode.appendChild(tdNode);
    }
    table.appendChild(trNode);
}