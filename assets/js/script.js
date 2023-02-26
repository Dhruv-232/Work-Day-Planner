$(document).ready(function() {
    // get current day and time using dayjs library
    var currentDate = dayjs().format("dddd, MMMM D");
    var currentTime = dayjs().format("hA");
  
    // update header with current day and time
    $("#currentDay").text("Today is " + currentDate + " and it's currently " + currentTime);
  
    // loop through each time-block div and update its background color based on whether it's in the past, present, or future
    $(".time-block").each(function() {
      // get hour value from div id and convert to 24-hour format
      var hour = parseInt($(this).attr("id").split("-")[1]);
  
      if (hour < dayjs().hour()) {
        $(this).removeClass("present future").addClass("past");
      }
      else if (hour === dayjs().hour()) {
        $(this).removeClass("past future").addClass("present");
      }
      else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  
    // save button click event listener
    $(".saveBtn").on("click", function() {
      // get textarea value and its corresponding hour
      var text = $(this).siblings(".description").val().trim();
      var hour = $(this).parent().attr("id");
  
      // save text to local storage using hour as key
      localStorage.setItem(hour, text);
    });
  
    // load saved text from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  });