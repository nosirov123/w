let data = ["olma", "anor", "uzum", "kiwi",]
alert(data);

let a = confirm('Allaytga qosha sizmi')

if(a== true){
   data.push('banan')
   console.log(data);
}else{
   data.pop()
   console.log(data);
}