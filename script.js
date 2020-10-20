"use strict";

let name = "Nicole Dreon";
let age = 35;
let birthday = "August 28";
let detroitGC = true;
let lifeEvents = [
  "I was born in Texas.",
  "I attended Adrian College",
  "I lived in Colorado for eight years.",
  "I a front-end student at Grand Circus.",
];
if (detroitGC === true) {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Detroit, Michigan." +
      " I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
} else {
  console.log(
    "My name is " +
      name +
      " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++,
      console.log(
        `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
      );
    break;
  }
}
