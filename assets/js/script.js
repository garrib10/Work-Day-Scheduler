$(document).ready(function () {
    //Moment JS 
    $("#currentDay").text(moment().format('LLLL'));
     console.log("currentDay");

    // Save Button 
    $(".saveBtn").on("click", function () {
        var activity = $(this).siblings(".description").val();
        console.log(activity)
        var time = $(this).parent().attr("id")
        console.log(time)
        localStorage.setItem(time, activity)
        console.log(localStorage)
    })
    function hourColor() {
        var currentHour = moment().hours();
        console.log(currentHour);

        $(".timeblock").each(function () {
            var ourHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(ourHour);

            //if statements, addClass method (Need to be fixed)  

            if (ourHour < currentHour) {
                $(this).addClass("past");
            }
            if (ourHour === currentHour) {
                $(this).addClass("present");
            }
            if (ourHour > currentHour) {
                $(this).addClass("future");
            }



        })

    }
    hourColor()


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})