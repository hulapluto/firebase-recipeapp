//create constant reference and link back to ul list in page
const recipeList = document.querySelector('#recipe-list');

//create element and render recipes
function renderRecipe(doc){
    let li = document.createElement('li');
    let name = document.createElement('h3');
    let ingredient = document.createElement('p');
        // var u = document.createTextNode('br');
    let instructions = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    ingredient.textContent = doc.data().ingredient;
    instructions.textContent = doc.data().instructions;

    li.appendChild(name);
    li.appendChild(ingredient);
    // li.appendChild(ingredient).innerHTML = "<br>";
    li.appendChild(instructions);

    recipeList.appendChild(li);
}

//create asychronus request to collection, returns promise for data
//retrieve snapshot of db - es6 arrow function
db.collection('recipes').get().then((snapshot) => {
    //output collection to console:
    // console.log(snapshot.docs);

    //output actual collection snapshots to log
    //going out to db cycling through data in each doc
    snapshot.docs.forEach(doc => {
        renderRecipe(doc);
        // console.log(doc.data())
    }) 
    
})