// window.alert("keep learning , Don't stop");

// console.error("There is a problem");
// console.table(["ghiath", "naoura"]);

// console.log(
//   "How %c dare  you %c speak to me like that",
//   "color:red ; font-size:40px",
//   "color:blue ; font-size:40px"
// );

// thefirst.innerHTML = "hi";

// console.log((100.915).toFixed(2)); //round number
// console.log(parseInt("100.8 ghiath")); //number only without text
// console.log(parseFloat("100.2 ghiath")); //number only with ?.?? without text

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.5));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("ghiath" / 20));

//                Math object
// console.log(Math.round(2.7));

// console.log(Math.floor(2.7));
// console.log(Math.ceil(2.7));

// console.log(Math.min(10, 20, 66, 90));
// console.log(Math.max(10, 20, 66, 90));

// console.log(Math.pow(2, 4)); // =2^4

// console.log(Math.random());

// console.log(Math.trunc(99.5)); //Returns the integral part

//                String Methods
// let theName = "Ghiath";

// console.log(theName[0]); //G
// console.log(theName[3]); //a
// console.log(theName[6]); //undefined

// console.log(theName.charAt(0)); //G
// console.log(theName.charAt(3)); //a
// console.log(theName.charAt(6)); //__

// console.log(theName.length); //6

// let theName2 = "  Naoura  ";
// console.log(theName2);
// console.log(theName2.trim());

// console.log(theName2.toLowerCase());
// console.log(theName2.toUpperCase());

// let theName3 = "  ahmed  ";
// console.log(theName3.trim().charAt(2).toUpperCase());

// let a = "Elzero Web School";
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); //5
// console.log(a.lastIndexOf("o")); //15

// console.log(a.slice(2, 6)); //zero
// console.log(a.slice(-5, -3)); //ch

// console.log(a.repeat(2)); //Elzero Web SchoolElzero Web School

// console.log(a.split("", 6)); //['E', 'l', 'z', 'e', 'r', 'o']

// console.log(a.substring(2, 6)); //zero
// console.log(a.substring(6, 2)); //zero
// console.log(a.substring(-10, 6)); //= 0 - 6 , Elzero
// console.log(a.substring(a.length - 5, a.length - 3)); //ch

// console.log(a.substr(0, 6)); //Elzero
// console.log(a.substr(17)); //
// console.log(a.substr(-3)); //ool
// console.log(a.substr(-5, 2)); //ch

// console.log(a.includes("Web")); //true
// console.log(a.includes("Web", 8)); //false

// console.log(a.startsWith("E")); //true
// console.log(a.startsWith("E", 2)); //false
// console.log(a.startsWith("zero", 2)); //true

// console.log(a.endsWith("l")); //true
// console.log(a.endsWith("ro", 6)); //true (value , length)

// console.log(10 == "10"); //Compare Value Only
// console.log(-100 == "-100");
// console.log(10 != "10");

// console.log(10 === "10"); //Compare Value + Type
// console.log(10 !== "10");
// console.log(10 !== 10);

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof "osama" === typeof "ahmad");

// console.log(!true); //false
// console.log(!(10 == "10")); //false

// console.log(10 == "10" && 10 > 8 && 10 > 50); //false

// console.log(10 == "10" || 10 > 8 || 10 > 50); //true

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "Syria";
// let student = true;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Syria") {
//   if (student === true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else if (country === "Egypt") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

// let theName = "Ghiath";
// let theGender = "Male";
// let theAge = 70;

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// let result = theGender === "Male" ? "Mr" : "Mrs";
// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 to 60")
//   : theAge > 60
//   ? console.log("Larger than 60")
//   : console.log("Unknown");

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = undefined;
// console.log(`The Price Is ${price || 200}`); //falsy values
// console.log(`The Price Is ${price ?? 200}`); //null + undefined

// let day = 2;

// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
//   default:
//     console.log("Unknown day");
//     break;
// }

// let myFriends = ["Ahmad", "Mohamad", "Omar", ["Ali", "Ammar"]];
// console.log(`Hello ${myFriends[1]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`${myFriends[1].charAt(2)}`);
// console.log(myFriends[3][1]);
// console.log(myFriends[3][1][4]);

