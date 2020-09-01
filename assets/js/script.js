$(document).ready(function () {
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

        })





    }
    hourColor()


    $("#hour-9 .description").val(localStorage.getItem("hour-9"))













})