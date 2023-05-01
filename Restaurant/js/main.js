
// Restaurant



//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var ticket = new Date().getTime();

var user = {message:"",meals:[], ticket:ticket};
let options = [
     {},
     {number:1,chocie:"Meal 1",price:24},
     {number:2,chocie:"Meal 2",price:35},
     {number:3,chocie:"Meal 3",price:44},
   ];


chatbotSendMessage("Hi, Welcome to Whatever Resturant!");
chatbotSendMessage("Please choose your meal: (number)");
showMenu();





function chatbotSendMessage(messageText){


    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
    chatContainer.appendChild(messageElement);

     //scroll to last message
     chatContainer.scrollTop = chatContainer.scrollHeight;
    
}



function sendMessage(messageText){

     var messageElement = document.createElement('div');
     messageElement.classList.add('w-50');
     messageElement.classList.add('float-right');
     messageElement.classList.add('shadow-sm');
     messageElement.style.margin ="10px";
     messageElement.style.padding ="5px";

     messageElement.innerHTML = "<span>You: </span>"+
     "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

     messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
   
     chatContainer.appendChild(messageElement);

     //scroll to last message
      chatContainer.scrollTop = chatContainer.scrollHeight;
   

}


function getTotalPrice(){

     let totalPrice = 0;

     for(let i=0; i<user.meals.length; i++){

          totalPrice += user.meals[i].price;
     }

     return totalPrice;
}


function restaurantResponseToUser(messageText){
     let userChoice =  parseInt(messageText.trim());

         switch(userChoice){

          case 1:
               chatbotSendMessage('you chose meal 1');
               user.meals.push(options[1]);
               chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
              
               break;
          case 2:
               chatbotSendMessage('you chose meal 2');
               user.meals.push(options[2]);
               chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
               break;
          case 3:
               chatbotSendMessage('you chose meal 3');
               user.meals.push(options[3]);
               chatbotSendMessage('Something else? if yes choose meal number or 50 to checkout');
               break;
          case 50:
               alert('checkout');
              // chatbotSendMessage("You ordered: meals number "+ user.meals);
              chatbotSendMessage("Total Price : $"+ getTotalPrice());
               chatbotSendMessage("please click this link to complete checkout:");
               chatbotSendMessage("<a href='https://google.com'>Checkout</a>");
               //send meals + ticket + payment status to backend
               
               break;
           default:               
           alert("Please choose a valid number");
           chatbotSendMessage("Please choose a valid number");
         }

         console.log(user);

}


function showMenu(){

       var messageElement = document.createElement('div');
       messageElement.classList.add('w-50');
       messageElement.classList.add('float-left');
       messageElement.classList.add('shadow-sm');
       messageElement.style.margin ="10px";
       messageElement.style.padding ="5px";
   
       for(let i=1; i<options.length; i++){
             messageElement.innerHTML +=  "<br>"+
             "<span style="+"margin-top:10px; padding:10px"+">"+ options[i].number +" - "+ options[i].chocie +"- $" + options[i].price+ "</span>";
   
       }
   
       messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
       chatContainer.appendChild(messageElement);
         
    

}





sendBtn.addEventListener('click', function(e){

    if(textbox.value == ""){
     alert('Please type in a message');

    }else{
         
     let messageText = textbox.value.trim();   
     user.message = messageText;
     sendMessage(messageText); 
     textbox.value = "";  
     

    restaurantResponseToUser(messageText);


    }
});



textbox.addEventListener('keypress',function(e){

     //if user hits the enter button on keyborad (13)
      if(e.which == 13){
          if(textbox.value == ""){
               alert('Please type in a message');
          
              }else{
                   
               let messageText = textbox.value.trim();
               user.message = messageText;
               sendMessage(messageText); 
               textbox.value = "";  
               
               restaurantResponseToUser(messageText);

          
             
              }


      }


});




 



