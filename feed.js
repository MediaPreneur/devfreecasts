module.exports = function() {

  var harp = require("./harp.json")["globals"]
    , RSS = require("rss")
    , moment = require("moment")
    , fs = require("fs")
    , rootUrl = harp.root_url[process.env.NODE_ENV]
    , imageRootUrl = rootUrl + "assets/images/"
    , outputFeed = "public/rss.xml"
    , videos = []
  ;

  var feed = new RSS({
    title: harp.title,
    description: harp.description,
    feed_url: rootUrl + "rss.xml",
    site_url: rootUrl,
    image_url: imageRootUrl + "devfreecasts-128.png",
    managingEditor: harp.author,
    pubDate: moment().format("LLLL"),
    ttl: 60
  });
  
  harp.platforms.forEach(function(platformName) {
    var platform = require("./public/"+ platformName +"/_data.json")["index"];

    platform.videos.forEach(function(video) {
      var videoId = video.title.replace(/[^\w\s]/g, "").replace(/\s/g, "-").toLowerCase();
      var videoLink = rootUrl + platformName + "/#" + videoId;
      var videoPublishedAt = moment(video.published_at || moment().format("YYYYMMDD"), "YYYYMMDD");

      videos.push({
        title: "Video: " + video.title,
        description: video.description,
        url: videoLink,
        author: harp.author,
        date: videoPublishedAt.format("ll")
      });
    });
  });

  var sortedVideos = videos.sort(function(a, b) {
    var a = moment(a.date, "ll").toDate().getTime();
    var b = moment(b.date, "ll").toDate().getTime();
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  sortedVideos.forEach(function(video) { feed.item(video); });

  fs.writeFileSync(outputFeed, feed.xml());
  console.log("Generated RSS:", outputFeed);
};