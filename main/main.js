module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.count()}
o) 平均值 = ${sequence.avg()}`);
};

class Sequence {
  constructor(input) {
    this.input = input;
  }

  minimum() {
    return Math.min.apply(null, this.input);
  }

  maximum() {
    return Math.max.apply(null, this.input);
  }

  count() {
    return this.input.length;
  }

  avg() {
    var sum = 0;
    for (var i =0; i < this.input.length; i++){
      sum += this.input[i];
    };
    return ~~(sum/this.input.length*100)/100;
  }
}
