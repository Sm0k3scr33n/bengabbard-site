

///just for fun I can use this function that adds a <br> tag over and over
///this serves only the purpose of creating "blank" space on a page- it works but it is useless mostly

function fakeContent() {
    var text = " ";
    var interval = 13;
    var i;
    for (i = 0; i < interval; i++) {
        text +="<br>";
    }
    document.getElementById("fakecont").innerHTML = text;
}

///when scroll is detected execute the funtion navscroll
window.onscroll = navscroll;


function navscroll(){
  
var  scrollingTop = window.pageYOffset;

 
  if(scrollingTop > 45){document.getElementById("nav").style.position = "fixed";}
  if(scrollingTop > 45){document.getElementById("nav").style.marginTop = "-45px";}
  if(scrollingTop < 45){document.getElementById("nav").style.marginTop = "0px";}
  if(scrollingTop < 45){document.getElementById("nav").style.position = "relative";}
}

////functions for about menu

function showaboutmenu(){
  
  document.getElementById("aboutmenu").style.visibility= "visible";
  document.getElementById("about-li").style.backgroundColor= "rgba(33, 93, 173, .8)";
  
}

function hideaboutmenu(){
  
   document.getElementById("aboutmenu").style.visibility= "hidden";
   document.getElementById("about-li").style.backgroundColor= "";
}


////functions for code menu

function showcodemenu(){
  
  document.getElementById("codemenu").style.visibility= "visible";
  document.getElementById("code-li").style.backgroundColor= "rgba(41, 44, 123, .8)";
}

function hidecodemenu(){
  
  document.getElementById("codemenu").style.visibility= "hidden";
  document.getElementById("code-li").style.backgroundColor= "";
}



////functions for portfolio menu

function showportfoliomenu(){
  
  document.getElementById("portfoliomenu").style.visibility= "visible";
  document.getElementById("portfolio-li").style.backgroundColor= "rgba(206, 52, 16, .8)";
}

function hideportfoliomenu(){
  
  document.getElementById("portfoliomenu").style.visibility= "hidden";
  document.getElementById("portfolio-li").style.backgroundColor= "";
}

////functions for links menu

function showlinksmenu(){
  
  document.getElementById("linksmenu").style.visibility= "visible";
  document.getElementById("links-li").style.backgroundColor= "rgba(231, 101, 0, .8)";
  document.getElementById("links-li").style.color= "white";
}

function hidelinksmenu(){
  
   document.getElementById("linksmenu").style.visibility= "hidden";
   document.getElementById("links-li").style.backgroundColor= "";
   document.getElementById("links-li").style.color= "white";
}

///contact menu functions
function showcontactmenu(){
  
   document.getElementById("contactmenu").style.visibility= "visible";
   document.getElementById("contact-li").style.backgroundColor= "rgba(33, 146, 49, .8)";
   document.getElementById("contact-li").style.color= "white";
}

function hidecontactmenu(){
  
  document.getElementById("contactmenu").style.visibility= "hidden";
  document.getElementById("contact-li").style.backgroundColor= "";
  document.getElementById("contact-li").style.color= "white";
    
}



/////collapsing footer code-- this actually uses two buttons to toggle the size of the footer and two functions to toggle the footer's state.
document.getElementById("footerbuttondown").onclick = function(){shrink()};
document.getElementById("footerbuttonup").onclick = function(){expand()};

///is the foooter expanded or contracted by default??.. we can set this by  using the next several lines of code:

    ///document.getElementById("footer").style.height= "30px"; 
    //document.getElementById("footerbuttondown").style.visibility="hidden";  
    ///document.getElementById("footerbuttonup").style.visibility="visible";  

    document.getElementById("footer").style.height= "30px"; 
    document.getElementById("footerbuttondown").style.visibility="hidden";  
    document.getElementById("footerbuttonup").style.visibility="visible";  
 
function shrink(){
  if(document.getElementById("footer").style.height= "300px"){
  
    document.getElementById("footer").style.height= "30px";
    document.getElementById("footerbuttondown").style.visibility="hidden";  
    document.getElementById("footerbuttonup").style.visibility="visible";  
    document.getElementById("footercont").style.opacity="0";  
    document.getElementById("footercont").style.visibility="hidden";
    ///document.getElementById("footercont").style.display="none";  
                                                                 
  }
}

function expand(){
  if(document.getElementById("footer").style.height= "30px"){
    
    document.getElementById("footer").style.height= "300px";
    document.getElementById("footerbuttondown").style.visibility="visible";  
    document.getElementById("footerbuttonup").style.visibility="hidden";  
    document.getElementById("footercont").style.opacity="1";  
    document.getElementById("footercont").style.visibility="visible";
    ///document.getElementById("footercont").style.display="initial";  
                                                  
  }
}





//////clock and date
///lets sort out the names we want for our months and days and construct an array that we can call with a variable that we define later

