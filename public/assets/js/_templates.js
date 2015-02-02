this["DFC"] = this["DFC"] || {};

this["DFC"]["menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <div class=\"thumbnail\">\n        <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.about) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.about); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <img src=\"";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-responsive img-rounded\">\n        </a>\n        <div class=\"caption\">\n          <p class=\"center\">\n            <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.about) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.about); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-block btn-primary\">\n              <i class=\"icon-video\"></i>&nbsp;";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (";
  if (helper = helpers.total_videos) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_videos); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " videos)\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  ";
  return buffer;
  }

  buffer += "<div class=\"row-fluid\">\n  <div class=\"col-xs-12\">\n    <p class=\"center\">\n      <strong>";
  if (helper = helpers.total_platforms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_platforms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> platforms and <strong>";
  if (helper = helpers.total_free_casts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_free_casts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> freecasts.\n    </p>\n  </div>\n</div>\n<div class=\"row-fluid\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.platforms), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"row-fluid\">\n  <div class=\"col-xs-12\">\n    <p class=\"center\">\n      <strong>See also <a href=\"http://devfreebooks.org?utm_source=devfreecasts&utm_medium=medium&utm_campaign=DevFreeCasts\" target=\"_blank\" rel=\"me\" title=\"a huge collection of free books for devs.\">DevFreeBooks</a>.</strong>\n    </p>\n  </div>\n</div>";
  return buffer;
  });

this["DFC"]["thumb_videos"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <section id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.videos), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </section>\n";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.featured), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" onclick=\"ga('send', 'event', '"
    + escapeExpression(((stack1 = (depth2 && depth2.subtitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "', '";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\">\n            <img src=\""
    + escapeExpression(((stack1 = (depth1 && depth1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-responsive img-rounded\" width=\"250\" height=\"120\">\n          </a>\n          <div class=\"caption\">\n            <h3 class=\"video-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            <p class=\"video-description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"video-metadata\">Author: <a href=\""
    + escapeExpression(((stack1 = (depth1 && depth1.site_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = (depth1 && depth1.site)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><br>Level: <span class=\"label label-primary\" title=\"";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.level) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> | Lang.: <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = (depth1 && depth1.lang)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> | Time: <span class=\"label label-primary\">";
  if (helper = helpers.duration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.duration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n            <p><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" class=\"btn btn-primary btn-block\" role=\"button\" onclick=\"ga('send', 'event', '"
    + escapeExpression(((stack1 = (depth2 && depth2.subtitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "', '";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\"><i class=\"icon-play\"></i>&nbsp;Watch</a>\n          </div>\n        </div>\n      </div>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "\n        <div class=\"thumbnail thumbnail-featured\">\n          <span class=\"label label-primary label-top\">FEATURED VIDEO</span>\n      ";
  }

function program5(depth0,data) {
  
  
  return "\n        <div class=\"thumbnail\">\n      ";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.partners), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });