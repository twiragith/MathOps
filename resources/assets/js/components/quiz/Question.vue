<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout align-center justify-center>
            <v-card-title >
            <div>
                <h3 class="text-xs-center">{{ question }}</h3>
            </div>
            </v-card-title>
        </v-layout>
        <v-layout align-center justify-center>
            <v-card-actions >
                    <v-btn color="info" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</v-btn>
            
                    <v-btn color="info" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</v-btn>
            </v-card-actions>
        </v-layout>
        <v-layout align-center justify-center>
            <v-card-actions>   
                    <v-btn color="info" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</v-btn>
                        
                    <v-btn color="info" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</v-btn>   
            </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
    
  </v-layout>
</template>

<style>

</style>
<script>

    import { mapState,mapMutations,mapGetters } from 'vuex'

    const MODE_ADDITION = 1;
    const MODE_SUBTRACTION = 2;
    const MODE_MULTIPLICATION = 3;
    const MODE_DEVISION = 4;
    export default{
        data() {
            return {
                question: 'Oops, an error ocurred :/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0}
                ],
                operatorEND:1,
                operatorSTART:1,
                operatorExcept:0,

            };
        },

        computed:{
        ...mapState([
        'testState',
        'mulDev'
        ]),
        },

        methods: {
            operatorChooser(){
                if(this.mulDev==1){
                    this.operatorEND=4;
                }else{
                    this.operatorEND=2;
                }
            },
            generateQuestion() {
                const firstNumber = this.generateRandomNumber(1, 100);
                const secondNumber = this.generateRandomNumber(1, 100);
                const modeNumber = this.generateRandomNumber(this.operatorSTART, this.operatorEND,this.operatorExcept);

                let correctAnswer = 0;

                switch (modeNumber) {
                    case MODE_ADDITION:
                        correctAnswer = firstNumber + secondNumber;
                        this.question = `What's ${firstNumber} + ${secondNumber}?`;
                        break;
                    case MODE_SUBTRACTION:
                        correctAnswer = firstNumber - secondNumber;
                        this.question = `What's ${firstNumber} - ${secondNumber}?`;
                        break;
                    case MODE_MULTIPLICATION:
                        correctAnswer = firstNumber * secondNumber;
                        this.question = `What's ${firstNumber} * ${secondNumber}?`;
                        break;
                    case MODE_DEVISION:
                        correctAnswer = firstNumber / secondNumber;
                        this.question = `What's ${firstNumber} / ${secondNumber}?`;
                        break;
                    default:
                        correctAnswer = 0;
                        this.question = 'Oops, an Error occurred :/';
                }

                this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[0].correct = false;
                this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[1].correct = false;
                this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[2].correct = false;
                this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[3].correct = false;

                const correctButton = this.generateRandomNumber(0, 3);
                this.btnData[correctButton].correct = true;
                this.btnData[correctButton].answer = correctAnswer;
            },
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min;
                console.log(min, max, rndNumber);
                if (rndNumber == except) {
                    return this.generateRandomNumber(min, max, except);
                }
                return rndNumber;
            },
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect);
            }
        },

        ...mapMutations([
            'MUL_DEV_ON',
            'MUL_DEV_OFF',
            'TEST_FUN'
        ]),
        mulDevOn:function(){
            this.MUL_DEV_ON()
        },
        mulDevOff:function(){
            this.MUL_DEV_OFF()
        },
        testfun:function(){
            this.TEST_FUN()
        },

        created() {
            this.operatorChooser();
            this.generateQuestion();
        }
    }
</script>
