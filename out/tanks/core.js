// Compiled by ClojureScript 1.7.228 {}
goog.provide('tanks.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_hash.sha1');
goog.require('tanks.render');
goog.require('tanks.utils');
cljs.core.enable_console_print_BANG_.call(null);
tanks.core.WIDTH = (800);
tanks.core.HEIGHT = (600);
if(typeof tanks.core.world !== 'undefined'){
} else {
tanks.core.world = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),tanks.core.WIDTH,new cljs.core.Keyword(null,"height","height",1025178622),tanks.core.HEIGHT], null);
}
if(typeof tanks.core.entity_id !== 'undefined'){
} else {
tanks.core.entity_id = (1);
}
tanks.core.get_id = (function tanks$core$get_id(){
tanks.core.entity_id = (tanks.core.entity_id + (1));

return tanks.core.entity_id;
});
if(typeof tanks.core.first_id !== 'undefined'){
} else {
tanks.core.first_id = tanks.core.get_id.call(null);
}
tanks.core.time_now = cljs.core.atom.call(null,0.0);
if(typeof tanks.core.playing !== 'undefined'){
} else {
tanks.core.playing = reagent.core.atom.call(null,false);
}
if(typeof tanks.core.game_over !== 'undefined'){
} else {
tanks.core.game_over = reagent.core.atom.call(null,false);
}
/**
 * position color speed and angle
 */
