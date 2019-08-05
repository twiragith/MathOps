<template>
    <div class="container">
        <circular-count-down-timer
        :initial-value="60"
        :stroke-width="5"
        :seconds-stroke-color="'#f00'"
        :minutes-stroke-color="'#0ff'"
        :hours-stroke-color="'#0f0'"
        :underneath-stroke-color="'lightgrey'"
        :seconds-fill-color="'#00ffff66'"
        :minutes-fill-color="'#00ff0066'"
        :hours-fill-color="'#ff000066'"
        :size="150"
        :padding="40"
        :hour-label="'hours'"
        :minute-label="'minutes'"
        :second-label="'seconds'"
        :show-second="true"
        :show-minute="true"
        :show-hour="false"
        :show-negatives="false"
        :paused=null
        :notify-every="'minute'"
        @finish="finished"
        @update="updated"
        
></circular-count-down-timer>
        <v-form @submit.prevent="create">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-xs-center">MathOps Quiz : Fixed</h1>
                <h2 class="text-xs-center">Faced quizes : {{ this.localCounter }}</h2>
                <h2 class="text-xs-center">Corrctly answered : {{ this.localCorrectCounter}}</h2>
                <h2 class="text-xs-center">your current accuracy : {{ this.localAccuracy }} %</h2>
            </div>
            <!-- <div v-if="localCounter >= 2"> -->
            
            <!-- </div> -->
        </div>
        <hr>
        <br>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    <div v-if="localCounter < 15">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                    </div>
                    <div v-else class="text-center">
                        
                        <!-- <router-link to="/startPageFixed"> -->
                            <!-- <v-btn color="green" >Finish</v-btn> -->
                        <h2 class="align-center" >Test Finished</h2>
                        <h4>save and restart to include this result in the ranking</h4>
                        <!-- </router-link> -->
                        
                        
                    </div>
                </transition>
            </div>
        </div>
        <br>
        <hr>
        <div class="text-md-center">
            <router-link to="/startPageFixed">
            <v-btn color="red" @click="restartCounting">Stop</v-btn>
            </router-link>
            
                <v-btn
                color="green"
                type="submit"
                @click="restartCounting();"
                
                >Save and Restart</v-btn>
            
            
           
            <!-- <v-btn color="green" >restart counting</v-btn> -->
        </div>
        </v-form>
    </div>
</template>

<script>

    import { mapState,mapMutations,mapGetters } from 'vuex'

    import startPageFixed from './quizFixed/startPageFixed.vue';
    import QuestionFixed from './quizFixed/QuestionFixed.vue';
    import AnswerFixed from './quizFixed/AnswerFixed.vue';
    import wrongAnswerFixed from './quizFixed/wrongAnswerFixed.vue';

    export default {
        data() {
            return {
                mode: 'app-question',
                form: {
                test_id: 3,
                correct_answers: 10,
                questions:1,
                accuracy:1
            },
            visible:1
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
            finished() {
                this.restartCounting();
                this.$router.push('/startPageFixed')
                console.log('finished');
            },
            
            updated: (status) => {
                console.log(status);    //{"value": 144, "seconds": 24, "minutes": 2, "hours": 0}
            },
            visibleOff(){
                this.visible = 0; 
            },
            create() {
            axios
            .post("api/fixedTest", this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => (this.errors = error.response.data.errors));
        },

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
                restartCounting(){          
                this.form.correct_answers=this.localCorrectCounter;
                this.form.questions=this.localCounter;
                this.form.accuracy=this.localAccuracy;
                this.RESTART_COUNTING();
            },
            testfun:function(){
            this.TEST_FUN()
            }
        },

            disabled() {
            return (this.visible);

            },
        
        components: {
            appQuestion: QuestionFixed,
            appAnswer: AnswerFixed,
            appWrongAnswer: wrongAnswerFixed
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
