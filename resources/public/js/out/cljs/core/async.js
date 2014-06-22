// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9121 = (function (f,fn_handler,meta9122){
this.f = f;
this.fn_handler = fn_handler;
this.meta9122 = meta9122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9121.cljs$lang$type = true;
cljs.core.async.t9121.cljs$lang$ctorStr = "cljs.core.async/t9121";
cljs.core.async.t9121.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9121");
});
cljs.core.async.t9121.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9123){var self__ = this;
var _9123__$1 = this;return self__.meta9122;
});
cljs.core.async.t9121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9123,meta9122__$1){var self__ = this;
var _9123__$1 = this;return (new cljs.core.async.t9121(self__.f,self__.fn_handler,meta9122__$1));
});
cljs.core.async.__GT_t9121 = (function __GT_t9121(f__$1,fn_handler__$1,meta9122){return (new cljs.core.async.t9121(f__$1,fn_handler__$1,meta9122));
});
}
return (new cljs.core.async.t9121(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9125 = buff;if(G__9125)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9125.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9125.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9125);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9125);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9126 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9126);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9126);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9127 = n;var x_9128 = 0;while(true){
if((x_9128 < n__4291__auto___9127))
{(a[x_9128] = 0);
{
var G__9129 = (x_9128 + 1);
x_9128 = G__9129;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9130 = (i + 1);
i = G__9130;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9134 = (function (flag,alt_flag,meta9135){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9135 = meta9135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9134.cljs$lang$type = true;
cljs.core.async.t9134.cljs$lang$ctorStr = "cljs.core.async/t9134";
cljs.core.async.t9134.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9134");
});
cljs.core.async.t9134.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9136){var self__ = this;
var _9136__$1 = this;return self__.meta9135;
});
cljs.core.async.t9134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9136,meta9135__$1){var self__ = this;
var _9136__$1 = this;return (new cljs.core.async.t9134(self__.flag,self__.alt_flag,meta9135__$1));
});
cljs.core.async.__GT_t9134 = (function __GT_t9134(flag__$1,alt_flag__$1,meta9135){return (new cljs.core.async.t9134(flag__$1,alt_flag__$1,meta9135));
});
}
return (new cljs.core.async.t9134(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9140 = (function (cb,flag,alt_handler,meta9141){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9141 = meta9141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9140.cljs$lang$type = true;
cljs.core.async.t9140.cljs$lang$ctorStr = "cljs.core.async/t9140";
cljs.core.async.t9140.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9140");
});
cljs.core.async.t9140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9142){var self__ = this;
var _9142__$1 = this;return self__.meta9141;
});
cljs.core.async.t9140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9142,meta9141__$1){var self__ = this;
var _9142__$1 = this;return (new cljs.core.async.t9140(self__.cb,self__.flag,self__.alt_handler,meta9141__$1));
});
cljs.core.async.__GT_t9140 = (function __GT_t9140(cb__$1,flag__$1,alt_handler__$1,meta9141){return (new cljs.core.async.t9140(cb__$1,flag__$1,alt_handler__$1,meta9141));
});
}
return (new cljs.core.async.t9140(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9143_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9143_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9144 = (i + 1);
i = G__9144;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9145){var map__9147 = p__9145;var map__9147__$1 = ((cljs.core.seq_QMARK_.call(null,map__9147))?cljs.core.apply.call(null,cljs.core.hash_map,map__9147):map__9147);var opts = map__9147__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9145 = null;if (arguments.length > 1) {
  p__9145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9145);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9148){
var ports = cljs.core.first(arglist__9148);
var p__9145 = cljs.core.rest(arglist__9148);
return alts_BANG___delegate(ports,p__9145);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9156 = (function (ch,f,map_LT_,meta9157){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9157 = meta9157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9156.cljs$lang$type = true;
cljs.core.async.t9156.cljs$lang$ctorStr = "cljs.core.async/t9156";
cljs.core.async.t9156.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9156");
});
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9159 = (function (fn1,_,meta9157,ch,f,map_LT_,meta9160){
this.fn1 = fn1;
this._ = _;
this.meta9157 = meta9157;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9160 = meta9160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9159.cljs$lang$type = true;
cljs.core.async.t9159.cljs$lang$ctorStr = "cljs.core.async/t9159";
cljs.core.async.t9159.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9159");
});
cljs.core.async.t9159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9159.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9149_SHARP_){return f1.call(null,(((p1__9149_SHARP_ == null))?null:self__.f.call(null,p1__9149_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9161){var self__ = this;
var _9161__$1 = this;return self__.meta9160;
});
cljs.core.async.t9159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9161,meta9160__$1){var self__ = this;
var _9161__$1 = this;return (new cljs.core.async.t9159(self__.fn1,self__._,self__.meta9157,self__.ch,self__.f,self__.map_LT_,meta9160__$1));
});
cljs.core.async.__GT_t9159 = (function __GT_t9159(fn1__$1,___$2,meta9157__$1,ch__$2,f__$2,map_LT___$2,meta9160){return (new cljs.core.async.t9159(fn1__$1,___$2,meta9157__$1,ch__$2,f__$2,map_LT___$2,meta9160));
});
}
return (new cljs.core.async.t9159(fn1,___$1,self__.meta9157,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9158){var self__ = this;
var _9158__$1 = this;return self__.meta9157;
});
cljs.core.async.t9156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9158,meta9157__$1){var self__ = this;
var _9158__$1 = this;return (new cljs.core.async.t9156(self__.ch,self__.f,self__.map_LT_,meta9157__$1));
});
cljs.core.async.__GT_t9156 = (function __GT_t9156(ch__$1,f__$1,map_LT___$1,meta9157){return (new cljs.core.async.t9156(ch__$1,f__$1,map_LT___$1,meta9157));
});
}
return (new cljs.core.async.t9156(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9165 = (function (ch,f,map_GT_,meta9166){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9166 = meta9166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9165.cljs$lang$type = true;
cljs.core.async.t9165.cljs$lang$ctorStr = "cljs.core.async/t9165";
cljs.core.async.t9165.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9165");
});
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9167){var self__ = this;
var _9167__$1 = this;return self__.meta9166;
});
cljs.core.async.t9165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9167,meta9166__$1){var self__ = this;
var _9167__$1 = this;return (new cljs.core.async.t9165(self__.ch,self__.f,self__.map_GT_,meta9166__$1));
});
cljs.core.async.__GT_t9165 = (function __GT_t9165(ch__$1,f__$1,map_GT___$1,meta9166){return (new cljs.core.async.t9165(ch__$1,f__$1,map_GT___$1,meta9166));
});
}
return (new cljs.core.async.t9165(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9171 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9171 = (function (ch,p,filter_GT_,meta9172){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9172 = meta9172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9171.cljs$lang$type = true;
cljs.core.async.t9171.cljs$lang$ctorStr = "cljs.core.async/t9171";
cljs.core.async.t9171.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9171");
});
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9173){var self__ = this;
var _9173__$1 = this;return self__.meta9172;
});
cljs.core.async.t9171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9173,meta9172__$1){var self__ = this;
var _9173__$1 = this;return (new cljs.core.async.t9171(self__.ch,self__.p,self__.filter_GT_,meta9172__$1));
});
cljs.core.async.__GT_t9171 = (function __GT_t9171(ch__$1,p__$1,filter_GT___$1,meta9172){return (new cljs.core.async.t9171(ch__$1,p__$1,filter_GT___$1,meta9172));
});
}
return (new cljs.core.async.t9171(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___9256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9235){var state_val_9236 = (state_9235[1]);if((state_val_9236 === 1))
{var state_9235__$1 = state_9235;var statearr_9237_9257 = state_9235__$1;(statearr_9237_9257[2] = null);
(statearr_9237_9257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 2))
{var state_9235__$1 = state_9235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9235__$1,4,ch);
} else
{if((state_val_9236 === 3))
{var inst_9233 = (state_9235[2]);var state_9235__$1 = state_9235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9235__$1,inst_9233);
} else
{if((state_val_9236 === 4))
{var inst_9217 = (state_9235[7]);var inst_9217__$1 = (state_9235[2]);var inst_9218 = (inst_9217__$1 == null);var state_9235__$1 = (function (){var statearr_9238 = state_9235;(statearr_9238[7] = inst_9217__$1);
return statearr_9238;
})();if(cljs.core.truth_(inst_9218))
{var statearr_9239_9258 = state_9235__$1;(statearr_9239_9258[1] = 5);
} else
{var statearr_9240_9259 = state_9235__$1;(statearr_9240_9259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 5))
{var inst_9220 = cljs.core.async.close_BANG_.call(null,out);var state_9235__$1 = state_9235;var statearr_9241_9260 = state_9235__$1;(statearr_9241_9260[2] = inst_9220);
(statearr_9241_9260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 6))
{var inst_9217 = (state_9235[7]);var inst_9222 = p.call(null,inst_9217);var state_9235__$1 = state_9235;if(cljs.core.truth_(inst_9222))
{var statearr_9242_9261 = state_9235__$1;(statearr_9242_9261[1] = 8);
} else
{var statearr_9243_9262 = state_9235__$1;(statearr_9243_9262[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 7))
{var inst_9231 = (state_9235[2]);var state_9235__$1 = state_9235;var statearr_9244_9263 = state_9235__$1;(statearr_9244_9263[2] = inst_9231);
(statearr_9244_9263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 8))
{var inst_9217 = (state_9235[7]);var state_9235__$1 = state_9235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9235__$1,11,out,inst_9217);
} else
{if((state_val_9236 === 9))
{var state_9235__$1 = state_9235;var statearr_9245_9264 = state_9235__$1;(statearr_9245_9264[2] = null);
(statearr_9245_9264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 10))
{var inst_9228 = (state_9235[2]);var state_9235__$1 = (function (){var statearr_9246 = state_9235;(statearr_9246[8] = inst_9228);
return statearr_9246;
})();var statearr_9247_9265 = state_9235__$1;(statearr_9247_9265[2] = null);
(statearr_9247_9265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9236 === 11))
{var inst_9225 = (state_9235[2]);var state_9235__$1 = state_9235;var statearr_9248_9266 = state_9235__$1;(statearr_9248_9266[2] = inst_9225);
(statearr_9248_9266[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9252 = [null,null,null,null,null,null,null,null,null];(statearr_9252[0] = state_machine__6721__auto__);
(statearr_9252[1] = 1);
return statearr_9252;
});
var state_machine__6721__auto____1 = (function (state_9235){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9253){if((e9253 instanceof Object))
{var ex__6724__auto__ = e9253;var statearr_9254_9267 = state_9235;(statearr_9254_9267[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9268 = state_9235;
state_9235 = G__9268;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9235){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9255 = f__6736__auto__.call(null);(statearr_9255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___9256);
return statearr_9255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6735__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9420){var state_val_9421 = (state_9420[1]);if((state_val_9421 === 1))
{var state_9420__$1 = state_9420;var statearr_9422_9459 = state_9420__$1;(statearr_9422_9459[2] = null);
(statearr_9422_9459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 2))
{var state_9420__$1 = state_9420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9420__$1,4,in$);
} else
{if((state_val_9421 === 3))
{var inst_9418 = (state_9420[2]);var state_9420__$1 = state_9420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9420__$1,inst_9418);
} else
{if((state_val_9421 === 4))
{var inst_9366 = (state_9420[7]);var inst_9366__$1 = (state_9420[2]);var inst_9367 = (inst_9366__$1 == null);var state_9420__$1 = (function (){var statearr_9423 = state_9420;(statearr_9423[7] = inst_9366__$1);
return statearr_9423;
})();if(cljs.core.truth_(inst_9367))
{var statearr_9424_9460 = state_9420__$1;(statearr_9424_9460[1] = 5);
} else
{var statearr_9425_9461 = state_9420__$1;(statearr_9425_9461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 5))
{var inst_9369 = cljs.core.async.close_BANG_.call(null,out);var state_9420__$1 = state_9420;var statearr_9426_9462 = state_9420__$1;(statearr_9426_9462[2] = inst_9369);
(statearr_9426_9462[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 6))
{var inst_9366 = (state_9420[7]);var inst_9371 = f.call(null,inst_9366);var inst_9376 = cljs.core.seq.call(null,inst_9371);var inst_9377 = inst_9376;var inst_9378 = null;var inst_9379 = 0;var inst_9380 = 0;var state_9420__$1 = (function (){var statearr_9427 = state_9420;(statearr_9427[8] = inst_9380);
(statearr_9427[9] = inst_9378);
(statearr_9427[10] = inst_9379);
(statearr_9427[11] = inst_9377);
return statearr_9427;
})();var statearr_9428_9463 = state_9420__$1;(statearr_9428_9463[2] = null);
(statearr_9428_9463[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 7))
{var inst_9416 = (state_9420[2]);var state_9420__$1 = state_9420;var statearr_9429_9464 = state_9420__$1;(statearr_9429_9464[2] = inst_9416);
(statearr_9429_9464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 8))
{var inst_9380 = (state_9420[8]);var inst_9379 = (state_9420[10]);var inst_9382 = (inst_9380 < inst_9379);var inst_9383 = inst_9382;var state_9420__$1 = state_9420;if(cljs.core.truth_(inst_9383))
{var statearr_9430_9465 = state_9420__$1;(statearr_9430_9465[1] = 10);
} else
{var statearr_9431_9466 = state_9420__$1;(statearr_9431_9466[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 9))
{var inst_9413 = (state_9420[2]);var state_9420__$1 = (function (){var statearr_9432 = state_9420;(statearr_9432[12] = inst_9413);
return statearr_9432;
})();var statearr_9433_9467 = state_9420__$1;(statearr_9433_9467[2] = null);
(statearr_9433_9467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 10))
{var inst_9380 = (state_9420[8]);var inst_9378 = (state_9420[9]);var inst_9385 = cljs.core._nth.call(null,inst_9378,inst_9380);var state_9420__$1 = state_9420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9420__$1,13,out,inst_9385);
} else
{if((state_val_9421 === 11))
{var inst_9391 = (state_9420[13]);var inst_9377 = (state_9420[11]);var inst_9391__$1 = cljs.core.seq.call(null,inst_9377);var state_9420__$1 = (function (){var statearr_9437 = state_9420;(statearr_9437[13] = inst_9391__$1);
return statearr_9437;
})();if(inst_9391__$1)
{var statearr_9438_9468 = state_9420__$1;(statearr_9438_9468[1] = 14);
} else
{var statearr_9439_9469 = state_9420__$1;(statearr_9439_9469[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 12))
{var inst_9411 = (state_9420[2]);var state_9420__$1 = state_9420;var statearr_9440_9470 = state_9420__$1;(statearr_9440_9470[2] = inst_9411);
(statearr_9440_9470[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 13))
{var inst_9380 = (state_9420[8]);var inst_9378 = (state_9420[9]);var inst_9379 = (state_9420[10]);var inst_9377 = (state_9420[11]);var inst_9387 = (state_9420[2]);var inst_9388 = (inst_9380 + 1);var tmp9434 = inst_9378;var tmp9435 = inst_9379;var tmp9436 = inst_9377;var inst_9377__$1 = tmp9436;var inst_9378__$1 = tmp9434;var inst_9379__$1 = tmp9435;var inst_9380__$1 = inst_9388;var state_9420__$1 = (function (){var statearr_9441 = state_9420;(statearr_9441[14] = inst_9387);
(statearr_9441[8] = inst_9380__$1);
(statearr_9441[9] = inst_9378__$1);
(statearr_9441[10] = inst_9379__$1);
(statearr_9441[11] = inst_9377__$1);
return statearr_9441;
})();var statearr_9442_9471 = state_9420__$1;(statearr_9442_9471[2] = null);
(statearr_9442_9471[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 14))
{var inst_9391 = (state_9420[13]);var inst_9393 = cljs.core.chunked_seq_QMARK_.call(null,inst_9391);var state_9420__$1 = state_9420;if(inst_9393)
{var statearr_9443_9472 = state_9420__$1;(statearr_9443_9472[1] = 17);
} else
{var statearr_9444_9473 = state_9420__$1;(statearr_9444_9473[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 15))
{var state_9420__$1 = state_9420;var statearr_9445_9474 = state_9420__$1;(statearr_9445_9474[2] = null);
(statearr_9445_9474[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 16))
{var inst_9409 = (state_9420[2]);var state_9420__$1 = state_9420;var statearr_9446_9475 = state_9420__$1;(statearr_9446_9475[2] = inst_9409);
(statearr_9446_9475[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 17))
{var inst_9391 = (state_9420[13]);var inst_9395 = cljs.core.chunk_first.call(null,inst_9391);var inst_9396 = cljs.core.chunk_rest.call(null,inst_9391);var inst_9397 = cljs.core.count.call(null,inst_9395);var inst_9377 = inst_9396;var inst_9378 = inst_9395;var inst_9379 = inst_9397;var inst_9380 = 0;var state_9420__$1 = (function (){var statearr_9447 = state_9420;(statearr_9447[8] = inst_9380);
(statearr_9447[9] = inst_9378);
(statearr_9447[10] = inst_9379);
(statearr_9447[11] = inst_9377);
return statearr_9447;
})();var statearr_9448_9476 = state_9420__$1;(statearr_9448_9476[2] = null);
(statearr_9448_9476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 18))
{var inst_9391 = (state_9420[13]);var inst_9400 = cljs.core.first.call(null,inst_9391);var state_9420__$1 = state_9420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9420__$1,20,out,inst_9400);
} else
{if((state_val_9421 === 19))
{var inst_9406 = (state_9420[2]);var state_9420__$1 = state_9420;var statearr_9449_9477 = state_9420__$1;(statearr_9449_9477[2] = inst_9406);
(statearr_9449_9477[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9421 === 20))
{var inst_9391 = (state_9420[13]);var inst_9402 = (state_9420[2]);var inst_9403 = cljs.core.next.call(null,inst_9391);var inst_9377 = inst_9403;var inst_9378 = null;var inst_9379 = 0;var inst_9380 = 0;var state_9420__$1 = (function (){var statearr_9450 = state_9420;(statearr_9450[15] = inst_9402);
(statearr_9450[8] = inst_9380);
(statearr_9450[9] = inst_9378);
(statearr_9450[10] = inst_9379);
(statearr_9450[11] = inst_9377);
return statearr_9450;
})();var statearr_9451_9478 = state_9420__$1;(statearr_9451_9478[2] = null);
(statearr_9451_9478[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9455[0] = state_machine__6721__auto__);
(statearr_9455[1] = 1);
return statearr_9455;
});
var state_machine__6721__auto____1 = (function (state_9420){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9456){if((e9456 instanceof Object))
{var ex__6724__auto__ = e9456;var statearr_9457_9479 = state_9420;(statearr_9457_9479[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9480 = state_9420;
state_9420 = G__9480;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9420){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9458 = f__6736__auto__.call(null);(statearr_9458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto__);
return statearr_9458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return c__6735__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6735__auto___9561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9540){var state_val_9541 = (state_9540[1]);if((state_val_9541 === 1))
{var state_9540__$1 = state_9540;var statearr_9542_9562 = state_9540__$1;(statearr_9542_9562[2] = null);
(statearr_9542_9562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 2))
{var state_9540__$1 = state_9540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9540__$1,4,from);
} else
{if((state_val_9541 === 3))
{var inst_9538 = (state_9540[2]);var state_9540__$1 = state_9540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9540__$1,inst_9538);
} else
{if((state_val_9541 === 4))
{var inst_9523 = (state_9540[7]);var inst_9523__$1 = (state_9540[2]);var inst_9524 = (inst_9523__$1 == null);var state_9540__$1 = (function (){var statearr_9543 = state_9540;(statearr_9543[7] = inst_9523__$1);
return statearr_9543;
})();if(cljs.core.truth_(inst_9524))
{var statearr_9544_9563 = state_9540__$1;(statearr_9544_9563[1] = 5);
} else
{var statearr_9545_9564 = state_9540__$1;(statearr_9545_9564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 5))
{var state_9540__$1 = state_9540;if(cljs.core.truth_(close_QMARK_))
{var statearr_9546_9565 = state_9540__$1;(statearr_9546_9565[1] = 8);
} else
{var statearr_9547_9566 = state_9540__$1;(statearr_9547_9566[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 6))
{var inst_9523 = (state_9540[7]);var state_9540__$1 = state_9540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9540__$1,11,to,inst_9523);
} else
{if((state_val_9541 === 7))
{var inst_9536 = (state_9540[2]);var state_9540__$1 = state_9540;var statearr_9548_9567 = state_9540__$1;(statearr_9548_9567[2] = inst_9536);
(statearr_9548_9567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 8))
{var inst_9527 = cljs.core.async.close_BANG_.call(null,to);var state_9540__$1 = state_9540;var statearr_9549_9568 = state_9540__$1;(statearr_9549_9568[2] = inst_9527);
(statearr_9549_9568[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 9))
{var state_9540__$1 = state_9540;var statearr_9550_9569 = state_9540__$1;(statearr_9550_9569[2] = null);
(statearr_9550_9569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 10))
{var inst_9530 = (state_9540[2]);var state_9540__$1 = state_9540;var statearr_9551_9570 = state_9540__$1;(statearr_9551_9570[2] = inst_9530);
(statearr_9551_9570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9541 === 11))
{var inst_9533 = (state_9540[2]);var state_9540__$1 = (function (){var statearr_9552 = state_9540;(statearr_9552[8] = inst_9533);
return statearr_9552;
})();var statearr_9553_9571 = state_9540__$1;(statearr_9553_9571[2] = null);
(statearr_9553_9571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9557 = [null,null,null,null,null,null,null,null,null];(statearr_9557[0] = state_machine__6721__auto__);
(statearr_9557[1] = 1);
return statearr_9557;
});
var state_machine__6721__auto____1 = (function (state_9540){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9558){if((e9558 instanceof Object))
{var ex__6724__auto__ = e9558;var statearr_9559_9572 = state_9540;(statearr_9559_9572[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9573 = state_9540;
state_9540 = G__9573;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9540){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9560 = f__6736__auto__.call(null);(statearr_9560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___9561);
return statearr_9560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6735__auto___9660 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9638){var state_val_9639 = (state_9638[1]);if((state_val_9639 === 1))
{var state_9638__$1 = state_9638;var statearr_9640_9661 = state_9638__$1;(statearr_9640_9661[2] = null);
(statearr_9640_9661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 2))
{var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9638__$1,4,ch);
} else
{if((state_val_9639 === 3))
{var inst_9636 = (state_9638[2]);var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9638__$1,inst_9636);
} else
{if((state_val_9639 === 4))
{var inst_9619 = (state_9638[7]);var inst_9619__$1 = (state_9638[2]);var inst_9620 = (inst_9619__$1 == null);var state_9638__$1 = (function (){var statearr_9641 = state_9638;(statearr_9641[7] = inst_9619__$1);
return statearr_9641;
})();if(cljs.core.truth_(inst_9620))
{var statearr_9642_9662 = state_9638__$1;(statearr_9642_9662[1] = 5);
} else
{var statearr_9643_9663 = state_9638__$1;(statearr_9643_9663[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 5))
{var inst_9622 = cljs.core.async.close_BANG_.call(null,tc);var inst_9623 = cljs.core.async.close_BANG_.call(null,fc);var state_9638__$1 = (function (){var statearr_9644 = state_9638;(statearr_9644[8] = inst_9622);
return statearr_9644;
})();var statearr_9645_9664 = state_9638__$1;(statearr_9645_9664[2] = inst_9623);
(statearr_9645_9664[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 6))
{var inst_9619 = (state_9638[7]);var inst_9625 = p.call(null,inst_9619);var state_9638__$1 = state_9638;if(cljs.core.truth_(inst_9625))
{var statearr_9646_9665 = state_9638__$1;(statearr_9646_9665[1] = 9);
} else
{var statearr_9647_9666 = state_9638__$1;(statearr_9647_9666[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 7))
{var inst_9634 = (state_9638[2]);var state_9638__$1 = state_9638;var statearr_9648_9667 = state_9638__$1;(statearr_9648_9667[2] = inst_9634);
(statearr_9648_9667[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 8))
{var inst_9631 = (state_9638[2]);var state_9638__$1 = (function (){var statearr_9649 = state_9638;(statearr_9649[9] = inst_9631);
return statearr_9649;
})();var statearr_9650_9668 = state_9638__$1;(statearr_9650_9668[2] = null);
(statearr_9650_9668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 9))
{var state_9638__$1 = state_9638;var statearr_9651_9669 = state_9638__$1;(statearr_9651_9669[2] = tc);
(statearr_9651_9669[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 10))
{var state_9638__$1 = state_9638;var statearr_9652_9670 = state_9638__$1;(statearr_9652_9670[2] = fc);
(statearr_9652_9670[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9639 === 11))
{var inst_9619 = (state_9638[7]);var inst_9629 = (state_9638[2]);var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9638__$1,8,inst_9629,inst_9619);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9656 = [null,null,null,null,null,null,null,null,null,null];(statearr_9656[0] = state_machine__6721__auto__);
(statearr_9656[1] = 1);
return statearr_9656;
});
var state_machine__6721__auto____1 = (function (state_9638){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9657){if((e9657 instanceof Object))
{var ex__6724__auto__ = e9657;var statearr_9658_9671 = state_9638;(statearr_9658_9671[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9657;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9672 = state_9638;
state_9638 = G__9672;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9638){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9659 = f__6736__auto__.call(null);(statearr_9659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___9660);
return statearr_9659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6735__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9719){var state_val_9720 = (state_9719[1]);if((state_val_9720 === 7))
{var inst_9715 = (state_9719[2]);var state_9719__$1 = state_9719;var statearr_9721_9737 = state_9719__$1;(statearr_9721_9737[2] = inst_9715);
(statearr_9721_9737[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9720 === 6))
{var inst_9705 = (state_9719[7]);var inst_9708 = (state_9719[8]);var inst_9712 = f.call(null,inst_9705,inst_9708);var inst_9705__$1 = inst_9712;var state_9719__$1 = (function (){var statearr_9722 = state_9719;(statearr_9722[7] = inst_9705__$1);
return statearr_9722;
})();var statearr_9723_9738 = state_9719__$1;(statearr_9723_9738[2] = null);
(statearr_9723_9738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9720 === 5))
{var inst_9705 = (state_9719[7]);var state_9719__$1 = state_9719;var statearr_9724_9739 = state_9719__$1;(statearr_9724_9739[2] = inst_9705);
(statearr_9724_9739[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9720 === 4))
{var inst_9708 = (state_9719[8]);var inst_9708__$1 = (state_9719[2]);var inst_9709 = (inst_9708__$1 == null);var state_9719__$1 = (function (){var statearr_9725 = state_9719;(statearr_9725[8] = inst_9708__$1);
return statearr_9725;
})();if(cljs.core.truth_(inst_9709))
{var statearr_9726_9740 = state_9719__$1;(statearr_9726_9740[1] = 5);
} else
{var statearr_9727_9741 = state_9719__$1;(statearr_9727_9741[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9720 === 3))
{var inst_9717 = (state_9719[2]);var state_9719__$1 = state_9719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9719__$1,inst_9717);
} else
{if((state_val_9720 === 2))
{var state_9719__$1 = state_9719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9719__$1,4,ch);
} else
{if((state_val_9720 === 1))
{var inst_9705 = init;var state_9719__$1 = (function (){var statearr_9728 = state_9719;(statearr_9728[7] = inst_9705);
return statearr_9728;
})();var statearr_9729_9742 = state_9719__$1;(statearr_9729_9742[2] = null);
(statearr_9729_9742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9733 = [null,null,null,null,null,null,null,null,null];(statearr_9733[0] = state_machine__6721__auto__);
(statearr_9733[1] = 1);
return statearr_9733;
});
var state_machine__6721__auto____1 = (function (state_9719){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9719);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9734){if((e9734 instanceof Object))
{var ex__6724__auto__ = e9734;var statearr_9735_9743 = state_9719;(statearr_9735_9743[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9744 = state_9719;
state_9719 = G__9744;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9719){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9736 = f__6736__auto__.call(null);(statearr_9736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto__);
return statearr_9736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return c__6735__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6735__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_9806){var state_val_9807 = (state_9806[1]);if((state_val_9807 === 1))
{var inst_9786 = cljs.core.seq.call(null,coll);var inst_9787 = inst_9786;var state_9806__$1 = (function (){var statearr_9808 = state_9806;(statearr_9808[7] = inst_9787);
return statearr_9808;
})();var statearr_9809_9827 = state_9806__$1;(statearr_9809_9827[2] = null);
(statearr_9809_9827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 2))
{var inst_9787 = (state_9806[7]);var state_9806__$1 = state_9806;if(cljs.core.truth_(inst_9787))
{var statearr_9810_9828 = state_9806__$1;(statearr_9810_9828[1] = 4);
} else
{var statearr_9811_9829 = state_9806__$1;(statearr_9811_9829[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 3))
{var inst_9804 = (state_9806[2]);var state_9806__$1 = state_9806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9806__$1,inst_9804);
} else
{if((state_val_9807 === 4))
{var inst_9787 = (state_9806[7]);var inst_9790 = cljs.core.first.call(null,inst_9787);var state_9806__$1 = state_9806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9806__$1,7,ch,inst_9790);
} else
{if((state_val_9807 === 5))
{var state_9806__$1 = state_9806;if(cljs.core.truth_(close_QMARK_))
{var statearr_9812_9830 = state_9806__$1;(statearr_9812_9830[1] = 8);
} else
{var statearr_9813_9831 = state_9806__$1;(statearr_9813_9831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 6))
{var inst_9802 = (state_9806[2]);var state_9806__$1 = state_9806;var statearr_9814_9832 = state_9806__$1;(statearr_9814_9832[2] = inst_9802);
(statearr_9814_9832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 7))
{var inst_9787 = (state_9806[7]);var inst_9792 = (state_9806[2]);var inst_9793 = cljs.core.next.call(null,inst_9787);var inst_9787__$1 = inst_9793;var state_9806__$1 = (function (){var statearr_9815 = state_9806;(statearr_9815[7] = inst_9787__$1);
(statearr_9815[8] = inst_9792);
return statearr_9815;
})();var statearr_9816_9833 = state_9806__$1;(statearr_9816_9833[2] = null);
(statearr_9816_9833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 8))
{var inst_9797 = cljs.core.async.close_BANG_.call(null,ch);var state_9806__$1 = state_9806;var statearr_9817_9834 = state_9806__$1;(statearr_9817_9834[2] = inst_9797);
(statearr_9817_9834[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 9))
{var state_9806__$1 = state_9806;var statearr_9818_9835 = state_9806__$1;(statearr_9818_9835[2] = null);
(statearr_9818_9835[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9807 === 10))
{var inst_9800 = (state_9806[2]);var state_9806__$1 = state_9806;var statearr_9819_9836 = state_9806__$1;(statearr_9819_9836[2] = inst_9800);
(statearr_9819_9836[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_9823 = [null,null,null,null,null,null,null,null,null];(statearr_9823[0] = state_machine__6721__auto__);
(statearr_9823[1] = 1);
return statearr_9823;
});
var state_machine__6721__auto____1 = (function (state_9806){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_9806);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e9824){if((e9824 instanceof Object))
{var ex__6724__auto__ = e9824;var statearr_9825_9837 = state_9806;(statearr_9825_9837[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9838 = state_9806;
state_9806 = G__9838;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_9806){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_9806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_9826 = f__6736__auto__.call(null);(statearr_9826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto__);
return statearr_9826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return c__6735__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9840 = {};return obj9840;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9842 = {};return obj9842;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10066 = (function (cs,ch,mult,meta10067){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10067 = meta10067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10066.cljs$lang$type = true;
cljs.core.async.t10066.cljs$lang$ctorStr = "cljs.core.async/t10066";
cljs.core.async.t10066.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10066");
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10066.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10068){var self__ = this;
var _10068__$1 = this;return self__.meta10067;
});})(cs))
;
cljs.core.async.t10066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10068,meta10067__$1){var self__ = this;
var _10068__$1 = this;return (new cljs.core.async.t10066(self__.cs,self__.ch,self__.mult,meta10067__$1));
});})(cs))
;
cljs.core.async.__GT_t10066 = ((function (cs){
return (function __GT_t10066(cs__$1,ch__$1,mult__$1,meta10067){return (new cljs.core.async.t10066(cs__$1,ch__$1,mult__$1,meta10067));
});})(cs))
;
}
return (new cljs.core.async.t10066(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6735__auto___10289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_10203){var state_val_10204 = (state_10203[1]);if((state_val_10204 === 32))
{var inst_10147 = (state_10203[7]);var inst_10071 = (state_10203[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10203,31,Object,null,30);var inst_10154 = cljs.core.async.put_BANG_.call(null,inst_10147,inst_10071,done);var state_10203__$1 = state_10203;var statearr_10205_10290 = state_10203__$1;(statearr_10205_10290[2] = inst_10154);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 1))
{var state_10203__$1 = state_10203;var statearr_10206_10291 = state_10203__$1;(statearr_10206_10291[2] = null);
(statearr_10206_10291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 33))
{var inst_10160 = (state_10203[9]);var inst_10162 = cljs.core.chunked_seq_QMARK_.call(null,inst_10160);var state_10203__$1 = state_10203;if(inst_10162)
{var statearr_10207_10292 = state_10203__$1;(statearr_10207_10292[1] = 36);
} else
{var statearr_10208_10293 = state_10203__$1;(statearr_10208_10293[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 2))
{var state_10203__$1 = state_10203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10203__$1,4,ch);
} else
{if((state_val_10204 === 34))
{var state_10203__$1 = state_10203;var statearr_10209_10294 = state_10203__$1;(statearr_10209_10294[2] = null);
(statearr_10209_10294[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 3))
{var inst_10201 = (state_10203[2]);var state_10203__$1 = state_10203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10203__$1,inst_10201);
} else
{if((state_val_10204 === 35))
{var inst_10185 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10210_10295 = state_10203__$1;(statearr_10210_10295[2] = inst_10185);
(statearr_10210_10295[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 4))
{var inst_10071 = (state_10203[8]);var inst_10071__$1 = (state_10203[2]);var inst_10072 = (inst_10071__$1 == null);var state_10203__$1 = (function (){var statearr_10211 = state_10203;(statearr_10211[8] = inst_10071__$1);
return statearr_10211;
})();if(cljs.core.truth_(inst_10072))
{var statearr_10212_10296 = state_10203__$1;(statearr_10212_10296[1] = 5);
} else
{var statearr_10213_10297 = state_10203__$1;(statearr_10213_10297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 36))
{var inst_10160 = (state_10203[9]);var inst_10164 = cljs.core.chunk_first.call(null,inst_10160);var inst_10165 = cljs.core.chunk_rest.call(null,inst_10160);var inst_10166 = cljs.core.count.call(null,inst_10164);var inst_10139 = inst_10165;var inst_10140 = inst_10164;var inst_10141 = inst_10166;var inst_10142 = 0;var state_10203__$1 = (function (){var statearr_10214 = state_10203;(statearr_10214[10] = inst_10141);
(statearr_10214[11] = inst_10142);
(statearr_10214[12] = inst_10140);
(statearr_10214[13] = inst_10139);
return statearr_10214;
})();var statearr_10215_10298 = state_10203__$1;(statearr_10215_10298[2] = null);
(statearr_10215_10298[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 5))
{var inst_10078 = cljs.core.deref.call(null,cs);var inst_10079 = cljs.core.seq.call(null,inst_10078);var inst_10080 = inst_10079;var inst_10081 = null;var inst_10082 = 0;var inst_10083 = 0;var state_10203__$1 = (function (){var statearr_10216 = state_10203;(statearr_10216[14] = inst_10081);
(statearr_10216[15] = inst_10080);
(statearr_10216[16] = inst_10083);
(statearr_10216[17] = inst_10082);
return statearr_10216;
})();var statearr_10217_10299 = state_10203__$1;(statearr_10217_10299[2] = null);
(statearr_10217_10299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 37))
{var inst_10160 = (state_10203[9]);var inst_10169 = cljs.core.first.call(null,inst_10160);var state_10203__$1 = (function (){var statearr_10218 = state_10203;(statearr_10218[18] = inst_10169);
return statearr_10218;
})();var statearr_10219_10300 = state_10203__$1;(statearr_10219_10300[2] = null);
(statearr_10219_10300[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 6))
{var inst_10131 = (state_10203[19]);var inst_10130 = cljs.core.deref.call(null,cs);var inst_10131__$1 = cljs.core.keys.call(null,inst_10130);var inst_10132 = cljs.core.count.call(null,inst_10131__$1);var inst_10133 = cljs.core.reset_BANG_.call(null,dctr,inst_10132);var inst_10138 = cljs.core.seq.call(null,inst_10131__$1);var inst_10139 = inst_10138;var inst_10140 = null;var inst_10141 = 0;var inst_10142 = 0;var state_10203__$1 = (function (){var statearr_10220 = state_10203;(statearr_10220[20] = inst_10133);
(statearr_10220[19] = inst_10131__$1);
(statearr_10220[10] = inst_10141);
(statearr_10220[11] = inst_10142);
(statearr_10220[12] = inst_10140);
(statearr_10220[13] = inst_10139);
return statearr_10220;
})();var statearr_10221_10301 = state_10203__$1;(statearr_10221_10301[2] = null);
(statearr_10221_10301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 38))
{var inst_10182 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10222_10302 = state_10203__$1;(statearr_10222_10302[2] = inst_10182);
(statearr_10222_10302[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 7))
{var inst_10199 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10223_10303 = state_10203__$1;(statearr_10223_10303[2] = inst_10199);
(statearr_10223_10303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 39))
{var inst_10160 = (state_10203[9]);var inst_10178 = (state_10203[2]);var inst_10179 = cljs.core.next.call(null,inst_10160);var inst_10139 = inst_10179;var inst_10140 = null;var inst_10141 = 0;var inst_10142 = 0;var state_10203__$1 = (function (){var statearr_10224 = state_10203;(statearr_10224[21] = inst_10178);
(statearr_10224[10] = inst_10141);
(statearr_10224[11] = inst_10142);
(statearr_10224[12] = inst_10140);
(statearr_10224[13] = inst_10139);
return statearr_10224;
})();var statearr_10225_10304 = state_10203__$1;(statearr_10225_10304[2] = null);
(statearr_10225_10304[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 8))
{var inst_10083 = (state_10203[16]);var inst_10082 = (state_10203[17]);var inst_10085 = (inst_10083 < inst_10082);var inst_10086 = inst_10085;var state_10203__$1 = state_10203;if(cljs.core.truth_(inst_10086))
{var statearr_10226_10305 = state_10203__$1;(statearr_10226_10305[1] = 10);
} else
{var statearr_10227_10306 = state_10203__$1;(statearr_10227_10306[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 40))
{var inst_10169 = (state_10203[18]);var inst_10170 = (state_10203[2]);var inst_10171 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10172 = cljs.core.async.untap_STAR_.call(null,m,inst_10169);var state_10203__$1 = (function (){var statearr_10228 = state_10203;(statearr_10228[22] = inst_10171);
(statearr_10228[23] = inst_10170);
return statearr_10228;
})();var statearr_10229_10307 = state_10203__$1;(statearr_10229_10307[2] = inst_10172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 9))
{var inst_10128 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10230_10308 = state_10203__$1;(statearr_10230_10308[2] = inst_10128);
(statearr_10230_10308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 41))
{var inst_10169 = (state_10203[18]);var inst_10071 = (state_10203[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10203,40,Object,null,39);var inst_10176 = cljs.core.async.put_BANG_.call(null,inst_10169,inst_10071,done);var state_10203__$1 = state_10203;var statearr_10231_10309 = state_10203__$1;(statearr_10231_10309[2] = inst_10176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 10))
{var inst_10081 = (state_10203[14]);var inst_10083 = (state_10203[16]);var inst_10089 = cljs.core._nth.call(null,inst_10081,inst_10083);var inst_10090 = cljs.core.nth.call(null,inst_10089,0,null);var inst_10091 = cljs.core.nth.call(null,inst_10089,1,null);var state_10203__$1 = (function (){var statearr_10232 = state_10203;(statearr_10232[24] = inst_10090);
return statearr_10232;
})();if(cljs.core.truth_(inst_10091))
{var statearr_10233_10310 = state_10203__$1;(statearr_10233_10310[1] = 13);
} else
{var statearr_10234_10311 = state_10203__$1;(statearr_10234_10311[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 42))
{var state_10203__$1 = state_10203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10203__$1,45,dchan);
} else
{if((state_val_10204 === 11))
{var inst_10080 = (state_10203[15]);var inst_10100 = (state_10203[25]);var inst_10100__$1 = cljs.core.seq.call(null,inst_10080);var state_10203__$1 = (function (){var statearr_10235 = state_10203;(statearr_10235[25] = inst_10100__$1);
return statearr_10235;
})();if(inst_10100__$1)
{var statearr_10236_10312 = state_10203__$1;(statearr_10236_10312[1] = 16);
} else
{var statearr_10237_10313 = state_10203__$1;(statearr_10237_10313[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 43))
{var state_10203__$1 = state_10203;var statearr_10238_10314 = state_10203__$1;(statearr_10238_10314[2] = null);
(statearr_10238_10314[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 12))
{var inst_10126 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10239_10315 = state_10203__$1;(statearr_10239_10315[2] = inst_10126);
(statearr_10239_10315[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 44))
{var inst_10196 = (state_10203[2]);var state_10203__$1 = (function (){var statearr_10240 = state_10203;(statearr_10240[26] = inst_10196);
return statearr_10240;
})();var statearr_10241_10316 = state_10203__$1;(statearr_10241_10316[2] = null);
(statearr_10241_10316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 13))
{var inst_10090 = (state_10203[24]);var inst_10093 = cljs.core.async.close_BANG_.call(null,inst_10090);var state_10203__$1 = state_10203;var statearr_10242_10317 = state_10203__$1;(statearr_10242_10317[2] = inst_10093);
(statearr_10242_10317[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 45))
{var inst_10193 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10246_10318 = state_10203__$1;(statearr_10246_10318[2] = inst_10193);
(statearr_10246_10318[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 14))
{var state_10203__$1 = state_10203;var statearr_10247_10319 = state_10203__$1;(statearr_10247_10319[2] = null);
(statearr_10247_10319[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 15))
{var inst_10081 = (state_10203[14]);var inst_10080 = (state_10203[15]);var inst_10083 = (state_10203[16]);var inst_10082 = (state_10203[17]);var inst_10096 = (state_10203[2]);var inst_10097 = (inst_10083 + 1);var tmp10243 = inst_10081;var tmp10244 = inst_10080;var tmp10245 = inst_10082;var inst_10080__$1 = tmp10244;var inst_10081__$1 = tmp10243;var inst_10082__$1 = tmp10245;var inst_10083__$1 = inst_10097;var state_10203__$1 = (function (){var statearr_10248 = state_10203;(statearr_10248[14] = inst_10081__$1);
(statearr_10248[15] = inst_10080__$1);
(statearr_10248[16] = inst_10083__$1);
(statearr_10248[17] = inst_10082__$1);
(statearr_10248[27] = inst_10096);
return statearr_10248;
})();var statearr_10249_10320 = state_10203__$1;(statearr_10249_10320[2] = null);
(statearr_10249_10320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 16))
{var inst_10100 = (state_10203[25]);var inst_10102 = cljs.core.chunked_seq_QMARK_.call(null,inst_10100);var state_10203__$1 = state_10203;if(inst_10102)
{var statearr_10250_10321 = state_10203__$1;(statearr_10250_10321[1] = 19);
} else
{var statearr_10251_10322 = state_10203__$1;(statearr_10251_10322[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 17))
{var state_10203__$1 = state_10203;var statearr_10252_10323 = state_10203__$1;(statearr_10252_10323[2] = null);
(statearr_10252_10323[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 18))
{var inst_10124 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10253_10324 = state_10203__$1;(statearr_10253_10324[2] = inst_10124);
(statearr_10253_10324[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 19))
{var inst_10100 = (state_10203[25]);var inst_10104 = cljs.core.chunk_first.call(null,inst_10100);var inst_10105 = cljs.core.chunk_rest.call(null,inst_10100);var inst_10106 = cljs.core.count.call(null,inst_10104);var inst_10080 = inst_10105;var inst_10081 = inst_10104;var inst_10082 = inst_10106;var inst_10083 = 0;var state_10203__$1 = (function (){var statearr_10254 = state_10203;(statearr_10254[14] = inst_10081);
(statearr_10254[15] = inst_10080);
(statearr_10254[16] = inst_10083);
(statearr_10254[17] = inst_10082);
return statearr_10254;
})();var statearr_10255_10325 = state_10203__$1;(statearr_10255_10325[2] = null);
(statearr_10255_10325[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 20))
{var inst_10100 = (state_10203[25]);var inst_10110 = cljs.core.first.call(null,inst_10100);var inst_10111 = cljs.core.nth.call(null,inst_10110,0,null);var inst_10112 = cljs.core.nth.call(null,inst_10110,1,null);var state_10203__$1 = (function (){var statearr_10256 = state_10203;(statearr_10256[28] = inst_10111);
return statearr_10256;
})();if(cljs.core.truth_(inst_10112))
{var statearr_10257_10326 = state_10203__$1;(statearr_10257_10326[1] = 22);
} else
{var statearr_10258_10327 = state_10203__$1;(statearr_10258_10327[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 21))
{var inst_10121 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10259_10328 = state_10203__$1;(statearr_10259_10328[2] = inst_10121);
(statearr_10259_10328[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 22))
{var inst_10111 = (state_10203[28]);var inst_10114 = cljs.core.async.close_BANG_.call(null,inst_10111);var state_10203__$1 = state_10203;var statearr_10260_10329 = state_10203__$1;(statearr_10260_10329[2] = inst_10114);
(statearr_10260_10329[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 23))
{var state_10203__$1 = state_10203;var statearr_10261_10330 = state_10203__$1;(statearr_10261_10330[2] = null);
(statearr_10261_10330[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 24))
{var inst_10100 = (state_10203[25]);var inst_10117 = (state_10203[2]);var inst_10118 = cljs.core.next.call(null,inst_10100);var inst_10080 = inst_10118;var inst_10081 = null;var inst_10082 = 0;var inst_10083 = 0;var state_10203__$1 = (function (){var statearr_10262 = state_10203;(statearr_10262[14] = inst_10081);
(statearr_10262[15] = inst_10080);
(statearr_10262[16] = inst_10083);
(statearr_10262[17] = inst_10082);
(statearr_10262[29] = inst_10117);
return statearr_10262;
})();var statearr_10263_10331 = state_10203__$1;(statearr_10263_10331[2] = null);
(statearr_10263_10331[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 25))
{var inst_10141 = (state_10203[10]);var inst_10142 = (state_10203[11]);var inst_10144 = (inst_10142 < inst_10141);var inst_10145 = inst_10144;var state_10203__$1 = state_10203;if(cljs.core.truth_(inst_10145))
{var statearr_10264_10332 = state_10203__$1;(statearr_10264_10332[1] = 27);
} else
{var statearr_10265_10333 = state_10203__$1;(statearr_10265_10333[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 26))
{var inst_10131 = (state_10203[19]);var inst_10189 = (state_10203[2]);var inst_10190 = cljs.core.seq.call(null,inst_10131);var state_10203__$1 = (function (){var statearr_10266 = state_10203;(statearr_10266[30] = inst_10189);
return statearr_10266;
})();if(inst_10190)
{var statearr_10267_10334 = state_10203__$1;(statearr_10267_10334[1] = 42);
} else
{var statearr_10268_10335 = state_10203__$1;(statearr_10268_10335[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 27))
{var inst_10142 = (state_10203[11]);var inst_10140 = (state_10203[12]);var inst_10147 = cljs.core._nth.call(null,inst_10140,inst_10142);var state_10203__$1 = (function (){var statearr_10269 = state_10203;(statearr_10269[7] = inst_10147);
return statearr_10269;
})();var statearr_10270_10336 = state_10203__$1;(statearr_10270_10336[2] = null);
(statearr_10270_10336[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 28))
{var inst_10160 = (state_10203[9]);var inst_10139 = (state_10203[13]);var inst_10160__$1 = cljs.core.seq.call(null,inst_10139);var state_10203__$1 = (function (){var statearr_10274 = state_10203;(statearr_10274[9] = inst_10160__$1);
return statearr_10274;
})();if(inst_10160__$1)
{var statearr_10275_10337 = state_10203__$1;(statearr_10275_10337[1] = 33);
} else
{var statearr_10276_10338 = state_10203__$1;(statearr_10276_10338[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 29))
{var inst_10187 = (state_10203[2]);var state_10203__$1 = state_10203;var statearr_10277_10339 = state_10203__$1;(statearr_10277_10339[2] = inst_10187);
(statearr_10277_10339[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 30))
{var inst_10141 = (state_10203[10]);var inst_10142 = (state_10203[11]);var inst_10140 = (state_10203[12]);var inst_10139 = (state_10203[13]);var inst_10156 = (state_10203[2]);var inst_10157 = (inst_10142 + 1);var tmp10271 = inst_10141;var tmp10272 = inst_10140;var tmp10273 = inst_10139;var inst_10139__$1 = tmp10273;var inst_10140__$1 = tmp10272;var inst_10141__$1 = tmp10271;var inst_10142__$1 = inst_10157;var state_10203__$1 = (function (){var statearr_10278 = state_10203;(statearr_10278[10] = inst_10141__$1);
(statearr_10278[11] = inst_10142__$1);
(statearr_10278[12] = inst_10140__$1);
(statearr_10278[31] = inst_10156);
(statearr_10278[13] = inst_10139__$1);
return statearr_10278;
})();var statearr_10279_10340 = state_10203__$1;(statearr_10279_10340[2] = null);
(statearr_10279_10340[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10204 === 31))
{var inst_10147 = (state_10203[7]);var inst_10148 = (state_10203[2]);var inst_10149 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10150 = cljs.core.async.untap_STAR_.call(null,m,inst_10147);var state_10203__$1 = (function (){var statearr_10280 = state_10203;(statearr_10280[32] = inst_10148);
(statearr_10280[33] = inst_10149);
return statearr_10280;
})();var statearr_10281_10341 = state_10203__$1;(statearr_10281_10341[2] = inst_10150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_10285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10285[0] = state_machine__6721__auto__);
(statearr_10285[1] = 1);
return statearr_10285;
});
var state_machine__6721__auto____1 = (function (state_10203){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_10203);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e10286){if((e10286 instanceof Object))
{var ex__6724__auto__ = e10286;var statearr_10287_10342 = state_10203;(statearr_10287_10342[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10343 = state_10203;
state_10203 = G__10343;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_10203){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_10203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_10288 = f__6736__auto__.call(null);(statearr_10288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___10289);
return statearr_10288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10345 = {};return obj10345;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10455 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10456){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10456 = meta10456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10455.cljs$lang$type = true;
cljs.core.async.t10455.cljs$lang$ctorStr = "cljs.core.async/t10455";
cljs.core.async.t10455.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10455");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10457){var self__ = this;
var _10457__$1 = this;return self__.meta10456;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10457,meta10456__$1){var self__ = this;
var _10457__$1 = this;return (new cljs.core.async.t10455(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10456__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10455 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10455(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10456){return (new cljs.core.async.t10455(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10456));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10455(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6735__auto___10564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_10522){var state_val_10523 = (state_10522[1]);if((state_val_10523 === 1))
{var inst_10461 = (state_10522[7]);var inst_10461__$1 = calc_state.call(null);var inst_10462 = cljs.core.seq_QMARK_.call(null,inst_10461__$1);var state_10522__$1 = (function (){var statearr_10524 = state_10522;(statearr_10524[7] = inst_10461__$1);
return statearr_10524;
})();if(inst_10462)
{var statearr_10525_10565 = state_10522__$1;(statearr_10525_10565[1] = 2);
} else
{var statearr_10526_10566 = state_10522__$1;(statearr_10526_10566[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 2))
{var inst_10461 = (state_10522[7]);var inst_10464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10461);var state_10522__$1 = state_10522;var statearr_10527_10567 = state_10522__$1;(statearr_10527_10567[2] = inst_10464);
(statearr_10527_10567[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 3))
{var inst_10461 = (state_10522[7]);var state_10522__$1 = state_10522;var statearr_10528_10568 = state_10522__$1;(statearr_10528_10568[2] = inst_10461);
(statearr_10528_10568[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 4))
{var inst_10461 = (state_10522[7]);var inst_10467 = (state_10522[2]);var inst_10468 = cljs.core.get.call(null,inst_10467,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10469 = cljs.core.get.call(null,inst_10467,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10470 = cljs.core.get.call(null,inst_10467,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10471 = inst_10461;var state_10522__$1 = (function (){var statearr_10529 = state_10522;(statearr_10529[8] = inst_10468);
(statearr_10529[9] = inst_10469);
(statearr_10529[10] = inst_10471);
(statearr_10529[11] = inst_10470);
return statearr_10529;
})();var statearr_10530_10569 = state_10522__$1;(statearr_10530_10569[2] = null);
(statearr_10530_10569[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 5))
{var inst_10471 = (state_10522[10]);var inst_10474 = cljs.core.seq_QMARK_.call(null,inst_10471);var state_10522__$1 = state_10522;if(inst_10474)
{var statearr_10531_10570 = state_10522__$1;(statearr_10531_10570[1] = 7);
} else
{var statearr_10532_10571 = state_10522__$1;(statearr_10532_10571[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 6))
{var inst_10520 = (state_10522[2]);var state_10522__$1 = state_10522;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10522__$1,inst_10520);
} else
{if((state_val_10523 === 7))
{var inst_10471 = (state_10522[10]);var inst_10476 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10471);var state_10522__$1 = state_10522;var statearr_10533_10572 = state_10522__$1;(statearr_10533_10572[2] = inst_10476);
(statearr_10533_10572[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 8))
{var inst_10471 = (state_10522[10]);var state_10522__$1 = state_10522;var statearr_10534_10573 = state_10522__$1;(statearr_10534_10573[2] = inst_10471);
(statearr_10534_10573[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 9))
{var inst_10479 = (state_10522[12]);var inst_10479__$1 = (state_10522[2]);var inst_10480 = cljs.core.get.call(null,inst_10479__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10481 = cljs.core.get.call(null,inst_10479__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10482 = cljs.core.get.call(null,inst_10479__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10522__$1 = (function (){var statearr_10535 = state_10522;(statearr_10535[13] = inst_10482);
(statearr_10535[14] = inst_10481);
(statearr_10535[12] = inst_10479__$1);
return statearr_10535;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10522__$1,10,inst_10480);
} else
{if((state_val_10523 === 10))
{var inst_10487 = (state_10522[15]);var inst_10486 = (state_10522[16]);var inst_10485 = (state_10522[2]);var inst_10486__$1 = cljs.core.nth.call(null,inst_10485,0,null);var inst_10487__$1 = cljs.core.nth.call(null,inst_10485,1,null);var inst_10488 = (inst_10486__$1 == null);var inst_10489 = cljs.core._EQ_.call(null,inst_10487__$1,change);var inst_10490 = (inst_10488) || (inst_10489);var state_10522__$1 = (function (){var statearr_10536 = state_10522;(statearr_10536[15] = inst_10487__$1);
(statearr_10536[16] = inst_10486__$1);
return statearr_10536;
})();if(cljs.core.truth_(inst_10490))
{var statearr_10537_10574 = state_10522__$1;(statearr_10537_10574[1] = 11);
} else
{var statearr_10538_10575 = state_10522__$1;(statearr_10538_10575[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 11))
{var inst_10486 = (state_10522[16]);var inst_10492 = (inst_10486 == null);var state_10522__$1 = state_10522;if(cljs.core.truth_(inst_10492))
{var statearr_10539_10576 = state_10522__$1;(statearr_10539_10576[1] = 14);
} else
{var statearr_10540_10577 = state_10522__$1;(statearr_10540_10577[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 12))
{var inst_10482 = (state_10522[13]);var inst_10487 = (state_10522[15]);var inst_10501 = (state_10522[17]);var inst_10501__$1 = inst_10482.call(null,inst_10487);var state_10522__$1 = (function (){var statearr_10541 = state_10522;(statearr_10541[17] = inst_10501__$1);
return statearr_10541;
})();if(cljs.core.truth_(inst_10501__$1))
{var statearr_10542_10578 = state_10522__$1;(statearr_10542_10578[1] = 17);
} else
{var statearr_10543_10579 = state_10522__$1;(statearr_10543_10579[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 13))
{var inst_10518 = (state_10522[2]);var state_10522__$1 = state_10522;var statearr_10544_10580 = state_10522__$1;(statearr_10544_10580[2] = inst_10518);
(statearr_10544_10580[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 14))
{var inst_10487 = (state_10522[15]);var inst_10494 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10487);var state_10522__$1 = state_10522;var statearr_10545_10581 = state_10522__$1;(statearr_10545_10581[2] = inst_10494);
(statearr_10545_10581[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 15))
{var state_10522__$1 = state_10522;var statearr_10546_10582 = state_10522__$1;(statearr_10546_10582[2] = null);
(statearr_10546_10582[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 16))
{var inst_10497 = (state_10522[2]);var inst_10498 = calc_state.call(null);var inst_10471 = inst_10498;var state_10522__$1 = (function (){var statearr_10547 = state_10522;(statearr_10547[18] = inst_10497);
(statearr_10547[10] = inst_10471);
return statearr_10547;
})();var statearr_10548_10583 = state_10522__$1;(statearr_10548_10583[2] = null);
(statearr_10548_10583[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 17))
{var inst_10501 = (state_10522[17]);var state_10522__$1 = state_10522;var statearr_10549_10584 = state_10522__$1;(statearr_10549_10584[2] = inst_10501);
(statearr_10549_10584[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 18))
{var inst_10482 = (state_10522[13]);var inst_10481 = (state_10522[14]);var inst_10487 = (state_10522[15]);var inst_10504 = cljs.core.empty_QMARK_.call(null,inst_10482);var inst_10505 = inst_10481.call(null,inst_10487);var inst_10506 = cljs.core.not.call(null,inst_10505);var inst_10507 = (inst_10504) && (inst_10506);var state_10522__$1 = state_10522;var statearr_10550_10585 = state_10522__$1;(statearr_10550_10585[2] = inst_10507);
(statearr_10550_10585[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 19))
{var inst_10509 = (state_10522[2]);var state_10522__$1 = state_10522;if(cljs.core.truth_(inst_10509))
{var statearr_10551_10586 = state_10522__$1;(statearr_10551_10586[1] = 20);
} else
{var statearr_10552_10587 = state_10522__$1;(statearr_10552_10587[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 20))
{var inst_10486 = (state_10522[16]);var state_10522__$1 = state_10522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10522__$1,23,out,inst_10486);
} else
{if((state_val_10523 === 21))
{var state_10522__$1 = state_10522;var statearr_10553_10588 = state_10522__$1;(statearr_10553_10588[2] = null);
(statearr_10553_10588[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 22))
{var inst_10479 = (state_10522[12]);var inst_10515 = (state_10522[2]);var inst_10471 = inst_10479;var state_10522__$1 = (function (){var statearr_10554 = state_10522;(statearr_10554[19] = inst_10515);
(statearr_10554[10] = inst_10471);
return statearr_10554;
})();var statearr_10555_10589 = state_10522__$1;(statearr_10555_10589[2] = null);
(statearr_10555_10589[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10523 === 23))
{var inst_10512 = (state_10522[2]);var state_10522__$1 = state_10522;var statearr_10556_10590 = state_10522__$1;(statearr_10556_10590[2] = inst_10512);
(statearr_10556_10590[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_10560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10560[0] = state_machine__6721__auto__);
(statearr_10560[1] = 1);
return statearr_10560;
});
var state_machine__6721__auto____1 = (function (state_10522){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_10522);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e10561){if((e10561 instanceof Object))
{var ex__6724__auto__ = e10561;var statearr_10562_10591 = state_10522;(statearr_10562_10591[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10522);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10592 = state_10522;
state_10522 = G__10592;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_10522){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_10522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_10563 = f__6736__auto__.call(null);(statearr_10563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___10564);
return statearr_10563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10594 = {};return obj10594;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__10595_SHARP_){if(cljs.core.truth_(p1__10595_SHARP_.call(null,topic)))
{return p1__10595_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10595_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10720 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10721){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10721 = meta10721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10720.cljs$lang$type = true;
cljs.core.async.t10720.cljs$lang$ctorStr = "cljs.core.async/t10720";
cljs.core.async.t10720.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10720");
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10720.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10722){var self__ = this;
var _10722__$1 = this;return self__.meta10721;
});})(mults,ensure_mult))
;
cljs.core.async.t10720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10722,meta10721__$1){var self__ = this;
var _10722__$1 = this;return (new cljs.core.async.t10720(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10721__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10720 = ((function (mults,ensure_mult){
return (function __GT_t10720(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10721){return (new cljs.core.async.t10720(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10721));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10720(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6735__auto___10844 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_10796){var state_val_10797 = (state_10796[1]);if((state_val_10797 === 1))
{var state_10796__$1 = state_10796;var statearr_10798_10845 = state_10796__$1;(statearr_10798_10845[2] = null);
(statearr_10798_10845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 2))
{var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10796__$1,4,ch);
} else
{if((state_val_10797 === 3))
{var inst_10794 = (state_10796[2]);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10796__$1,inst_10794);
} else
{if((state_val_10797 === 4))
{var inst_10725 = (state_10796[7]);var inst_10725__$1 = (state_10796[2]);var inst_10726 = (inst_10725__$1 == null);var state_10796__$1 = (function (){var statearr_10799 = state_10796;(statearr_10799[7] = inst_10725__$1);
return statearr_10799;
})();if(cljs.core.truth_(inst_10726))
{var statearr_10800_10846 = state_10796__$1;(statearr_10800_10846[1] = 5);
} else
{var statearr_10801_10847 = state_10796__$1;(statearr_10801_10847[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 5))
{var inst_10732 = cljs.core.deref.call(null,mults);var inst_10733 = cljs.core.vals.call(null,inst_10732);var inst_10734 = cljs.core.seq.call(null,inst_10733);var inst_10735 = inst_10734;var inst_10736 = null;var inst_10737 = 0;var inst_10738 = 0;var state_10796__$1 = (function (){var statearr_10802 = state_10796;(statearr_10802[8] = inst_10735);
(statearr_10802[9] = inst_10737);
(statearr_10802[10] = inst_10736);
(statearr_10802[11] = inst_10738);
return statearr_10802;
})();var statearr_10803_10848 = state_10796__$1;(statearr_10803_10848[2] = null);
(statearr_10803_10848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 6))
{var inst_10773 = (state_10796[12]);var inst_10725 = (state_10796[7]);var inst_10775 = (state_10796[13]);var inst_10773__$1 = topic_fn.call(null,inst_10725);var inst_10774 = cljs.core.deref.call(null,mults);var inst_10775__$1 = cljs.core.get.call(null,inst_10774,inst_10773__$1);var state_10796__$1 = (function (){var statearr_10804 = state_10796;(statearr_10804[12] = inst_10773__$1);
(statearr_10804[13] = inst_10775__$1);
return statearr_10804;
})();if(cljs.core.truth_(inst_10775__$1))
{var statearr_10805_10849 = state_10796__$1;(statearr_10805_10849[1] = 19);
} else
{var statearr_10806_10850 = state_10796__$1;(statearr_10806_10850[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 7))
{var inst_10792 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10807_10851 = state_10796__$1;(statearr_10807_10851[2] = inst_10792);
(statearr_10807_10851[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 8))
{var inst_10737 = (state_10796[9]);var inst_10738 = (state_10796[11]);var inst_10740 = (inst_10738 < inst_10737);var inst_10741 = inst_10740;var state_10796__$1 = state_10796;if(cljs.core.truth_(inst_10741))
{var statearr_10811_10852 = state_10796__$1;(statearr_10811_10852[1] = 10);
} else
{var statearr_10812_10853 = state_10796__$1;(statearr_10812_10853[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 9))
{var inst_10771 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10813_10854 = state_10796__$1;(statearr_10813_10854[2] = inst_10771);
(statearr_10813_10854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 10))
{var inst_10735 = (state_10796[8]);var inst_10737 = (state_10796[9]);var inst_10736 = (state_10796[10]);var inst_10738 = (state_10796[11]);var inst_10743 = cljs.core._nth.call(null,inst_10736,inst_10738);var inst_10744 = cljs.core.async.muxch_STAR_.call(null,inst_10743);var inst_10745 = cljs.core.async.close_BANG_.call(null,inst_10744);var inst_10746 = (inst_10738 + 1);var tmp10808 = inst_10735;var tmp10809 = inst_10737;var tmp10810 = inst_10736;var inst_10735__$1 = tmp10808;var inst_10736__$1 = tmp10810;var inst_10737__$1 = tmp10809;var inst_10738__$1 = inst_10746;var state_10796__$1 = (function (){var statearr_10814 = state_10796;(statearr_10814[8] = inst_10735__$1);
(statearr_10814[9] = inst_10737__$1);
(statearr_10814[10] = inst_10736__$1);
(statearr_10814[11] = inst_10738__$1);
(statearr_10814[14] = inst_10745);
return statearr_10814;
})();var statearr_10815_10855 = state_10796__$1;(statearr_10815_10855[2] = null);
(statearr_10815_10855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 11))
{var inst_10735 = (state_10796[8]);var inst_10749 = (state_10796[15]);var inst_10749__$1 = cljs.core.seq.call(null,inst_10735);var state_10796__$1 = (function (){var statearr_10816 = state_10796;(statearr_10816[15] = inst_10749__$1);
return statearr_10816;
})();if(inst_10749__$1)
{var statearr_10817_10856 = state_10796__$1;(statearr_10817_10856[1] = 13);
} else
{var statearr_10818_10857 = state_10796__$1;(statearr_10818_10857[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 12))
{var inst_10769 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10819_10858 = state_10796__$1;(statearr_10819_10858[2] = inst_10769);
(statearr_10819_10858[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 13))
{var inst_10749 = (state_10796[15]);var inst_10751 = cljs.core.chunked_seq_QMARK_.call(null,inst_10749);var state_10796__$1 = state_10796;if(inst_10751)
{var statearr_10820_10859 = state_10796__$1;(statearr_10820_10859[1] = 16);
} else
{var statearr_10821_10860 = state_10796__$1;(statearr_10821_10860[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 14))
{var state_10796__$1 = state_10796;var statearr_10822_10861 = state_10796__$1;(statearr_10822_10861[2] = null);
(statearr_10822_10861[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 15))
{var inst_10767 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10823_10862 = state_10796__$1;(statearr_10823_10862[2] = inst_10767);
(statearr_10823_10862[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 16))
{var inst_10749 = (state_10796[15]);var inst_10753 = cljs.core.chunk_first.call(null,inst_10749);var inst_10754 = cljs.core.chunk_rest.call(null,inst_10749);var inst_10755 = cljs.core.count.call(null,inst_10753);var inst_10735 = inst_10754;var inst_10736 = inst_10753;var inst_10737 = inst_10755;var inst_10738 = 0;var state_10796__$1 = (function (){var statearr_10824 = state_10796;(statearr_10824[8] = inst_10735);
(statearr_10824[9] = inst_10737);
(statearr_10824[10] = inst_10736);
(statearr_10824[11] = inst_10738);
return statearr_10824;
})();var statearr_10825_10863 = state_10796__$1;(statearr_10825_10863[2] = null);
(statearr_10825_10863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 17))
{var inst_10749 = (state_10796[15]);var inst_10758 = cljs.core.first.call(null,inst_10749);var inst_10759 = cljs.core.async.muxch_STAR_.call(null,inst_10758);var inst_10760 = cljs.core.async.close_BANG_.call(null,inst_10759);var inst_10761 = cljs.core.next.call(null,inst_10749);var inst_10735 = inst_10761;var inst_10736 = null;var inst_10737 = 0;var inst_10738 = 0;var state_10796__$1 = (function (){var statearr_10826 = state_10796;(statearr_10826[8] = inst_10735);
(statearr_10826[9] = inst_10737);
(statearr_10826[10] = inst_10736);
(statearr_10826[11] = inst_10738);
(statearr_10826[16] = inst_10760);
return statearr_10826;
})();var statearr_10827_10864 = state_10796__$1;(statearr_10827_10864[2] = null);
(statearr_10827_10864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 18))
{var inst_10764 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10828_10865 = state_10796__$1;(statearr_10828_10865[2] = inst_10764);
(statearr_10828_10865[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 19))
{var state_10796__$1 = state_10796;var statearr_10829_10866 = state_10796__$1;(statearr_10829_10866[2] = null);
(statearr_10829_10866[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 20))
{var state_10796__$1 = state_10796;var statearr_10830_10867 = state_10796__$1;(statearr_10830_10867[2] = null);
(statearr_10830_10867[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 21))
{var inst_10789 = (state_10796[2]);var state_10796__$1 = (function (){var statearr_10831 = state_10796;(statearr_10831[17] = inst_10789);
return statearr_10831;
})();var statearr_10832_10868 = state_10796__$1;(statearr_10832_10868[2] = null);
(statearr_10832_10868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 22))
{var inst_10786 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10833_10869 = state_10796__$1;(statearr_10833_10869[2] = inst_10786);
(statearr_10833_10869[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 23))
{var inst_10773 = (state_10796[12]);var inst_10777 = (state_10796[2]);var inst_10778 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10773);var state_10796__$1 = (function (){var statearr_10834 = state_10796;(statearr_10834[18] = inst_10777);
return statearr_10834;
})();var statearr_10835_10870 = state_10796__$1;(statearr_10835_10870[2] = inst_10778);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10796__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 24))
{var inst_10725 = (state_10796[7]);var inst_10775 = (state_10796[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10796,23,Object,null,22);var inst_10782 = cljs.core.async.muxch_STAR_.call(null,inst_10775);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10796__$1,25,inst_10782,inst_10725);
} else
{if((state_val_10797 === 25))
{var inst_10784 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10836_10871 = state_10796__$1;(statearr_10836_10871[2] = inst_10784);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10796__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_10840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10840[0] = state_machine__6721__auto__);
(statearr_10840[1] = 1);
return statearr_10840;
});
var state_machine__6721__auto____1 = (function (state_10796){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_10796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e10841){if((e10841 instanceof Object))
{var ex__6724__auto__ = e10841;var statearr_10842_10872 = state_10796;(statearr_10842_10872[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10873 = state_10796;
state_10796 = G__10873;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_10796){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_10796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_10843 = f__6736__auto__.call(null);(statearr_10843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___10844);
return statearr_10843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6735__auto___11010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_10980){var state_val_10981 = (state_10980[1]);if((state_val_10981 === 1))
{var state_10980__$1 = state_10980;var statearr_10982_11011 = state_10980__$1;(statearr_10982_11011[2] = null);
(statearr_10982_11011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 2))
{var inst_10943 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10944 = 0;var state_10980__$1 = (function (){var statearr_10983 = state_10980;(statearr_10983[7] = inst_10944);
(statearr_10983[8] = inst_10943);
return statearr_10983;
})();var statearr_10984_11012 = state_10980__$1;(statearr_10984_11012[2] = null);
(statearr_10984_11012[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 3))
{var inst_10978 = (state_10980[2]);var state_10980__$1 = state_10980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10980__$1,inst_10978);
} else
{if((state_val_10981 === 4))
{var inst_10944 = (state_10980[7]);var inst_10946 = (inst_10944 < cnt);var state_10980__$1 = state_10980;if(cljs.core.truth_(inst_10946))
{var statearr_10985_11013 = state_10980__$1;(statearr_10985_11013[1] = 6);
} else
{var statearr_10986_11014 = state_10980__$1;(statearr_10986_11014[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 5))
{var inst_10964 = (state_10980[2]);var state_10980__$1 = (function (){var statearr_10987 = state_10980;(statearr_10987[9] = inst_10964);
return statearr_10987;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10980__$1,12,dchan);
} else
{if((state_val_10981 === 6))
{var state_10980__$1 = state_10980;var statearr_10988_11015 = state_10980__$1;(statearr_10988_11015[2] = null);
(statearr_10988_11015[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 7))
{var state_10980__$1 = state_10980;var statearr_10989_11016 = state_10980__$1;(statearr_10989_11016[2] = null);
(statearr_10989_11016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 8))
{var inst_10962 = (state_10980[2]);var state_10980__$1 = state_10980;var statearr_10990_11017 = state_10980__$1;(statearr_10990_11017[2] = inst_10962);
(statearr_10990_11017[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 9))
{var inst_10944 = (state_10980[7]);var inst_10957 = (state_10980[2]);var inst_10958 = (inst_10944 + 1);var inst_10944__$1 = inst_10958;var state_10980__$1 = (function (){var statearr_10991 = state_10980;(statearr_10991[7] = inst_10944__$1);
(statearr_10991[10] = inst_10957);
return statearr_10991;
})();var statearr_10992_11018 = state_10980__$1;(statearr_10992_11018[2] = null);
(statearr_10992_11018[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 10))
{var inst_10948 = (state_10980[2]);var inst_10949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10980__$1 = (function (){var statearr_10993 = state_10980;(statearr_10993[11] = inst_10948);
return statearr_10993;
})();var statearr_10994_11019 = state_10980__$1;(statearr_10994_11019[2] = inst_10949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 11))
{var inst_10944 = (state_10980[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10980,10,Object,null,9);var inst_10953 = chs__$1.call(null,inst_10944);var inst_10954 = done.call(null,inst_10944);var inst_10955 = cljs.core.async.take_BANG_.call(null,inst_10953,inst_10954);var state_10980__$1 = state_10980;var statearr_10995_11020 = state_10980__$1;(statearr_10995_11020[2] = inst_10955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 12))
{var inst_10966 = (state_10980[12]);var inst_10966__$1 = (state_10980[2]);var inst_10967 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10966__$1);var state_10980__$1 = (function (){var statearr_10996 = state_10980;(statearr_10996[12] = inst_10966__$1);
return statearr_10996;
})();if(cljs.core.truth_(inst_10967))
{var statearr_10997_11021 = state_10980__$1;(statearr_10997_11021[1] = 13);
} else
{var statearr_10998_11022 = state_10980__$1;(statearr_10998_11022[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 13))
{var inst_10969 = cljs.core.async.close_BANG_.call(null,out);var state_10980__$1 = state_10980;var statearr_10999_11023 = state_10980__$1;(statearr_10999_11023[2] = inst_10969);
(statearr_10999_11023[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 14))
{var inst_10966 = (state_10980[12]);var inst_10971 = cljs.core.apply.call(null,f,inst_10966);var state_10980__$1 = state_10980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10980__$1,16,out,inst_10971);
} else
{if((state_val_10981 === 15))
{var inst_10976 = (state_10980[2]);var state_10980__$1 = state_10980;var statearr_11000_11024 = state_10980__$1;(statearr_11000_11024[2] = inst_10976);
(statearr_11000_11024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 16))
{var inst_10973 = (state_10980[2]);var state_10980__$1 = (function (){var statearr_11001 = state_10980;(statearr_11001[13] = inst_10973);
return statearr_11001;
})();var statearr_11002_11025 = state_10980__$1;(statearr_11002_11025[2] = null);
(statearr_11002_11025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11006[0] = state_machine__6721__auto__);
(statearr_11006[1] = 1);
return statearr_11006;
});
var state_machine__6721__auto____1 = (function (state_10980){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_10980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11007){if((e11007 instanceof Object))
{var ex__6724__auto__ = e11007;var statearr_11008_11026 = state_10980;(statearr_11008_11026[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11027 = state_10980;
state_10980 = G__11027;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_10980){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_10980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11009 = f__6736__auto__.call(null);(statearr_11009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11010);
return statearr_11009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___11135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_11111){var state_val_11112 = (state_11111[1]);if((state_val_11112 === 1))
{var inst_11082 = cljs.core.vec.call(null,chs);var inst_11083 = inst_11082;var state_11111__$1 = (function (){var statearr_11113 = state_11111;(statearr_11113[7] = inst_11083);
return statearr_11113;
})();var statearr_11114_11136 = state_11111__$1;(statearr_11114_11136[2] = null);
(statearr_11114_11136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 2))
{var inst_11083 = (state_11111[7]);var inst_11085 = cljs.core.count.call(null,inst_11083);var inst_11086 = (inst_11085 > 0);var state_11111__$1 = state_11111;if(cljs.core.truth_(inst_11086))
{var statearr_11115_11137 = state_11111__$1;(statearr_11115_11137[1] = 4);
} else
{var statearr_11116_11138 = state_11111__$1;(statearr_11116_11138[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 3))
{var inst_11109 = (state_11111[2]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11111__$1,inst_11109);
} else
{if((state_val_11112 === 4))
{var inst_11083 = (state_11111[7]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11111__$1,7,inst_11083);
} else
{if((state_val_11112 === 5))
{var inst_11105 = cljs.core.async.close_BANG_.call(null,out);var state_11111__$1 = state_11111;var statearr_11117_11139 = state_11111__$1;(statearr_11117_11139[2] = inst_11105);
(statearr_11117_11139[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 6))
{var inst_11107 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11118_11140 = state_11111__$1;(statearr_11118_11140[2] = inst_11107);
(statearr_11118_11140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 7))
{var inst_11090 = (state_11111[8]);var inst_11091 = (state_11111[9]);var inst_11090__$1 = (state_11111[2]);var inst_11091__$1 = cljs.core.nth.call(null,inst_11090__$1,0,null);var inst_11092 = cljs.core.nth.call(null,inst_11090__$1,1,null);var inst_11093 = (inst_11091__$1 == null);var state_11111__$1 = (function (){var statearr_11119 = state_11111;(statearr_11119[10] = inst_11092);
(statearr_11119[8] = inst_11090__$1);
(statearr_11119[9] = inst_11091__$1);
return statearr_11119;
})();if(cljs.core.truth_(inst_11093))
{var statearr_11120_11141 = state_11111__$1;(statearr_11120_11141[1] = 8);
} else
{var statearr_11121_11142 = state_11111__$1;(statearr_11121_11142[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 8))
{var inst_11092 = (state_11111[10]);var inst_11090 = (state_11111[8]);var inst_11091 = (state_11111[9]);var inst_11083 = (state_11111[7]);var inst_11095 = (function (){var c = inst_11092;var v = inst_11091;var vec__11088 = inst_11090;var cs = inst_11083;return ((function (c,v,vec__11088,cs,inst_11092,inst_11090,inst_11091,inst_11083,state_val_11112){
return (function (p1__11028_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11028_SHARP_);
});
;})(c,v,vec__11088,cs,inst_11092,inst_11090,inst_11091,inst_11083,state_val_11112))
})();var inst_11096 = cljs.core.filterv.call(null,inst_11095,inst_11083);var inst_11083__$1 = inst_11096;var state_11111__$1 = (function (){var statearr_11122 = state_11111;(statearr_11122[7] = inst_11083__$1);
return statearr_11122;
})();var statearr_11123_11143 = state_11111__$1;(statearr_11123_11143[2] = null);
(statearr_11123_11143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 9))
{var inst_11091 = (state_11111[9]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11111__$1,11,out,inst_11091);
} else
{if((state_val_11112 === 10))
{var inst_11103 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11125_11144 = state_11111__$1;(statearr_11125_11144[2] = inst_11103);
(statearr_11125_11144[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 11))
{var inst_11083 = (state_11111[7]);var inst_11100 = (state_11111[2]);var tmp11124 = inst_11083;var inst_11083__$1 = tmp11124;var state_11111__$1 = (function (){var statearr_11126 = state_11111;(statearr_11126[11] = inst_11100);
(statearr_11126[7] = inst_11083__$1);
return statearr_11126;
})();var statearr_11127_11145 = state_11111__$1;(statearr_11127_11145[2] = null);
(statearr_11127_11145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11131 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11131[0] = state_machine__6721__auto__);
(statearr_11131[1] = 1);
return statearr_11131;
});
var state_machine__6721__auto____1 = (function (state_11111){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_11111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11132){if((e11132 instanceof Object))
{var ex__6724__auto__ = e11132;var statearr_11133_11146 = state_11111;(statearr_11133_11146[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11147 = state_11111;
state_11111 = G__11147;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_11111){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_11111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11134 = f__6736__auto__.call(null);(statearr_11134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11135);
return statearr_11134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___11240 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_11217){var state_val_11218 = (state_11217[1]);if((state_val_11218 === 1))
{var inst_11194 = 0;var state_11217__$1 = (function (){var statearr_11219 = state_11217;(statearr_11219[7] = inst_11194);
return statearr_11219;
})();var statearr_11220_11241 = state_11217__$1;(statearr_11220_11241[2] = null);
(statearr_11220_11241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 2))
{var inst_11194 = (state_11217[7]);var inst_11196 = (inst_11194 < n);var state_11217__$1 = state_11217;if(cljs.core.truth_(inst_11196))
{var statearr_11221_11242 = state_11217__$1;(statearr_11221_11242[1] = 4);
} else
{var statearr_11222_11243 = state_11217__$1;(statearr_11222_11243[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 3))
{var inst_11214 = (state_11217[2]);var inst_11215 = cljs.core.async.close_BANG_.call(null,out);var state_11217__$1 = (function (){var statearr_11223 = state_11217;(statearr_11223[8] = inst_11214);
return statearr_11223;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11217__$1,inst_11215);
} else
{if((state_val_11218 === 4))
{var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11217__$1,7,ch);
} else
{if((state_val_11218 === 5))
{var state_11217__$1 = state_11217;var statearr_11224_11244 = state_11217__$1;(statearr_11224_11244[2] = null);
(statearr_11224_11244[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 6))
{var inst_11212 = (state_11217[2]);var state_11217__$1 = state_11217;var statearr_11225_11245 = state_11217__$1;(statearr_11225_11245[2] = inst_11212);
(statearr_11225_11245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 7))
{var inst_11199 = (state_11217[9]);var inst_11199__$1 = (state_11217[2]);var inst_11200 = (inst_11199__$1 == null);var inst_11201 = cljs.core.not.call(null,inst_11200);var state_11217__$1 = (function (){var statearr_11226 = state_11217;(statearr_11226[9] = inst_11199__$1);
return statearr_11226;
})();if(inst_11201)
{var statearr_11227_11246 = state_11217__$1;(statearr_11227_11246[1] = 8);
} else
{var statearr_11228_11247 = state_11217__$1;(statearr_11228_11247[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 8))
{var inst_11199 = (state_11217[9]);var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11217__$1,11,out,inst_11199);
} else
{if((state_val_11218 === 9))
{var state_11217__$1 = state_11217;var statearr_11229_11248 = state_11217__$1;(statearr_11229_11248[2] = null);
(statearr_11229_11248[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 10))
{var inst_11209 = (state_11217[2]);var state_11217__$1 = state_11217;var statearr_11230_11249 = state_11217__$1;(statearr_11230_11249[2] = inst_11209);
(statearr_11230_11249[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11218 === 11))
{var inst_11194 = (state_11217[7]);var inst_11204 = (state_11217[2]);var inst_11205 = (inst_11194 + 1);var inst_11194__$1 = inst_11205;var state_11217__$1 = (function (){var statearr_11231 = state_11217;(statearr_11231[10] = inst_11204);
(statearr_11231[7] = inst_11194__$1);
return statearr_11231;
})();var statearr_11232_11250 = state_11217__$1;(statearr_11232_11250[2] = null);
(statearr_11232_11250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11236 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11236[0] = state_machine__6721__auto__);
(statearr_11236[1] = 1);
return statearr_11236;
});
var state_machine__6721__auto____1 = (function (state_11217){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_11217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11237){if((e11237 instanceof Object))
{var ex__6724__auto__ = e11237;var statearr_11238_11251 = state_11217;(statearr_11238_11251[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11217);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11252 = state_11217;
state_11217 = G__11252;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_11217){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_11217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11239 = f__6736__auto__.call(null);(statearr_11239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11240);
return statearr_11239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___11349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_11324){var state_val_11325 = (state_11324[1]);if((state_val_11325 === 1))
{var inst_11301 = null;var state_11324__$1 = (function (){var statearr_11326 = state_11324;(statearr_11326[7] = inst_11301);
return statearr_11326;
})();var statearr_11327_11350 = state_11324__$1;(statearr_11327_11350[2] = null);
(statearr_11327_11350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 2))
{var state_11324__$1 = state_11324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11324__$1,4,ch);
} else
{if((state_val_11325 === 3))
{var inst_11321 = (state_11324[2]);var inst_11322 = cljs.core.async.close_BANG_.call(null,out);var state_11324__$1 = (function (){var statearr_11328 = state_11324;(statearr_11328[8] = inst_11321);
return statearr_11328;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11324__$1,inst_11322);
} else
{if((state_val_11325 === 4))
{var inst_11304 = (state_11324[9]);var inst_11304__$1 = (state_11324[2]);var inst_11305 = (inst_11304__$1 == null);var inst_11306 = cljs.core.not.call(null,inst_11305);var state_11324__$1 = (function (){var statearr_11329 = state_11324;(statearr_11329[9] = inst_11304__$1);
return statearr_11329;
})();if(inst_11306)
{var statearr_11330_11351 = state_11324__$1;(statearr_11330_11351[1] = 5);
} else
{var statearr_11331_11352 = state_11324__$1;(statearr_11331_11352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 5))
{var inst_11301 = (state_11324[7]);var inst_11304 = (state_11324[9]);var inst_11308 = cljs.core._EQ_.call(null,inst_11304,inst_11301);var state_11324__$1 = state_11324;if(inst_11308)
{var statearr_11332_11353 = state_11324__$1;(statearr_11332_11353[1] = 8);
} else
{var statearr_11333_11354 = state_11324__$1;(statearr_11333_11354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 6))
{var state_11324__$1 = state_11324;var statearr_11335_11355 = state_11324__$1;(statearr_11335_11355[2] = null);
(statearr_11335_11355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 7))
{var inst_11319 = (state_11324[2]);var state_11324__$1 = state_11324;var statearr_11336_11356 = state_11324__$1;(statearr_11336_11356[2] = inst_11319);
(statearr_11336_11356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 8))
{var inst_11301 = (state_11324[7]);var tmp11334 = inst_11301;var inst_11301__$1 = tmp11334;var state_11324__$1 = (function (){var statearr_11337 = state_11324;(statearr_11337[7] = inst_11301__$1);
return statearr_11337;
})();var statearr_11338_11357 = state_11324__$1;(statearr_11338_11357[2] = null);
(statearr_11338_11357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 9))
{var inst_11304 = (state_11324[9]);var state_11324__$1 = state_11324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11324__$1,11,out,inst_11304);
} else
{if((state_val_11325 === 10))
{var inst_11316 = (state_11324[2]);var state_11324__$1 = state_11324;var statearr_11339_11358 = state_11324__$1;(statearr_11339_11358[2] = inst_11316);
(statearr_11339_11358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11325 === 11))
{var inst_11304 = (state_11324[9]);var inst_11313 = (state_11324[2]);var inst_11301 = inst_11304;var state_11324__$1 = (function (){var statearr_11340 = state_11324;(statearr_11340[7] = inst_11301);
(statearr_11340[10] = inst_11313);
return statearr_11340;
})();var statearr_11341_11359 = state_11324__$1;(statearr_11341_11359[2] = null);
(statearr_11341_11359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11345 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11345[0] = state_machine__6721__auto__);
(statearr_11345[1] = 1);
return statearr_11345;
});
var state_machine__6721__auto____1 = (function (state_11324){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_11324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11346){if((e11346 instanceof Object))
{var ex__6724__auto__ = e11346;var statearr_11347_11360 = state_11324;(statearr_11347_11360[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11361 = state_11324;
state_11324 = G__11361;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_11324){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_11324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11348 = f__6736__auto__.call(null);(statearr_11348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11349);
return statearr_11348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___11496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_11466){var state_val_11467 = (state_11466[1]);if((state_val_11467 === 1))
{var inst_11429 = (new Array(n));var inst_11430 = inst_11429;var inst_11431 = 0;var state_11466__$1 = (function (){var statearr_11468 = state_11466;(statearr_11468[7] = inst_11431);
(statearr_11468[8] = inst_11430);
return statearr_11468;
})();var statearr_11469_11497 = state_11466__$1;(statearr_11469_11497[2] = null);
(statearr_11469_11497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 2))
{var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11466__$1,4,ch);
} else
{if((state_val_11467 === 3))
{var inst_11464 = (state_11466[2]);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11466__$1,inst_11464);
} else
{if((state_val_11467 === 4))
{var inst_11434 = (state_11466[9]);var inst_11434__$1 = (state_11466[2]);var inst_11435 = (inst_11434__$1 == null);var inst_11436 = cljs.core.not.call(null,inst_11435);var state_11466__$1 = (function (){var statearr_11470 = state_11466;(statearr_11470[9] = inst_11434__$1);
return statearr_11470;
})();if(inst_11436)
{var statearr_11471_11498 = state_11466__$1;(statearr_11471_11498[1] = 5);
} else
{var statearr_11472_11499 = state_11466__$1;(statearr_11472_11499[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 5))
{var inst_11439 = (state_11466[10]);var inst_11434 = (state_11466[9]);var inst_11431 = (state_11466[7]);var inst_11430 = (state_11466[8]);var inst_11438 = (inst_11430[inst_11431] = inst_11434);var inst_11439__$1 = (inst_11431 + 1);var inst_11440 = (inst_11439__$1 < n);var state_11466__$1 = (function (){var statearr_11473 = state_11466;(statearr_11473[10] = inst_11439__$1);
(statearr_11473[11] = inst_11438);
return statearr_11473;
})();if(cljs.core.truth_(inst_11440))
{var statearr_11474_11500 = state_11466__$1;(statearr_11474_11500[1] = 8);
} else
{var statearr_11475_11501 = state_11466__$1;(statearr_11475_11501[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 6))
{var inst_11431 = (state_11466[7]);var inst_11452 = (inst_11431 > 0);var state_11466__$1 = state_11466;if(cljs.core.truth_(inst_11452))
{var statearr_11477_11502 = state_11466__$1;(statearr_11477_11502[1] = 12);
} else
{var statearr_11478_11503 = state_11466__$1;(statearr_11478_11503[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 7))
{var inst_11462 = (state_11466[2]);var state_11466__$1 = state_11466;var statearr_11479_11504 = state_11466__$1;(statearr_11479_11504[2] = inst_11462);
(statearr_11479_11504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 8))
{var inst_11439 = (state_11466[10]);var inst_11430 = (state_11466[8]);var tmp11476 = inst_11430;var inst_11430__$1 = tmp11476;var inst_11431 = inst_11439;var state_11466__$1 = (function (){var statearr_11480 = state_11466;(statearr_11480[7] = inst_11431);
(statearr_11480[8] = inst_11430__$1);
return statearr_11480;
})();var statearr_11481_11505 = state_11466__$1;(statearr_11481_11505[2] = null);
(statearr_11481_11505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 9))
{var inst_11430 = (state_11466[8]);var inst_11444 = cljs.core.vec.call(null,inst_11430);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11466__$1,11,out,inst_11444);
} else
{if((state_val_11467 === 10))
{var inst_11450 = (state_11466[2]);var state_11466__$1 = state_11466;var statearr_11482_11506 = state_11466__$1;(statearr_11482_11506[2] = inst_11450);
(statearr_11482_11506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 11))
{var inst_11446 = (state_11466[2]);var inst_11447 = (new Array(n));var inst_11430 = inst_11447;var inst_11431 = 0;var state_11466__$1 = (function (){var statearr_11483 = state_11466;(statearr_11483[12] = inst_11446);
(statearr_11483[7] = inst_11431);
(statearr_11483[8] = inst_11430);
return statearr_11483;
})();var statearr_11484_11507 = state_11466__$1;(statearr_11484_11507[2] = null);
(statearr_11484_11507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 12))
{var inst_11430 = (state_11466[8]);var inst_11454 = cljs.core.vec.call(null,inst_11430);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11466__$1,15,out,inst_11454);
} else
{if((state_val_11467 === 13))
{var state_11466__$1 = state_11466;var statearr_11485_11508 = state_11466__$1;(statearr_11485_11508[2] = null);
(statearr_11485_11508[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 14))
{var inst_11459 = (state_11466[2]);var inst_11460 = cljs.core.async.close_BANG_.call(null,out);var state_11466__$1 = (function (){var statearr_11486 = state_11466;(statearr_11486[13] = inst_11459);
return statearr_11486;
})();var statearr_11487_11509 = state_11466__$1;(statearr_11487_11509[2] = inst_11460);
(statearr_11487_11509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 15))
{var inst_11456 = (state_11466[2]);var state_11466__$1 = state_11466;var statearr_11488_11510 = state_11466__$1;(statearr_11488_11510[2] = inst_11456);
(statearr_11488_11510[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11492[0] = state_machine__6721__auto__);
(statearr_11492[1] = 1);
return statearr_11492;
});
var state_machine__6721__auto____1 = (function (state_11466){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_11466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11493){if((e11493 instanceof Object))
{var ex__6724__auto__ = e11493;var statearr_11494_11511 = state_11466;(statearr_11494_11511[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11512 = state_11466;
state_11466 = G__11512;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_11466){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_11466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11495 = f__6736__auto__.call(null);(statearr_11495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11496);
return statearr_11495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6735__auto___11655 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6736__auto__ = (function (){var switch__6720__auto__ = (function (state_11625){var state_val_11626 = (state_11625[1]);if((state_val_11626 === 1))
{var inst_11584 = [];var inst_11585 = inst_11584;var inst_11586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11625__$1 = (function (){var statearr_11627 = state_11625;(statearr_11627[7] = inst_11586);
(statearr_11627[8] = inst_11585);
return statearr_11627;
})();var statearr_11628_11656 = state_11625__$1;(statearr_11628_11656[2] = null);
(statearr_11628_11656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 2))
{var state_11625__$1 = state_11625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11625__$1,4,ch);
} else
{if((state_val_11626 === 3))
{var inst_11623 = (state_11625[2]);var state_11625__$1 = state_11625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11625__$1,inst_11623);
} else
{if((state_val_11626 === 4))
{var inst_11589 = (state_11625[9]);var inst_11589__$1 = (state_11625[2]);var inst_11590 = (inst_11589__$1 == null);var inst_11591 = cljs.core.not.call(null,inst_11590);var state_11625__$1 = (function (){var statearr_11629 = state_11625;(statearr_11629[9] = inst_11589__$1);
return statearr_11629;
})();if(inst_11591)
{var statearr_11630_11657 = state_11625__$1;(statearr_11630_11657[1] = 5);
} else
{var statearr_11631_11658 = state_11625__$1;(statearr_11631_11658[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 5))
{var inst_11586 = (state_11625[7]);var inst_11593 = (state_11625[10]);var inst_11589 = (state_11625[9]);var inst_11593__$1 = f.call(null,inst_11589);var inst_11594 = cljs.core._EQ_.call(null,inst_11593__$1,inst_11586);var inst_11595 = cljs.core.keyword_identical_QMARK_.call(null,inst_11586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11596 = (inst_11594) || (inst_11595);var state_11625__$1 = (function (){var statearr_11632 = state_11625;(statearr_11632[10] = inst_11593__$1);
return statearr_11632;
})();if(cljs.core.truth_(inst_11596))
{var statearr_11633_11659 = state_11625__$1;(statearr_11633_11659[1] = 8);
} else
{var statearr_11634_11660 = state_11625__$1;(statearr_11634_11660[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 6))
{var inst_11585 = (state_11625[8]);var inst_11610 = inst_11585.length;var inst_11611 = (inst_11610 > 0);var state_11625__$1 = state_11625;if(cljs.core.truth_(inst_11611))
{var statearr_11636_11661 = state_11625__$1;(statearr_11636_11661[1] = 12);
} else
{var statearr_11637_11662 = state_11625__$1;(statearr_11637_11662[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 7))
{var inst_11621 = (state_11625[2]);var state_11625__$1 = state_11625;var statearr_11638_11663 = state_11625__$1;(statearr_11638_11663[2] = inst_11621);
(statearr_11638_11663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 8))
{var inst_11585 = (state_11625[8]);var inst_11593 = (state_11625[10]);var inst_11589 = (state_11625[9]);var inst_11598 = inst_11585.push(inst_11589);var tmp11635 = inst_11585;var inst_11585__$1 = tmp11635;var inst_11586 = inst_11593;var state_11625__$1 = (function (){var statearr_11639 = state_11625;(statearr_11639[7] = inst_11586);
(statearr_11639[8] = inst_11585__$1);
(statearr_11639[11] = inst_11598);
return statearr_11639;
})();var statearr_11640_11664 = state_11625__$1;(statearr_11640_11664[2] = null);
(statearr_11640_11664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 9))
{var inst_11585 = (state_11625[8]);var inst_11601 = cljs.core.vec.call(null,inst_11585);var state_11625__$1 = state_11625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11625__$1,11,out,inst_11601);
} else
{if((state_val_11626 === 10))
{var inst_11608 = (state_11625[2]);var state_11625__$1 = state_11625;var statearr_11641_11665 = state_11625__$1;(statearr_11641_11665[2] = inst_11608);
(statearr_11641_11665[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 11))
{var inst_11593 = (state_11625[10]);var inst_11589 = (state_11625[9]);var inst_11603 = (state_11625[2]);var inst_11604 = [];var inst_11605 = inst_11604.push(inst_11589);var inst_11585 = inst_11604;var inst_11586 = inst_11593;var state_11625__$1 = (function (){var statearr_11642 = state_11625;(statearr_11642[7] = inst_11586);
(statearr_11642[8] = inst_11585);
(statearr_11642[12] = inst_11603);
(statearr_11642[13] = inst_11605);
return statearr_11642;
})();var statearr_11643_11666 = state_11625__$1;(statearr_11643_11666[2] = null);
(statearr_11643_11666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 12))
{var inst_11585 = (state_11625[8]);var inst_11613 = cljs.core.vec.call(null,inst_11585);var state_11625__$1 = state_11625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11625__$1,15,out,inst_11613);
} else
{if((state_val_11626 === 13))
{var state_11625__$1 = state_11625;var statearr_11644_11667 = state_11625__$1;(statearr_11644_11667[2] = null);
(statearr_11644_11667[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 14))
{var inst_11618 = (state_11625[2]);var inst_11619 = cljs.core.async.close_BANG_.call(null,out);var state_11625__$1 = (function (){var statearr_11645 = state_11625;(statearr_11645[14] = inst_11618);
return statearr_11645;
})();var statearr_11646_11668 = state_11625__$1;(statearr_11646_11668[2] = inst_11619);
(statearr_11646_11668[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11626 === 15))
{var inst_11615 = (state_11625[2]);var state_11625__$1 = state_11625;var statearr_11647_11669 = state_11625__$1;(statearr_11647_11669[2] = inst_11615);
(statearr_11647_11669[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6720__auto__){
return (function() {
var state_machine__6721__auto__ = null;
var state_machine__6721__auto____0 = (function (){var statearr_11651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11651[0] = state_machine__6721__auto__);
(statearr_11651[1] = 1);
return statearr_11651;
});
var state_machine__6721__auto____1 = (function (state_11625){while(true){
var ret_value__6722__auto__ = (function (){try{while(true){
var result__6723__auto__ = switch__6720__auto__.call(null,state_11625);if(cljs.core.keyword_identical_QMARK_.call(null,result__6723__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6723__auto__;
}
break;
}
}catch (e11652){if((e11652 instanceof Object))
{var ex__6724__auto__ = e11652;var statearr_11653_11670 = state_11625;(statearr_11653_11670[5] = ex__6724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6722__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11671 = state_11625;
state_11625 = G__11671;
continue;
}
} else
{return ret_value__6722__auto__;
}
break;
}
});
state_machine__6721__auto__ = function(state_11625){
switch(arguments.length){
case 0:
return state_machine__6721__auto____0.call(this);
case 1:
return state_machine__6721__auto____1.call(this,state_11625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6721__auto____0;
state_machine__6721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6721__auto____1;
return state_machine__6721__auto__;
})()
;})(switch__6720__auto__))
})();var state__6737__auto__ = (function (){var statearr_11654 = f__6736__auto__.call(null);(statearr_11654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6735__auto___11655);
return statearr_11654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6737__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map