<template>
   <header class="header">
      <img class="logo" src="../assets/img/logo.png" alt="Logo" />

      <nav>
         <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/teams">Teams</router-link></li>
            <li><a href="#">Login</a></li>
         </ul>
      </nav>
   </header>
</template>


<style scoped>
header {
   padding: 0 35px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.logo {
   width: 130px;
   height: 130px;
}

ul {
   display: flex;
   gap: 40px;
   font-size: 20px;
   font-weight: 500;
}

li a {
   color: black;
}

li a:hover {
   text-decoration: underline;
}
</style>