// console.log(myFriends);
// myFriends[0] = "Ghiath";
// console.log(myFriends);
// myFriends[3] = ["Samer", "Salim"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends)); //true
// console.log(myFriends.length); //4
// myFriends[6] = "Firas";
// console.log(myFriends);
// console.log(myFriends.length); //7

// myFriends.length = 2;
// console.log(myFriends); //['Ghiath', 'Mohamad']
//
// console.log(myFriends.indexOf("Ghiath"));
// console.log(myFriends.indexOf("Ghiath", 2));
//
// console.log(myFriends.lastIndexOf("Ghiath"));
// console.log(myFriends.lastIndexOf("Ghiath", -2));

// let newFriends = [10, "nabeel", "maher", "90", 1000, 100, 20, "10", -20, -10];

// console.log(newFriends);
// console.log(newFriends.sort());
// console.log(newFriends.reverse());
// console.log(newFriends.sort().reverse());

// let newFriends1 = ["ahmad", "mohamad", "omar", "othman", "ali"];
// console.log(newFriends1);
// console.log(newFriends1.slice());
// console.log(newFriends1.slice(1));
// console.log(newFriends1.slice(1, 3));
// console.log(newFriends1.slice(-3));
// console.log(newFriends1.slice(1, -2));
// console.log(newFriends1.slice(-4, -1));

// newFriends1.splice(1, 1, "samer", "samar");
// console.log(newFriends1);

// let allFriends = myFriends.concat(newFriends, newFriends1, "naoura", [
//   "last",
//   "Thelast",
// ]);
// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" | "));
// console.log(allFriends.join(" | ").toUpperCase());

// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//   if (products[i] === "Pen") {
//     break;
//   }
//   console.log(products[i]);
// }
///
// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] == "number") {
//     continue;
//   }
//   console.log(products[i]);
// }
///
// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`-  ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }
// ///
// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`-  ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break nestedLoop;
//     }
//   }
// }

// products
// colors

// let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors1 = ["Red", "Green", "Black"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}]${products1[i]}</h3>`);
//   for (let j = 0; j < colors1.length; j++) {
//     document.write(`<p>${colors1[j]}</p>`);
//   }
//   document.write(`<p>${colors1.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// console.log(typeof console.log); //function

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `interruptting`;
//     }
//     console.log(i);
//   }
// }

// generate(10, 20);

// let thisResult = generate(8, 20);
// console.log(thisResult);

// function sayHello(username = "Unknown", age = "Unknown") {
//   // if (age === undefined) {
//   //   age = "Unknown";
//   // }

//   //or//

//   // age = age || "Unknown";
//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello());

// function calc(...numbers) {
//   let results = 0;
//   // console.log(Array.isArray(numbers)); //true

//   for (let i = 0; i < numbers.length; i++) {
//     results += numbers[i]; //results = results + numbers[i]
//   }
//   return `Final Result Is ${results}`;
// }

// console.log(calc(10, 20, 100));

//
// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills are hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Ghiath", 24, 20, "No", "HTML", "CSS");

// function sayHello() {
//   console.log("Hello Ghiath");
// }
// // function without name(Anonymous Function)://
// document.getElementById("show").onclick = sayHello;
// // or
// document.getElementById("show").onclick = function () {
//   console.log("Show");
// };

// setTimeout(function () {
//   console.log("Good");
// }, 2000);

// // Example 1
// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Ghiath", "Naoura"));

// // Example 2
// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Ghiath", "Naoura"));

// Example 3
// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function

//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }

//     return `${message} ${getFullName()}`;
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Ghiath", "Naoura"));

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// var x = 10;

// if (10 === 10) {
//   var x = 50;
// }

// console.log(x); //50
////
// var z = 10;

// if (10 === 10) {
//   let z = 50;
//   console.log(`From if Block ${z}`); //50
// }

// console.log(`From Global ${z}`); //10

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }

// parent();

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(2 * myNums[i]);
//   // newArray[i] = 2 * myNums[i];
// }

// console.log(newArray);

// Same idea with Map
// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

// let add = myNums.map(addition);

// console.log(add);
// let swappingCases = "ghIAth";
// let invertedNumbers = [1, -10, 15, 100, -30];
// let ignoreNumbers = "Na123ou4ra";

