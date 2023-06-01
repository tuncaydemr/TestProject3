$(() => {
  let $weight = $('#weight').val();
  let $height = $('#height').val();

  $('#weight, #height').keyup(() => {
    if (($weight != "") || ($height != "")) {
      $('button').prop('enabled', true);
    } else {
      $('button').prop('disabled', true);
    }
  });

  if (($weight != "") && ($height != "")) {
    $('.bmi').addClass('d-block');
  } else {
    $('.bmi').addClass('d-none');
  }
});
