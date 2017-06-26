# ngPagination
Angular Pagination Directive for Pagination using Angular Material


**features**
will be added soon

### Usage

##### 01 Installation

To install `ngPagination` you can use bower

```
bower install ngPagination
```

To run as root use

```
bower install ngPagination --allow-root

or

sudo bower install ngPagination

```

To put entry in bower.json

```
bower install ngPagination --save
```

or simply copy `ng-pagination.min.js` file from `dist` folder on [github](https://github.com/sachinsemlety/ngPagination/blob/master/dist/ng-pagination.min.js).

##### 02 Embeding
Embed script to your HTML document anywhere after `angular` script:

```html
<script src="path/to/ng-pagination.min.js"></script>
```

Javascript Example Code

```javascript
   var app = angular.module("TestApp", ['ngMaterial', 'ngPagination']);
        app.controller("testCtrl", testCtrl)
            function testCtrl($scope){
            $scope.recentPage = 0;
            $scope.pageSize = 10;
            $scope.data =[];

            $scope.pagination = {
                numberOfPages: 50,
                recent: 1,
                onPageChanged: showPages,
            };

            init();

            function showPages() {
                $scope.recentPage = $scope.pagination.recent;
            }

            function init(){
                var noOfPages = $scope.pagination.numberOfPages;
                for (var i=0; i<noOfPages*11; i++) {
                $scope.data.push("Item No. "+(i-10));
            }
         }

     }

     app.filter('startFrom', function() {
    return function(input, start) {
        if(start >= 0){
            start = +start;
            return input.slice(start);
        }else{
            return false;
        }
    }
    });

```

Html Example Code:

```html
<ng-paging flex pages="pagination.numberOfPages" stride="3" on-page-changed="pagination.onPageChanged()" recent-page="pagination.recent" style="text-align: center"></ng-paging>
```

```Full demo html code
<body ng-app="TestApp" layout="column">
    <div flex ng-controller="testCtrl" layout="column">
        <section flex>
            <md-content layout-padding="">
                <h1>Angular Pagination Demo(ngPagination)</h1>
                <div>Recent Active Page : <b>{{recentPage}}</b></div>
                <div ng-hide="gotoPage === null || gotoPage > pagination.numberOfPages">
                    <ul>
                        <li ng-repeat="item in data | startFrom:recentPage*pageSize | limitTo:pageSize">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </md-content>
        </section>
        <section layout="row" layout-padding="">
            <ng-paging flex pages="pagination.numberOfPages" stride="3" on-page-changed="pagination.onPageChanged()" recent-page="pagination.recent"
                style="text-align: center"></ng-paging>
        </section>
    </div>
</body>
```

### Options
ngPagination Directive uses 4 attributes: `pages`, `stride`,`on-page-changed` and `recent-page`.
- `pages` - total number of pages
- `stride` - number of steps you want to show in pagination
- `on-page-changed` - function that will be called when page changed
- `recent-page` - this is the current page or recent page


### Demo Image

![demo image](https://github.com/sachinsemlety/ngPagination/blob/master/demo/ngPagination-demo.png)

### Demo Page

You can see [demo](https://jsfiddle.net/sachinsemlety/u34rc66c/)

### Contribution
sachinsemlety

### License
will be added soon