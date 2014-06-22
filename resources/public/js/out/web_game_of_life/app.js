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
web_game_of_life.app.get_world = (function get_world(dimensions){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6192__auto___35004 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_34990){var state_val_34991 = (state_34990[1]);if((state_val_34991 === 6))
{var inst_34988 = (state_34990[2]);var state_34990__$1 = state_34990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34990__$1,inst_34988);
} else
{if((state_val_34991 === 5))
{var inst_34984 = (state_34990[2]);var inst_34985 = cljs.core.get.call(null,inst_34984,new cljs.core.Keyword(null,"body","body",1016933652));var inst_34986 = cljs.core.vec.call(null,inst_34985);var state_34990__$1 = state_34990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,6,ch,inst_34986);
} else
{if((state_val_34991 === 4))
{var inst_34978 = (state_34990[7]);var state_34990__$1 = state_34990;var statearr_34992_35005 = state_34990__$1;(statearr_34992_35005[2] = inst_34978);
(statearr_34992_35005[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34991 === 3))
{var inst_34978 = (state_34990[7]);var inst_34981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34978);var state_34990__$1 = state_34990;var statearr_34993_35006 = state_34990__$1;(statearr_34993_35006[2] = inst_34981);
(statearr_34993_35006[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34991 === 2))
{var inst_34978 = (state_34990[7]);var inst_34978__$1 = (state_34990[2]);var inst_34979 = cljs.core.seq_QMARK_.call(null,inst_34978__$1);var state_34990__$1 = (function (){var statearr_34994 = state_34990;(statearr_34994[7] = inst_34978__$1);
return statearr_34994;
})();if(inst_34979)
{var statearr_34995_35007 = state_34990__$1;(statearr_34995_35007[1] = 3);
} else
{var statearr_34996_35008 = state_34990__$1;(statearr_34996_35008[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34991 === 1))
{var inst_34976 = cljs_http.client.get.call(null,url);var state_34990__$1 = state_34990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34990__$1,2,inst_34976);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_35000 = [null,null,null,null,null,null,null,null];(statearr_35000[0] = state_machine__6178__auto__);
(statearr_35000[1] = 1);
return statearr_35000;
});
var state_machine__6178__auto____1 = (function (state_34990){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_34990);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e35001){if((e35001 instanceof Object))
{var ex__6181__auto__ = e35001;var statearr_35002_35009 = state_34990;(statearr_35002_35009[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34990);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35010 = state_34990;
state_34990 = G__35010;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_35003 = f__6193__auto__.call(null);(statearr_35003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___35004);
return statearr_35003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return ch;
});
web_game_of_life.app.update_world = (function update_world(dimensions,world){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6192__auto___35075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_35061){var state_val_35062 = (state_35061[1]);if((state_val_35062 === 6))
{var inst_35059 = (state_35061[2]);var state_35061__$1 = state_35061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35061__$1,inst_35059);
} else
{if((state_val_35062 === 5))
{var inst_35055 = (state_35061[2]);var inst_35056 = cljs.core.get.call(null,inst_35055,new cljs.core.Keyword(null,"body","body",1016933652));var inst_35057 = cljs.core.vec.call(null,inst_35056);var state_35061__$1 = state_35061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35061__$1,6,ch,inst_35057);
} else
{if((state_val_35062 === 4))
{var inst_35049 = (state_35061[7]);var state_35061__$1 = state_35061;var statearr_35063_35076 = state_35061__$1;(statearr_35063_35076[2] = inst_35049);
(statearr_35063_35076[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35062 === 3))
{var inst_35049 = (state_35061[7]);var inst_35052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35049);var state_35061__$1 = state_35061;var statearr_35064_35077 = state_35061__$1;(statearr_35064_35077[2] = inst_35052);
(statearr_35064_35077[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35062 === 2))
{var inst_35049 = (state_35061[7]);var inst_35049__$1 = (state_35061[2]);var inst_35050 = cljs.core.seq_QMARK_.call(null,inst_35049__$1);var state_35061__$1 = (function (){var statearr_35065 = state_35061;(statearr_35065[7] = inst_35049__$1);
return statearr_35065;
})();if(inst_35050)
{var statearr_35066_35078 = state_35061__$1;(statearr_35066_35078[1] = 3);
} else
{var statearr_35067_35079 = state_35061__$1;(statearr_35067_35079[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35062 === 1))
{var inst_35044 = [new cljs.core.Keyword(null,"json-params","json-params",2645529981)];var inst_35045 = [world];var inst_35046 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35044,inst_35045);var inst_35047 = cljs_http.client.put.call(null,url,inst_35046);var state_35061__$1 = state_35061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35061__$1,2,inst_35047);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_35071 = [null,null,null,null,null,null,null,null];(statearr_35071[0] = state_machine__6178__auto__);
(statearr_35071[1] = 1);
return statearr_35071;
});
var state_machine__6178__auto____1 = (function (state_35061){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_35061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object))
{var ex__6181__auto__ = e35072;var statearr_35073_35080 = state_35061;(statearr_35073_35080[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35081 = state_35061;
state_35061 = G__35081;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_35061){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_35061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_35074 = f__6193__auto__.call(null);(statearr_35074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___35075);
return statearr_35074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return ch;
});
web_game_of_life.app.cell = (function cell(text){if(typeof web_game_of_life.app.t35085 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t35085 = (function (text,cell,meta35086){
this.text = text;
this.cell = cell;
this.meta35086 = meta35086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t35085.cljs$lang$type = true;
web_game_of_life.app.t35085.cljs$lang$ctorStr = "web-game-of-life.app/t35085";
web_game_of_life.app.t35085.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t35085");
});
web_game_of_life.app.t35085.prototype.om$core$IRender$ = true;
web_game_of_life.app.t35085.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.td({"className": ((cljs.core._EQ_.call(null,self__.text,1))?"on":"off")},"");
});
web_game_of_life.app.t35085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35087){var self__ = this;
var _35087__$1 = this;return self__.meta35086;
});
web_game_of_life.app.t35085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35087,meta35086__$1){var self__ = this;
var _35087__$1 = this;return (new web_game_of_life.app.t35085(self__.text,self__.cell,meta35086__$1));
});
web_game_of_life.app.__GT_t35085 = (function __GT_t35085(text__$1,cell__$1,meta35086){return (new web_game_of_life.app.t35085(text__$1,cell__$1,meta35086));
});
}
return (new web_game_of_life.app.t35085(text,cell,null));
});
web_game_of_life.app.row = (function row(data){if(typeof web_game_of_life.app.t35091 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t35091 = (function (data,row,meta35092){
this.data = data;
this.row = row;
this.meta35092 = meta35092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t35091.cljs$lang$type = true;
web_game_of_life.app.t35091.cljs$lang$ctorStr = "web-game-of-life.app/t35091";
web_game_of_life.app.t35091.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t35091");
});
web_game_of_life.app.t35091.prototype.om$core$IRender$ = true;
web_game_of_life.app.t35091.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,om.core.build_all.call(null,web_game_of_life.app.cell,self__.data));
});
web_game_of_life.app.t35091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35093){var self__ = this;
var _35093__$1 = this;return self__.meta35092;
});
web_game_of_life.app.t35091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35093,meta35092__$1){var self__ = this;
var _35093__$1 = this;return (new web_game_of_life.app.t35091(self__.data,self__.row,meta35092__$1));
});
web_game_of_life.app.__GT_t35091 = (function __GT_t35091(data__$1,row__$1,meta35092){return (new web_game_of_life.app.t35091(data__$1,row__$1,meta35092));
});
}
return (new web_game_of_life.app.t35091(data,row,null));
});
web_game_of_life.app.world_view = (function world_view(data,owner,opts){if(typeof web_game_of_life.app.t35161 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t35161 = (function (opts,owner,data,world_view,meta35162){
this.opts = opts;
this.owner = owner;
this.data = data;
this.world_view = world_view;
this.meta35162 = meta35162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t35161.cljs$lang$type = true;
web_game_of_life.app.t35161.cljs$lang$ctorStr = "web-game-of-life.app/t35161";
web_game_of_life.app.t35161.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t35161");
});
web_game_of_life.app.t35161.prototype.om$core$IRender$ = true;
web_game_of_life.app.t35161.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.table,{"className": "world-view"},om.core.build_all.call(null,web_game_of_life.app.row,new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
web_game_of_life.app.t35161.prototype.om$core$IWillMount$ = true;
web_game_of_life.app.t35161.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_35201){var state_val_35202 = (state_35201[1]);if((state_val_35202 === 1))
{var state_35201__$1 = state_35201;var statearr_35203_35227 = state_35201__$1;(statearr_35203_35227[2] = null);
(statearr_35203_35227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 2))
{var state_35201__$1 = state_35201;if(true)
{var statearr_35204_35228 = state_35201__$1;(statearr_35204_35228[1] = 4);
} else
{var statearr_35205_35229 = state_35201__$1;(statearr_35205_35229[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 3))
{var inst_35199 = (state_35201[2]);var state_35201__$1 = state_35201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35201__$1,inst_35199);
} else
{if((state_val_35202 === 4))
{var inst_35166 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_35201__$1 = state_35201;if(cljs.core.truth_(inst_35166))
{var statearr_35206_35230 = state_35201__$1;(statearr_35206_35230[1] = 7);
} else
{var statearr_35207_35231 = state_35201__$1;(statearr_35207_35231[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 5))
{var state_35201__$1 = state_35201;var statearr_35208_35232 = state_35201__$1;(statearr_35208_35232[2] = null);
(statearr_35208_35232[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 6))
{var inst_35197 = (state_35201[2]);var state_35201__$1 = state_35201;var statearr_35209_35233 = state_35201__$1;(statearr_35209_35233[2] = inst_35197);
(statearr_35209_35233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 7))
{var inst_35168 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_35169 = cljs.core.deref.call(null,self__.data);var inst_35170 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_35169);var inst_35171 = web_game_of_life.app.update_world.call(null,inst_35168,inst_35170);var state_35201__$1 = state_35201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35201__$1,10,inst_35171);
} else
{if((state_val_35202 === 8))
{var inst_35175 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_35176 = web_game_of_life.app.get_world.call(null,inst_35175);var state_35201__$1 = state_35201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35201__$1,11,inst_35176);
} else
{if((state_val_35202 === 9))
{var inst_35180 = (state_35201[2]);var inst_35181 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_35201__$1 = (function (){var statearr_35210 = state_35201;(statearr_35210[7] = inst_35180);
return statearr_35210;
})();if(cljs.core.truth_(inst_35181))
{var statearr_35211_35234 = state_35201__$1;(statearr_35211_35234[1] = 12);
} else
{var statearr_35212_35235 = state_35201__$1;(statearr_35212_35235[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 10))
{var inst_35173 = (state_35201[2]);var state_35201__$1 = state_35201;var statearr_35213_35236 = state_35201__$1;(statearr_35213_35236[2] = inst_35173);
(statearr_35213_35236[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 11))
{var inst_35178 = (state_35201[2]);var state_35201__$1 = state_35201;var statearr_35214_35237 = state_35201__$1;(statearr_35214_35237[2] = inst_35178);
(statearr_35214_35237[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 12))
{var state_35201__$1 = state_35201;var statearr_35215_35238 = state_35201__$1;(statearr_35215_35238[2] = null);
(statearr_35215_35238[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 13))
{var inst_35184 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),true);var state_35201__$1 = state_35201;var statearr_35216_35239 = state_35201__$1;(statearr_35216_35239[2] = inst_35184);
(statearr_35216_35239[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35202 === 14))
{var inst_35180 = (state_35201[7]);var inst_35186 = (state_35201[2]);var inst_35187 = (function (){var world = inst_35180;return ((function (world,inst_35180,inst_35186,state_val_35202){
return (function (p1__35094_SHARP_){return cljs.core.assoc.call(null,p1__35094_SHARP_,new cljs.core.Keyword(null,"world","world",1127223044),world);
});
;})(world,inst_35180,inst_35186,state_val_35202))
})();var inst_35188 = om.core.transact_BANG_.call(null,self__.data,inst_35187);var inst_35189 = cljs.core.swap_BANG_.call(null,web_game_of_life.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",1127223044),inst_35180);var inst_35190 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_35191 = cljs.core.async.timeout.call(null,inst_35190);var state_35201__$1 = (function (){var statearr_35217 = state_35201;(statearr_35217[8] = inst_35188);
(statearr_35217[9] = inst_35189);
(statearr_35217[10] = inst_35186);
return statearr_35217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35201__$1,15,inst_35191);
} else
{if((state_val_35202 === 15))
{var inst_35193 = (state_35201[2]);var state_35201__$1 = (function (){var statearr_35218 = state_35201;(statearr_35218[11] = inst_35193);
return statearr_35218;
})();var statearr_35219_35240 = state_35201__$1;(statearr_35219_35240[2] = null);
(statearr_35219_35240[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_35223 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35223[0] = state_machine__6178__auto__);
(statearr_35223[1] = 1);
return statearr_35223;
});
var state_machine__6178__auto____1 = (function (state_35201){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_35201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e35224){if((e35224 instanceof Object))
{var ex__6181__auto__ = e35224;var statearr_35225_35241 = state_35201;(statearr_35225_35241[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35242 = state_35201;
state_35201 = G__35242;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_35201){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_35201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_35226 = f__6193__auto__.call(null);(statearr_35226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_35226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
web_game_of_life.app.t35161.prototype.om$core$IInitState$ = true;
web_game_of_life.app.t35161.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world","world",1127223044),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),false], null);
});
web_game_of_life.app.t35161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35163){var self__ = this;
var _35163__$1 = this;return self__.meta35162;
});
web_game_of_life.app.t35161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35163,meta35162__$1){var self__ = this;
var _35163__$1 = this;return (new web_game_of_life.app.t35161(self__.opts,self__.owner,self__.data,self__.world_view,meta35162__$1));
});
web_game_of_life.app.__GT_t35161 = (function __GT_t35161(opts__$1,owner__$1,data__$1,world_view__$1,meta35162){return (new web_game_of_life.app.t35161(opts__$1,owner__$1,data__$1,world_view__$1,meta35162));
});
}
return (new web_game_of_life.app.t35161(opts,owner,data,world_view,null));
});
web_game_of_life.app.get_dimensions = (function get_dimensions(){return Math.round.call(null,(window.innerWidth / 30));
});
web_game_of_life.app.start_app = (function start_app(data,owner){if(typeof web_game_of_life.app.t35246 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t35246 = (function (owner,data,start_app,meta35247){
this.owner = owner;
this.data = data;
this.start_app = start_app;
this.meta35247 = meta35247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t35246.cljs$lang$type = true;
web_game_of_life.app.t35246.cljs$lang$ctorStr = "web-game-of-life.app/t35246";
web_game_of_life.app.t35246.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t35246");
});
web_game_of_life.app.t35246.prototype.om$core$IRender$ = true;
web_game_of_life.app.t35246.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Cowan's Game Of Life"),om.core.build.call(null,web_game_of_life.app.world_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),web_game_of_life.app.get_dimensions.call(null),new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
web_game_of_life.app.t35246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35248){var self__ = this;
var _35248__$1 = this;return self__.meta35247;
});
web_game_of_life.app.t35246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35248,meta35247__$1){var self__ = this;
var _35248__$1 = this;return (new web_game_of_life.app.t35246(self__.owner,self__.data,self__.start_app,meta35247__$1));
});
web_game_of_life.app.__GT_t35246 = (function __GT_t35246(owner__$1,data__$1,start_app__$1,meta35247){return (new web_game_of_life.app.t35246(owner__$1,data__$1,start_app__$1,meta35247));
});
}
return (new web_game_of_life.app.t35246(owner,data,start_app,null));
});
om.core.root.call(null,web_game_of_life.app.start_app,web_game_of_life.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=app.js.map