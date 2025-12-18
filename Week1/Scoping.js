//scoping
//var scoping ---->Function or global scope
//let and const ---> Block scope{}
var data = "bharathi"
{
      var data = "jaya";
      let sample = 1;
      const day = "Sunday";
      console.log(data);
      console.log(day);

}
console.log(data);

