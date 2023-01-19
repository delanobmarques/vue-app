const app = Vue.createApp({
    // data, functions to react to events that we want
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            personal_site_url: 'https://delanomarques.netlify.app/',
            github_url: 'https://github.com/delanobmarques',
            showBooks: false,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 43,
            books: [
                { title: 'The Alchemist', author: 'Paulo Coelho', img: 'assets/1.jpg'},
                { title: 'The Da Vinci Code', author: 'Dan Brown', img: 'assets/2.jpg'},
                { title: 'Think and Grow Rich', author: 'Napoleon Hill', img: 'assets/3.jpg'},
                { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', img: 'assets/4.jpg'},
                { title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling', img: 'assets/5.jpg'},
                { title: 'The Lion, the Witch, and the Wardrobe', author: 'J C.S. Lewis', img: 'assets/6.jpg'},
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