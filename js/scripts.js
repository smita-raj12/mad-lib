  $(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      $("#formOne").hide();
      const IdInput = $("input#id").val();
      const fnameInput = $("input#fname").val();
      const mnameInput= $("input#mname").val();
      const lnameInput = $("input#lname").val();
      const hnoInput = $("input#hno").val();
      const snameInput = $("input#sname").val();
      const cityInput = $("input#city").val();
      const codeInput = $("input#code").val();

      $(".id").text(IdInput);
      $(".fname").text(fnameInput);
      $(".mname").text(mnameInput);
      $(".lname").text(lnameInput);
      $(".hno").text(hnoInput);
      $(".sname").text(snameInput);
      $(".city").text(cityInput);
      $(".code").text(codeInput);

      $("#address").show();
    });
  });