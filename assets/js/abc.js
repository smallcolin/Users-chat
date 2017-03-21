var app = angular.module('app', ['ui.router'] );


app.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("feed");

    $stateProvider
        .state('feed', {
            name: 'feed',
            controller: 'newsSection',
            templateUrl: 'partials/news-section',
            url: 'feed'
        })
        .state('chat', {
            name: 'chat',
            controller: 'chatSection',
            templateUrl: 'partials/chat-section.html',
            url: 'chat'
        })
});
