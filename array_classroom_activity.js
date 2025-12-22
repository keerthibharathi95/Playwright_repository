var data = ["Chrome", true, 132.5]
data[5] = "Webkit"
data.pop()
data.push("firefox")
data.shift();
for( val of data){
    console.log(val)
}
