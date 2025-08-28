let tasks = [
    { id: 1, title: "Studiare React" },
    { id: 2, title: "Fare la spesa" },
    { id: 3, title: "Allenamento" }
];

function removeItemById(idToRemove) {
    tasks = tasks.filter(item => item.id !== idToRemove);
    console.log("Task rimanenti:", tasks);
}

/*

 In questa versione:

* Ogni bottone HTML chiama `removeItemById` passando l’id già scritto a mano.
* Non serve `renderTasks()` perché non sto ridisegnando nulla (la pagina non si aggiorna da sola).
* L’unico “feedback” che hai è in console.

---

la differenza?

Statico (questo esempio):** lista fissa, bottoni già scritti, utile solo per demo o esempi base.
Dinamico (quello di prima):** lista che si aggiorna in base all’array → più vicino a React e a una vera to-do list.






*/