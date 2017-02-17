<template>
    <div>
        <div class="task-view">
            <ul>
                <li v-for="(task, index) in tasks" @click="deleteTask(index)">{{ task }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['tasks', 'canEdit'],
        data() {
            return {

            }
        },
        methods: {
            deleteTask(index) {
                console.log(index)
                if (this.canEdit === true) {
                    this.$emit('taskWasDeleted', index)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .task-view {
        /*

        border-radius: 5px;
        !*border: 1px solid #69A7C7;*!
        background-color: #E8EAF6;


        text-align: center;
        font-size: 32px;
        color: black;
        text-align: left;*/
    }
    
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    
    li {
        margin-bottom: 25px;
        flex: 0 2 auto;
        background-color: #E8EAF6;
        border-radius: 5px;
        padding: 10px 25px;
        font-size: 32px;
        color: black;
        &:hover {
            background-color: #EF5350;
            color: white;
        }
    }
</style>