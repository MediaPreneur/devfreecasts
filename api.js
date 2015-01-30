module.exports = function() {
  var harp = require("./harp.json")
    , fs = require("fs")
    , image_root_url = harp.globals.root_url[process.env.NODE_ENV] + "assets/images/"
    , output_path = process.env.NODE_ENV == "production" ? "www" : "public"
    , menu = {
        total_platforms: 0,
        total_free_casts: 0,
        platforms: []
    }
  ;

  console.log("Generating static platforms json...");
  harp.globals.platforms.forEach(function(platform_name) {
    var platform = require("./public/"+ platform_name +"/_data.json")["index"];
    platform.image = image_root_url + platform.image;
    platform.partners.forEach(function(partner, index) {
      if (partner.publish) {
        partner.lang = partner.lang.toUpperCase();
        partner.name = partner.site.toLowerCase().replace(/[\s]+/g, "_");
        if (partner.image) {
          partner.image = image_root_url + partner.image;
        } else {
          partner.image = platform.image;
        }
        partner.videos.forEach(function(video, index) {
          video.level_title = harp.globals.level[video.level.toLowerCase()];
          video.level = video.level.toUpperCase();
          video.featured = !!video.featured;
          video.url = video.url + (video.url.indexOf("?") >= 0 ? "&" : "?") + harp.globals.utm;  
        });
      } else {
        platform.partners[index] = null;
      }
    });
    platform["partners"] = platform.partners.filter(function(partner) {
      return partner != null;
    });

    var platform_videos = 0;
    platform.partners.forEach(function(partner) {
      platform_videos += partner.videos.length;
    });
    
    menu["platforms"].push({
      name: platform.name,
      title: platform.subtitle,
      url: harp.globals.root_url[process.env.NODE_ENV] + platform.name,
      about: platform.about,
      category: platform.category,
      image: platform.image,
      total_videos: platform_videos
    });
    menu["total_free_casts"] = menu.total_free_casts + platform_videos;

    var output = "./"+ output_path +"/api/"+ platform_name.toUpperCase() +".json";
    console.log(output);
    fs.writeFileSync(output, JSON.stringify(platform));
  });
  menu["total_platforms"] = menu.platforms.length;
  var output = "./"+ output_path +"/api/menu.json";
  console.log(output);
  fs.writeFileSync(output, JSON.stringify(menu));
  console.log("Platform json are done!");
};