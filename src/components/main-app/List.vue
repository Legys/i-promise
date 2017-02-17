<template>
    <div class="list">
       <v-link href="/task">
           <app-task-min v-for="n in 5"></app-task-min>
       </v-link>
    </div>
</template>

<script>
    import TaskMin from './TaskMin.vue';
    import VLink from '../VLink.vue';

    export default {
        components: {
            'app-task-min': TaskMin,
            'v-link': VLink
        }
    }
</script>

<style scoped lang="scss">
    .list {
        display: flex;
        flex-flow: column nowrap;
    }
</style>