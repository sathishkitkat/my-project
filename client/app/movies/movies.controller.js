'use strict';

(function(){

class MoviesComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.moviesData = [];
    this.socket =socket;
    this.data ='';
    this.movieObj= [];
     this.key ='';
    $scope.$on('$destory',function() {
      this.socket.unsyncupdates('moviesendpoint');
    });
  }
  getmovie(){
    this.$http.get('http://www.omdbapi.com/?t='+this.name+'&y='+this.year+'&plot=full&r=json').then (response =>{
    console.log(response.data);

    for(var key in response.data)
    {
     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' || key== 'Plot' || key== 'Response')
         {
        this.movieObj[key] = response.data[key];
      }
       this.socket.syncUpdates('moviesendpoint', this.movieObj);
     console.log(this.movieObj);
     }

  });

}
  Addmovies() {
this.$http.post('/api/moviesendpoints', {
     Title: this.movieObj.Title,
     Language: this.movieObj.Language,
     Genre: this.movieObj.Genre,
     Director: this.movieObj.Director,
     Actors: this.movieObj.Actors,
     Year: this.movieObj.Year,
     Poster: this.movieObj.Poster,
     Runtime: this.movieObj.Runtime
    // Status: false
   }).then (response=> {
   console.log(response);
  alert("Movie added successfully");

 });
}


$onInit() {
    this.$http.get('/api/moviesendpoints').then (response =>{
    this.moviesData = response.data;
    this.socket.syncUpdates('moviesendpoints', this.moviesData);
  });
 }

Delete(movies)
 {
 this.$http.delete('/api/moviesendpoints/' + movies._id).then(response => {
 console.log("delete");
   });
 }
};
angular.module('ticketbookingApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: '$moviesCtrl'
  });

})();
