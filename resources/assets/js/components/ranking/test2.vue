<template>
    
<!--     <v-container>
            <v-list>sdasd
            {{ this.testV }}
            </v-list>
            <v-list-tile v-for="test in testV" :key="test.id">
                <v-list-tile-content>
                    <v-list-tile-title>{{ test.user_id}}</v-list-tile-title>
                    <v-list-tile-title> {{test.created_at  }} </v-list-tile-title>
                    
                </v-list-tile-content>
            </v-list-tile>

            
            
            

        <v-form @submit.prevent="create">

            <v-btn
            color="green"
            type="submit"
            :disabled="disabled"
            >Create</v-btn>
        </v-form>
    </v-container> -->
            <v-simple-table fixed-header height="300px">
                <thead>
                <tr>
                    <th class="text-left">Date</th>
                    <th class="text-left">Marks</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="test in testV" :key="test.name">
                    <td>{{ test.created_at }}</td>
                    <td>{{ test.correct_answers }}</td>
                </tr>
                </tbody>
            </v-simple-table>
    
</template>

<script>
export default {
  data() {
    return {
      form: {
        test_id: 3,
        correct_answers: 5
      },
      testV:{} ,
      categories: {},
      errors: {}
    };
  },
  created() {
    axios.get("api/like/r/r/fixedTest").then(res => (this.testV=res.data));
    console.log();
    
    
  },
  methods: {
      dateshow : function (value){
        var date=moment(value).fromNow(); // here u modify data 
        this.el.innerText=date; // and set to the view

    },
    create() {
      axios
        .post("api/like/r/r/fixedTest", this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => (this.errors = error.response.data.errors));
    }
  },
  computed: {
    disabled() {
      return !(this.form.test_id && this.form.correct_answers);
    }
  }
};
</script>

<style>
</style>
