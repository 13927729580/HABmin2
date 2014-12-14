/**
 * HABmin - Home Automation User and Administration Interface
 * Designed for openHAB (www.openhab.com)
 *
 * This software is copyright of Chris Jackson under the GPL license.
 * Note that this licence may be changed at a later date.
 *
 * (c) 2014 Chris Jackson (chris@cd-jackson.com)
 */
angular.module('HABmin.itemModel', [
])

    .service('ItemModel', function ($http, $q) {
        this.socket = null;
        this.url = '/rest/items';
        this.sendCommand = function (item, value) {
            console.log("Sending command", item, value);
            var deferred = $q.defer();
            $http.post(this.url + "/" + item, value, {
                    headers: {'Content-Type': 'text/plain'}
                }
            ).success(function (data, status) {
                    // Some extra manipulation on data if you want...
                    deferred.resolve();
                }).error(function (data, status) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };
    });
