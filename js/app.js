new Vue({
  el : '#vue-app',
  data : {
    pageTitle : 'Project 1',
    pageSubTitle : 'Vuejs tutorial',
    bottomMessage : 'Project by KGS',
    name : 'Karthik!',
    age : 27,
    website : 'https://www.google.com',
    websiteTag : '<p>Click here to visit <a href="https://www.orsted.com">Orsted</a></p>',
    x: 0,
    y: 0,
  },
  methods : {
    greet:function(timeOfDay){
      return "Good " + timeOfDay +" " + this.name + "!";
    },
    older:function(inc){
      this.age += inc;
    },
    younger:function(dec){
      this.age -= dec;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click:function(){
      alert('You clicked me!');
    }
  }
});
