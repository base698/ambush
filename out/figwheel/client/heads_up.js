// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26978 = arguments.length;
var i__19429__auto___26979 = (0);
while(true){
if((i__19429__auto___26979 < len__19428__auto___26978)){
args__19435__auto__.push((arguments[i__19429__auto___26979]));

var G__26980 = (i__19429__auto___26979 + (1));
i__19429__auto___26979 = G__26980;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26970_26981 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26971_26982 = null;
var count__26972_26983 = (0);
var i__26973_26984 = (0);
while(true){
if((i__26973_26984 < count__26972_26983)){
var k_26985 = cljs.core._nth.call(null,chunk__26971_26982,i__26973_26984);
e.setAttribute(cljs.core.name.call(null,k_26985),cljs.core.get.call(null,attrs,k_26985));

var G__26986 = seq__26970_26981;
var G__26987 = chunk__26971_26982;
var G__26988 = count__26972_26983;
var G__26989 = (i__26973_26984 + (1));
seq__26970_26981 = G__26986;
chunk__26971_26982 = G__26987;
count__26972_26983 = G__26988;
i__26973_26984 = G__26989;
continue;
} else {
var temp__4657__auto___26990 = cljs.core.seq.call(null,seq__26970_26981);
if(temp__4657__auto___26990){
var seq__26970_26991__$1 = temp__4657__auto___26990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26970_26991__$1)){
var c__19173__auto___26992 = cljs.core.chunk_first.call(null,seq__26970_26991__$1);
var G__26993 = cljs.core.chunk_rest.call(null,seq__26970_26991__$1);
var G__26994 = c__19173__auto___26992;
var G__26995 = cljs.core.count.call(null,c__19173__auto___26992);
var G__26996 = (0);
seq__26970_26981 = G__26993;
chunk__26971_26982 = G__26994;
count__26972_26983 = G__26995;
i__26973_26984 = G__26996;
continue;
} else {
var k_26997 = cljs.core.first.call(null,seq__26970_26991__$1);
e.setAttribute(cljs.core.name.call(null,k_26997),cljs.core.get.call(null,attrs,k_26997));

var G__26998 = cljs.core.next.call(null,seq__26970_26991__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26970_26981 = G__26998;
chunk__26971_26982 = G__26999;
count__26972_26983 = G__27000;
i__26973_26984 = G__27001;
continue;
}
} else {
}
}
break;
}

var seq__26974_27002 = cljs.core.seq.call(null,children);
var chunk__26975_27003 = null;
var count__26976_27004 = (0);
var i__26977_27005 = (0);
while(true){
if((i__26977_27005 < count__26976_27004)){
var ch_27006 = cljs.core._nth.call(null,chunk__26975_27003,i__26977_27005);
e.appendChild(ch_27006);

var G__27007 = seq__26974_27002;
var G__27008 = chunk__26975_27003;
var G__27009 = count__26976_27004;
var G__27010 = (i__26977_27005 + (1));
seq__26974_27002 = G__27007;
chunk__26975_27003 = G__27008;
count__26976_27004 = G__27009;
i__26977_27005 = G__27010;
continue;
} else {
var temp__4657__auto___27011 = cljs.core.seq.call(null,seq__26974_27002);
if(temp__4657__auto___27011){
var seq__26974_27012__$1 = temp__4657__auto___27011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26974_27012__$1)){
var c__19173__auto___27013 = cljs.core.chunk_first.call(null,seq__26974_27012__$1);
var G__27014 = cljs.core.chunk_rest.call(null,seq__26974_27012__$1);
var G__27015 = c__19173__auto___27013;
var G__27016 = cljs.core.count.call(null,c__19173__auto___27013);
var G__27017 = (0);
seq__26974_27002 = G__27014;
chunk__26975_27003 = G__27015;
count__26976_27004 = G__27016;
i__26977_27005 = G__27017;
continue;
} else {
var ch_27018 = cljs.core.first.call(null,seq__26974_27012__$1);
e.appendChild(ch_27018);

var G__27019 = cljs.core.next.call(null,seq__26974_27012__$1);
var G__27020 = null;
var G__27021 = (0);
var G__27022 = (0);
seq__26974_27002 = G__27019;
chunk__26975_27003 = G__27020;
count__26976_27004 = G__27021;
i__26977_27005 = G__27022;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26967){
var G__26968 = cljs.core.first.call(null,seq26967);
var seq26967__$1 = cljs.core.next.call(null,seq26967);
var G__26969 = cljs.core.first.call(null,seq26967__$1);
var seq26967__$2 = cljs.core.next.call(null,seq26967__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26968,G__26969,seq26967__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27023 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27023.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27023.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27023.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27023);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27024,st_map){
var map__27029 = p__27024;
var map__27029__$1 = ((((!((map__27029 == null)))?((((map__27029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27029):map__27029);
var container_el = cljs.core.get.call(null,map__27029__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27029,map__27029__$1,container_el){
return (function (p__27031){
var vec__27032 = p__27031;
var k = cljs.core.nth.call(null,vec__27032,(0),null);
var v = cljs.core.nth.call(null,vec__27032,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27029,map__27029__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27033,dom_str){
var map__27036 = p__27033;
var map__27036__$1 = ((((!((map__27036 == null)))?((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var c = map__27036__$1;
var content_area_el = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27038){
var map__27041 = p__27038;
var map__27041__$1 = ((((!((map__27041 == null)))?((((map__27041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27041):map__27041);
var content_area_el = cljs.core.get.call(null,map__27041__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_27084){
var state_val_27085 = (state_27084[(1)]);
if((state_val_27085 === (1))){
var inst_27069 = (state_27084[(7)]);
var inst_27069__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27070 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27071 = ["10px","10px","100%","68px","1.0"];
var inst_27072 = cljs.core.PersistentHashMap.fromArrays(inst_27070,inst_27071);
var inst_27073 = cljs.core.merge.call(null,inst_27072,style);
var inst_27074 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27069__$1,inst_27073);
var inst_27075 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27069__$1,msg);
var inst_27076 = cljs.core.async.timeout.call(null,(300));
var state_27084__$1 = (function (){var statearr_27086 = state_27084;
(statearr_27086[(8)] = inst_27075);

(statearr_27086[(9)] = inst_27074);

(statearr_27086[(7)] = inst_27069__$1);

return statearr_27086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27084__$1,(2),inst_27076);
} else {
if((state_val_27085 === (2))){
var inst_27069 = (state_27084[(7)]);
var inst_27078 = (state_27084[(2)]);
var inst_27079 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27080 = ["auto"];
var inst_27081 = cljs.core.PersistentHashMap.fromArrays(inst_27079,inst_27080);
var inst_27082 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27069,inst_27081);
var state_27084__$1 = (function (){var statearr_27087 = state_27084;
(statearr_27087[(10)] = inst_27078);

return statearr_27087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27084__$1,inst_27082);
} else {
return null;
}
}
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____0 = (function (){
var statearr_27091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27091[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__);

(statearr_27091[(1)] = (1));

return statearr_27091;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____1 = (function (state_27084){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27092){if((e27092 instanceof Object)){
var ex__20364__auto__ = e27092;
var statearr_27093_27095 = state_27084;
(statearr_27093_27095[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27096 = state_27084;
state_27084 = G__27096;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__ = function(state_27084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____1.call(this,state_27084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_27094 = f__20382__auto__.call(null);
(statearr_27094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_27094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27098 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27098,(0),null);
var ln = cljs.core.nth.call(null,vec__27098,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27101 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27101,(0),null);
var file_line = cljs.core.nth.call(null,vec__27101,(1),null);
var file_column = cljs.core.nth.call(null,vec__27101,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27101,file_name,file_line,file_column){
return (function (p1__27099_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27099_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27101,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18370__auto__ = file_line;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var and__18358__auto__ = cause;
if(cljs.core.truth_(and__18358__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18358__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27104 = figwheel.client.heads_up.ensure_container.call(null);
var map__27104__$1 = ((((!((map__27104 == null)))?((((map__27104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27104):map__27104);
var content_area_el = cljs.core.get.call(null,map__27104__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_27152){
var state_val_27153 = (state_27152[(1)]);
if((state_val_27153 === (1))){
var inst_27135 = (state_27152[(7)]);
var inst_27135__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27136 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27137 = ["0.0"];
var inst_27138 = cljs.core.PersistentHashMap.fromArrays(inst_27136,inst_27137);
var inst_27139 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27135__$1,inst_27138);
var inst_27140 = cljs.core.async.timeout.call(null,(300));
var state_27152__$1 = (function (){var statearr_27154 = state_27152;
(statearr_27154[(8)] = inst_27139);

(statearr_27154[(7)] = inst_27135__$1);

return statearr_27154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27152__$1,(2),inst_27140);
} else {
if((state_val_27153 === (2))){
var inst_27135 = (state_27152[(7)]);
var inst_27142 = (state_27152[(2)]);
var inst_27143 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27144 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27145 = cljs.core.PersistentHashMap.fromArrays(inst_27143,inst_27144);
var inst_27146 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27135,inst_27145);
var inst_27147 = cljs.core.async.timeout.call(null,(200));
var state_27152__$1 = (function (){var statearr_27155 = state_27152;
(statearr_27155[(9)] = inst_27142);

(statearr_27155[(10)] = inst_27146);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27152__$1,(3),inst_27147);
} else {
if((state_val_27153 === (3))){
var inst_27135 = (state_27152[(7)]);
var inst_27149 = (state_27152[(2)]);
var inst_27150 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27135,"");
var state_27152__$1 = (function (){var statearr_27156 = state_27152;
(statearr_27156[(11)] = inst_27149);

return statearr_27156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27152__$1,inst_27150);
} else {
return null;
}
}
}
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20361__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20361__auto____0 = (function (){
var statearr_27160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27160[(0)] = figwheel$client$heads_up$clear_$_state_machine__20361__auto__);

(statearr_27160[(1)] = (1));

return statearr_27160;
});
var figwheel$client$heads_up$clear_$_state_machine__20361__auto____1 = (function (state_27152){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27161){if((e27161 instanceof Object)){
var ex__20364__auto__ = e27161;
var statearr_27162_27164 = state_27152;
(statearr_27162_27164[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27165 = state_27152;
state_27152 = G__27165;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20361__auto__ = function(state_27152){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20361__auto____1.call(this,state_27152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20361__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20361__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_27163 = f__20382__auto__.call(null);
(statearr_27163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_27163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_27197){
var state_val_27198 = (state_27197[(1)]);
if((state_val_27198 === (1))){
var inst_27187 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27197__$1 = state_27197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27197__$1,(2),inst_27187);
} else {
if((state_val_27198 === (2))){
var inst_27189 = (state_27197[(2)]);
var inst_27190 = cljs.core.async.timeout.call(null,(400));
var state_27197__$1 = (function (){var statearr_27199 = state_27197;
(statearr_27199[(7)] = inst_27189);

return statearr_27199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27197__$1,(3),inst_27190);
} else {
if((state_val_27198 === (3))){
var inst_27192 = (state_27197[(2)]);
var inst_27193 = figwheel.client.heads_up.clear.call(null);
var state_27197__$1 = (function (){var statearr_27200 = state_27197;
(statearr_27200[(8)] = inst_27192);

return statearr_27200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27197__$1,(4),inst_27193);
} else {
if((state_val_27198 === (4))){
var inst_27195 = (state_27197[(2)]);
var state_27197__$1 = state_27197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27197__$1,inst_27195);
} else {
return null;
}
}
}
}
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____0 = (function (){
var statearr_27204 = [null,null,null,null,null,null,null,null,null];
(statearr_27204[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__);

(statearr_27204[(1)] = (1));

return statearr_27204;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____1 = (function (state_27197){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27205){if((e27205 instanceof Object)){
var ex__20364__auto__ = e27205;
var statearr_27206_27208 = state_27197;
(statearr_27206_27208[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27209 = state_27197;
state_27197 = G__27209;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__ = function(state_27197){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____1.call(this,state_27197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_27207 = f__20382__auto__.call(null);
(statearr_27207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_27207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map