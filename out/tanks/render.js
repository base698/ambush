// Compiled by ClojureScript 1.7.228 {}
goog.provide('tanks.render');
goog.require('cljs.core');
tanks.render.get_ctx = (function tanks$render$get_ctx(){
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
return ctx;
});
if(typeof tanks.render.draw_entity !== 'undefined'){
} else {
tanks.render.draw_entity = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tanks.render","draw-entity"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"default","default",-1987822328),(function (e){
return cljs.core.prn.call(null,e);
}));
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"shrapnel","shrapnel",-1731096007),(function (p){
var ctx = tanks.render.get_ctx.call(null);
var position = p.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__19480 = position;
var x = cljs.core.nth.call(null,vec__19480,(0),null);
var y = cljs.core.nth.call(null,vec__19480,(1),null);
var w = p.call(null,new cljs.core.Keyword(null,"w","w",354169001));
var h = p.call(null,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.save();

ctx.fillStyle = p.call(null,new cljs.core.Keyword(null,"color","color",1011675173));

ctx.beginPath();

ctx.arc(x,y,(2),(6),(0),((2) * Math.PI));

ctx.fill();

return ctx.restore();
}));
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"player","player",-97687400),(function (p){
var ctx = tanks.render.get_ctx.call(null);
var position = p.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.first.call(null,position);
var y = cljs.core.second.call(null,position);
var w = p.call(null,new cljs.core.Keyword(null,"w","w",354169001));
var h = p.call(null,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.save();

ctx.fillStyle = p.call(null,new cljs.core.Keyword(null,"color","color",1011675173));

ctx.translate((x + (w / (2))),(y + (h / (2))));

ctx.rotate(p.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)));

ctx.fillRect((-10),(-10),w,h);

ctx.fillRect((8),(-2),(5),(5));

return ctx.restore();
}));
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"shot","shot",1961298790),(function (e){
var ctx = tanks.render.get_ctx.call(null);
var position = e.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__19481 = position;
var x = cljs.core.nth.call(null,vec__19481,(0),null);
var y = cljs.core.nth.call(null,vec__19481,(1),null);
var w = e.call(null,new cljs.core.Keyword(null,"w","w",354169001));
var h = e.call(null,new cljs.core.Keyword(null,"h","h",1109658740));
return ctx.fillRect(x,y,w,h);
}));
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"sapper","sapper",783361099),(function (p){
var ctx = tanks.render.get_ctx.call(null);
var position = p.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
ctx.save();

if(cljs.core.truth_(p.call(null,new cljs.core.Keyword(null,"color","color",1011675173)))){
ctx.fillStyle = p.call(null,new cljs.core.Keyword(null,"color","color",1011675173));
} else {
}

ctx.fillRect(cljs.core.first.call(null,position),cljs.core.last.call(null,position),p.call(null,new cljs.core.Keyword(null,"w","w",354169001)),p.call(null,new cljs.core.Keyword(null,"h","h",1109658740)));

return ctx.restore();
}));
cljs.core._add_method.call(null,tanks.render.draw_entity,new cljs.core.Keyword(null,"wall","wall",-787661558),(function (p){
return null;
}));
tanks.render.draw_world = (function tanks$render$draw_world(entities){
var ctx = tanks.render.get_ctx.call(null);
ctx.clearRect((0),(0),(800),(600));

var seq__19486 = cljs.core.seq.call(null,entities);
var chunk__19487 = null;
var count__19488 = (0);
var i__19489 = (0);
while(true){
if((i__19489 < count__19488)){
var x = cljs.core._nth.call(null,chunk__19487,i__19489);
tanks.render.draw_entity.call(null,x);

var G__19490 = seq__19486;
var G__19491 = chunk__19487;
var G__19492 = count__19488;
var G__19493 = (i__19489 + (1));
seq__19486 = G__19490;
chunk__19487 = G__19491;
count__19488 = G__19492;
i__19489 = G__19493;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19486);
if(temp__4657__auto__){
var seq__19486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19486__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__19486__$1);
var G__19494 = cljs.core.chunk_rest.call(null,seq__19486__$1);
var G__19495 = c__19173__auto__;
var G__19496 = cljs.core.count.call(null,c__19173__auto__);
var G__19497 = (0);
seq__19486 = G__19494;
chunk__19487 = G__19495;
count__19488 = G__19496;
i__19489 = G__19497;
continue;
} else {
var x = cljs.core.first.call(null,seq__19486__$1);
tanks.render.draw_entity.call(null,x);

var G__19498 = cljs.core.next.call(null,seq__19486__$1);
var G__19499 = null;
var G__19500 = (0);
var G__19501 = (0);
seq__19486 = G__19498;
chunk__19487 = G__19499;
count__19488 = G__19500;
i__19489 = G__19501;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=render.js.map