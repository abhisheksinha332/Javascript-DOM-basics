// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


//---------------------------------------------GET ELEMENT BY ID--------------------------------------------

// console.log(document.getElementById('main-header'));
// var header = document.getElementById('main-header');
// var title = document.getElementById('header-title');
// console.log(title);
// title.textContent = "Abhishek";
// title.innerText = "sinha";
// title.innerHTML = "<h2>Abhishek Sinha</h2>";
// header.style.borderRadius = '12px';

//------------------------------------------GET ELEMENTS BY CLASSNAME------------------------------------

// var items  = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2].innerHTML = "Hello there");
// console.log(items[2].style.fontWeight = "Bold");

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'red';
//     items[i].style.color = 'white';
// }

//-------------------------------------------GET ELEMENT BY TAG NAME----------------------------------

// var li  = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2].innerHTML = "Hello there");
// console.log(li[2].style.fontWeight = "Bold");

// for(var i = 0; i<li.length; i++){
//     li[i].style.backgroundColor = 'red';
//     li[i].style.color = 'white';
// }


//---------------------------------------------QUERY SELECTOR-------------------------------------------

// var head = document.querySelector('#main-header');
// head.style.borderBottom = '50px solid blue';

// var input =  document.querySelector('input');
// input.value = 'Abhishek';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

//--------------------------------------------QUERY SELECTOR ALL-------------------------------------------

// var color = document.querySelectorAll('.title');
// console.log(color);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'red'
// }
// for(var i=0; i<odd.length;i++){
//     even[i].style.backgroundColor = 'grey'
// }


//-------------------------------------Parent Node Property-------------------------------------------------

//var item = document.querySelector("#items");
// var item = document.getElementById("items");
// item.parentNode.style.backgroundColor= "#f4f4f4";
// item.parentNode.parentNode.style.backgroundColor= "#f5f5f5";
// item.parentNode.parentNode.parentNode.style.backgroundColor= "#e4e4e4";
// console.log(item.parentNode);
// console.log(item.parentNode.parentNode);


//-----------------------------------ParantElement Property----------------------------------------------------

// var item = document.querySelector("#items")
// var p =   item.parentElement;
// p.style.backgroundColor = "red";
// console.log(p);


//----------------------------------------Child Node------------------------------------------------------------

// var item = document.querySelector("#items");
// console.log(item.childNodes)
// console.log(item.children)
// console.log(item.children[1])
// console.log(item.firstChild);
// console.log(item.firstElementChild);
// console.log(item.lastChild);
// console.log(item.lastElementChild);



//----------------------------------------Sibling---------------------------------------------------------------
// var item = document.querySelector(".title");
// console.log(item.nextSibling);
// console.log(item.nextElementSibling);
// console.log(item.previousSibling);
// console.log(item.previousElementSibling);





//----------------------------------------Create a div--------------------------------------------------------

var newDiv = document.createElement('div')
//create class
newDiv.className='hello'
//create Id
newDiv.id='hi'
//set Attribute
newDiv.setAttribute('title','Hello World')
//create text node
var newDivText = document.createTextNode('Hello world')
//add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1)
console.log(newDiv);