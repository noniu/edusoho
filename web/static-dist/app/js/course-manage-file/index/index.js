!function(l){function t(t){for(var e,a,n=t[0],r=t[1],i=t[2],o=0,s=[];o<n.length;o++)a=n[o],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&s.push(u[a][0]),u[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(l[e]=r[e]);for(f&&f(t);s.length;)s.shift()();return d.push.apply(d,i||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var a=d[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==u[i]&&(n=!1)}n&&(d.splice(e--,1),t=o(o.s=a[0]))}return t}var a={},u={117:0},d=[];function o(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=a,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var f=n;d.push([552,0]),c()}({150:function(t,e,a){"use strict";var n=a(14),r=a.n(n);e.a=function(t,e,a){var n={};"remote"===e&&(n={ajax:{url:$(t).data("url"),dataType:"json",quietMillis:100,data:function(t){return{q:t,page_limit:10}},results:function(t){var a=[];return $.each(t,function(t,e){a.push({id:e.name,name:e.name})}),{results:a}}},initSelection:function(t,e){var a=[];$(t.val().split(",")).each(function(){a.push({id:this,name:this})}),e(a)},formatSelection:function(t){return t.name},formatResult:function(t){return t.name},width:400,multiple:!0,placeholder:Translator.trans("validate.tag_required_hint"),createSearchChoice:function(){return null},maximumSelectionSize:20}),$(t).select2(r()(n,a))}},17:function(t,e){t.exports=jQuery},317:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=function(){function e(t){r()(this,e),this.$element=t,this.initEvent()}return o()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="batch-select"]',function(t){return e._batch2Item(t)}),this.$element.on("click",'[data-role="batch-item"]',function(t){return e._item2Batch(t)})}},{key:"_batch2Item",value:function(t){var e=$(t.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",e),this.$element.find('[data-role="batch-item"]:visible').prop("checked",e),e?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):0==this.$element.find('[data-role="batch-item"]:checked').length&&$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0)}},{key:"_item2Batch",value:function(){var t=this.$element.find('[data-role="batch-item"]:visible').length,e=this.$element.find('[data-role="batch-item"]:checked').length;0!==e?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0),t==e?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),e}();e.a=s},326:function(t,e,a){"use strict";a.d(e,"a",function(){return f});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(4),l=a(150),c=function(){function e(t){r()(this,e),this.element=t.element,this.callback=t.callback,this.init()}return o()(e,[{key:"init",value:function(){this.initEvent(),this._initTag()}},{key:"initEvent",value:function(){var e=this;$("#info-form").on("submit",function(t){e.onSubmitInfoForm(t)})}},{key:"_initTag",value:function(){Object(l.a)("#infoTags","remote",{width:"off"})}},{key:"onSubmitInfoForm",value:function(t){var e=$(t.currentTarget);e.find("#info-save-btn").button("loading"),$.ajax({type:"POST",url:e.attr("action"),data:$("#info-form").serialize()}).done(function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))}).always(function(){e.find("#info-save-btn").button("reset")}),t.preventDefault()}}]),e}(),u=a(90),d=function(){function e(t){r()(this,e),this.callback=t.callback,this.element=t.element,this.init()}return o()(e,[{key:"init",value:function(){this.initEvent(),this._initPlayer()}},{key:"initEvent",value:function(){var e=this;$(".js-img-set").on("click",function(t){e.onClickChangePic(t)}),$(".js-reset-btn").on("click",function(t){e.onClickReset(t)}),$(".js-set-default").on("click",function(t){e.onClickDefault(t)}),$(".js-set-select").on("click",function(t){e.onClickSelect(t)}),$(".js-screenshot-btn").on("click",function(t){e.onClickScreenshot(t)}),$("#cover-form").on("submit",function(t){e.onSubmitCoverForm(t)})}},{key:"onClickChangePic",value:function(t){var e=$(t.currentTarget),a=e.closest("#cover-tab");a.find(".js-cover-img").attr("src",e.attr("src")),a.find("#thumbNo").val(e.data("no"))}},{key:"onClickReset",value:function(){$("#thumbNo").val(""),$(".js-cover-img").attr("src",$("#orignalThumb").val())}},{key:"onClickDefault",value:function(t){this._changePane($(t.currentTarget))}},{key:"onClickSelect",value:function(t){this._changePane($(t.currentTarget))}},{key:"onClickScreenshot",value:function(){var e=$(event.currentTarget),a=this;e.button("loading");var n=a.second;$.ajax({type:"get",url:e.data("url"),data:{second:n}}).done(function(t){"success"==t.status?a._successGeneratePic(e,t):"waiting"==t.status?a.intervalId=setInterval(function(){$.get(e.data("url"),{second:n},function(t){"success"==t.status&&(a._successGeneratePic(e,t),clearInterval(a.intervalId))})},3e3):(e.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint")))}).fail(function(){e.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint"))})}},{key:"onSubmitCoverForm",value:function(t){var e=$(t.currentTarget);e.find("#save-btn").button("loading"),e.find("#thumbNo").val()?$.ajax({type:"POST",url:e.attr("action"),data:e.serialize()}).done(function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))}).always(function(){e.find("#save-btn").button("reset")}):(Object(s.a)("success",Translator.trans("site.save_success_hint")),e.find("#save-btn").button("reset")),t.preventDefault()}},{key:"destroy",value:function(){clearInterval(this.intervalId)}},{key:"_initPlayer",value:function(){var e=this;0<$("#viewerIframe").length&&($("#viewerIframe"),new u.a({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"}).on("video.timeupdate",function(t){e.second=Math.floor(t.currentTime)}))}},{key:"_successGeneratePic",value:function(t,e){t.button("reset"),Object(s.a)("success",Translator.trans("meterial_lib.generate_screenshots_success_hint"));var a=t.closest("#cover-tab");a.find(".js-cover-img").attr("src",e.url),a.find("#thumbNo").val(e.no)}},{key:"_changePane",value:function(t){t.closest(".nav").find("li.active").removeClass("active"),t.addClass("active");var e=$(".tab-content-img");e.find(".tab-pane-img.active").removeClass("active"),e.find(t.data("target")).addClass("active")}}]),e}(),f=function(){function e(t){r()(this,e),this.callback=t.callback,this.element=t.element,this.init()}return o()(e,[{key:"init",value:function(){this.initEvent(),0<$("#cover-tab").length&&(this.cover=new d({element:$("#cover-tab")})),this.info=new c({element:$("#info-tab")})}},{key:"initEvent",value:function(){var e=this;$(".js-back").on("click",function(t){e.onClickBack(t)}),$(".js-cover").on("click",function(t){e.onClickCover(t)}),$(".js-info").on("click",function(t){e.onClickInfo(t)})}},{key:"onClickInfo",value:function(t){var e=$(t.currentTarget);this._changePane(e)}},{key:"onClickCover",value:function(t){var e=$(t.currentTarget);this._changePane(e)}},{key:"onClickBack",value:function(){this.back()}},{key:"back",value:function(){this.callback(),this.element.remove(),$(".panel-heading").html(Translator.trans("material_lib.content_title"))}},{key:"_changePane",value:function(t){t.closest(".nav").find("li.active").removeClass("active"),t.addClass("active");var e=t.closest(".content").find(".tab-content");e.find(".tab-pane.active").removeClass("active"),e.find(t.data("target")).addClass("active")}}]),e}()},552:function(t,e,a){"use strict";a.r(e);var n=a(317),r=a(326),i=a(150),o=$("#file-manage-panel");new n.a(o),$(".js-table-popover").popover({placement:"top",trigger:"manual",html:!0,animation:!1,title:'<div class="clearfix material-table-popover">'.concat(Translator.trans("material.common_table.transcoding_intro"),'<a class="pull-right cd-text-sm" href="http://www.qiqiuyu.com/faq/868/detail" target="_blank">').concat(Translator.trans("material.common_table.transcoding_more"),"</a></div>"),content:'\n  <div class="cd-text-sm">\n    <p class="mb0"><strong>'.concat(Translator.trans("subtitle.status.error"),"：</strong>").concat(Translator.trans("material.common_table.fail_error_tip"),'</p>\n    <p class="mb0"><strong>').concat(Translator.trans("material.common_table.fail_not_support"),"：</strong>").concat(Translator.trans("material.common_table.not_support_error_tip"),"</p>\n  </div>")}).on("mouseenter",function(){var t=this;$(this).popover("show"),$(".popover").on("mouseleave",function(){$(t).popover("hide")})}).on("mouseleave",function(){var t=this;setTimeout(function(){$(".popover:hover").length||$(t).popover("hide")},300)}),Object(i.a)("#modal-tags","remote");function s(t){var e=document.createElement("iframe");e.style.display="none",e.style.height=0,e.src=t,document.body.appendChild(e),setTimeout(function(){e.remove()},3e5)}$("#tag-form").validate({rules:{tags:{required:!0}},messages:{tags:{required:Translator.trans("course_set.manage.tag_required_hint")}}});o.on("click",".js-cd-modal",function(){$("#cd-modal").on("show.bs.modal",function(t){var e=$(t.relatedTarget),a=e.data("title"),n=e.data("reason"),r=e.data("solution"),i=e.data("status");$(".js-error-tip").html('<div class="mbl clearfix"><span class="pull-left error-label">'.concat(Translator.trans("material.common_table.file_name"),'：</span><span class="pull-left error-content">').concat(a,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.transcoding"),'：</span><span class="pull-left error-content">').concat(i,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.error_reason"),'：</span><span class="cd-text-danger error-content pull-left">').concat(n,'</span></div><div class="clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.solution_way"),'：</span><span class="cd-text-info error-content pull-left">').concat(r,"</span></div>"))})}),o.on("click",".js-batch-download",function(){!function(){var e=[];$("#file-manage-panel").find("[data-role=batch-item]:checked").each(function(){var t=$(this).closest(".js-tr-item").find(".js-download-btn").data("url");e.push(t)});for(var t=0;t<e.length;t++){var a=e[t];s(a)}}()}),o.on("click",".convert-file-btn",function(){console.log("re"),$.post($(this).data("url"),function(t){"error"==t.status?alert(t.message):window.location.reload()},"json").fail(function(){alert(Translator.trans("alert.file_convert_error.message"))})}),$(".tip").tooltip(),$("#modal").modal({backdrop:"static",keyboard:!1,show:!1}),$("button",".panel-heading").on("click",function(){var t=$(this).data("url");$("#modal").html(""),$("#modal").modal("show"),$.get(t,function(t){$("#modal").html(t)})});o.on("click",".js-batch-tag-btn",function(t){!function(t){$(t.currentTarget);var e=[];o.find("[data-role=batch-item]:checked").each(function(){e.push(this.value)}),$("#select-tag-items").val(e),$("#tag-modal").modal("show")}(t)}),$("[rel='tooltip']").tooltip(),function(){var t=new Array;if($("tbody [type=checkbox]").each(function(){isNaN($(this).val())||t.push($(this).val())}),0==t.length)return;$.post($("#file-manage-panel").data("fileStatusUrl"),{ids:t.join(",")},function(t){if(t&&0!=t.length)for(var e=0;e<t.length;e++){var a=t[e];-1<$.inArray(a.type,["video","ppt","document"])&&"cloud"==a.storage&&("waiting"==a.convertStatus||"doing"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after("<span class='color-warning mr5 text-sm'>"+Translator.trans("page.file_converting.message")+"</span><br/>"):"error"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after("<span class='color-danger mr5 text-sm'>"+Translator.trans("page.file_convert_failed.message")+"</span><br/>"):"none"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:last").after("<span class='label label-default mr5 tip'>"+Translator.trans("page.file_not_convert.message")+"</span>"):"success"==a.convertStatus&&$("#upload-file-tr-"+a.id).find("a:first ~ br:last").after("<span class='label label-success mr5 tip'>"+Translator.trans("page.file_converted.message")+"</span>")),"video"==a.type&&a.metas2&&(a.metas2.shd?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_shd.message")+"</span>"):a.metas2.hd?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_hd.message")+"</span>"):a.metas2.sd&&$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_sd.message")+"</span>"))}})}(),$("[data-role=batch-delete]").click(function(){var t=!1,e=[];$("[data-role=batch-item]").each(function(){$(this).is(":checked")&&(t=!0,e.push(this.value))}),t&&($("#modal").html(""),$("#modal").load($(this).data("url"),{ids:e}),$("#modal").modal("show"))}),$(".js-delete-btn").click(function(t){var e=$(t.target),a=e.data("id"),n=e.data("url"),r=[];r.push(a),$("#modal").html(""),$("#modal").load(n,{ids:r}),$("#modal").modal("show")});var l=!0;$(".js-detail-btn").on("click",function(){var e;l&&(l=!1,e=$("#file-manage-panel"),$.ajax({type:"GET",url:$(this).data("url")}).done(function(t){$(e).hide(),$(e).prev().hide(),$(e).parent().append(t),0<$(".nav.nav-tabs").length&&!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)&&$(".nav.nav-tabs").lavaLamp(),Object(i.a)("#tags","remote"),new r.a({element:$("#material-detail"),callback:function(){$(e).show(),$(e).prev().show(),window.location.reload()}})}).fail(function(){cd.message({type:"danger",message:Translator.trans("material_lib.have_no_permission_hint")})}).always(function(){l=!0}))})}});