var MonthName = ["Jan","Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var DayName = ["Sun","Mon", "Teus", "Wed", "Thur", "Fri", "Sat"];

////I can make the  hours, minutes, and seconds allways contain 2 digits if the variable is under 10 we append a zero to the prefix

function padHours(Hours) {
   
     return (Hours < 10 ? '0' : '') + Hours;
}
function padSeconds(Seconds) {
   
     return (Seconds < 10 ? '0' : '') + Seconds;
}
    
function padMinutes(Minutes) {
   
     return (Minutes < 10 ? '0' : '') + Minutes;  
}

///function that will grab our time and date information
function timeFunction(){
  
    //// we need something that will format the hours from 24 to 12 hour incriments. Lets save the fancy logic and just use an array to format this
    var regularTime= ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"] ;
    
//now the important parts
  var nDate = new Date;
  var Month =  nDate.getMonth();
  var DayofWeek = nDate.getDay();
  var DayofMonth = nDate.getDate();
  var Hours = nDate.getHours();
  var Minutes = nDate.getMinutes();
  var Seconds = nDate.getSeconds();
  var Milliseconds =   nDate.getMilliseconds();
  var Year = nDate.getFullYear();
//////lets make a variable to define the 12-hour format using the regularTime array
  var format = regularTime[Hours];
  
///Are we AM or PM? when Hours = 12 it must be pm if we know that 11am and before are am and 12 is pm then everything less than 11 should be and when Hours = 12 this is defined by else.
  if( Hours <= 11){
    var AMPM = "Am"
  }else{
    var AMPM = "Pm"
    };


  
  ////logic to determine morning, evening or nigt...
 
 
if (Hours < 12) {
 greeting = "Good morning! ";
}
else if (Hours == 12) {
 greeting = "Good afternoon! ";

}
else if (Hours < 17) {
 greeting = "Good day! "

}
else {
 greeting = "Good evening! "

};
  
///logic for the date
  
  var DisplayDate =   DayName[DayofWeek] + ". " + MonthName[Month] + ". " + DayofMonth + ", " + Year;
  
   ///send our information to the individual divs that make up the clock
  
  //document.getElementById("message").innerHTML = greeting;  
  document.getElementById("date").innerHTML = DisplayDate + " " + padHours(format) + ":" + padMinutes(Minutes) + ":" + padSeconds(Seconds) + " " +AMPM + " " + greeting +" " ;  
  

};////end function

 

///Repeat the timeFunction in order to call the updated time
setInterval(function(){timeFunction()}, 250);


////////now the very difficult cookie problem

/////code for the use of cookies on a page


/// this function will help us construct a cookie to use on the page the function is called only if a cookie does not exist
function makeCookie(cookiename,cookievalue,expiration) {
    ///we need some date information so we can expire the cookie after a certain amount of time
    var cookieDate = new Date();
    //// the cookie will expire in  day because 1800 seconds in day times 1000ms is exactly 1 day in miliseconds
    cookieDate.setTime(cookieDate.getTime() + (expiration*1800*1000));
    var cookieexpiration = "cookieexpiration=" + cookieDate.toGMTString();
    /// document.cookie creates the cookie with special formatting for use later
    document.cookie = cookiename+"="+cookievalue+"; "+cookieexpiration;
}

//this function is to use the cookie and construct an array that formats the cookie information
function useCookie(cookiename) {
    var cnewname = cookiename + "=";
   ///split the string from the cookie and build the array 
   var cookiearray = document.cookie.split(';');
        ///the for loop and while loop inside the for loop help looks for the number of items in the array and determines the information needed to utilize a cookie
    for(var i=0; i<cookiearray.length; i++) {
        ////format a variable to eaual the information from our array
        var cookiestring = cookiearray[i];
        while (cookiestring.charAt(0)==' ') cookiestring = cookiestring.substring(1);
        ///if the cookie exists we can see the value if not the value = ""
        if (cookiestring.indexOf(cnewname) != -1) {
            return cookiestring.substring(cnewname.length, cookiestring.length);
        }
    }
    return "";
}

function initializeCookie() {
    
    var nameofuser=useCookie("username");
  
    ///here we alert if we see that a user has a cookie created already
    if (nameofuser != "") {
     
        
         document.getElementById("cookiemessage").innerHTML = "Welcome back " + nameofuser +"!"; 
    } else {
      
       ///prompt feature allows us to enter info in a text box similar to an alert box
       nameofuser = prompt("Enter Your Full Name:","");
          //// when the cookie is detected we can write it to an html message in a div with id="cookiemessage"
         document.getElementById("cookiemessage").innerHTML = "Welcome " + nameofuser +"!"; 
      ///if the username is not null or blank we make a cookie
       if (nameofuser != "" && nameofuser != null) {
            
           makeCookie("username", nameofuser, 45);
       }
    }
}

////and finally a delete cookie function so we can reset the cookie
function deleteCookie(){

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

}




//////////Email VALIDATION

