var app = angular.module('app', [] );


app.controller('chatSection' , function($scope) {
	$scope.testChat = [
	{author:'you', image: '../assets/img/you.jpg',status: 'online', message:'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'other', image: '../assets/img/other.jpg',status: 'offline', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'other', image: '../assets/img/other.jpg',status: 'offline', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'you' , image: '../assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'}
	];
	console.log($scope.test);
});	