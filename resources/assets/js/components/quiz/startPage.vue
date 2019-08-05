<template>
    <div class="text-md-center">
        <h1 color ="info">you are about to face a mathOps quiz...</h1>
        <div class="text-md-center">
            <v-flex xs12 sm6 class="py-2">
                <p>include multiplication and division</p>
                <v-btn-toggle v-model="toggle_one" mandatory >
                <v-btn flat>
                    Yes
                </v-btn>
                <v-btn flat>
                    No
                </v-btn>
                </v-btn-toggle>
            </v-flex>
        </div>
        <router-link to="/quizApp">
            <v-btn @click="saveChanges()" color="info">Start</v-btn>
        </router-link>
    </div>
</template>
<script>

import { mapState,mapMutations,mapGetters } from 'vuex'

export default {
    data(){
        return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
        toggle_exclusive: 2,
        toggle_multiple: [0, 1, 2]
        }
    },

    computed:{
        ...mapState([
        'testState',
        'localCounter',
        'mulDev'
        ]),
    },
    
    methods:{
        ...mapMutations([
            'INCREMENT_LOCAL_COUNTER',
            'TEST_FUN',
            'MUL_DEV_ON',
            'MUL_DEV_OFF',
        ]),
        incremnentLocalCounter:function(){
            this.INCREMENT_LOCAL_COUNTER()
        },
        saveChanges:function(){
            if(this.toggle_one==0){
                this.MUL_DEV_ON();
            }
            else{
                this.MUL_DEV_OFF();
            };
            /* this.TEST_FUN() */
        },
        testfun2:function(){
            this.MUL_DEV_OFF();
            return;
            /* this.TEST_FUN() */
        }
    }
}
</script>