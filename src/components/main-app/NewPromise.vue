<template>
    <div class="new-promise">
        <p>Дать новое обещание</p>
    </div>
</template>

<script>
    import TaskMin from './TaskMin.vue';
    import VLink from '../VLink.vue';

    export default {
        components: {

        }
    }
</script>

<style scoped lang="scss">
    .new-promise {
        /*display: flex;
        flex-flow: column nowrap;*/
        width: 200px;
        min-height: 50px;
        background-color: #3949AB;
        font-size: 32px;
        border-radius: 4px;
        text-align: center;
        padding: 10px 25px;
        &:hover {
            background-color: #3F51B5;
        }
    }
</style>