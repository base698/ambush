// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25769_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25769_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25774 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25775 = null;
var count__25776 = (0);
var i__25777 = (0);
while(true){
if((i__25777 < count__25776)){
var n = cljs.core._nth.call(null,chunk__25775,i__25777);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25778 = seq__25774;
var G__25779 = chunk__25775;
var G__25780 = count__25776;
var G__25781 = (i__25777 + (1));
seq__25774 = G__25778;
chunk__25775 = G__25779;
count__25776 = G__25780;
i__25777 = G__25781;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25774);
if(temp__4657__auto__){
var seq__25774__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25774__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__25774__$1);
var G__25782 = cljs.core.chunk_rest.call(null,seq__25774__$1);
var G__25783 = c__19173__auto__;
var G__25784 = cljs.core.count.call(null,c__19173__auto__);
var G__25785 = (0);
seq__25774 = G__25782;
chunk__25775 = G__25783;
count__25776 = G__25784;
i__25777 = G__25785;
continue;
} else {
var n = cljs.core.first.call(null,seq__25774__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25786 = cljs.core.next.call(null,seq__25774__$1);
var G__25787 = null;
var G__25788 = (0);
var G__25789 = (0);
seq__25774 = G__25786;
chunk__25775 = G__25787;
count__25776 = G__25788;
i__25777 = G__25789;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25828_25835 = cljs.core.seq.call(null,deps);
var chunk__25829_25836 = null;
var count__25830_25837 = (0);
var i__25831_25838 = (0);
while(true){
if((i__25831_25838 < count__25830_25837)){
var dep_25839 = cljs.core._nth.call(null,chunk__25829_25836,i__25831_25838);
topo_sort_helper_STAR_.call(null,dep_25839,(depth + (1)),state);

var G__25840 = seq__25828_25835;
var G__25841 = chunk__25829_25836;
var G__25842 = count__25830_25837;
var G__25843 = (i__25831_25838 + (1));
seq__25828_25835 = G__25840;
chunk__25829_25836 = G__25841;
count__25830_25837 = G__25842;
i__25831_25838 = G__25843;
continue;
} else {
var temp__4657__auto___25844 = cljs.core.seq.call(null,seq__25828_25835);
if(temp__4657__auto___25844){
var seq__25828_25845__$1 = temp__4657__auto___25844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25828_25845__$1)){
var c__19173__auto___25846 = cljs.core.chunk_first.call(null,seq__25828_25845__$1);
var G__25847 = cljs.core.chunk_rest.call(null,seq__25828_25845__$1);
var G__25848 = c__19173__auto___25846;
var G__25849 = cljs.core.count.call(null,c__19173__auto___25846);
var G__25850 = (0);
seq__25828_25835 = G__25847;
chunk__25829_25836 = G__25848;
count__25830_25837 = G__25849;
i__25831_25838 = G__25850;
continue;
} else {
var dep_25851 = cljs.core.first.call(null,seq__25828_25845__$1);
topo_sort_helper_STAR_.call(null,dep_25851,(depth + (1)),state);

var G__25852 = cljs.core.next.call(null,seq__25828_25845__$1);
var G__25853 = null;
var G__25854 = (0);
var G__25855 = (0);
seq__25828_25835 = G__25852;
chunk__25829_25836 = G__25853;
count__25830_25837 = G__25854;
i__25831_25838 = G__25855;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25832){
var vec__25834 = p__25832;
var x = cljs.core.nth.call(null,vec__25834,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25834,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25834,x,xs,get_deps__$1){
return (function (p1__25790_SHARP_){
return clojure.set.difference.call(null,p1__25790_SHARP_,x);
});})(vec__25834,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25868 = cljs.core.seq.call(null,provides);
var chunk__25869 = null;
var count__25870 = (0);
var i__25871 = (0);
while(true){
if((i__25871 < count__25870)){
var prov = cljs.core._nth.call(null,chunk__25869,i__25871);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25872_25880 = cljs.core.seq.call(null,requires);
var chunk__25873_25881 = null;
var count__25874_25882 = (0);
var i__25875_25883 = (0);
while(true){
if((i__25875_25883 < count__25874_25882)){
var req_25884 = cljs.core._nth.call(null,chunk__25873_25881,i__25875_25883);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25884,prov);

var G__25885 = seq__25872_25880;
var G__25886 = chunk__25873_25881;
var G__25887 = count__25874_25882;
var G__25888 = (i__25875_25883 + (1));
seq__25872_25880 = G__25885;
chunk__25873_25881 = G__25886;
count__25874_25882 = G__25887;
i__25875_25883 = G__25888;
continue;
} else {
var temp__4657__auto___25889 = cljs.core.seq.call(null,seq__25872_25880);
if(temp__4657__auto___25889){
var seq__25872_25890__$1 = temp__4657__auto___25889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25872_25890__$1)){
var c__19173__auto___25891 = cljs.core.chunk_first.call(null,seq__25872_25890__$1);
var G__25892 = cljs.core.chunk_rest.call(null,seq__25872_25890__$1);
var G__25893 = c__19173__auto___25891;
var G__25894 = cljs.core.count.call(null,c__19173__auto___25891);
var G__25895 = (0);
seq__25872_25880 = G__25892;
chunk__25873_25881 = G__25893;
count__25874_25882 = G__25894;
i__25875_25883 = G__25895;
continue;
} else {
var req_25896 = cljs.core.first.call(null,seq__25872_25890__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25896,prov);

var G__25897 = cljs.core.next.call(null,seq__25872_25890__$1);
var G__25898 = null;
var G__25899 = (0);
var G__25900 = (0);
seq__25872_25880 = G__25897;
chunk__25873_25881 = G__25898;
count__25874_25882 = G__25899;
i__25875_25883 = G__25900;
continue;
}
} else {
}
}
break;
}

var G__25901 = seq__25868;
var G__25902 = chunk__25869;
var G__25903 = count__25870;
var G__25904 = (i__25871 + (1));
seq__25868 = G__25901;
chunk__25869 = G__25902;
count__25870 = G__25903;
i__25871 = G__25904;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25868);
if(temp__4657__auto__){
var seq__25868__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25868__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__25868__$1);
var G__25905 = cljs.core.chunk_rest.call(null,seq__25868__$1);
var G__25906 = c__19173__auto__;
var G__25907 = cljs.core.count.call(null,c__19173__auto__);
var G__25908 = (0);
seq__25868 = G__25905;
chunk__25869 = G__25906;
count__25870 = G__25907;
i__25871 = G__25908;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25868__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25876_25909 = cljs.core.seq.call(null,requires);
var chunk__25877_25910 = null;
var count__25878_25911 = (0);
var i__25879_25912 = (0);
while(true){
if((i__25879_25912 < count__25878_25911)){
var req_25913 = cljs.core._nth.call(null,chunk__25877_25910,i__25879_25912);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25913,prov);

var G__25914 = seq__25876_25909;
var G__25915 = chunk__25877_25910;
var G__25916 = count__25878_25911;
var G__25917 = (i__25879_25912 + (1));
seq__25876_25909 = G__25914;
chunk__25877_25910 = G__25915;
count__25878_25911 = G__25916;
i__25879_25912 = G__25917;
continue;
} else {
var temp__4657__auto___25918__$1 = cljs.core.seq.call(null,seq__25876_25909);
if(temp__4657__auto___25918__$1){
var seq__25876_25919__$1 = temp__4657__auto___25918__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25876_25919__$1)){
var c__19173__auto___25920 = cljs.core.chunk_first.call(null,seq__25876_25919__$1);
var G__25921 = cljs.core.chunk_rest.call(null,seq__25876_25919__$1);
var G__25922 = c__19173__auto___25920;
var G__25923 = cljs.core.count.call(null,c__19173__auto___25920);
var G__25924 = (0);
seq__25876_25909 = G__25921;
chunk__25877_25910 = G__25922;
count__25878_25911 = G__25923;
i__25879_25912 = G__25924;
continue;
} else {
var req_25925 = cljs.core.first.call(null,seq__25876_25919__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25925,prov);

var G__25926 = cljs.core.next.call(null,seq__25876_25919__$1);
var G__25927 = null;
var G__25928 = (0);
var G__25929 = (0);
seq__25876_25909 = G__25926;
chunk__25877_25910 = G__25927;
count__25878_25911 = G__25928;
i__25879_25912 = G__25929;
continue;
}
} else {
}
}
break;
}

