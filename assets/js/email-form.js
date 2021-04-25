$("#send-btn").click(function () {
  var email = $("#subscribe-email").val();

  $.post(
    "https://api.asva.finance/mailer",
    { cust_email: email },
    function (result) {
      window.alert("Dear " + email + ", thanks for subscribing!");
    }
  ).fail(function () {
    window.alert("Something went wrong, please try again.");
  });
});
