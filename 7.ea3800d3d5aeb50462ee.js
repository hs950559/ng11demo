(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{J3rI:function(t,n,e){"use strict";e.r(n),e.d(n,"CounterModule",function(){return C});var c=e("ofXK"),r=e("tyNb"),o=e("l7P3"),i=function(t){return t.INCREMENT="[Counter Component] Increment",t.DECREMENT="[Counter Component] Decrement",t.RESET="[Counter Component] Reset",t}({});const s=Object(o.p)(i.INCREMENT),b=Object(o.p)(i.DECREMENT),u=Object(o.p)(i.RESET),a=Object(o.q)("counter"),p=Object(o.s)(a,t=>t.count);var m=e("fXoL");const l=[{path:"",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.initializeValues()}initializeValues(){this.count$=this.store.pipe(Object(o.v)(p))}increment(){this.store.dispatch(s())}decrement(){this.store.dispatch(b())}reset(){this.store.dispatch(u())}}return t.\u0275fac=function(n){return new(n||t)(m.Ib(o.i))},t.\u0275cmp=m.Cb({type:t,selectors:[["app-counter"]],decls:10,vars:5,consts:[[1,"card","card-body","border","mb-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"btn","btn-info","mr-2",3,"click"],[1,"btn","btn-warning",3,"click"]],template:function(t,n){1&t&&(m.Nb(0,"div",0),m.ic(1),m.Xb(2,"json"),m.Xb(3,"async"),m.Mb(),m.Nb(4,"button",1),m.Ub("click",function(){return n.increment()}),m.ic(5,"Increment"),m.Mb(),m.Nb(6,"button",2),m.Ub("click",function(){return n.decrement()}),m.ic(7,"Decrement"),m.Mb(),m.Nb(8,"button",3),m.Ub("click",function(){return n.reset()}),m.ic(9,"Reset Counter"),m.Mb()),2&t&&(m.yb(1),m.kc(" Current Count: ",m.Yb(2,1,m.Yb(3,3,n.count$)),"\n"))},pipes:[c.g,c.b],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(l)],r.i]}),t})();const j=Object(o.r)({count:0},Object(o.t)(s,t=>Object.assign(Object.assign({},t),{count:t.count+1})),Object(o.t)(b,t=>Object.assign(Object.assign({},t),{count:t.count-1})),Object(o.t)(u,t=>Object.assign(Object.assign({},t),{count:0})));function d(t,n){return j(t,n)}var O=e("9jGm");let C=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(n){return new(n||t)},imports:[[c.c,f,o.k.forFeature("counter",d),O.c.forFeature([])]]}),t})()}}]);