/* 
const app = Vue.createApp({ // root component
    // data, functions
    // template: '<h2>I am template</h2>'
    // data is a function that returns an object
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },

    // methods is an object that contains methods   
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Radiance' // this refers to the Vue instance / component
            this.title = title
        }
    }
});

app.mount('#app') */

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log('e, e.type')
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app')
