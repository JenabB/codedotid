const myName = "yogi";

const splitToArray = myName.split("");

console.log(splitToArray);

const randomChar =
  myName.charAt(Math.random() * myName.length) +
  myName.charAt(Math.random() * myName.length) +
  myName.charAt(Math.random() * myName.length) +
  myName.charAt(Math.random() * myName.length);

console.log(randomChar);
