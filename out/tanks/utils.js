// Compiled by ClojureScript 1.7.228 {}
goog.provide('tanks.utils');
goog.require('cljs.core');
tanks.utils.log = (function tanks$utils$log(str){
return cljs.core.prn.call(null,str);
});
tanks.utils.quad_tree = (function tanks$utils$quad_tree(max,b){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"box","box",1530920394),b,new cljs.core.Keyword(null,"north-east","north-east",-1650651668),null,new cljs.core.Keyword(null,"south-east","south-east",249646387),null,new cljs.core.Keyword(null,"south-west","south-west",2040517871),null,new cljs.core.Keyword(null,"north-west","north-west",15898313),null], null);
});
tanks.utils.directions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north-east","north-east",-1650651668),new cljs.core.Keyword(null,"north-west","north-west",15898313),new cljs.core.Keyword(null,"south-west","south-west",2040517871),new cljs.core.Keyword(null,"south-east","south-east",249646387)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tanks.utils.Rect = (function (x,y,w,h,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
tanks.utils.Rect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18984__auto__,k__18985__auto__){
var self__ = this;
var this__18984__auto____$1 = this;
return cljs.core._lookup.call(null,this__18984__auto____$1,k__18985__auto__,null);
});

tanks.utils.Rect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18986__auto__,k22721,else__18987__auto__){
var self__ = this;
var this__18986__auto____$1 = this;
var G__22723 = (((k22721 instanceof cljs.core.Keyword))?k22721.fqn:null);
switch (G__22723) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22721,else__18987__auto__);

}
});

tanks.utils.Rect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18998__auto__,writer__18999__auto__,opts__19000__auto__){
var self__ = this;
var this__18998__auto____$1 = this;
var pr_pair__19001__auto__ = ((function (this__18998__auto____$1){
return (function (keyval__19002__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,cljs.core.pr_writer,""," ","",opts__19000__auto__,keyval__19002__auto__);
});})(this__18998__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,pr_pair__19001__auto__,"#tanks.utils.Rect{",", ","}",opts__19000__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

tanks.utils.Rect.prototype.cljs$core$IIterable$ = true;

tanks.utils.Rect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22720){
var self__ = this;
var G__22720__$1 = this;
return (new cljs.core.RecordIter((0),G__22720__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

tanks.utils.Rect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18982__auto__){
var self__ = this;
var this__18982__auto____$1 = this;
return self__.__meta;
});

tanks.utils.Rect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18978__auto__){
var self__ = this;
var this__18978__auto____$1 = this;
return (new tanks.utils.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

tanks.utils.Rect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18988__auto__){
var self__ = this;
var this__18988__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

tanks.utils.Rect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18979__auto__){
var self__ = this;
var this__18979__auto____$1 = this;
var h__18805__auto__ = self__.__hash;
if(!((h__18805__auto__ == null))){
return h__18805__auto__;
} else {
var h__18805__auto____$1 = cljs.core.hash_imap.call(null,this__18979__auto____$1);
self__.__hash = h__18805__auto____$1;

return h__18805__auto____$1;
}
});

tanks.utils.Rect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18980__auto__,other__18981__auto__){
var self__ = this;
var this__18980__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18358__auto__ = other__18981__auto__;
if(cljs.core.truth_(and__18358__auto__)){
var and__18358__auto____$1 = (this__18980__auto____$1.constructor === other__18981__auto__.constructor);
if(and__18358__auto____$1){
return cljs.core.equiv_map.call(null,this__18980__auto____$1,other__18981__auto__);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
})())){
return true;
} else {
return false;
}
});

tanks.utils.Rect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18993__auto__,k__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__18994__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18993__auto____$1),self__.__meta),k__18994__auto__);
} else {
return (new tanks.utils.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18994__auto__)),null));
}
});

tanks.utils.Rect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18991__auto__,k__18992__auto__,G__22720){
var self__ = this;
var this__18991__auto____$1 = this;
var pred__22724 = cljs.core.keyword_identical_QMARK_;
var expr__22725 = k__18992__auto__;
if(cljs.core.truth_(pred__22724.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22725))){
return (new tanks.utils.Rect(G__22720,self__.y,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22724.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22725))){
return (new tanks.utils.Rect(self__.x,G__22720,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22724.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22725))){
return (new tanks.utils.Rect(self__.x,self__.y,G__22720,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22724.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22725))){
return (new tanks.utils.Rect(self__.x,self__.y,self__.w,G__22720,self__.__meta,self__.__extmap,null));
} else {
return (new tanks.utils.Rect(self__.x,self__.y,self__.w,self__.h,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18992__auto__,G__22720),null));
}
}
}
}
});