tanks.core.get_shrapnel = (function tanks$core$get_shrapnel(p,c,s,a,duration){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"time-in","time-in",-318978551),new cljs.core.Keyword(null,"expire-length","expire-length",2064698283),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"position","position",-2011731912)],[c,s,(3),cljs.core.deref.call(null,tanks.core.time_now),duration,new cljs.core.Keyword(null,"shrapnel","shrapnel",-1731096007),a,(3),tanks.core.get_id.call(null),p]);
});
tanks.core.get_player = (function tanks$core$get_player(h,p,c,t){
var p__$1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kills","kills",1838780801),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"transforms","transforms",793344554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"last-shot","last-shot",529109977),new cljs.core.Keyword(null,"time-between-shots","time-between-shots",1761040347),new cljs.core.Keyword(null,"bombs","bombs",1955561180)],[(0),c,0.9,(20),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"player","player",-97687400),(0),(0),(0),(20),tanks.core.get_id.call(null),(0),h,p,(0),t,(1)]);
return p__$1;
});
if(typeof tanks.core.key_map !== 'undefined'){
} else {
tanks.core.key_map = cljs.core.PersistentHashMap.fromArrays([(65),(39),(32),(40),(68),(83),(38),(87),(37)],[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"a","a",-2123407586)]);
}
if(typeof tanks.core.player !== 'undefined'){
} else {
tanks.core.player = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof tanks.core.keypresses !== 'undefined'){
} else {
tanks.core.keypresses = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof tanks.core.ai_agents !== 'undefined'){
} else {
tanks.core.ai_agents = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof tanks.core.entities !== 'undefined'){
} else {
tanks.core.entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof tanks.core.level !== 'undefined'){
} else {
tanks.core.level = cljs.core.atom.call(null,(1));
}
if(typeof tanks.core.sapper_rate !== 'undefined'){
} else {
tanks.core.sapper_rate = cljs.core.atom.call(null,(6000));
}
if(typeof tanks.core.speed_rate !== 'undefined'){
} else {
tanks.core.speed_rate = cljs.core.atom.call(null,0.6);
}
if(typeof tanks.core.level_increase_rate !== 'undefined'){
} else {
tanks.core.level_increase_rate = 1.2;
}
if(typeof tanks.core.points_for_kill !== 'undefined'){
} else {
tanks.core.points_for_kill = cljs.core.atom.call(null,(10));
}
if(typeof tanks.core.playing !== 'undefined'){
} else {
tanks.core.playing = reagent.core.atom.call(null,false);
}
if(typeof tanks.core.game_over !== 'undefined'){
} else {
tanks.core.game_over = reagent.core.atom.call(null,false);
}
if(typeof tanks.core.powers_of_two !== 'undefined'){
} else {
tanks.core.powers_of_two = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.drop.call(null,(1),cljs.core.take.call(null,(20),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(2)),(1)))));
}
tanks.core.power_of_two_QMARK_ = (function tanks$core$power_of_two_QMARK_(n){
return tanks.core.powers_of_two.call(null,n);
});
tanks.core.intro_enemy_position = (function tanks$core$intro_enemy_position(){
return cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),cljs.core.rand_int.call(null,tanks.core.HEIGHT)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,tanks.core.WIDTH),(-5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) + tanks.core.WIDTH),cljs.core.rand_int.call(null,tanks.core.HEIGHT)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,tanks.core.WIDTH),((5) + tanks.core.HEIGHT)], null)], null),cljs.core.rand_int.call(null,(4)));
});
tanks.core.add_sapper = (function tanks$core$add_sapper(s){
var id = tanks.core.get_id.call(null);
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sapper","sapper",783361099),new cljs.core.Keyword(null,"w","w",354169001),(10),new cljs.core.Keyword(null,"h","h",1109658740),(10),new cljs.core.Keyword(null,"speed","speed",1257663751),s,new cljs.core.Keyword(null,"health","health",-295520649),(10),new cljs.core.Keyword(null,"transforms","transforms",793344554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),tanks.core.intro_enemy_position.call(null)], null));
});
tanks.core.start_enemies = (function tanks$core$start_enemies(){
tanks.core.enemy_interval = window.setInterval(cljs.core.partial.call(null,tanks.core.add_sapper,cljs.core.deref.call(null,tanks.core.speed_rate)),cljs.core.deref.call(null,tanks.core.sapper_rate));
});
tanks.core.stop_enemies = (function tanks$core$stop_enemies(){
return window.clearInterval(tanks.core.enemy_interval);
});
tanks.core.level_up = (function tanks$core$level_up(){
cljs.core.swap_BANG_.call(null,tanks.core.speed_rate,cljs.core.partial.call(null,cljs.core._STAR_,tanks.core.level_increase_rate));

cljs.core.swap_BANG_.call(null,tanks.core.sapper_rate,cljs.core.comp.call(null,Math.floor,cljs.core.partial.call(null,cljs.core._STAR_,0.9)));

cljs.core.swap_BANG_.call(null,tanks.core.points_for_kill,cljs.core.comp.call(null,Math.floor,cljs.core.partial.call(null,cljs.core._STAR_,tanks.core.level_increase_rate)));

cljs.core.swap_BANG_.call(null,tanks.core.level,cljs.core.inc);

tanks.core.stop_enemies.call(null);

return tanks.core.start_enemies.call(null);
});
tanks.core.check_level_up = (function tanks$core$check_level_up(){
if(cljs.core.truth_(tanks.core.power_of_two_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tanks.core.entities),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"kills","kills",1838780801)], null))))){
return tanks.core.level_up.call(null);
} else {
return null;
}
});
tanks.core.init_game = (function tanks$core$init_game(){
cljs.core.reset_BANG_.call(null,tanks.core.player,cljs.core.assoc.call(null,tanks.core.get_player.call(null,(10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),"#072",(850)),new cljs.core.Keyword(null,"human","human",-772334390),true));

cljs.core.reset_BANG_.call(null,tanks.core.ai_agents,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,tanks.core.entities,cljs.core.PersistentArrayMap.fromArray([cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.deref.call(null,tanks.core.player)], true, false));

cljs.core.reset_BANG_.call(null,tanks.core.level,(1));

cljs.core.reset_BANG_.call(null,tanks.core.sapper_rate,(6000));

cljs.core.reset_BANG_.call(null,tanks.core.speed_rate,0.8);

cljs.core.reset_BANG_.call(null,tanks.core.playing,false);

cljs.core.reset_BANG_.call(null,tanks.core.points_for_kill,(10));

return cljs.core.reset_BANG_.call(null,tanks.core.game_over,false);
});
tanks.core.move_polar = (function tanks$core$move_polar(p,a,r){
var vec__22188 = p;
var x = cljs.core.nth.call(null,vec__22188,(0),null);
var y = cljs.core.nth.call(null,vec__22188,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (Math.cos(a) * r)),(y + (Math.sin(a) * r))], null);
});
tanks.core.get_shots = (function tanks$core$get_shots(entities){
return cljs.core.filter.call(null,(function (p1__22189_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),p1__22189_SHARP_.call(null,new cljs.core.Keyword(null,"type","type",1174270348)));
}),cljs.core.vals.call(null,entities));
});
tanks.core.get_players_and_walls = (function tanks$core$get_players_and_walls(entities){
return cljs.core.remove.call(null,(function (p1__22190_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shrapnel","shrapnel",-1731096007),p1__22190_SHARP_.call(null,new cljs.core.Keyword(null,"type","type",1174270348)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shot","shot",1961298790),p1__22190_SHARP_.call(null,new cljs.core.Keyword(null,"type","type",1174270348))));
}),cljs.core.vals.call(null,entities));
});
tanks.core.collision_QMARK_ = (function tanks$core$collision_QMARK_(p,q){
var vec__22197 = p.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var px1 = cljs.core.nth.call(null,vec__22197,(0),null);
var py1 = cljs.core.nth.call(null,vec__22197,(1),null);
var map__22198 = p;
var map__22198__$1 = ((((!((map__22198 == null)))?((((map__22198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22198):map__22198);
var pw = cljs.core.get.call(null,map__22198__$1,new cljs.core.Keyword(null,"w","w",354169001));
var ph = cljs.core.get.call(null,map__22198__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var px2 = (px1 + pw);
var py2 = (py1 + ph);
var vec__22199 = q.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var qx1 = cljs.core.nth.call(null,vec__22199,(0),null);
var qy1 = cljs.core.nth.call(null,vec__22199,(1),null);
var map__22200 = q;
var map__22200__$1 = ((((!((map__22200 == null)))?((((map__22200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22200):map__22200);
var qw = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"w","w",354169001));
var qh = cljs.core.get.call(null,map__22200__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var qx2 = (qx1 + qw);
var qy2 = (qy1 + qh);
return ((px1 < qx2)) && ((px2 > qx1)) && ((py1 < qy2)) && ((py2 > qy1));
});
tanks.core.add_ai = (function tanks$core$add_ai(id){
var ai = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tanks.core.get_id.call(null),new cljs.core.Keyword(null,"player-id","player-id",1003896428),id,new cljs.core.Keyword(null,"player-last-position","player-last-position",-435038406),cljs.core.sorted_set.call(null),new cljs.core.Keyword(null,"player-last-angle","player-last-angle",-657320656),cljs.core.sorted_set.call(null)], null);
var id__$1 = ai.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.swap_BANG_.call(null,tanks.core.ai_agents,cljs.core.assoc,id__$1,ai);

return id__$1;
});
tanks.core.add_player = (function tanks$core$add_player(){
var player = tanks.core.get_player.call(null,(30),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),"#992",(3300));
var id = cljs.core.deref.call(null,player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var ai_id = tanks.core.add_ai.call(null,id);
var player__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,player),new cljs.core.Keyword(null,"ai-id","ai-id",-366368370),ai_id);
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,id,player__$1);
});
if(typeof tanks.core.player_key_map !== 'undefined'){
} else {
tanks.core.player_key_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shoot","shoot",-696325137)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"player-bomb","player-bomb",1454060206)], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"player-move","player-move",1791931908),new cljs.core.Keyword(null,"player-move","player-move",1791931908),(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"player-move","player-move",1791931908),new cljs.core.Keyword(null,"player-move","player-move",1791931908),(-1)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"player-turn","player-turn",1660424586),new cljs.core.Keyword(null,"player-turn","player-turn",1660424586),-0.1], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"player-turn","player-turn",1660424586),new cljs.core.Keyword(null,"player-turn","player-turn",1660424586),0.1], null)], null);
}
tanks.core.ease_in_quad = (function tanks$core$ease_in_quad(x,t,b,c,d){
return (((c * (t / d)) * (t / d)) + b);
});
tanks.core.exp = (function tanks$core$exp(x,n){
return cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,n,x));
});
tanks.core.can_shoot_QMARK_ = (function tanks$core$can_shoot_QMARK_(p,t){
return ((t - p.call(null,new cljs.core.Keyword(null,"last-shot","last-shot",529109977))) > p.call(null,new cljs.core.Keyword(null,"time-between-shots","time-between-shots",1761040347)));
});
tanks.core.oob_QMARK_ = (function tanks$core$oob_QMARK_(p){
var vec__22204 = p;
var x = cljs.core.nth.call(null,vec__22204,(0),null);
var y = cljs.core.nth.call(null,vec__22204,(1),null);
return ((x > tanks.core.WIDTH)) || ((y > tanks.core.HEIGHT)) || ((x < (0))) || ((y < (0)));
});
tanks.core.dist = (function tanks$core$dist(p1,p2){
var vec__22207 = p1;
var x1 = cljs.core.nth.call(null,vec__22207,(0),null);
var y1 = cljs.core.nth.call(null,vec__22207,(1),null);
var vec__22208 = p2;
var x2 = cljs.core.nth.call(null,vec__22208,(0),null);
var y2 = cljs.core.nth.call(null,vec__22208,(1),null);
return Math.sqrt((tanks.core.exp.call(null,(x2 - x1),(2)) + tanks.core.exp.call(null,(y2 - y1),(2))));
});
tanks.core.angle_at = (function tanks$core$angle_at(p1,p2){
var vec__22211 = p1;
var x1 = cljs.core.nth.call(null,vec__22211,(0),null);
var y1 = cljs.core.nth.call(null,vec__22211,(1),null);
var vec__22212 = p2;
var x2 = cljs.core.nth.call(null,vec__22212,(0),null);
var y2 = cljs.core.nth.call(null,vec__22212,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return (Math.atan2(dy,dx) - Math.PI);
});
/**
 * Creates an explosion at a point
 */
tanks.core.explosion_at = (function tanks$core$explosion_at(p){
var n__19273__auto__ = (35);
var n = (0);
while(true){
if((n < n__19273__auto__)){
var s_22213 = tanks.core.get_shrapnel.call(null,p,"#c55",((1) + (cljs.core.rand.call(null,(100)) / (40))),n,cljs.core.rand_int.call(null,(2000)));
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,s_22213.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),s_22213);

var G__22214 = (n + (1));
n = G__22214;
continue;
} else {
return null;
}
break;
}
});
/**
 * Creates an explosion at a point
 */
tanks.core.ring_explosion_at = (function tanks$core$ring_explosion_at(start,p){
var seq__22219 = cljs.core.seq.call(null,cljs.core.range.call(null,(start + (0)),(start + (360)),(30)));
var chunk__22220 = null;
var count__22221 = (0);
var i__22222 = (0);
while(true){
if((i__22222 < count__22221)){
var n = cljs.core._nth.call(null,chunk__22220,i__22222);
var angle_22223 = (n * (Math.PI / (180)));
var s_22224 = tanks.core.get_shrapnel.call(null,p,"#dd5",1.7,angle_22223,cljs.core.rand_int.call(null,(230)));
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,s_22224.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),s_22224);

var G__22225 = seq__22219;
var G__22226 = chunk__22220;
var G__22227 = count__22221;
var G__22228 = (i__22222 + (1));
seq__22219 = G__22225;
chunk__22220 = G__22226;
count__22221 = G__22227;
i__22222 = G__22228;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22219);
if(temp__4657__auto__){
var seq__22219__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22219__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__22219__$1);
var G__22229 = cljs.core.chunk_rest.call(null,seq__22219__$1);
var G__22230 = c__19173__auto__;
var G__22231 = cljs.core.count.call(null,c__19173__auto__);
var G__22232 = (0);
seq__22219 = G__22229;
chunk__22220 = G__22230;
count__22221 = G__22231;
i__22222 = G__22232;
continue;
} else {
var n = cljs.core.first.call(null,seq__22219__$1);
var angle_22233 = (n * (Math.PI / (180)));
var s_22234 = tanks.core.get_shrapnel.call(null,p,"#dd5",1.7,angle_22233,cljs.core.rand_int.call(null,(230)));
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,s_22234.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),s_22234);

var G__22235 = cljs.core.next.call(null,seq__22219__$1);
var G__22236 = null;
var G__22237 = (0);
var G__22238 = (0);
seq__22219 = G__22235;
chunk__22220 = G__22236;
count__22221 = G__22237;
i__22222 = G__22238;
continue;
}
} else {
return null;
}
}
break;
}
});
tanks.core.sapper_explosion_at = (function tanks$core$sapper_explosion_at(p){
var seq__22243 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(400),(100)));
var chunk__22244 = null;
var count__22245 = (0);
var i__22246 = (0);
while(true){
if((i__22246 < count__22245)){
var n = cljs.core._nth.call(null,chunk__22244,i__22246);
window.setTimeout(((function (seq__22243,chunk__22244,count__22245,i__22246,n){
return (function (){
return tanks.core.ring_explosion_at.call(null,(n / (20)),p);
});})(seq__22243,chunk__22244,count__22245,i__22246,n))
,n);

var G__22247 = seq__22243;
var G__22248 = chunk__22244;
var G__22249 = count__22245;
var G__22250 = (i__22246 + (1));
seq__22243 = G__22247;
chunk__22244 = G__22248;
count__22245 = G__22249;
i__22246 = G__22250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22243);
if(temp__4657__auto__){
var seq__22243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22243__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__22243__$1);
var G__22251 = cljs.core.chunk_rest.call(null,seq__22243__$1);
var G__22252 = c__19173__auto__;
var G__22253 = cljs.core.count.call(null,c__19173__auto__);
var G__22254 = (0);
seq__22243 = G__22251;
chunk__22244 = G__22252;
count__22245 = G__22253;
i__22246 = G__22254;
continue;
} else {
var n = cljs.core.first.call(null,seq__22243__$1);
window.setTimeout(((function (seq__22243,chunk__22244,count__22245,i__22246,n,seq__22243__$1,temp__4657__auto__){
return (function (){
return tanks.core.ring_explosion_at.call(null,(n / (20)),p);
});})(seq__22243,chunk__22244,count__22245,i__22246,n,seq__22243__$1,temp__4657__auto__))
,n);

var G__22255 = cljs.core.next.call(null,seq__22243__$1);
var G__22256 = null;
var G__22257 = (0);
var G__22258 = (0);
seq__22243 = G__22255;
chunk__22244 = G__22256;
count__22245 = G__22257;
i__22246 = G__22258;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof tanks.core.do_event !== 'undefined'){
} else {
tanks.core.do_event = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tanks.core","do-event"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (e){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return null;
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"sapper-move","sapper-move",-2132168108),(function (e){
var temp__4655__auto__ = cljs.core.deref.call(null,tanks.core.entities).call(null,e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
if(cljs.core.truth_(temp__4655__auto__)){
var sapper = temp__4655__auto__;
var id = e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var old_y = cljs.core.get_in.call(null,sapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null));
var old_x = cljs.core.get_in.call(null,sapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null));
var vec__22259 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tanks.core.entities),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var px = cljs.core.nth.call(null,vec__22259,(0),null);
var py = cljs.core.nth.call(null,vec__22259,(1),null);
var dX = (old_x - px);
var dY = (old_y - py);
var angle = (((180) / Math.PI) * Math.atan((dY / dX)));
var position = sapper.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var new_position = tanks.core.move_polar.call(null,position,angle,sapper.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751)));
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),new_position);