// let sw = swappingCases
//   .split("")
//   .map(function (abc) {
//     return abc === abc.toUpperCase() ? abc.toLowerCase() : abc.toUpperCase();
//   })
//   .join("");

// with arrow function
// let sw = swappingCases
//   .split("")
//   .map((abc) =>
//     abc === abc.toUpperCase() ? abc.toLowerCase() : abc.toUpperCase()
//   )
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (zxc) {
//   return -zxc;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

// Same idea with Filter

// Get friends with name starts with A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterEriends = friends.filter(function (el) {
//   return el.startsWith("A");
// });

// console.log(filterEriends);

// //Gen even numbers only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

// Filter Words more than 4characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");

// console.log(ign);
//  Filter strings + Multiply
// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .join("");

// console.log(mixedContent);

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`ACC => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index=> ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log("#".repeat(15));
//   return acc + current;
// }, 1000);

// console.log(add);

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let Check = theBiggest.reduce(function (acc, current) {
//   console.log(`ACC => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log("#".repeat(15));
//   return acc.length > current.length ? acc : current;
// });

// console.log(Check);

// let removeChars = ["G", "@", "@", "H", "I", "@", "@", "A", "T", "@", "H"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return !ele.startsWith("@");
//   })
//   .reduce(function (a, b) {
//     return `${a}${b}`;
//   });

// console.log(finalString);

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove active class from all elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add active class to this element
//     this.classList.add("active");
//     // Hide all divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// let user = {
//   // Properties
//   theName: "Ghiath",
//   theAge: 25,
//   "country of": "Syria",
//   100: "Number",
//   Skills: ["HTML", "CSS", "SASS", "JS"],
//   available: false,
//   addresses: {
//     Ksa: "Riyadh",
//     Syria: {
//       one: "Damascus",
//       two: "Homs",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
// console.log(user["country of"]);
// console.log(user[100]);
// console.log(user.Skills);
// console.log(user.Skills[3]);
// console.log(user.Skills.join(" | "));
// console.log(user.addresses.Syria.two);
// console.log(user["addresses"].Syria.two);
// console.log(user["addresses"]["Syria"]["two"]);
// console.log(user.checkAv());

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user1 = {
//   age: 40,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user1);
// console.log(user1.age);
// console.log(user1.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user1);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

//
//                   DOM
//
// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".special");
// let myQueryElement_0 = document.querySelector(".my-span"); //get the first one
// let myQueryElement_0_All = document.querySelectorAll(".my-span"); //get all
// let myQueryElement_1 = document.querySelector("#my-div");

// console.log(myIdElement);
// console.log(myTagElements);
// console.log(myTagElements[0]);
// console.log(myTagElements[1]);
// myTagElements[1].innerHTML = "Hello paragraph 2-2";
// console.log(myClassElement);
// console.log(myClassElement[0]);
// console.log(myQueryElement);
// console.log(myQueryElement_0);
// console.log(myQueryElement_0_All);
// console.log(myQueryElement_0_All[1]);
// console.log(myQueryElement_1);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[0].one.value);
// console.log(document.links);
// console.log(document.links[1]);
// console.log(document.links[1].href);

// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://cdn.langeek.co/photo/19659/original/beg";
// document.images[0].alt = "Alternate";
// document.images[0].title = "beg";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://learnenglish.britishcouncil.org/skills");
// myLink.setAttribute("title", "britishcouncil");

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div has no Attribute`);
// }

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("product One");
// let myComment = document.createComment("This is div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append comment to element
// myElement.appendChild(myComment);

// // Append text to element
// myElement.appendChild(myText);

// // Append element to body
// document.body.appendChild(myElement);

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add heading text
// myHeading.appendChild(myHeadingText);

// // Add heading to main element
// myMainElement.appendChild(myHeading);

// // Add paragraph text
// myParagraph.appendChild(myParagraphText);

// //Add paragraph to main element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);

// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);

// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

//                Events
// let myBtn = document.getElementById("btn");

// myBtn.onclick = function () {
//   console.log("click from js(onclick)");
// };

// myBtn.oncontextmenu = function () {
//   console.log("click from js(oncontextmenu)");
//   // click right
// };

// myBtn.onmouseenter = function () {
//   console.log("click from js(onmouseenter)");
// };

// myBtn.onmouseleave = function () {
//   console.log("click from js(onmouseleave)");
// };

// window.onscroll = function () {
//   console.log("Scroll");
// };

// window.onresize = function () {
//   console.log("onresize");
// };

// for form (onfocus) (onblur) (onsubmit)

// document.links[0].onmouseenter = function (event) {
//   console.log(event);
// };

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (ev) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     ev.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };

//          classList
// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.length);
// console.log(element.classList.contains("ghiath"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item(3));

// element.onclick = function () {
//   element.classList.add("add-one", "add-two");
// };

// element.onclick = function () {
//   element.classList.remove("one");
// };

// element.onclick = function () {
//   element.classList.toggle("ghiath");
// };

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold;color: green;opacity: 0.9";

// element.style.removeProperty("color"); //from inline style
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height"); //from css File
// document.styleSheets[0].rules[0].style.setProperty(
//   "background-color",
//   "red",
//   "important"
// ); //from css File

// let element = document.getElementById("my-div");
// let createP = document.createElement("p");

// element.before("before");
// element.before(createP);

// element.after("after");
// element.after(createP);

// element.prepend("first"); //before the first child
// element.prepend(createP); //before the first child
// element.append(" last"); //after the last child

// element.remove();

// let span = document.querySelector(".two");

// console.log(span.previousSibling);
// console.log(span.previousElementSibling);
// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// console.log(span.parentElement);

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;

// myDiv.appendChild(myP);

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From onclick 1");
// }

// function two() {
//   console.log("Message From onclick 2");
// }

// window.onload = "ghiath"; // Nothing will happen

// myP.addEventListener("click", function () {
//   console.log("Message From onclick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "string");//Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// let cloned = document.querySelector(".clone"); //Error

// cloned.onclick = function () {
//   console.log("I am cloned");
// };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("I am cloned");
//   }
// });

//                   BOM
// window.console.log("Hi");
// window.document.title = "Hello Ghiath";

// window.alert("Test"); //3 they are same
// this.alert("Test");
// alert("Test");

// console.log("Go..."); //after alert done

// let confirmMsg = confirm("Are you sure?!");
// console.log(confirmMsg);

// if (confirmMsg) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good day", "Write day with 3 characteres");
// console.log(promptMsg);

// setTimeout(function () {
//   console.log("Millisecond");
// }, 3000);

// setTimeout(sayMsg, 3500);

// function sayMsg() {
//   console.log(`I am Msg`);
// }

// setTimeout(sayMsg, 1500, "Ghitho", 25); //that won't work:sayMsg("Ghitho")

// function sayMsg(user, age) {
//   console.log(`I am Msg for ${user} his age is: ${age}`);
// }

// let counter = setTimeout(sayMsg, 1500);

// function sayMsg() {
//   console.log(`I am Msg `);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(counter);
// };

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`I am msg`);
// }

// setInterval(sayMsg, 1500, "Ghitho", 25);

// function sayMsg(user, age) {
//   console.log(`I am Msg for ${user} his age is: ${age}`);
// }

// let div = document.querySelector("div");

// function countDown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countDown, 1000);

// console.log(location);
// console.log(location.href);

// location.href = "https://www.google.com";
// location.href = "#sec02";
// location.href =
//   "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus#examples";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol); //http:

// console.log(location.hash);

// location.reload();
// location.replace("https://www.google.com");
// location.assign("https://www.google.com");

// setTimeout(function () {
//   window.open(
//     "https://www.google.com",
//     "_blank",
//     "width=400,height=400,left=200,top=100"
//   );
// }, 3000);

// setTimeout(function () {
//   window.open(
//     "https://www.google.com",
//     "_blank",
//     "width=400,height=400,left=200,top=100"
//   );
// }, 2000);

// window.close();

// console.log(history);
// history.length;
// history.back;
// history.forward;
// history.go(0);
// history.go(1);
// history.go(-1);
// history.go(-2);

// window.stop();
// window.print();

// let myNewWindow = window.open(
//   "https://www.google.com",
//   "",
//   "width=500,height=500"
// );

// window.scrollTo(5000, 2000);
// window.scrollBy(100, 100);
// window.scrollTo({ left: 500, top: 200, behavior: "smooth" });

// console.log(window.scrollX === window.pageXOffset);//Same
// console.log(window.scrollY === window.pageYOffset);//Same

// let btn1 = document.querySelector("button");

// window.onscroll = function () {
//   console.log(`Scroll Y value is ${window.scrollY}`);
//   if (window.scrollY >= 600) {
//     btn1.style.display = "block";
//   } else {
//     btn1.style.display = "none";
//   }
// };

// btn1.onclick = function () {
//   window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
// };

// // Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.key(1));
// console.log(window.localStorage.key(2));

// // Set color in page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   //[1] Add color to div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   //[2] remove active class from all lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   //[3] Add active class to current color
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active class from all lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add active class to current element
//     e.currentTarget.classList.add("active");
//     //Add current color to local storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change div background color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };

//
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ghiath", "Naoura", "Ahmad", "Hasan"];

// [a = "A", b, c, d, e = "omar"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [x, y, , z] = myFriends;

// console.log(x);
// console.log(y);
// console.log(z);

// let myFriends = [
//   "Ghiath",
//   "Naoura",
//   "Ahmad",
//   ["Amer", "omar", ["Mohamad", "Mahmoud"]],
// ];

// // console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); //Amer
// console.log(b); //Mahmoud

// let book = "Video";
// let video = "Book";

// // save book value in stash
// let stash = book; //"Video"

// // change book value
// book = video; //"Book"

// // change video value
// video = stash; //"Video"

// or
// [book, video] = [video, book];

// console.log(book);
// console.log(video);

// const user = {
//   theName: "Ghiath",
//   theAge: 25,
//   theTitle: "Developer",
//   theCountry: "Syria",
//   theColor: "black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// or
// ({ theName, theAge, theTitle, theCountry } = user);
// let { theName, theAge, theTitle, theCountry } = user;
// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "red",
//   skills: { html: h, css },
// } = user;

// console.log(theName);
// console.log(n);
// console.log(theAge);
// console.log(a);
// console.log(theTitle);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML skill progress is ${h}`);
// console.log(`My CSS skill progress is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML skill progress is ${skillOne}`);
// console.log(`My CSS skill progress is ${skillTwo}`);

// function showDetails(obj) {
//   console.log(`Your name is ${obj.theName}`);
//   console.log(`Your age is ${obj.theAge}`);
//   console.log(`Your CSS skill progress is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your name is ${n}`);
//   console.log(`Your age is ${a}`);
//   console.log(`Your CSS skill progress is ${c}`);
// }

// showDetails(user);

// const user = {
//   theName: "Ghiath",
//   theAge: 25,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     syria: "Damascus",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [one, two, three],
//   addresses: { syria: s },
// } = user;

// console.log(`Your name is ${n}`);
// console.log(`Your age is ${a}`);
// console.log(`Your skills is ${one}, ${two}, ${three}`);
// console.log(`You live in ${s}`);

// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(myUniqueData.has("A")); //true

// console.log(myData);
// console.log(myUniqueData);
// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]); //undefined

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2)); //true

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// console.log(myUniqueData.has("A"));