tanks.utils.Rect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18996__auto__){
var self__ = this;
var this__18996__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

tanks.utils.Rect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18983__auto__,G__22720){
var self__ = this;
var this__18983__auto____$1 = this;
return (new tanks.utils.Rect(self__.x,self__.y,self__.w,self__.h,G__22720,self__.__extmap,self__.__hash));
});

tanks.utils.Rect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18989__auto__,entry__18990__auto__){
var self__ = this;
var this__18989__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18990__auto__)){
return cljs.core._assoc.call(null,this__18989__auto____$1,cljs.core._nth.call(null,entry__18990__auto__,(0)),cljs.core._nth.call(null,entry__18990__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18989__auto____$1,entry__18990__auto__);
}
});

tanks.utils.Rect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

tanks.utils.Rect.cljs$lang$type = true;

tanks.utils.Rect.cljs$lang$ctorPrSeq = (function (this__19018__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"tanks.utils/Rect");
});

tanks.utils.Rect.cljs$lang$ctorPrWriter = (function (this__19018__auto__,writer__19019__auto__){
return cljs.core._write.call(null,writer__19019__auto__,"tanks.utils/Rect");
});

tanks.utils.__GT_Rect = (function tanks$utils$__GT_Rect(x,y,w,h){
return (new tanks.utils.Rect(x,y,w,h,null,null,null));
});

tanks.utils.map__GT_Rect = (function tanks$utils$map__GT_Rect(G__22722){
return (new tanks.utils.Rect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22722),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22722),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22722),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22722),null,cljs.core.dissoc.call(null,G__22722,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tanks.utils.Point = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
tanks.utils.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18984__auto__,k__18985__auto__){
var self__ = this;
var this__18984__auto____$1 = this;
return cljs.core._lookup.call(null,this__18984__auto____$1,k__18985__auto__,null);
});

tanks.utils.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18986__auto__,k22729,else__18987__auto__){
var self__ = this;
var this__18986__auto____$1 = this;
var G__22731 = (((k22729 instanceof cljs.core.Keyword))?k22729.fqn:null);
switch (G__22731) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22729,else__18987__auto__);

}
});

tanks.utils.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18998__auto__,writer__18999__auto__,opts__19000__auto__){
var self__ = this;
var this__18998__auto____$1 = this;
var pr_pair__19001__auto__ = ((function (this__18998__auto____$1){
return (function (keyval__19002__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,cljs.core.pr_writer,""," ","",opts__19000__auto__,keyval__19002__auto__);
});})(this__18998__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18999__auto__,pr_pair__19001__auto__,"#tanks.utils.Point{",", ","}",opts__19000__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

tanks.utils.Point.prototype.cljs$core$IIterable$ = true;

tanks.utils.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22728){
var self__ = this;
var G__22728__$1 = this;
return (new cljs.core.RecordIter((0),G__22728__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

tanks.utils.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18982__auto__){
var self__ = this;
var this__18982__auto____$1 = this;
return self__.__meta;
});

tanks.utils.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18978__auto__){
var self__ = this;
var this__18978__auto____$1 = this;
return (new tanks.utils.Point(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

tanks.utils.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18988__auto__){
var self__ = this;
var this__18988__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

tanks.utils.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18979__auto__){
var self__ = this;
var this__18979__auto____$1 = this;
var h__18805__auto__ = self__.__hash;
if(!((h__18805__auto__ == null))){
return h__18805__auto__;
} else {
var h__18805__auto____$1 = cljs.core.hash_imap.call(null,this__18979__auto____$1);
self__.__hash = h__18805__auto____$1;

return h__18805__auto____$1;
}
});

tanks.utils.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18980__auto__,other__18981__auto__){
var self__ = this;
var this__18980__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18358__auto__ = other__18981__auto__;
if(cljs.core.truth_(and__18358__auto__)){
var and__18358__auto____$1 = (this__18980__auto____$1.constructor === other__18981__auto__.constructor);
if(and__18358__auto____$1){
return cljs.core.equiv_map.call(null,this__18980__auto____$1,other__18981__auto__);
} else {
return and__18358__auto____$1;
}
} else {
return and__18358__auto__;
}
})())){
return true;
} else {
return false;
}
});

