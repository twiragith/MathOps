<template>
    <div class="text-md-center">

    <h1 class="text-xs-center" color="blue">Available tests</h1>
    <v-btn color="info" @click="settingUpPage();showConfigOn();"> test 01 </v-btn>
    <div v-if="this.showConfig==1">
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-layout align-center justify-center>
                <v-card-title >
                <div>
                    <h3 class="text-xs-center">you are about to face a mathOps <strong class="red--text text--lighten-1">Fixed</strong>  quiz...</h3>
                    <h3 class="text-xs-center">this test includes <strong class="red--text text--lighten-1">{{ this.fixNoOfQuiz }} quizes</strong>with following fixed configurations</h3>
                </div>
                </v-card-title>
            </v-layout>
            <v-layout align-center justify-center>
                <v-card-actions >
                    <v-container fluid>
                        <v-radio-group v-model="column" column >
                            <v-radio label="test your skills with multiple operators" value="radio-1" disabled></v-radio>
                            <v-radio label="test your skill on a single operator" value="radio-2" disabled></v-radio>
                        </v-radio-group>
                    </v-container>
                </v-card-actions>
            </v-layout>
            <div v-if="this.column=='radio-1'">
                <v-layout align-center justify-center>
                    <v-card-actions >
                    <v-flex xs12 sm6 class="py-2">
                        <strong class="blue--text text--lighten-1">Choose <b> operators</b> you like to test</strong>
                        <v-btn-toggle v-model="toggle_one" mandatory >
                        <v-btn flat disabled>
                            +  -
                        </v-btn>
                        <v-btn flat disabled>
                            *  /
                        </v-btn>
                        <v-btn flat disabled>
                            + - * /
                        </v-btn>
                        </v-btn-toggle>
                    </v-flex>
                    </v-card-actions>
                </v-layout>
            </div>
            <div v-if="this.column=='radio-2'">
                <v-layout align-center justify-center>
                    <v-card-actions >
                    <v-flex xs12 sm6 class="py-2">
                        <strong class="blue--text text--lighten-1">Choose <b> operators</b> you like to test</strong>
                        <v-btn-toggle v-model="toggle_two" mandatory >
                        <v-btn flat>
                            +
                        </v-btn>
                        <v-btn flat>
                            -
                        </v-btn>
                        <v-btn flat>
                            *
                        </v-btn>
                        <v-btn flat>
                            /
                        </v-btn>
                        </v-btn-toggle>
                    </v-flex>
                    </v-card-actions>
                </v-layout>
            </div>
            <v-layout align-center justify-center>
                <v-card-actions>   
                        <v-content class="ma-4">
                            <v-text-field placeholder="input minimum value you would like to get here"
                                            type="number"
                                            class="inputPrice"
                                            v-model="min"
                                            disabled
                                            >
                            </v-text-field>
                </v-content>
                </v-card-actions>
                <v-card-actions>   
                        <v-content class="ma-4">
                            <v-text-field placeholder="input maximum value you would like to get here"
                                            type="number"
                                            class="inputPrice"
                                            v-model="max"
                                            disabled
                                            >
                            </v-text-field>
                </v-content>
                </v-card-actions>
            
            </v-layout>
        </v-card>
            <div v-if="this.column=='radio-1'">
                <router-link to="/quizAppFixed">
                    <v-btn @click="saveChanges()" color="info">Start</v-btn>
                </router-link>
            </div>
            <div v-if="this.column=='radio-2'">
                <router-link to="/quizAppFixed">
                    <v-btn @click="saveChangesSingleOpMode()" color="info">Start</v-btn>
                </router-link>
            </div>
            <v-btn @click="showConfigOff()" color="info">Back</v-btn>
        </v-flex>
    </div>
    </div>
</template>
<script>

import { mapState,mapMutations,mapGetters } from 'vuex'

export default {
    data(){
        return {
        min:20,
        max:100,
        text: 'center',
        icon: 'justify',
        toggle_one: 2,
        toggle_two: 0,
        column: "radio-1",
        showConfig:0,
        }
    },

    computed:{
        ...mapState([
        'testState',
        'localCounter',
        'mulDev',
        'fixNoOfQuiz',
        'mathOpsMinFix',
        'mathOpsMaxFix',
        'multipleOpFix',
        'singleOpFix',
        'singleOpModeFix'
        ]),
    },
    
    methods:{
        ...mapMutations([
            'INCREMENT_LOCAL_COUNTER',
            'TEST_FUN',
            'MUL_DEV_ON',
            'MUL_DEV_OFF',
            'MUL_DEV_ONLY',
            'MIN_SETTER',
            'MAX_SETTER',
            'SET_SINGLE_OP_MODE',
            'SET_SINGLE_OP_MODE_OFF',
            'SET_SINGLE_OP_PLUS',
            'SET_SINGLE_OP_MINUS',
            'SET_SINGLE_OP_MUL',
            'SET_SINGLE_OP_DEV',
        ]),
        incremnentLocalCounter:function(){
            this.INCREMENT_LOCAL_COUNTER()
        },
        minMaxSetter(min,max){
            this.MIN_SETTER(min),
            this.MAX_SETTER(max)
        },
        saveChanges:function(){
            if(this.toggle_one==2){
                this.MUL_DEV_ON();
            }
            else if(this.toggle_one==0){
                this.MUL_DEV_OFF();
            }else{
                this.MUL_DEV_ONLY();
            };
             this.minMaxSetter(this.min,this.max);
             this.SET_SINGLE_OP_MODE_OFF();
             /* this.minMaxSetter(1,200); */
        },
        saveChangesSingleOpMode:function(){
            if(this.toggle_two==0){
                this.SET_SINGLE_OP_PLUS();
            }
            else if(this.toggle_two==1){
                this.SET_SINGLE_OP_MINUS();
            }else if(this.toggle_two==2){
                this.SET_SINGLE_OP_MUL();
            }
            else{
                this.SET_SINGLE_OP_DEV();
            };
             this.minMaxSetter(this.min,this.max);
             this.SET_SINGLE_OP_MODE();
             /* this.minMaxSetter(1,200); */
        },
        settingUpPage:function(){
            this.min=this.mathOpsMinFix;
            this.max=this.mathOpsMaxFix;
            this.toggle_one=this.multipleOpFix;
            this.toggle_two=this.singleOpFix;
            if(this.singleOpModeFix==1){
                column: "radio-1";
            }else{
                column: "radio-2";
            }

        },
        showConfigOn:function(){
            this.showConfig=1;
        },
        showConfigOff:function(){
            this.showConfig=0;
        },
        created() {
            
        },
        
        testfun2:function(){
            this.MUL_DEV_OFF();
            return;
            /* this.TEST_FUN() */
        }
    }
}
</script>
<style>
    .inputPrice input[type='number'] {
        -moz-appearance:textfield;
    }
    .inputPrice input::-webkit-outer-spin-button,
    .inputPrice input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>
