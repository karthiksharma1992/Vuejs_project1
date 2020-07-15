new Vue({
  el : '#vue-app',
  data : {
    pageTitle : 'Project 1',
    pageSubTitle : 'Vuejs tutorial',
    bottomMessage : 'Project by KGS',
    name : 'Karthik!'
  },
  methods : {
    greet:function(timeOfDay){
      return "Good " + timeOfDay +" " + this.name + "!";
    }
  }
});
