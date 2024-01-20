"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{622:function(t,e,i){var s=i(2265),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var s,r={},h=null,c=null;for(s in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,s)&&!u.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:n,type:t,key:h,ref:c,props:r,_owner:o.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},7437:function(t,e,i){t.exports=i(622)},9198:function(t,e,i){i.d(e,{j:function(){return r}});var s=i(2996),n=i(300),r=new class extends s.l{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},8354:function(t,e,i){i.d(e,{Gm:function(){return n},Qy:function(){return o},ZF:function(){return u}});var s=i(300);function n(t){return{onFetch:(e,i)=>{let n=async()=>{let i;let n=e.options,o=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],h=e.state.data?.pageParams||[],c=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?c=!0:e.signal.addEventListener("abort",()=>{c=!0}),e.signal)})},d=e.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`))),f=async(t,i,n)=>{if(c)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let r={queryKey:e.queryKey,pageParam:i,direction:n?"backward":"forward",meta:e.options.meta};l(r);let a=await d(r),{maxPages:o}=e.options,u=n?s.Ht:s.VX;return{pages:u(t.pages,a,o),pageParams:u(t.pageParams,i,o)}};if(o&&u.length){let t="backward"===o,e={pages:u,pageParams:h},s=(t?a:r)(n,e);i=await f(e,s,t)}else{i=await f({pages:[],pageParams:[]},h[0]??n.initialPageParam);let e=t??u.length;for(let t=1;t<e;t++){let t=r(n,i);i=await f(i,t)}}return i};e.options.persister?e.fetchFn=()=>e.options.persister?.(n,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},i):e.fetchFn=n}}}function r(t,{pages:e,pageParams:i}){let s=e.length-1;return t.getNextPageParam(e[s],e,i[s],i)}function a(t,{pages:e,pageParams:i}){return t.getPreviousPageParam?.(e[0],e,i[0],i)}function o(t,e){return!!e&&null!=r(t,e)}function u(t,e){return!!e&&!!t.getPreviousPageParam&&null!=a(t,e)}},7470:function(t,e,i){i.d(e,{R:function(){return o},m:function(){return a}});var s=i(7987),n=i(9024),r=i(1640),a=class extends n.F{constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.defaultOptions,this.#n=t.mutationCache,this.#r=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}#r;#s;#n;#a;setOptions(t){this.options={...this.#s,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#r.includes(t)||(this.#r.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#r=this.#r.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#r.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#o({type:"pending",variables:t}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#o({type:"pending",context:e,variables:t})}let i=await (this.#a=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#a.promise);return await this.#n.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#n.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#o({type:"success",data:i}),i}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#o({type:"error",error:e})}}}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,r.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#r.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},5590:function(t,e,i){i.d(e,{L:function(){return o}});var s=i(7987),n=i(7470),r=i(300),a=i(2996),o=class extends a.l{constructor(t={}){super(),this.config=t,this.#u=[],this.#h=0}#u;#h;#c;build(t,e,i){let s=new n.m({mutationCache:this,mutationId:++this.#h,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){this.#u.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#u=this.#u.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){s.V.batch(()=>{this.#u.forEach(t=>{this.remove(t)})})}getAll(){return this.#u}find(t){let e={exact:!0,...t};return this.#u.find(t=>(0,r.X7)(e,t))}findAll(t={}){return this.#u.filter(e=>(0,r.X7)(t,e))}notify(t){s.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#c=(this.#c??Promise.resolve()).then(()=>{let t=this.#u.filter(t=>t.state.isPaused);return s.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(r.ZT)),Promise.resolve()))}).then(()=>{this.#c=void 0}),this.#c}}},7987:function(t,e,i){i.d(e,{V:function(){return s}});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>setTimeout(t,0),r=s=>{e?t.push(s):n(()=>{i(s)})},a=()=>{let e=t;t=[],e.length&&n(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||a()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{n=t}}}()},436:function(t,e,i){i.d(e,{N:function(){return r}});var s=i(2996),n=i(300),r=new class extends s.l{#l=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#l!==t&&(this.#l=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#l}}},3002:function(t,e,i){i.d(e,{A:function(){return o}});var s=i(300),n=i(7987),r=i(1640),a=i(9024),o=class extends a.F{constructor(t){super(),this.#d=!1,this.#s=t.defaultOptions,this.#f(t.options),this.#r=[],this.#p=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#y=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#y,this.scheduleGc()}#y;#m;#p;#v;#a;#r;#s;#d;get meta(){return this.options.meta}#f(t){this.options={...this.#s,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#r.length||"idle"!==this.state.fetchStatus||this.#p.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.#o({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#o({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#v;return this.#a?.cancel(t),e?e.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#y)}isActive(){return this.#r.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#r.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#r.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){let t=this.#r.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(t){this.#r.includes(t)||(this.#r.push(t),this.clearGcTimeout(),this.#p.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#r.includes(t)&&(this.#r=this.#r.filter(e=>e!==t),this.#r.length||(this.#a&&(this.#d?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#p.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#r.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#v)return this.#a?.continueRetry(),this.#v}if(t&&this.#f(t),!this.options.queryFn){let t=this.#r.find(t=>t.options.queryFn);t&&this.#f(t.options)}let i=new AbortController,s={queryKey:this.queryKey,meta:this.meta},n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,i.signal)})};n(s);let a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#d=!1,this.options.persister)?this.options.persister(this.options.queryFn,s,this):this.options.queryFn(s):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};n(a),this.options.behavior?.onFetch(a,this),this.#m=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#o({type:"fetch",meta:a.fetchOptions?.meta});let o=t=>{(0,r.DV)(t)&&t.silent||this.#o({type:"error",error:t}),(0,r.DV)(t)||(this.#p.config.onError?.(t,this),this.#p.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#a=(0,r.Mz)({fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#p.config.onSuccess?.(t,this),this.#p.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode}),this.#v=this.#a.promise,this.#v}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:(0,r.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,r.DV)(i)&&i.revert&&this.#m)return{...this.#m,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.#r.forEach(t=>{t.onQueryUpdate()}),this.#p.notify({query:this,type:"updated",action:t})})}}},2428:function(t,e,i){i.d(e,{t:function(){return o}});var s=i(300),n=i(3002),r=i(7987),a=i(2996),o=class extends a.l{constructor(t={}){super(),this.config=t,this.#b=new Map}#b;build(t,e,i){let r=e.queryKey,a=e.queryHash??(0,s.Rm)(r,e),o=this.get(a);return o||(o=new n.A({cache:this,queryKey:r,queryHash:a,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(o)),o}add(t){this.#b.has(t.queryHash)||(this.#b.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#b.get(t.queryHash);e&&(t.destroy(),e===t&&this.#b.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){r.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#b.get(t)}getAll(){return[...this.#b.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,s._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,s._x)(t,e)):e}notify(t){r.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}}},5721:function(t,e,i){i.d(e,{S:function(){return c}});var s=i(300),n=i(2428),r=i(5590),a=i(9198),o=i(436),u=i(7987),h=i(8354),c=class{#g;#n;#s;#w;#C;#O;#q;#S;constructor(t={}){this.#g=t.queryCache||new n.t,this.#n=t.mutationCache||new r.L,this.#s=t.defaultOptions||{},this.#w=new Map,this.#C=new Map,this.#O=0}mount(){this.#O++,1===this.#O&&(this.#q=a.j.subscribe(()=>{a.j.isFocused()&&(this.resumePausedMutations(),this.#g.onFocus())}),this.#S=o.N.subscribe(()=>{o.N.isOnline()&&(this.resumePausedMutations(),this.#g.onOnline())}))}unmount(){this.#O--,0===this.#O&&(this.#q?.(),this.#q=void 0,this.#S?.(),this.#S=void 0)}isFetching(t){return this.#g.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#n.findAll({...t,status:"pending"}).length}getQueryData(t){return this.#g.find({queryKey:t})?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let n=this.#g.find({queryKey:t}),r=n?.state.data,a=(0,s.SE)(e,r);if(void 0===a)return;let o=this.defaultQueryOptions({queryKey:t});return this.#g.build(this,o).setData(a,{...i,manual:!0})}setQueriesData(t,e,i){return u.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){return this.#g.find({queryKey:t})?.state}removeQueries(t){let e=this.#g;u.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#g,s={type:"active",...t};return u.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(s,e)))}cancelQueries(t={},e={}){let i={revert:!0,...e};return Promise.all(u.V.batch(()=>this.#g.findAll(t).map(t=>t.cancel(i)))).then(s.ZT).catch(s.ZT)}invalidateQueries(t={},e={}){return u.V.batch(()=>{if(this.#g.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let i={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(i,e)})}refetchQueries(t={},e){let i={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(u.V.batch(()=>this.#g.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,i);return i.throwOnError||(e=e.catch(s.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(s.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#g.build(this,e);return i.isStaleByTime(e.staleTime)?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t){return t.behavior=(0,h.Gm)(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return this.#n.resumePausedMutations()}getQueryCache(){return this.#g}getMutationCache(){return this.#n}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#w.set((0,s.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#w.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){this.#C.set((0,s.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#C.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t?._defaulted)return t;let e={...this.#s.queries,...t?.queryKey&&this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,s.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),void 0===e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#s.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#g.clear(),this.#n.clear()}}},9024:function(t,e,i){i.d(e,{F:function(){return n}});var s=i(300),n=class{#F;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.gcTime)&&(this.#F=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.sk?1/0:3e5))}clearGcTimeout(){this.#F&&(clearTimeout(this.#F),this.#F=void 0)}}},1640:function(t,e,i){i.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return c},p8:function(){return u}});var s=i(9198),n=i(436),r=i(300);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||n.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function c(t){let e,i,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{i=t,h=e}),p=()=>!s.j.isFocused()||"always"!==t.networkMode&&!n.N.isOnline(),y=s=>{d||(d=!0,t.onSuccess?.(s),e?.(),i(s))},m=i=>{d||(d=!0,t.onError?.(i),e?.(),h(i))},v=()=>new Promise(i=>{e=t=>{let e=d||!p();return e&&i(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let i=t.retry??(r.sk?0:3),s=t.retryDelay??a,n="function"==typeof s?s(l,e):s,o=!0===i||"number"==typeof i&&l<i||"function"==typeof i&&i(l,e);if(c||!o){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(n).then(()=>{if(p())return v()}).then(()=>{c?m(e):b()})})}};return o(t.networkMode)?b():v().then(b),{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>e?.()?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},2996:function(t,e,i){i.d(e,{l:function(){return s}});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},300:function(t,e,i){i.d(e,{Ht:function(){return O},Kp:function(){return o},PN:function(){return a},Q$:function(){return f},Rm:function(){return c},SE:function(){return r},VS:function(){return p},VX:function(){return C},Wk:function(){return w},X7:function(){return h},Ym:function(){return l},ZT:function(){return n},_v:function(){return b},_x:function(){return u},oE:function(){return g},sk:function(){return s},to:function(){return d}});var s="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(a){if(s){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function h(t,e){let{exact:i,status:s,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(l(e.options.mutationKey)!==l(r))return!1}else if(!d(e.options.mutationKey,r))return!1}return(!s||e.state.status===s)&&(!n||!!n(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>m(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!d(t[i],e[i]))}function f(t,e){if(t===e)return t;let i=y(t)&&y(e);if(i||m(t)&&m(e)){let s=i?t.length:Object.keys(t).length,n=i?e:Object.keys(e),r=n.length,a=i?[]:{},o=0;for(let s=0;s<r;s++){let r=i?s:n[s];a[r]=f(t[r],e[r]),a[r]===t[r]&&void 0!==t[r]&&o++}return s===r&&o===s?t:a}return e}function p(t,e){if(t&&!e||e&&!t)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function y(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!v(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(v(i)&&i.hasOwnProperty("isPrototypeOf"))}function v(t){return"[object Object]"===Object.prototype.toString.call(t)}function b(t){return new Promise(e=>{setTimeout(e,t)})}function g(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?f(t,e):e}function w(t){return t}function C(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function O(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}},8038:function(t,e,i){i.d(e,{NL:function(){return r},aH:function(){return a},ay:function(){return n}});var s=i(2265),n=s.createContext(void 0),r=t=>{let e=s.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=({client:t,children:e})=>(s.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),s.createElement(n.Provider,{value:t},e))}}]);