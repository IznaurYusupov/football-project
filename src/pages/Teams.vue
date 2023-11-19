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

   <div class="table-title">
      <h4>
         Gruppe 1:
      </h4>
   </div>

  <div class="table">
   <table>
      <tr>
         <th>Mannschaft</th>
         <th>Spiele</th>
         <th>Siege</th>
         <th>Unentschieden</th>
         <th>Niederlagen</th>
         <th>Tordifferenz</th>
         <th>Punkte</th>
      </tr>
      <tr>
         <td>{{teams[1].name}}</td>
         <td>6</td>
         <td>6</td>
         <td>0</td>
         <td>0</td>
         <td>13</td>
         <td>18</td>
      </tr>
      <tr>
         <td>{{teams[0].name}}</td>
         <td>6</td>
         <td>3</td>
         <td>1</td>
         <td>2</td>
         <td>7</td>
         <td>10</td>
      </tr>
      <tr>
         <td>{{teams[2].name}}</td>
         <td>6</td>
         <td>2</td>
         <td>1</td>
         <td>3</td>
         <td>4</td>
         <td>7</td>
      </tr>
      <tr>
         <td>{{teams[3].name}}</td>
         <td>6</td>
         <td>0</td>
         <td>0</td>
         <td>6</td>
         <td>-15</td>
         <td>0</td>
      </tr>
   </table>
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