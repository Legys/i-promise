<template>
  <div class="main-grid">
      <div class="new-promise" @mouseover='hoverButton'>
      <v-link href="/task">
          <app-new-promise></app-new-promise>
      </v-link>
        <button v-show='clearButton' class="new-promise__button" @click="clearStore">Очистить историю</button>
      </div>
      <div>
           <v-link href='/task'>
               <div  class="task-history">
                 <app-task-min  @click.native=transitTo(index) v-for="(promise, index) in promises">
              
                   <h2 slot="head">{{promise.prize}}</h2>
                    <p slot="content"
                    v-if="index < 3" 
                    v-for="(task, index) in promise.tasks">{{task}}</p>
                 </app-task-min>
               </div>
          
            </v-link>
      </div>
    
  </div>
</template>

<script>
    import Task from './components/promise/Promise.vue';
    import List from './components/main-app/List.vue';
    import TaskMin from './components/main-app/TaskMin.vue';
    import NewPromise from './components/main-app/NewPromise.vue';
    import VLink from './components/VLink.vue';
    import {
        promiseBus
    } from './main';
    import store from './api/store';


    export default {
        data() {
            return {
                promises: [],
                clearButton: false

            }
        },
        computed: {

        },
        components: {
            'app-task': Task,
            'app-list': List,
            'app-task-min': TaskMin,
            'app-new-promise': NewPromise,
            'v-link': VLink
        },
        methods: {
            clearStore() {
                store.clear();
            },
            hoverButton() {
                if (this.clearButton === false) {
                    this.clearButton = true;
                    setTimeout(() => {
                        this.clearButton = false;
                    }, 1500)
                }
            },
            transitTo(index) {
                setTimeout(() => {
                    promiseBus.$emit('historyWasCalled', index)
                }, 100);

            }

        },
        created() {
            let parsed = store.getPromises();
            this.promises = parsed;
            console.log('App.vue - created', this.promises);

        }
    }
</script>

<style scoped lang="scss">
    .main-grid {
        display: flex;
        flex-flow: column wrap;
        font-family: "Comic Sans MS";
        color: white;
    }
    
    .task-history {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    
    .new-promise {
        align-self: center;
        position: relative;
    }
    
    .new-promise__button {
        width: 90px;
        min-height: 50px;
        position: absolute;
        bottom: 5px;
        background: none;
        border: none;
        color: white;
        transition: display 0.8s;
    }
</style>