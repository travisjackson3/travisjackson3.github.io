Vue.createApp({

    data() {
      return {

        count: 0
      }
    },
    methods: {
        increment() {
            this.count++
          },

          myFunction(){
            document.getElementById("myLinks");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }
  
    }
  
  }).mount('#app')
  