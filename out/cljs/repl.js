// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26793_26807 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26794_26808 = null;
var count__26795_26809 = (0);
var i__26796_26810 = (0);
while(true){
if((i__26796_26810 < count__26795_26809)){
var f_26811 = cljs.core._nth.call(null,chunk__26794_26808,i__26796_26810);
cljs.core.println.call(null,"  ",f_26811);

var G__26812 = seq__26793_26807;
var G__26813 = chunk__26794_26808;
var G__26814 = count__26795_26809;
var G__26815 = (i__26796_26810 + (1));
seq__26793_26807 = G__26812;
chunk__26794_26808 = G__26813;
count__26795_26809 = G__26814;
i__26796_26810 = G__26815;
continue;
} else {
var temp__4657__auto___26816 = cljs.core.seq.call(null,seq__26793_26807);
if(temp__4657__auto___26816){
var seq__26793_26817__$1 = temp__4657__auto___26816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26793_26817__$1)){
var c__19173__auto___26818 = cljs.core.chunk_first.call(null,seq__26793_26817__$1);
var G__26819 = cljs.core.chunk_rest.call(null,seq__26793_26817__$1);
var G__26820 = c__19173__auto___26818;
var G__26821 = cljs.core.count.call(null,c__19173__auto___26818);
var G__26822 = (0);
seq__26793_26807 = G__26819;
chunk__26794_26808 = G__26820;
count__26795_26809 = G__26821;
i__26796_26810 = G__26822;
continue;
} else {
var f_26823 = cljs.core.first.call(null,seq__26793_26817__$1);
cljs.core.println.call(null,"  ",f_26823);

var G__26824 = cljs.core.next.call(null,seq__26793_26817__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26793_26807 = G__26824;
chunk__26794_26808 = G__26825;
count__26795_26809 = G__26826;
i__26796_26810 = G__26827;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26828 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26828);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26828)))?cljs.core.second.call(null,arglists_26828):arglists_26828));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26798 = null;
var count__26799 = (0);
var i__26800 = (0);
while(true){
if((i__26800 < count__26799)){
var vec__26801 = cljs.core._nth.call(null,chunk__26798,i__26800);
var name = cljs.core.nth.call(null,vec__26801,(0),null);
var map__26802 = cljs.core.nth.call(null,vec__26801,(1),null);
var map__26802__$1 = ((((!((map__26802 == null)))?((((map__26802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26802):map__26802);
var doc = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26829 = seq__26797;
var G__26830 = chunk__26798;
var G__26831 = count__26799;
var G__26832 = (i__26800 + (1));
seq__26797 = G__26829;
chunk__26798 = G__26830;
count__26799 = G__26831;
i__26800 = G__26832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26797);
if(temp__4657__auto__){
var seq__26797__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26797__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__26797__$1);
var G__26833 = cljs.core.chunk_rest.call(null,seq__26797__$1);
var G__26834 = c__19173__auto__;
var G__26835 = cljs.core.count.call(null,c__19173__auto__);
var G__26836 = (0);
seq__26797 = G__26833;
chunk__26798 = G__26834;
count__26799 = G__26835;
i__26800 = G__26836;
continue;
} else {
var vec__26804 = cljs.core.first.call(null,seq__26797__$1);
var name = cljs.core.nth.call(null,vec__26804,(0),null);
var map__26805 = cljs.core.nth.call(null,vec__26804,(1),null);
var map__26805__$1 = ((((!((map__26805 == null)))?((((map__26805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26805):map__26805);
var doc = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26805__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26837 = cljs.core.next.call(null,seq__26797__$1);
var G__26838 = null;
var G__26839 = (0);
var G__26840 = (0);
seq__26797 = G__26837;
chunk__26798 = G__26838;
count__26799 = G__26839;
i__26800 = G__26840;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map