function clickCube() {
    console.log(1);
    console.log(getRandomInt(225));
    var red = getRandomInt(225);
    var green = getRandomInt(225);
    var blue = getRandomInt(225);
    var deg = getRandomInt(360);
    console.log("clickCube", red ,green ,blue, deg);


var stringBoxShadow = " 0 0 5px rgba("+ red +", "+ green +", "+ blue +", 1)," +
       "0 0 25px rgb("+ red +", "+ green +", "+ blue +")," +
       "0 0 50px rgb("+ red +", "+ green +", "+ blue +")," +
       "0 0 100px rgba"+ red +", "+ green +", "+ blue +", 0.75)," +
       "0 0 200px rgba("+ red +", "+ green +", "+ blue +", 0.5)," +
       "0 0 300px rgba("+ red +", "+ green +", "+ blue +", 0.25);" ;


document.getElementById("cube").style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
document.getElementById("cube").style.boxShadow = stringBoxShadow;
document.getElementById("container").style.transform = "rotate(" + + "deg)";

}
function getRandomInt (max) {
    return Math.floor (Math.random () * max); }   