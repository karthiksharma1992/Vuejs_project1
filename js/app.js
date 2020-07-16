new Vue({
  el : '#vue-app',
  data : {
    pageTitle : 'Project 1',
    pageSubTitle : 'Vuejs tutorial',
    bottomMessage : 'Project by KGS',
    name : 'Karthik!',
    website : 'https://www.google.com',
    websiteTag : '<p>Click here to visit <a href="https://www.orsted.com">Orsted</a></p>',
  },
  methods : {
    greet:function(timeOfDay){
      return "Good " + timeOfDay +" " + this.name + "!";
    }
  }
});
