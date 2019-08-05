<template>
    <div>
        <v-card
            max-width="344"
            class="mx-auto"
        >
            <v-card-title>All player ranking</v-card-title>
        </v-card>
        
    <v-card max-width="380"
            
            class="mx-auto">
            
            <div class="align-content-xl-center">
    <table class="my_table" >
        <tr>
            <th>Name</th>
            <th>face the test</th>
            <th>No. of Correct answers</th>
            <th>No. of Total questions</th>
            <th>Accuracy %</th>
        </tr>
        <tr v-for="test in orderedAccuracy" :key="test.name">
                    <td>{{ test.user_name }}</td>
                    <td>{{ test.created_at }}</td>
                    <td>{{ test.correct_answers }}</td>
                    <td>{{ test.questions }}</td>
                    <td>{{ test.accuracy }}</td>
                </tr>
        
            
    </table>
    </div>
    </v-card>
    </div>
</template>
<script>
export default {
    data() {
    return {
      form: {
        test_id: 3,

      },
      testV:{} ,

    };
  },
  created() {
    axios.get("api/fixedTest/rank").then(res => (this.testV=res.data.data));
    console.log();
    
    
  },
  methods: {


  },
  /* <p v-for="user in orderedUsers">{{ user.name }}</p> */
  /* <p v-for="test in orderedAccuracy">{{ user.name }}</p> */

computed: {
  orderedAccuracy: function () {
    return _.orderBy(this.testV, 'accuracy','desc')
  }
}
  
};

</script>
<style>
table {
  border-collapse: collapse;
}
 th {
  background: rgb(163, 175, 245);
}

th, td {
  border: 1px solid rgb(250, 187, 187);
  padding: 8px;
}

tr:nth-child(even) {
  background: rgb(201, 255, 204);
}

tr:hover {
  background: rgb(2, 142, 223);
}
</style>