if((tanks.core.dist.call(null,new_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null)) < (15))){
tanks.core.sapper_explosion_at.call(null,new_position);

cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.dissoc,id);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"splash-damage","splash-damage",-1677946877),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),e.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),new cljs.core.Keyword(null,"r","r",-471384190),(30),new cljs.core.Keyword(null,"val","val",128701612),(30),new cljs.core.Keyword(null,"position","position",-2011731912),new_position], null);
} else {
return null;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"splash-damage","splash-damage",-1677946877),(function (e){
var map__22260 = e;
var map__22260__$1 = ((((!((map__22260 == null)))?((((map__22260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22260):map__22260);
var timestamp = cljs.core.get.call(null,map__22260__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var val = cljs.core.get.call(null,map__22260__$1,new cljs.core.Keyword(null,"val","val",128701612));
var r = cljs.core.get.call(null,map__22260__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var p = cljs.core.get.call(null,map__22260__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pid = cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var player = cljs.core.deref.call(null,tanks.core.entities).call(null,pid);
var d = (function (){var x__18701__auto__ = (1);
var y__18702__auto__ = tanks.core.dist.call(null,player.call(null,new cljs.core.Keyword(null,"position","position",-2011731912)),p);
return ((x__18701__auto__ > y__18702__auto__) ? x__18701__auto__ : y__18702__auto__);
})();
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid,new cljs.core.Keyword(null,"transforms","transforms",793344554)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started","started",585705024),timestamp,new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"random","random",-557811113),new cljs.core.Keyword(null,"duration","duration",1444101068),(300)], null));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"damage","damage",970520018),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"val","val",128701612),(val / d),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.deref.call(null,tanks.core.entities).call(null,pid)], null);
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"shot-move","shot-move",904868678),(function (e){
var move = e.call(null,new cljs.core.Keyword(null,"shot-move","shot-move",904868678));
var shot = cljs.core.deref.call(null,tanks.core.entities).call(null,e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
var position = shot.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__22262 = position;
var x = cljs.core.nth.call(null,vec__22262,(0),null);
var y = cljs.core.nth.call(null,vec__22262,(1),null);
var w = cljs.core.nth.call(null,vec__22262,(2),null);
var h = cljs.core.nth.call(null,vec__22262,(3),null);
var vec__22263 = tanks.core.move_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),shot.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)),move);
var x__$1 = cljs.core.nth.call(null,vec__22263,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__22263,(1),null);
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1,w,h], null));
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"shrapnel-move","shrapnel-move",574892304),(function (e){
var move = e.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751));
var shrapnel = cljs.core.deref.call(null,tanks.core.entities).call(null,e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
var position = shrapnel.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__22264 = tanks.core.move_polar.call(null,position,shrapnel.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)),move);
var x = cljs.core.nth.call(null,vec__22264,(0),null);
var y = cljs.core.nth.call(null,vec__22264,(1),null);
if(cljs.core.not.call(null,e.call(null,new cljs.core.Keyword(null,"expire","expire",-70657108)))){
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.dissoc,e.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"player-turn","player-turn",1660424586),(function (e){
var player = e.call(null,new cljs.core.Keyword(null,"player","player",-97687400));
var pid = player.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var angle = e.call(null,new cljs.core.Keyword(null,"player-turn","player-turn",1660424586));
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid,new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(angle + player.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254))));
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"damage","damage",970520018),(function (e){
var id = cljs.core.get_in.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var val = e.call(null,new cljs.core.Keyword(null,"val","val",128701612));
var from_player_id = e.call(null,new cljs.core.Keyword(null,"from-player-id","from-player-id",1281619444));
var type = cljs.core.get_in.call(null,cljs.core.deref.call(null,tanks.core.entities),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
var score = cljs.core.deref.call(null,tanks.core.points_for_kill);
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"health","health",-295520649)], null),((function (id,val,from_player_id,type,score){
return (function (p1__22265_SHARP_){
return (p1__22265_SHARP_ - val);
});})(id,val,from_player_id,type,score))
);

