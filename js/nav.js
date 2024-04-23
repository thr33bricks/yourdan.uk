//Open menu nav
function openNav() {
    if(document.documentElement.clientWidth < 769 && document.readyState === "complete"){
      document.getElementById("mySidenav").style.width = "200px";
    }
    else if(document.readyState === "complete"){
      document.getElementById("mySidenav").style.width = "250px";
    }
}

//Close menu nav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}