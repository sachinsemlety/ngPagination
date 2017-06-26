! function() {
    "use strict";
    var d = angular.module("ngPagination", []);
    d.directive("ngPaging", function() {
        var d = ["$scope", function(d) {
            var e = this;
            e.lowercase = {
                "text-transform": "initial",
                "min-width": "40px !important"
            }, e.index = 0, e.stride = d.stride, e.show = function(t) {
                null === d.gotoPage || d.gotoPage > d.pages ? d.recentPage = "Page not found" : d.recentPage = e.page[t]
            }, e.showPrevious = function() {
                d.recentPage = e.index, e.index -= e.stride
            }, e.showNext = function() {
                e.index += e.stride, d.recentPage = e.index + 1
            }, e.showFirst = function() {
                e.index = 0, d.recentPage = 1
            }, e.showLast = function() {
                e.index = parseInt(d.pages / e.stride) * e.stride, e.index === d.pages ? e.index = e.index - e.stride : "", d.recentPage = d.pages
            }, d.$watch("recentPage", function(t) {
                e.index = parseInt((t - 1) / e.stride) * e.stride, d.onPageChanged()
            }), d.$watch("pages", function() {
                e.init()
            }), e.init = function() {
                e.strideInfo = function() {
                    for (var d = [], t = 0; t < e.stride; t++) d.push(t);
                    return d
                }(), e.page = function() {
                    for (var e = [], t = 1; t <= d.pages; t++) e.push(t);
                    return e
                }()
            }
        }];
        return {
            restrict: "EA",
            scope: {
                pages: "=",
                onPageChanged: "&",
                stride: "=",
                recentPage: "="
            },
            controller: d,
            controllerAs: "vm",
            template: ["<style>md-input-container .md-input{width: 20%;} md-input-container{padding: 0px !important;margin: 0px 0 !important;}.md-button{min-width: 30px;} .md-button.md-default-theme.md-warn.md-fab, .md-button.md-warn.md-fab, .md-button.md-default-theme.md-warn.md-raised, .md-button.md-warn.md-raised{background-color: #4caccb;color: black;}.md-button.md-default-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-default-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-warn.md-fab:not([disabled]):hover, .md-button.md-default-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-default-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-warn.md-raised:not([disabled]):hover{background-color: #4caccb;}.md-button.md-default-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-default-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-primary.md-fab:not([disabled]):hover, .md-button.md-default-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-default-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-primary.md-raised:not([disabled]):hover{background-color: rgb(41, 160, 152);}.md-button.md-default-theme.md-primary.md-fab, .md-button.md-primary.md-fab, .md-button.md-default-theme.md-primary.md-raised, .md-button.md-primary.md-raised{background-color: rgb(41, 160, 152);} .gotoPage{width:12%;text-align:center}</style>", '<md-button class="md-raised md-warn" aria-label="First" ng-click="vm.showFirst()" ng-style="vm.lowercase" ng-hide="gotoPage === null || gotoPage > pages">&#8592</md-button>', '<md-button class="md-raised" aria-label="Previous" ng-click="vm.showPrevious()" ng-show="vm.index - 1 >= 0">&#171;</md-button>', '<md-button class="md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.strideInfo"', ' ng-click="vm.show(vm.index + i)" ng-show="vm.page[vm.index + i]" ', " ng-class=\"{'md-primary': vm.page[vm.index + i] == recentPage}\">", " {{ vm.page[vm.index + i] }}", "</md-button>", '<md-button class="md-raised" aria-label="Next" ng-click="vm.showNext()" ng-show="vm.index + vm.stride < pages">&#187;</md-button>', '<md-button class="md-raised md-warn" aria-label="Last" ng-click="vm.showLast()" ng-style="vm.lowercase" ng-hide="gotoPage === null || gotoPage > pages">&#8594</md-button>', "<br>", '<div>Jump to page:<input type="number" ng-model="gotoPage" ng-change="vm.show(gotoPage-1)" aria-label="jump-to-Page" class="gotoPage"></div>'].join("")
        }
    })
}();