if((cljs.core.get_in.call(null,cljs.core.deref.call(null,tanks.core.entities),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"health","health",-295520649)], null)) <= (0))){
if(cljs.core.truth_(from_player_id)){
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_player_id,new cljs.core.Keyword(null,"kills","kills",1838780801)], null),cljs.core.inc);

tanks.core.check_level_up.call(null);

cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_player_id,new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.partial.call(null,cljs.core._PLUS_,score));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"death","death",2026112826),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.deref.call(null,tanks.core.entities).call(null,id)], null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"death","death",2026112826),(function (e){
var id = cljs.core.get_in.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var position = cljs.core.get_in.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
tanks.core.explosion_at.call(null,position);

cljs.core.swap_BANG_.call(null,tanks.core.ai_agents,cljs.core.dissoc,cljs.core.get_in.call(null,e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ai-id","ai-id",-366368370)], null)));

cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.dissoc,id);

if(cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"game-over","game-over",-607322695),(function (e){
cljs.core.prn.call(null,"game-over",e);

cljs.core.reset_BANG_.call(null,tanks.core.game_over,true);

tanks.core.stop_enemies.call(null);

var seq__22266 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,tanks.core.entities)));
var chunk__22267 = null;
var count__22268 = (0);
var i__22269 = (0);
while(true){
if((i__22269 < count__22268)){
var e__$1 = cljs.core._nth.call(null,chunk__22267,i__22269);
if(cljs.core._EQ_.call(null,e__$1.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"sapper","sapper",783361099))){
tanks.core.do_event.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"death","death",2026112826),new cljs.core.Keyword(null,"entity","entity",-450970276),e__$1], null));
} else {
}

