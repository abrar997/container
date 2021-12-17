// Admin 

var user = {
    Name: function () {
        return console.log("abrar");
    },
    Age: function () {
        return console.log(23)
    },
    country: function () {
        return console.log("iraq");
    },
    work: function () {
        return console.log("front end  web develpment");
    }
}

var moderate = Object.create(user, {

    Names: function () {
        return console.log("bilal");
    },
    Ages: function () {
        return console.log(27)
    },
    countryz: function () {
        return console.log("iraq");
    },
    workz: function () {
        return console.log("electrical engineering ");
    }

})

var admin = Object.create(moderate, user, {

    Namess: function () {
        return console.log("muthanna")
    },
    Agess: function () {
        return console.log(57)
    },
    countryzz: function () {
        return console.log("iraq")
    },
    workzz: function () {
        return console.log("mechanicali ")

    }
}
)


//بسم الله الرحمن الرحيم //                               

// moderate call user
moderate.Name()
moderate.Age()
moderate.country()
moderate.work()




// admin call moderate 








//admin call user











//To check is it found in the object and prototype or not 
// console.log(user.hasOwnProperty("name"));

// var moderate= Object.create (user,{
//    name:"Muthanna",

// })
// console.dir(user);

// console.log(moderate);

// console.log(user.info());







// moderate.__proto__=user

// moderate.info()

// console.log(user.Age());
// user.Age()

















 // to eqyual user=moderate we have two ways :

//  1_by __proto__

//  console.log(moderate.__proto__ =)

// console.log(moderate.country());