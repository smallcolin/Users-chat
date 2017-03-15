var app = angular.module('app', ['ngMaterial']);

app.controller('sidenavController', function ($scope, $timeout, $mdSidenav) {

    var imagePath = 'https://material.angularjs.org/latest/img/list/60.jpeg';
    $scope.messages = [
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        }
    ];

    $scope.messages2 = [
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        },
        {
            profileImg : imagePath,
            from: "Sebastian Thorsen",
            time: '13:36',
            notes: "Weeeew lad, you be fly af duuuuuuuuuuuuude, lmao xd xdxdx "
        }
    ];

    $scope.openMenu = function () {
        $mdSidenav('left').toggle();
    }

});