// Type of data
// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet);

// // Size
// console.log(mySet.size);

// // Values + Keys [Alias for values]
// let iterator = mySet.keys();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach
// mySet.forEach((el) => console.log(el));

// // Type of data
// // let myws = new WeakSet([1, 1, 1, 2, 3, "A", "A"]);//Error (not object)
// let myws = new WeakSet([{ A: 1, B: 2 }]);
// console.log(myws);

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   10: "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();

// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("##############");

// console.log(myNewObject);
// console.log(myNewMap);

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// // myMap.set(10, "Number");
// // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log(myMap.has(false));

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; //Over the reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; //Over the reference

// console.log(myWeakMap);

// console.log(Array.from("GHIATH"));
// console.log(Array.from(12345));
// console.log(Array.from("12345"));

// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );

// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// // console.log(mySet);
// console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]);

// function testArgs() {
//   return arguments;
// }

// console.log(testArgs("Mohamad", "Ghiath", "Naoura"));

// function af() {
//   return Array.from(arguments);
// }

// console.log(af("Mohamad", "Ghiath", "Naoura", 1, 2, 3));

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); //[10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(4, -1); //[10, 20, 30, 40, 'B', 'A', 'B']

// myArray.copyWithin(1, -2); //[10, 'A', 'B', 40, 50, 'A', 'B']

