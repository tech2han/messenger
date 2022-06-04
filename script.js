var ali = document.getElementById("ali");
var bg = document.getElementById("back");
var chat = document.getElementById("chatali");
var haseeb = document.getElementById("haseeb");
var chathaseeb = document.getElementById("chathaseeb");
var stat = document.getElementById("status");
var story = document.getElementById("story");
var storyin = document.getElementById("story2");
var sstory = document.getElementById("short-story");
var left = document.getElementById("left");
var sleft = document.getElementById("sleft");
var sstat = document.getElementById("sstatus");
var statbtn = document.getElementById("stat-btn");

ali.onclick = function () {
    if (chat.className == "none"){
        chat.className = "block";
        bg.className = "none";
        ali.className =  "bg-white chat";
        haseeb.className = "chat";
        chathaseeb.className = "none";
    }
    else{
        bg.className = "block";
        chat.className = "none";
        ali.className = "chat";
    }
} 
haseeb.onclick = function () {
    if (chathaseeb.className == "none"){
        chathaseeb.className = "block";
        chat.className = "none";
        bg.className = "none";
        haseeb.className =  "bg-white chat";
        ali.className = "chat";

    }
    else{
        bg.className = "block";
        chathaseeb.className = "none";
        haseeb.className = "chat";
        ali.className = "chat";
        chatjafar.className = "chatjafar";
        chatakbar.className = "chatakbar";
        chatfaizan.className = "chatfaizan";
    }
} 

story.onclick = function () {
    if (stat.className == "none"){
        stat.className = "stat";
        bg.className = "none";
        ali.className =  "chat";
        haseeb.className = "chat";
        chathaseeb.className = "none";
        chat.className = "none";
        storyin.className ="story2b";
    }
    else{
        bg.className = "block";
        stat.className = "none";
        ali.className = "chat";
        chat.className = "none";
        storyin.className ="story-2";

    }
} 
sstory.onclick = function () {
    if (sstat.className == "none"){
        sstat.className = "stat";
        left.className = "none";
        sleft.className = "short-left inner-left";
    }
    else{
        bg.className = "block";
        sleft.className = "none";
        left.className = "short-left inner-left";
    }
} 
statbtn.onclick = function () {
    if (sstat.className == "stat"){
        sstat.className = "none";
        sleft.className = "none";
        left.className = "short-left inner-left";
    }
    else{
        left.className = "none";
        sleft.className = "short-left inner-left";
    }
} 