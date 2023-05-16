$(".txtb").on("keyup",function(e){
    //13  means enter button
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
      var task = $("<div class='task'></div>").text($(".txtb").val());
      

      task.append();
      $(".notcomp").append(task);
        //to clear the input
      $(".txtb").val("");
    }
  });