var G__22270 = seq__22266;
var G__22271 = chunk__22267;
var G__22272 = count__22268;
var G__22273 = (i__22269 + (1));
seq__22266 = G__22270;
chunk__22267 = G__22271;
count__22268 = G__22272;
i__22269 = G__22273;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22266);
if(temp__4657__auto__){
var seq__22266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22266__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__22266__$1);
var G__22274 = cljs.core.chunk_rest.call(null,seq__22266__$1);
var G__22275 = c__19173__auto__;
var G__22276 = cljs.core.count.call(null,c__19173__auto__);
var G__22277 = (0);
seq__22266 = G__22274;
chunk__22267 = G__22275;
count__22268 = G__22276;
i__22269 = G__22277;
continue;
} else {
var e__$1 = cljs.core.first.call(null,seq__22266__$1);
if(cljs.core._EQ_.call(null,e__$1.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"sapper","sapper",783361099))){
tanks.core.do_event.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"death","death",2026112826),new cljs.core.Keyword(null,"entity","entity",-450970276),e__$1], null));
} else {
}

var G__22278 = cljs.core.next.call(null,seq__22266__$1);
var G__22279 = null;
var G__22280 = (0);
var G__22281 = (0);
seq__22266 = G__22278;
chunk__22267 = G__22279;
count__22268 = G__22280;
i__22269 = G__22281;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"hit","hit",1909257382),(function (e){
var map__22282 = e;
var map__22282__$1 = ((((!((map__22282 == null)))?((((map__22282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22282):map__22282);
var shot_id = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"shot-id","shot-id",1968448944));
var from_player_id = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"from-player","from-player",1018691453));
var hit_entity = cljs.core.get.call(null,map__22282__$1,new cljs.core.Keyword(null,"to","to",192099007));
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hit_entity),new cljs.core.Keyword(null,"transforms","transforms",793344554)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started","started",585705024),e.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"random","random",-557811113),new cljs.core.Keyword(null,"duration","duration",1444101068),(300)], null));

cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_player_id,new cljs.core.Keyword(null,"hits","hits",-2120002930)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.dissoc,shot_id);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"damage","damage",970520018),new cljs.core.Keyword(null,"from-player-id","from-player-id",1281619444),from_player_id,new cljs.core.Keyword(null,"val","val",128701612),(5),new cljs.core.Keyword(null,"entity","entity",-450970276),hit_entity], null);
}));
tanks.core.legal_QMARK_ = (function tanks$core$legal_QMARK_(player,new_position){
var p = cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"position","position",-2011731912),new_position);
var pid = player.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var others = cljs.core.remove.call(null,((function (p,pid){
return (function (p1__22284_SHARP_){
return cljs.core._EQ_.call(null,p1__22284_SHARP_.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"sapper","sapper",783361099));
});})(p,pid))
,tanks.core.get_players_and_walls.call(null,cljs.core.deref.call(null,tanks.core.entities)));
return (cljs.core.not.call(null,tanks.core.oob_QMARK_.call(null,new_position))) && (cljs.core.not_any_QMARK_.call(null,((function (p,pid,others){
return (function (p1__22285_SHARP_){
return tanks.core.collision_QMARK_.call(null,p,p1__22285_SHARP_);
});})(p,pid,others))
,cljs.core.remove.call(null,((function (p,pid,others){
return (function (p1__22286_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22286_SHARP_),pid);
});})(p,pid,others))
,others)));
});
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"player-move","player-move",1791931908),(function (e){
var p = e.call(null,new cljs.core.Keyword(null,"player","player",-97687400));
var old_position = p.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var move = (p.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751)) * e.call(null,new cljs.core.Keyword(null,"player-move","player-move",1791931908)));
var new_position = tanks.core.move_polar.call(null,old_position,p.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)),move);
if(cljs.core.truth_(tanks.core.legal_QMARK_.call(null,p,new_position))){
return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new_position);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tanks.core.do_event,new cljs.core.Keyword(null,"shoot","shoot",-696325137),(function (e){
var t = e.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(e);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(player);
var x = cljs.core.get_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null));
var y = cljs.core.get_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null));
if(cljs.core.truth_(tanks.core.can_shoot_QMARK_.call(null,player,t))){
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"shots","shots",-1155689265)], null),cljs.core.inc);

