/*

Turtle has a position (x,y) and a bearing (NORTH, EAST, SOUTH, WEST)

Y increases when going NORTH
X increases when going EAST

Commands:
A = Advance
R = turn right
L = turn left

Input:
3 7 NORTH ARRALA 

Output:
3 8 N
3 8 E
3 8 S
3 7 S
3 7 E
4 7 E
====> 4 7 EAST


*/
//déclarer quand même 1 ou 2 variables globales dont j'ai absolument besoin

//version easy avec un input hardcodé 
let donnees = '3 7 NORTH ARRALA';
console.log("at the begining of its adventure, here are the indications your tortoise had: "+ donnees);
//parser l'input et en récupérer la position de base et les déplacements
let usefullArray = donnees.split(" ");
//console.log(usefullArray);
let itineraire = usefullArray[3].split("")
//console.log(itineraire);
// faire le job
for (let i=0; i < itineraire.length; i++){
    if (usefullArray[2] === 'NORTH') {
      
        if (itineraire[i] === 'A'){
            let yPos = parseInt(usefullArray[1], 10);
            //console.log(usefullArray[1], typeof yPos);
            yPos +=1;
            usefullArray[1] = yPos
        }else if (itineraire[i] === 'L') {
            usefullArray[2] = 'WEST';
        }else if (itineraire[i] === 'R') {
            usefullArray[2] = 'EAST';
        }
        //console.log("after step " + (i+1) + ", it looks like this: " + usefullArray);
    }else if (usefullArray[2] === 'SOUTH') {
    
        if (itineraire[i] === 'A'){
            let yPos = parseInt(usefullArray[1], 10);
            //console.log(usefullArray[1], typeof yPos);
            yPos -=1;
            usefullArray[1] = yPos
        }else if (itineraire[i] === 'L') {
            usefullArray[2] = 'EAST';
        }else if (itineraire[i] === 'R') {
            usefullArray[2] = 'WEST';
        }
        //console.log("after step " + (i+1) + ", it looks like this: " + usefullArray);
    }else if (usefullArray[2] === 'EAST') {
        
        if (itineraire[i] === 'A'){
            let xPos = parseInt(usefullArray[0], 10);
            //console.log(usefullArray[0], typeof xPos);
            xPos +=1;
            usefullArray[0] = xPos
        }else if (itineraire[i] === 'L') {
            usefullArray[2] = 'NORTH';
        }else if (itineraire[i] === 'R') {
            usefullArray[2] = 'SOUTH';
        }
    
        //console.log("after step " + (i+1) + ", it looks like this: " + usefullArray);
    }else if (usefullArray[2] === 'WEST') {
        if (itineraire[i] === 'A'){
            let xPos = parseInt(usefullArray[0], 10);
            //console.log(usefullArray[0], typeof xPos);
            xPos -=1;
            usefullArray[0] = xPos
        }else if (itineraire[i] === 'L') {
            usefullArray[2] = 'SOUTH';
        }else if (itineraire[i] === 'R') {
            usefullArray[2] = 'NORTH';
        }
    
        //console.log("after step " + (i+1) + ", it looks like this: " + usefullArray);
    }
}
//indiquer le résultat
console.log("Your stupid creature should now be at " + usefullArray.slice(0,2) + " and heading " + usefullArray[2]);
