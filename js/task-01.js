const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);

items.forEach((element) => 
console.log(
    `Category: ${element.firstElementChild.textContent}`,
    `Elements: ${element.lastElementChild.children.length}`,
)
);