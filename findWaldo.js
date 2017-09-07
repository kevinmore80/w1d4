function findWaldo(names, found) {
 names.forEach(function(name, index) {
   if (name === "Waldo") {
     found(index);
   }
 });
}

function actionWhenFound(index) {
 console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);