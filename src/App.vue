<template>
   <div class="wrapper">
      <Header />

      <main>
         <h1>Melde dein Team für den nächsten Fußball-Turnier an!</h1>

         <section class="section-teams">
            <h3>Bereits angemeldete Mannschaften: {{ teams.length }}</h3>

            <div class="registered-teams">
               <h4>Kommenden Turniere</h4>
               <p>Wintersport-Turnier: 18.01.2024</p>
               <p>Sommersport-Turnier: 25.06.2024</p>
            </div>
         </section>

         <section class="section-faq">
            <h3>FAQ</h3>
            <div class="faq">
               <div
                  class="faq-question"
                  v-for="(faq, index) in faqList"
                  :key="index"
               >
                  <button
                     class="accordion"
                     @click="togglePanel(index)"
                     :class="{ active: faq.isActive }"
                  >
                     {{ faq.question }}
                  </button>
                  <div class="panel" :style="panelStyle(index)">
                     {{ faq.answer }}
                  </div>
               </div>
            </div>
         </section>
      </main>

      <Footer />
   </div>
</template>


<script>
import data from '../data'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
   data() {
      return {
         teams: data,
         isActive: false,
         faqList: [
            {
               question: 'Was macht die Plattform?',
               answer:
                  'Die Plattform erstellt ein automatisches Gruppenturnier und eine KO-Phase, die für alle Kapitäne frei verfügbar sind.',
               isActive: false,
            },
            {
               question: 'Wie funktioniert das?',
               answer:
                  'Nachdem man sich registriert hat, meldet man seine Mannschaft als Kapitän an. Die Plattform sammelt alle Mannschaften und erstellt ein automatisches Gruppenturnier mit einer KO-Phase. Dieses Turnier kann man am Tag des Sportturniers online unter "Mannschaften anzeigen" aufrufen.',
               isActive: false,
            },
            {
               question: 'Wie registriert man sich?',
               answer:
                  'Unter Login kann man sich registrieren. Man bekommt dann eine Verifizierungsbestätigung auf die Email.',
               isActive: false,
            },
            {
               question: 'Bei wem kann ich mich melden, wenn ich Fragen habe?',
               answer:
                  'Bei Fragen können Sie sich bei folgenden Emails melden: - iznaur.yusupov@edu.szu.at - metin.arin@edu.szu.at',
               isActive: false,
            },
         ],
      }
   },

   components: {
      Header,
      Footer,
   },

   computed: {
      panelStyle() {
         return function (index) {
            return {
               maxHeight: this.faqList[index].isActive ? '1000px' : '0',
               padding: this.faqList[index].isActive ? '20px' : '0',
            }
         }
      },
   },

   methods: {
      togglePanel(index) {
         this.faqList[index].isActive = !this.faqList[index].isActive
      },
   },
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

h1 {
   margin: 25px 0;
   font-size: 22px;
   text-transform: uppercase;
   text-align: center;
}

h3 {
   margin-bottom: 20px;
   font-size: 21px;
}

.registered-teams {
   padding: 15px;
   background-color: #e89b7e;
   border: 2px solid orangered;
   width: 300px;
   border-radius: 10px;
}

.registered-teams h4 {
   font-size: 19px;
   margin-bottom: 10px;
}

.registered-teams p {
   font-size: 18px;
}

.section-faq {
   margin-top: 40px;
}

.faq-question {
   margin-bottom: 10px;
}

.accordion {
   background-color: #00a8ff;
   color: #fff;
   cursor: pointer;
   padding: 12px;
   width: 100%;
   border: none;
   text-align: left;
   outline: none;
   font-size: 20px;
   transition: 0.4s;
}

.active,
.accordion:hover {
   background-color: #00a8ff;
}

.accordion:after {
   content: '\002B';
   color: #fff;
   font-weight: bold;
   float: right;
   margin-left: 5px;
}

.active:after {
   content: '\2212';
}

.panel {
   /* padding: 0 10px; */
   background-color: #ececec;
   max-height: 0;
   overflow: hidden;
   transition: max-height 0.2s ease-out;
   font-size: 18px;
}

.panel div {
   margin-top: 10px;
}

.panel div span {
   display: block;
   font-weight: 600;
}
</style>
