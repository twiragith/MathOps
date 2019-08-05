<template>
    <div>
        <h1>mulDev:{{ mulDev }}</h1>
        <h1>toggle one:{{ toggle_one }}</h1>
        <v-btn @click="testfun1()">On</v-btn>
        <v-btn @click="testfun2()">Off</v-btn>
        <v-flex xs12 sm6 class="py-2">
            <p>Mandatory</p>
            <v-btn-toggle v-model="toggle_one" mandatory >
            <v-btn flat>
                On
            </v-btn>
            <v-btn flat>
                Off
            </v-btn>
            </v-btn-toggle>
        </v-flex>
        <v-btn @click="testfun1()">Start</v-btn>
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
        testfun1:function(){
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