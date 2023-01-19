const app = Vue.createApp({
    // data, functions to react to events that we want
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 43,
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