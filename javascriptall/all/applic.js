// var input = document.querySelector("input");
// var btn = document.querySelector(".greatthing > button");
// btn.addEventListener('click', addList);


// function addList(e) {


//     var notCompleted = document.querySelector(".notcompleted");
//     var completed = document.querySelector(".completed");
//     var newli = documen.createElement("li");
//     var check = document.createElement("button");
//     var deletebtn = document.createElement("button");

    // check.innerHTML = '<i class="fa fa-check"></i>';
    // deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
//     if (input.value !== "") {
//         newli.textContent = input.value;
//         input.value = "";
//         notCompleted.appendChild(newli);
//         newli.appendChild(check);
//         newli.appendChild(deletebtn);

//         check.addEventListener('click', function () {

//             var parent = this.parentNode;
//             parent.remove();;
//             completed.appendChild(parent);
//             check.style.display = "none";

//         });
//         deletebtn.addEventListener("click", function () {

//             var parent = document.parentNode;
//             parent.remove()
//         })

//     }

// }



//create some thing beauty  

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#click").disabled = true;

    document.querySelector("#text").onkeyup = function () {
        if (document.querySelector("#text").value.length > 5) {
            document.querySelector("#click").disabled = false;


        } else {
            document.querySelector("#click").disabled = true;
        }
    }

    document.querySelector(".newcomment").onsubmit = function () {
        // var date=new Date;
        var text = document.querySelector("#text").value;
        var li = document.createElement("li");
        li.innerHTML = text;
        document.querySelector("ul").appendChild(li);
        // var newli = document.querySelector("ul").createElement(li).appendChild(newli);
        // newli.innerHTML=date;


        document.querySelector("#text").value = ""
        return false
    }

})

//create form with new things this java script do alajaieb

// function formssssss(){

// document.addEventListener('click',function(){

// var inputs=document.querySelector("input");
// var li=document.createElement(li);
// var date=new Date();
// li.innerHTML=date;
//     document.querySelector("#forms").appendChild(li);

// var newli=document.createElement("li");
// li.innerHTML=inputs;
//     document.querySelector("#forms").appendChild(newli);
//     inputs.value="";
//     return false




// })}







//card
const detailsCard = (name, button) => {
    return {
        name,
        button,
        showDetails() {
            return `<div class="row">
<div class="col-3">
 <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
</div>
<div class="col-9">
      <h4>${this.name}</h4>
      <textarea type="text" id="inputStatus" placeholder="King Kong Is Cool"></textarea>
<div class="d-flex">
<button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">${this.button}</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<div id="addTask">
</div>
</div>
</div>
`
        }
    };
};

let detailsUpdate = detailsCard("Ross Nicholls", "Update Status");

document.querySelector("aside.card").innerHTML = detailsUpdate.showDetails();

const addToFunc = () => {
    // gets value from main text area
    let userName = detailsUpdate.name;
    let input = document.getElementById('inputStatus').value;
    // creates element for the value of input
    let title = document.createElement("h6");
    let status = document.createElement("p");
    let reply = document.createElement("ul");
    let deleteButton = document.createElement("li");
    let like = document.createElement("li");
    let replyList = document.createElement("li");
    like.innerHTML = "Like";
    replyList.innerHTML = "Add Comment";
    title.innerHTML = userName;
    //creates a node for the original input
    let textnode = document.createTextNode(input);
    status.appendChild(textnode);
    status.prepend(title);
    status.appendChild(reply);
    reply.appendChild(like);
    reply.appendChild(replyList);
    reply.appendChild(deleteButton);
    document.getElementById('addTask').appendChild(status);
    status.classList.add("statusBox");
    like.classList.add("like");
    replyList.classList.add("reply");
    //userName.classList.add("title");

    //creates a container for the remove button
    let statusBox = document.createElement("div");
    //creates a button to delete status
    let removeTask = document.createElement('input');
    // adds type of which it is a button
    removeTask.setAttribute('type', 'button');
    removeTask.classList.add("removeButton");
    // sets the buttons value 
    removeTask.setAttribute("value", "delete");
    // sets the button next to the status text
    deleteButton.appendChild(removeTask);
    //sets the button to remove status
    removeTask.addEventListener('click', function () {
        status.parentNode.removeChild(status);
    }, false);
    like.addEventListener('click', function () {
        this.classList.add("likeClicked");
    }, false);

    //For reply 
    replyList.addEventListener('click', function () {
        this.classList.add("likeClicked");
        let luke = document.getElementById('addTask');
        let skywalker = document.createElement("textarea");
        let replied = document.createElement("p");
        let leia = document.createElement("input");
        leia.setAttribute('type', 'button');
        leia.setAttribute("value", "reply");
        leia.setAttribute("class", "removeButton");
        skywalker.setAttribute("id", "pushReply");
        skywalker.setAttribute("placeholder", "Reply to this comment");
        luke.appendChild(skywalker);
        luke.appendChild(leia);
        luke.appendChild(replied);
        leia.addEventListener('click', function () {
            let replyInput = document.getElementById('pushReply').value;
            let replyNode = document.createTextNode(replyInput);
            replied.appendChild(replyNode);
            if (replyInput === "") {
                replied.classList.remove("statusBox");
                skywalker.parentNode.removeChild(skywalker);
                this.parentNode.removeChild(this);
            } else {
                let replyName = document.createElement("h6");
                let deleteComment = document.createElement("p");
                deleteComment.innerHTML = "Delete";
                deleteComment.classList.add("deleteComment");
                replyName.innerHTML = `${userName} says:`;
                replied.prepend(replyName);
                replied.prepend(deleteComment);
                replied.classList.add("statusBox");
                skywalker.parentNode.removeChild(skywalker);
                this.parentNode.removeChild(this);
                deleteComment.addEventListener('click', function () {
                    replied.parentNode.removeChild(replied);
                }, false);
            }
        }, false);
    }, false);

};


const eraseText = () => {
    //erases placeholder text in textarea
    document.getElementById("inputStatus").value = "";
};