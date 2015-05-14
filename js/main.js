(function() {
  var check = function() {
    return location.hostname == 'github.com';
  };
  var isActive = check();
  if (!isActive) return;
  $(document).ready(function() {
    $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
  });
})();