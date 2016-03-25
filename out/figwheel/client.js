// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27212 = cljs.core._EQ_;
var expr__27213 = (function (){var or__18370__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e27216){if((e27216 instanceof Error)){
var e = e27216;
return false;
} else {
throw e27216;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27212.call(null,"true",expr__27213))){
return true;
} else {
if(cljs.core.truth_(pred__27212.call(null,"false",expr__27213))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27213)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e27218){if((e27218 instanceof Error)){
var e = e27218;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27218;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___27220 = arguments.length;
var i__19429__auto___27221 = (0);
while(true){
if((i__19429__auto___27221 < len__19428__auto___27220)){
args__19435__auto__.push((arguments[i__19429__auto___27221]));

var G__27222 = (i__19429__auto___27221 + (1));
i__19429__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27219){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27219));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27223){
var map__27226 = p__27223;
var map__27226__$1 = ((((!((map__27226 == null)))?((((map__27226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27226):map__27226);
var message = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20381__auto___27388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___27388,ch){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___27388,ch){
return (function (state_27357){
var state_val_27358 = (state_27357[(1)]);
if((state_val_27358 === (7))){
var inst_27353 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27359_27389 = state_27357__$1;
(statearr_27359_27389[(2)] = inst_27353);

(statearr_27359_27389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (1))){
var state_27357__$1 = state_27357;
var statearr_27360_27390 = state_27357__$1;
(statearr_27360_27390[(2)] = null);

(statearr_27360_27390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (4))){
var inst_27310 = (state_27357[(7)]);
var inst_27310__$1 = (state_27357[(2)]);
var state_27357__$1 = (function (){var statearr_27361 = state_27357;
(statearr_27361[(7)] = inst_27310__$1);

return statearr_27361;
})();
if(cljs.core.truth_(inst_27310__$1)){
var statearr_27362_27391 = state_27357__$1;
(statearr_27362_27391[(1)] = (5));

} else {
var statearr_27363_27392 = state_27357__$1;
(statearr_27363_27392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (15))){
var inst_27317 = (state_27357[(8)]);
var inst_27332 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27317);
var inst_27333 = cljs.core.first.call(null,inst_27332);
var inst_27334 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27333);
var inst_27335 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27334)].join('');
var inst_27336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27335);
var state_27357__$1 = state_27357;
var statearr_27364_27393 = state_27357__$1;
(statearr_27364_27393[(2)] = inst_27336);

(statearr_27364_27393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (13))){
var inst_27341 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27365_27394 = state_27357__$1;
(statearr_27365_27394[(2)] = inst_27341);

(statearr_27365_27394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (6))){
var state_27357__$1 = state_27357;
var statearr_27366_27395 = state_27357__$1;
(statearr_27366_27395[(2)] = null);

(statearr_27366_27395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (17))){
var inst_27339 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27367_27396 = state_27357__$1;
(statearr_27367_27396[(2)] = inst_27339);

(statearr_27367_27396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (3))){
var inst_27355 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27357__$1,inst_27355);
} else {
if((state_val_27358 === (12))){
var inst_27316 = (state_27357[(9)]);
var inst_27330 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27316,opts);
var state_27357__$1 = state_27357;
if(cljs.core.truth_(inst_27330)){
var statearr_27368_27397 = state_27357__$1;
(statearr_27368_27397[(1)] = (15));

} else {
var statearr_27369_27398 = state_27357__$1;
(statearr_27369_27398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (2))){
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27357__$1,(4),ch);
} else {
if((state_val_27358 === (11))){
var inst_27317 = (state_27357[(8)]);
var inst_27322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27323 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27317);
var inst_27324 = cljs.core.async.timeout.call(null,(1000));
var inst_27325 = [inst_27323,inst_27324];
var inst_27326 = (new cljs.core.PersistentVector(null,2,(5),inst_27322,inst_27325,null));
var state_27357__$1 = state_27357;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27357__$1,(14),inst_27326);
} else {
if((state_val_27358 === (9))){
var inst_27317 = (state_27357[(8)]);
var inst_27343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27344 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27317);
var inst_27345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27344);
var inst_27346 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27345)].join('');
var inst_27347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27346);
var state_27357__$1 = (function (){var statearr_27370 = state_27357;
(statearr_27370[(10)] = inst_27343);

return statearr_27370;
})();
var statearr_27371_27399 = state_27357__$1;
(statearr_27371_27399[(2)] = inst_27347);

(statearr_27371_27399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (5))){
var inst_27310 = (state_27357[(7)]);
var inst_27312 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27313 = (new cljs.core.PersistentArrayMap(null,2,inst_27312,null));
var inst_27314 = (new cljs.core.PersistentHashSet(null,inst_27313,null));
var inst_27315 = figwheel.client.focus_msgs.call(null,inst_27314,inst_27310);
var inst_27316 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27315);
var inst_27317 = cljs.core.first.call(null,inst_27315);
var inst_27318 = figwheel.client.autoload_QMARK_.call(null);
var state_27357__$1 = (function (){var statearr_27372 = state_27357;
(statearr_27372[(9)] = inst_27316);

(statearr_27372[(8)] = inst_27317);

return statearr_27372;
})();
if(cljs.core.truth_(inst_27318)){
var statearr_27373_27400 = state_27357__$1;
(statearr_27373_27400[(1)] = (8));

} else {
var statearr_27374_27401 = state_27357__$1;
(statearr_27374_27401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (14))){
var inst_27328 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27375_27402 = state_27357__$1;
(statearr_27375_27402[(2)] = inst_27328);

(statearr_27375_27402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (16))){
var state_27357__$1 = state_27357;
var statearr_27376_27403 = state_27357__$1;
(statearr_27376_27403[(2)] = null);

(statearr_27376_27403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (10))){
var inst_27349 = (state_27357[(2)]);
var state_27357__$1 = (function (){var statearr_27377 = state_27357;
(statearr_27377[(11)] = inst_27349);

return statearr_27377;
})();
var statearr_27378_27404 = state_27357__$1;
(statearr_27378_27404[(2)] = null);

(statearr_27378_27404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (8))){
var inst_27316 = (state_27357[(9)]);
var inst_27320 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27316,opts);
var state_27357__$1 = state_27357;
if(cljs.core.truth_(inst_27320)){
var statearr_27379_27405 = state_27357__$1;
(statearr_27379_27405[(1)] = (11));

} else {
var statearr_27380_27406 = state_27357__$1;
(statearr_27380_27406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20381__auto___27388,ch))
;
return ((function (switch__20360__auto__,c__20381__auto___27388,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____0 = (function (){
var statearr_27384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27384[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__);

(statearr_27384[(1)] = (1));

return statearr_27384;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____1 = (function (state_27357){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27385){if((e27385 instanceof Object)){
var ex__20364__auto__ = e27385;
var statearr_27386_27407 = state_27357;
(statearr_27386_27407[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27408 = state_27357;
state_27357 = G__27408;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__ = function(state_27357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____1.call(this,state_27357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20361__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___27388,ch))
})();
var state__20383__auto__ = (function (){var statearr_27387 = f__20382__auto__.call(null);
(statearr_27387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___27388);

return statearr_27387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___27388,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27409_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27409_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27416 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27416){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27414 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27415 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27415;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27414;
}}catch (e27413){if((e27413 instanceof Error)){
var e = e27413;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27416], null));
} else {
var e = e27413;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27416))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27417){
var map__27424 = p__27417;
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var opts = map__27424__$1;
var build_id = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27424,map__27424__$1,opts,build_id){
return (function (p__27426){
var vec__27427 = p__27426;
var map__27428 = cljs.core.nth.call(null,vec__27427,(0),null);
var map__27428__$1 = ((((!((map__27428 == null)))?((((map__27428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27428):map__27428);
var msg = map__27428__$1;
var msg_name = cljs.core.get.call(null,map__27428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27427,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27427,map__27428,map__27428__$1,msg,msg_name,_,map__27424,map__27424__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27427,map__27428,map__27428__$1,msg,msg_name,_,map__27424,map__27424__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27424,map__27424__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27434){
var vec__27435 = p__27434;
var map__27436 = cljs.core.nth.call(null,vec__27435,(0),null);
var map__27436__$1 = ((((!((map__27436 == null)))?((((map__27436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27436):map__27436);
var msg = map__27436__$1;
var msg_name = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27435,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27438){
var map__27448 = p__27438;
var map__27448__$1 = ((((!((map__27448 == null)))?((((map__27448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27448):map__27448);
var on_compile_warning = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27448,map__27448__$1,on_compile_warning,on_compile_fail){
return (function (p__27450){
var vec__27451 = p__27450;
var map__27452 = cljs.core.nth.call(null,vec__27451,(0),null);
var map__27452__$1 = ((((!((map__27452 == null)))?((((map__27452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27452):map__27452);
var msg = map__27452__$1;
var msg_name = cljs.core.get.call(null,map__27452__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27451,(1));
var pred__27454 = cljs.core._EQ_;
var expr__27455 = msg_name;
if(cljs.core.truth_(pred__27454.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27455))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27454.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27455))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27448,map__27448__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__,msg_hist,msg_names,msg){
return (function (state_27671){
var state_val_27672 = (state_27671[(1)]);
if((state_val_27672 === (7))){
var inst_27595 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27595)){
var statearr_27673_27719 = state_27671__$1;
(statearr_27673_27719[(1)] = (8));

} else {
var statearr_27674_27720 = state_27671__$1;
(statearr_27674_27720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (20))){
var inst_27665 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27675_27721 = state_27671__$1;
(statearr_27675_27721[(2)] = inst_27665);

(statearr_27675_27721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (27))){
var inst_27661 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27676_27722 = state_27671__$1;
(statearr_27676_27722[(2)] = inst_27661);

(statearr_27676_27722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (1))){
var inst_27588 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27588)){
var statearr_27677_27723 = state_27671__$1;
(statearr_27677_27723[(1)] = (2));

} else {
var statearr_27678_27724 = state_27671__$1;
(statearr_27678_27724[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (24))){
var inst_27663 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27679_27725 = state_27671__$1;
(statearr_27679_27725[(2)] = inst_27663);

(statearr_27679_27725[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (4))){
var inst_27669 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27671__$1,inst_27669);
} else {
if((state_val_27672 === (15))){
var inst_27667 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27680_27726 = state_27671__$1;
(statearr_27680_27726[(2)] = inst_27667);

(statearr_27680_27726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (21))){
var inst_27626 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27681_27727 = state_27671__$1;
(statearr_27681_27727[(2)] = inst_27626);

(statearr_27681_27727[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (31))){
var inst_27650 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27650)){
var statearr_27682_27728 = state_27671__$1;
(statearr_27682_27728[(1)] = (34));

} else {
var statearr_27683_27729 = state_27671__$1;
(statearr_27683_27729[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (32))){
var inst_27659 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27684_27730 = state_27671__$1;
(statearr_27684_27730[(2)] = inst_27659);

(statearr_27684_27730[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (33))){
var inst_27648 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27685_27731 = state_27671__$1;
(statearr_27685_27731[(2)] = inst_27648);

(statearr_27685_27731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (13))){
var inst_27609 = figwheel.client.heads_up.clear.call(null);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(16),inst_27609);
} else {
if((state_val_27672 === (22))){
var inst_27630 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27631 = figwheel.client.heads_up.append_message.call(null,inst_27630);
var state_27671__$1 = state_27671;
var statearr_27686_27732 = state_27671__$1;
(statearr_27686_27732[(2)] = inst_27631);

(statearr_27686_27732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (36))){
var inst_27657 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27687_27733 = state_27671__$1;
(statearr_27687_27733[(2)] = inst_27657);

(statearr_27687_27733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (29))){
var inst_27641 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27688_27734 = state_27671__$1;
(statearr_27688_27734[(2)] = inst_27641);

(statearr_27688_27734[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (6))){
var inst_27590 = (state_27671[(7)]);
var state_27671__$1 = state_27671;
var statearr_27689_27735 = state_27671__$1;
(statearr_27689_27735[(2)] = inst_27590);

(statearr_27689_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (28))){
var inst_27637 = (state_27671[(2)]);
var inst_27638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27639 = figwheel.client.heads_up.display_warning.call(null,inst_27638);
var state_27671__$1 = (function (){var statearr_27690 = state_27671;
(statearr_27690[(8)] = inst_27637);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(29),inst_27639);
} else {
if((state_val_27672 === (25))){
var inst_27635 = figwheel.client.heads_up.clear.call(null);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(28),inst_27635);
} else {
if((state_val_27672 === (34))){
var inst_27652 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(37),inst_27652);
} else {
if((state_val_27672 === (17))){
var inst_27617 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27691_27736 = state_27671__$1;
(statearr_27691_27736[(2)] = inst_27617);

(statearr_27691_27736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (3))){
var inst_27607 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27607)){
var statearr_27692_27737 = state_27671__$1;
(statearr_27692_27737[(1)] = (13));

} else {
var statearr_27693_27738 = state_27671__$1;
(statearr_27693_27738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (12))){
var inst_27603 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27694_27739 = state_27671__$1;
(statearr_27694_27739[(2)] = inst_27603);

(statearr_27694_27739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (2))){
var inst_27590 = (state_27671[(7)]);
var inst_27590__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27671__$1 = (function (){var statearr_27695 = state_27671;
(statearr_27695[(7)] = inst_27590__$1);

return statearr_27695;
})();
if(cljs.core.truth_(inst_27590__$1)){
var statearr_27696_27740 = state_27671__$1;
(statearr_27696_27740[(1)] = (5));

} else {
var statearr_27697_27741 = state_27671__$1;
(statearr_27697_27741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (23))){
var inst_27633 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27633)){
var statearr_27698_27742 = state_27671__$1;
(statearr_27698_27742[(1)] = (25));

} else {
var statearr_27699_27743 = state_27671__$1;
(statearr_27699_27743[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (35))){
var state_27671__$1 = state_27671;
var statearr_27700_27744 = state_27671__$1;
(statearr_27700_27744[(2)] = null);

(statearr_27700_27744[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (19))){
var inst_27628 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27628)){
var statearr_27701_27745 = state_27671__$1;
(statearr_27701_27745[(1)] = (22));

} else {
var statearr_27702_27746 = state_27671__$1;
(statearr_27702_27746[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (11))){
var inst_27599 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27703_27747 = state_27671__$1;
(statearr_27703_27747[(2)] = inst_27599);

(statearr_27703_27747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (9))){
var inst_27601 = figwheel.client.heads_up.clear.call(null);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(12),inst_27601);
} else {
if((state_val_27672 === (5))){
var inst_27592 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27671__$1 = state_27671;
var statearr_27704_27748 = state_27671__$1;
(statearr_27704_27748[(2)] = inst_27592);

(statearr_27704_27748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (14))){
var inst_27619 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27619)){
var statearr_27705_27749 = state_27671__$1;
(statearr_27705_27749[(1)] = (18));

} else {
var statearr_27706_27750 = state_27671__$1;
(statearr_27706_27750[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (26))){
var inst_27643 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27671__$1 = state_27671;
if(cljs.core.truth_(inst_27643)){
var statearr_27707_27751 = state_27671__$1;
(statearr_27707_27751[(1)] = (30));

} else {
var statearr_27708_27752 = state_27671__$1;
(statearr_27708_27752[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (16))){
var inst_27611 = (state_27671[(2)]);
var inst_27612 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27613 = figwheel.client.format_messages.call(null,inst_27612);
var inst_27614 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27615 = figwheel.client.heads_up.display_error.call(null,inst_27613,inst_27614);
var state_27671__$1 = (function (){var statearr_27709 = state_27671;
(statearr_27709[(9)] = inst_27611);

return statearr_27709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(17),inst_27615);
} else {
if((state_val_27672 === (30))){
var inst_27645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27646 = figwheel.client.heads_up.display_warning.call(null,inst_27645);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(33),inst_27646);
} else {
if((state_val_27672 === (10))){
var inst_27605 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27710_27753 = state_27671__$1;
(statearr_27710_27753[(2)] = inst_27605);

(statearr_27710_27753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (18))){
var inst_27621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27622 = figwheel.client.format_messages.call(null,inst_27621);
var inst_27623 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27624 = figwheel.client.heads_up.display_error.call(null,inst_27622,inst_27623);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(21),inst_27624);
} else {
if((state_val_27672 === (37))){
var inst_27654 = (state_27671[(2)]);
var state_27671__$1 = state_27671;
var statearr_27711_27754 = state_27671__$1;
(statearr_27711_27754[(2)] = inst_27654);

(statearr_27711_27754[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27672 === (8))){
var inst_27597 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27671__$1 = state_27671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27671__$1,(11),inst_27597);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20381__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20360__auto__,c__20381__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____0 = (function (){
var statearr_27715 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27715[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__);

(statearr_27715[(1)] = (1));

return statearr_27715;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____1 = (function (state_27671){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27716){if((e27716 instanceof Object)){
var ex__20364__auto__ = e27716;
var statearr_27717_27755 = state_27671;
(statearr_27717_27755[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27756 = state_27671;
state_27671 = G__27756;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__ = function(state_27671){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____1.call(this,state_27671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__,msg_hist,msg_names,msg))
})();
var state__20383__auto__ = (function (){var statearr_27718 = f__20382__auto__.call(null);
(statearr_27718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_27718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__,msg_hist,msg_names,msg))
);

return c__20381__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20381__auto___27819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___27819,ch){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___27819,ch){
return (function (state_27802){
var state_val_27803 = (state_27802[(1)]);
if((state_val_27803 === (1))){
var state_27802__$1 = state_27802;
var statearr_27804_27820 = state_27802__$1;
(statearr_27804_27820[(2)] = null);

(statearr_27804_27820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (2))){
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(4),ch);
} else {
if((state_val_27803 === (3))){
var inst_27800 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27802__$1,inst_27800);
} else {
if((state_val_27803 === (4))){
var inst_27790 = (state_27802[(7)]);
var inst_27790__$1 = (state_27802[(2)]);
var state_27802__$1 = (function (){var statearr_27805 = state_27802;
(statearr_27805[(7)] = inst_27790__$1);

return statearr_27805;
})();
if(cljs.core.truth_(inst_27790__$1)){
var statearr_27806_27821 = state_27802__$1;
(statearr_27806_27821[(1)] = (5));

} else {
var statearr_27807_27822 = state_27802__$1;
(statearr_27807_27822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (5))){
var inst_27790 = (state_27802[(7)]);
var inst_27792 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27790);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(8),inst_27792);
} else {
if((state_val_27803 === (6))){
var state_27802__$1 = state_27802;
var statearr_27808_27823 = state_27802__$1;
(statearr_27808_27823[(2)] = null);

(statearr_27808_27823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (7))){
var inst_27798 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
var statearr_27809_27824 = state_27802__$1;
(statearr_27809_27824[(2)] = inst_27798);

(statearr_27809_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (8))){
var inst_27794 = (state_27802[(2)]);
var state_27802__$1 = (function (){var statearr_27810 = state_27802;
(statearr_27810[(8)] = inst_27794);

return statearr_27810;
})();
var statearr_27811_27825 = state_27802__$1;
(statearr_27811_27825[(2)] = null);

(statearr_27811_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20381__auto___27819,ch))
;
return ((function (switch__20360__auto__,c__20381__auto___27819,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20361__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20361__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20361__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var figwheel$client$heads_up_plugin_$_state_machine__20361__auto____1 = (function (state_27802){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__20364__auto__ = e27816;
var statearr_27817_27826 = state_27802;
(statearr_27817_27826[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27827 = state_27802;
state_27802 = G__27827;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20361__auto__ = function(state_27802){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20361__auto____1.call(this,state_27802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20361__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20361__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___27819,ch))
})();
var state__20383__auto__ = (function (){var statearr_27818 = f__20382__auto__.call(null);
(statearr_27818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___27819);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___27819,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_27848){
var state_val_27849 = (state_27848[(1)]);
if((state_val_27849 === (1))){
var inst_27843 = cljs.core.async.timeout.call(null,(3000));
var state_27848__$1 = state_27848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27848__$1,(2),inst_27843);
} else {
if((state_val_27849 === (2))){
var inst_27845 = (state_27848[(2)]);
var inst_27846 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27848__$1 = (function (){var statearr_27850 = state_27848;
(statearr_27850[(7)] = inst_27845);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27848__$1,inst_27846);
} else {
return null;
}
}
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____0 = (function (){
var statearr_27854 = [null,null,null,null,null,null,null,null];
(statearr_27854[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__);

(statearr_27854[(1)] = (1));

return statearr_27854;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____1 = (function (state_27848){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_27848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e27855){if((e27855 instanceof Object)){
var ex__20364__auto__ = e27855;
var statearr_27856_27858 = state_27848;
(statearr_27856_27858[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27859 = state_27848;
state_27848 = G__27859;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__ = function(state_27848){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____1.call(this,state_27848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20361__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_27857 = f__20382__auto__.call(null);
(statearr_27857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_27857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27860){
var map__27867 = p__27860;
var map__27867__$1 = ((((!((map__27867 == null)))?((((map__27867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27867):map__27867);
var ed = map__27867__$1;
var formatted_exception = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27869_27873 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27870_27874 = null;
var count__27871_27875 = (0);
var i__27872_27876 = (0);
while(true){
if((i__27872_27876 < count__27871_27875)){
var msg_27877 = cljs.core._nth.call(null,chunk__27870_27874,i__27872_27876);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27877);

var G__27878 = seq__27869_27873;
var G__27879 = chunk__27870_27874;
var G__27880 = count__27871_27875;
var G__27881 = (i__27872_27876 + (1));
seq__27869_27873 = G__27878;
chunk__27870_27874 = G__27879;
count__27871_27875 = G__27880;
i__27872_27876 = G__27881;
continue;
} else {
var temp__4657__auto___27882 = cljs.core.seq.call(null,seq__27869_27873);
if(temp__4657__auto___27882){
var seq__27869_27883__$1 = temp__4657__auto___27882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27869_27883__$1)){
var c__19173__auto___27884 = cljs.core.chunk_first.call(null,seq__27869_27883__$1);
var G__27885 = cljs.core.chunk_rest.call(null,seq__27869_27883__$1);
var G__27886 = c__19173__auto___27884;
var G__27887 = cljs.core.count.call(null,c__19173__auto___27884);
var G__27888 = (0);
seq__27869_27873 = G__27885;
chunk__27870_27874 = G__27886;
count__27871_27875 = G__27887;
i__27872_27876 = G__27888;
continue;
} else {
var msg_27889 = cljs.core.first.call(null,seq__27869_27883__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27889);

var G__27890 = cljs.core.next.call(null,seq__27869_27883__$1);
var G__27891 = null;
var G__27892 = (0);
var G__27893 = (0);
seq__27869_27873 = G__27890;
chunk__27870_27874 = G__27891;
count__27871_27875 = G__27892;
i__27872_27876 = G__27893;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27894){
var map__27897 = p__27894;
var map__27897__$1 = ((((!((map__27897 == null)))?((((map__27897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27897):map__27897);
var w = map__27897__$1;
var message = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27905 = cljs.core.seq.call(null,plugins);
var chunk__27906 = null;
var count__27907 = (0);
var i__27908 = (0);
while(true){
if((i__27908 < count__27907)){
var vec__27909 = cljs.core._nth.call(null,chunk__27906,i__27908);
var k = cljs.core.nth.call(null,vec__27909,(0),null);
var plugin = cljs.core.nth.call(null,vec__27909,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27911 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27905,chunk__27906,count__27907,i__27908,pl_27911,vec__27909,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27911.call(null,msg_hist);
});})(seq__27905,chunk__27906,count__27907,i__27908,pl_27911,vec__27909,k,plugin))
);
} else {
}

var G__27912 = seq__27905;
var G__27913 = chunk__27906;
var G__27914 = count__27907;
var G__27915 = (i__27908 + (1));
seq__27905 = G__27912;
chunk__27906 = G__27913;
count__27907 = G__27914;
i__27908 = G__27915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27905);
if(temp__4657__auto__){
var seq__27905__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27905__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__27905__$1);
var G__27916 = cljs.core.chunk_rest.call(null,seq__27905__$1);
var G__27917 = c__19173__auto__;
var G__27918 = cljs.core.count.call(null,c__19173__auto__);
var G__27919 = (0);
seq__27905 = G__27916;
chunk__27906 = G__27917;
count__27907 = G__27918;
i__27908 = G__27919;
continue;
} else {
var vec__27910 = cljs.core.first.call(null,seq__27905__$1);
var k = cljs.core.nth.call(null,vec__27910,(0),null);
var plugin = cljs.core.nth.call(null,vec__27910,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27920 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27905,chunk__27906,count__27907,i__27908,pl_27920,vec__27910,k,plugin,seq__27905__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27920.call(null,msg_hist);
});})(seq__27905,chunk__27906,count__27907,i__27908,pl_27920,vec__27910,k,plugin,seq__27905__$1,temp__4657__auto__))
);
} else {
}

var G__27921 = cljs.core.next.call(null,seq__27905__$1);
var G__27922 = null;
var G__27923 = (0);
var G__27924 = (0);
seq__27905 = G__27921;
chunk__27906 = G__27922;
count__27907 = G__27923;
i__27908 = G__27924;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27925 = [];
var len__19428__auto___27928 = arguments.length;
var i__19429__auto___27929 = (0);
while(true){
if((i__19429__auto___27929 < len__19428__auto___27928)){
args27925.push((arguments[i__19429__auto___27929]));

var G__27930 = (i__19429__auto___27929 + (1));
i__19429__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var G__27927 = args27925.length;
switch (G__27927) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27925.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___27936 = arguments.length;
var i__19429__auto___27937 = (0);
while(true){
if((i__19429__auto___27937 < len__19428__auto___27936)){
args__19435__auto__.push((arguments[i__19429__auto___27937]));

var G__27938 = (i__19429__auto___27937 + (1));
i__19429__auto___27937 = G__27938;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27933){
var map__27934 = p__27933;
var map__27934__$1 = ((((!((map__27934 == null)))?((((map__27934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);
var opts = map__27934__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27932){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27932));
});

//# sourceMappingURL=client.js.map