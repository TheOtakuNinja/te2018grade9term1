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
 let forest4 = READLINE.question(`Well ya won a fight nice but there's like 10 people left and you see 5 of them in a group but they start fighting. DO you shoot from afar(1) or wait til the fight is over then shoot(2)`);
  if (forest4 == 1){
  console.log(`Well you are far with a sniper so you kept on shooting but ya know snipers are really really loud and you couldn't hear the steps behind you and well you can guess the rest. U DED SON`);
}else if (forest4 == 2){
  console.log(`Ya that's that's smart but aye lucky you, ${player.name} heard sum BIG BOI walk near you and you shot him so it became a 1v1 but the other guy doesn't know you're there and so you shot him. OWO wut dis U won nice you get air`);
   }
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
console.log("You run a way, as you ran away more than half of the people died so there's 10 left including you but you was running for your life not thinking you stepped in a trap and died instantly or so they thought as you woke up when there was 5 people left.");
 let fight2 = READLINE.question(`He took all yo stuff so you can only do two things, look you weapons(1) or look for food, water, etc(2)`);
 if (fight2 == 1){
  console.log(`well that is reasonable and so you left to get weapons on dead people`);
  let fight3 = READLINE.question(`Well you found a long sword not sure if thet's good but that's all you found so do you wanna look for the last people or hide(1) and wait(2)`);
  if (fight3 == 1){
  console.log(`well that sounds like an ok idea, so you went out to find someone annnnnnnnnnnnnnnnd you got shot. U R DED`);
}else if (fight3 == 3){
  console.log(`that's smart I like it and so you waited a really really long time and killed the last guy because no one wanted to walk between a really creepy cave but he had to so nice going. U IS ZA WINNER`);
}
} else if (fight2 == 2){
  console.log(`as you look for supplies you found a gun nice going buddy but like someone is behind you because he followed the trail of mushrooms you dropped. U R DEDDY DED DED `);
}
 }
}
