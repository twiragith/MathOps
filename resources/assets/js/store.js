import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        testState:'this is a test',
        localCounter:0,
        localCorrectCounter:0,
        localAccuracy:0,
        mulDev:0,
        singleOp:0,
        singleOpMode:0,
        mathOpsOn:0,
        mathOpsMin:1,
        mathOpsMax:100,
        fixNoOfQuiz:5,
        multipleOpFix:2,
        singleOpFix:0,
        singleOpModeFix:0,
        mathOpsOnFix:0,
        mathOpsMinFix:40,
        mathOpsMaxFix:50,
    },

    getters:{
        localCounter: state=>{
            return state.localCounter
        }
    },

    mutations:{
        INCREMENT_LOCAL_COUNTER:(state)=>{
            state.localCounter=state.localCounter+1;
        },
        INCREMENT_LOCAL_CORRECT_COUNTER:(state)=>{
            state.localCorrectCounter=state.localCorrectCounter+1;
        },
        CURRENT_ACCURACY_CALCULATOR:(state)=>{
            if (state.localCounter==0||state.localCorrectCounter==0){
                state.localAccuracy=0;
                return;
            }else{
                state.localAccuracy= (state.localCorrectCounter/state.localCounter)*100;
                state.localAccuracy=Math.round(state.localAccuracy);
                return;
            }
        },
        MUL_DEV_ON:(state)=>{
            state.mulDev=1;
        },
        MUL_DEV_OFF:(state)=>{
            state.mulDev=0;
        },
        MUL_DEV_ONLY:(state)=>{
            state.mulDev=2;
        },
        SET_SINGLE_OP_MODE:(state)=>{
            state.singleOpMode=1;
        },
        SET_SINGLE_OP_MODE_OFF:(state)=>{
            state.singleOpMode=0;
        },
        SET_SINGLE_OP_PLUS:(state)=>{
            state.singleOp=0;
        },
        SET_SINGLE_OP_MINUS:(state)=>{
            state.singleOp=1;
        },
        SET_SINGLE_OP_MUL:(state)=>{
            state.singleOp=2;
        },
        SET_SINGLE_OP_DEV:(state)=>{
            state.singleOp=3;
        },
        RESTART_COUNTING:(state)=>{
            state.localCounter=0,
            state.localCorrectCounter=0,
            state.localAccuracy=0
        },
        MIN_SETTER:(state,min)=>{
            state.mathOpsMin=min
        },
        MAX_SETTER:(state,max)=>{
            state.mathOpsMax=max
        },
        TEST_FUN:(state)=>{
            state.localCounter++
        },
        SETTER_NO_OF_QUIZES:(state,payload)=>{
            state.fixNoOfQuiz=payload;
        },
        SETTER_MULTIPLE_OP_FIX:(state,payload)=>{
            state.multipleOpFix=payload;
        },
        SETTER_SINGLE_OP_MODE_FIX:(state,payload)=>{
            state.singleOpModeFix=payload;
        },
        SETTER_SINGLE_OP_FIX:(state,payload)=>{
            state.singleOpFix=payload;
        },
        SETTER_MIN_FIX_FIX:(state,payload)=>{
            state.mathOpsMinFix=payload;
        },
        SETTER_MAX_FIX:(state,payload)=>{
            state.mathOpsMaxFix=payload;

        },
    },
    actions:{

    }
})