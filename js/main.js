(function() {
  chrome.extension.sendRequest({}, function(response) {
    if (response.isActive) {
      $(document).ready(function() {
        $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
      });
    }
  });
})();