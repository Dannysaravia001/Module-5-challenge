// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  $(".saveBtn").on(this).siblings("description").val();

  var timeBlockId = $(this).closest(".time-block").attr("id")
})
 var currentHour = dayjs().hour();

$('.time-block').each(function () {
  var timeBlockId = $(this).attr('id')
  var blockHour = parseInt(timeBlockId)
  
  if (blockHour < currentHour) {
    $(this).addClass("past")
  }else if(blockHour === currentHour) {
    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
