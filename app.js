const app = Vue.createApp({
    // data, functions to react to events that we want
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 43
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})


app.mount('#app')