// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// NON perdetevi a fare troppi abbellimenti con il css all’inizio, ne a gestire layout particolari. Abbellirete tutto alla fine.
// Scrivete solo il CSS necessario a completare le milestone

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”:
// cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”:
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per 
// creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// Abbellite il tutto con una UI accattivante e moderna.
// Buon lavoro e buon divertimento!
// E Buona Pasqua!


const { createApp } = Vue

createApp ({
    data() {
        return {
            todos: [
                {
                    task: 'Fare la spesa',
                    done: false,
                }, {
                    task: 'Lavare la macchina',
                    done: true,
                }, {
                    task: 'Annaffiare le piante',
                    done: false,
                }, {
                    task: 'Lavare i vetri',
                    done: false,
                }, {
                    task: 'Aggiustare la lampada',
                    done: false,
                }
            ],
            inputValue: '',
        }
    },
    methods: {
        addTodo(){
            if (this.inputValue !== '') {
                let newTodo = {
                    task: this.inputValue,
                    done: false,
                }
                this.todos.push(newTodo)
                this.inputValue = ''
            }
        },
        todoDoneDelete(i){
            if (this.todos[i].done === false) {
                this.todos[i].done = true
            } else {
                this.todos.splice(i, 1)
            }
        }
    },
    mounted() {
    }
}).mount('#app')
