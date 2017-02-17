<template>
    <div>
        <div class="prize">
            <label for="prize">Ради </label>
            <div class="prize__inpute">
                 <input v-if='canEdit' class="prize-input" type="text" name="prize" v-model="prize">
                 <p v-if='!canEdit'>{{ prizeHistory }}</p>
            </div>
            <transition name="confirm">
                    <div class="confirm" v-if="prize.length > 0">
                    <v-link href="/">
                        <button
                                class="button"
                                @click="confirmPrize">Дать обещание</button>
                    </v-link>
                </div>
            </transition>

        </div>
    </div>
</template>
<script>
    import VLink from '../VLink.vue';
    export default {
        props: ['canEdit', 'prizeHistory'],
        data() {
            return {
                prize: ''
            }
        },
        methods: {
            confirmPrize() {
                this.$emit('prizeWasAdded', this.prize);
            }
        },
        components: {
            'v-link': VLink

        }

    }
</script>

<style scoped lang="scss">
    .prize {
        margin-bottom: 25px;
        padding: 25px;
        border-radius: 5px;
        /*    border: 1px solid #69A7C7;*/
        background-color: #7986CB;
        min-height: 150px;
        text-align: center;
        font-size: 32px;
        color: white;
    }
    
    .prize-input {
        margin-bottom: 25px;
        box-sizing: border-box;
        width: 45%;
        padding: 10px 6%;
        border: none;
        border-bottom: 4px solid white;
        background-color: transparent;
        color: white;
        font-size: 32px;
    }
    
    .prize-input:focus {
        outline: none;
    }
    
    .button {
        min-width: 80px;
        min-height: 15px;
        background-color: #1A237E;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        &:hover {
            background-color: #303F9F;
        }
    }
    
    .confirm-enter-active {
        transition: all 1.2s ease;
    }
    
    .confirm-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .confirm-enter,
    .confirm-leave-to
    /* .slide-fade-leave-active для <2.1.8 */
    
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>