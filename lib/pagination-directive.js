    ! function () {
        "use strict";
        var d = angular.module("ngPagination", []);
        d.directive("ngPaging", function () {
            var d = ["$scope", function (d) {
                var t = this;
                // d.gotoPage=1;
                t.lowercase = {
                    "text-transform": "initial",
                    "min-width": "40px !important"
                }, t.index = 0, t.stride = d.stride, t["show"] = function (e) {
                    if (d.gotoPage === null || d.gotoPage > d.pages) {
                        d.recentPage = "Page not found";
                    } else {
                        d.recentPage = t.page[e];
                    }
                }, t.showPrevious = function () {
                    d.recentPage = t.index, t.index -= t.stride
                }, t.showNext = function () {
                    t.index += t.stride, d.recentPage = t.index + 1
                }, t.showFirst = function () {
                    t.index = 0, d.recentPage = 1
                }, t.showLast = function () {
                    t.index = parseInt(d.pages / t.stride) * t.stride, t.index === d.pages ? t.index = t.index - t.stride : "", d.recentPage = d.pages
                }, d.$watch("recentPage", function (e) {
                    t.index = parseInt((e - 1) / t.stride) * t.stride, d.onPageChanged()
                }), d.$watch("pages", function () {
                    t.init()
                }), t.init = function () {
                    t.strideInfo = function () {
                        for (var d = [], e = 0; e < t.stride; e++) d.push(e);
                        return d
                    }(), t.page = function () {
                        for (var t = [], e = 1; e <= d.pages; e++) t.push(e);
                        return t
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
                template: ["<style>md-input-container .md-input{width: 20%;} md-input-container{padding: 0px !important;margin: 0px 0 !important;}.md-button{min-width: 30px;} .md-button.md-default-theme.md-warn.md-fab, .md-button.md-warn.md-fab, .md-button.md-default-theme.md-warn.md-raised, .md-button.md-warn.md-raised{background-color: #4caccb;color: black;}.md-button.md-default-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-default-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-warn.md-fab:not([disabled]):hover, .md-button.md-default-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-default-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-warn.md-raised:not([disabled]):hover{background-color: #4caccb;}.md-button.md-default-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-default-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-primary.md-fab:not([disabled]):hover, .md-button.md-default-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-default-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-primary.md-raised:not([disabled]):hover{background-color: rgb(41, 160, 152);}.md-button.md-default-theme.md-primary.md-fab, .md-button.md-primary.md-fab, .md-button.md-default-theme.md-primary.md-raised, .md-button.md-primary.md-raised{background-color: rgb(41, 160, 152);} .gotoPage{width:12%;text-align:center}</style>", '<md-button class="md-raised md-warn" aria-label="First" ng-click="vm.showFirst()" ng-style="vm.lowercase" ng-hide="gotoPage === null || gotoPage > pages">&#8592</md-button>', '<md-button class="md-raised" aria-label="Previous" ng-click="vm.showPrevious()" ng-show="vm.index - 1 >= 0">&#171;</md-button>', '<md-button class="md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.strideInfo"', ' ng-click="vm.show(vm.index + i)" ng-show="vm.page[vm.index + i]" ', " ng-class=\"{'md-primary': vm.page[vm.index + i] == recentPage}\">", " {{ vm.page[vm.index + i] }}", "</md-button>", '<md-button class="md-raised" aria-label="Next" ng-click="vm.showNext()" ng-show="vm.index + vm.stride < pages">&#187;</md-button>', '<md-button class="md-raised md-warn" aria-label="Last" ng-click="vm.showLast()" ng-style="vm.lowercase" ng-hide="gotoPage === null || gotoPage > pages">&#8594</md-button>', '<br>', '<div>Jump to page:<input type="number" ng-model="gotoPage" ng-change="vm.show(gotoPage-1)" aria-label="jump-to-Page" class="gotoPage"></div>'].join("")

            }
        })
    }();