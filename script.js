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

🔹 Perché non serve `document.getElementById`?

Nella versione con **onclick dentro l’HTML statico**:

<button onclick="removeItemById(2)">❌</button>

* Il browser chiama **direttamente** la funzione `removeItemById` quando clicchi.
* Gli passo subito l’`id` dell’elemento che voglio rimuovere → non devo andarlo a cercare nel DOM con `getElementById`.
* In pratica: è l’HTML stesso che “fa da collegamento” tra bottone e funzione.

Se invece creassi i bottoni via JS (dinamici), dovrei attaccare io manualmente l’event listener e quindi usare query tipo `getElementById` o `querySelector`.

*/

