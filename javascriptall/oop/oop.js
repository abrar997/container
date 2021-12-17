// الله ثم الرسول  والدين والعقيدة والعهد فوق كل شيء 



// method when use nust rite with ()

// literal object

var perosn={
name:"abrar",
age:23,
father:"muthanna",
infor:function(){
    return this.name+this.age
},

get infors(){
return this.father

}

}

// تعالى كدة حتى نكرب 

// console.log(perosn.infors());

console.log(delete perosn.infor());
 perosn.infor()

 perosn.country="iraq"
console.log(perosn);
console.log(perosn.name);



// create object by new word 

var objects=new Object 
objects.name="abrar";
objects.age=23;
objects.city="iraq"
console.log(objects);


// create object by contructor



//construtor =construtor(father) +object(sons)

function father(name,age,city){
this.namess=name;
this.Age=age
this.cities=city 
}

// father.national="gsgsdfd" مستحيل تنضاف هنانة ةةةةةة لانو من برة 
// console.log(father);
var abrar=new father("abrar",23,"iraq")
 var me=new father("me",23,"calligraphy") //اكدر اضف لهذا الوبكت بروب عاردي لان هو ابوجكت عادي 



// 1_prop
// to add proop | to constructor add prototypr word  if u delete protoword result=undefined
father.prototype.national = "iraq"
console.log(abrar.national);


// 2-method

father.prototype.name=function(){
    return this.namess
}
console.log(me.name()); // لمن نرجع نرع function



 //  me.national="iraq"
// console.log(abrar.namess);

// console.log(me);


// مينفع اضيف ميثود او بروبيرتي خارج ال constructor 
// تحل لمشكلة من خلاب البروتتايب 







// حتي اكسيس اوبتكت عادي باوبكت ثاني هم عادي لازم استخدم فد شي اسمو 
// __proto__


var Abrar={
name:"abrar",
age:23,
inf:function(){
    return this.name+this.age
}

}

var Muthanna={
    mayName:"muthanna"
}


// ااكسس مثنى من ابرار وبالعكس 
// 1_
 Muthanna.__proto__=Abrar //حتى اساويهم 

// 2_


console.log(Muthanna.inf());

// result abrar23 من الاوبجكت الفوك




// بس هذي مراح تفيدني حيل فطلعو طريقى جديدة اسمة 
// object.create// حتى ااكسس 
// console.dir(Abrar);



// 4_object.create 
 


var user={

    name:"user",
    writeArtile:function(){
return console.log("so,writeArticle");

    }


}
var moderate = {
    name: "moderator",
    editArticle: function () {
        return console.log("editArticle");
    }}
var moderate = Object.create(user)


var admin=(user,moderate)



moderate.writeArtile()
admin.writeArtile()
admin.key.editArticle()

// admin.editArticle()


// admin.key.editArticle()














































