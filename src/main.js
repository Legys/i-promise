import Vue from 'vue'
import App from './App.vue';
import List from './components/main-app/List.vue';
import Task from './components/promise/Promise.vue';

export const routes = {
    '/': App,
    '/task': Task
}
export const promiseBus = new Vue({

});

Vue.component('NotFound', {
    template: `<p>Not Found </p>`
})

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})