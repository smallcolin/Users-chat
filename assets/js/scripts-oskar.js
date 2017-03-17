var app = angular.module('app', [] );


app.controller('chatSection' , function($scope) {
	$scope.testChat = [
	{author:'you', image: 'you.jpg', message:'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'other', image: 'other.jpg', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'other', image: 'other.jpg', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
	{author:'you' , image: 'you.jpg', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'}
	];
	console.log($scope.test);
});	