var id_22287__$1 = tanks.core.get_id.call(null);
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc,id_22287__$1,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id_22287__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shot","shot",1961298790),new cljs.core.Keyword(null,"from-player","from-player",1018691453),player.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"angle","angle",1622094254),player.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)),new cljs.core.Keyword(null,"w","w",354169001),(4),new cljs.core.Keyword(null,"h","h",1109658740),(4),new cljs.core.Keyword(null,"position","position",-2011731912),tanks.core.move_polar.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((7) + x),((7) + y)], null),player.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254)),(18))], null));

return cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"last-shot","last-shot",529109977)], null),t);
} else {
return null;
}
}));
tanks.core.get_world_events = (function tanks$core$get_world_events(timestamp){
return cljs.core.keep.call(null,(function (ent){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shot","shot",1961298790),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shot-move","shot-move",904868678),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"shot-move","shot-move",904868678),(3),new cljs.core.Keyword(null,"id","id",-1388402092),ent.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Keyword(null,"shrapnel","shrapnel",-1731096007),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrapnel-move","shrapnel-move",574892304),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"speed","speed",1257663751),ent.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751)),new cljs.core.Keyword(null,"expire","expire",-70657108),(ent.call(null,new cljs.core.Keyword(null,"expire-length","expire-length",2064698283)) < (timestamp - ent.call(null,new cljs.core.Keyword(null,"time-in","time-in",-318978551)))),new cljs.core.Keyword(null,"id","id",-1388402092),ent.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null),new cljs.core.Keyword(null,"sapper","sapper",783361099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"speed","speed",1257663751),0.5,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sapper-move","sapper-move",-2132168108),new cljs.core.Keyword(null,"id","id",-1388402092),ent.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))], null)], null).call(null,ent.call(null,new cljs.core.Keyword(null,"type","type",1174270348)));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,tanks.core.entities)));
});
tanks.core.handle_events = (function tanks$core$handle_events(events){
if(cljs.core.empty_QMARK_.call(null,events)){
return null;
} else {
return tanks$core$handle_events.call(null,cljs.core.keep.call(null,tanks.core.do_event,events));
}
});
tanks.core.detect_hits = (function tanks$core$detect_hits(timestamp){
return cljs.core.mapcat.call(null,(function (s){
return cljs.core.keep.call(null,(function (p1__22288_SHARP_){
if(cljs.core.truth_((function (){var and__18358__auto__ = cljs.core.not_EQ_.call(null,p1__22288_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-player","from-player",1018691453)], null)));
if(and__18358__auto__){
return tanks.core.collision_QMARK_.call(null,s,p1__22288_SHARP_);
} else {
return and__18358__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.Keyword(null,"shot-id","shot-id",1968448944),s.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"from-player","from-player",1018691453),s.call(null,new cljs.core.Keyword(null,"from-player","from-player",1018691453)),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"to","to",192099007),p1__22288_SHARP_], null);
} else {
return null;
}
}),tanks.core.get_players_and_walls.call(null,cljs.core.deref.call(null,tanks.core.entities)));
}),tanks.core.get_shots.call(null,cljs.core.deref.call(null,tanks.core.entities)));
});
tanks.core.detect_shot_oob = (function tanks$core$detect_shot_oob(shots){
var oob = cljs.core.filter.call(null,(function (p1__22289_SHARP_){
return tanks.core.oob_QMARK_.call(null,p1__22289_SHARP_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912)));
}),shots);
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.swap_BANG_,tanks.core.entities,cljs.core.dissoc),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),oob));
});
tanks.core.handle_ai = (function tanks$core$handle_ai(timestamp){
var human = cljs.core.deref.call(null,tanks.core.entities).call(null,cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
var position = human.call(null,new cljs.core.Keyword(null,"position","position",-2011731912));
var angle = human.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.keep.call(null,((function (human,position,angle){
return (function (ai_pair){
var vec__22291 = ai_pair;
var id = cljs.core.nth.call(null,vec__22291,(0),null);
var ai = cljs.core.nth.call(null,vec__22291,(1),null);
var cpu_player_id = ai.call(null,new cljs.core.Keyword(null,"player-id","player-id",1003896428));
var cpu_player = cljs.core.deref.call(null,tanks.core.entities).call(null,cpu_player_id);
if(cljs.core.truth_(cpu_player)){
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cpu_player_id,new cljs.core.Keyword(null,"angle","angle",1622094254)], null),tanks.core.angle_at.call(null,position,cpu_player.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shoot","shoot",-696325137),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"player","player",-97687400),cpu_player], null);
} else {
return null;
}
});})(human,position,angle))
,cljs.core.seq.call(null,cljs.core.deref.call(null,tanks.core.ai_agents)));
});
if(typeof tanks.core.ui_player_score !== 'undefined'){
} else {
tanks.core.ui_player_score = reagent.core.atom.call(null,(0));
}
if(typeof tanks.core.ui_level !== 'undefined'){
} else {
tanks.core.ui_level = reagent.core.atom.call(null,cljs.core.deref.call(null,tanks.core.level));
}
tanks.core.update_world = (function tanks$core$update_world(keypresses,timestamp){
var press_list = cljs.core.seq.call(null,cljs.core.select_keys.call(null,keypresses,(function (){var iter__19142__auto__ = (function tanks$core$update_world_$_iter__22302(s__22303){
return (new cljs.core.LazySeq(null,(function (){
var s__22303__$1 = s__22303;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22303__$1);
if(temp__4657__auto__){
var s__22303__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22303__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__22303__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__22305 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__22304 = (0);
while(true){
if((i__22304 < size__19141__auto__)){
var vec__22308 = cljs.core._nth.call(null,c__19140__auto__,i__22304);
var k = cljs.core.nth.call(null,vec__22308,(0),null);
var v = cljs.core.nth.call(null,vec__22308,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__22305,k);

var G__22310 = (i__22304 + (1));
i__22304 = G__22310;
continue;
} else {
var G__22311 = (i__22304 + (1));
i__22304 = G__22311;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22305),tanks$core$update_world_$_iter__22302.call(null,cljs.core.chunk_rest.call(null,s__22303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22305),null);
}
} else {
var vec__22309 = cljs.core.first.call(null,s__22303__$2);
var k = cljs.core.nth.call(null,vec__22309,(0),null);
var v = cljs.core.nth.call(null,vec__22309,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,k,tanks$core$update_world_$_iter__22302.call(null,cljs.core.rest.call(null,s__22303__$2)));
} else {
var G__22312 = cljs.core.rest.call(null,s__22303__$2);
s__22303__$1 = G__22312;
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
return iter__19142__auto__.call(null,keypresses);
})()));
var player_events = cljs.core.map.call(null,((function (press_list){
return (function (p1__22293_SHARP_){
return cljs.core.assoc.call(null,p1__22293_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.deref.call(null,tanks.core.entities).call(null,cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092))));
});})(press_list))
,cljs.core.map.call(null,((function (press_list){
return (function (p1__22292_SHARP_){
return tanks.core.player_key_map.call(null,cljs.core.first.call(null,p1__22292_SHARP_));
});})(press_list))
,press_list));
var world_events = tanks.core.get_world_events.call(null,timestamp);
if(cljs.core.truth_(cljs.core.deref.call(null,tanks.core.entities).call(null,cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092))))){
tanks.core.handle_events.call(null,tanks.core.handle_ai.call(null,timestamp));

tanks.core.handle_events.call(null,player_events);
} else {
}

tanks.core.handle_events.call(null,world_events);

tanks.core.handle_events.call(null,tanks.core.detect_hits.call(null,timestamp));

cljs.core.reset_BANG_.call(null,tanks.core.ui_player_score,cljs.core.get_in.call(null,cljs.core.deref.call(null,tanks.core.entities),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,tanks.core.player).call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"score","score",-1963588780)], null)));

