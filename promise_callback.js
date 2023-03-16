console.log("Hello, World!");


let our_promise = new Promise (function(resolve, reject){
  
  //after 1 sec job job is done
  setTimeout(()=>resolve("done"), 1000);
});