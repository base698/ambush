// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22903 = [];
var len__19428__auto___22909 = arguments.length;
var i__19429__auto___22910 = (0);
while(true){
if((i__19429__auto___22910 < len__19428__auto___22909)){
args22903.push((arguments[i__19429__auto___22910]));

var G__22911 = (i__19429__auto___22910 + (1));
i__19429__auto___22910 = G__22911;
continue;
} else {
}
break;
}

var G__22905 = args22903.length;
switch (G__22905) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22903.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22906 = (function (f,blockable,meta22907){
this.f = f;
this.blockable = blockable;
this.meta22907 = meta22907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22908,meta22907__$1){
var self__ = this;
var _22908__$1 = this;
return (new cljs.core.async.t_cljs$core$async22906(self__.f,self__.blockable,meta22907__$1));
});

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22908){
var self__ = this;
var _22908__$1 = this;
return self__.meta22907;
});

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22907","meta22907",-656830583,null)], null);
});

cljs.core.async.t_cljs$core$async22906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22906";

cljs.core.async.t_cljs$core$async22906.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22906");
});

cljs.core.async.__GT_t_cljs$core$async22906 = (function cljs$core$async$__GT_t_cljs$core$async22906(f__$1,blockable__$1,meta22907){
return (new cljs.core.async.t_cljs$core$async22906(f__$1,blockable__$1,meta22907));
});

}

