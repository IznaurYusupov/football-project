<template>
   <div class="teams-site">
      <h2>Willkommen!</h2>
      <h3>Hier kannst du die Teams sehen und auch dein Team anmelden.</h3>

   <h4>Hier finden Sie die bereits angemeldeten Teams: {{ teams.length }}</h4>

   <div class="teams-container">
      <div class="teams" v-for="item in teams" :key="item.id">
         <h4 class="name">{{ item.name }}</h4>
         <h5 class="captain">Kapitän: {{ item.captain }}</h5>
      </div>
   </div>
   </div>

   <div class="anmelden">
      <h4>Hast du Interesse? Dann melde dein Team an!</h4>
      <button class="button-anmelden">Team anmelden</button>
   </div>

   
   
</template>

<script>
import data from '../data.js'

export default {
   data() {
      return {
         teams: data,
      }
   },
}
</script>


<style scoped>
h3 {
   margin-bottom: 30px;
   font-weight: bold;
}

.teams-container {
   display: flex;
   justify-content: space-between;
}

.teams {
   background-color: aquamarine;
   border-radius: 5px;
   padding: 20px 15px;
}

.teams-site{
  
}

.anmelden{
   margin-top: 40px;
}

.button-anmelden{
   background-color: greenyellow;
   font-size: 30px;
   font: bold;
}

.table-title{
   margin-top: 30px;
}

.table{
   
   border: 1px solid black;
  width: 72%;
  justify-content: space-between;
  
}

th, td{
   border: 1px solid #dddddd;
  text-align: left;
 
  padding: 10px 8px;
  
}

</style>