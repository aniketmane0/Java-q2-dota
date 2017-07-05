
rowNumber=0;
abilityRowNumber=0;
var abilities= new Array;
var heroAbilities= new Array;
var heroes= new Array;
var detailsOfAbilities = new Array;

var a = document.getElementById("createAbility")
a.addEventListener("click", function(event){
  event.preventDefault()
});

function ability(name,manaCost,coolDown){
  this.name=name;
  this.manaCost=manaCost;
  this.coolDown=coolDown;
}

function hero(name,type,baseMana,heroAbilities){
  this.name=name;
  this.type=type;
  this.baseMana=baseMana;
  this.heroAbilities=heroAbilities;
}

function addHero(){
  var hero_name=document.getElementById("hero").value;
  var hero_type=document.getElementById("type").value;
  var hero_baseMana= document.getElementById("baseMana").value;


  var counter = 0;
  var chk_arr =  document.getElementsByName("checkBoxes");
  var chklength = chk_arr.length;
  for(k=0;k< chklength;k++)
     {
       if(chk_arr[k].checked == true)
         counter += 1;
     }
     document.getElementById("display").innerHTML = counter;
    heroes.push(new hero(hero_name,hero_type,hero_baseMana))
}


function addAbility(){
    var ability_name= document.getElementById("inputAbility").value;
    var ability_mana= document.getElementById("inputManaCost").value;
    var ability_cool= document.getElementById("inputCoolDown").value;
    detailsOfAbilities.push(new ability(ability_name,ability_mana,ability_cool));
    abilities.push(ability_name);

    var table= documnent.getElementById("abilityList");
    var row = table.insertRow(rowNumber+1);
    row.id=rowNumber+1;

    var cell= row.insertCell(0);
    cell.innerHTML=ability_name;

    var checkBox= document.createElement('input');
    checkBox.type='checkbox';
    checkBox.name="name";
    checkBox.id="abilityButton"+abilityRowNumber;
    checkBox.value="value";

    var label= document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(ability_name));
    checkBox.appendChild(label);

    checkBoxes.appendChild(checkBox);
    checkBoxes.appendChild(label);
    rowNumber++;
    abilityRowNumber++;



}
