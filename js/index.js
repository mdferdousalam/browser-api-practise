// praqctise 1
const se = () => {
  console.log("1");
  console.log("2");
  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 3500);
  console.log("5");
  console.log("6");
  console.log("7");
};

// se();

// practise 2

const practiseTwo = () => {
  sum = 200;
  const userinput = JSON.parse(prompt("Please enter your number"));
  alert(userinput + sum);
};

// practiseTwo();

// practise 3
console.log(document);

const conf = () => {
  const islocationshow = confirm("তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও");

  if (islocationshow === true) {
    console.log(document.location.href);
  }
};

conf();
