'use strict';

(function (angular) {
    angular
        .module('ab.wgt.spinner', [])
    ;
}(angular));;
'use strict';

(function (angular) {
    angular
        .module('ab.wgt.spinner')
        .controller('SpinnerCtrl', Controller)
    ;

    function Controller() {
        var vm = this;

        vm.increment = increment;
        vm.decrement = decrement;

        ////////

        function increment() {
            if (vm.max) {
                if (vm.model < vm.max) {
                    var newVal = parseInt(vm.model) + parseInt(vm.step);
                    vm.model = (newVal > vm.max) ? parseInt(vm.max) : newVal;
                }
            } else {
                vm.model = vm.model + parseInt(vm.step);
            }
        }

        function decrement() {
            if (vm.min) {
                if (vm.model > vm.min) {
                    var newVal = parseInt(vm.model) - parseInt(vm.step);
                    vm.model = (newVal < vm.min) ? parseInt(vm.min) : newVal;
                }
            } else {
                vm.model = vm.model - parseInt(vm.step);
            }
        }
    }
}(angular));;
'use strict';

(function (angular) {
    angular
        .module('ab.wgt.spinner')
        .directive('abWgtSpinner', Directive)
    ;

    function Directive() {
        return {
            restrict: 'EA',
            scope: {
                model: '='
            },
            transclude: true,
            link: link,
            controller: 'SpinnerCtrl',
            controllerAs: 'spinner',
            bindToController: true
        };
    }

    function link(scope, element, attrs, ctrl, transclude) {
        ctrl.max = attrs.max || false;
        ctrl.min = attrs.min || false;
        ctrl.step = attrs.step || 1;

        transclude(scope, function (dom) {
            element.append(dom);
        })
    }
}(angular));