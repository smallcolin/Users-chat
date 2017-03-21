var app = angular.module( 'app', [] );

app.controller('profileSection' , function ($scope) {
    $scope.imgSrc = '../assets/img/jobs.png';
    $scope.showName = 'Visningsnamn';
    $scope.userName = 'Username';
    $scope.yourEmail = 'namn.efternamn@exempel.com';
    $scope.yourInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, est vitae commodo dapibus, ipsum velit euismod nibh, sit amet efficitur justo est ac augue.'
});