<template>
   <footer>
      <div class="kontakt">
         <h3>Kontakt</h3>
         <ul class="kontakt-table">
            <li>Tel.: +43 665 65489195</li>
            <li>E-Mail: iznaur.yusupov@edu.szu.at</li>
         </ul>
      </div>

      <div>
         <h3>Sitemap</h3>
         <div class="sitemap">
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Mannschaften anzeigen</a></li>
               <li><a href="#">Login</a></li>
            </ul>
         </div>
      </div>

      <div class="impressum">
         <h3>Impressum</h3>
         <ul class="impressum-table">
            <li>Schulzentrum HTL HAK</li>
            <li>Ungargasse 69</li>
            <li>1030 Wien</li>
            <li>Österreich</li>
         </ul>
      </div>
   </footer>
</template>


<style scoped>
footer {
   margin-top: 70px;
   padding: 25px 38px;
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px;
   background-color: gainsboro;
   border-radius: 0 0 15px 15px;
}

.impressum-table {
   font-family: 'Times New Roman', Times, serif;
   font-size: 19px;
}

.kontakt-table {
   font-family: 'Times New Roman', Times, serif;
   font-size: 19px;
}

.sitemap {
   font-family: 'Times New Roman', Times, serif;
   font-size: 19px;
}

.sitemap ul li a {
   color: black;
}

.sitemap ul li a:hover {
   text-decoration: underline;
}
</style>