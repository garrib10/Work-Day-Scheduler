$(document).ready(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("moment"().format());

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
        console.log(currentHour)

        $(".timeblock").each(function () {
            var ourHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(ourHour)

            //if statements, addClass method
            if (ourHour === currentHour) {
                $(this).addClass("bg-red");
            }
            if (ourHour > pastHour) {
                $(this).addClass("bg-gray");
            }
            if (ourHour < futureHour) {
                $(this).addClass("bg-green");
            }
        })





    }
    hourColor()


    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))
})