cljs.core.reset_BANG_.call(null,tanks.core.ui_level,cljs.core.deref.call(null,tanks.core.level));

return tanks.core.detect_shot_oob.call(null,tanks.core.get_shots.call(null,cljs.core.deref.call(null,tanks.core.entities)));
});
tanks.core.random_color = (function tanks$core$random_color(timestamp,c){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.cons.call(null,"#",cljs.core.subs.call(null,cljs_hash.sha1.sha1.call(null,[cljs.core.str(cljs.core.quot.call(null,timestamp,(90)))].join('')),(0),(3))));
});
tanks.core.do_entity_transform = (function tanks$core$do_entity_transform(entities,timestamp){
return cljs.core.map.call(null,(function (e){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"transforms","transforms",793344554).cljs$core$IFn$_invoke$arity$1(e)))){
return cljs.core.reduce.call(null,(function (p1__22313_SHARP_,p2__22314_SHARP_){
return cljs.core.update_in.call(null,p1__22313_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(p2__22314_SHARP_)], null),cljs.core.partial.call(null,tanks.core.random_color,timestamp));
}),e,new cljs.core.Keyword(null,"transforms","transforms",793344554).cljs$core$IFn$_invoke$arity$1(e));
} else {
return e;

}
}),cljs.core.vals.call(null,entities));
});
tanks.core.expire_transforms = (function tanks$core$expire_transforms(timestamp){
var seq__22322 = cljs.core.seq.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,tanks.core.entities)));
var chunk__22323 = null;
var count__22324 = (0);
var i__22325 = (0);
while(true){
if((i__22325 < count__22324)){
var vec__22326 = cljs.core._nth.call(null,chunk__22323,i__22325);
var id = cljs.core.nth.call(null,vec__22326,(0),null);
var entity = cljs.core.nth.call(null,vec__22326,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,entity.call(null,new cljs.core.Keyword(null,"transforms","transforms",793344554))))){
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"transforms","transforms",793344554)], null),cljs.core.partial.call(null,cljs.core.remove,((function (seq__22322,chunk__22323,count__22324,i__22325,vec__22326,id,entity){
return (function (p1__22315_SHARP_){
return ((timestamp - p1__22315_SHARP_.call(null,new cljs.core.Keyword(null,"started","started",585705024))) > p1__22315_SHARP_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068)));
});})(seq__22322,chunk__22323,count__22324,i__22325,vec__22326,id,entity))
));
} else {
}

