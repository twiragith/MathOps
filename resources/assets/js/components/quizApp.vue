<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">MathOps Quiz</h1>
                <h2 class="text-xs-center">Faced quizes : {{ localCounter }}</h2>
                <h2 class="text-xs-center">Corrctly answered : {{ localCorrectCounter}}</h2>
                <h2 class="text-xs-center">your current accuracy : {{localAccuracy}} %</h2>
            </div>
        </div>
        <hr>
        <br>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                    
                </transition>
            </div>
        </div>
        <br>
        <hr>
        <div class="text-md-center">
            <router-link to="/startPage">
            <v-btn color="red" >Stop</v-btn>
            </router-link>
            <v-btn color="green" @click="restartCounting">restart counting</v-btn>
        </div>
    </div>
</template>

<script>

    import { mapState,mapMutations,mapGetters } from 'vuex'

    import startPage from './quiz/startPage.vue';
    import Question from './quiz/Question.vue';
    import Answer from './quiz/Answer.vue';
    import wrongAnswer from './quiz/wrongAnswer.vue';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        computed:{
            ...mapState([
            'testState',
            'localCounter',
            'localCorrectCounter',
            'localAccuracy'
            ]),
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-wrongAnswer';
                  
              }
          },
          ...mapMutations([
            'INCREMENT_LOCAL_COUNTER',
            'INCREMENT_LOCAL_CORRECT_COUNTER',
            'CURRENT_ACCURACY_CALCULATOR',
            'TEST_FUN',
            'RESTART_COUNTING'
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
            restartCounting:function(){
                this.RESTART_COUNTING()
            },
            testfun:function(){
            this.TEST_FUN()
            }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer,
            appWrongAnswer: wrongAnswer
        }
    }
</script>

<style>

    .flip-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
