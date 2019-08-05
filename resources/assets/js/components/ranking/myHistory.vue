<template>
    <div>
        <v-card
            max-width="344"
            class="mx-auto"
        >
            <v-card-title>My History</v-card-title>
        </v-card>
        
    <v-card max-width="320"
            
            class="mx-auto">
            
            <div class="align-content-xl-center">
    <table class="my_table" >
        <tr>
            <th>you face the test</th>
            <th>No. of Correct answers</th>
            <th>No. of Total questions</th>
            <th>Accuracy %</th>
        </tr>
        <tr v-for="test in testV" :key="test.name">
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
    axios.get("api/fixedTest").then(res => (this.testV=res.data.data));
    console.log();
    
    
  },
  methods: {


  },
  
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
