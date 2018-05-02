angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {

        $scope.slides = [
            { image: 'img/arazulbg1.jpg', header: 'Corporate project finance (M&A / Mercado de dívida / Project Finance)', subheader: 'Acessoria e Consultoria Financeira', description: 'Dispomos dos melhores produtos e serviços de investimento. No nosso portifólio estão presentes fundos brasileiros e internacionais, ajustados às necessidades de pessoas físicas, pessoas jurídicas,intermediários financeiros e investidores institucionais.', link: '#' },
            { image: 'img/arazulbg2.jpg', header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', subheader: 'Etiam risus metus, iaculis id faucibus ut', description: 'mollis eu magna. In aliquet, ante et finibus rhoncus, tortor sapien aliquet sem, nec euismod neque odio cursus dui.', link: '#' },
            { image: 'img/arazulbg3.jpg', header: 'Sed lacus felis, efficitur at mollis sed, tristique sit amet enim', subheader: 'Quisque vehicula sit amet', description: 'Morbi non blandit enim, a aliquam sem. Proin eget magna pellentesque, feugiat dui in, bibendum nunc. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas', link: '#' },
            { image: 'img/arazulbg4.jpg', header: 'Nullam sed dolor a ex pulvinar pharetra. Donec sagittis pellentesque elementum', subheader: 'Nunc tempus neque sed magna mattis', description: 'eu cursus purus elementum. Donec sed felis porta, dapibus ligula ac, tincidunt neque', link: '#' },
            { image: 'img/arazulbg5.jpg', header: 'Donec luctus erat erat, nec aliquet eros sollicitudin eu', subheader: 'Quisque mauris urna', description: 'nec non sapien lorem. Curabitur pulvinar dictum fringilla. Duis sit amet enim posuere, tincidunt mi non, varius urna.', link: '#' },
            { image: 'img/arazulbg6.jpg', header: 'Vestibulum sodales nisi id ultricies eleifend. Nulla maximus condimentum tortor nec ultricies', subheader: 'Nulla pharetra eros turpis', description: 'Vestibulum in nulla non arcu blandit vestibulum. Sed porta urna lacus, eget mollis lacus viverra eu. Donec nec felis placerat turpis semper eleifend sit amet nec mi. In hac habitasse platea dictumst. Nulla ultrices nibh eget nunc semper, in sodales tortor pellentesque. ', link: '#' },
            { image: 'img/arazulbg7.jpg', header: 'Proin facilisis nibh id porta laoreet.', subheader: 'Vivamus feugiat laoreet nulla at lobortis', description: 'Nunc eget accumsan risus, vitae pellentesque libero. Vivamus sed consectetur felis, et pulvinar purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In pharetra nec felis ut sagittis. Duis pulvinar mattis molestie. Mauris nec tincidunt velit.', link: '#' },
            { image: 'img/arazulbg8.jpg', header: 'Fusce pulvinar diam at egestas sollicitudin', subheader: 'Nulla consectetur elit non magna posuere, id egestas nisi dictum.', description: 'Nulla facilisi. Proin vel cursus est. ', link: '#' }
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