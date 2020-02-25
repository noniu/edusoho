webpackJsonp(["app/js/article/detail/index"],{0:function(t,e){t.exports=jQuery},"29cf60bbbbb4e174f0f6":function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("7ab4a89ebadbfdecc2bf"),o=a(r),s=n("4602c3f5fe7ad9e3e91d"),i=a(s),l=n("b334fd7e4c5a19234db2"),u=a(l),c=function(){function t(e){(0,o.default)(this,t),this.ele=$(e.element),this.init()}return(0,i.default)(t,[{key:"init",value:function(){this.initEvent(),this.initPostForm()}},{key:"initEvent",value:function(){var t=this,e=this.ele;e.on("click",".js-post-more",function(e){return t.onClickPostMore(e)}),e.on("click",".js-reply",function(e){return t.onClickReply(e)}),e.on("click",".js-post-delete",function(e){return t.onPostDelete(e)}),e.on("click",".js-post-up",function(e){return t.onPostUp(e)}),e.on("click","[data-role=confirm-btn]",function(e){return t.onConfirmBtn(e)}),e.on("click",".js-toggle-subpost-form",function(e){return t.onClickToggleSubpostForm(e)}),e.on("click",".js-event-cancel",function(e){return t.onClickEventCancelBtn(e)}),e.on("click",".thread-subpost-container .pagination a",function(e){return t.onClickSubpost(e)})}},{key:"onClickPostMore",value:function(t){t.stopPropagation();var e=$(t.currentTarget);e.parents(".thread-subpost-moretext").addClass("hide"),e.parents(".thread-post").find(".thread-subpost").removeClass("hide"),e.parents(".thread-post").find(".pagination").removeClass("hide")}},{key:"onClickReply",value:function(t){t.stopPropagation();var e=$(t.currentTarget),n=e.parents(".thread-subpost-list").length>0,a=e.parents(".thread-post").find(".thread-subpost-container"),r=a.find(".thread-subpost-form");if(n){r.removeClass("hide");var o=Translator.trans("thread.post.reply")+" @ "+e.parents(".thread-post").data("authorName")+"： ";r.find("textarea").val(o).trigger("focus")}else a.toggleClass("hide");e.html()==Translator.trans("thread.post.reply")?e.html(Translator.trans("thread.post.put_away")):e.html(Translator.trans("thread.post.reply")),this.initSubpostForm(r)}},{key:"onPostDelete",value:function(t){t.stopPropagation();var e=this.ele,n=$(t.currentTarget);if(confirm(Translator.trans("thread.post.delete_hint"))){var a=n.parents(".thread-subpost-list").length>0;$.post(n.data("url"),function(){if(a){var t=n.parents(".thread-post").find(".subposts-num");t.text(parseInt(t.text())-1)}else e.find(".thread-post-num").text(parseInt(e.find(".thread-post-num").text())-1);$(n.data("for")).remove()})}}},{key:"onPostUp",value:function(t){t.stopPropagation();var e=$(t.currentTarget);$.post(e.data("url"),function(t){"ok"==t.status?e.find(".post-up-num").text(parseInt(e.find(".post-up-num").text())+1):"votedError"==t.status?(0,u.default)("danger",Translator.trans("thread.post.like_hint")):(0,u.default)("danger",Translator.trans("thread.post.like_error_hint"))},"json")}},{key:"onConfirmBtn",value:function(t){t.stopPropagation();var e=$(t.currentTarget);confirm(e.data("confirmMessage"))&&$.post(e.data("url"),function(){if(e.data("afterUrl"))return void(window.location.href=e.data("afterUrl"));window.location.reload()})}},{key:"onClickToggleSubpostForm",value:function(t){t.stopPropagation();var e=$(t.currentTarget),n=e.parents(".thread-subpost-container").find(".thread-subpost-form");n.toggleClass("hide"),this.initSubpostForm(n)}},{key:"onClickEventCancelBtn",value:function(t){$.post($(t.currentTarget).data("url"),function(){window.location.reload()})}},{key:"onClickSubpost",value:function(t){t.preventDefault();var e=$(t.currentTarget);$.post(e.attr("href"),function(t){var n=e.parents(".thread-post").attr("id");$("body,html").animate({scrollTop:$("#"+n).offset().top},300),e.closest(".thread-subpost-container .thread-subpost-content").html(t)})}},{key:"initPostForm",value:function(){var t=$(".thread-pripost-list"),e=$("#thread-post-form");if(0!=e.length){var n=null,a=e.find("textarea[name=content]");a.data("imageUploadUrl")&&(n=CKEDITOR.replace(a.attr("id"),{toolbar:"Thread",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:a.data("imageUploadUrl")}),n.on("change",function(){a.val(n.getData())}));var r=e.find("[type=submit]");e.validate({ajax:!0,currentDom:r,rules:{content:"required"},submitSuccess:function(o){r.button("reset"),a.data("imageUploadUrl")?(t.append(o),n.setData("")):(t.prepend(o),a.val(""));var s=t.find("li:last-child").offset();$("body").scrollTop(s.top),e.find(".thread-post-num").text(parseInt(e.find(".thread-post-num").text())+1),t.find("li.empty").remove(),t.closest(".top-reply").removeClass("hidden"),$(".js-attachment-list").empty(),$(".js-attachment-ids").val(""),$(".js-upload-file").show()},submitError:function(t){r.button("reset")}})}}},{key:"initSubpostForm",value:function(t){var e=t.find("[type=submit]");t.validate({ajax:!0,currentDom:e,rules:{content:"required"},submitSuccess:function(n){if(n.error)return void(0,u.default)("danger",n.error);e.button("reset"),t.parents(".thread-subpost-container").find(".thread-subpost-list").append(n),t.find("textarea").val("");var a=t.parents(".thread-post").find(".subposts-num");a.text(parseInt(a.text())+1),a.parent().removeClass("hide")},submitError:function(t){e.button("reset"),t=$.parseJSON(t.responseText),t.error?(0,u.default)("danger",t.error.message):(0,u.default)("danger",Translator.trans("thread.post.reply_error_hint"))}})}},{key:"undelegateEvents",value:function(t,e){this.ele.off(t,e)}}]),t}();e.default=c},cc8da87626db3a7d656c:function(t,e,n){"use strict";var a=n("29cf60bbbbb4e174f0f6"),r=function(t){return t&&t.__esModule?t:{default:t}}(a);new r.default({element:"#detail-content"});$(".js-article-copy-body").data("copy")&&(document.onselectstart=new Function("return false"),document.oncontextmenu=new Function("return false"),window.sidebar&&(document.onmousedown=new Function("return false"),document.onclick=new Function("return true"),document.oncut=new Function("return false"),document.oncopy=new Function("return false")),document.addEventListener("keydown",function(t){83===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(t.preventDefault(),t.stopPropagation())},!1)),$("#detail-content").on("click",".js-article-like",function(){var t=$(this);t.hasClass("color-primary")?$.post(t.data("cancelLikeUrl"),function(t){$(".article-content").find(".js-like-num").html(t.upsNum)}).always(function(){t.removeClass("color-primary"),t.closest(".icon-favour").removeClass("active")}):$.post(t.data("likeUrl"),function(t){$(".article-content").find(".js-like-num").html(t.upsNum)}).always(function(){t.addClass("color-primary"),t.closest(".icon-favour").addClass("active")})})}},["cc8da87626db3a7d656c"]);