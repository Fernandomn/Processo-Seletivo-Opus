angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        
        $scope.slides = [
            { image: 'img/arazulbg1.jpg', description: 'Image 00' },
            { image: 'img/arazulbg2.jpg', description: 'Image 01' },
            { image: 'img/arazulbg3.jpg', description: 'Image 02' },
            { image: 'img/arazulbg4.jpg', description: 'Image 03' },
            { image: 'img/arazulbg5.jpg', description: 'Image 04' },
            { image: 'img/arazulbg6.jpg', description: 'Image 05' },
            { image: 'img/arazulbg7.jpg', description: 'Image 06' },
            { image: 'img/arazulbg8.jpg', description: 'Image 07' }
        ];
        $scope.currentIndex = 0;
        $scope.setCurrentSlideIndex = function (index, event) {
            $scope.currentIndex = index;
            event.preventDefault();
        };
        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
        $scope.prevSlide = function (event) {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            event.preventDefault();
        };
        $scope.nextSlide = function (event) {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            event.preventDefault();
        };
    })
    .animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, { left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');
                    TweenMax.set(element, { left: element.parent().width() });
                    TweenMax.to(element, 0.5, { left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });