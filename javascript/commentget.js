(function(){
  let commentlist = document.getElementById("post");
  var obj = JSON.parse(jsonString);
  console.log(obj);
  theData = new Array (4);
  for (var i = 0; i < 4; i++) {
  theData[i] = `${obj.commentl[i].user}: </br> ${obj.commentl[i].Comment}`;}
  // end the for loop here
  document.write(theData[0]+"</br></br>"+theData[1]+"</br></br>"+theData[2]+"</br></br>"+theData[3]);
}());