// myArray.copyWithin(1, -2, -1); //[10, 'A', 30, 40, 50, 'A', 'B']

// console.log(myArray);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 5;

// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);

// // let check = nums.some((e) => e > 5);

// console.log(check); //true

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20)); //false
// console.log(checkValues(nums, 5)); //true

// let range = {
//   min: 10,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   console.log(this.min);
//   console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);

// const locations = {
//   20: "place 1",
//   30: "place 2",
//   10: "place 3",
//   40: "place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(check); //false (because There is "10")

// Spread with string => Expand string
// console.log("Ghiath"); //Ghiath
// console.log(..."Ghiath"); //G h i a t h
// console.log([..."Ghiath"]); //['G', 'h', 'i', 'a', 't', 'h']

// // concatenate Arrays
// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array
// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push inside Array
// let allFriends = ["Tamer", "Samer", "Amer"];
// let thisYearFriends = ["Ahmad", "Mohamad"];

// allFriends.push(...thisYearFriends);
// console.log(allFriends);

// // Use with math object
// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread with objects => Merge objects
// let objOne = {
//   a: 1,
//   b: 2,
// };

// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });

// let str1 = "10 20 100 1000 5000";
// let str2 = "os1 os12 os123 os123os os12312os123";

// let invalidEmail = "ghiath@@@gmail....com";
// let validEmail = "o@nn.sa";

