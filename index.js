var open = false;


function operationOpen(){

  if(!open){
    if(document.getElementById("name").value == ""){
      alert("fill the Field name!");
    }
    else if(document.getElementById("dpname").value == ""){
      alert("fill the Field crush!");
    }
  else{
    showResult();
    open = true;

  }
    
  }
}

function operationClose(){
  if(open){
    resetResult();
    open = false;
  }
}

function showResult(){
    var result = document.createElement("div");
    result.id = "result";
    result.style.display="inline-block";
    result.style.position = "absolute";
    result.style.height = "400px";
    result.style.width = "400px";
    result.style.left = "800px";
    result.style.backgroundColor = "#ffffff";
    result.style.top = "100px";
    result.style.borderRadius = "30px";

    

    var flames = document.createElement("div");
    flames.style.display = "flex";
    flames.style.justifyContent = "center";
    flames.style.alignItems = "center";
    
   

    var name1= document.getElementById("name").value.toLowerCase();
    var name2= document.getElementById("dpname").value.toLowerCase();

    var sibImage = document.createElement("img");
    sibImage.src= "sibling.jpg";
    sibImage.style.height="300px";
    sibImage.style.width = "150px";
    sibImage.style.position="relative";
    sibImage.style.top="60px";

    var enemyImage = document.createElement("img");
    enemyImage.src ="enemy.jpg";
    enemyImage.style.height="300px";
    enemyImage.style.width = "250px";
    enemyImage.style.position="relative";
    enemyImage.style.top="60px";

    var marriageImage = document.createElement("img");
    marriageImage.src ="marriage.jpg";
    marriageImage.style.height="300px";
    marriageImage.style.width = "250px";
    marriageImage.style.position="relative";
    marriageImage.style.top="60px";

    var affectImage = document.createElement("img");
    affectImage.src ="affection.jpg";
    affectImage.style.height="300px";
    affectImage.style.width = "250px";
    affectImage.style.position="relative";
    affectImage.style.top="60px";

    var loveImage = document.createElement("img");
    loveImage.src ="love.jpg";
    loveImage.style.height="330px";
    loveImage.style.width = "250px";
    loveImage.style.position="relative";
    loveImage.style.bottom="0px";

    var friendsImage = document.createElement("img");
    friendsImage.src ="friends.jpg";
    friendsImage.style.height="300px";
    friendsImage.style.width = "250px";
    friendsImage.style.position="relative";
    friendsImage.style.top="60px";




    for(var i=0;i < name1.length;i++){
      for(var j=0;j < name2.length;j++){
        if(name1.charAt(i) == name2.charAt(j)){
          name1 = name1.replace(name1.charAt(i),"0");
          name2 = name2.replace(name2.charAt(j),"0");
        }
      }
    }
    var length1 = 0;
    var length2 = 0;

    for(var i=0;i < name1.length;i++){
      if((name1.charAt(i)) >= "a" && (name1.charAt(i)) <= "z"){
        length1++;
      }
    }
    for(var i=0;i < name2.length;i++){
      if((name2.charAt(i)) >= "a" && (name2.charAt(i)) <= "z"){
        length2++;
      }
    }

    var cal=(length1)+(length2);
    console.log(cal);

    if(cal == 1 || cal == 19 || cal == 27 || cal == 29){
      
      flames.appendChild(sibImage);
    }
    else if(cal == 2 || cal == 4 || cal == 7 || cal == 9 || cal == 20 || cal == 22 || cal == 24 || cal == 25){
      flames.appendChild(enemyImage);
    }
    else if(cal == 6 || cal == 11 || cal == 15 || cal == 26){
      flames.appendChild(marriageImage);
    }
    else if(cal == 8 || cal == 12 || cal == 13 || cal == 17 || cal == 28 || cal == 30){
      flames.appendChild(affectImage);
    }
    else if(cal == 10){
      flames.appendChild(loveImage);
    }
    else if(cal == 3 || cal == 5 || cal == 14 || cal == 16 || cal == 18 || cal == 21 || cal == 23){
      flames.appendChild(friendsImage);
    }
    else if(cal == 0){
      flames.appendChild(friendsImage);
    }
   


    result.appendChild(flames);
    document.getElementById("finalcontainer").appendChild(result);

  }

function resetResult(){
    document.getElementById("result").remove();
    document.getElementById("name").value="";
    document.getElementById("dpname").value="";
  }