tanks.utils.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18993__auto__,k__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__18994__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18993__auto____$1),self__.__meta),k__18994__auto__);
} else {
return (new tanks.utils.Point(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18994__auto__)),null));
}
});

tanks.utils.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18991__auto__,k__18992__auto__,G__22728){
var self__ = this;
var this__18991__auto____$1 = this;
var pred__22732 = cljs.core.keyword_identical_QMARK_;
var expr__22733 = k__18992__auto__;
if(cljs.core.truth_(pred__22732.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22733))){
return (new tanks.utils.Point(G__22728,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22732.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22733))){
return (new tanks.utils.Point(self__.x,G__22728,self__.__meta,self__.__extmap,null));
} else {
return (new tanks.utils.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18992__auto__,G__22728),null));
}
}
});

tanks.utils.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18996__auto__){
var self__ = this;
var this__18996__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

tanks.utils.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18983__auto__,G__22728){
var self__ = this;
var this__18983__auto____$1 = this;
return (new tanks.utils.Point(self__.x,self__.y,G__22728,self__.__extmap,self__.__hash));
});

tanks.utils.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18989__auto__,entry__18990__auto__){
var self__ = this;
var this__18989__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18990__auto__)){
return cljs.core._assoc.call(null,this__18989__auto____$1,cljs.core._nth.call(null,entry__18990__auto__,(0)),cljs.core._nth.call(null,entry__18990__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18989__auto____$1,entry__18990__auto__);
}
});

tanks.utils.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

tanks.utils.Point.cljs$lang$type = true;

tanks.utils.Point.cljs$lang$ctorPrSeq = (function (this__19018__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"tanks.utils/Point");
});

tanks.utils.Point.cljs$lang$ctorPrWriter = (function (this__19018__auto__,writer__19019__auto__){
return cljs.core._write.call(null,writer__19019__auto__,"tanks.utils/Point");
});

tanks.utils.__GT_Point = (function tanks$utils$__GT_Point(x,y){
return (new tanks.utils.Point(x,y,null,null,null));
});

tanks.utils.map__GT_Point = (function tanks$utils$map__GT_Point(G__22730){
return (new tanks.utils.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22730),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22730),null,cljs.core.dissoc.call(null,G__22730,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});

