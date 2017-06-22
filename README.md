# ngPagination
Angular Pagination Directive for Pagination using Angular Material


**features**
- nice UI with fixed count of elements, so your pagination never broke the design if you have a large amount of pages; you can try this feature on [demo page](http://accetone.github.io/ng-pagination-demo)
- saving current page to url query and use this on reload
- css free - you can stylize directive as you want
- separators and navigation arrows
- lightweight, only 2.42 KB, this's cool, right? ;)
- that's all folks!

### Usage

##### 01 Installation

To install `ngPagination` you can use bower

```
bower install ngPagination
```

or copy `ng-pagination.min.js` file from `dist` folder on [github](https://github.com/sachinsemlety/ngPagination/blob/master/dist/dist.min.js).

##### 02 Embeding
Embed script to your HTML document anywhere after `angular` script:

```html
<script src="path/to/ng-pagination.min.js"></script>
```

Write activation method in your angular controller. It will be called each time when current page changed, so you can load and show new portion of your data. Also activation method will be called once after directive initialized:

```javascript
 var app = angular.module("TestApp", ['ngMaterial', 'ngPagination']);
     app.controller("testCtrl", testCtrl)
        function testCtrl($scope){
        $scope.recentPage = 0;

        $scope.paging = {
            numberOfPages: 50,
            recent: 1,
            onPageChanged: showPages,
        };

        function showPages() {
            $scope.recentPage = $scope.paging.recent;
        }
```

Insert pagination directive into your markup:

```html
<ng-paging flex pages="paging.numberOfPages" stride="3" on-page-changed="paging.onPageChanged()" recent-page="paging.recent" style="text-align: center"></ng-paging>
```

### Options
Directive have 4 required attributes: `pages`, `stride`,`on-page-changed` and `recent-page`.
- `pages` - total number of items that your want to paginate
- `stride` - number of items per page
- `on-page-changed` - function that will be called when current page changed, also called once after directive initialized
- `recent-page` - number of items per page


### Demo

You can see [demo](https://github.com/sachinsemlety/ngPagination/blob/master/dist/dist.min.js)
![demo image](https://github.com/sachinsemlety/ngPagination/blob/master/demo/ngPagination-demo.png)

### Contribution

If you find error or want improve something, feel free to create issues and pull requests.

### License

Licensed under MIT.