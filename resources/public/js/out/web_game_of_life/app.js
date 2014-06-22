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
web_game_of_life.app.get_world = (function get_world(dimensions){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6193__auto___10846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_10832){var state_val_10833 = (state_10832[1]);if((state_val_10833 === 6))
{var inst_10830 = (state_10832[2]);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10832__$1,inst_10830);
} else
{if((state_val_10833 === 5))
{var inst_10826 = (state_10832[2]);var inst_10827 = cljs.core.get.call(null,inst_10826,new cljs.core.Keyword(null,"body","body",1016933652));var inst_10828 = cljs.core.vec.call(null,inst_10827);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10832__$1,6,ch,inst_10828);
} else
{if((state_val_10833 === 4))
{var inst_10820 = (state_10832[7]);var state_10832__$1 = state_10832;var statearr_10834_10847 = state_10832__$1;(statearr_10834_10847[2] = inst_10820);
(statearr_10834_10847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10833 === 3))
{var inst_10820 = (state_10832[7]);var inst_10823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10820);var state_10832__$1 = state_10832;var statearr_10835_10848 = state_10832__$1;(statearr_10835_10848[2] = inst_10823);
(statearr_10835_10848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10833 === 2))
{var inst_10820 = (state_10832[7]);var inst_10820__$1 = (state_10832[2]);var inst_10821 = cljs.core.seq_QMARK_.call(null,inst_10820__$1);var state_10832__$1 = (function (){var statearr_10836 = state_10832;(statearr_10836[7] = inst_10820__$1);
return statearr_10836;
})();if(inst_10821)
{var statearr_10837_10849 = state_10832__$1;(statearr_10837_10849[1] = 3);
} else
{var statearr_10838_10850 = state_10832__$1;(statearr_10838_10850[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10833 === 1))
{var inst_10818 = cljs_http.client.get.call(null,url);var state_10832__$1 = state_10832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10832__$1,2,inst_10818);
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
var state_machine__6179__auto____0 = (function (){var statearr_10842 = [null,null,null,null,null,null,null,null];(statearr_10842[0] = state_machine__6179__auto__);
(statearr_10842[1] = 1);
return statearr_10842;
});
var state_machine__6179__auto____1 = (function (state_10832){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_10832);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e10843){if((e10843 instanceof Object))
{var ex__6182__auto__ = e10843;var statearr_10844_10851 = state_10832;(statearr_10844_10851[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10852 = state_10832;
state_10832 = G__10852;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_10832){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_10832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_10845 = f__6194__auto__.call(null);(statearr_10845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto___10846);
return statearr_10845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return ch;
});
web_game_of_life.app.update_world = (function update_world(dimensions,world){var url = [cljs.core.str(web_game_of_life.app.world_url),cljs.core.str(dimensions)].join('');var ch = cljs.core.async.chan.call(null);var c__6193__auto___10917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_10903){var state_val_10904 = (state_10903[1]);if((state_val_10904 === 6))
{var inst_10901 = (state_10903[2]);var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10903__$1,inst_10901);
} else
{if((state_val_10904 === 5))
{var inst_10897 = (state_10903[2]);var inst_10898 = cljs.core.get.call(null,inst_10897,new cljs.core.Keyword(null,"body","body",1016933652));var inst_10899 = cljs.core.vec.call(null,inst_10898);var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10903__$1,6,ch,inst_10899);
} else
{if((state_val_10904 === 4))
{var inst_10891 = (state_10903[7]);var state_10903__$1 = state_10903;var statearr_10905_10918 = state_10903__$1;(statearr_10905_10918[2] = inst_10891);
(statearr_10905_10918[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 3))
{var inst_10891 = (state_10903[7]);var inst_10894 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10891);var state_10903__$1 = state_10903;var statearr_10906_10919 = state_10903__$1;(statearr_10906_10919[2] = inst_10894);
(statearr_10906_10919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 2))
{var inst_10891 = (state_10903[7]);var inst_10891__$1 = (state_10903[2]);var inst_10892 = cljs.core.seq_QMARK_.call(null,inst_10891__$1);var state_10903__$1 = (function (){var statearr_10907 = state_10903;(statearr_10907[7] = inst_10891__$1);
return statearr_10907;
})();if(inst_10892)
{var statearr_10908_10920 = state_10903__$1;(statearr_10908_10920[1] = 3);
} else
{var statearr_10909_10921 = state_10903__$1;(statearr_10909_10921[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10904 === 1))
{var inst_10886 = [new cljs.core.Keyword(null,"json-params","json-params",2645529981)];var inst_10887 = [world];var inst_10888 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10886,inst_10887);var inst_10889 = cljs_http.client.put.call(null,url,inst_10888);var state_10903__$1 = state_10903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10903__$1,2,inst_10889);
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
var state_machine__6179__auto____0 = (function (){var statearr_10913 = [null,null,null,null,null,null,null,null];(statearr_10913[0] = state_machine__6179__auto__);
(statearr_10913[1] = 1);
return statearr_10913;
});
var state_machine__6179__auto____1 = (function (state_10903){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_10903);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e10914){if((e10914 instanceof Object))
{var ex__6182__auto__ = e10914;var statearr_10915_10922 = state_10903;(statearr_10915_10922[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10923 = state_10903;
state_10903 = G__10923;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_10903){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_10903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_10916 = f__6194__auto__.call(null);(statearr_10916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto___10917);
return statearr_10916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return ch;
});
web_game_of_life.app.cell = (function cell(text){if(typeof web_game_of_life.app.t10927 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t10927 = (function (text,cell,meta10928){
this.text = text;
this.cell = cell;
this.meta10928 = meta10928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t10927.cljs$lang$type = true;
web_game_of_life.app.t10927.cljs$lang$ctorStr = "web-game-of-life.app/t10927";
web_game_of_life.app.t10927.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t10927");
});
web_game_of_life.app.t10927.prototype.om$core$IRender$ = true;
web_game_of_life.app.t10927.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.td({"className": ((cljs.core._EQ_.call(null,self__.text,1))?"on":"off")},"");
});
web_game_of_life.app.t10927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10929){var self__ = this;
var _10929__$1 = this;return self__.meta10928;
});
web_game_of_life.app.t10927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10929,meta10928__$1){var self__ = this;
var _10929__$1 = this;return (new web_game_of_life.app.t10927(self__.text,self__.cell,meta10928__$1));
});
web_game_of_life.app.__GT_t10927 = (function __GT_t10927(text__$1,cell__$1,meta10928){return (new web_game_of_life.app.t10927(text__$1,cell__$1,meta10928));
});
}
return (new web_game_of_life.app.t10927(text,cell,null));
});
web_game_of_life.app.row = (function row(data){if(typeof web_game_of_life.app.t10933 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t10933 = (function (data,row,meta10934){
this.data = data;
this.row = row;
this.meta10934 = meta10934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t10933.cljs$lang$type = true;
web_game_of_life.app.t10933.cljs$lang$ctorStr = "web-game-of-life.app/t10933";
web_game_of_life.app.t10933.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t10933");
});
web_game_of_life.app.t10933.prototype.om$core$IRender$ = true;
web_game_of_life.app.t10933.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.tr,null,om.core.build_all.call(null,web_game_of_life.app.cell,self__.data));
});
web_game_of_life.app.t10933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10935){var self__ = this;
var _10935__$1 = this;return self__.meta10934;
});
web_game_of_life.app.t10933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10935,meta10934__$1){var self__ = this;
var _10935__$1 = this;return (new web_game_of_life.app.t10933(self__.data,self__.row,meta10934__$1));
});
web_game_of_life.app.__GT_t10933 = (function __GT_t10933(data__$1,row__$1,meta10934){return (new web_game_of_life.app.t10933(data__$1,row__$1,meta10934));
});
}
return (new web_game_of_life.app.t10933(data,row,null));
});
web_game_of_life.app.world_view = (function world_view(data,owner,opts){if(typeof web_game_of_life.app.t11003 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11003 = (function (opts,owner,data,world_view,meta11004){
this.opts = opts;
this.owner = owner;
this.data = data;
this.world_view = world_view;
this.meta11004 = meta11004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11003.cljs$lang$type = true;
web_game_of_life.app.t11003.cljs$lang$ctorStr = "web-game-of-life.app/t11003";
web_game_of_life.app.t11003.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11003");
});
web_game_of_life.app.t11003.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11003.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.table,{"className": "world-view"},om.core.build_all.call(null,web_game_of_life.app.row,new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
web_game_of_life.app.t11003.prototype.om$core$IWillMount$ = true;
web_game_of_life.app.t11003.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6193__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6194__auto__ = (function (){var switch__6178__auto__ = (function (state_11043){var state_val_11044 = (state_11043[1]);if((state_val_11044 === 1))
{var state_11043__$1 = state_11043;var statearr_11045_11069 = state_11043__$1;(statearr_11045_11069[2] = null);
(statearr_11045_11069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 2))
{var state_11043__$1 = state_11043;if(true)
{var statearr_11046_11070 = state_11043__$1;(statearr_11046_11070[1] = 4);
} else
{var statearr_11047_11071 = state_11043__$1;(statearr_11047_11071[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 3))
{var inst_11041 = (state_11043[2]);var state_11043__$1 = state_11043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11043__$1,inst_11041);
} else
{if((state_val_11044 === 4))
{var inst_11008 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_11043__$1 = state_11043;if(cljs.core.truth_(inst_11008))
{var statearr_11048_11072 = state_11043__$1;(statearr_11048_11072[1] = 7);
} else
{var statearr_11049_11073 = state_11043__$1;(statearr_11049_11073[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 5))
{var state_11043__$1 = state_11043;var statearr_11050_11074 = state_11043__$1;(statearr_11050_11074[2] = null);
(statearr_11050_11074[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 6))
{var inst_11039 = (state_11043[2]);var state_11043__$1 = state_11043;var statearr_11051_11075 = state_11043__$1;(statearr_11051_11075[2] = inst_11039);
(statearr_11051_11075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 7))
{var inst_11010 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11011 = cljs.core.deref.call(null,self__.data);var inst_11012 = new cljs.core.Keyword(null,"world","world",1127223044).cljs$core$IFn$_invoke$arity$1(inst_11011);var inst_11013 = web_game_of_life.app.update_world.call(null,inst_11010,inst_11012);var state_11043__$1 = state_11043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,10,inst_11013);
} else
{if((state_val_11044 === 8))
{var inst_11017 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11018 = web_game_of_life.app.get_world.call(null,inst_11017);var state_11043__$1 = state_11043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,11,inst_11018);
} else
{if((state_val_11044 === 9))
{var inst_11022 = (state_11043[2]);var inst_11023 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442));var state_11043__$1 = (function (){var statearr_11052 = state_11043;(statearr_11052[7] = inst_11022);
return statearr_11052;
})();if(cljs.core.truth_(inst_11023))
{var statearr_11053_11076 = state_11043__$1;(statearr_11053_11076[1] = 12);
} else
{var statearr_11054_11077 = state_11043__$1;(statearr_11054_11077[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 10))
{var inst_11015 = (state_11043[2]);var state_11043__$1 = state_11043;var statearr_11055_11078 = state_11043__$1;(statearr_11055_11078[2] = inst_11015);
(statearr_11055_11078[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 11))
{var inst_11020 = (state_11043[2]);var state_11043__$1 = state_11043;var statearr_11056_11079 = state_11043__$1;(statearr_11056_11079[2] = inst_11020);
(statearr_11056_11079[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 12))
{var state_11043__$1 = state_11043;var statearr_11057_11080 = state_11043__$1;(statearr_11057_11080[2] = null);
(statearr_11057_11080[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 13))
{var inst_11026 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),true);var state_11043__$1 = state_11043;var statearr_11058_11081 = state_11043__$1;(statearr_11058_11081[2] = inst_11026);
(statearr_11058_11081[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11044 === 14))
{var inst_11022 = (state_11043[7]);var inst_11028 = (state_11043[2]);var inst_11029 = (function (){var world = inst_11022;return ((function (world,inst_11022,inst_11028,state_val_11044){
return (function (p1__10936_SHARP_){return cljs.core.assoc.call(null,p1__10936_SHARP_,new cljs.core.Keyword(null,"world","world",1127223044),world);
});
;})(world,inst_11022,inst_11028,state_val_11044))
})();var inst_11030 = om.core.transact_BANG_.call(null,self__.data,inst_11029);var inst_11031 = cljs.core.swap_BANG_.call(null,web_game_of_life.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",1127223044),inst_11022);var inst_11032 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_11033 = cljs.core.async.timeout.call(null,inst_11032);var state_11043__$1 = (function (){var statearr_11059 = state_11043;(statearr_11059[8] = inst_11030);
(statearr_11059[9] = inst_11031);
(statearr_11059[10] = inst_11028);
return statearr_11059;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,15,inst_11033);
} else
{if((state_val_11044 === 15))
{var inst_11035 = (state_11043[2]);var state_11043__$1 = (function (){var statearr_11060 = state_11043;(statearr_11060[11] = inst_11035);
return statearr_11060;
})();var statearr_11061_11082 = state_11043__$1;(statearr_11061_11082[2] = null);
(statearr_11061_11082[1] = 2);
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
var state_machine__6179__auto____0 = (function (){var statearr_11065 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11065[0] = state_machine__6179__auto__);
(statearr_11065[1] = 1);
return statearr_11065;
});
var state_machine__6179__auto____1 = (function (state_11043){while(true){
var ret_value__6180__auto__ = (function (){try{while(true){
var result__6181__auto__ = switch__6178__auto__.call(null,state_11043);if(cljs.core.keyword_identical_QMARK_.call(null,result__6181__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6181__auto__;
}
break;
}
}catch (e11066){if((e11066 instanceof Object))
{var ex__6182__auto__ = e11066;var statearr_11067_11083 = state_11043;(statearr_11067_11083[5] = ex__6182__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11084 = state_11043;
state_11043 = G__11084;
continue;
}
} else
{return ret_value__6180__auto__;
}
break;
}
});
state_machine__6179__auto__ = function(state_11043){
switch(arguments.length){
case 0:
return state_machine__6179__auto____0.call(this);
case 1:
return state_machine__6179__auto____1.call(this,state_11043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6179__auto____0;
state_machine__6179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6179__auto____1;
return state_machine__6179__auto__;
})()
;})(switch__6178__auto__))
})();var state__6195__auto__ = (function (){var statearr_11068 = f__6194__auto__.call(null);(statearr_11068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6193__auto__);
return statearr_11068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6195__auto__);
}));
return c__6193__auto__;
});
web_game_of_life.app.t11003.prototype.om$core$IInitState$ = true;
web_game_of_life.app.t11003.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world","world",1127223044),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"is-loaded","is-loaded",3249880442),false], null);
});
web_game_of_life.app.t11003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11005){var self__ = this;
var _11005__$1 = this;return self__.meta11004;
});
web_game_of_life.app.t11003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11005,meta11004__$1){var self__ = this;
var _11005__$1 = this;return (new web_game_of_life.app.t11003(self__.opts,self__.owner,self__.data,self__.world_view,meta11004__$1));
});
web_game_of_life.app.__GT_t11003 = (function __GT_t11003(opts__$1,owner__$1,data__$1,world_view__$1,meta11004){return (new web_game_of_life.app.t11003(opts__$1,owner__$1,data__$1,world_view__$1,meta11004));
});
}
return (new web_game_of_life.app.t11003(opts,owner,data,world_view,null));
});
web_game_of_life.app.get_dimensions = (function get_dimensions(){return Math.round.call(null,(window.innerWidth / 30));
});
web_game_of_life.app.start_app = (function start_app(data,owner){if(typeof web_game_of_life.app.t11088 !== 'undefined')
{} else
{
/**
* @constructor
*/
web_game_of_life.app.t11088 = (function (owner,data,start_app,meta11089){
this.owner = owner;
this.data = data;
this.start_app = start_app;
this.meta11089 = meta11089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
web_game_of_life.app.t11088.cljs$lang$type = true;
web_game_of_life.app.t11088.cljs$lang$ctorStr = "web-game-of-life.app/t11088";
web_game_of_life.app.t11088.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"web-game-of-life.app/t11088");
});
web_game_of_life.app.t11088.prototype.om$core$IRender$ = true;
web_game_of_life.app.t11088.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Cowan's Game Of Life"),om.core.build.call(null,web_game_of_life.app.world_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),40,new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
web_game_of_life.app.t11088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11090){var self__ = this;
var _11090__$1 = this;return self__.meta11089;
});
web_game_of_life.app.t11088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11090,meta11089__$1){var self__ = this;
var _11090__$1 = this;return (new web_game_of_life.app.t11088(self__.owner,self__.data,self__.start_app,meta11089__$1));
});
web_game_of_life.app.__GT_t11088 = (function __GT_t11088(owner__$1,data__$1,start_app__$1,meta11089){return (new web_game_of_life.app.t11088(owner__$1,data__$1,start_app__$1,meta11089));
});
}
return (new web_game_of_life.app.t11088(owner,data,start_app,null));
});
om.core.root.call(null,web_game_of_life.app.start_app,web_game_of_life.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=app.js.map