tanks.utils.contained_in_QMARK_ = (function tanks$utils$contained_in_QMARK_(box,p){
var map__22740 = p;
var map__22740__$1 = ((((!((map__22740 == null)))?((((map__22740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22740):map__22740);
var px = cljs.core.get.call(null,map__22740__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__22740__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22741 = box;
var map__22741__$1 = ((((!((map__22741 == null)))?((((map__22741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22741):map__22741);
var x = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__22741__$1,new cljs.core.Keyword(null,"h","h",1109658740));
return ((px >= x)) && ((px < (x + w))) && ((py >= y)) && ((py < (y + h)));
});
tanks.utils.sub_divide = (function tanks$utils$sub_divide(box){

var map__22746 = box;
var map__22746__$1 = ((((!((map__22746 == null)))?((((map__22746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22746):map__22746);
var x = cljs.core.get.call(null,map__22746__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22746__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__22746__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__22746__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var h2 = Math.floor((h / (2)));
var w2 = Math.floor((w / (2)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north-west","north-west",15898313),tanks.utils.quad_tree.call(null,(3),tanks.utils.Rect.call(null,x,y,w2,h2)),new cljs.core.Keyword(null,"north-east","north-east",-1650651668),tanks.utils.quad_tree.call(null,(3),tanks.utils.Rect.call(null,(x + w2),y,w2,h2)),new cljs.core.Keyword(null,"south-east","south-east",249646387),tanks.utils.quad_tree.call(null,(3),tanks.utils.Rect.call(null,(x + w2),(y + h2),w2,h2)),new cljs.core.Keyword(null,"south-west","south-west",2040517871),tanks.utils.quad_tree.call(null,(3),tanks.utils.Rect.call(null,x,(y + h2),w2,h2))], null);
});
tanks.utils.quad_tree_find = (function tanks$utils$quad_tree_find(quad_tree,p){
if(cljs.core.truth_(tanks.utils.point_in_QMARK_.call(null,quad_tree.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)),p))){
return p;
} else {
if((quad_tree.call(null,new cljs.core.Keyword(null,"north-west","north-west",15898313)) == null)){
return null;
} else {
var quad_tree__$1 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22748_SHARP_){
return tanks.utils.contained_in_QMARK_.call(null,p1__22748_SHARP_.call(null,new cljs.core.Keyword(null,"box","box",1530920394)),p);
}),cljs.core.map.call(null,quad_tree,tanks.utils.directions)));
return tanks$utils$quad_tree_find.call(null,quad_tree__$1,p);

}
}
});
tanks.utils.point_in_QMARK_ = (function tanks$utils$point_in_QMARK_(points,p){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,p),points);
});
tanks.utils.in_tree_QMARK_ = (function tanks$utils$in_tree_QMARK_(p,tree){
return tanks.utils.contained_in_QMARK_.call(null,tree.call(null,new cljs.core.Keyword(null,"box","box",1530920394)),p);
});
tanks.utils.can_add_QMARK_ = (function tanks$utils$can_add_QMARK_(node,p){
return (cljs.core.count.call(null,node.call(null,new cljs.core.Keyword(null,"points","points",-1486596883))) < node.call(null,new cljs.core.Keyword(null,"max","max",61366548)));
});
tanks.utils.find_quadrant = (function tanks$utils$find_quadrant(node,p){
return cljs.core.first.call(null,(function (){var iter__19142__auto__ = (function tanks$utils$find_quadrant_$_iter__22753(s__22754){
return (new cljs.core.LazySeq(null,(function (){
var s__22754__$1 = s__22754;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22754__$1);
if(temp__4657__auto__){
var s__22754__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22754__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__22754__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__22756 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__22755 = (0);
while(true){
if((i__22755 < size__19141__auto__)){
var x = cljs.core._nth.call(null,c__19140__auto__,i__22755);
var item = cljs.core.first.call(null,cljs.core.vals.call(null,x));
if(cljs.core.truth_(tanks.utils.in_tree_QMARK_.call(null,p,item))){
cljs.core.chunk_append.call(null,b__22756,x);

var G__22757 = (i__22755 + (1));
i__22755 = G__22757;
continue;
} else {
var G__22758 = (i__22755 + (1));
i__22755 = G__22758;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22756),tanks$utils$find_quadrant_$_iter__22753.call(null,cljs.core.chunk_rest.call(null,s__22754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22756),null);
}
} else {
var x = cljs.core.first.call(null,s__22754__$2);
var item = cljs.core.first.call(null,cljs.core.vals.call(null,x));
if(cljs.core.truth_(tanks.utils.in_tree_QMARK_.call(null,p,item))){
return cljs.core.cons.call(null,x,tanks$utils$find_quadrant_$_iter__22753.call(null,cljs.core.rest.call(null,s__22754__$2)));
} else {
var G__22759 = cljs.core.rest.call(null,s__22754__$2);
s__22754__$1 = G__22759;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19142__auto__.call(null,cljs.core.map.call(null,((function (iter__19142__auto__){
return (function (x){
if((node.call(null,x) == null)){
return null;
} else {
return cljs.core.PersistentArrayMap.fromArray([x,node.call(null,x)], true, false);
}
});})(iter__19142__auto__))
,tanks.utils.directions));
})());
});
tanks.utils.quad_tree_insert = (function tanks$utils$quad_tree_insert(node,x,y){
var box = node.call(null,new cljs.core.Keyword(null,"box","box",1530920394));
var p = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.truth_(tanks.utils.can_add_QMARK_.call(null,node,p))){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.conj,p);
} else {
var new_node = (((node.call(null,new cljs.core.Keyword(null,"north-west","north-west",15898313)) == null))?cljs.core.merge.call(null,node,tanks.utils.sub_divide.call(null,node.call(null,new cljs.core.Keyword(null,"box","box",1530920394)))):node);
var found = tanks.utils.find_quadrant.call(null,new_node,p);
var quad = cljs.core.first.call(null,cljs.core.keys.call(null,found));
var the_tree = cljs.core.first.call(null,cljs.core.vals.call(null,found));
return cljs.core.assoc.call(null,new_node,quad,tanks$utils$quad_tree_insert.call(null,the_tree,x,y));

}
});

//# sourceMappingURL=utils.js.map