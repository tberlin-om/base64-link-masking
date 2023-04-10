$(document).ready(function() {
  var jsBase64 = $('.js-base64');
  
  jsBase64.each(function() {
    $(this).off('click', handleClick).on('click', handleClick);
  });
  
  function handleClick(e) {
    e.preventDefault();
    window.location = atob($(this).attr('data-base64'));
  }
});
