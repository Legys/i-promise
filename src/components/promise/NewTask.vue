<template>
    <div>
        <div class="new-task">
            <p>Я обещаю <span v-if='!canEdit'>{{ task }}</span></p>
            <input v-if='canEdit' class="task-input" @keypress.enter="addNew" type="text" v-model="task">
        </div>
    </div>
</template>
<script>
    export default {
        props: ['canEdit'],
        data() {
            return {
                task: ''

            }
        },
        methods: {
            addNew() {
                this.$emit('newTaskAdded', this.task);
                this.task = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .new-task {
        margin-bottom: 25px;
        padding: 25px;
        border-radius: 5px;
        /*    border: 1px solid #69A7C7;*/
        background-color: #3F51B5;
        min-height: 150px;
        text-align: center;
        font-size: 32px;
        color: white;
    }
    
    .task-input {
        box-sizing: border-box;
        width: 45%;
        padding: 10px 6%;
        border: none;
        border-bottom: 4px solid white;
        background-color: transparent;
        color: white;
        font-size: 32px;
    }
    
    .task-input:focus {
        outline: none;
    }
</style>