var G__25930 = cljs.core.next.call(null,seq__25868__$1);
var G__25931 = null;
var G__25932 = (0);
var G__25933 = (0);
seq__25868 = G__25930;
chunk__25869 = G__25931;
count__25870 = G__25932;
i__25871 = G__25933;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25938_25942 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25939_25943 = null;
var count__25940_25944 = (0);
var i__25941_25945 = (0);
while(true){
if((i__25941_25945 < count__25940_25944)){
var ns_25946 = cljs.core._nth.call(null,chunk__25939_25943,i__25941_25945);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25946);

var G__25947 = seq__25938_25942;
var G__25948 = chunk__25939_25943;
var G__25949 = count__25940_25944;
var G__25950 = (i__25941_25945 + (1));
seq__25938_25942 = G__25947;
chunk__25939_25943 = G__25948;
count__25940_25944 = G__25949;
i__25941_25945 = G__25950;
continue;
} else {
var temp__4657__auto___25951 = cljs.core.seq.call(null,seq__25938_25942);
if(temp__4657__auto___25951){
var seq__25938_25952__$1 = temp__4657__auto___25951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25938_25952__$1)){
var c__19173__auto___25953 = cljs.core.chunk_first.call(null,seq__25938_25952__$1);
var G__25954 = cljs.core.chunk_rest.call(null,seq__25938_25952__$1);
var G__25955 = c__19173__auto___25953;
var G__25956 = cljs.core.count.call(null,c__19173__auto___25953);
var G__25957 = (0);
seq__25938_25942 = G__25954;
chunk__25939_25943 = G__25955;
count__25940_25944 = G__25956;
i__25941_25945 = G__25957;
continue;
} else {
var ns_25958 = cljs.core.first.call(null,seq__25938_25952__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25958);

var G__25959 = cljs.core.next.call(null,seq__25938_25952__$1);
var G__25960 = null;
var G__25961 = (0);
var G__25962 = (0);
seq__25938_25942 = G__25959;
chunk__25939_25943 = G__25960;
count__25940_25944 = G__25961;
i__25941_25945 = G__25962;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25963__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25964__i = 0, G__25964__a = new Array(arguments.length -  0);
while (G__25964__i < G__25964__a.length) {G__25964__a[G__25964__i] = arguments[G__25964__i + 0]; ++G__25964__i;}
  args = new cljs.core.IndexedSeq(G__25964__a,0);
} 
return G__25963__delegate.call(this,args);};
G__25963.cljs$lang$maxFixedArity = 0;
G__25963.cljs$lang$applyTo = (function (arglist__25965){
var args = cljs.core.seq(arglist__25965);
return G__25963__delegate(args);
});
G__25963.cljs$core$IFn$_invoke$arity$variadic = G__25963__delegate;
return G__25963;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25967 = cljs.core._EQ_;
var expr__25968 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25967.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25968))){
var path_parts = ((function (pred__25967,expr__25968){
return (function (p1__25966_SHARP_){
return clojure.string.split.call(null,p1__25966_SHARP_,/[\/\\]/);
});})(pred__25967,expr__25968))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25967,expr__25968){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25970){if((e25970 instanceof Error)){
var e = e25970;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25970;

}
}})());
});
;})(path_parts,sep,root,pred__25967,expr__25968))
} else {
if(cljs.core.truth_(pred__25967.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25968))){
return ((function (pred__25967,expr__25968){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25967,expr__25968){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25967,expr__25968))
);

return deferred.addErrback(((function (deferred,pred__25967,expr__25968){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25967,expr__25968))
);
});
;})(pred__25967,expr__25968))
} else {
return ((function (pred__25967,expr__25968){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25967,expr__25968))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25971,callback){
var map__25974 = p__25971;
var map__25974__$1 = ((((!((map__25974 == null)))?((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);
var file_msg = map__25974__$1;
var request_url = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25974,map__25974__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25974,map__25974__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_25998){
var state_val_25999 = (state_25998[(1)]);
if((state_val_25999 === (7))){
var inst_25994 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26000_26020 = state_25998__$1;
(statearr_26000_26020[(2)] = inst_25994);

(statearr_26000_26020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (1))){
var state_25998__$1 = state_25998;
var statearr_26001_26021 = state_25998__$1;
(statearr_26001_26021[(2)] = null);

(statearr_26001_26021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (4))){
var inst_25978 = (state_25998[(7)]);
var inst_25978__$1 = (state_25998[(2)]);
var state_25998__$1 = (function (){var statearr_26002 = state_25998;
(statearr_26002[(7)] = inst_25978__$1);

return statearr_26002;
})();
if(cljs.core.truth_(inst_25978__$1)){
var statearr_26003_26022 = state_25998__$1;
(statearr_26003_26022[(1)] = (5));

} else {
var statearr_26004_26023 = state_25998__$1;
(statearr_26004_26023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (6))){
var state_25998__$1 = state_25998;
var statearr_26005_26024 = state_25998__$1;
(statearr_26005_26024[(2)] = null);

(statearr_26005_26024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (3))){
var inst_25996 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25998__$1,inst_25996);
} else {
if((state_val_25999 === (2))){
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25998__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25999 === (11))){
var inst_25990 = (state_25998[(2)]);
var state_25998__$1 = (function (){var statearr_26006 = state_25998;
(statearr_26006[(8)] = inst_25990);

return statearr_26006;
})();
var statearr_26007_26025 = state_25998__$1;
(statearr_26007_26025[(2)] = null);

(statearr_26007_26025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (9))){
var inst_25982 = (state_25998[(9)]);
var inst_25984 = (state_25998[(10)]);
var inst_25986 = inst_25984.call(null,inst_25982);
var state_25998__$1 = state_25998;
var statearr_26008_26026 = state_25998__$1;
(statearr_26008_26026[(2)] = inst_25986);

(statearr_26008_26026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (5))){
var inst_25978 = (state_25998[(7)]);
var inst_25980 = figwheel.client.file_reloading.blocking_load.call(null,inst_25978);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25998__$1,(8),inst_25980);
} else {
if((state_val_25999 === (10))){
var inst_25982 = (state_25998[(9)]);
var inst_25988 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25982);
var state_25998__$1 = state_25998;
var statearr_26009_26027 = state_25998__$1;
(statearr_26009_26027[(2)] = inst_25988);

(statearr_26009_26027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (8))){
var inst_25984 = (state_25998[(10)]);
var inst_25978 = (state_25998[(7)]);
var inst_25982 = (state_25998[(2)]);
var inst_25983 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25984__$1 = cljs.core.get.call(null,inst_25983,inst_25978);
var state_25998__$1 = (function (){var statearr_26010 = state_25998;
(statearr_26010[(9)] = inst_25982);

(statearr_26010[(10)] = inst_25984__$1);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25984__$1)){
var statearr_26011_26028 = state_25998__$1;
(statearr_26011_26028[(1)] = (9));

} else {
var statearr_26012_26029 = state_25998__$1;
(statearr_26012_26029[(1)] = (10));

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
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20361__auto__ = null;
var figwheel$client$file_reloading$state_machine__20361__auto____0 = (function (){
var statearr_26016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26016[(0)] = figwheel$client$file_reloading$state_machine__20361__auto__);

(statearr_26016[(1)] = (1));

return statearr_26016;
});
var figwheel$client$file_reloading$state_machine__20361__auto____1 = (function (state_25998){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e26017){if((e26017 instanceof Object)){
var ex__20364__auto__ = e26017;
var statearr_26018_26030 = state_25998;
(statearr_26018_26030[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26031 = state_25998;
state_25998 = G__26031;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20361__auto__ = function(state_25998){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20361__auto____1.call(this,state_25998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20361__auto____0;
figwheel$client$file_reloading$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20361__auto____1;
return figwheel$client$file_reloading$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_26019 = f__20382__auto__.call(null);
(statearr_26019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_26019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26032,callback){
var map__26035 = p__26032;
var map__26035__$1 = ((((!((map__26035 == null)))?((((map__26035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26035):map__26035);
var file_msg = map__26035__$1;
var namespace = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26035,map__26035__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26035,map__26035__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26037){
var map__26040 = p__26037;
var map__26040__$1 = ((((!((map__26040 == null)))?((((map__26040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26040):map__26040);
var file_msg = map__26040__$1;
var namespace = cljs.core.get.call(null,map__26040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26042,callback){
var map__26045 = p__26042;
var map__26045__$1 = ((((!((map__26045 == null)))?((((map__26045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26045):map__26045);
var file_msg = map__26045__$1;
var request_url = cljs.core.get.call(null,map__26045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20381__auto___26133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___26133,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___26133,out){
return (function (state_26115){
var state_val_26116 = (state_26115[(1)]);
if((state_val_26116 === (1))){
var inst_26093 = cljs.core.nth.call(null,files,(0),null);
var inst_26094 = cljs.core.nthnext.call(null,files,(1));
var inst_26095 = files;
var state_26115__$1 = (function (){var statearr_26117 = state_26115;
(statearr_26117[(7)] = inst_26095);

(statearr_26117[(8)] = inst_26094);

(statearr_26117[(9)] = inst_26093);

return statearr_26117;
})();
var statearr_26118_26134 = state_26115__$1;
(statearr_26118_26134[(2)] = null);

(statearr_26118_26134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (2))){
var inst_26098 = (state_26115[(10)]);
var inst_26095 = (state_26115[(7)]);
var inst_26098__$1 = cljs.core.nth.call(null,inst_26095,(0),null);
var inst_26099 = cljs.core.nthnext.call(null,inst_26095,(1));
var inst_26100 = (inst_26098__$1 == null);
var inst_26101 = cljs.core.not.call(null,inst_26100);
var state_26115__$1 = (function (){var statearr_26119 = state_26115;
(statearr_26119[(10)] = inst_26098__$1);

(statearr_26119[(11)] = inst_26099);

return statearr_26119;
})();
if(inst_26101){
var statearr_26120_26135 = state_26115__$1;
(statearr_26120_26135[(1)] = (4));

} else {
var statearr_26121_26136 = state_26115__$1;
(statearr_26121_26136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (3))){
var inst_26113 = (state_26115[(2)]);
var state_26115__$1 = state_26115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26115__$1,inst_26113);
} else {
if((state_val_26116 === (4))){
var inst_26098 = (state_26115[(10)]);
var inst_26103 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26098);
var state_26115__$1 = state_26115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26115__$1,(7),inst_26103);
} else {
if((state_val_26116 === (5))){
var inst_26109 = cljs.core.async.close_BANG_.call(null,out);
var state_26115__$1 = state_26115;
var statearr_26122_26137 = state_26115__$1;
(statearr_26122_26137[(2)] = inst_26109);

(statearr_26122_26137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (6))){
var inst_26111 = (state_26115[(2)]);
var state_26115__$1 = state_26115;
var statearr_26123_26138 = state_26115__$1;
(statearr_26123_26138[(2)] = inst_26111);

(statearr_26123_26138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26116 === (7))){
var inst_26099 = (state_26115[(11)]);
var inst_26105 = (state_26115[(2)]);
var inst_26106 = cljs.core.async.put_BANG_.call(null,out,inst_26105);
var inst_26095 = inst_26099;
var state_26115__$1 = (function (){var statearr_26124 = state_26115;
(statearr_26124[(7)] = inst_26095);

(statearr_26124[(12)] = inst_26106);

return statearr_26124;
})();
var statearr_26125_26139 = state_26115__$1;
(statearr_26125_26139[(2)] = null);

(statearr_26125_26139[(1)] = (2));


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
});})(c__20381__auto___26133,out))
;
return ((function (switch__20360__auto__,c__20381__auto___26133,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____0 = (function (){
var statearr_26129 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26129[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__);

(statearr_26129[(1)] = (1));

return statearr_26129;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____1 = (function (state_26115){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_26115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e26130){if((e26130 instanceof Object)){
var ex__20364__auto__ = e26130;
var statearr_26131_26140 = state_26115;
(statearr_26131_26140[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26141 = state_26115;
state_26115 = G__26141;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__ = function(state_26115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____1.call(this,state_26115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___26133,out))
})();
var state__20383__auto__ = (function (){var statearr_26132 = f__20382__auto__.call(null);
(statearr_26132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___26133);

return statearr_26132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___26133,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26142,opts){
var map__26146 = p__26142;
var map__26146__$1 = ((((!((map__26146 == null)))?((((map__26146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26146):map__26146);
var eval_body__$1 = cljs.core.get.call(null,map__26146__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26148){var e = e26148;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26149_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26149_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26154){
var vec__26155 = p__26154;
var k = cljs.core.nth.call(null,vec__26155,(0),null);
var v = cljs.core.nth.call(null,vec__26155,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26156){
var vec__26157 = p__26156;
var k = cljs.core.nth.call(null,vec__26157,(0),null);
var v = cljs.core.nth.call(null,vec__26157,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26161,p__26162){
var map__26409 = p__26161;
var map__26409__$1 = ((((!((map__26409 == null)))?((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409):map__26409);
var opts = map__26409__$1;
var before_jsload = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26410 = p__26162;
var map__26410__$1 = ((((!((map__26410 == null)))?((((map__26410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26410):map__26410);
var msg = map__26410__$1;
var files = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26563){
var state_val_26564 = (state_26563[(1)]);
if((state_val_26564 === (7))){
var inst_26426 = (state_26563[(7)]);
var inst_26424 = (state_26563[(8)]);
var inst_26427 = (state_26563[(9)]);
var inst_26425 = (state_26563[(10)]);
var inst_26432 = cljs.core._nth.call(null,inst_26425,inst_26427);
var inst_26433 = figwheel.client.file_reloading.eval_body.call(null,inst_26432,opts);
var inst_26434 = (inst_26427 + (1));
var tmp26565 = inst_26426;
var tmp26566 = inst_26424;
var tmp26567 = inst_26425;
var inst_26424__$1 = tmp26566;
var inst_26425__$1 = tmp26567;
var inst_26426__$1 = tmp26565;
var inst_26427__$1 = inst_26434;
var state_26563__$1 = (function (){var statearr_26568 = state_26563;
(statearr_26568[(7)] = inst_26426__$1);

(statearr_26568[(8)] = inst_26424__$1);

(statearr_26568[(11)] = inst_26433);

(statearr_26568[(9)] = inst_26427__$1);

(statearr_26568[(10)] = inst_26425__$1);

return statearr_26568;
})();
var statearr_26569_26655 = state_26563__$1;
(statearr_26569_26655[(2)] = null);

(statearr_26569_26655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (20))){
var inst_26467 = (state_26563[(12)]);
var inst_26475 = figwheel.client.file_reloading.sort_files.call(null,inst_26467);
var state_26563__$1 = state_26563;
var statearr_26570_26656 = state_26563__$1;
(statearr_26570_26656[(2)] = inst_26475);

(statearr_26570_26656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (27))){
var state_26563__$1 = state_26563;
var statearr_26571_26657 = state_26563__$1;
(statearr_26571_26657[(2)] = null);

(statearr_26571_26657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (1))){
var inst_26416 = (state_26563[(13)]);
var inst_26413 = before_jsload.call(null,files);
var inst_26414 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26415 = (function (){return ((function (inst_26416,inst_26413,inst_26414,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26158_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26158_SHARP_);
});
;})(inst_26416,inst_26413,inst_26414,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26416__$1 = cljs.core.filter.call(null,inst_26415,files);
var inst_26417 = cljs.core.not_empty.call(null,inst_26416__$1);
var state_26563__$1 = (function (){var statearr_26572 = state_26563;
(statearr_26572[(14)] = inst_26413);

(statearr_26572[(13)] = inst_26416__$1);

(statearr_26572[(15)] = inst_26414);

return statearr_26572;
})();
if(cljs.core.truth_(inst_26417)){
var statearr_26573_26658 = state_26563__$1;
(statearr_26573_26658[(1)] = (2));

} else {
var statearr_26574_26659 = state_26563__$1;
(statearr_26574_26659[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (24))){
var state_26563__$1 = state_26563;
var statearr_26575_26660 = state_26563__$1;
(statearr_26575_26660[(2)] = null);

(statearr_26575_26660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (39))){
var inst_26517 = (state_26563[(16)]);
var state_26563__$1 = state_26563;
var statearr_26576_26661 = state_26563__$1;
(statearr_26576_26661[(2)] = inst_26517);

(statearr_26576_26661[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (46))){
var inst_26558 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26577_26662 = state_26563__$1;
(statearr_26577_26662[(2)] = inst_26558);

(statearr_26577_26662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (4))){
var inst_26461 = (state_26563[(2)]);
var inst_26462 = cljs.core.List.EMPTY;
var inst_26463 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26462);
var inst_26464 = (function (){return ((function (inst_26461,inst_26462,inst_26463,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26159_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26159_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26159_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_26461,inst_26462,inst_26463,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26465 = cljs.core.filter.call(null,inst_26464,files);
var inst_26466 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26467 = cljs.core.concat.call(null,inst_26465,inst_26466);
var state_26563__$1 = (function (){var statearr_26578 = state_26563;
(statearr_26578[(17)] = inst_26461);

(statearr_26578[(18)] = inst_26463);

(statearr_26578[(12)] = inst_26467);

return statearr_26578;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26579_26663 = state_26563__$1;
(statearr_26579_26663[(1)] = (16));

} else {
var statearr_26580_26664 = state_26563__$1;
(statearr_26580_26664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (15))){
var inst_26451 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26581_26665 = state_26563__$1;
(statearr_26581_26665[(2)] = inst_26451);

(statearr_26581_26665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (21))){
var inst_26477 = (state_26563[(19)]);
var inst_26477__$1 = (state_26563[(2)]);
var inst_26478 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26477__$1);
var state_26563__$1 = (function (){var statearr_26582 = state_26563;
(statearr_26582[(19)] = inst_26477__$1);

return statearr_26582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26563__$1,(22),inst_26478);
} else {
if((state_val_26564 === (31))){
var inst_26561 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26563__$1,inst_26561);
} else {
if((state_val_26564 === (32))){
var inst_26517 = (state_26563[(16)]);
var inst_26522 = inst_26517.cljs$lang$protocol_mask$partition0$;
var inst_26523 = (inst_26522 & (64));
var inst_26524 = inst_26517.cljs$core$ISeq$;
var inst_26525 = (inst_26523) || (inst_26524);
var state_26563__$1 = state_26563;
if(cljs.core.truth_(inst_26525)){
var statearr_26583_26666 = state_26563__$1;
(statearr_26583_26666[(1)] = (35));

} else {
var statearr_26584_26667 = state_26563__$1;
(statearr_26584_26667[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (40))){
var inst_26538 = (state_26563[(20)]);
var inst_26537 = (state_26563[(2)]);
var inst_26538__$1 = cljs.core.get.call(null,inst_26537,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26539 = cljs.core.get.call(null,inst_26537,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26540 = cljs.core.not_empty.call(null,inst_26538__$1);
var state_26563__$1 = (function (){var statearr_26585 = state_26563;
(statearr_26585[(20)] = inst_26538__$1);

(statearr_26585[(21)] = inst_26539);

return statearr_26585;
})();
if(cljs.core.truth_(inst_26540)){
var statearr_26586_26668 = state_26563__$1;
(statearr_26586_26668[(1)] = (41));

} else {
var statearr_26587_26669 = state_26563__$1;
(statearr_26587_26669[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (33))){
var state_26563__$1 = state_26563;
var statearr_26588_26670 = state_26563__$1;
(statearr_26588_26670[(2)] = false);

(statearr_26588_26670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (13))){
var inst_26437 = (state_26563[(22)]);
var inst_26441 = cljs.core.chunk_first.call(null,inst_26437);
var inst_26442 = cljs.core.chunk_rest.call(null,inst_26437);
var inst_26443 = cljs.core.count.call(null,inst_26441);
var inst_26424 = inst_26442;
var inst_26425 = inst_26441;
var inst_26426 = inst_26443;
var inst_26427 = (0);
var state_26563__$1 = (function (){var statearr_26589 = state_26563;
(statearr_26589[(7)] = inst_26426);

(statearr_26589[(8)] = inst_26424);

(statearr_26589[(9)] = inst_26427);

(statearr_26589[(10)] = inst_26425);

return statearr_26589;
})();
var statearr_26590_26671 = state_26563__$1;
(statearr_26590_26671[(2)] = null);

(statearr_26590_26671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (22))){
var inst_26477 = (state_26563[(19)]);
var inst_26481 = (state_26563[(23)]);
var inst_26485 = (state_26563[(24)]);
var inst_26480 = (state_26563[(25)]);
var inst_26480__$1 = (state_26563[(2)]);
var inst_26481__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26480__$1);
var inst_26482 = (function (){var all_files = inst_26477;
var res_SINGLEQUOTE_ = inst_26480__$1;
var res = inst_26481__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26477,inst_26481,inst_26485,inst_26480,inst_26480__$1,inst_26481__$1,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26160_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26160_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26477,inst_26481,inst_26485,inst_26480,inst_26480__$1,inst_26481__$1,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26483 = cljs.core.filter.call(null,inst_26482,inst_26480__$1);
var inst_26484 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26485__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26484);
var inst_26486 = cljs.core.not_empty.call(null,inst_26485__$1);
var state_26563__$1 = (function (){var statearr_26591 = state_26563;
(statearr_26591[(23)] = inst_26481__$1);

(statearr_26591[(26)] = inst_26483);

(statearr_26591[(24)] = inst_26485__$1);

(statearr_26591[(25)] = inst_26480__$1);

return statearr_26591;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26592_26672 = state_26563__$1;
(statearr_26592_26672[(1)] = (23));

} else {
var statearr_26593_26673 = state_26563__$1;
(statearr_26593_26673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (36))){
var state_26563__$1 = state_26563;
var statearr_26594_26674 = state_26563__$1;
(statearr_26594_26674[(2)] = false);

(statearr_26594_26674[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (41))){
var inst_26538 = (state_26563[(20)]);
var inst_26542 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26543 = cljs.core.map.call(null,inst_26542,inst_26538);
var inst_26544 = cljs.core.pr_str.call(null,inst_26543);
var inst_26545 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26544)].join('');
var inst_26546 = figwheel.client.utils.log.call(null,inst_26545);
var state_26563__$1 = state_26563;
var statearr_26595_26675 = state_26563__$1;
(statearr_26595_26675[(2)] = inst_26546);

(statearr_26595_26675[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (43))){
var inst_26539 = (state_26563[(21)]);
var inst_26549 = (state_26563[(2)]);
var inst_26550 = cljs.core.not_empty.call(null,inst_26539);
var state_26563__$1 = (function (){var statearr_26596 = state_26563;
(statearr_26596[(27)] = inst_26549);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26550)){
var statearr_26597_26676 = state_26563__$1;
(statearr_26597_26676[(1)] = (44));

} else {
var statearr_26598_26677 = state_26563__$1;
(statearr_26598_26677[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (29))){
var inst_26477 = (state_26563[(19)]);
var inst_26481 = (state_26563[(23)]);
var inst_26483 = (state_26563[(26)]);
var inst_26517 = (state_26563[(16)]);
var inst_26485 = (state_26563[(24)]);
var inst_26480 = (state_26563[(25)]);
var inst_26513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26516 = (function (){var all_files = inst_26477;
var res_SINGLEQUOTE_ = inst_26480;
var res = inst_26481;
var files_not_loaded = inst_26483;
var dependencies_that_loaded = inst_26485;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26517,inst_26485,inst_26480,inst_26513,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26515){
var map__26599 = p__26515;
var map__26599__$1 = ((((!((map__26599 == null)))?((((map__26599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26599):map__26599);
var namespace = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26517,inst_26485,inst_26480,inst_26513,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26517__$1 = cljs.core.group_by.call(null,inst_26516,inst_26483);
var inst_26519 = (inst_26517__$1 == null);
var inst_26520 = cljs.core.not.call(null,inst_26519);
var state_26563__$1 = (function (){var statearr_26601 = state_26563;
(statearr_26601[(16)] = inst_26517__$1);

(statearr_26601[(28)] = inst_26513);

return statearr_26601;
})();
if(inst_26520){
var statearr_26602_26678 = state_26563__$1;
(statearr_26602_26678[(1)] = (32));

} else {
var statearr_26603_26679 = state_26563__$1;
(statearr_26603_26679[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (44))){
var inst_26539 = (state_26563[(21)]);
var inst_26552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26539);
var inst_26553 = cljs.core.pr_str.call(null,inst_26552);
var inst_26554 = [cljs.core.str("not required: "),cljs.core.str(inst_26553)].join('');
var inst_26555 = figwheel.client.utils.log.call(null,inst_26554);
var state_26563__$1 = state_26563;
var statearr_26604_26680 = state_26563__$1;
(statearr_26604_26680[(2)] = inst_26555);

(statearr_26604_26680[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (6))){
var inst_26458 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26605_26681 = state_26563__$1;
(statearr_26605_26681[(2)] = inst_26458);

(statearr_26605_26681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (28))){
var inst_26483 = (state_26563[(26)]);
var inst_26510 = (state_26563[(2)]);
var inst_26511 = cljs.core.not_empty.call(null,inst_26483);
var state_26563__$1 = (function (){var statearr_26606 = state_26563;
(statearr_26606[(29)] = inst_26510);

return statearr_26606;
})();
if(cljs.core.truth_(inst_26511)){
var statearr_26607_26682 = state_26563__$1;
(statearr_26607_26682[(1)] = (29));

} else {
var statearr_26608_26683 = state_26563__$1;
(statearr_26608_26683[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (25))){
var inst_26481 = (state_26563[(23)]);
var inst_26497 = (state_26563[(2)]);
var inst_26498 = cljs.core.not_empty.call(null,inst_26481);
var state_26563__$1 = (function (){var statearr_26609 = state_26563;
(statearr_26609[(30)] = inst_26497);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26498)){
var statearr_26610_26684 = state_26563__$1;
(statearr_26610_26684[(1)] = (26));

} else {
var statearr_26611_26685 = state_26563__$1;
(statearr_26611_26685[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (34))){
var inst_26532 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
if(cljs.core.truth_(inst_26532)){
var statearr_26612_26686 = state_26563__$1;
(statearr_26612_26686[(1)] = (38));

} else {
var statearr_26613_26687 = state_26563__$1;
(statearr_26613_26687[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (17))){
var state_26563__$1 = state_26563;
var statearr_26614_26688 = state_26563__$1;
(statearr_26614_26688[(2)] = recompile_dependents);

(statearr_26614_26688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (3))){
var state_26563__$1 = state_26563;
var statearr_26615_26689 = state_26563__$1;
(statearr_26615_26689[(2)] = null);

(statearr_26615_26689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (12))){
var inst_26454 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26616_26690 = state_26563__$1;
(statearr_26616_26690[(2)] = inst_26454);

(statearr_26616_26690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (2))){
var inst_26416 = (state_26563[(13)]);
var inst_26423 = cljs.core.seq.call(null,inst_26416);
var inst_26424 = inst_26423;
var inst_26425 = null;
var inst_26426 = (0);
var inst_26427 = (0);
var state_26563__$1 = (function (){var statearr_26617 = state_26563;
(statearr_26617[(7)] = inst_26426);

(statearr_26617[(8)] = inst_26424);

(statearr_26617[(9)] = inst_26427);

(statearr_26617[(10)] = inst_26425);

return statearr_26617;
})();
var statearr_26618_26691 = state_26563__$1;
(statearr_26618_26691[(2)] = null);

(statearr_26618_26691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (23))){
var inst_26477 = (state_26563[(19)]);
var inst_26481 = (state_26563[(23)]);
var inst_26483 = (state_26563[(26)]);
var inst_26485 = (state_26563[(24)]);
var inst_26480 = (state_26563[(25)]);
var inst_26488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26490 = (function (){var all_files = inst_26477;
var res_SINGLEQUOTE_ = inst_26480;
var res = inst_26481;
var files_not_loaded = inst_26483;
var dependencies_that_loaded = inst_26485;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26488,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26489){
var map__26619 = p__26489;
var map__26619__$1 = ((((!((map__26619 == null)))?((((map__26619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26619):map__26619);
var request_url = cljs.core.get.call(null,map__26619__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26488,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26491 = cljs.core.reverse.call(null,inst_26485);
var inst_26492 = cljs.core.map.call(null,inst_26490,inst_26491);
var inst_26493 = cljs.core.pr_str.call(null,inst_26492);
var inst_26494 = figwheel.client.utils.log.call(null,inst_26493);
var state_26563__$1 = (function (){var statearr_26621 = state_26563;
(statearr_26621[(31)] = inst_26488);

return statearr_26621;
})();
var statearr_26622_26692 = state_26563__$1;
(statearr_26622_26692[(2)] = inst_26494);

(statearr_26622_26692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (35))){
var state_26563__$1 = state_26563;
var statearr_26623_26693 = state_26563__$1;
(statearr_26623_26693[(2)] = true);

(statearr_26623_26693[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (19))){
var inst_26467 = (state_26563[(12)]);
var inst_26473 = figwheel.client.file_reloading.expand_files.call(null,inst_26467);
var state_26563__$1 = state_26563;
var statearr_26624_26694 = state_26563__$1;
(statearr_26624_26694[(2)] = inst_26473);

(statearr_26624_26694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (11))){
var state_26563__$1 = state_26563;
var statearr_26625_26695 = state_26563__$1;
(statearr_26625_26695[(2)] = null);

(statearr_26625_26695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (9))){
var inst_26456 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26626_26696 = state_26563__$1;
(statearr_26626_26696[(2)] = inst_26456);

(statearr_26626_26696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (5))){
var inst_26426 = (state_26563[(7)]);
var inst_26427 = (state_26563[(9)]);
var inst_26429 = (inst_26427 < inst_26426);
var inst_26430 = inst_26429;
var state_26563__$1 = state_26563;
if(cljs.core.truth_(inst_26430)){
var statearr_26627_26697 = state_26563__$1;
(statearr_26627_26697[(1)] = (7));

} else {
var statearr_26628_26698 = state_26563__$1;
(statearr_26628_26698[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (14))){
var inst_26437 = (state_26563[(22)]);
var inst_26446 = cljs.core.first.call(null,inst_26437);
var inst_26447 = figwheel.client.file_reloading.eval_body.call(null,inst_26446,opts);
var inst_26448 = cljs.core.next.call(null,inst_26437);
var inst_26424 = inst_26448;
var inst_26425 = null;
var inst_26426 = (0);
var inst_26427 = (0);
var state_26563__$1 = (function (){var statearr_26629 = state_26563;
(statearr_26629[(32)] = inst_26447);

(statearr_26629[(7)] = inst_26426);

(statearr_26629[(8)] = inst_26424);

(statearr_26629[(9)] = inst_26427);

(statearr_26629[(10)] = inst_26425);

return statearr_26629;
})();
var statearr_26630_26699 = state_26563__$1;
(statearr_26630_26699[(2)] = null);

(statearr_26630_26699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (45))){
var state_26563__$1 = state_26563;
var statearr_26631_26700 = state_26563__$1;
(statearr_26631_26700[(2)] = null);

(statearr_26631_26700[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (26))){
var inst_26477 = (state_26563[(19)]);
var inst_26481 = (state_26563[(23)]);
var inst_26483 = (state_26563[(26)]);
var inst_26485 = (state_26563[(24)]);
var inst_26480 = (state_26563[(25)]);
var inst_26500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26502 = (function (){var all_files = inst_26477;
var res_SINGLEQUOTE_ = inst_26480;
var res = inst_26481;
var files_not_loaded = inst_26483;
var dependencies_that_loaded = inst_26485;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26500,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26501){
var map__26632 = p__26501;
var map__26632__$1 = ((((!((map__26632 == null)))?((((map__26632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26632):map__26632);
var namespace = cljs.core.get.call(null,map__26632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26500,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26503 = cljs.core.map.call(null,inst_26502,inst_26481);
var inst_26504 = cljs.core.pr_str.call(null,inst_26503);
var inst_26505 = figwheel.client.utils.log.call(null,inst_26504);
var inst_26506 = (function (){var all_files = inst_26477;
var res_SINGLEQUOTE_ = inst_26480;
var res = inst_26481;
var files_not_loaded = inst_26483;
var dependencies_that_loaded = inst_26485;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26500,inst_26502,inst_26503,inst_26504,inst_26505,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26477,inst_26481,inst_26483,inst_26485,inst_26480,inst_26500,inst_26502,inst_26503,inst_26504,inst_26505,state_val_26564,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26507 = setTimeout(inst_26506,(10));
var state_26563__$1 = (function (){var statearr_26634 = state_26563;
(statearr_26634[(33)] = inst_26505);

(statearr_26634[(34)] = inst_26500);

return statearr_26634;
})();
var statearr_26635_26701 = state_26563__$1;
(statearr_26635_26701[(2)] = inst_26507);

(statearr_26635_26701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (16))){
var state_26563__$1 = state_26563;
var statearr_26636_26702 = state_26563__$1;
(statearr_26636_26702[(2)] = reload_dependents);

(statearr_26636_26702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (38))){
var inst_26517 = (state_26563[(16)]);
var inst_26534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26517);
var state_26563__$1 = state_26563;
var statearr_26637_26703 = state_26563__$1;
(statearr_26637_26703[(2)] = inst_26534);

(statearr_26637_26703[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (30))){
var state_26563__$1 = state_26563;
var statearr_26638_26704 = state_26563__$1;
(statearr_26638_26704[(2)] = null);

(statearr_26638_26704[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (10))){
var inst_26437 = (state_26563[(22)]);
var inst_26439 = cljs.core.chunked_seq_QMARK_.call(null,inst_26437);
var state_26563__$1 = state_26563;
if(inst_26439){
var statearr_26639_26705 = state_26563__$1;
(statearr_26639_26705[(1)] = (13));

} else {
var statearr_26640_26706 = state_26563__$1;
(statearr_26640_26706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (18))){
var inst_26471 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
if(cljs.core.truth_(inst_26471)){
var statearr_26641_26707 = state_26563__$1;
(statearr_26641_26707[(1)] = (19));

} else {
var statearr_26642_26708 = state_26563__$1;
(statearr_26642_26708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (42))){
var state_26563__$1 = state_26563;
var statearr_26643_26709 = state_26563__$1;
(statearr_26643_26709[(2)] = null);

(statearr_26643_26709[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (37))){
var inst_26529 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26644_26710 = state_26563__$1;
(statearr_26644_26710[(2)] = inst_26529);

(statearr_26644_26710[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (8))){
var inst_26424 = (state_26563[(8)]);
var inst_26437 = (state_26563[(22)]);
var inst_26437__$1 = cljs.core.seq.call(null,inst_26424);
var state_26563__$1 = (function (){var statearr_26645 = state_26563;
(statearr_26645[(22)] = inst_26437__$1);

return statearr_26645;
})();
if(inst_26437__$1){
var statearr_26646_26711 = state_26563__$1;
(statearr_26646_26711[(1)] = (10));

} else {
var statearr_26647_26712 = state_26563__$1;
(statearr_26647_26712[(1)] = (11));

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
});})(c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20360__auto__,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26651[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____1 = (function (state_26563){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_26563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__20364__auto__ = e26652;
var statearr_26653_26713 = state_26563;
(statearr_26653_26713[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26714 = state_26563;
state_26563 = G__26714;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__ = function(state_26563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____1.call(this,state_26563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20383__auto__ = (function (){var statearr_26654 = f__20382__auto__.call(null);
(statearr_26654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__,map__26409,map__26409__$1,opts,before_jsload,on_jsload,reload_dependents,map__26410,map__26410__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20381__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26717,link){
var map__26720 = p__26717;
var map__26720__$1 = ((((!((map__26720 == null)))?((((map__26720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26720):map__26720);
var file = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26720,map__26720__$1,file){
return (function (p1__26715_SHARP_,p2__26716_SHARP_){
if(cljs.core._EQ_.call(null,p1__26715_SHARP_,p2__26716_SHARP_)){
return p1__26715_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26720,map__26720__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26726){
var map__26727 = p__26726;
var map__26727__$1 = ((((!((map__26727 == null)))?((((map__26727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26727):map__26727);
var match_length = cljs.core.get.call(null,map__26727__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26727__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26722_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26722_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26729 = [];
var len__19428__auto___26732 = arguments.length;
var i__19429__auto___26733 = (0);
while(true){
if((i__19429__auto___26733 < len__19428__auto___26732)){
args26729.push((arguments[i__19429__auto___26733]));

var G__26734 = (i__19429__auto___26733 + (1));
i__19429__auto___26733 = G__26734;
continue;
} else {
}
break;
}

var G__26731 = args26729.length;
switch (G__26731) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26729.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26736_SHARP_,p2__26737_SHARP_){
return cljs.core.assoc.call(null,p1__26736_SHARP_,cljs.core.get.call(null,p2__26737_SHARP_,key),p2__26737_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26738){
var map__26741 = p__26738;
var map__26741__$1 = ((((!((map__26741 == null)))?((((map__26741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26741):map__26741);
var f_data = map__26741__$1;
var file = cljs.core.get.call(null,map__26741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26743,files_msg){
var map__26750 = p__26743;
var map__26750__$1 = ((((!((map__26750 == null)))?((((map__26750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26750):map__26750);
var opts = map__26750__$1;
var on_cssload = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26752_26756 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26753_26757 = null;
var count__26754_26758 = (0);
var i__26755_26759 = (0);
while(true){
if((i__26755_26759 < count__26754_26758)){
var f_26760 = cljs.core._nth.call(null,chunk__26753_26757,i__26755_26759);
figwheel.client.file_reloading.reload_css_file.call(null,f_26760);

var G__26761 = seq__26752_26756;
var G__26762 = chunk__26753_26757;
var G__26763 = count__26754_26758;
var G__26764 = (i__26755_26759 + (1));
seq__26752_26756 = G__26761;
chunk__26753_26757 = G__26762;
count__26754_26758 = G__26763;
i__26755_26759 = G__26764;
continue;
} else {
var temp__4657__auto___26765 = cljs.core.seq.call(null,seq__26752_26756);
if(temp__4657__auto___26765){
var seq__26752_26766__$1 = temp__4657__auto___26765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26752_26766__$1)){
var c__19173__auto___26767 = cljs.core.chunk_first.call(null,seq__26752_26766__$1);
var G__26768 = cljs.core.chunk_rest.call(null,seq__26752_26766__$1);
var G__26769 = c__19173__auto___26767;
var G__26770 = cljs.core.count.call(null,c__19173__auto___26767);
var G__26771 = (0);
seq__26752_26756 = G__26768;
chunk__26753_26757 = G__26769;
count__26754_26758 = G__26770;
i__26755_26759 = G__26771;
continue;
} else {
var f_26772 = cljs.core.first.call(null,seq__26752_26766__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26772);

var G__26773 = cljs.core.next.call(null,seq__26752_26766__$1);
var G__26774 = null;
var G__26775 = (0);
var G__26776 = (0);
seq__26752_26756 = G__26773;
chunk__26753_26757 = G__26774;
count__26754_26758 = G__26775;
i__26755_26759 = G__26776;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26750,map__26750__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26750,map__26750__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map