<template>
    <div class="container">
        <app-new-task
                :canEdit='canEdit'
                @newTaskAdded="tasks.push($event)"
        ></app-new-task>
        <app-task-view
                :canEdit='canEdit'
                :tasks="tasks"
                @taskWasDeleted="deleteTask"></app-task-view>
        <transition name="prize-slide">
                <app-prize
                        v-if="tasks.length > 0"
                        :canEdit='canEdit'
                        :prizeHistory='prize'
                        @prizeWasAdded="savePromise"></app-prize>
        </transition>
    </div>
</template>

<script>
    import NewTask from './NewTask.vue';
    import TaskView from './TaskView.vue';
    import Prize from './Prize.vue';
    import {
        promiseBus
    } from '../../main';
    import store from '../../api/store';

    export default {
        data() {
            return {
                tasks: [],
                prize: '',
                canEdit: true,

            }
        },
        methods: {
            deleteTask(i) {
                console.log(i)
                this.tasks.splice(i, 1);
            },
            savePromise($event) {
                this.prize = $event;
                let prom = {
                    prize: this.prize,
                    tasks: this.tasks
                };
                store.storeAdd(prom);
            },
            loadPromise() {
                console.log('start');
                promiseBus.$on('historyWasCalled', i => {
                        console.log('invoked');
                        let currentPromise = store.getPromises()[i];
                        this.tasks = currentPromise.tasks;
                        this.prize = currentPromise.prize;
                        this.canEdit = false;
                        console.log('Promise.vue in $on', this.prize);
                });
                }
            },
            mounted() {
                  console.log('mounted');
                  this.loadPromise();

              },
            components: {
                'app-new-task': NewTask,
                'app-task-view': TaskView,
                'app-prize': Prize,
            }
        }
</script>

<style scoped lang="scss">
    .container {
        width: 60%;
        margin: 0 auto;
        font-family: "Comic Sans MS";
    }
    
    .prize-slide-enter-active {
        transition: all .6s ease;
    }
    
    .prize-slide-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .prize-slide-enter,
    .prize-slide-leave-to
    /* .slide-fade-leave-active для <2.1.8 */
    
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>