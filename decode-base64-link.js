<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
  var jsBase64 = document.querySelectorAll('.js-base64');
  
  jsBase64.forEach(function(item) {
    item.removeEventListener('click', handleClick);
    item.addEventListener('click', handleClick);
  });
  
  function handleClick(e) {
    e.preventDefault();
    window.location = atob(this.getAttribute('data-base64'));
  }
});
</script>
