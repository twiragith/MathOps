<template>
    <div class="text-md-center">
        <h1 class="text-md-center red--text text--lighten-1">That's Wrong!</h1>
        <hr>
        <v-btn color="info" @click="incremnentLocalCounter();currentAccuracyCalculator();onNextQuestion();">Next Question</v-btn>
    </div>
</template>
<style>

</style>
<script>

    import { mapState,mapMutations,mapGetters } from 'vuex'

    export default{

        computed:{
            ...mapState([
            'testState',
            'localCounter',
            'localCorrectCounter',
            'localAccuracy',
            ]),
        },

        methods: {

            onNextQuestion() {
                this.$emit('confirmed');
            },
            ...mapMutations([
            'INCREMENT_LOCAL_COUNTER',
            'INCREMENT_LOCAL_CORRECT_COUNTER',
            'CURRENT_ACCURACY_CALCULATOR',
            'TEST_FUN'
            ]),
            incremnentLocalCounter:function(){
            this.INCREMENT_LOCAL_COUNTER()
            },
            incremnentLocalCorrectCounter:function(){
            this.INCREMENT_LOCAL_CORRECT_COUNTER()
            },
            currentAccuracyCalculator:function(){
                this.CURRENT_ACCURACY_CALCULATOR()
            },
            testfun:function(){
            this.TEST_FUN()
            }
        }
        
    }
</script>
