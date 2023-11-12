<template>
   <div class="wrapper">
      <Header />

      <main>
         <router-view />
      </main>

      <Footer />
   </div>
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
   components: {
      Header,
      Footer,
   }
}
</script>


<style>
.wrapper {
   max-width: 1000px;
   background-color: #fff;
   margin: 0 auto;
   border-radius: 15px;
}

main {
   padding: 0 35px;
}
</style>
