let bttn = document.getElementById("bttn")
bttn.onclick= function(e){

   alert(`The National anthem will be played after 5 seconds. Please Stand Up...`)
   setTimeout(()=>{
      window.location.href="https://music.youtube.com/watch?v=HtMF973tXIY&si=R0uQ4kmknouGWrRo"
      
   },5000)
   
}