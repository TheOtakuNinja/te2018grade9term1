const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "Lamp",
};

console.log("*** WELCOME TO THE GAMEY GAMES ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in a closed of room.`);
console.log(`${player.name} hears what sounds like voice coming from outside.But you don't have time to think as the room opened and you see many other people in a circle as the time counted down you see a forest behind you and boxes with weapons in the middle`);
let forest = READLINE.question("Go to the forest(type f) or go to the middle(type m)");
if( forest== "f" || forest == "forest") {
  player.courage++;
  console.log(`${player.name} prepares to run to the forest and ran away as the time went down to zero`);
  let forest2 = READLINE.question("As you ran you saw a small bag, do you get the bag(1) or run towards the forest(2)");
 if (forest2 == 2) {
  console.log(`Forget dat bag ${player.name} U don't need dat even tho it might have something that can shoot you oh wait U just got shot from behind. U DED SON`);
} else if (forest2 == 1) {
  console.log("U ran for the bag and OWO U got a knife but you saw a memester");
  let forest3 = READLINE.question("so like ya wanna fight them or something but like ya gonna die so like I'ma just revoke that question so here's the new one. U fight and win do you spare him(1) or kill'em(2)");
  if (forest3 == 1) {
    console.log(`So dis man gonna try to kill you and you let him live ${player.name} I'ma be real my dude/girl/it/baby/robot/ghost/dog/whatever dat's kinda dumb tbh but aye you chose dat and while you're reading this the guy stabbed you so like sorry I guess but not at the same time cause you would've died cause there's a gun in the bag`);
} else if (forest3 == 2){
  console.log(`Welp ya killed him nice cause like that's kinda the game well ya looted the bag and got a sniper nice? Not sure if ya want dat because it's loud but up to ya`);
 let forest4 = READLINE.question(``)
  }
 }
} else if (forest == "m" || forest == "middle") {
  player.intellect++;
  console.log(`${player.name} decides to run towards the middle and grabs an axe`);
  player.weapon =="axe";

let fight = READLINE.question("you find others runing towards you, do you stand and fight(1) or run(2)");
if (fight == 1) {
console.log("There was too many and one of them had a bow and shot you in knee so you couldn't be an adventurer and couldn't run. YOU DED SON");
}else if (fight == 2) {
console.log("You run a way, as you ran away more than half of the people died so there's 10 left including you but you was running for your life not thinking you stepped in a trap and died instantly. YOU DED SON");
 }
}
