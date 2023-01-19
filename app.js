const app = Vue.createApp({
    // data, functions to react to events that we want
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: false,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 43,
            books: [
                { title: 'The Alchemist', author: 'Paulo Coelho'},
                { title: 'The Da Vinci Code', author: 'Dan Brown'},
                { title: 'Think and Grow Rich', author: 'Napolean Hill'},
                { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
                { title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling'},
                { title: 'The Lion, the Witch, and the Wardrobe', author: 'J C.S. Lewis'},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }, 
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data)
                console.log(data)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})


app.mount('#app')