var G__22328 = seq__22322;
var G__22329 = chunk__22323;
var G__22330 = count__22324;
var G__22331 = (i__22325 + (1));
seq__22322 = G__22328;
chunk__22323 = G__22329;
count__22324 = G__22330;
i__22325 = G__22331;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22322);
if(temp__4657__auto__){
var seq__22322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22322__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__22322__$1);
var G__22332 = cljs.core.chunk_rest.call(null,seq__22322__$1);
var G__22333 = c__19173__auto__;
var G__22334 = cljs.core.count.call(null,c__19173__auto__);
var G__22335 = (0);
seq__22322 = G__22332;
chunk__22323 = G__22333;
count__22324 = G__22334;
i__22325 = G__22335;
continue;
} else {
var vec__22327 = cljs.core.first.call(null,seq__22322__$1);
var id = cljs.core.nth.call(null,vec__22327,(0),null);
var entity = cljs.core.nth.call(null,vec__22327,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,entity.call(null,new cljs.core.Keyword(null,"transforms","transforms",793344554))))){
cljs.core.swap_BANG_.call(null,tanks.core.entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"transforms","transforms",793344554)], null),cljs.core.partial.call(null,cljs.core.remove,((function (seq__22322,chunk__22323,count__22324,i__22325,vec__22327,id,entity,seq__22322__$1,temp__4657__auto__){
return (function (p1__22315_SHARP_){
return ((timestamp - p1__22315_SHARP_.call(null,new cljs.core.Keyword(null,"started","started",585705024))) > p1__22315_SHARP_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068)));
});})(seq__22322,chunk__22323,count__22324,i__22325,vec__22327,id,entity,seq__22322__$1,temp__4657__auto__))
));
} else {
}

var G__22336 = cljs.core.next.call(null,seq__22322__$1);
var G__22337 = null;
var G__22338 = (0);
var G__22339 = (0);
seq__22322 = G__22336;
chunk__22323 = G__22337;
count__22324 = G__22338;
i__22325 = G__22339;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * create the render loop for the game
 */
tanks.core.start = (function tanks$core$start(){
return (function tanks$core$start_$_render_loop(timestamp){
if(cljs.core.truth_(cljs.core.deref.call(null,tanks.core.playing))){
cljs.core.swap_BANG_.call(null,tanks.core.time_now,(function (){
return timestamp;
}));

tanks.core.update_world.call(null,cljs.core.deref.call(null,tanks.core.keypresses),timestamp);

tanks.core.expire_transforms.call(null,timestamp);

tanks.render.draw_world.call(null,tanks.core.do_entity_transform.call(null,cljs.core.deref.call(null,tanks.core.entities),timestamp));

return window.requestAnimationFrame(tanks$core$start_$_render_loop);
} else {
return null;
}
}).call(null);
});
tanks.core.blur_focus = (function tanks$core$blur_focus(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22341 = arguments.length;
var i__19429__auto___22342 = (0);
while(true){
if((i__19429__auto___22342 < len__19428__auto___22341)){
args__19435__auto__.push((arguments[i__19429__auto___22342]));

var G__22343 = (i__19429__auto___22342 + (1));
i__19429__auto___22342 = G__22343;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return tanks.core.blur_focus.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

tanks.core.blur_focus.cljs$core$IFn$_invoke$arity$variadic = (function (a){
return document.getElementById("start").blur();
});

tanks.core.blur_focus.cljs$lang$maxFixedArity = (0);

tanks.core.blur_focus.cljs$lang$applyTo = (function (seq22340){
return tanks.core.blur_focus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22340));
});
tanks.core.toggle_start = (function tanks$core$toggle_start(){
if(cljs.core.truth_(cljs.core.deref.call(null,tanks.core.game_over))){
cljs.core.reset_BANG_.call(null,tanks.core.game_over,false);

tanks.core.init_game.call(null);

cljs.core.reset_BANG_.call(null,tanks.core.playing,false);

return window.setTimeout((function (){
return tanks$core$toggle_start.call(null);
}),(250));
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,tanks.core.playing))){
tanks.core.start_enemies.call(null);

cljs.core.reset_BANG_.call(null,tanks.core.playing,true);

return cljs.core.comp.call(null,tanks.core.blur_focus,tanks.core.start).call(null);
} else {
tanks.core.stop_enemies.call(null);

cljs.core.reset_BANG_.call(null,tanks.core.playing,false);

return tanks.core.blur_focus.call(null);
}
}
});
tanks.core.app_ui = (function tanks$core$app_ui(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#title-bar","div#title-bar",-996220524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#title","h1#title",-1947813100),"Ambush!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#start","button#start",-1624751961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tanks.core.toggle_start], null),(cljs.core.truth_(cljs.core.deref.call(null,tanks.core.game_over))?"Play Again":((cljs.core.not.call(null,cljs.core.deref.call(null,tanks.core.playing)))?"Play":"Pause"))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#screen","canvas#screen",107442873),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),tanks.core.WIDTH,new cljs.core.Keyword(null,"height","height",1025178622),tanks.core.HEIGHT], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pinfo","div.pinfo",-1313431258),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#player-name","span#player-name",1518099686),"Player 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#score","span#score",200265451),cljs.core.deref.call(null,tanks.core.ui_player_score)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#level","span#level",443605531),"Level ",cljs.core.deref.call(null,tanks.core.ui_level)], null)], null);
});
if(typeof tanks.core.main !== 'undefined'){
} else {
tanks.core.main = (function (){
tanks.core.init_game.call(null);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tanks.core.app_ui], null),document.getElementById("main"));

window.addEventListener("keydown",(function (p1__22344_SHARP_){
cljs.core.swap_BANG_.call(null,tanks.core.keypresses,cljs.core.assoc,tanks.core.key_map.call(null,(p1__22344_SHARP_["keyCode"])),true);

return false;
}));

return window.addEventListener("keyup",(function (p1__22345_SHARP_){
return cljs.core.swap_BANG_.call(null,tanks.core.keypresses,cljs.core.assoc,tanks.core.key_map.call(null,(p1__22345_SHARP_["keyCode"])),false);
}));
})()
;
}

//# sourceMappingURL=core.js.map