return (new cljs.core.async.t_cljs$core$async22906(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22915 = [];
var len__19428__auto___22918 = arguments.length;
var i__19429__auto___22919 = (0);
while(true){
if((i__19429__auto___22919 < len__19428__auto___22918)){
args22915.push((arguments[i__19429__auto___22919]));

var G__22920 = (i__19429__auto___22919 + (1));
i__19429__auto___22919 = G__22920;
continue;
} else {
}
break;
}

var G__22917 = args22915.length;
switch (G__22917) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22915.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22922 = [];
var len__19428__auto___22925 = arguments.length;
var i__19429__auto___22926 = (0);
while(true){
if((i__19429__auto___22926 < len__19428__auto___22925)){
args22922.push((arguments[i__19429__auto___22926]));

var G__22927 = (i__19429__auto___22926 + (1));
i__19429__auto___22926 = G__22927;
continue;
} else {
}
break;
}

var G__22924 = args22922.length;
switch (G__22924) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22922.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22929 = [];
var len__19428__auto___22932 = arguments.length;
var i__19429__auto___22933 = (0);
while(true){
if((i__19429__auto___22933 < len__19428__auto___22932)){
args22929.push((arguments[i__19429__auto___22933]));

var G__22934 = (i__19429__auto___22933 + (1));
i__19429__auto___22933 = G__22934;
continue;
} else {
}
break;
}

var G__22931 = args22929.length;
switch (G__22931) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22929.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22936 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22936);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22936,ret){
return (function (){
return fn1.call(null,val_22936);
});})(val_22936,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22937 = [];
var len__19428__auto___22940 = arguments.length;
var i__19429__auto___22941 = (0);
while(true){
if((i__19429__auto___22941 < len__19428__auto___22940)){
args22937.push((arguments[i__19429__auto___22941]));

var G__22942 = (i__19429__auto___22941 + (1));
i__19429__auto___22941 = G__22942;
continue;
} else {
}
break;
}

var G__22939 = args22937.length;
switch (G__22939) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22937.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19273__auto___22944 = n;
var x_22945 = (0);
while(true){
if((x_22945 < n__19273__auto___22944)){
(a[x_22945] = (0));

var G__22946 = (x_22945 + (1));
x_22945 = G__22946;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22947 = (i + (1));
i = G__22947;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22951 = (function (alt_flag,flag,meta22952){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22952 = meta22952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22953,meta22952__$1){
var self__ = this;
var _22953__$1 = this;
return (new cljs.core.async.t_cljs$core$async22951(self__.alt_flag,self__.flag,meta22952__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22953){
var self__ = this;
var _22953__$1 = this;
return self__.meta22952;
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22952","meta22952",567970770,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22951";

cljs.core.async.t_cljs$core$async22951.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22951");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22951 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22951(alt_flag__$1,flag__$1,meta22952){
return (new cljs.core.async.t_cljs$core$async22951(alt_flag__$1,flag__$1,meta22952));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22951(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22957 = (function (alt_handler,flag,cb,meta22958){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22958 = meta22958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22959,meta22958__$1){
var self__ = this;
var _22959__$1 = this;
return (new cljs.core.async.t_cljs$core$async22957(self__.alt_handler,self__.flag,self__.cb,meta22958__$1));
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22959){
var self__ = this;
var _22959__$1 = this;
return self__.meta22958;
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22958","meta22958",-1749168843,null)], null);
});

cljs.core.async.t_cljs$core$async22957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22957";

cljs.core.async.t_cljs$core$async22957.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22957");
});

cljs.core.async.__GT_t_cljs$core$async22957 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22957(alt_handler__$1,flag__$1,cb__$1,meta22958){
return (new cljs.core.async.t_cljs$core$async22957(alt_handler__$1,flag__$1,cb__$1,meta22958));
});

}

return (new cljs.core.async.t_cljs$core$async22957(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22960_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22960_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22961_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22961_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22962 = (i + (1));
i = G__22962;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22968 = arguments.length;
var i__19429__auto___22969 = (0);
while(true){
if((i__19429__auto___22969 < len__19428__auto___22968)){
args__19435__auto__.push((arguments[i__19429__auto___22969]));

var G__22970 = (i__19429__auto___22969 + (1));
i__19429__auto___22969 = G__22970;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22965){
var map__22966 = p__22965;
var map__22966__$1 = ((((!((map__22966 == null)))?((((map__22966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22966):map__22966);
var opts = map__22966__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22963){
var G__22964 = cljs.core.first.call(null,seq22963);
var seq22963__$1 = cljs.core.next.call(null,seq22963);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22964,seq22963__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22971 = [];
var len__19428__auto___23021 = arguments.length;
var i__19429__auto___23022 = (0);
while(true){
if((i__19429__auto___23022 < len__19428__auto___23021)){
args22971.push((arguments[i__19429__auto___23022]));

var G__23023 = (i__19429__auto___23022 + (1));
i__19429__auto___23022 = G__23023;
continue;
} else {
}
break;
}

var G__22973 = args22971.length;
switch (G__22973) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22971.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20381__auto___23025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___23025){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___23025){
return (function (state_22997){
var state_val_22998 = (state_22997[(1)]);
if((state_val_22998 === (7))){
var inst_22993 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
var statearr_22999_23026 = state_22997__$1;
(statearr_22999_23026[(2)] = inst_22993);

(statearr_22999_23026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (1))){
var state_22997__$1 = state_22997;
var statearr_23000_23027 = state_22997__$1;
(statearr_23000_23027[(2)] = null);

(statearr_23000_23027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (4))){
var inst_22976 = (state_22997[(7)]);
var inst_22976__$1 = (state_22997[(2)]);
var inst_22977 = (inst_22976__$1 == null);
var state_22997__$1 = (function (){var statearr_23001 = state_22997;
(statearr_23001[(7)] = inst_22976__$1);

return statearr_23001;
})();
if(cljs.core.truth_(inst_22977)){
var statearr_23002_23028 = state_22997__$1;
(statearr_23002_23028[(1)] = (5));

} else {
var statearr_23003_23029 = state_22997__$1;
(statearr_23003_23029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (13))){
var state_22997__$1 = state_22997;
var statearr_23004_23030 = state_22997__$1;
(statearr_23004_23030[(2)] = null);

(statearr_23004_23030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (6))){
var inst_22976 = (state_22997[(7)]);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22997__$1,(11),to,inst_22976);
} else {
if((state_val_22998 === (3))){
var inst_22995 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22997__$1,inst_22995);
} else {
if((state_val_22998 === (12))){
var state_22997__$1 = state_22997;
var statearr_23005_23031 = state_22997__$1;
(statearr_23005_23031[(2)] = null);

(statearr_23005_23031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (2))){
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22997__$1,(4),from);
} else {
if((state_val_22998 === (11))){
var inst_22986 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
if(cljs.core.truth_(inst_22986)){
var statearr_23006_23032 = state_22997__$1;
(statearr_23006_23032[(1)] = (12));

} else {
var statearr_23007_23033 = state_22997__$1;
(statearr_23007_23033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (9))){
var state_22997__$1 = state_22997;
var statearr_23008_23034 = state_22997__$1;
(statearr_23008_23034[(2)] = null);

(statearr_23008_23034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (5))){
var state_22997__$1 = state_22997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23009_23035 = state_22997__$1;
(statearr_23009_23035[(1)] = (8));

} else {
var statearr_23010_23036 = state_22997__$1;
(statearr_23010_23036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (14))){
var inst_22991 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
var statearr_23011_23037 = state_22997__$1;
(statearr_23011_23037[(2)] = inst_22991);

(statearr_23011_23037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (10))){
var inst_22983 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
var statearr_23012_23038 = state_22997__$1;
(statearr_23012_23038[(2)] = inst_22983);

(statearr_23012_23038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (8))){
var inst_22980 = cljs.core.async.close_BANG_.call(null,to);
var state_22997__$1 = state_22997;
var statearr_23013_23039 = state_22997__$1;
(statearr_23013_23039[(2)] = inst_22980);

(statearr_23013_23039[(1)] = (10));


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
});})(c__20381__auto___23025))
;
return ((function (switch__20360__auto__,c__20381__auto___23025){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_23017 = [null,null,null,null,null,null,null,null];
(statearr_23017[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_23017[(1)] = (1));

return statearr_23017;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_22997){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_22997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23018){if((e23018 instanceof Object)){
var ex__20364__auto__ = e23018;
var statearr_23019_23040 = state_22997;
(statearr_23019_23040[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23041 = state_22997;
state_22997 = G__23041;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_22997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_22997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___23025))
})();
var state__20383__auto__ = (function (){var statearr_23020 = f__20382__auto__.call(null);
(statearr_23020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23025);

return statearr_23020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___23025))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23225){
var vec__23226 = p__23225;
var v = cljs.core.nth.call(null,vec__23226,(0),null);
var p = cljs.core.nth.call(null,vec__23226,(1),null);
var job = vec__23226;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20381__auto___23408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results){
return (function (state_23231){
var state_val_23232 = (state_23231[(1)]);
if((state_val_23232 === (1))){
var state_23231__$1 = state_23231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23231__$1,(2),res,v);
} else {
if((state_val_23232 === (2))){
var inst_23228 = (state_23231[(2)]);
var inst_23229 = cljs.core.async.close_BANG_.call(null,res);
var state_23231__$1 = (function (){var statearr_23233 = state_23231;
(statearr_23233[(7)] = inst_23228);

return statearr_23233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23231__$1,inst_23229);
} else {
return null;
}
}
});})(c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results))
;
return ((function (switch__20360__auto__,c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_23237 = [null,null,null,null,null,null,null,null];
(statearr_23237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__);

(statearr_23237[(1)] = (1));

return statearr_23237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1 = (function (state_23231){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23238){if((e23238 instanceof Object)){
var ex__20364__auto__ = e23238;
var statearr_23239_23409 = state_23231;
(statearr_23239_23409[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23410 = state_23231;
state_23231 = G__23410;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = function(state_23231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1.call(this,state_23231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results))
})();
var state__20383__auto__ = (function (){var statearr_23240 = f__20382__auto__.call(null);
(statearr_23240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23408);

return statearr_23240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___23408,res,vec__23226,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23241){
var vec__23242 = p__23241;
var v = cljs.core.nth.call(null,vec__23242,(0),null);
var p = cljs.core.nth.call(null,vec__23242,(1),null);
var job = vec__23242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19273__auto___23411 = n;
var __23412 = (0);
while(true){
if((__23412 < n__19273__auto___23411)){
var G__23243_23413 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23243_23413) {
case "compute":
var c__20381__auto___23415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23412,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (__23412,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function (state_23256){
var state_val_23257 = (state_23256[(1)]);
if((state_val_23257 === (1))){
var state_23256__$1 = state_23256;
var statearr_23258_23416 = state_23256__$1;
(statearr_23258_23416[(2)] = null);

(statearr_23258_23416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (2))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(4),jobs);
} else {
if((state_val_23257 === (3))){
var inst_23254 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23256__$1,inst_23254);
} else {
if((state_val_23257 === (4))){
var inst_23246 = (state_23256[(2)]);
var inst_23247 = process.call(null,inst_23246);
var state_23256__$1 = state_23256;
if(cljs.core.truth_(inst_23247)){
var statearr_23259_23417 = state_23256__$1;
(statearr_23259_23417[(1)] = (5));

} else {
var statearr_23260_23418 = state_23256__$1;
(statearr_23260_23418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (5))){
var state_23256__$1 = state_23256;
var statearr_23261_23419 = state_23256__$1;
(statearr_23261_23419[(2)] = null);

(statearr_23261_23419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (6))){
var state_23256__$1 = state_23256;
var statearr_23262_23420 = state_23256__$1;
(statearr_23262_23420[(2)] = null);

(statearr_23262_23420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (7))){
var inst_23252 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23263_23421 = state_23256__$1;
(statearr_23263_23421[(2)] = inst_23252);

(statearr_23263_23421[(1)] = (3));


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
});})(__23412,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
;
return ((function (__23412,switch__20360__auto__,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_23267 = [null,null,null,null,null,null,null];
(statearr_23267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__);

(statearr_23267[(1)] = (1));

return statearr_23267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1 = (function (state_23256){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23268){if((e23268 instanceof Object)){
var ex__20364__auto__ = e23268;
var statearr_23269_23422 = state_23256;
(statearr_23269_23422[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23423 = state_23256;
state_23256 = G__23423;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = function(state_23256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1.call(this,state_23256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__;
})()
;})(__23412,switch__20360__auto__,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
})();
var state__20383__auto__ = (function (){var statearr_23270 = f__20382__auto__.call(null);
(statearr_23270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23415);

return statearr_23270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(__23412,c__20381__auto___23415,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
);


break;
case "async":
var c__20381__auto___23424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23412,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (__23412,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function (state_23283){
var state_val_23284 = (state_23283[(1)]);
if((state_val_23284 === (1))){
var state_23283__$1 = state_23283;
var statearr_23285_23425 = state_23283__$1;
(statearr_23285_23425[(2)] = null);

(statearr_23285_23425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (2))){
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,(4),jobs);
} else {
if((state_val_23284 === (3))){
var inst_23281 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23283__$1,inst_23281);
} else {
if((state_val_23284 === (4))){
var inst_23273 = (state_23283[(2)]);
var inst_23274 = async.call(null,inst_23273);
var state_23283__$1 = state_23283;
if(cljs.core.truth_(inst_23274)){
var statearr_23286_23426 = state_23283__$1;
(statearr_23286_23426[(1)] = (5));

} else {
var statearr_23287_23427 = state_23283__$1;
(statearr_23287_23427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (5))){
var state_23283__$1 = state_23283;
var statearr_23288_23428 = state_23283__$1;
(statearr_23288_23428[(2)] = null);

(statearr_23288_23428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (6))){
var state_23283__$1 = state_23283;
var statearr_23289_23429 = state_23283__$1;
(statearr_23289_23429[(2)] = null);

(statearr_23289_23429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (7))){
var inst_23279 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23290_23430 = state_23283__$1;
(statearr_23290_23430[(2)] = inst_23279);

(statearr_23290_23430[(1)] = (3));


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
});})(__23412,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
;
return ((function (__23412,switch__20360__auto__,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_23294 = [null,null,null,null,null,null,null];
(statearr_23294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__);

(statearr_23294[(1)] = (1));

return statearr_23294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1 = (function (state_23283){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23295){if((e23295 instanceof Object)){
var ex__20364__auto__ = e23295;
var statearr_23296_23431 = state_23283;
(statearr_23296_23431[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23432 = state_23283;
state_23283 = G__23432;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__;
})()
;})(__23412,switch__20360__auto__,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
})();
var state__20383__auto__ = (function (){var statearr_23297 = f__20382__auto__.call(null);
(statearr_23297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23424);

return statearr_23297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(__23412,c__20381__auto___23424,G__23243_23413,n__19273__auto___23411,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23433 = (__23412 + (1));
__23412 = G__23433;
continue;
} else {
}
break;
}

var c__20381__auto___23434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___23434,jobs,results,process,async){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___23434,jobs,results,process,async){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (1))){
var state_23319__$1 = state_23319;
var statearr_23321_23435 = state_23319__$1;
(statearr_23321_23435[(2)] = null);

(statearr_23321_23435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (2))){
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(4),from);
} else {
if((state_val_23320 === (3))){
var inst_23317 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
if((state_val_23320 === (4))){
var inst_23300 = (state_23319[(7)]);
var inst_23300__$1 = (state_23319[(2)]);
var inst_23301 = (inst_23300__$1 == null);
var state_23319__$1 = (function (){var statearr_23322 = state_23319;
(statearr_23322[(7)] = inst_23300__$1);

return statearr_23322;
})();
if(cljs.core.truth_(inst_23301)){
var statearr_23323_23436 = state_23319__$1;
(statearr_23323_23436[(1)] = (5));

} else {
var statearr_23324_23437 = state_23319__$1;
(statearr_23324_23437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (5))){
var inst_23303 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23319__$1 = state_23319;
var statearr_23325_23438 = state_23319__$1;
(statearr_23325_23438[(2)] = inst_23303);

(statearr_23325_23438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (6))){
var inst_23300 = (state_23319[(7)]);
var inst_23305 = (state_23319[(8)]);
var inst_23305__$1 = cljs.core.async.chan.call(null,(1));
var inst_23306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23307 = [inst_23300,inst_23305__$1];
var inst_23308 = (new cljs.core.PersistentVector(null,2,(5),inst_23306,inst_23307,null));
var state_23319__$1 = (function (){var statearr_23326 = state_23319;
(statearr_23326[(8)] = inst_23305__$1);

return statearr_23326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(8),jobs,inst_23308);
} else {
if((state_val_23320 === (7))){
var inst_23315 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23327_23439 = state_23319__$1;
(statearr_23327_23439[(2)] = inst_23315);

(statearr_23327_23439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (8))){
var inst_23305 = (state_23319[(8)]);
var inst_23310 = (state_23319[(2)]);
var state_23319__$1 = (function (){var statearr_23328 = state_23319;
(statearr_23328[(9)] = inst_23310);

return statearr_23328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(9),results,inst_23305);
} else {
if((state_val_23320 === (9))){
var inst_23312 = (state_23319[(2)]);
var state_23319__$1 = (function (){var statearr_23329 = state_23319;
(statearr_23329[(10)] = inst_23312);

return statearr_23329;
})();
var statearr_23330_23440 = state_23319__$1;
(statearr_23330_23440[(2)] = null);

(statearr_23330_23440[(1)] = (2));


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
});})(c__20381__auto___23434,jobs,results,process,async))
;
return ((function (switch__20360__auto__,c__20381__auto___23434,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_23334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__);

(statearr_23334[(1)] = (1));

return statearr_23334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1 = (function (state_23319){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23335){if((e23335 instanceof Object)){
var ex__20364__auto__ = e23335;
var statearr_23336_23441 = state_23319;
(statearr_23336_23441[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23442 = state_23319;
state_23319 = G__23442;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___23434,jobs,results,process,async))
})();
var state__20383__auto__ = (function (){var statearr_23337 = f__20382__auto__.call(null);
(statearr_23337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23434);

return statearr_23337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___23434,jobs,results,process,async))
);


var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__,jobs,results,process,async){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__,jobs,results,process,async){
return (function (state_23375){
var state_val_23376 = (state_23375[(1)]);
if((state_val_23376 === (7))){
var inst_23371 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23377_23443 = state_23375__$1;
(statearr_23377_23443[(2)] = inst_23371);

(statearr_23377_23443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (20))){
var state_23375__$1 = state_23375;
var statearr_23378_23444 = state_23375__$1;
(statearr_23378_23444[(2)] = null);

(statearr_23378_23444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (1))){
var state_23375__$1 = state_23375;
var statearr_23379_23445 = state_23375__$1;
(statearr_23379_23445[(2)] = null);

(statearr_23379_23445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (4))){
var inst_23340 = (state_23375[(7)]);
var inst_23340__$1 = (state_23375[(2)]);
var inst_23341 = (inst_23340__$1 == null);
var state_23375__$1 = (function (){var statearr_23380 = state_23375;
(statearr_23380[(7)] = inst_23340__$1);

return statearr_23380;
})();
if(cljs.core.truth_(inst_23341)){
var statearr_23381_23446 = state_23375__$1;
(statearr_23381_23446[(1)] = (5));

} else {
var statearr_23382_23447 = state_23375__$1;
(statearr_23382_23447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (15))){
var inst_23353 = (state_23375[(8)]);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23375__$1,(18),to,inst_23353);
} else {
if((state_val_23376 === (21))){
var inst_23366 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23383_23448 = state_23375__$1;
(statearr_23383_23448[(2)] = inst_23366);

(statearr_23383_23448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (13))){
var inst_23368 = (state_23375[(2)]);
var state_23375__$1 = (function (){var statearr_23384 = state_23375;
(statearr_23384[(9)] = inst_23368);

return statearr_23384;
})();
var statearr_23385_23449 = state_23375__$1;
(statearr_23385_23449[(2)] = null);

(statearr_23385_23449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (6))){
var inst_23340 = (state_23375[(7)]);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23375__$1,(11),inst_23340);
} else {
if((state_val_23376 === (17))){
var inst_23361 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
if(cljs.core.truth_(inst_23361)){
var statearr_23386_23450 = state_23375__$1;
(statearr_23386_23450[(1)] = (19));

} else {
var statearr_23387_23451 = state_23375__$1;
(statearr_23387_23451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (3))){
var inst_23373 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23375__$1,inst_23373);
} else {
if((state_val_23376 === (12))){
var inst_23350 = (state_23375[(10)]);
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23375__$1,(14),inst_23350);
} else {
if((state_val_23376 === (2))){
var state_23375__$1 = state_23375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23375__$1,(4),results);
} else {
if((state_val_23376 === (19))){
var state_23375__$1 = state_23375;
var statearr_23388_23452 = state_23375__$1;
(statearr_23388_23452[(2)] = null);

(statearr_23388_23452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (11))){
var inst_23350 = (state_23375[(2)]);
var state_23375__$1 = (function (){var statearr_23389 = state_23375;
(statearr_23389[(10)] = inst_23350);

return statearr_23389;
})();
var statearr_23390_23453 = state_23375__$1;
(statearr_23390_23453[(2)] = null);

(statearr_23390_23453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (9))){
var state_23375__$1 = state_23375;
var statearr_23391_23454 = state_23375__$1;
(statearr_23391_23454[(2)] = null);

(statearr_23391_23454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (5))){
var state_23375__$1 = state_23375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23392_23455 = state_23375__$1;
(statearr_23392_23455[(1)] = (8));

} else {
var statearr_23393_23456 = state_23375__$1;
(statearr_23393_23456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (14))){
var inst_23353 = (state_23375[(8)]);
var inst_23355 = (state_23375[(11)]);
var inst_23353__$1 = (state_23375[(2)]);
var inst_23354 = (inst_23353__$1 == null);
var inst_23355__$1 = cljs.core.not.call(null,inst_23354);
var state_23375__$1 = (function (){var statearr_23394 = state_23375;
(statearr_23394[(8)] = inst_23353__$1);

(statearr_23394[(11)] = inst_23355__$1);

return statearr_23394;
})();
if(inst_23355__$1){
var statearr_23395_23457 = state_23375__$1;
(statearr_23395_23457[(1)] = (15));

} else {
var statearr_23396_23458 = state_23375__$1;
(statearr_23396_23458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (16))){
var inst_23355 = (state_23375[(11)]);
var state_23375__$1 = state_23375;
var statearr_23397_23459 = state_23375__$1;
(statearr_23397_23459[(2)] = inst_23355);

(statearr_23397_23459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (10))){
var inst_23347 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23398_23460 = state_23375__$1;
(statearr_23398_23460[(2)] = inst_23347);

(statearr_23398_23460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (18))){
var inst_23358 = (state_23375[(2)]);
var state_23375__$1 = state_23375;
var statearr_23399_23461 = state_23375__$1;
(statearr_23399_23461[(2)] = inst_23358);

(statearr_23399_23461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23376 === (8))){
var inst_23344 = cljs.core.async.close_BANG_.call(null,to);
var state_23375__$1 = state_23375;
var statearr_23400_23462 = state_23375__$1;
(statearr_23400_23462[(2)] = inst_23344);

(statearr_23400_23462[(1)] = (10));


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
});})(c__20381__auto__,jobs,results,process,async))
;
return ((function (switch__20360__auto__,c__20381__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_23404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__);

(statearr_23404[(1)] = (1));

return statearr_23404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1 = (function (state_23375){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23405){if((e23405 instanceof Object)){
var ex__20364__auto__ = e23405;
var statearr_23406_23463 = state_23375;
(statearr_23406_23463[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23464 = state_23375;
state_23375 = G__23464;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__ = function(state_23375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1.call(this,state_23375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__,jobs,results,process,async))
})();
var state__20383__auto__ = (function (){var statearr_23407 = f__20382__auto__.call(null);
(statearr_23407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_23407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__,jobs,results,process,async))
);

return c__20381__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23465 = [];
var len__19428__auto___23468 = arguments.length;
var i__19429__auto___23469 = (0);
while(true){
if((i__19429__auto___23469 < len__19428__auto___23468)){
args23465.push((arguments[i__19429__auto___23469]));

var G__23470 = (i__19429__auto___23469 + (1));
i__19429__auto___23469 = G__23470;
continue;
} else {
}
break;
}

var G__23467 = args23465.length;
switch (G__23467) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23465.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23472 = [];
var len__19428__auto___23475 = arguments.length;
var i__19429__auto___23476 = (0);
while(true){
if((i__19429__auto___23476 < len__19428__auto___23475)){
args23472.push((arguments[i__19429__auto___23476]));

var G__23477 = (i__19429__auto___23476 + (1));
i__19429__auto___23476 = G__23477;
continue;
} else {
}
break;
}

var G__23474 = args23472.length;
switch (G__23474) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23472.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23479 = [];
var len__19428__auto___23532 = arguments.length;
var i__19429__auto___23533 = (0);
while(true){
if((i__19429__auto___23533 < len__19428__auto___23532)){
args23479.push((arguments[i__19429__auto___23533]));

var G__23534 = (i__19429__auto___23533 + (1));
i__19429__auto___23533 = G__23534;
continue;
} else {
}
break;
}

var G__23481 = args23479.length;
switch (G__23481) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23479.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20381__auto___23536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___23536,tc,fc){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___23536,tc,fc){
return (function (state_23507){
var state_val_23508 = (state_23507[(1)]);
if((state_val_23508 === (7))){
var inst_23503 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
var statearr_23509_23537 = state_23507__$1;
(statearr_23509_23537[(2)] = inst_23503);

(statearr_23509_23537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (1))){
var state_23507__$1 = state_23507;
var statearr_23510_23538 = state_23507__$1;
(statearr_23510_23538[(2)] = null);

(statearr_23510_23538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (4))){
var inst_23484 = (state_23507[(7)]);
var inst_23484__$1 = (state_23507[(2)]);
var inst_23485 = (inst_23484__$1 == null);
var state_23507__$1 = (function (){var statearr_23511 = state_23507;
(statearr_23511[(7)] = inst_23484__$1);

return statearr_23511;
})();
if(cljs.core.truth_(inst_23485)){
var statearr_23512_23539 = state_23507__$1;
(statearr_23512_23539[(1)] = (5));

} else {
var statearr_23513_23540 = state_23507__$1;
(statearr_23513_23540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (13))){
var state_23507__$1 = state_23507;
var statearr_23514_23541 = state_23507__$1;
(statearr_23514_23541[(2)] = null);

(statearr_23514_23541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (6))){
var inst_23484 = (state_23507[(7)]);
var inst_23490 = p.call(null,inst_23484);
var state_23507__$1 = state_23507;
if(cljs.core.truth_(inst_23490)){
var statearr_23515_23542 = state_23507__$1;
(statearr_23515_23542[(1)] = (9));

} else {
var statearr_23516_23543 = state_23507__$1;
(statearr_23516_23543[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (3))){
var inst_23505 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23507__$1,inst_23505);
} else {
if((state_val_23508 === (12))){
var state_23507__$1 = state_23507;
var statearr_23517_23544 = state_23507__$1;
(statearr_23517_23544[(2)] = null);

(statearr_23517_23544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (2))){
var state_23507__$1 = state_23507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23507__$1,(4),ch);
} else {
if((state_val_23508 === (11))){
var inst_23484 = (state_23507[(7)]);
var inst_23494 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23507__$1,(8),inst_23494,inst_23484);
} else {
if((state_val_23508 === (9))){
var state_23507__$1 = state_23507;
var statearr_23518_23545 = state_23507__$1;
(statearr_23518_23545[(2)] = tc);

(statearr_23518_23545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (5))){
var inst_23487 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23488 = cljs.core.async.close_BANG_.call(null,fc);
var state_23507__$1 = (function (){var statearr_23519 = state_23507;
(statearr_23519[(8)] = inst_23487);

return statearr_23519;
})();
var statearr_23520_23546 = state_23507__$1;
(statearr_23520_23546[(2)] = inst_23488);

(statearr_23520_23546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (14))){
var inst_23501 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
var statearr_23521_23547 = state_23507__$1;
(statearr_23521_23547[(2)] = inst_23501);

(statearr_23521_23547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (10))){
var state_23507__$1 = state_23507;
var statearr_23522_23548 = state_23507__$1;
(statearr_23522_23548[(2)] = fc);

(statearr_23522_23548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23508 === (8))){
var inst_23496 = (state_23507[(2)]);
var state_23507__$1 = state_23507;
if(cljs.core.truth_(inst_23496)){
var statearr_23523_23549 = state_23507__$1;
(statearr_23523_23549[(1)] = (12));

} else {
var statearr_23524_23550 = state_23507__$1;
(statearr_23524_23550[(1)] = (13));

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
});})(c__20381__auto___23536,tc,fc))
;
return ((function (switch__20360__auto__,c__20381__auto___23536,tc,fc){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_23528 = [null,null,null,null,null,null,null,null,null];
(statearr_23528[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_23528[(1)] = (1));

return statearr_23528;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_23507){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23529){if((e23529 instanceof Object)){
var ex__20364__auto__ = e23529;
var statearr_23530_23551 = state_23507;
(statearr_23530_23551[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23552 = state_23507;
state_23507 = G__23552;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_23507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_23507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___23536,tc,fc))
})();
var state__20383__auto__ = (function (){var statearr_23531 = f__20382__auto__.call(null);
(statearr_23531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___23536);

return statearr_23531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___23536,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_23616){
var state_val_23617 = (state_23616[(1)]);
if((state_val_23617 === (7))){
var inst_23612 = (state_23616[(2)]);
var state_23616__$1 = state_23616;
var statearr_23618_23639 = state_23616__$1;
(statearr_23618_23639[(2)] = inst_23612);

(statearr_23618_23639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (1))){
var inst_23596 = init;
var state_23616__$1 = (function (){var statearr_23619 = state_23616;
(statearr_23619[(7)] = inst_23596);

return statearr_23619;
})();
var statearr_23620_23640 = state_23616__$1;
(statearr_23620_23640[(2)] = null);

(statearr_23620_23640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (4))){
var inst_23599 = (state_23616[(8)]);
var inst_23599__$1 = (state_23616[(2)]);
var inst_23600 = (inst_23599__$1 == null);
var state_23616__$1 = (function (){var statearr_23621 = state_23616;
(statearr_23621[(8)] = inst_23599__$1);

return statearr_23621;
})();
if(cljs.core.truth_(inst_23600)){
var statearr_23622_23641 = state_23616__$1;
(statearr_23622_23641[(1)] = (5));

} else {
var statearr_23623_23642 = state_23616__$1;
(statearr_23623_23642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (6))){
var inst_23596 = (state_23616[(7)]);
var inst_23599 = (state_23616[(8)]);
var inst_23603 = (state_23616[(9)]);
var inst_23603__$1 = f.call(null,inst_23596,inst_23599);
var inst_23604 = cljs.core.reduced_QMARK_.call(null,inst_23603__$1);
var state_23616__$1 = (function (){var statearr_23624 = state_23616;
(statearr_23624[(9)] = inst_23603__$1);

return statearr_23624;
})();
if(inst_23604){
var statearr_23625_23643 = state_23616__$1;
(statearr_23625_23643[(1)] = (8));

} else {
var statearr_23626_23644 = state_23616__$1;
(statearr_23626_23644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (3))){
var inst_23614 = (state_23616[(2)]);
var state_23616__$1 = state_23616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23616__$1,inst_23614);
} else {
if((state_val_23617 === (2))){
var state_23616__$1 = state_23616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23616__$1,(4),ch);
} else {
if((state_val_23617 === (9))){
var inst_23603 = (state_23616[(9)]);
var inst_23596 = inst_23603;
var state_23616__$1 = (function (){var statearr_23627 = state_23616;
(statearr_23627[(7)] = inst_23596);

return statearr_23627;
})();
var statearr_23628_23645 = state_23616__$1;
(statearr_23628_23645[(2)] = null);

(statearr_23628_23645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (5))){
var inst_23596 = (state_23616[(7)]);
var state_23616__$1 = state_23616;
var statearr_23629_23646 = state_23616__$1;
(statearr_23629_23646[(2)] = inst_23596);

(statearr_23629_23646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (10))){
var inst_23610 = (state_23616[(2)]);
var state_23616__$1 = state_23616;
var statearr_23630_23647 = state_23616__$1;
(statearr_23630_23647[(2)] = inst_23610);

(statearr_23630_23647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23617 === (8))){
var inst_23603 = (state_23616[(9)]);
var inst_23606 = cljs.core.deref.call(null,inst_23603);
var state_23616__$1 = state_23616;
var statearr_23631_23648 = state_23616__$1;
(statearr_23631_23648[(2)] = inst_23606);

(statearr_23631_23648[(1)] = (10));


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
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20361__auto____0 = (function (){
var statearr_23635 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23635[(0)] = cljs$core$async$reduce_$_state_machine__20361__auto__);

(statearr_23635[(1)] = (1));

return statearr_23635;
});
var cljs$core$async$reduce_$_state_machine__20361__auto____1 = (function (state_23616){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23636){if((e23636 instanceof Object)){
var ex__20364__auto__ = e23636;
var statearr_23637_23649 = state_23616;
(statearr_23637_23649[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23650 = state_23616;
state_23616 = G__23650;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20361__auto__ = function(state_23616){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20361__auto____1.call(this,state_23616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20361__auto____0;
cljs$core$async$reduce_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20361__auto____1;
return cljs$core$async$reduce_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_23638 = f__20382__auto__.call(null);
(statearr_23638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_23638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23651 = [];
var len__19428__auto___23703 = arguments.length;
var i__19429__auto___23704 = (0);
while(true){
if((i__19429__auto___23704 < len__19428__auto___23703)){
args23651.push((arguments[i__19429__auto___23704]));

var G__23705 = (i__19429__auto___23704 + (1));
i__19429__auto___23704 = G__23705;
continue;
} else {
}
break;
}

var G__23653 = args23651.length;
switch (G__23653) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23651.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_23678){
var state_val_23679 = (state_23678[(1)]);
if((state_val_23679 === (7))){
var inst_23660 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23680_23707 = state_23678__$1;
(statearr_23680_23707[(2)] = inst_23660);

(statearr_23680_23707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (1))){
var inst_23654 = cljs.core.seq.call(null,coll);
var inst_23655 = inst_23654;
var state_23678__$1 = (function (){var statearr_23681 = state_23678;
(statearr_23681[(7)] = inst_23655);

return statearr_23681;
})();
var statearr_23682_23708 = state_23678__$1;
(statearr_23682_23708[(2)] = null);

(statearr_23682_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (4))){
var inst_23655 = (state_23678[(7)]);
var inst_23658 = cljs.core.first.call(null,inst_23655);
var state_23678__$1 = state_23678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23678__$1,(7),ch,inst_23658);
} else {
if((state_val_23679 === (13))){
var inst_23672 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23683_23709 = state_23678__$1;
(statearr_23683_23709[(2)] = inst_23672);

(statearr_23683_23709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (6))){
var inst_23663 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
if(cljs.core.truth_(inst_23663)){
var statearr_23684_23710 = state_23678__$1;
(statearr_23684_23710[(1)] = (8));

} else {
var statearr_23685_23711 = state_23678__$1;
(statearr_23685_23711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (3))){
var inst_23676 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23678__$1,inst_23676);
} else {
if((state_val_23679 === (12))){
var state_23678__$1 = state_23678;
var statearr_23686_23712 = state_23678__$1;
(statearr_23686_23712[(2)] = null);

(statearr_23686_23712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (2))){
var inst_23655 = (state_23678[(7)]);
var state_23678__$1 = state_23678;
if(cljs.core.truth_(inst_23655)){
var statearr_23687_23713 = state_23678__$1;
(statearr_23687_23713[(1)] = (4));

} else {
var statearr_23688_23714 = state_23678__$1;
(statearr_23688_23714[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (11))){
var inst_23669 = cljs.core.async.close_BANG_.call(null,ch);
var state_23678__$1 = state_23678;
var statearr_23689_23715 = state_23678__$1;
(statearr_23689_23715[(2)] = inst_23669);

(statearr_23689_23715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (9))){
var state_23678__$1 = state_23678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23690_23716 = state_23678__$1;
(statearr_23690_23716[(1)] = (11));

} else {
var statearr_23691_23717 = state_23678__$1;
(statearr_23691_23717[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (5))){
var inst_23655 = (state_23678[(7)]);
var state_23678__$1 = state_23678;
var statearr_23692_23718 = state_23678__$1;
(statearr_23692_23718[(2)] = inst_23655);

(statearr_23692_23718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (10))){
var inst_23674 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23693_23719 = state_23678__$1;
(statearr_23693_23719[(2)] = inst_23674);

(statearr_23693_23719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (8))){
var inst_23655 = (state_23678[(7)]);
var inst_23665 = cljs.core.next.call(null,inst_23655);
var inst_23655__$1 = inst_23665;
var state_23678__$1 = (function (){var statearr_23694 = state_23678;
(statearr_23694[(7)] = inst_23655__$1);

return statearr_23694;
})();
var statearr_23695_23720 = state_23678__$1;
(statearr_23695_23720[(2)] = null);

(statearr_23695_23720[(1)] = (2));


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
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_23699 = [null,null,null,null,null,null,null,null];
(statearr_23699[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_23699[(1)] = (1));

return statearr_23699;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_23678){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_23678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e23700){if((e23700 instanceof Object)){
var ex__20364__auto__ = e23700;
var statearr_23701_23721 = state_23678;
(statearr_23701_23721[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23722 = state_23678;
state_23678 = G__23722;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_23678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_23678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_23702 = f__20382__auto__.call(null);
(statearr_23702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_23702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23944 = (function (mult,ch,cs,meta23945){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23945 = meta23945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23946,meta23945__$1){
var self__ = this;
var _23946__$1 = this;
return (new cljs.core.async.t_cljs$core$async23944(self__.mult,self__.ch,self__.cs,meta23945__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23946){
var self__ = this;
var _23946__$1 = this;
return self__.meta23945;
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23945","meta23945",-383278866,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23944";

cljs.core.async.t_cljs$core$async23944.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async23944");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23944 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23944(mult__$1,ch__$1,cs__$1,meta23945){
return (new cljs.core.async.t_cljs$core$async23944(mult__$1,ch__$1,cs__$1,meta23945));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23944(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20381__auto___24165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___24165,cs,m,dchan,dctr,done){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___24165,cs,m,dchan,dctr,done){
return (function (state_24077){
var state_val_24078 = (state_24077[(1)]);
if((state_val_24078 === (7))){
var inst_24073 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24079_24166 = state_24077__$1;
(statearr_24079_24166[(2)] = inst_24073);

(statearr_24079_24166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (20))){
var inst_23978 = (state_24077[(7)]);
var inst_23988 = cljs.core.first.call(null,inst_23978);
var inst_23989 = cljs.core.nth.call(null,inst_23988,(0),null);
var inst_23990 = cljs.core.nth.call(null,inst_23988,(1),null);
var state_24077__$1 = (function (){var statearr_24080 = state_24077;
(statearr_24080[(8)] = inst_23989);

return statearr_24080;
})();
if(cljs.core.truth_(inst_23990)){
var statearr_24081_24167 = state_24077__$1;
(statearr_24081_24167[(1)] = (22));

} else {
var statearr_24082_24168 = state_24077__$1;
(statearr_24082_24168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (27))){
var inst_23949 = (state_24077[(9)]);
var inst_24025 = (state_24077[(10)]);
var inst_24018 = (state_24077[(11)]);
var inst_24020 = (state_24077[(12)]);
var inst_24025__$1 = cljs.core._nth.call(null,inst_24018,inst_24020);
var inst_24026 = cljs.core.async.put_BANG_.call(null,inst_24025__$1,inst_23949,done);
var state_24077__$1 = (function (){var statearr_24083 = state_24077;
(statearr_24083[(10)] = inst_24025__$1);

return statearr_24083;
})();
if(cljs.core.truth_(inst_24026)){
var statearr_24084_24169 = state_24077__$1;
(statearr_24084_24169[(1)] = (30));

} else {
var statearr_24085_24170 = state_24077__$1;
(statearr_24085_24170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (1))){
var state_24077__$1 = state_24077;
var statearr_24086_24171 = state_24077__$1;
(statearr_24086_24171[(2)] = null);

(statearr_24086_24171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (24))){
var inst_23978 = (state_24077[(7)]);
var inst_23995 = (state_24077[(2)]);
var inst_23996 = cljs.core.next.call(null,inst_23978);
var inst_23958 = inst_23996;
var inst_23959 = null;
var inst_23960 = (0);
var inst_23961 = (0);
var state_24077__$1 = (function (){var statearr_24087 = state_24077;
(statearr_24087[(13)] = inst_23959);

(statearr_24087[(14)] = inst_23958);

(statearr_24087[(15)] = inst_23960);

(statearr_24087[(16)] = inst_23961);

(statearr_24087[(17)] = inst_23995);

return statearr_24087;
})();
var statearr_24088_24172 = state_24077__$1;
(statearr_24088_24172[(2)] = null);

(statearr_24088_24172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (39))){
var state_24077__$1 = state_24077;
var statearr_24092_24173 = state_24077__$1;
(statearr_24092_24173[(2)] = null);

(statearr_24092_24173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (4))){
var inst_23949 = (state_24077[(9)]);
var inst_23949__$1 = (state_24077[(2)]);
var inst_23950 = (inst_23949__$1 == null);
var state_24077__$1 = (function (){var statearr_24093 = state_24077;
(statearr_24093[(9)] = inst_23949__$1);

return statearr_24093;
})();
if(cljs.core.truth_(inst_23950)){
var statearr_24094_24174 = state_24077__$1;
(statearr_24094_24174[(1)] = (5));

} else {
var statearr_24095_24175 = state_24077__$1;
(statearr_24095_24175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (15))){
var inst_23959 = (state_24077[(13)]);
var inst_23958 = (state_24077[(14)]);
var inst_23960 = (state_24077[(15)]);
var inst_23961 = (state_24077[(16)]);
var inst_23974 = (state_24077[(2)]);
var inst_23975 = (inst_23961 + (1));
var tmp24089 = inst_23959;
var tmp24090 = inst_23958;
var tmp24091 = inst_23960;
var inst_23958__$1 = tmp24090;
var inst_23959__$1 = tmp24089;
var inst_23960__$1 = tmp24091;
var inst_23961__$1 = inst_23975;
var state_24077__$1 = (function (){var statearr_24096 = state_24077;
(statearr_24096[(13)] = inst_23959__$1);

(statearr_24096[(18)] = inst_23974);

(statearr_24096[(14)] = inst_23958__$1);

(statearr_24096[(15)] = inst_23960__$1);

(statearr_24096[(16)] = inst_23961__$1);

return statearr_24096;
})();
var statearr_24097_24176 = state_24077__$1;
(statearr_24097_24176[(2)] = null);

(statearr_24097_24176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (21))){
var inst_23999 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24101_24177 = state_24077__$1;
(statearr_24101_24177[(2)] = inst_23999);

(statearr_24101_24177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (31))){
var inst_24025 = (state_24077[(10)]);
var inst_24029 = done.call(null,null);
var inst_24030 = cljs.core.async.untap_STAR_.call(null,m,inst_24025);
var state_24077__$1 = (function (){var statearr_24102 = state_24077;
(statearr_24102[(19)] = inst_24029);

return statearr_24102;
})();
var statearr_24103_24178 = state_24077__$1;
(statearr_24103_24178[(2)] = inst_24030);

(statearr_24103_24178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (32))){
var inst_24017 = (state_24077[(20)]);
var inst_24018 = (state_24077[(11)]);
var inst_24019 = (state_24077[(21)]);
var inst_24020 = (state_24077[(12)]);
var inst_24032 = (state_24077[(2)]);
var inst_24033 = (inst_24020 + (1));
var tmp24098 = inst_24017;
var tmp24099 = inst_24018;
var tmp24100 = inst_24019;
var inst_24017__$1 = tmp24098;
var inst_24018__$1 = tmp24099;
var inst_24019__$1 = tmp24100;
var inst_24020__$1 = inst_24033;
var state_24077__$1 = (function (){var statearr_24104 = state_24077;
(statearr_24104[(20)] = inst_24017__$1);

(statearr_24104[(11)] = inst_24018__$1);

(statearr_24104[(21)] = inst_24019__$1);

(statearr_24104[(12)] = inst_24020__$1);

(statearr_24104[(22)] = inst_24032);

return statearr_24104;
})();
var statearr_24105_24179 = state_24077__$1;
(statearr_24105_24179[(2)] = null);

(statearr_24105_24179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (40))){
var inst_24045 = (state_24077[(23)]);
var inst_24049 = done.call(null,null);
var inst_24050 = cljs.core.async.untap_STAR_.call(null,m,inst_24045);
var state_24077__$1 = (function (){var statearr_24106 = state_24077;
(statearr_24106[(24)] = inst_24049);

return statearr_24106;
})();
var statearr_24107_24180 = state_24077__$1;
(statearr_24107_24180[(2)] = inst_24050);

(statearr_24107_24180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (33))){
var inst_24036 = (state_24077[(25)]);
var inst_24038 = cljs.core.chunked_seq_QMARK_.call(null,inst_24036);
var state_24077__$1 = state_24077;
if(inst_24038){
var statearr_24108_24181 = state_24077__$1;
(statearr_24108_24181[(1)] = (36));

} else {
var statearr_24109_24182 = state_24077__$1;
(statearr_24109_24182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (13))){
var inst_23968 = (state_24077[(26)]);
var inst_23971 = cljs.core.async.close_BANG_.call(null,inst_23968);
var state_24077__$1 = state_24077;
var statearr_24110_24183 = state_24077__$1;
(statearr_24110_24183[(2)] = inst_23971);

(statearr_24110_24183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (22))){
var inst_23989 = (state_24077[(8)]);
var inst_23992 = cljs.core.async.close_BANG_.call(null,inst_23989);
var state_24077__$1 = state_24077;
var statearr_24111_24184 = state_24077__$1;
(statearr_24111_24184[(2)] = inst_23992);

(statearr_24111_24184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (36))){
var inst_24036 = (state_24077[(25)]);
var inst_24040 = cljs.core.chunk_first.call(null,inst_24036);
var inst_24041 = cljs.core.chunk_rest.call(null,inst_24036);
var inst_24042 = cljs.core.count.call(null,inst_24040);
var inst_24017 = inst_24041;
var inst_24018 = inst_24040;
var inst_24019 = inst_24042;
var inst_24020 = (0);
var state_24077__$1 = (function (){var statearr_24112 = state_24077;
(statearr_24112[(20)] = inst_24017);

(statearr_24112[(11)] = inst_24018);

(statearr_24112[(21)] = inst_24019);

(statearr_24112[(12)] = inst_24020);

return statearr_24112;
})();
var statearr_24113_24185 = state_24077__$1;
(statearr_24113_24185[(2)] = null);

(statearr_24113_24185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (41))){
var inst_24036 = (state_24077[(25)]);
var inst_24052 = (state_24077[(2)]);
var inst_24053 = cljs.core.next.call(null,inst_24036);
var inst_24017 = inst_24053;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24077__$1 = (function (){var statearr_24114 = state_24077;
(statearr_24114[(20)] = inst_24017);

(statearr_24114[(27)] = inst_24052);

(statearr_24114[(11)] = inst_24018);

(statearr_24114[(21)] = inst_24019);

(statearr_24114[(12)] = inst_24020);

return statearr_24114;
})();
var statearr_24115_24186 = state_24077__$1;
(statearr_24115_24186[(2)] = null);

(statearr_24115_24186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (43))){
var state_24077__$1 = state_24077;
var statearr_24116_24187 = state_24077__$1;
(statearr_24116_24187[(2)] = null);

(statearr_24116_24187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (29))){
var inst_24061 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24117_24188 = state_24077__$1;
(statearr_24117_24188[(2)] = inst_24061);

(statearr_24117_24188[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (44))){
var inst_24070 = (state_24077[(2)]);
var state_24077__$1 = (function (){var statearr_24118 = state_24077;
(statearr_24118[(28)] = inst_24070);

return statearr_24118;
})();
var statearr_24119_24189 = state_24077__$1;
(statearr_24119_24189[(2)] = null);

(statearr_24119_24189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (6))){
var inst_24009 = (state_24077[(29)]);
var inst_24008 = cljs.core.deref.call(null,cs);
var inst_24009__$1 = cljs.core.keys.call(null,inst_24008);
var inst_24010 = cljs.core.count.call(null,inst_24009__$1);
var inst_24011 = cljs.core.reset_BANG_.call(null,dctr,inst_24010);
var inst_24016 = cljs.core.seq.call(null,inst_24009__$1);
var inst_24017 = inst_24016;
var inst_24018 = null;
var inst_24019 = (0);
var inst_24020 = (0);
var state_24077__$1 = (function (){var statearr_24120 = state_24077;
(statearr_24120[(20)] = inst_24017);

(statearr_24120[(11)] = inst_24018);

(statearr_24120[(21)] = inst_24019);

(statearr_24120[(12)] = inst_24020);

(statearr_24120[(30)] = inst_24011);

(statearr_24120[(29)] = inst_24009__$1);

return statearr_24120;
})();
var statearr_24121_24190 = state_24077__$1;
(statearr_24121_24190[(2)] = null);

(statearr_24121_24190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (28))){
var inst_24017 = (state_24077[(20)]);
var inst_24036 = (state_24077[(25)]);
var inst_24036__$1 = cljs.core.seq.call(null,inst_24017);
var state_24077__$1 = (function (){var statearr_24122 = state_24077;
(statearr_24122[(25)] = inst_24036__$1);

return statearr_24122;
})();
if(inst_24036__$1){
var statearr_24123_24191 = state_24077__$1;
(statearr_24123_24191[(1)] = (33));

} else {
var statearr_24124_24192 = state_24077__$1;
(statearr_24124_24192[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (25))){
var inst_24019 = (state_24077[(21)]);
var inst_24020 = (state_24077[(12)]);
var inst_24022 = (inst_24020 < inst_24019);
var inst_24023 = inst_24022;
var state_24077__$1 = state_24077;
if(cljs.core.truth_(inst_24023)){
var statearr_24125_24193 = state_24077__$1;
(statearr_24125_24193[(1)] = (27));

} else {
var statearr_24126_24194 = state_24077__$1;
(statearr_24126_24194[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (34))){
var state_24077__$1 = state_24077;
var statearr_24127_24195 = state_24077__$1;
(statearr_24127_24195[(2)] = null);

(statearr_24127_24195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (17))){
var state_24077__$1 = state_24077;
var statearr_24128_24196 = state_24077__$1;
(statearr_24128_24196[(2)] = null);

(statearr_24128_24196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (3))){
var inst_24075 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24077__$1,inst_24075);
} else {
if((state_val_24078 === (12))){
var inst_24004 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24129_24197 = state_24077__$1;
(statearr_24129_24197[(2)] = inst_24004);

(statearr_24129_24197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (2))){
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24077__$1,(4),ch);
} else {
if((state_val_24078 === (23))){
var state_24077__$1 = state_24077;
var statearr_24130_24198 = state_24077__$1;
(statearr_24130_24198[(2)] = null);

(statearr_24130_24198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (35))){
var inst_24059 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24131_24199 = state_24077__$1;
(statearr_24131_24199[(2)] = inst_24059);

(statearr_24131_24199[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (19))){
var inst_23978 = (state_24077[(7)]);
var inst_23982 = cljs.core.chunk_first.call(null,inst_23978);
var inst_23983 = cljs.core.chunk_rest.call(null,inst_23978);
var inst_23984 = cljs.core.count.call(null,inst_23982);
var inst_23958 = inst_23983;
var inst_23959 = inst_23982;
var inst_23960 = inst_23984;
var inst_23961 = (0);
var state_24077__$1 = (function (){var statearr_24132 = state_24077;
(statearr_24132[(13)] = inst_23959);

(statearr_24132[(14)] = inst_23958);

(statearr_24132[(15)] = inst_23960);

(statearr_24132[(16)] = inst_23961);

return statearr_24132;
})();
var statearr_24133_24200 = state_24077__$1;
(statearr_24133_24200[(2)] = null);

(statearr_24133_24200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (11))){
var inst_23958 = (state_24077[(14)]);
var inst_23978 = (state_24077[(7)]);
var inst_23978__$1 = cljs.core.seq.call(null,inst_23958);
var state_24077__$1 = (function (){var statearr_24134 = state_24077;
(statearr_24134[(7)] = inst_23978__$1);

return statearr_24134;
})();
if(inst_23978__$1){
var statearr_24135_24201 = state_24077__$1;
(statearr_24135_24201[(1)] = (16));

} else {
var statearr_24136_24202 = state_24077__$1;
(statearr_24136_24202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (9))){
var inst_24006 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24137_24203 = state_24077__$1;
(statearr_24137_24203[(2)] = inst_24006);

(statearr_24137_24203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (5))){
var inst_23956 = cljs.core.deref.call(null,cs);
var inst_23957 = cljs.core.seq.call(null,inst_23956);
var inst_23958 = inst_23957;
var inst_23959 = null;
var inst_23960 = (0);
var inst_23961 = (0);
var state_24077__$1 = (function (){var statearr_24138 = state_24077;
(statearr_24138[(13)] = inst_23959);

(statearr_24138[(14)] = inst_23958);

(statearr_24138[(15)] = inst_23960);

(statearr_24138[(16)] = inst_23961);

return statearr_24138;
})();
var statearr_24139_24204 = state_24077__$1;
(statearr_24139_24204[(2)] = null);

(statearr_24139_24204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (14))){
var state_24077__$1 = state_24077;
var statearr_24140_24205 = state_24077__$1;
(statearr_24140_24205[(2)] = null);

(statearr_24140_24205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (45))){
var inst_24067 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24141_24206 = state_24077__$1;
(statearr_24141_24206[(2)] = inst_24067);

(statearr_24141_24206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (26))){
var inst_24009 = (state_24077[(29)]);
var inst_24063 = (state_24077[(2)]);
var inst_24064 = cljs.core.seq.call(null,inst_24009);
var state_24077__$1 = (function (){var statearr_24142 = state_24077;
(statearr_24142[(31)] = inst_24063);

return statearr_24142;
})();
if(inst_24064){
var statearr_24143_24207 = state_24077__$1;
(statearr_24143_24207[(1)] = (42));

} else {
var statearr_24144_24208 = state_24077__$1;
(statearr_24144_24208[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (16))){
var inst_23978 = (state_24077[(7)]);
var inst_23980 = cljs.core.chunked_seq_QMARK_.call(null,inst_23978);
var state_24077__$1 = state_24077;
if(inst_23980){
var statearr_24145_24209 = state_24077__$1;
(statearr_24145_24209[(1)] = (19));

} else {
var statearr_24146_24210 = state_24077__$1;
(statearr_24146_24210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (38))){
var inst_24056 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24147_24211 = state_24077__$1;
(statearr_24147_24211[(2)] = inst_24056);

(statearr_24147_24211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (30))){
var state_24077__$1 = state_24077;
var statearr_24148_24212 = state_24077__$1;
(statearr_24148_24212[(2)] = null);

(statearr_24148_24212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (10))){
var inst_23959 = (state_24077[(13)]);
var inst_23961 = (state_24077[(16)]);
var inst_23967 = cljs.core._nth.call(null,inst_23959,inst_23961);
var inst_23968 = cljs.core.nth.call(null,inst_23967,(0),null);
var inst_23969 = cljs.core.nth.call(null,inst_23967,(1),null);
var state_24077__$1 = (function (){var statearr_24149 = state_24077;
(statearr_24149[(26)] = inst_23968);

return statearr_24149;
})();
if(cljs.core.truth_(inst_23969)){
var statearr_24150_24213 = state_24077__$1;
(statearr_24150_24213[(1)] = (13));

} else {
var statearr_24151_24214 = state_24077__$1;
(statearr_24151_24214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (18))){
var inst_24002 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24152_24215 = state_24077__$1;
(statearr_24152_24215[(2)] = inst_24002);

(statearr_24152_24215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (42))){
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24077__$1,(45),dchan);
} else {
if((state_val_24078 === (37))){
var inst_23949 = (state_24077[(9)]);
var inst_24036 = (state_24077[(25)]);
var inst_24045 = (state_24077[(23)]);
var inst_24045__$1 = cljs.core.first.call(null,inst_24036);
var inst_24046 = cljs.core.async.put_BANG_.call(null,inst_24045__$1,inst_23949,done);
var state_24077__$1 = (function (){var statearr_24153 = state_24077;
(statearr_24153[(23)] = inst_24045__$1);

return statearr_24153;
})();
if(cljs.core.truth_(inst_24046)){
var statearr_24154_24216 = state_24077__$1;
(statearr_24154_24216[(1)] = (39));

} else {
var statearr_24155_24217 = state_24077__$1;
(statearr_24155_24217[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (8))){
var inst_23960 = (state_24077[(15)]);
var inst_23961 = (state_24077[(16)]);
var inst_23963 = (inst_23961 < inst_23960);
var inst_23964 = inst_23963;
var state_24077__$1 = state_24077;
if(cljs.core.truth_(inst_23964)){
var statearr_24156_24218 = state_24077__$1;
(statearr_24156_24218[(1)] = (10));

} else {
var statearr_24157_24219 = state_24077__$1;
(statearr_24157_24219[(1)] = (11));

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
});})(c__20381__auto___24165,cs,m,dchan,dctr,done))
;
return ((function (switch__20360__auto__,c__20381__auto___24165,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20361__auto__ = null;
var cljs$core$async$mult_$_state_machine__20361__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24161[(0)] = cljs$core$async$mult_$_state_machine__20361__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var cljs$core$async$mult_$_state_machine__20361__auto____1 = (function (state_24077){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object)){
var ex__20364__auto__ = e24162;
var statearr_24163_24220 = state_24077;
(statearr_24163_24220[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24221 = state_24077;
state_24077 = G__24221;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20361__auto__ = function(state_24077){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20361__auto____1.call(this,state_24077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20361__auto____0;
cljs$core$async$mult_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20361__auto____1;
return cljs$core$async$mult_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___24165,cs,m,dchan,dctr,done))
})();
var state__20383__auto__ = (function (){var statearr_24164 = f__20382__auto__.call(null);
(statearr_24164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___24165);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___24165,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24222 = [];
var len__19428__auto___24225 = arguments.length;
var i__19429__auto___24226 = (0);
while(true){
if((i__19429__auto___24226 < len__19428__auto___24225)){
args24222.push((arguments[i__19429__auto___24226]));

var G__24227 = (i__19429__auto___24226 + (1));
i__19429__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___24239 = arguments.length;
var i__19429__auto___24240 = (0);
while(true){
if((i__19429__auto___24240 < len__19428__auto___24239)){
args__19435__auto__.push((arguments[i__19429__auto___24240]));

var G__24241 = (i__19429__auto___24240 + (1));
i__19429__auto___24240 = G__24241;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24233){
var map__24234 = p__24233;
var map__24234__$1 = ((((!((map__24234 == null)))?((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var opts = map__24234__$1;
var statearr_24236_24242 = state;
(statearr_24236_24242[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24234,map__24234__$1,opts){
return (function (val){
var statearr_24237_24243 = state;
(statearr_24237_24243[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24234,map__24234__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24238_24244 = state;
(statearr_24238_24244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24229){
var G__24230 = cljs.core.first.call(null,seq24229);
var seq24229__$1 = cljs.core.next.call(null,seq24229);
var G__24231 = cljs.core.first.call(null,seq24229__$1);
var seq24229__$2 = cljs.core.next.call(null,seq24229__$1);
var G__24232 = cljs.core.first.call(null,seq24229__$2);
var seq24229__$3 = cljs.core.next.call(null,seq24229__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24230,G__24231,G__24232,seq24229__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24408 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24409){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24409 = meta24409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24410,meta24409__$1){
var self__ = this;
var _24410__$1 = this;
return (new cljs.core.async.t_cljs$core$async24408(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24409__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24410){
var self__ = this;
var _24410__$1 = this;
return self__.meta24409;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24409","meta24409",-2028641966,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24408";

cljs.core.async.t_cljs$core$async24408.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async24408");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24408 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24408(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24409){
return (new cljs.core.async.t_cljs$core$async24408(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24409));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24408(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20381__auto___24571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24508){
var state_val_24509 = (state_24508[(1)]);
if((state_val_24509 === (7))){
var inst_24426 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24510_24572 = state_24508__$1;
(statearr_24510_24572[(2)] = inst_24426);

(statearr_24510_24572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (20))){
var inst_24438 = (state_24508[(7)]);
var state_24508__$1 = state_24508;
var statearr_24511_24573 = state_24508__$1;
(statearr_24511_24573[(2)] = inst_24438);

(statearr_24511_24573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (27))){
var state_24508__$1 = state_24508;
var statearr_24512_24574 = state_24508__$1;
(statearr_24512_24574[(2)] = null);

(statearr_24512_24574[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (1))){
var inst_24414 = (state_24508[(8)]);
var inst_24414__$1 = calc_state.call(null);
var inst_24416 = (inst_24414__$1 == null);
var inst_24417 = cljs.core.not.call(null,inst_24416);
var state_24508__$1 = (function (){var statearr_24513 = state_24508;
(statearr_24513[(8)] = inst_24414__$1);

return statearr_24513;
})();
if(inst_24417){
var statearr_24514_24575 = state_24508__$1;
(statearr_24514_24575[(1)] = (2));

} else {
var statearr_24515_24576 = state_24508__$1;
(statearr_24515_24576[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (24))){
var inst_24482 = (state_24508[(9)]);
var inst_24468 = (state_24508[(10)]);
var inst_24461 = (state_24508[(11)]);
var inst_24482__$1 = inst_24461.call(null,inst_24468);
var state_24508__$1 = (function (){var statearr_24516 = state_24508;
(statearr_24516[(9)] = inst_24482__$1);

return statearr_24516;
})();
if(cljs.core.truth_(inst_24482__$1)){
var statearr_24517_24577 = state_24508__$1;
(statearr_24517_24577[(1)] = (29));

} else {
var statearr_24518_24578 = state_24508__$1;
(statearr_24518_24578[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (4))){
var inst_24429 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24429)){
var statearr_24519_24579 = state_24508__$1;
(statearr_24519_24579[(1)] = (8));

} else {
var statearr_24520_24580 = state_24508__$1;
(statearr_24520_24580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (15))){
var inst_24455 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24455)){
var statearr_24521_24581 = state_24508__$1;
(statearr_24521_24581[(1)] = (19));

} else {
var statearr_24522_24582 = state_24508__$1;
(statearr_24522_24582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (21))){
var inst_24460 = (state_24508[(12)]);
var inst_24460__$1 = (state_24508[(2)]);
var inst_24461 = cljs.core.get.call(null,inst_24460__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24462 = cljs.core.get.call(null,inst_24460__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24463 = cljs.core.get.call(null,inst_24460__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24508__$1 = (function (){var statearr_24523 = state_24508;
(statearr_24523[(13)] = inst_24462);

(statearr_24523[(11)] = inst_24461);

(statearr_24523[(12)] = inst_24460__$1);

return statearr_24523;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24508__$1,(22),inst_24463);
} else {
if((state_val_24509 === (31))){
var inst_24490 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24490)){
var statearr_24524_24583 = state_24508__$1;
(statearr_24524_24583[(1)] = (32));

} else {
var statearr_24525_24584 = state_24508__$1;
(statearr_24525_24584[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (32))){
var inst_24467 = (state_24508[(14)]);
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24508__$1,(35),out,inst_24467);
} else {
if((state_val_24509 === (33))){
var inst_24460 = (state_24508[(12)]);
var inst_24438 = inst_24460;
var state_24508__$1 = (function (){var statearr_24526 = state_24508;
(statearr_24526[(7)] = inst_24438);

return statearr_24526;
})();
var statearr_24527_24585 = state_24508__$1;
(statearr_24527_24585[(2)] = null);

(statearr_24527_24585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (13))){
var inst_24438 = (state_24508[(7)]);
var inst_24445 = inst_24438.cljs$lang$protocol_mask$partition0$;
var inst_24446 = (inst_24445 & (64));
var inst_24447 = inst_24438.cljs$core$ISeq$;
var inst_24448 = (inst_24446) || (inst_24447);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24448)){
var statearr_24528_24586 = state_24508__$1;
(statearr_24528_24586[(1)] = (16));

} else {
var statearr_24529_24587 = state_24508__$1;
(statearr_24529_24587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (22))){
var inst_24468 = (state_24508[(10)]);
var inst_24467 = (state_24508[(14)]);
var inst_24466 = (state_24508[(2)]);
var inst_24467__$1 = cljs.core.nth.call(null,inst_24466,(0),null);
var inst_24468__$1 = cljs.core.nth.call(null,inst_24466,(1),null);
var inst_24469 = (inst_24467__$1 == null);
var inst_24470 = cljs.core._EQ_.call(null,inst_24468__$1,change);
var inst_24471 = (inst_24469) || (inst_24470);
var state_24508__$1 = (function (){var statearr_24530 = state_24508;
(statearr_24530[(10)] = inst_24468__$1);

(statearr_24530[(14)] = inst_24467__$1);

return statearr_24530;
})();
if(cljs.core.truth_(inst_24471)){
var statearr_24531_24588 = state_24508__$1;
(statearr_24531_24588[(1)] = (23));

} else {
var statearr_24532_24589 = state_24508__$1;
(statearr_24532_24589[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (36))){
var inst_24460 = (state_24508[(12)]);
var inst_24438 = inst_24460;
var state_24508__$1 = (function (){var statearr_24533 = state_24508;
(statearr_24533[(7)] = inst_24438);

return statearr_24533;
})();
var statearr_24534_24590 = state_24508__$1;
(statearr_24534_24590[(2)] = null);

(statearr_24534_24590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (29))){
var inst_24482 = (state_24508[(9)]);
var state_24508__$1 = state_24508;
var statearr_24535_24591 = state_24508__$1;
(statearr_24535_24591[(2)] = inst_24482);

(statearr_24535_24591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (6))){
var state_24508__$1 = state_24508;
var statearr_24536_24592 = state_24508__$1;
(statearr_24536_24592[(2)] = false);

(statearr_24536_24592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (28))){
var inst_24478 = (state_24508[(2)]);
var inst_24479 = calc_state.call(null);
var inst_24438 = inst_24479;
var state_24508__$1 = (function (){var statearr_24537 = state_24508;
(statearr_24537[(15)] = inst_24478);

(statearr_24537[(7)] = inst_24438);

return statearr_24537;
})();
var statearr_24538_24593 = state_24508__$1;
(statearr_24538_24593[(2)] = null);

(statearr_24538_24593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (25))){
var inst_24504 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24539_24594 = state_24508__$1;
(statearr_24539_24594[(2)] = inst_24504);

(statearr_24539_24594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (34))){
var inst_24502 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24540_24595 = state_24508__$1;
(statearr_24540_24595[(2)] = inst_24502);

(statearr_24540_24595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (17))){
var state_24508__$1 = state_24508;
var statearr_24541_24596 = state_24508__$1;
(statearr_24541_24596[(2)] = false);

(statearr_24541_24596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (3))){
var state_24508__$1 = state_24508;
var statearr_24542_24597 = state_24508__$1;
(statearr_24542_24597[(2)] = false);

(statearr_24542_24597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (12))){
var inst_24506 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24508__$1,inst_24506);
} else {
if((state_val_24509 === (2))){
var inst_24414 = (state_24508[(8)]);
var inst_24419 = inst_24414.cljs$lang$protocol_mask$partition0$;
var inst_24420 = (inst_24419 & (64));
var inst_24421 = inst_24414.cljs$core$ISeq$;
var inst_24422 = (inst_24420) || (inst_24421);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24422)){
var statearr_24543_24598 = state_24508__$1;
(statearr_24543_24598[(1)] = (5));

} else {
var statearr_24544_24599 = state_24508__$1;
(statearr_24544_24599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (23))){
var inst_24467 = (state_24508[(14)]);
var inst_24473 = (inst_24467 == null);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24473)){
var statearr_24545_24600 = state_24508__$1;
(statearr_24545_24600[(1)] = (26));

} else {
var statearr_24546_24601 = state_24508__$1;
(statearr_24546_24601[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (35))){
var inst_24493 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24493)){
var statearr_24547_24602 = state_24508__$1;
(statearr_24547_24602[(1)] = (36));

} else {
var statearr_24548_24603 = state_24508__$1;
(statearr_24548_24603[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (19))){
var inst_24438 = (state_24508[(7)]);
var inst_24457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24438);
var state_24508__$1 = state_24508;
var statearr_24549_24604 = state_24508__$1;
(statearr_24549_24604[(2)] = inst_24457);

(statearr_24549_24604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (11))){
var inst_24438 = (state_24508[(7)]);
var inst_24442 = (inst_24438 == null);
var inst_24443 = cljs.core.not.call(null,inst_24442);
var state_24508__$1 = state_24508;
if(inst_24443){
var statearr_24550_24605 = state_24508__$1;
(statearr_24550_24605[(1)] = (13));

} else {
var statearr_24551_24606 = state_24508__$1;
(statearr_24551_24606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (9))){
var inst_24414 = (state_24508[(8)]);
var state_24508__$1 = state_24508;
var statearr_24552_24607 = state_24508__$1;
(statearr_24552_24607[(2)] = inst_24414);

(statearr_24552_24607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (5))){
var state_24508__$1 = state_24508;
var statearr_24553_24608 = state_24508__$1;
(statearr_24553_24608[(2)] = true);

(statearr_24553_24608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (14))){
var state_24508__$1 = state_24508;
var statearr_24554_24609 = state_24508__$1;
(statearr_24554_24609[(2)] = false);

(statearr_24554_24609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (26))){
var inst_24468 = (state_24508[(10)]);
var inst_24475 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24468);
var state_24508__$1 = state_24508;
var statearr_24555_24610 = state_24508__$1;
(statearr_24555_24610[(2)] = inst_24475);

(statearr_24555_24610[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (16))){
var state_24508__$1 = state_24508;
var statearr_24556_24611 = state_24508__$1;
(statearr_24556_24611[(2)] = true);

(statearr_24556_24611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (38))){
var inst_24498 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24557_24612 = state_24508__$1;
(statearr_24557_24612[(2)] = inst_24498);

(statearr_24557_24612[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (30))){
var inst_24462 = (state_24508[(13)]);
var inst_24468 = (state_24508[(10)]);
var inst_24461 = (state_24508[(11)]);
var inst_24485 = cljs.core.empty_QMARK_.call(null,inst_24461);
var inst_24486 = inst_24462.call(null,inst_24468);
var inst_24487 = cljs.core.not.call(null,inst_24486);
var inst_24488 = (inst_24485) && (inst_24487);
var state_24508__$1 = state_24508;
var statearr_24558_24613 = state_24508__$1;
(statearr_24558_24613[(2)] = inst_24488);

(statearr_24558_24613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (10))){
var inst_24414 = (state_24508[(8)]);
var inst_24434 = (state_24508[(2)]);
var inst_24435 = cljs.core.get.call(null,inst_24434,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24436 = cljs.core.get.call(null,inst_24434,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24437 = cljs.core.get.call(null,inst_24434,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24438 = inst_24414;
var state_24508__$1 = (function (){var statearr_24559 = state_24508;
(statearr_24559[(16)] = inst_24437);

(statearr_24559[(17)] = inst_24435);

(statearr_24559[(18)] = inst_24436);

(statearr_24559[(7)] = inst_24438);

return statearr_24559;
})();
var statearr_24560_24614 = state_24508__$1;
(statearr_24560_24614[(2)] = null);

(statearr_24560_24614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (18))){
var inst_24452 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24561_24615 = state_24508__$1;
(statearr_24561_24615[(2)] = inst_24452);

(statearr_24561_24615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (37))){
var state_24508__$1 = state_24508;
var statearr_24562_24616 = state_24508__$1;
(statearr_24562_24616[(2)] = null);

(statearr_24562_24616[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (8))){
var inst_24414 = (state_24508[(8)]);
var inst_24431 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24414);
var state_24508__$1 = state_24508;
var statearr_24563_24617 = state_24508__$1;
(statearr_24563_24617[(2)] = inst_24431);

(statearr_24563_24617[(1)] = (10));


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
});})(c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20360__auto__,c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20361__auto__ = null;
var cljs$core$async$mix_$_state_machine__20361__auto____0 = (function (){
var statearr_24567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24567[(0)] = cljs$core$async$mix_$_state_machine__20361__auto__);

(statearr_24567[(1)] = (1));

return statearr_24567;
});
var cljs$core$async$mix_$_state_machine__20361__auto____1 = (function (state_24508){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e24568){if((e24568 instanceof Object)){
var ex__20364__auto__ = e24568;
var statearr_24569_24618 = state_24508;
(statearr_24569_24618[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24619 = state_24508;
state_24508 = G__24619;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20361__auto__ = function(state_24508){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20361__auto____1.call(this,state_24508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20361__auto____0;
cljs$core$async$mix_$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20361__auto____1;
return cljs$core$async$mix_$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20383__auto__ = (function (){var statearr_24570 = f__20382__auto__.call(null);
(statearr_24570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___24571);

return statearr_24570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___24571,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24620 = [];
var len__19428__auto___24623 = arguments.length;
var i__19429__auto___24624 = (0);
while(true){
if((i__19429__auto___24624 < len__19428__auto___24623)){
args24620.push((arguments[i__19429__auto___24624]));

var G__24625 = (i__19429__auto___24624 + (1));
i__19429__auto___24624 = G__24625;
continue;
} else {
}
break;
}

var G__24622 = args24620.length;
switch (G__24622) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24620.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24628 = [];
var len__19428__auto___24753 = arguments.length;
var i__19429__auto___24754 = (0);
while(true){
if((i__19429__auto___24754 < len__19428__auto___24753)){
args24628.push((arguments[i__19429__auto___24754]));

var G__24755 = (i__19429__auto___24754 + (1));
i__19429__auto___24754 = G__24755;
continue;
} else {
}
break;
}

var G__24630 = args24628.length;
switch (G__24630) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24628.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__24627_SHARP_){
if(cljs.core.truth_(p1__24627_SHARP_.call(null,topic))){
return p1__24627_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24627_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24631 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24632){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24632 = meta24632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24633,meta24632__$1){
var self__ = this;
var _24633__$1 = this;
return (new cljs.core.async.t_cljs$core$async24631(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24632__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24633){
var self__ = this;
var _24633__$1 = this;
return self__.meta24632;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24632","meta24632",2068915873,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24631";

cljs.core.async.t_cljs$core$async24631.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async24631");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24631 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24631(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24632){
return (new cljs.core.async.t_cljs$core$async24631(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24632));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24631(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20381__auto___24757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___24757,mults,ensure_mult,p){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___24757,mults,ensure_mult,p){
return (function (state_24705){
var state_val_24706 = (state_24705[(1)]);
if((state_val_24706 === (7))){
var inst_24701 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24707_24758 = state_24705__$1;
(statearr_24707_24758[(2)] = inst_24701);

(statearr_24707_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (20))){
var state_24705__$1 = state_24705;
var statearr_24708_24759 = state_24705__$1;
(statearr_24708_24759[(2)] = null);

(statearr_24708_24759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (1))){
var state_24705__$1 = state_24705;
var statearr_24709_24760 = state_24705__$1;
(statearr_24709_24760[(2)] = null);

(statearr_24709_24760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (24))){
var inst_24684 = (state_24705[(7)]);
var inst_24693 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24684);
var state_24705__$1 = state_24705;
var statearr_24710_24761 = state_24705__$1;
(statearr_24710_24761[(2)] = inst_24693);

(statearr_24710_24761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (4))){
var inst_24636 = (state_24705[(8)]);
var inst_24636__$1 = (state_24705[(2)]);
var inst_24637 = (inst_24636__$1 == null);
var state_24705__$1 = (function (){var statearr_24711 = state_24705;
(statearr_24711[(8)] = inst_24636__$1);

return statearr_24711;
})();
if(cljs.core.truth_(inst_24637)){
var statearr_24712_24762 = state_24705__$1;
(statearr_24712_24762[(1)] = (5));

} else {
var statearr_24713_24763 = state_24705__$1;
(statearr_24713_24763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (15))){
var inst_24678 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24714_24764 = state_24705__$1;
(statearr_24714_24764[(2)] = inst_24678);

(statearr_24714_24764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (21))){
var inst_24698 = (state_24705[(2)]);
var state_24705__$1 = (function (){var statearr_24715 = state_24705;
(statearr_24715[(9)] = inst_24698);

return statearr_24715;
})();
var statearr_24716_24765 = state_24705__$1;
(statearr_24716_24765[(2)] = null);

(statearr_24716_24765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (13))){
var inst_24660 = (state_24705[(10)]);
var inst_24662 = cljs.core.chunked_seq_QMARK_.call(null,inst_24660);
var state_24705__$1 = state_24705;
if(inst_24662){
var statearr_24717_24766 = state_24705__$1;
(statearr_24717_24766[(1)] = (16));

} else {
var statearr_24718_24767 = state_24705__$1;
(statearr_24718_24767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (22))){
var inst_24690 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
if(cljs.core.truth_(inst_24690)){
var statearr_24719_24768 = state_24705__$1;
(statearr_24719_24768[(1)] = (23));

} else {
var statearr_24720_24769 = state_24705__$1;
(statearr_24720_24769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (6))){
var inst_24686 = (state_24705[(11)]);
var inst_24636 = (state_24705[(8)]);
var inst_24684 = (state_24705[(7)]);
var inst_24684__$1 = topic_fn.call(null,inst_24636);
var inst_24685 = cljs.core.deref.call(null,mults);
var inst_24686__$1 = cljs.core.get.call(null,inst_24685,inst_24684__$1);
var state_24705__$1 = (function (){var statearr_24721 = state_24705;
(statearr_24721[(11)] = inst_24686__$1);

(statearr_24721[(7)] = inst_24684__$1);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24686__$1)){
var statearr_24722_24770 = state_24705__$1;
(statearr_24722_24770[(1)] = (19));

} else {
var statearr_24723_24771 = state_24705__$1;
(statearr_24723_24771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (25))){
var inst_24695 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24724_24772 = state_24705__$1;
(statearr_24724_24772[(2)] = inst_24695);

(statearr_24724_24772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (17))){
var inst_24660 = (state_24705[(10)]);
var inst_24669 = cljs.core.first.call(null,inst_24660);
var inst_24670 = cljs.core.async.muxch_STAR_.call(null,inst_24669);
var inst_24671 = cljs.core.async.close_BANG_.call(null,inst_24670);
var inst_24672 = cljs.core.next.call(null,inst_24660);
var inst_24646 = inst_24672;
var inst_24647 = null;
var inst_24648 = (0);
var inst_24649 = (0);
var state_24705__$1 = (function (){var statearr_24725 = state_24705;
(statearr_24725[(12)] = inst_24647);

(statearr_24725[(13)] = inst_24671);

(statearr_24725[(14)] = inst_24648);

(statearr_24725[(15)] = inst_24649);

(statearr_24725[(16)] = inst_24646);

return statearr_24725;
})();
var statearr_24726_24773 = state_24705__$1;
(statearr_24726_24773[(2)] = null);

(statearr_24726_24773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (3))){
var inst_24703 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24705__$1,inst_24703);
} else {
if((state_val_24706 === (12))){
var inst_24680 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24727_24774 = state_24705__$1;
(statearr_24727_24774[(2)] = inst_24680);

(statearr_24727_24774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (2))){
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24705__$1,(4),ch);
} else {
if((state_val_24706 === (23))){
var state_24705__$1 = state_24705;
var statearr_24728_24775 = state_24705__$1;
(statearr_24728_24775[(2)] = null);

(statearr_24728_24775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (19))){
var inst_24686 = (state_24705[(11)]);
var inst_24636 = (state_24705[(8)]);
var inst_24688 = cljs.core.async.muxch_STAR_.call(null,inst_24686);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24705__$1,(22),inst_24688,inst_24636);
} else {
if((state_val_24706 === (11))){
var inst_24660 = (state_24705[(10)]);
var inst_24646 = (state_24705[(16)]);
var inst_24660__$1 = cljs.core.seq.call(null,inst_24646);
var state_24705__$1 = (function (){var statearr_24729 = state_24705;
(statearr_24729[(10)] = inst_24660__$1);

return statearr_24729;
})();
if(inst_24660__$1){
var statearr_24730_24776 = state_24705__$1;
(statearr_24730_24776[(1)] = (13));

} else {
var statearr_24731_24777 = state_24705__$1;
(statearr_24731_24777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (9))){
var inst_24682 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24732_24778 = state_24705__$1;
(statearr_24732_24778[(2)] = inst_24682);

(statearr_24732_24778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (5))){
var inst_24643 = cljs.core.deref.call(null,mults);
var inst_24644 = cljs.core.vals.call(null,inst_24643);
var inst_24645 = cljs.core.seq.call(null,inst_24644);
var inst_24646 = inst_24645;
var inst_24647 = null;
var inst_24648 = (0);
var inst_24649 = (0);
var state_24705__$1 = (function (){var statearr_24733 = state_24705;
(statearr_24733[(12)] = inst_24647);

(statearr_24733[(14)] = inst_24648);

(statearr_24733[(15)] = inst_24649);

(statearr_24733[(16)] = inst_24646);

return statearr_24733;
})();
var statearr_24734_24779 = state_24705__$1;
(statearr_24734_24779[(2)] = null);

(statearr_24734_24779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (14))){
var state_24705__$1 = state_24705;
var statearr_24738_24780 = state_24705__$1;
(statearr_24738_24780[(2)] = null);

(statearr_24738_24780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (16))){
var inst_24660 = (state_24705[(10)]);
var inst_24664 = cljs.core.chunk_first.call(null,inst_24660);
var inst_24665 = cljs.core.chunk_rest.call(null,inst_24660);
var inst_24666 = cljs.core.count.call(null,inst_24664);
var inst_24646 = inst_24665;
var inst_24647 = inst_24664;
var inst_24648 = inst_24666;
var inst_24649 = (0);
var state_24705__$1 = (function (){var statearr_24739 = state_24705;
(statearr_24739[(12)] = inst_24647);

(statearr_24739[(14)] = inst_24648);

(statearr_24739[(15)] = inst_24649);

(statearr_24739[(16)] = inst_24646);

return statearr_24739;
})();
var statearr_24740_24781 = state_24705__$1;
(statearr_24740_24781[(2)] = null);

(statearr_24740_24781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (10))){
var inst_24647 = (state_24705[(12)]);
var inst_24648 = (state_24705[(14)]);
var inst_24649 = (state_24705[(15)]);
var inst_24646 = (state_24705[(16)]);
var inst_24654 = cljs.core._nth.call(null,inst_24647,inst_24649);
var inst_24655 = cljs.core.async.muxch_STAR_.call(null,inst_24654);
var inst_24656 = cljs.core.async.close_BANG_.call(null,inst_24655);
var inst_24657 = (inst_24649 + (1));
var tmp24735 = inst_24647;
var tmp24736 = inst_24648;
var tmp24737 = inst_24646;
var inst_24646__$1 = tmp24737;
var inst_24647__$1 = tmp24735;
var inst_24648__$1 = tmp24736;
var inst_24649__$1 = inst_24657;
var state_24705__$1 = (function (){var statearr_24741 = state_24705;
(statearr_24741[(17)] = inst_24656);

(statearr_24741[(12)] = inst_24647__$1);

(statearr_24741[(14)] = inst_24648__$1);

(statearr_24741[(15)] = inst_24649__$1);

(statearr_24741[(16)] = inst_24646__$1);

return statearr_24741;
})();
var statearr_24742_24782 = state_24705__$1;
(statearr_24742_24782[(2)] = null);

(statearr_24742_24782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (18))){
var inst_24675 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24743_24783 = state_24705__$1;
(statearr_24743_24783[(2)] = inst_24675);

(statearr_24743_24783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (8))){
var inst_24648 = (state_24705[(14)]);
var inst_24649 = (state_24705[(15)]);
var inst_24651 = (inst_24649 < inst_24648);
var inst_24652 = inst_24651;
var state_24705__$1 = state_24705;
if(cljs.core.truth_(inst_24652)){
var statearr_24744_24784 = state_24705__$1;
(statearr_24744_24784[(1)] = (10));

} else {
var statearr_24745_24785 = state_24705__$1;
(statearr_24745_24785[(1)] = (11));

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
});})(c__20381__auto___24757,mults,ensure_mult,p))
;
return ((function (switch__20360__auto__,c__20381__auto___24757,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_24749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24749[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_24749[(1)] = (1));

return statearr_24749;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_24705){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e24750){if((e24750 instanceof Object)){
var ex__20364__auto__ = e24750;
var statearr_24751_24786 = state_24705;
(statearr_24751_24786[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24787 = state_24705;
state_24705 = G__24787;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_24705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_24705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___24757,mults,ensure_mult,p))
})();
var state__20383__auto__ = (function (){var statearr_24752 = f__20382__auto__.call(null);
(statearr_24752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___24757);

return statearr_24752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___24757,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24788 = [];
var len__19428__auto___24791 = arguments.length;
var i__19429__auto___24792 = (0);
while(true){
if((i__19429__auto___24792 < len__19428__auto___24791)){
args24788.push((arguments[i__19429__auto___24792]));

var G__24793 = (i__19429__auto___24792 + (1));
i__19429__auto___24792 = G__24793;
continue;
} else {
}
break;
}

var G__24790 = args24788.length;
switch (G__24790) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24788.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24795 = [];
var len__19428__auto___24798 = arguments.length;
var i__19429__auto___24799 = (0);
while(true){
if((i__19429__auto___24799 < len__19428__auto___24798)){
args24795.push((arguments[i__19429__auto___24799]));

var G__24800 = (i__19429__auto___24799 + (1));
i__19429__auto___24799 = G__24800;
continue;
} else {
}
break;
}

var G__24797 = args24795.length;
switch (G__24797) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24795.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24802 = [];
var len__19428__auto___24873 = arguments.length;
var i__19429__auto___24874 = (0);
while(true){
if((i__19429__auto___24874 < len__19428__auto___24873)){
args24802.push((arguments[i__19429__auto___24874]));

var G__24875 = (i__19429__auto___24874 + (1));
i__19429__auto___24874 = G__24875;
continue;
} else {
}
break;
}

var G__24804 = args24802.length;
switch (G__24804) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24802.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20381__auto___24877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24843){
var state_val_24844 = (state_24843[(1)]);
if((state_val_24844 === (7))){
var state_24843__$1 = state_24843;
var statearr_24845_24878 = state_24843__$1;
(statearr_24845_24878[(2)] = null);

(statearr_24845_24878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (1))){
var state_24843__$1 = state_24843;
var statearr_24846_24879 = state_24843__$1;
(statearr_24846_24879[(2)] = null);

(statearr_24846_24879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (4))){
var inst_24807 = (state_24843[(7)]);
var inst_24809 = (inst_24807 < cnt);
var state_24843__$1 = state_24843;
if(cljs.core.truth_(inst_24809)){
var statearr_24847_24880 = state_24843__$1;
(statearr_24847_24880[(1)] = (6));

} else {
var statearr_24848_24881 = state_24843__$1;
(statearr_24848_24881[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (15))){
var inst_24839 = (state_24843[(2)]);
var state_24843__$1 = state_24843;
var statearr_24849_24882 = state_24843__$1;
(statearr_24849_24882[(2)] = inst_24839);

(statearr_24849_24882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (13))){
var inst_24832 = cljs.core.async.close_BANG_.call(null,out);
var state_24843__$1 = state_24843;
var statearr_24850_24883 = state_24843__$1;
(statearr_24850_24883[(2)] = inst_24832);

(statearr_24850_24883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (6))){
var state_24843__$1 = state_24843;
var statearr_24851_24884 = state_24843__$1;
(statearr_24851_24884[(2)] = null);

(statearr_24851_24884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (3))){
var inst_24841 = (state_24843[(2)]);
var state_24843__$1 = state_24843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24843__$1,inst_24841);
} else {
if((state_val_24844 === (12))){
var inst_24829 = (state_24843[(8)]);
var inst_24829__$1 = (state_24843[(2)]);
var inst_24830 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24829__$1);
var state_24843__$1 = (function (){var statearr_24852 = state_24843;
(statearr_24852[(8)] = inst_24829__$1);

return statearr_24852;
})();
if(cljs.core.truth_(inst_24830)){
var statearr_24853_24885 = state_24843__$1;
(statearr_24853_24885[(1)] = (13));

} else {
var statearr_24854_24886 = state_24843__$1;
(statearr_24854_24886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (2))){
var inst_24806 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24807 = (0);
var state_24843__$1 = (function (){var statearr_24855 = state_24843;
(statearr_24855[(9)] = inst_24806);

(statearr_24855[(7)] = inst_24807);

return statearr_24855;
})();
var statearr_24856_24887 = state_24843__$1;
(statearr_24856_24887[(2)] = null);

(statearr_24856_24887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (11))){
var inst_24807 = (state_24843[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24843,(10),Object,null,(9));
var inst_24816 = chs__$1.call(null,inst_24807);
var inst_24817 = done.call(null,inst_24807);
var inst_24818 = cljs.core.async.take_BANG_.call(null,inst_24816,inst_24817);
var state_24843__$1 = state_24843;
var statearr_24857_24888 = state_24843__$1;
(statearr_24857_24888[(2)] = inst_24818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (9))){
var inst_24807 = (state_24843[(7)]);
var inst_24820 = (state_24843[(2)]);
var inst_24821 = (inst_24807 + (1));
var inst_24807__$1 = inst_24821;
var state_24843__$1 = (function (){var statearr_24858 = state_24843;
(statearr_24858[(10)] = inst_24820);

(statearr_24858[(7)] = inst_24807__$1);

return statearr_24858;
})();
var statearr_24859_24889 = state_24843__$1;
(statearr_24859_24889[(2)] = null);

(statearr_24859_24889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (5))){
var inst_24827 = (state_24843[(2)]);
var state_24843__$1 = (function (){var statearr_24860 = state_24843;
(statearr_24860[(11)] = inst_24827);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24843__$1,(12),dchan);
} else {
if((state_val_24844 === (14))){
var inst_24829 = (state_24843[(8)]);
var inst_24834 = cljs.core.apply.call(null,f,inst_24829);
var state_24843__$1 = state_24843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24843__$1,(16),out,inst_24834);
} else {
if((state_val_24844 === (16))){
var inst_24836 = (state_24843[(2)]);
var state_24843__$1 = (function (){var statearr_24861 = state_24843;
(statearr_24861[(12)] = inst_24836);

return statearr_24861;
})();
var statearr_24862_24890 = state_24843__$1;
(statearr_24862_24890[(2)] = null);

(statearr_24862_24890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (10))){
var inst_24811 = (state_24843[(2)]);
var inst_24812 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24843__$1 = (function (){var statearr_24863 = state_24843;
(statearr_24863[(13)] = inst_24811);

return statearr_24863;
})();
var statearr_24864_24891 = state_24843__$1;
(statearr_24864_24891[(2)] = inst_24812);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24843__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24844 === (8))){
var inst_24825 = (state_24843[(2)]);
var state_24843__$1 = state_24843;
var statearr_24865_24892 = state_24843__$1;
(statearr_24865_24892[(2)] = inst_24825);

(statearr_24865_24892[(1)] = (5));


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
});})(c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20360__auto__,c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_24869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24869[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_24869[(1)] = (1));

return statearr_24869;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_24843){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e24870){if((e24870 instanceof Object)){
var ex__20364__auto__ = e24870;
var statearr_24871_24893 = state_24843;
(statearr_24871_24893[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24894 = state_24843;
state_24843 = G__24894;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_24843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_24843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20383__auto__ = (function (){var statearr_24872 = f__20382__auto__.call(null);
(statearr_24872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___24877);

return statearr_24872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___24877,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24896 = [];
var len__19428__auto___24952 = arguments.length;
var i__19429__auto___24953 = (0);
while(true){
if((i__19429__auto___24953 < len__19428__auto___24952)){
args24896.push((arguments[i__19429__auto___24953]));

var G__24954 = (i__19429__auto___24953 + (1));
i__19429__auto___24953 = G__24954;
continue;
} else {
}
break;
}

var G__24898 = args24896.length;
switch (G__24898) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24896.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___24956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___24956,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___24956,out){
return (function (state_24928){
var state_val_24929 = (state_24928[(1)]);
if((state_val_24929 === (7))){
var inst_24908 = (state_24928[(7)]);
var inst_24907 = (state_24928[(8)]);
var inst_24907__$1 = (state_24928[(2)]);
var inst_24908__$1 = cljs.core.nth.call(null,inst_24907__$1,(0),null);
var inst_24909 = cljs.core.nth.call(null,inst_24907__$1,(1),null);
var inst_24910 = (inst_24908__$1 == null);
var state_24928__$1 = (function (){var statearr_24930 = state_24928;
(statearr_24930[(7)] = inst_24908__$1);

(statearr_24930[(9)] = inst_24909);

(statearr_24930[(8)] = inst_24907__$1);

return statearr_24930;
})();
if(cljs.core.truth_(inst_24910)){
var statearr_24931_24957 = state_24928__$1;
(statearr_24931_24957[(1)] = (8));

} else {
var statearr_24932_24958 = state_24928__$1;
(statearr_24932_24958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (1))){
var inst_24899 = cljs.core.vec.call(null,chs);
var inst_24900 = inst_24899;
var state_24928__$1 = (function (){var statearr_24933 = state_24928;
(statearr_24933[(10)] = inst_24900);

return statearr_24933;
})();
var statearr_24934_24959 = state_24928__$1;
(statearr_24934_24959[(2)] = null);

(statearr_24934_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (4))){
var inst_24900 = (state_24928[(10)]);
var state_24928__$1 = state_24928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24928__$1,(7),inst_24900);
} else {
if((state_val_24929 === (6))){
var inst_24924 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24935_24960 = state_24928__$1;
(statearr_24935_24960[(2)] = inst_24924);

(statearr_24935_24960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (3))){
var inst_24926 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24928__$1,inst_24926);
} else {
if((state_val_24929 === (2))){
var inst_24900 = (state_24928[(10)]);
var inst_24902 = cljs.core.count.call(null,inst_24900);
var inst_24903 = (inst_24902 > (0));
var state_24928__$1 = state_24928;
if(cljs.core.truth_(inst_24903)){
var statearr_24937_24961 = state_24928__$1;
(statearr_24937_24961[(1)] = (4));

} else {
var statearr_24938_24962 = state_24928__$1;
(statearr_24938_24962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (11))){
var inst_24900 = (state_24928[(10)]);
var inst_24917 = (state_24928[(2)]);
var tmp24936 = inst_24900;
var inst_24900__$1 = tmp24936;
var state_24928__$1 = (function (){var statearr_24939 = state_24928;
(statearr_24939[(10)] = inst_24900__$1);

(statearr_24939[(11)] = inst_24917);

return statearr_24939;
})();
var statearr_24940_24963 = state_24928__$1;
(statearr_24940_24963[(2)] = null);

(statearr_24940_24963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (9))){
var inst_24908 = (state_24928[(7)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24928__$1,(11),out,inst_24908);
} else {
if((state_val_24929 === (5))){
var inst_24922 = cljs.core.async.close_BANG_.call(null,out);
var state_24928__$1 = state_24928;
var statearr_24941_24964 = state_24928__$1;
(statearr_24941_24964[(2)] = inst_24922);

(statearr_24941_24964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (10))){
var inst_24920 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24942_24965 = state_24928__$1;
(statearr_24942_24965[(2)] = inst_24920);

(statearr_24942_24965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24929 === (8))){
var inst_24908 = (state_24928[(7)]);
var inst_24909 = (state_24928[(9)]);
var inst_24907 = (state_24928[(8)]);
var inst_24900 = (state_24928[(10)]);
var inst_24912 = (function (){var cs = inst_24900;
var vec__24905 = inst_24907;
var v = inst_24908;
var c = inst_24909;
return ((function (cs,vec__24905,v,c,inst_24908,inst_24909,inst_24907,inst_24900,state_val_24929,c__20381__auto___24956,out){
return (function (p1__24895_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24895_SHARP_);
});
;})(cs,vec__24905,v,c,inst_24908,inst_24909,inst_24907,inst_24900,state_val_24929,c__20381__auto___24956,out))
})();
var inst_24913 = cljs.core.filterv.call(null,inst_24912,inst_24900);
var inst_24900__$1 = inst_24913;
var state_24928__$1 = (function (){var statearr_24943 = state_24928;
(statearr_24943[(10)] = inst_24900__$1);

return statearr_24943;
})();
var statearr_24944_24966 = state_24928__$1;
(statearr_24944_24966[(2)] = null);

(statearr_24944_24966[(1)] = (2));


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
});})(c__20381__auto___24956,out))
;
return ((function (switch__20360__auto__,c__20381__auto___24956,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_24948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24948[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_24948[(1)] = (1));

return statearr_24948;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_24928){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e24949){if((e24949 instanceof Object)){
var ex__20364__auto__ = e24949;
var statearr_24950_24967 = state_24928;
(statearr_24950_24967[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24968 = state_24928;
state_24928 = G__24968;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___24956,out))
})();
var state__20383__auto__ = (function (){var statearr_24951 = f__20382__auto__.call(null);
(statearr_24951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___24956);

return statearr_24951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___24956,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24969 = [];
var len__19428__auto___25018 = arguments.length;
var i__19429__auto___25019 = (0);
while(true){
if((i__19429__auto___25019 < len__19428__auto___25018)){
args24969.push((arguments[i__19429__auto___25019]));

var G__25020 = (i__19429__auto___25019 + (1));
i__19429__auto___25019 = G__25020;
continue;
} else {
}
break;
}

var G__24971 = args24969.length;
switch (G__24971) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24969.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___25022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___25022,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___25022,out){
return (function (state_24995){
var state_val_24996 = (state_24995[(1)]);
if((state_val_24996 === (7))){
var inst_24977 = (state_24995[(7)]);
var inst_24977__$1 = (state_24995[(2)]);
var inst_24978 = (inst_24977__$1 == null);
var inst_24979 = cljs.core.not.call(null,inst_24978);
var state_24995__$1 = (function (){var statearr_24997 = state_24995;
(statearr_24997[(7)] = inst_24977__$1);

return statearr_24997;
})();
if(inst_24979){
var statearr_24998_25023 = state_24995__$1;
(statearr_24998_25023[(1)] = (8));

} else {
var statearr_24999_25024 = state_24995__$1;
(statearr_24999_25024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (1))){
var inst_24972 = (0);
var state_24995__$1 = (function (){var statearr_25000 = state_24995;
(statearr_25000[(8)] = inst_24972);

return statearr_25000;
})();
var statearr_25001_25025 = state_24995__$1;
(statearr_25001_25025[(2)] = null);

(statearr_25001_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (4))){
var state_24995__$1 = state_24995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24995__$1,(7),ch);
} else {
if((state_val_24996 === (6))){
var inst_24990 = (state_24995[(2)]);
var state_24995__$1 = state_24995;
var statearr_25002_25026 = state_24995__$1;
(statearr_25002_25026[(2)] = inst_24990);

(statearr_25002_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (3))){
var inst_24992 = (state_24995[(2)]);
var inst_24993 = cljs.core.async.close_BANG_.call(null,out);
var state_24995__$1 = (function (){var statearr_25003 = state_24995;
(statearr_25003[(9)] = inst_24992);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24995__$1,inst_24993);
} else {
if((state_val_24996 === (2))){
var inst_24972 = (state_24995[(8)]);
var inst_24974 = (inst_24972 < n);
var state_24995__$1 = state_24995;
if(cljs.core.truth_(inst_24974)){
var statearr_25004_25027 = state_24995__$1;
(statearr_25004_25027[(1)] = (4));

} else {
var statearr_25005_25028 = state_24995__$1;
(statearr_25005_25028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (11))){
var inst_24972 = (state_24995[(8)]);
var inst_24982 = (state_24995[(2)]);
var inst_24983 = (inst_24972 + (1));
var inst_24972__$1 = inst_24983;
var state_24995__$1 = (function (){var statearr_25006 = state_24995;
(statearr_25006[(10)] = inst_24982);

(statearr_25006[(8)] = inst_24972__$1);

return statearr_25006;
})();
var statearr_25007_25029 = state_24995__$1;
(statearr_25007_25029[(2)] = null);

(statearr_25007_25029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (9))){
var state_24995__$1 = state_24995;
var statearr_25008_25030 = state_24995__$1;
(statearr_25008_25030[(2)] = null);

(statearr_25008_25030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (5))){
var state_24995__$1 = state_24995;
var statearr_25009_25031 = state_24995__$1;
(statearr_25009_25031[(2)] = null);

(statearr_25009_25031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (10))){
var inst_24987 = (state_24995[(2)]);
var state_24995__$1 = state_24995;
var statearr_25010_25032 = state_24995__$1;
(statearr_25010_25032[(2)] = inst_24987);

(statearr_25010_25032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24996 === (8))){
var inst_24977 = (state_24995[(7)]);
var state_24995__$1 = state_24995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24995__$1,(11),out,inst_24977);
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
});})(c__20381__auto___25022,out))
;
return ((function (switch__20360__auto__,c__20381__auto___25022,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25014[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_25014[(1)] = (1));

return statearr_25014;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_24995){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_24995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object)){
var ex__20364__auto__ = e25015;
var statearr_25016_25033 = state_24995;
(statearr_25016_25033[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25034 = state_24995;
state_24995 = G__25034;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_24995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_24995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___25022,out))
})();
var state__20383__auto__ = (function (){var statearr_25017 = f__20382__auto__.call(null);
(statearr_25017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___25022);

return statearr_25017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___25022,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25042 = (function (map_LT_,f,ch,meta25043){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25043 = meta25043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25044,meta25043__$1){
var self__ = this;
var _25044__$1 = this;
return (new cljs.core.async.t_cljs$core$async25042(self__.map_LT_,self__.f,self__.ch,meta25043__$1));
});

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25044){
var self__ = this;
var _25044__$1 = this;
return self__.meta25043;
});

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25045 = (function (map_LT_,f,ch,meta25043,_,fn1,meta25046){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25043 = meta25043;
this._ = _;
this.fn1 = fn1;
this.meta25046 = meta25046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25047,meta25046__$1){
var self__ = this;
var _25047__$1 = this;
return (new cljs.core.async.t_cljs$core$async25045(self__.map_LT_,self__.f,self__.ch,self__.meta25043,self__._,self__.fn1,meta25046__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25047){
var self__ = this;
var _25047__$1 = this;
return self__.meta25046;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25035_SHARP_){
return f1.call(null,(((p1__25035_SHARP_ == null))?null:self__.f.call(null,p1__25035_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25043","meta25043",1237092411,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25042","cljs.core.async/t_cljs$core$async25042",-1931472688,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25046","meta25046",4552774,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25045";

cljs.core.async.t_cljs$core$async25045.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async25045");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25045 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25045(map_LT___$1,f__$1,ch__$1,meta25043__$1,___$2,fn1__$1,meta25046){
return (new cljs.core.async.t_cljs$core$async25045(map_LT___$1,f__$1,ch__$1,meta25043__$1,___$2,fn1__$1,meta25046));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25045(self__.map_LT_,self__.f,self__.ch,self__.meta25043,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25043","meta25043",1237092411,null)], null);
});

cljs.core.async.t_cljs$core$async25042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25042";

cljs.core.async.t_cljs$core$async25042.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async25042");
});

cljs.core.async.__GT_t_cljs$core$async25042 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25042(map_LT___$1,f__$1,ch__$1,meta25043){
return (new cljs.core.async.t_cljs$core$async25042(map_LT___$1,f__$1,ch__$1,meta25043));
});

}

return (new cljs.core.async.t_cljs$core$async25042(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25051 = (function (map_GT_,f,ch,meta25052){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25052 = meta25052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25053,meta25052__$1){
var self__ = this;
var _25053__$1 = this;
return (new cljs.core.async.t_cljs$core$async25051(self__.map_GT_,self__.f,self__.ch,meta25052__$1));
});

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25053){
var self__ = this;
var _25053__$1 = this;
return self__.meta25052;
});

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25052","meta25052",1905671758,null)], null);
});

cljs.core.async.t_cljs$core$async25051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25051";

cljs.core.async.t_cljs$core$async25051.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async25051");
});

cljs.core.async.__GT_t_cljs$core$async25051 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25051(map_GT___$1,f__$1,ch__$1,meta25052){
return (new cljs.core.async.t_cljs$core$async25051(map_GT___$1,f__$1,ch__$1,meta25052));
});

}

return (new cljs.core.async.t_cljs$core$async25051(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25057 = (function (filter_GT_,p,ch,meta25058){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25058 = meta25058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25059,meta25058__$1){
var self__ = this;
var _25059__$1 = this;
return (new cljs.core.async.t_cljs$core$async25057(self__.filter_GT_,self__.p,self__.ch,meta25058__$1));
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25059){
var self__ = this;
var _25059__$1 = this;
return self__.meta25058;
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25058","meta25058",-1812985915,null)], null);
});

cljs.core.async.t_cljs$core$async25057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25057";

cljs.core.async.t_cljs$core$async25057.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async25057");
});

cljs.core.async.__GT_t_cljs$core$async25057 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25057(filter_GT___$1,p__$1,ch__$1,meta25058){
return (new cljs.core.async.t_cljs$core$async25057(filter_GT___$1,p__$1,ch__$1,meta25058));
});

}

return (new cljs.core.async.t_cljs$core$async25057(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25060 = [];
var len__19428__auto___25104 = arguments.length;
var i__19429__auto___25105 = (0);
while(true){
if((i__19429__auto___25105 < len__19428__auto___25104)){
args25060.push((arguments[i__19429__auto___25105]));

var G__25106 = (i__19429__auto___25105 + (1));
i__19429__auto___25105 = G__25106;
continue;
} else {
}
break;
}

var G__25062 = args25060.length;
switch (G__25062) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25060.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___25108,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___25108,out){
return (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (7))){
var inst_25079 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25085_25109 = state_25083__$1;
(statearr_25085_25109[(2)] = inst_25079);

(statearr_25085_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (1))){
var state_25083__$1 = state_25083;
var statearr_25086_25110 = state_25083__$1;
(statearr_25086_25110[(2)] = null);

(statearr_25086_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (4))){
var inst_25065 = (state_25083[(7)]);
var inst_25065__$1 = (state_25083[(2)]);
var inst_25066 = (inst_25065__$1 == null);
var state_25083__$1 = (function (){var statearr_25087 = state_25083;
(statearr_25087[(7)] = inst_25065__$1);

return statearr_25087;
})();
if(cljs.core.truth_(inst_25066)){
var statearr_25088_25111 = state_25083__$1;
(statearr_25088_25111[(1)] = (5));

} else {
var statearr_25089_25112 = state_25083__$1;
(statearr_25089_25112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (6))){
var inst_25065 = (state_25083[(7)]);
var inst_25070 = p.call(null,inst_25065);
var state_25083__$1 = state_25083;
if(cljs.core.truth_(inst_25070)){
var statearr_25090_25113 = state_25083__$1;
(statearr_25090_25113[(1)] = (8));

} else {
var statearr_25091_25114 = state_25083__$1;
(statearr_25091_25114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (3))){
var inst_25081 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else {
if((state_val_25084 === (2))){
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25083__$1,(4),ch);
} else {
if((state_val_25084 === (11))){
var inst_25073 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25092_25115 = state_25083__$1;
(statearr_25092_25115[(2)] = inst_25073);

(statearr_25092_25115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (9))){
var state_25083__$1 = state_25083;
var statearr_25093_25116 = state_25083__$1;
(statearr_25093_25116[(2)] = null);

(statearr_25093_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (5))){
var inst_25068 = cljs.core.async.close_BANG_.call(null,out);
var state_25083__$1 = state_25083;
var statearr_25094_25117 = state_25083__$1;
(statearr_25094_25117[(2)] = inst_25068);

(statearr_25094_25117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (10))){
var inst_25076 = (state_25083[(2)]);
var state_25083__$1 = (function (){var statearr_25095 = state_25083;
(statearr_25095[(8)] = inst_25076);

return statearr_25095;
})();
var statearr_25096_25118 = state_25083__$1;
(statearr_25096_25118[(2)] = null);

(statearr_25096_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (8))){
var inst_25065 = (state_25083[(7)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(11),out,inst_25065);
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
});})(c__20381__auto___25108,out))
;
return ((function (switch__20360__auto__,c__20381__auto___25108,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_25083){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__20364__auto__ = e25101;
var statearr_25102_25119 = state_25083;
(statearr_25102_25119[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25083;
state_25083 = G__25120;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___25108,out))
})();
var state__20383__auto__ = (function (){var statearr_25103 = f__20382__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___25108);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___25108,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25121 = [];
var len__19428__auto___25124 = arguments.length;
var i__19429__auto___25125 = (0);
while(true){
if((i__19429__auto___25125 < len__19428__auto___25124)){
args25121.push((arguments[i__19429__auto___25125]));

var G__25126 = (i__19429__auto___25125 + (1));
i__19429__auto___25125 = G__25126;
continue;
} else {
}
break;
}

var G__25123 = args25121.length;
switch (G__25123) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25121.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto__){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto__){
return (function (state_25293){
var state_val_25294 = (state_25293[(1)]);
if((state_val_25294 === (7))){
var inst_25289 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25295_25336 = state_25293__$1;
(statearr_25295_25336[(2)] = inst_25289);

(statearr_25295_25336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (20))){
var inst_25259 = (state_25293[(7)]);
var inst_25270 = (state_25293[(2)]);
var inst_25271 = cljs.core.next.call(null,inst_25259);
var inst_25245 = inst_25271;
var inst_25246 = null;
var inst_25247 = (0);
var inst_25248 = (0);
var state_25293__$1 = (function (){var statearr_25296 = state_25293;
(statearr_25296[(8)] = inst_25270);

(statearr_25296[(9)] = inst_25247);

(statearr_25296[(10)] = inst_25245);

(statearr_25296[(11)] = inst_25248);

(statearr_25296[(12)] = inst_25246);

return statearr_25296;
})();
var statearr_25297_25337 = state_25293__$1;
(statearr_25297_25337[(2)] = null);

(statearr_25297_25337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (1))){
var state_25293__$1 = state_25293;
var statearr_25298_25338 = state_25293__$1;
(statearr_25298_25338[(2)] = null);

(statearr_25298_25338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (4))){
var inst_25234 = (state_25293[(13)]);
var inst_25234__$1 = (state_25293[(2)]);
var inst_25235 = (inst_25234__$1 == null);
var state_25293__$1 = (function (){var statearr_25299 = state_25293;
(statearr_25299[(13)] = inst_25234__$1);

return statearr_25299;
})();
if(cljs.core.truth_(inst_25235)){
var statearr_25300_25339 = state_25293__$1;
(statearr_25300_25339[(1)] = (5));

} else {
var statearr_25301_25340 = state_25293__$1;
(statearr_25301_25340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (15))){
var state_25293__$1 = state_25293;
var statearr_25305_25341 = state_25293__$1;
(statearr_25305_25341[(2)] = null);

(statearr_25305_25341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (21))){
var state_25293__$1 = state_25293;
var statearr_25306_25342 = state_25293__$1;
(statearr_25306_25342[(2)] = null);

(statearr_25306_25342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (13))){
var inst_25247 = (state_25293[(9)]);
var inst_25245 = (state_25293[(10)]);
var inst_25248 = (state_25293[(11)]);
var inst_25246 = (state_25293[(12)]);
var inst_25255 = (state_25293[(2)]);
var inst_25256 = (inst_25248 + (1));
var tmp25302 = inst_25247;
var tmp25303 = inst_25245;
var tmp25304 = inst_25246;
var inst_25245__$1 = tmp25303;
var inst_25246__$1 = tmp25304;
var inst_25247__$1 = tmp25302;
var inst_25248__$1 = inst_25256;
var state_25293__$1 = (function (){var statearr_25307 = state_25293;
(statearr_25307[(9)] = inst_25247__$1);

(statearr_25307[(14)] = inst_25255);

(statearr_25307[(10)] = inst_25245__$1);

(statearr_25307[(11)] = inst_25248__$1);

(statearr_25307[(12)] = inst_25246__$1);

return statearr_25307;
})();
var statearr_25308_25343 = state_25293__$1;
(statearr_25308_25343[(2)] = null);

(statearr_25308_25343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (22))){
var state_25293__$1 = state_25293;
var statearr_25309_25344 = state_25293__$1;
(statearr_25309_25344[(2)] = null);

(statearr_25309_25344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (6))){
var inst_25234 = (state_25293[(13)]);
var inst_25243 = f.call(null,inst_25234);
var inst_25244 = cljs.core.seq.call(null,inst_25243);
var inst_25245 = inst_25244;
var inst_25246 = null;
var inst_25247 = (0);
var inst_25248 = (0);
var state_25293__$1 = (function (){var statearr_25310 = state_25293;
(statearr_25310[(9)] = inst_25247);

(statearr_25310[(10)] = inst_25245);

(statearr_25310[(11)] = inst_25248);

(statearr_25310[(12)] = inst_25246);

return statearr_25310;
})();
var statearr_25311_25345 = state_25293__$1;
(statearr_25311_25345[(2)] = null);

(statearr_25311_25345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (17))){
var inst_25259 = (state_25293[(7)]);
var inst_25263 = cljs.core.chunk_first.call(null,inst_25259);
var inst_25264 = cljs.core.chunk_rest.call(null,inst_25259);
var inst_25265 = cljs.core.count.call(null,inst_25263);
var inst_25245 = inst_25264;
var inst_25246 = inst_25263;
var inst_25247 = inst_25265;
var inst_25248 = (0);
var state_25293__$1 = (function (){var statearr_25312 = state_25293;
(statearr_25312[(9)] = inst_25247);

(statearr_25312[(10)] = inst_25245);

(statearr_25312[(11)] = inst_25248);

(statearr_25312[(12)] = inst_25246);

return statearr_25312;
})();
var statearr_25313_25346 = state_25293__$1;
(statearr_25313_25346[(2)] = null);

(statearr_25313_25346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (3))){
var inst_25291 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25293__$1,inst_25291);
} else {
if((state_val_25294 === (12))){
var inst_25279 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25314_25347 = state_25293__$1;
(statearr_25314_25347[(2)] = inst_25279);

(statearr_25314_25347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (2))){
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25293__$1,(4),in$);
} else {
if((state_val_25294 === (23))){
var inst_25287 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25315_25348 = state_25293__$1;
(statearr_25315_25348[(2)] = inst_25287);

(statearr_25315_25348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (19))){
var inst_25274 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25316_25349 = state_25293__$1;
(statearr_25316_25349[(2)] = inst_25274);

(statearr_25316_25349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (11))){
var inst_25259 = (state_25293[(7)]);
var inst_25245 = (state_25293[(10)]);
var inst_25259__$1 = cljs.core.seq.call(null,inst_25245);
var state_25293__$1 = (function (){var statearr_25317 = state_25293;
(statearr_25317[(7)] = inst_25259__$1);

return statearr_25317;
})();
if(inst_25259__$1){
var statearr_25318_25350 = state_25293__$1;
(statearr_25318_25350[(1)] = (14));

} else {
var statearr_25319_25351 = state_25293__$1;
(statearr_25319_25351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (9))){
var inst_25281 = (state_25293[(2)]);
var inst_25282 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25293__$1 = (function (){var statearr_25320 = state_25293;
(statearr_25320[(15)] = inst_25281);

return statearr_25320;
})();
if(cljs.core.truth_(inst_25282)){
var statearr_25321_25352 = state_25293__$1;
(statearr_25321_25352[(1)] = (21));

} else {
var statearr_25322_25353 = state_25293__$1;
(statearr_25322_25353[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (5))){
var inst_25237 = cljs.core.async.close_BANG_.call(null,out);
var state_25293__$1 = state_25293;
var statearr_25323_25354 = state_25293__$1;
(statearr_25323_25354[(2)] = inst_25237);

(statearr_25323_25354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (14))){
var inst_25259 = (state_25293[(7)]);
var inst_25261 = cljs.core.chunked_seq_QMARK_.call(null,inst_25259);
var state_25293__$1 = state_25293;
if(inst_25261){
var statearr_25324_25355 = state_25293__$1;
(statearr_25324_25355[(1)] = (17));

} else {
var statearr_25325_25356 = state_25293__$1;
(statearr_25325_25356[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (16))){
var inst_25277 = (state_25293[(2)]);
var state_25293__$1 = state_25293;
var statearr_25326_25357 = state_25293__$1;
(statearr_25326_25357[(2)] = inst_25277);

(statearr_25326_25357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25294 === (10))){
var inst_25248 = (state_25293[(11)]);
var inst_25246 = (state_25293[(12)]);
var inst_25253 = cljs.core._nth.call(null,inst_25246,inst_25248);
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25293__$1,(13),out,inst_25253);
} else {
if((state_val_25294 === (18))){
var inst_25259 = (state_25293[(7)]);
var inst_25268 = cljs.core.first.call(null,inst_25259);
var state_25293__$1 = state_25293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25293__$1,(20),out,inst_25268);
} else {
if((state_val_25294 === (8))){
var inst_25247 = (state_25293[(9)]);
var inst_25248 = (state_25293[(11)]);
var inst_25250 = (inst_25248 < inst_25247);
var inst_25251 = inst_25250;
var state_25293__$1 = state_25293;
if(cljs.core.truth_(inst_25251)){
var statearr_25327_25358 = state_25293__$1;
(statearr_25327_25358[(1)] = (10));

} else {
var statearr_25328_25359 = state_25293__$1;
(statearr_25328_25359[(1)] = (11));

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
});})(c__20381__auto__))
;
return ((function (switch__20360__auto__,c__20381__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____0 = (function (){
var statearr_25332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25332[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__);

(statearr_25332[(1)] = (1));

return statearr_25332;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____1 = (function (state_25293){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25333){if((e25333 instanceof Object)){
var ex__20364__auto__ = e25333;
var statearr_25334_25360 = state_25293;
(statearr_25334_25360[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25361 = state_25293;
state_25293 = G__25361;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__ = function(state_25293){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____1.call(this,state_25293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto__))
})();
var state__20383__auto__ = (function (){var statearr_25335 = f__20382__auto__.call(null);
(statearr_25335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto__);

return statearr_25335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto__))
);

return c__20381__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25362 = [];
var len__19428__auto___25365 = arguments.length;
var i__19429__auto___25366 = (0);
while(true){
if((i__19429__auto___25366 < len__19428__auto___25365)){
args25362.push((arguments[i__19429__auto___25366]));

var G__25367 = (i__19429__auto___25366 + (1));
i__19429__auto___25366 = G__25367;
continue;
} else {
}
break;
}

var G__25364 = args25362.length;
switch (G__25364) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25362.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25369 = [];
var len__19428__auto___25372 = arguments.length;
var i__19429__auto___25373 = (0);
while(true){
if((i__19429__auto___25373 < len__19428__auto___25372)){
args25369.push((arguments[i__19429__auto___25373]));

var G__25374 = (i__19429__auto___25373 + (1));
i__19429__auto___25373 = G__25374;
continue;
} else {
}
break;
}

var G__25371 = args25369.length;
switch (G__25371) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25369.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25376 = [];
var len__19428__auto___25427 = arguments.length;
var i__19429__auto___25428 = (0);
while(true){
if((i__19429__auto___25428 < len__19428__auto___25427)){
args25376.push((arguments[i__19429__auto___25428]));

var G__25429 = (i__19429__auto___25428 + (1));
i__19429__auto___25428 = G__25429;
continue;
} else {
}
break;
}

var G__25378 = args25376.length;
switch (G__25378) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25376.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___25431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___25431,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___25431,out){
return (function (state_25402){
var state_val_25403 = (state_25402[(1)]);
if((state_val_25403 === (7))){
var inst_25397 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25404_25432 = state_25402__$1;
(statearr_25404_25432[(2)] = inst_25397);

(statearr_25404_25432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (1))){
var inst_25379 = null;
var state_25402__$1 = (function (){var statearr_25405 = state_25402;
(statearr_25405[(7)] = inst_25379);

return statearr_25405;
})();
var statearr_25406_25433 = state_25402__$1;
(statearr_25406_25433[(2)] = null);

(statearr_25406_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (4))){
var inst_25382 = (state_25402[(8)]);
var inst_25382__$1 = (state_25402[(2)]);
var inst_25383 = (inst_25382__$1 == null);
var inst_25384 = cljs.core.not.call(null,inst_25383);
var state_25402__$1 = (function (){var statearr_25407 = state_25402;
(statearr_25407[(8)] = inst_25382__$1);

return statearr_25407;
})();
if(inst_25384){
var statearr_25408_25434 = state_25402__$1;
(statearr_25408_25434[(1)] = (5));

} else {
var statearr_25409_25435 = state_25402__$1;
(statearr_25409_25435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (6))){
var state_25402__$1 = state_25402;
var statearr_25410_25436 = state_25402__$1;
(statearr_25410_25436[(2)] = null);

(statearr_25410_25436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (3))){
var inst_25399 = (state_25402[(2)]);
var inst_25400 = cljs.core.async.close_BANG_.call(null,out);
var state_25402__$1 = (function (){var statearr_25411 = state_25402;
(statearr_25411[(9)] = inst_25399);

return statearr_25411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25402__$1,inst_25400);
} else {
if((state_val_25403 === (2))){
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25402__$1,(4),ch);
} else {
if((state_val_25403 === (11))){
var inst_25382 = (state_25402[(8)]);
var inst_25391 = (state_25402[(2)]);
var inst_25379 = inst_25382;
var state_25402__$1 = (function (){var statearr_25412 = state_25402;
(statearr_25412[(7)] = inst_25379);

(statearr_25412[(10)] = inst_25391);

return statearr_25412;
})();
var statearr_25413_25437 = state_25402__$1;
(statearr_25413_25437[(2)] = null);

(statearr_25413_25437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (9))){
var inst_25382 = (state_25402[(8)]);
var state_25402__$1 = state_25402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25402__$1,(11),out,inst_25382);
} else {
if((state_val_25403 === (5))){
var inst_25379 = (state_25402[(7)]);
var inst_25382 = (state_25402[(8)]);
var inst_25386 = cljs.core._EQ_.call(null,inst_25382,inst_25379);
var state_25402__$1 = state_25402;
if(inst_25386){
var statearr_25415_25438 = state_25402__$1;
(statearr_25415_25438[(1)] = (8));

} else {
var statearr_25416_25439 = state_25402__$1;
(statearr_25416_25439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (10))){
var inst_25394 = (state_25402[(2)]);
var state_25402__$1 = state_25402;
var statearr_25417_25440 = state_25402__$1;
(statearr_25417_25440[(2)] = inst_25394);

(statearr_25417_25440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25403 === (8))){
var inst_25379 = (state_25402[(7)]);
var tmp25414 = inst_25379;
var inst_25379__$1 = tmp25414;
var state_25402__$1 = (function (){var statearr_25418 = state_25402;
(statearr_25418[(7)] = inst_25379__$1);

return statearr_25418;
})();
var statearr_25419_25441 = state_25402__$1;
(statearr_25419_25441[(2)] = null);

(statearr_25419_25441[(1)] = (2));


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
});})(c__20381__auto___25431,out))
;
return ((function (switch__20360__auto__,c__20381__auto___25431,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_25423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25423[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_25423[(1)] = (1));

return statearr_25423;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_25402){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25424){if((e25424 instanceof Object)){
var ex__20364__auto__ = e25424;
var statearr_25425_25442 = state_25402;
(statearr_25425_25442[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25443 = state_25402;
state_25402 = G__25443;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_25402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_25402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___25431,out))
})();
var state__20383__auto__ = (function (){var statearr_25426 = f__20382__auto__.call(null);
(statearr_25426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___25431);

return statearr_25426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___25431,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25444 = [];
var len__19428__auto___25514 = arguments.length;
var i__19429__auto___25515 = (0);
while(true){
if((i__19429__auto___25515 < len__19428__auto___25514)){
args25444.push((arguments[i__19429__auto___25515]));

var G__25516 = (i__19429__auto___25515 + (1));
i__19429__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var G__25446 = args25444.length;
switch (G__25446) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25444.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___25518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___25518,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___25518,out){
return (function (state_25484){
var state_val_25485 = (state_25484[(1)]);
if((state_val_25485 === (7))){
var inst_25480 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25486_25519 = state_25484__$1;
(statearr_25486_25519[(2)] = inst_25480);

(statearr_25486_25519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (1))){
var inst_25447 = (new Array(n));
var inst_25448 = inst_25447;
var inst_25449 = (0);
var state_25484__$1 = (function (){var statearr_25487 = state_25484;
(statearr_25487[(7)] = inst_25448);

(statearr_25487[(8)] = inst_25449);

return statearr_25487;
})();
var statearr_25488_25520 = state_25484__$1;
(statearr_25488_25520[(2)] = null);

(statearr_25488_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (4))){
var inst_25452 = (state_25484[(9)]);
var inst_25452__$1 = (state_25484[(2)]);
var inst_25453 = (inst_25452__$1 == null);
var inst_25454 = cljs.core.not.call(null,inst_25453);
var state_25484__$1 = (function (){var statearr_25489 = state_25484;
(statearr_25489[(9)] = inst_25452__$1);

return statearr_25489;
})();
if(inst_25454){
var statearr_25490_25521 = state_25484__$1;
(statearr_25490_25521[(1)] = (5));

} else {
var statearr_25491_25522 = state_25484__$1;
(statearr_25491_25522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (15))){
var inst_25474 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25492_25523 = state_25484__$1;
(statearr_25492_25523[(2)] = inst_25474);

(statearr_25492_25523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (13))){
var state_25484__$1 = state_25484;
var statearr_25493_25524 = state_25484__$1;
(statearr_25493_25524[(2)] = null);

(statearr_25493_25524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (6))){
var inst_25449 = (state_25484[(8)]);
var inst_25470 = (inst_25449 > (0));
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25470)){
var statearr_25494_25525 = state_25484__$1;
(statearr_25494_25525[(1)] = (12));

} else {
var statearr_25495_25526 = state_25484__$1;
(statearr_25495_25526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (3))){
var inst_25482 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25484__$1,inst_25482);
} else {
if((state_val_25485 === (12))){
var inst_25448 = (state_25484[(7)]);
var inst_25472 = cljs.core.vec.call(null,inst_25448);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25484__$1,(15),out,inst_25472);
} else {
if((state_val_25485 === (2))){
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25484__$1,(4),ch);
} else {
if((state_val_25485 === (11))){
var inst_25464 = (state_25484[(2)]);
var inst_25465 = (new Array(n));
var inst_25448 = inst_25465;
var inst_25449 = (0);
var state_25484__$1 = (function (){var statearr_25496 = state_25484;
(statearr_25496[(7)] = inst_25448);

(statearr_25496[(8)] = inst_25449);

(statearr_25496[(10)] = inst_25464);

return statearr_25496;
})();
var statearr_25497_25527 = state_25484__$1;
(statearr_25497_25527[(2)] = null);

(statearr_25497_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (9))){
var inst_25448 = (state_25484[(7)]);
var inst_25462 = cljs.core.vec.call(null,inst_25448);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25484__$1,(11),out,inst_25462);
} else {
if((state_val_25485 === (5))){
var inst_25448 = (state_25484[(7)]);
var inst_25452 = (state_25484[(9)]);
var inst_25449 = (state_25484[(8)]);
var inst_25457 = (state_25484[(11)]);
var inst_25456 = (inst_25448[inst_25449] = inst_25452);
var inst_25457__$1 = (inst_25449 + (1));
var inst_25458 = (inst_25457__$1 < n);
var state_25484__$1 = (function (){var statearr_25498 = state_25484;
(statearr_25498[(12)] = inst_25456);

(statearr_25498[(11)] = inst_25457__$1);

return statearr_25498;
})();
if(cljs.core.truth_(inst_25458)){
var statearr_25499_25528 = state_25484__$1;
(statearr_25499_25528[(1)] = (8));

} else {
var statearr_25500_25529 = state_25484__$1;
(statearr_25500_25529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (14))){
var inst_25477 = (state_25484[(2)]);
var inst_25478 = cljs.core.async.close_BANG_.call(null,out);
var state_25484__$1 = (function (){var statearr_25502 = state_25484;
(statearr_25502[(13)] = inst_25477);

return statearr_25502;
})();
var statearr_25503_25530 = state_25484__$1;
(statearr_25503_25530[(2)] = inst_25478);

(statearr_25503_25530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (10))){
var inst_25468 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25504_25531 = state_25484__$1;
(statearr_25504_25531[(2)] = inst_25468);

(statearr_25504_25531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (8))){
var inst_25448 = (state_25484[(7)]);
var inst_25457 = (state_25484[(11)]);
var tmp25501 = inst_25448;
var inst_25448__$1 = tmp25501;
var inst_25449 = inst_25457;
var state_25484__$1 = (function (){var statearr_25505 = state_25484;
(statearr_25505[(7)] = inst_25448__$1);

(statearr_25505[(8)] = inst_25449);

return statearr_25505;
})();
var statearr_25506_25532 = state_25484__$1;
(statearr_25506_25532[(2)] = null);

(statearr_25506_25532[(1)] = (2));


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
});})(c__20381__auto___25518,out))
;
return ((function (switch__20360__auto__,c__20381__auto___25518,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_25510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25510[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_25510[(1)] = (1));

return statearr_25510;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_25484){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25511){if((e25511 instanceof Object)){
var ex__20364__auto__ = e25511;
var statearr_25512_25533 = state_25484;
(statearr_25512_25533[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25534 = state_25484;
state_25484 = G__25534;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_25484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_25484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___25518,out))
})();
var state__20383__auto__ = (function (){var statearr_25513 = f__20382__auto__.call(null);
(statearr_25513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___25518);

return statearr_25513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___25518,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25535 = [];
var len__19428__auto___25609 = arguments.length;
var i__19429__auto___25610 = (0);
while(true){
if((i__19429__auto___25610 < len__19428__auto___25609)){
args25535.push((arguments[i__19429__auto___25610]));

var G__25611 = (i__19429__auto___25610 + (1));
i__19429__auto___25610 = G__25611;
continue;
} else {
}
break;
}

var G__25537 = args25535.length;
switch (G__25537) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25535.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20381__auto___25613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20381__auto___25613,out){
return (function (){
var f__20382__auto__ = (function (){var switch__20360__auto__ = ((function (c__20381__auto___25613,out){
return (function (state_25579){
var state_val_25580 = (state_25579[(1)]);
if((state_val_25580 === (7))){
var inst_25575 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25581_25614 = state_25579__$1;
(statearr_25581_25614[(2)] = inst_25575);

(statearr_25581_25614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (1))){
var inst_25538 = [];
var inst_25539 = inst_25538;
var inst_25540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25579__$1 = (function (){var statearr_25582 = state_25579;
(statearr_25582[(7)] = inst_25539);

(statearr_25582[(8)] = inst_25540);

return statearr_25582;
})();
var statearr_25583_25615 = state_25579__$1;
(statearr_25583_25615[(2)] = null);

(statearr_25583_25615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (4))){
var inst_25543 = (state_25579[(9)]);
var inst_25543__$1 = (state_25579[(2)]);
var inst_25544 = (inst_25543__$1 == null);
var inst_25545 = cljs.core.not.call(null,inst_25544);
var state_25579__$1 = (function (){var statearr_25584 = state_25579;
(statearr_25584[(9)] = inst_25543__$1);

return statearr_25584;
})();
if(inst_25545){
var statearr_25585_25616 = state_25579__$1;
(statearr_25585_25616[(1)] = (5));

} else {
var statearr_25586_25617 = state_25579__$1;
(statearr_25586_25617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (15))){
var inst_25569 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25587_25618 = state_25579__$1;
(statearr_25587_25618[(2)] = inst_25569);

(statearr_25587_25618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (13))){
var state_25579__$1 = state_25579;
var statearr_25588_25619 = state_25579__$1;
(statearr_25588_25619[(2)] = null);

(statearr_25588_25619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (6))){
var inst_25539 = (state_25579[(7)]);
var inst_25564 = inst_25539.length;
var inst_25565 = (inst_25564 > (0));
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25565)){
var statearr_25589_25620 = state_25579__$1;
(statearr_25589_25620[(1)] = (12));

} else {
var statearr_25590_25621 = state_25579__$1;
(statearr_25590_25621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (3))){
var inst_25577 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25579__$1,inst_25577);
} else {
if((state_val_25580 === (12))){
var inst_25539 = (state_25579[(7)]);
var inst_25567 = cljs.core.vec.call(null,inst_25539);
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25579__$1,(15),out,inst_25567);
} else {
if((state_val_25580 === (2))){
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25579__$1,(4),ch);
} else {
if((state_val_25580 === (11))){
var inst_25543 = (state_25579[(9)]);
var inst_25547 = (state_25579[(10)]);
var inst_25557 = (state_25579[(2)]);
var inst_25558 = [];
var inst_25559 = inst_25558.push(inst_25543);
var inst_25539 = inst_25558;
var inst_25540 = inst_25547;
var state_25579__$1 = (function (){var statearr_25591 = state_25579;
(statearr_25591[(7)] = inst_25539);

(statearr_25591[(8)] = inst_25540);

(statearr_25591[(11)] = inst_25557);

(statearr_25591[(12)] = inst_25559);

return statearr_25591;
})();
var statearr_25592_25622 = state_25579__$1;
(statearr_25592_25622[(2)] = null);

(statearr_25592_25622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (9))){
var inst_25539 = (state_25579[(7)]);
var inst_25555 = cljs.core.vec.call(null,inst_25539);
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25579__$1,(11),out,inst_25555);
} else {
if((state_val_25580 === (5))){
var inst_25543 = (state_25579[(9)]);
var inst_25540 = (state_25579[(8)]);
var inst_25547 = (state_25579[(10)]);
var inst_25547__$1 = f.call(null,inst_25543);
var inst_25548 = cljs.core._EQ_.call(null,inst_25547__$1,inst_25540);
var inst_25549 = cljs.core.keyword_identical_QMARK_.call(null,inst_25540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25550 = (inst_25548) || (inst_25549);
var state_25579__$1 = (function (){var statearr_25593 = state_25579;
(statearr_25593[(10)] = inst_25547__$1);

return statearr_25593;
})();
if(cljs.core.truth_(inst_25550)){
var statearr_25594_25623 = state_25579__$1;
(statearr_25594_25623[(1)] = (8));

} else {
var statearr_25595_25624 = state_25579__$1;
(statearr_25595_25624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (14))){
var inst_25572 = (state_25579[(2)]);
var inst_25573 = cljs.core.async.close_BANG_.call(null,out);
var state_25579__$1 = (function (){var statearr_25597 = state_25579;
(statearr_25597[(13)] = inst_25572);

return statearr_25597;
})();
var statearr_25598_25625 = state_25579__$1;
(statearr_25598_25625[(2)] = inst_25573);

(statearr_25598_25625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (10))){
var inst_25562 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25599_25626 = state_25579__$1;
(statearr_25599_25626[(2)] = inst_25562);

(statearr_25599_25626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (8))){
var inst_25539 = (state_25579[(7)]);
var inst_25543 = (state_25579[(9)]);
var inst_25547 = (state_25579[(10)]);
var inst_25552 = inst_25539.push(inst_25543);
var tmp25596 = inst_25539;
var inst_25539__$1 = tmp25596;
var inst_25540 = inst_25547;
var state_25579__$1 = (function (){var statearr_25600 = state_25579;
(statearr_25600[(7)] = inst_25539__$1);

(statearr_25600[(8)] = inst_25540);

(statearr_25600[(14)] = inst_25552);

return statearr_25600;
})();
var statearr_25601_25627 = state_25579__$1;
(statearr_25601_25627[(2)] = null);

(statearr_25601_25627[(1)] = (2));


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
});})(c__20381__auto___25613,out))
;
return ((function (switch__20360__auto__,c__20381__auto___25613,out){
return (function() {
var cljs$core$async$state_machine__20361__auto__ = null;
var cljs$core$async$state_machine__20361__auto____0 = (function (){
var statearr_25605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25605[(0)] = cljs$core$async$state_machine__20361__auto__);

(statearr_25605[(1)] = (1));

return statearr_25605;
});
var cljs$core$async$state_machine__20361__auto____1 = (function (state_25579){
while(true){
var ret_value__20362__auto__ = (function (){try{while(true){
var result__20363__auto__ = switch__20360__auto__.call(null,state_25579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20363__auto__;
}
break;
}
}catch (e25606){if((e25606 instanceof Object)){
var ex__20364__auto__ = e25606;
var statearr_25607_25628 = state_25579;
(statearr_25607_25628[(5)] = ex__20364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25629 = state_25579;
state_25579 = G__25629;
continue;
} else {
return ret_value__20362__auto__;
}
break;
}
});
cljs$core$async$state_machine__20361__auto__ = function(state_25579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20361__auto____1.call(this,state_25579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20361__auto____0;
cljs$core$async$state_machine__20361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20361__auto____1;
return cljs$core$async$state_machine__20361__auto__;
})()
;})(switch__20360__auto__,c__20381__auto___25613,out))
})();
var state__20383__auto__ = (function (){var statearr_25608 = f__20382__auto__.call(null);
(statearr_25608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20381__auto___25613);

return statearr_25608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20383__auto__);
});})(c__20381__auto___25613,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map