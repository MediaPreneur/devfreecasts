(function() {
  var toggle = document.querySelector(".navbar-toggle")
    , collapse = document.querySelector(".navbar-collapse")
    , dfcURL = document.querySelector("[data-dfc-url]")
    , dfcTemplate = document.querySelector("[data-dfc-template]")
    , filterCategory = document.querySelectorAll("[data-dfc-category]")
    , menu = document.querySelectorAll("[data-dfc-menu]")
  ;

  toggle.addEventListener("click", function() {
    if (collapse.classList.contains("hidden-xs")) {
      collapse.classList.remove("hidden-xs");
    } else {
      collapse.classList.add("hidden-xs");
    }
  });
  
  for (var i = 0, len = filterCategory.length || 0; i < len; i++) {
    filterCategory[i].addEventListener("click", function(e) {
      var data = JSON.parse(localStorage.getItem('devfreecasts'))
        , category = e.target.getAttribute("data-dfc-category")
        , template = dfcTemplate.getAttribute("data-dfc-template")
        , dfcType = e.target.getAttribute("data-dfc")
        , hasItems = true
      ;
      if (dfcType === "video") {
        if (category) {
          var items = 0;
          data.partners.forEach(function(partner) {
            partner.videos = partner.videos.filter(function(video) {
              return video.level == category;
            });
            items += partner.videos.length;
          });
          hasItems = items > 0;
        }
      } else if (dfcType === "platform") {
        if (category) {
          data.platforms = data.platforms.filter(function(platform) {
            return platform.category == category;
          });
          hasItems = data.platforms.length > 0;
        }
      }
      if (hasItems) {
        dfcTemplate.innerHTML = DFC[template](data);
      } else {
        dfcTemplate.innerHTML = "<div class='result-status'><h3>Nothing was found here :(</h3></div>";
      }
    });
  }

  var shuffle = function(collection) {
    collection && collection.sort(function() { return Math.random() - 0.5; });
  };

  var renderTemplate = function() {
    if (dfcURL && dfcTemplate) {
      var url = dfcURL.getAttribute("data-dfc-url")
        , template = dfcTemplate.getAttribute("data-dfc-template")
      ;
      request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        var data = JSON.parse(request.responseText);
        data.platforms && shuffle(data.platforms);
        dfcTemplate.innerHTML = DFC[template](data);
        localStorage.setItem('devfreecasts', request.responseText);
      };
      request.send();
    }
  };

  renderTemplate();

  // For Firefox OS Hosted app
  if (!!(navigator.mozApps && navigator.mozApps.installPackage)) {
    navigator.mozApps.installPackage(window.location.origin + "/devfreecasts/manifest.webapp");
  }

})();