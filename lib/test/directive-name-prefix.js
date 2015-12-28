//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require('eslint'),
    ESLintTester = require('eslint-tester');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('rules/directive-name-prefix', {
    valid: [{
        code: 'angular.directive("mainDirective", function(){});',
        args: [1, 'main']
    }],
    invalid: [
        {
            code: 'angular.directive("Directive", function(){});',
            args: [1, 'main'],
            errors: [{ message: 'The Directive directive should be prefixed by main'}]
        },
        {
            code: 'angular.directive("someDirective", function(){});',
            args: [2, 'main'],
            errors: [{ message: 'The someDirective directive should be prefixed by main'}]
        }
    ]
});
