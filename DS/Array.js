class MyArray {
    constructor(length, data) {
      this.length = 0;
      this.data = {}
    }
  
    get(index) {
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
  
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--
      return lastItem
    }
  
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
    }
  
    shiftItems(index) {
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const newArray = new MyArray();
  newArray.get(0)
  newArray.push(1);
  newArray.push(2);
  newArray.delete(0)
  console.log(newArray)