// let ip = "192.168.2.1"; //IPv4

// let url = "elzero.org";
// let url = "elzero.org/";
// let url = "http://elzero.org/";
// let url = "http://www.elzero.org/";
// let url = "https://.elzero.org/";
// let url = "https://www.elzero.org/";
// let url = "https://www.elzero.org/?facebookid=azxsdc";

// let myString = "Hello Elzero Web School I love elzero";

// let regex = /elzero/gi; //i:case-insensitive , g:global
// // let regex = /elzeros/; //null

// console.log(myString.match(regex));

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/gi;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNumsRe = /[^0-2]/g;
// console.log(notNums.match(notNumsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "os1 os1os os2 os8 os8os";
// let practiceRe = /os[5-9]os/g;
// console.log(practice.match(practiceRe));

// let myString = "AaBbcdefG123!234%^&*";

// let atozSmall = /[a-z]/g;
// let notAtozSmall = /[^a-z]/g;

// console.log(myString.match(atozSmall));
// console.log(myString.match(notAtozSmall));

// let atozCapital = /[A-Z]/g;
// let notAtozCapital = /[^A-Z]/g;

// console.log(myString.match(atozCapital));
// console.log(myString.match(notAtozCapital));

// let aAndcAnde = /[ace]/g;
// console.log(myString.match(aAndcAnde));

// let NotaAndcAnde = /[^ace]/g;
// console.log(myString.match(NotaAndcAnde));

// let lettersCapsAndSmall = /[a-zA-Z]/g;
// console.log(myString.match(lettersCapsAndSmall));

// let numsAndSpecials = /[^a-zA-Z]/g;
// console.log(myString.match(numsAndSpecials));

// let specials = /[^a-zA-Z1-9]/g;
// console.log(myString.match(specials));

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

// let dot = /./g;
// console.log(email.match(dot));

// let word = /\w/g;
// console.log(email.match(word));

// let notWord = /\W/g;
// console.log(email.match(notWord));

// let digits = /\d/g;
// console.log(email.match(digits));

// let notDigits = /\D/g;
// console.log(email.match(notDigits));

// let whitespace = /\s/g;
// console.log(email.match(whitespace));

// let notWhitespace = /\S/g;
// console.log(email.match(notWhitespace));

// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(valid));

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmad Aspamo";

// let beginningRe = /\bspam/gi; //at the (beginning) or end of a word
// console.log(names.match(beginningRe));

