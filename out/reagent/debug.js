// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__21235__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21236__i = 0, G__21236__a = new Array(arguments.length -  0);
while (G__21236__i < G__21236__a.length) {G__21236__a[G__21236__i] = arguments[G__21236__i + 0]; ++G__21236__i;}
  args = new cljs.core.IndexedSeq(G__21236__a,0);
} 
return G__21235__delegate.call(this,args);};
G__21235.cljs$lang$maxFixedArity = 0;
G__21235.cljs$lang$applyTo = (function (arglist__21237){
var args = cljs.core.seq(arglist__21237);
return G__21235__delegate(args);
});
G__21235.cljs$core$IFn$_invoke$arity$variadic = G__21235__delegate;
return G__21235;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21238__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21239__i = 0, G__21239__a = new Array(arguments.length -  0);
while (G__21239__i < G__21239__a.length) {G__21239__a[G__21239__i] = arguments[G__21239__i + 0]; ++G__21239__i;}
  args = new cljs.core.IndexedSeq(G__21239__a,0);
} 
return G__21238__delegate.call(this,args);};
G__21238.cljs$lang$maxFixedArity = 0;
G__21238.cljs$lang$applyTo = (function (arglist__21240){
var args = cljs.core.seq(arglist__21240);
return G__21238__delegate(args);
});
G__21238.cljs$core$IFn$_invoke$arity$variadic = G__21238__delegate;
return G__21238;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map