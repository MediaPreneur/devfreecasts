module.exports = function() {

  var harp = require("./harp.json")["globals"]
    , RSS = require("rss")
    , moment = require("moment")
    , fs = require("fs")
    , root_url = harp.root_url[process.env.NODE_ENV]
    , image_root_url = root_url + "assets/images/"
    , output_feed = "public/rss.xml"
  ;

  var feed = new RSS({
    title: harp.title,
    description: harp.description,
    feed_url: root_url + "rss.xml",
    site_url: root_url,
    image_url: image_root_url + "devfreecasts-128.png",
    managingEditor: harp.author,
    pubDate: moment().format("LLLL"),
    ttl: 60
  });
  
  harp.platforms.forEach(function(platform_name) {
    var platform = require("./public/"+ platform_name +"/_data.json")["index"];

    platform.videos.forEach(function(video) {
      var video_id = video.title.replace(/[^\w\s]/g, "").replace(/\s/g, "-").toLowerCase();
      var video_link = root_url + platform_name + "/#" + video_id;
      var video_published_at = moment(video.published_at || moment().format("YYYYMMDD"), "YYYYMMDD");

      feed.item({
        title: "Video: " + video.title,
        description: video.description,
        url: video_link,
        author: harp.author,
        date: video_published_at.format("ll")
      });
    });
  });
  fs.writeFileSync(output_feed, feed.xml());
  console.log("Generated RSS:", output_feed);
};