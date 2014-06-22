// Compiled by ClojureScript 0.0-2173
goog.provide('web_game_of_life.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
web_game_of_life.app.log = (function log(s){return console.log([cljs.core.str(s)].join(''));
});
web_game_of_life.app.world_url = "/world/";
web_game_of_life.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"world","world",1127223044),cljs.core.PersistentVector.EMPTY], null));
web_game_of_life.app.get_world = (function get_world(dimensions){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6193__auto___11149 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_11135){var state_val_11136 = (state_11135[1]);if((state_val_11136 === 6))
{var inst_11133 = (state_11135[2]);var state_11135__$1 = state_11135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11135__$1,inst_11133);
} else
{if((state_val_11136 === 5))
{var inst_11129 = (state_11135[2]);var inst_11130 = cljs.core.get.call(null,inst_11129,new cljs.core.Keyword(null,"body","body",1016933652));var inst_11131 = cljs.core.vec.call(null,inst_11130);var state_11135__$1 = state_11135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11135__$1,6,ch,inst_11131);
} else
{if((state_val_11136 === 4))
{var inst_11123 = (state_11135[7]);var state_11135__$1 = state_11135;var statearr_11137_11150 = state_11135__$1;(statearr_11137_11150[2] = inst_11123);
(statearr_11137_11150[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11136 === 3))
{var inst_11123 = (state_11135[7]);var inst_11126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11123);var state_11135__$1 = state_11135;var statearr_11138_11151 = state_11135__$1;(statearr_11138_11151[2] = inst_11126);
(statearr_11138_11151[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11136 === 2))
{var inst_11123 = (state_11135[7]);var inst_11123__$1 = (state_11135[2]);var inst_11124 = cljs.core.seq_QMARK_.call(null,inst_11123__$1);var state_11135__$1 = (function (){var statearr_11139 = state_11135;(statearr_11139[7] = inst_11123__$1);
return statearr_11139;
})();if(inst_11124)
{var statearr_11140_11152 = state_11135__$1;(statearr_11140_11152[1] = 3);
} else
{var statearr_11141_11153 = state_11135__$1;(statearr_11141_11153[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11136 === 1))
{var inst_11121 = cljs_http.client.get.call(null,url);var state_11135__$1 = state_11135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11135__$1,2,inst_11121);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6178__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_11145 = [null,null,null,null,null,null,null,null];(statearr_11145[0] = state_machine__6179__auto__);
(statearr_11145[1] = 1);
return statearr_11145;
});
var state_machine__6179__auto____1 = (function (state_11135){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11146){if((e11146 instanceof Object))
{var ex__6182__auto__ = e11146;var statearr_11147_11154 = state_11135;(statearr_11147_11154[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11155 = state_11135;
state_11135 = G__11155;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11135){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_11148 = f__6194__auto__.call(null);(statearr_11148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto___11149);
return statearr_11148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return ch;
});
web_game_of_life.app.update_world = (function update_world(dimensions,world){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6193__auto___11220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_11206){var state_val_11207 = (state_11206[1]);if((state_val_11207 === 6))
{var inst_11204 = (state_11206[2]);var state_11206__$1 = state_11206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11206__$1,inst_11204);
} else
{if((state_val_11207 === 5))
{var inst_11200 = (state_11206[2]);var inst_11201 = cljs.core.get.call(null,inst_11200,new cljs.core.Keyword(null,"body","body",1016933652));var inst_11202 = cljs.core.vec.call(null,inst_11201);var state_11206__$1 = state_11206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11206__$1,6,ch,inst_11202);
} else
{if((state_val_11207 === 4))
{var inst_11194 = (state_11206[7]);var state_11206__$1 = state_11206;var statearr_11208_11221 = state_11206__$1;(statearr_11208_11221[2] = inst_11194);
(statearr_11208_11221[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11207 === 3))
{var inst_11194 = (state_11206[7]);var inst_11197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11194);var state_11206__$1 = state_11206;var statearr_11209_11222 = state_11206__$1;(statearr_11209_11222[2] = inst_11197);
(statearr_11209_11222[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11207 === 2))
{var inst_11194 = (state_11206[7]);var inst_11194__$1 = (state_11206[2]);var inst_11195 = cljs.core.seq_QMARK_.call(null,inst_11194__$1);var state_11206__$1 = (function (){var statearr_11210 = state_11206;(statearr_11210[7] = inst_11194__$1);
return statearr_11210;
})();if(inst_11195)
{var statearr_11211_11223 = state_11206__$1;(statearr_11211_11223[1] = 3);
} else
{var statearr_11212_11224 = state_11206__$1;(statearr_11212_11224[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11207 === 1))
{var inst_11189 = [new cljs.core.Keyword(null,"json-params","json-params",2645529981)];var inst_11190 = [world];var inst_11191 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11189,inst_11190);var inst_11192 = cljs_http.client.put.call(null,url,inst_11191);var state_11206__$1 = state_11206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11206__$1,2,inst_11192);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6178__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_11216 = [null,null,null,null,null,null,null,null];(statearr_11216[0] = state_machine__6179__auto__);
(statearr_11216[1] = 1);
return statearr_11216;
});
var state_machine__6179__auto____1 = (function (state_11206){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11206);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11217){if((e11217 instanceof Object))
{var ex__6182__auto__ = e11217;var statearr_11218_11225 = state_11206;(statearr_11218_11225[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11226 = state_11206;
state_11206 = G__11226;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11206){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_11219 = f__6194__auto__.call(null);(statearr_11219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto___11220);
return statearr_11219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return ch;
});
web_game_of_life.app.cell = (function cell(text){if(typeof web_game_of_life.app.t11230 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11230 = (function (text,cell,meta11231){
this.text = text;
this.cell = cell;
this.meta11231 = meta11231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11230.cljs$lang$type = true;
web_game_of_life.app.t11230.cljs$lang$ctorStr = "web-game-of-life.app/t11230";
web_game_of_life.app.t11230.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11230");
});
web_game_of_life.app.t11230.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11230.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.td({"className": ((cljs.core._EQ_.call(null,self__.text,1))?"on":"off")},"");
});
web_game_of_life.app.t11230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11232){var self__ = this;
var _11232__$1 = this;return self__.meta11231;
});
web_game_of_life.app.t11230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11232,meta11231__$1){var self__ = this;
var _11232__$1 = this;return (new web_game_of_life.app.t11230(self__.text,self__.cell,meta11231__$1));
});
web_game_of_life.app.__GT_t11230 = (function __GT_t11230(text__$1,cell__$1,meta11231){return (new web_game_of_life.app.t11230(text__$1,cell__$1,meta11231));
});
}
return (new web_game_of_life.app.t11230(text,cell,null));
});
web_game_of_life.app.row = (function row(data){if(typeof web_game_of_life.app.t11236 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11236 = (function (data,row,meta11237){
this.data = data;
this.row = row;
this.meta11237 = meta11237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11236.cljs$lang$type = true;
web_game_of_life.app.t11236.cljs$lang$ctorStr = "web-game-of-life.app/t11236";
web_game_of_life.app.t11236.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11236");
});
web_game_of_life.app.t11236.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11236.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,om.core.build_all.call(null,web_game_of_life.app.cell,self__.data));
});
web_game_of_life.app.t11236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11238){var self__ = this;
var _11238__$1 = this;return self__.meta11237;
});
web_game_of_life.app.t11236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11238,meta11237__$1){var self__ = this;
var _11238__$1 = this;return (new web_game_of_life.app.t11236(self__.data,self__.row,meta11237__$1));
});
web_game_of_life.app.__GT_t11236 = (function __GT_t11236(data__$1,row__$1,meta11237){return (new web_game_of_life.app.t11236(data__$1,row__$1,meta11237));
});
}
return (new web_game_of_life.app.t11236(data,row,null));
});
web_game_of_life.app.world_view = (function world_view(data,owner,opts){if(typeof web_game_of_life.app.t11306 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11306 = (function (opts,owner,data,world_view,meta11307){
this.opts = opts;
this.owner = owner;
this.data = data;
this.world_view = world_view;
this.meta11307 = meta11307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11306.cljs$lang$type = true;
web_game_of_life.app.t11306.cljs$lang$ctorStr = "web-game-of-life.app/t11306";
web_game_of_life.app.t11306.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11306");
});
web_game_of_life.app.t11306.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11306.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.table,{"className": "world-view"},om.core.build_all.call(null,web_game_of_life.app.row,new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
web_game_of_life.app.t11306.prototype.om$core$IWillMount$ = true;
web_game_of_life.app.t11306.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6193__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_11346){var state_val_11347 = (state_11346[1]);if((state_val_11347 === 1))
{var state_11346__$1 = state_11346;var statearr_11348_11372 = state_11346__$1;(statearr_11348_11372[2] = null);
(statearr_11348_11372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 2))
{var state_11346__$1 = state_11346;if(true)
{var statearr_11349_11373 = state_11346__$1;(statearr_11349_11373[1] = 4);
} else
{var statearr_11350_11374 = state_11346__$1;(statearr_11350_11374[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 3))
{var inst_11344 = (state_11346[2]);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11346__$1,inst_11344);
} else
{if((state_val_11347 === 4))
{var inst_11311 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_11346__$1 = state_11346;if(cljs.core.truth_(inst_11311))
{var statearr_11351_11375 = state_11346__$1;(statearr_11351_11375[1] = 7);
} else
{var statearr_11352_11376 = state_11346__$1;(statearr_11352_11376[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 5))
{var state_11346__$1 = state_11346;var statearr_11353_11377 = state_11346__$1;(statearr_11353_11377[2] = null);
(statearr_11353_11377[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 6))
{var inst_11342 = (state_11346[2]);var state_11346__$1 = state_11346;var statearr_11354_11378 = state_11346__$1;(statearr_11354_11378[2] = inst_11342);
(statearr_11354_11378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 7))
{var inst_11313 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11314 = cljs.core.deref.call(null,self__.data);var inst_11315 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_11314);var inst_11316 = web_game_of_life.app.update_world.call(null,inst_11313,inst_11315);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,10,inst_11316);
} else
{if((state_val_11347 === 8))
{var inst_11320 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11321 = web_game_of_life.app.get_world.call(null,inst_11320);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,11,inst_11321);
} else
{if((state_val_11347 === 9))
{var inst_11325 = (state_11346[2]);var inst_11326 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_11346__$1 = (function (){var statearr_11355 = state_11346;(statearr_11355[7] = inst_11325);
return statearr_11355;
})();if(cljs.core.truth_(inst_11326))
{var statearr_11356_11379 = state_11346__$1;(statearr_11356_11379[1] = 12);
} else
{var statearr_11357_11380 = state_11346__$1;(statearr_11357_11380[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 10))
{var inst_11318 = (state_11346[2]);var state_11346__$1 = state_11346;var statearr_11358_11381 = state_11346__$1;(statearr_11358_11381[2] = inst_11318);
(statearr_11358_11381[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 11))
{var inst_11323 = (state_11346[2]);var state_11346__$1 = state_11346;var statearr_11359_11382 = state_11346__$1;(statearr_11359_11382[2] = inst_11323);
(statearr_11359_11382[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 12))
{var state_11346__$1 = state_11346;var statearr_11360_11383 = state_11346__$1;(statearr_11360_11383[2] = null);
(statearr_11360_11383[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 13))
{var inst_11329 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),true);var state_11346__$1 = state_11346;var statearr_11361_11384 = state_11346__$1;(statearr_11361_11384[2] = inst_11329);
(statearr_11361_11384[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11347 === 14))
{var inst_11325 = (state_11346[7]);var inst_11331 = (state_11346[2]);var inst_11332 = (function (){var world = inst_11325;return ((function (world,inst_11325,inst_11331,state_val_11347){
return (function (p1__11239_SHARP_){return cljs.core.assoc.call(null,p1__11239_SHARP_,new cljs.core.Keyword(null,"world","world",1127223044),world);
});
;})(world,inst_11325,inst_11331,state_val_11347))
})();var inst_11333 = om.core.transact_BANG_.call(null,self__.data,inst_11332);var inst_11334 = cljs.core.swap_BANG_.call(null,web_game_of_life.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",1127223044),inst_11325);var inst_11335 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11336 = cljs.core.async.timeout.call(null,inst_11335);var state_11346__$1 = (function (){var statearr_11362 = state_11346;(statearr_11362[8] = inst_11334);
(statearr_11362[9] = inst_11333);
(statearr_11362[10] = inst_11331);
return statearr_11362;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,15,inst_11336);
} else
{if((state_val_11347 === 15))
{var inst_11338 = (state_11346[2]);var state_11346__$1 = (function (){var statearr_11363 = state_11346;(statearr_11363[11] = inst_11338);
return statearr_11363;
})();var statearr_11364_11385 = state_11346__$1;(statearr_11364_11385[2] = null);
(statearr_11364_11385[1] = 2);
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
});return ((function (switch__6178__auto__){
return (function() {
var state_machine__6179__auto__ = null;
var state_machine__6179__auto____0 = (function (){var statearr_11368 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11368[0] = state_machine__6179__auto__);
(statearr_11368[1] = 1);
return statearr_11368;
});
var state_machine__6179__auto____1 = (function (state_11346){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11346);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11369){if((e11369 instanceof Object))
{var ex__6182__auto__ = e11369;var statearr_11370_11386 = state_11346;(statearr_11370_11386[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11387 = state_11346;
state_11346 = G__11387;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_11371 = f__6194__auto__.call(null);(statearr_11371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto__);
return statearr_11371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return c__6193__auto__;
});
web_game_of_life.app.t11306.prototype.om$core$IInitState$ = true;
web_game_of_life.app.t11306.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world","world",1127223044),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),false], null);
});
web_game_of_life.app.t11306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11308){var self__ = this;
var _11308__$1 = this;return self__.meta11307;
});
web_game_of_life.app.t11306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11308,meta11307__$1){var self__ = this;
var _11308__$1 = this;return (new web_game_of_life.app.t11306(self__.opts,self__.owner,self__.data,self__.world_view,meta11307__$1));
});
web_game_of_life.app.__GT_t11306 = (function __GT_t11306(opts__$1,owner__$1,data__$1,world_view__$1,meta11307){return (new web_game_of_life.app.t11306(opts__$1,owner__$1,data__$1,world_view__$1,meta11307));
});
}
return (new web_game_of_life.app.t11306(opts,owner,data,world_view,null));
});
web_game_of_life.app.get_dimensions = (function get_dimensions(){return Math.round.call(null,(window.innerWidth / 30));
});
web_game_of_life.app.start_app = (function start_app(data,owner){if(typeof web_game_of_life.app.t11391 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11391 = (function (owner,data,start_app,meta11392){
this.owner = owner;
this.data = data;
this.start_app = start_app;
this.meta11392 = meta11392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11391.cljs$lang$type = true;
web_game_of_life.app.t11391.cljs$lang$ctorStr = "web-game-of-life.app/t11391";
web_game_of_life.app.t11391.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11391");
});
web_game_of_life.app.t11391.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11391.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Cowan's Game Of Life"),om.core.build.call(null,web_game_of_life.app.world_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),40,new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
web_game_of_life.app.t11391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11393){var self__ = this;
var _11393__$1 = this;return self__.meta11392;
});
web_game_of_life.app.t11391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11393,meta11392__$1){var self__ = this;
var _11393__$1 = this;return (new web_game_of_life.app.t11391(self__.owner,self__.data,self__.start_app,meta11392__$1));
});
web_game_of_life.app.__GT_t11391 = (function __GT_t11391(owner__$1,data__$1,start_app__$1,meta11392){return (new web_game_of_life.app.t11391(owner__$1,data__$1,start_app__$1,meta11392));
});
}
return (new web_game_of_life.app.t11391(owner,data,start_app,null));
});
om.core.root.call(null,web_game_of_life.app.start_app,web_game_of_life.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=app.js.map