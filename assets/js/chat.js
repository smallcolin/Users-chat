app.controller('chatSection' , function($scope) {
    $scope.testChat = [
        {author:'you', image: 'assets/img/you.jpg',status: 'online', message:'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'other', image: 'assets/img/other.jpg',status: 'offline', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'other', image: 'assets/img/other.jpg',status: 'offline', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf ,Lorem ipsum dolor loreoreolerela fakjnfaskfkf ,Lorem ipsum dolor loreoreolerela fakjnfaskfkf ,Lorem ipsum dolor loreoreolerela fakjnfaskfkf ,Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'},
        {author:'you' , image: 'assets/img/you.jpg',status: 'online', message: 'Lorem ipsum dolor loreoreolerela fakjnfaskfkf'}
    ];
    $scope.send = function(a){
        if (a == null) {
            return false;
        }
        var content = {
            author:'you',
            image: 'assets/img/you.jpg',
            status: 'online',
            message: a
        };
        $scope.testChat.push(content);
        $scope.content.message = '';
    }

});

app.controller('newsSection' , function($scope) {
    $scope.fakeNews = [
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy you',time: '16:30',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy them',time: '16.29',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy her', time: '16:28',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy him', time: '16:27',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy this', time: '16:26',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy that', time: '16:25',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy shit', time: '16:24',image: 'assets/img/other.jpg'},
        {author: 'Bill Gates',status: 'online', excerpt: 'Im going to destroy rofl', time: '16:23',image: 'assets/img/other.jpg'}
    ];
});




app.directive('autoResize', function($window) {
    return {
        // restrict: 'A',
        // require: 'ngModel',
        // link: function(scope, element, controller) {
        //     scope.$watch('content.message', function(newValue) {
        //
        //         var msg = angular.element("#msg")[0];
        //         console.log(msg);
        //         if (newValue == null || newValue == "") {
        //             msg.style.height = "calc(100% - 181px)";
        //             element[0].style.height = "40px";
        //         } else {
        //             element[0].style.height = 'auto';
        //             element[0].style.height = element[0].scrollHeight + "px";
        //             var newHeight = $window.innerHeight - 145 - element[0].clientHeight;
        //             msg.style.height = newHeight + "px";
        //         }
        //     });
        // }
    }
});

app.directive('scrollDown', function($timeout, $window) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.$watchCollection(attr.scrollDown, function(newVal) {
                $timeout(function() {
                    element[0].scrollTo(0, element[0].scrollHeight);
                }, 0);
            });
        }
    }
});

app.directive('enterSubmit', function () {
    return {
        restrict : 'A',
        link: function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                    scope.$eval(attrs.enterSubmit);
                });

                event.preventDefault();
            }
        });
    }};
});
