(function () {
  'use strict';
  angular.module('app')
  .filter('propsFilter', PropsFilter);

  function PropsFilter() {
    return function (items, props) {
      var out = [];

      if (angular.isArray(items)) {
        var keys = Object.keys(props);

        items.forEach(function (item) {
          var itemMatches = false;

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();

            if (angular.isUndefined(item[prop])) {
              item[prop] = '';
            }

            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        out = items;
      }
      return out;
    };
  }
})();
