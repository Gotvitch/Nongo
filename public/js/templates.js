this["Nongo"] = this["Nongo"] || {};
this["Nongo"]["Templates"] = this["Nongo"]["Templates"] || {};

this["Nongo"]["Templates"]["Collection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav nav-tabs\">\n  <li data-tab=\"documents\"><a href=\"/databases/";
  if (stack1 = helpers.database) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.database; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/collections/";
  if (stack1 = helpers.collection) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.collection; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-link=\"push\">Documents</a></li>\n  <li data-tab=\"indexes\"><a href=\"/databases/";
  if (stack1 = helpers.database) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.database; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/collections/";
  if (stack1 = helpers.collection) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.collection; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/indexes\" data-link=\"push\">Indexes</a></li>\n</ul>\n\n\n\n<!-- Tab panes -->\n<div class=\"tab-content\">\n  <div id=\"documents\"></div>\n  <div id=\"indexes\"></div>\n</div>\n";
  return buffer;
  });

this["Nongo"]["Templates"]["Collections"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <button type=\"button\" class=\"btn btn-default js-refresh\">\n    <span class=\"glyphicon glyphicon-refresh\"></span>\n  </button>\n  <button type=\"button\" class=\"btn btn-default js-add\">Create collection</button>\n</div>\n\n<div class=\"shell-form-wrapper\">\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Documents</th>\n      <th>Size</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
  });

this["Nongo"]["Templates"]["CollectionsItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td><a href=\"/databases/";
  if (stack1 = helpers.databaseName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.databaseName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/collections/"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-link=\"push\" >"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeCount || depth0.humanizeCount),stack1 ? stack1.call(depth0, depth0.count, options) : helperMissing.call(depth0, "humanizeCount", depth0.count, options)))
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeByte || depth0.humanizeByte),stack1 ? stack1.call(depth0, depth0.size, options) : helperMissing.call(depth0, "humanizeByte", depth0.size, options)))
    + "</td>\n<td>\n    <button type=\"button\" class=\"btn btn-danger btn-xs js-delete\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>";
  return buffer;
  });

this["Nongo"]["Templates"]["Database"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav nav-tabs\">\n  <li data-tab=\"collections\"><a href=\"/databases/";
  if (stack1 = helpers.database) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.database; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-link=\"push\">Collections</a></li>\n  <li data-tab=\"users\"><a href=\"/databases/";
  if (stack1 = helpers.database) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.database; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/users\" data-link=\"push\">Users</a></li>\n</ul>\n\n\n\n<!-- Tab panes -->\n<div class=\"tab-content\">\n  <div id=\"collections\"></div>\n  <div id=\"users\"></div>\n</div>";
  return buffer;
  });

this["Nongo"]["Templates"]["DatabaseItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td><a href=\"/databases/"
    + escapeExpression(((stack1 = depth0.db),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-link=\"push\" >"
    + escapeExpression(((stack1 = depth0.db),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeByte || depth0.humanizeByte),stack1 ? stack1.call(depth0, depth0.dataSize, options) : helperMissing.call(depth0, "humanizeByte", depth0.dataSize, options)))
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeByte || depth0.humanizeByte),stack1 ? stack1.call(depth0, depth0.fileSize, options) : helperMissing.call(depth0, "humanizeByte", depth0.fileSize, options)))
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeCount || depth0.humanizeCount),stack1 ? stack1.call(depth0, depth0.collections, options) : helperMissing.call(depth0, "humanizeCount", depth0.collections, options)))
    + "</td>\n<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanizeCount || depth0.humanizeCount),stack1 ? stack1.call(depth0, depth0.objects, options) : helperMissing.call(depth0, "humanizeCount", depth0.objects, options)))
    + "</td>\n<td>\n    <button type=\"button\" class=\"btn btn-danger btn-xs js-delete\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>";
  return buffer;
  });

this["Nongo"]["Templates"]["Documents"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <button type=\"button\" class=\"btn btn-default js-refresh\">\n    <span class=\"glyphicon glyphicon-refresh\"></span>\n  </button>\n  <button type=\"button\" class=\"btn btn-default js-add\">Add document</button>\n</div>\n<div class=\"document-new\">\n    \n</div>\n<ul class=\"documents\">\n\n</ul>";
  });

this["Nongo"]["Templates"]["DocumentsItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "New document";
  }

function program3(depth0,data) {
  
  var stack1;
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<div class=\"document-title clearfix\">\n    <h3 class=\"pull-left\">\n        <span class=\"document-id\">";
  stack1 = helpers['if'].call(depth0, depth0.is_new, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        <time class=\"document-time small\">";
  if (stack1 = helpers.creationTime) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.creationTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</time>\n    </h3>\n    <div class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-default btn-sm js-edit document-display\">Edit</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm js-delete document-display\">Delete</button>\n        \n            <button type=\"button\" class=\"btn btn-default btn-sm js-cancel document-edit\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm js-save document-edit\">Save</button>\n    </div>\n</div>\n<div class=\"document-display document-wrapper well\">\n    <div class=\"document-content\">";
  stack2 = ((stack1 = depth0.content),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n</div>\n<div class=\"document-edit document-editor\">\n    <textarea></textarea>\n</div>";
  return buffer;
  });

this["Nongo"]["Templates"]["Home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n<div>\n  <button type=\"button\" class=\"btn btn-default js-refresh\">\n    <span class=\"glyphicon glyphicon-refresh\"></span>\n  </button>\n  <button type=\"button\" class=\"btn btn-default js-add\">Create database</button>\n</div>\n<div class=\"shell-form-wrapper\">\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Data Size</th>\n      <th>File Size</th>\n      <th>Collections</th>\n      <th>Objects</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
  });

this["Nongo"]["Templates"]["Indexes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <button type=\"button\" class=\"btn btn-default js-refresh\">\n    <span class=\"glyphicon glyphicon-refresh\"></span>\n  </button>\n  <button type=\"button\" class=\"btn btn-default js-add\">Add index</button>\n</div>\n<div class=\"shell-form-wrapper\">\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Fields</th>\n      <th>Unique</th>\n      <th>Sparse</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
  });

this["Nongo"]["Templates"]["IndexesItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n<td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.stringify || depth0.stringify),stack1 ? stack1.call(depth0, depth0.key, options) : helperMissing.call(depth0, "stringify", depth0.key, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n<td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.yesno || depth0.yesno),stack1 ? stack1.call(depth0, depth0.unique, options) : helperMissing.call(depth0, "yesno", depth0.unique, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n<td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.yesno || depth0.yesno),stack1 ? stack1.call(depth0, depth0.sparse, options) : helperMissing.call(depth0, "yesno", depth0.sparse, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n<td>\n    <button type=\"button\" class=\"btn btn-danger btn-xs js-delete\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n    </button>\n</td>";
  return buffer;
  });

this["Nongo"]["Templates"]["Users"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Read Only</th>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
  });

this["Nongo"]["Templates"]["UsersItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n<td>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.yesno || depth0.yesno),stack1 ? stack1.call(depth0, depth0.read_only, options) : helperMissing.call(depth0, "yesno", depth0.read_only, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>";
  return buffer;
  });