// let endRe = /spam\b/gi; //at the beginning or (end) of a word
// console.log(names.match(endRe));

// let beginningOrEndRe = /(\bspam|spam\b)/gi;
// console.log(names.match(beginningOrEndRe));

// console.log(beginningOrEndRe.test(names)); //true
// console.log(/(\bspam|spam\b)/gi.test("Ghiath")); //false
// console.log(/(\bspam|spam\b)/gi.test("1spam")); //true
// console.log(/(\bspam|spam\b)/gi.test("spam1")); //true

// + one or more         * zero or more         ? zero or one

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; //All Emails
// // let mailsRe = /\w+@\w+.(com|net)/gi;
// let mailsRe = /\w+@\w+.\w+/gi;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; //0 numbers or No 0
// let numsRe = /0\d*0/gi;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; //http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
// console.log(urls.match(urlsRe));

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/gi)); //S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/gi)); //S[four or five Number]S
// console.log(serials.match(/s\d{4,}s/gi)); //S[at least four]S

// $ End with sth     ^ start with sth     ?=Followed by sth     ?! Not Followed by sth

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmadZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/gi.test(myString)); //true
// console.log(/^we/gi.test(myString)); //true
// console.log(/lz$/gi.test(names)); //true
// console.log(/^1/gi.test(names)); //true
// console.log(/^\d/gi.test(names)); //true

// console.log(names.match(/\d\w{5}(?=Z)/gi));
// console.log(names.match(/\d\w{8}(?!Z)/gi));

// replace
// let txt = "We Love programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));

// let re = /@/gi;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/gi, "JavaScript"));

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; //(1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// };

// Constructor Function
// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} your salary is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} your salary is ${this.s}`;
//   }
// }

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne);
// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo);
// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); //Native code
// console.log(userTwo.writeMsg); //Native code

// console.log(userThree);
// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);
// console.log(userThree.msg());

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// console.log(userOne instanceof User); //true
// console.log(userOne.constructor === User); //true

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne); //string
// console.log(typeof strTwo); //object

// console.log(strOne instanceof String); //false
// console.log(strTwo instanceof String); //true

// console.log(strOne.constructor === String); //true
// console.log(strTwo.constructor === String); //true

// class User {
//   count = 0;
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.count); //0
// console.log(User.count); //undefined

// class User {
//   //Static Property
//   static count = 0;
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//   //Static Methods
//   static sayHello() {
//     return `Hello from class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmad", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.count); //undefined
// console.log(User.count); //0

// // console.log(userOne.sayHello()); //Error (is not a function)
// console.log(User.sayHello());
// console.log(User.countMembers());

// // Parent class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }

//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class supenman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());

// console.log("###########");

// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

// class User {
//   // Private property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// // console.log(userOne.e * 0.3);
// console.log(userOne.getSalary() * 0.3);

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Elzero";

// console.log(String.prototype);

// console.log(userOne);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = "I Love you Ghitho";

// String.prototype.addDotBerofeAndAfter = function (val) {
//   return `.${this}...`;
// };

// let myString = "Naoura";
// console.log(myString.addDotBerofeAndAfter());

let myObject = {
  a: 1,
  b: 2,
};

// Object.defineProperty(myObject, "c", {
//   writable: false, //change it later
//   enumerable: true, //see for(){}
//   configurable: false, //see delete
//   value: 3,
// });

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, //Cannot redefine property
//   value: 200,
// });

// myObject.c = 100;

// console.log(delete myObject.c); //true
// delete myObject.c;

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));

// let dateNow = new Date();
// console.log(dateNow);

// console.log(Date.now()); //1000 Mill = 1 sec

// let seconds = Date.now() / 1000; //number of seconds
// console.log(`seconds ${seconds}`);

// let minutes = seconds / 60; //number of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; //number of hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; //number of Days
// console.log(`Days ${days}`);

// let years = days / 365; //number of years
// console.log(`years ${years}`);

// let dateNow = new Date();

// let birthday = new Date("Oct 25,82");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

// let dateNow = new Date();
// console.log(dateNow);

// dateNow.setTime(0);
// console.log(dateNow);

// dateNow.setTime(10000);
// console.log(dateNow);

// dateNow.setDate(1);
// console.log(dateNow);

// dateNow.setFullYear(1999);
// console.log(dateNow);

// dateNow.setFullYear(1999, 7, 8);
// console.log(dateNow);

// dateNow.setMonth(0);
// console.log(dateNow);

// dateNow.setHours(0);
// console.log(dateNow);

// dateNow.setMinutes(0);
// console.log(dateNow);

// dateNow.setSeconds(0);
// console.log(dateNow);

// console.log(Date.parse("Oct 25 1982"));

// let data1 = new Date(0);
// console.log(data1);

// let data2 = new Date(404344800000);
// console.log(data2);

// let data3 = new Date("10 / 25 / 1982");
// console.log(data3);

// let data4 = new Date("1982 / 10 / 25");
// console.log(data4);

// let data5 = new Date("1982 / 10");
// console.log(data5);

// let data6 = new Date("82");
// console.log(data6);

// let data7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(data7);

// let data8 = new Date(1982, 9, 25);
// console.log(data8);

// let data9 = new Date("1982-10-25T06:10:00Z");
// console.log(data9);

//Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 10000; i++) {
//   // document.write(`<div>${i}</div>`);
//   // or
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Gh"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A";
//   // yield 3;
//   // yield 4;
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// export let a = 10;
// export let arr = [1, 2, 3, 4];

// export function saySomething() {
//   return `Something  `;
// }

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something  `;
// }

// // or

// export { a as myNumber, arr, saySomething };

// export default function sayHello() {
//   return `Hello`;
// }

// const myJsonObjectFromServer = '{"Username":"Ghiath","Age":25}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// myJsObject["Username"] = "Naoura";
// myJsObject["Age"] = 90;

// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);

// Synchronous
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 2000);
// console.log("3");

// setTimeout(() => {
//   console.log("Web API");
// }, 0);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();

// console.log("One");

// setTimeout(() => {
//   console.log("Three");
// }, 0);

// setTimeout(() => {
//   console.log("Four");
// }, 0);

// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

// let req = new XMLHttpRequest();
// console.log(req);

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");

// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("I am a callback function");
// }

// setTimeout(iamACallback, 2000);

// setTimeout(() => {
//   console.log("Download photo from URL");
//   setTimeout(() => {
//     console.log("Resize photo");
//     setTimeout(() => {
//       console.log("Add logo to the photo");
//       setTimeout(() => {
//         console.log("Show photo in website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("connection established");
//   } else {
//     rejectFunction(Error("connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("connection established");
//   } else {
//     rejectFunction(Error("connection Failed"));
//   }
// });
// console.log(myPromise);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = [];
//   // let employees = ["Ahmad", "Ali", "Osama", "Omar"];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number of employees is not 4 "));
//   }
// });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The choosen employees is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => console.log(rejectedReason))
//   .finally(console.log("The operation is Done"));

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No data found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I am the first promise");
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("I am the second promise");
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I am the third promise");
//   }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
// );

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users found");
//     } else {
//       rej("No Users found");
//     }
//   });
// }

// getData().then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log("Rejected " + rejectedValues)
// );

// function getData() {
//   let users = ["Ghi"];
//   if (users.length > 0) {
//     return Promise.resolve("Users found");
//   } else {
//     return Promise.reject("No Users found");
//   }
// }

// getData().then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log("Rejected " + rejectedValues)
// );

// async before function mean this function return a Promise

// async function getData() {
//   let users = ["Ghi"];
//   if (users.length > 0) {
//     return "Users found";
//   } else {
//     throw new Error("No Users found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log("Rejected " + rejectedValues)
// );

// const mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("I am good promise");
//     reject(Error("I am bad promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // mypromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await mypromise);
//   console.log(await mypromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am good promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await mypromise);
//   } catch (reason) {
//     console.log(`Reason ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// async function fetchData() {
//   console.log("Before fetch");
//   try {
//     let myData = await fetch(
//       "https://api.github.com/users/elzerowebschool/repos"
//     );
//     console.log(await myData.json());
//   } catch (reason) {
//     console.log(`Reason ${reason}`);
//   } finally {
//     console.log("After fetch");
//   }
// }

// fetchData();
