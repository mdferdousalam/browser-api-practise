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

// conf();

// practise 4

/*
Cookies are small piese of text sent by the website to it's visitors.it helped the site to remember the choice of visitors in that website
Some cookies can be stored in clients browser but most of them let the user to customize coockies.
cookies also used for security purpous. This allows users to authenticate themselves. prevent fraud activities.
some cookies used to prevent spam. some cookies expired in 6 months or 13 month or even 2 years last. and exactly from many other couses to use cookies it smooth the user experiences.*/

// practise 5

/* 
1.local storage not expire when close the browser. but sesson storage is cleared.
2.local storage saved till not clear or remove but session storage time is open time of the browsers trab.
3.data can be stored 10MB  but session storage is 4or 5MB

*/
