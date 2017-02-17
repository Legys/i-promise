<template>
    <div class="task-mini">
        <slot name="head"></slot>
        <slot name="content"><p></p></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .task-mini {
        margin: 20px;
        background-color: #E8EAF6;
        color: black;
        width: 270px;
        min-height: 70px;
        border-radius: 4px;
        text-align: center;
        padding: 10px 10px;
        transition: background-color 4s;
        &:hover {
            background-color: #3F51B5;
            color: white;
        }
    }
    
    .promise-title {
        color: white;
    }
</style>