class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  //the next is an example of using the argument of the constructor as the field of the collection by just adding the public modifier property.
  //constructor(public collection: number[]){}

  sort(): void {
    // const {length} = this.collection; <= Desctructuring
    const length = this.collection.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

var sorter = new Sorter([3, 4, 9, 7]);
console.log(sorter);
