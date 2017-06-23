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

            $scope.pagination = {
                numberOfPages: 50,
                recent: 1,
                onPageChanged: showPages,
            };

           function showPages() {
                $scope.recentPage = $scope.pagination.recent;
            }
     }
```

Html Example Code:

```html
<ng-paging flex pages="pagination.numberOfPages" stride="3" on-page-changed="pagination.onPageChanged()" recent-page="pagination.recent" style="text-align: center"></ng-paging>
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