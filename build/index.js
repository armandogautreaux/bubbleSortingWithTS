"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    //the next is an example of using the argument of the constructor as the field of the collection by just adding the public modifier property.
    //constructor(public collection: number[]){}
    Sorter.prototype.sort = function () {
        // const {length} = this.collection; <= Desctructuring
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([3, 4, 9, 7]);
console.log(sorter);
