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