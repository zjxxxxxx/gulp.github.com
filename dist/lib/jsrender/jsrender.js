!function(t){var e=(0,eval)("this").jQuery;"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=e?t(e):function(e){if(e&&!e.fn)throw"Provide jQuery or null";return t(e)}:t(!1)}(function(l){"use strict";var e,r,m,T,R,d,_,V,M,s,E,p,F,g,a=(0,eval)("this"),w=!1===l,b=(l=l&&l.fn?l:a.jQuery,"v1.0.0-beta"),i="{",O="{",q="}",o="}",u="^",Q=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,x=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^\(\[])|[)\]])([([]?))|(\s+)/g,S=/[ \t]*(\r\n|\n|\r)/g,K=/\\(['"])/g,j=/['"\\]/g,H=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,D=/^if\s/,C=/<(\w+)[>\s]/,A=/[\x00`><\"'&]/,P=/^on[A-Z]|^convert(Back)?$/,Z=/[\x00`><"'&]/g,z=0,G={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},I="html",v="object",c="data-jsv-tmpl",f="jsvTmpl",W="For #index in nested block use #getIndex().",X={},t=a.jsrender,Y=t&&l&&!l.render,h={template:{compile:function n(r,e,i,s){function t(e){var t;if(""+e===e||0<e.nodeType&&(a=e)){if(!a)if(/^\.\/[^\\:*?"<>]*$/.test(e))(t=V[r=r||e])?e=t:a=document.getElementById(e);else if(l.fn&&!m.test(e))try{a=l(document).find(e)[0]}catch(e){}a&&(s?e=a.innerHTML:((t=a.getAttribute(c))?t!==f?(e=V[t],delete V[t]):l.fn&&(e=l.data(a)[f]):(r=r||(l.fn?f:e),e=n(r,a.innerHTML,i,s)),e.tmplName=r=r||t,r!==f&&(V[r]=e),a.setAttribute(c,r),l.fn&&l.data(a,f,e))),a=void 0}else e.fn||(e=void 0);return e}var a,o,d=e=e||"";0===s&&(s=void 0,d=t(d));s=s||(e.markup?e:{});s.tmplName=r;i&&(s._parentTmpl=i);!d&&e.markup&&(d=t(e.markup))&&d.fn&&(d=d.markup);if(void 0!==d)return d.fn||e.fn?d.fn&&(o=d):(e=pe(d,s),L(d.replace(j,"\\$&"),e)),o||(de(s),o=y(function(){return e.render.apply(e,arguments)},e)),r&&!i&&r!==f&&(X[r]=o),o}},tag:{compile:function(e,t,n){var r,i,s,a=new p._tg;function o(){this._={inline:!0,unlinked:!0},this.tagName=e}d(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t});if(i=t.baseTag)for(s in t.flow=!!t.flow,t.baseTag=i=""+i===i?n&&n.tags[i]||E[i]:i,a=y(a,i),t)a[s]=te(i[s],t[s]);else a=y(a,t);void 0!==(r=a.template)&&(a.template=""+r===r?V[r]||V(r):r);!1!==a.init&&((o.prototype=a).constructor=a._ctr=o);n&&(a._parentTmpl=n);return a}},helper:{},converter:{}};function ee(n,r){return function(){var e,t=this.base;return this.base=n,e=r.apply(this,arguments),this.base=t,e}}function te(e,t){return d(t)&&((t=ee(e?e._d?e:ee(re,e):re,t))._d=1),t}function $(e,t){for(var n in t.props)P.test(n)&&(e[n]=te(e[n],t.props[n]))}function ne(e){return e}function re(){return""}function ie(e){F._dbgMode=!1!==e}function n(e){this.name=(l.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function y(e,t){for(var n in t)e[n]=t[n];return e}function se(e,t,n){return 0===this&&!e||(i=e?e.charAt(0):i,O=e?e.charAt(1):O,q=t?t.charAt(0):q,o=t?t.charAt(1):o,e="\\"+i+"(\\"+(u=n||u)+")?\\"+O,t="\\"+q+"\\"+o,r="(?:(?:(\\w+(?=[\\/\\s\\"+q+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+q+"]|\\"+q+"(?!\\"+o+"))*?)",p.rTag=r+")",r=new RegExp(e+r+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),m=new RegExp("<.*>|([^\\\\]|^)[{}]|"+e+".*"+t)),[i,O,q,o,u]}function ae(){var e=this.get("item");return e?e.index:void 0}function oe(){return this.index}function k(e,t,n,r,i,s,a,o){var d=this,l="array"===t;d.content=a,d.views=l?[]:{},d.parent=n,d.type=t||"top",d.data=r,d.tmpl=i,a=d._={key:0,useKey:l?0:1,id:""+z++,onRender:o,bnds:{}},d.linked=!!o,n?(t=n.views,(r=n._).useKey?((t[a.key="_"+r.useKey++]=d).index=W,d.getIndex=ae,i=r.tag,a.bnd=l&&(!i||!!i._.bnd&&i)):t.length===(a.key=d.index=s)?t.push(d):t.splice(s,0,d),d.ctx=e||n.ctx):d.ctx=e}function de(e){var t,n,r,i,s,a;for(t in h)if((s=h[t].compile)&&(n=e[t+"s"]))for(r in n)(i=n[r]=s(r,n[r],e,0))._is=t,i&&(a=p.onStore[t])&&a(r,i,s)}function le(n){function r(e,t){this.tgt=n.getTgt(e,t)}return(n=(n=d(n)?{getTgt:n}:n).baseMap?y(y({},n.baseMap),n):n).map=function(e,t){return new r(e,t)},n}function pe(e,t){var n,r=F.wrapMap||{},i=y({tmpls:[],links:{},bnds:[],_is:"template",render:N},t);return i.markup=e,t.htmlTag||(n=C.exec(e),i.htmlTag=n?n[1].toLowerCase():""),(n=r[i.htmlTag])&&n!==r.div&&(i.markup=l.trim(i.markup)),i}function ue(o,d){var l=o+"s";R[l]=function e(t,n,r){var i,s,a;if(!t||typeof t!==v||t.nodeType||t.markup||t.getTgt)return void 0===n&&(n=t,t=void 0),t&&""+t!==t&&(r=n,n=t,t=void 0),a=r?r[l]=r[l]||{}:e,i=d.compile,null===n?t&&delete a[t]:(n=i?i(t,n,r,0):n,t&&(a[t]=n)),i&&n&&(n._is=o),n&&(r=p.onStore[o])&&r(t,n,i),n;for(s in t)e(s,t[s],n);return R}}function N(e,t,n,r,i,s){var a,o,d,l,p,u,c=r,f="";if(!0===t?(n=t,t=void 0):typeof t!==v&&(t=void 0),(r=this.tag)?(d=r._.tmpl||this.tmpl,c=c||this.view,arguments.length||(e=c)):d=this,d){if((c=!c&&e&&"view"===e._is?e:c)&&e===c&&(e=c.data),d.fn||(d=r._.tmpl=V[d]||V(d)),l=!c,g=g||l,c||((t=t||{}).root=e),!g||F.useViews||d.useViews||c&&c!==T)f=function(e,t,n,r,i,s,a,o){function d(e){(w=y({},n))[m]=e}var l,p,u,c,f,g,v,h,m,w,b,x="";o&&(h=o.tagName,b=o.tagCtx,n=n?J(n,o.ctx):o.ctx,v=b.content,!1===b.props.link&&((n=n||{}).link=!1),(m=b.props.itemVar)&&("~"!==m.charAt(0)&&B("Use itemVar='~myItem'"),m=m.slice(1)));i&&(v=v||i.content,a=a||i._.onRender,n=J(n,i.ctx));!0===s&&(g=!0,s=0);a&&(n&&!1===n.link||o&&o._.noVws)&&(a=void 0);!0===(b=a)&&(b=void 0,a=i._.onRender);if(n=e.helpers?J(e.helpers,n):n,w=n,_(t)&&!r)for(u=g?i:void 0!==s&&i||new k(n,"array",i,t,e,s,v,a),m&&(u.it=m),m=u.it,l=0,p=t.length;l<p;l++)m&&d(t[l]),c=new k(w,"item",u,t[l],e,(s||0)+l,v,a),f=e.fn(t[l],c,R),x+=u._.onRender?u._.onRender(f,c):f;else m&&d(t),u=g?i:new k(w,h||"data",i,t,e,s,v,a),o&&!o.flow&&(u.tag=o),x+=e.fn(t,u,R);return b?b(x,u):x}(d,e,t,n,c,i,s,r);else{if(c?(p=c.data,u=c.index,c.index=W):((c=T).data=e,c.ctx=t),_(e)&&!n)for(a=0,o=e.length;a<o;a++)c.index=a,c.data=e[a],f+=d.fn(e[a],c,R);else f+=d.fn(e,c,R);c.data=p,c.index=u}l&&(g=void 0)}return f}function U(e,t,n){n=F.onError(e,t,n);if(""+e===e)throw new p.Err(n);return!t.linkCtx&&t.linked?M.html(n):n}function B(e){U("Syntax error\n"+e)}function L(x,_,y,k,j){function C(e){(e-=M)&&N.push(x.substr(M,e).replace(S,"\\n"))}function A(e,t){e&&(e+="}}",B((t?"{{"+t+"}} block has {{/"+e+" without {{"+e:"Unmatched or missing {{/"+e)+", in template:\n"+x))}var e,T,R,V=F.allowCode||_&&_.allowCode,t=[],M=0,$=[],N=t,E=[,,t];return V&&(_.allowCode=V),y&&(x=i+x+o),A($[0]&&$[0][2].pop()[0]),x.replace(r,function(e,t,n,r,i,s,a,o,d,l,p,u){s&&(i=":",r=I);var s=(t||y)&&[[]],c="",f="",g="",v="",h="",m="",w="",b="",t=!(l=l||y&&!j)&&!i&&!a;n=n||(d=d||"#data",i),C(u),M=u+e.length,o?V&&N.push(["*","\n"+d.replace(/^:/,"ret+= ").replace(K,"$1")+";\n"]):n?("else"===n&&(D.test(d)&&B('for "{{else if expr}}" use "{{else expr}}"'),s=E[7]&&[[]],E[8]=x.substring(E[8],u),E=$.pop(),N=E[2],t=!0),d&&ve(d.replace(S," "),s,_).replace(H,function(e,t,n,r,i,s,a,o){return r="'"+i+"':",a?(f+=s+",",v+="'"+o+"',"):n?(g+=r+s+",",m+=r+"'"+o+"',"):t?w+=s:("trigger"===i&&(b+=s),c+=r+s+",",h+=r+"'"+o+"',",R=R||P.test(i)),""}).slice(0,-1),s&&s[0]&&s.pop(),T=[n,r||!!k||R||"",t&&[],fe(v,h,m),fe(f,c,g),w,b,s||0],N.push(T),t&&($.push(E),(E=T)[8]=M)):p&&(A(p!==E[0]&&"else"!==E[0]&&p,E[0]),E[8]=x.substring(E[8],u),E=$.pop()),A(!E&&p),N=E[2]}),C(x.length),(M=t[t.length-1])&&A(""+M!==M&&+M[8]===M[8]&&M[0]),y?ce(e=he(t,x,y),[t[0][7]]):e=he(t,_),e}function ce(e,t){var n,r,i=0,s=t.length;for(e.deps=[];i<s;i++)for(n in r=t[i])"_jsvto"!==n&&r[n].length&&(e.deps=e.deps.concat(r[n]));e.paths=r}function fe(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function ge(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function ve(j,C,A){var T,R,V,M,$,N=C&&C[0],E={bd:N},F={0:E},S=0,I=A?A.links:N&&(N.links=N.links||{}),U=0,J={},K={},e=(j+(A?" ":"")).replace(x,function(e,t,n,r,l,i,s,a,o,d,p,u,c,f,g,v,h,m,w,b){var x,_,y,k;if(i=i||"",n=n||t||u,l=(l=(r=N&&r)&&!a?r+l:l)||o,d=d||h||"",!s||$||M){if(N&&v&&!$&&!M&&(!T||V||R)&&(o=K[U-1],b.length-1>w-(o||0))){if(o=b.slice(o,w+e.length),!0!==x)if(_=R||F[U-1].bd,(y=_[_.length-1])&&y.prm){for(;y.sb&&y.sb.prm;)y=y.sb;k=y.sb={path:y.sb,bnd:y.bnd}}else _.push(k={path:_.pop()});(x=I[v=O+":"+o+" onerror=''"+q])||(I[v]=!0,I[v]=x=L(v,A,!0)),!0!==x&&k&&(k._jsv=x,k.prm=E.bd,k.bnd=k.bnd||k.path&&0<=k.path.indexOf("^"))}return $?($=!c)?e:u+'"':M?(M=!f)?e:u+'"':(n?(K[U]=w++,E=F[++U]={bd:[]},n):"")+(m?U?"":(S=b.slice(S,w),(T?(T=V=R=!1,"\b"):"\b,")+S+(S=w+e.length,N&&C.push(E.bd=[]),"\b")):a?(U&&B(j),N&&C.pop(),T=l,V=r,S=w+e.length,r&&(N=E.bd=C[T]=[]),l+":"):l?l.split("^").join(".").replace(Q,function(e,t,n,r,i,s,a,o){var d="."===n;if(n&&(l=l.slice(t.length),d||(e=(r?'view.hlp("'+r+'")':i?"view":"data")+(o?(s?"."+s:r||i?"":"."+n)+(a||""):(o=r?"":i?s||"":n,"")),e=t+("view.data"===(e+=o?"."+o:"").slice(0,9)?e.slice(5):e)),N)){if(_="linkTo"===T?R=C._jsvto=C._jsvto||[]:E.bd,y=d&&_[_.length-1]){if(y._jsv){for(;y.sb;)y=y.sb;y.bnd&&(l="^"+l.slice(1)),y.sb=l,y.bnd=y.bnd||"^"===l.charAt(0)}}else _.push(l);K[U]=w+(d?1:0)}return e})+(d?(E=F[++U]={bd:[]},J[U]=!0,d):i):i||(g?(J[U]=!1,E=F[--U],g+(d?(E=F[++U],J[U]=!0,d):"")):p?(J[U]||B(j),","):t?"":($=c,M=f,'"')))}B(j)});return!U&&e||B(j)}function he(e,t,n){var r,i,s,a,o,d,l,p,u,c,f,g,v,h,m,w,b,x,_,y,k,j,C,A,T,R=0,V=F.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,M="",$={},N=e.length;for(""+t===t?(m=n?'data-link="'+t.replace(S," ").slice(1,-1)+'"':t,t=0):(m=t.tmplName||"unnamed",t.allowCode&&($.allowCode=!0),t.debug&&($.debug=!0),u=t.bnds,h=t.tmpls),r=0;r<N;r++)if(""+(k=e[r])===k)M+='\n+"'+k+'"';else if("*"===(i=k[0]))M+=";\n"+k[1]+"\nret=ret";else{if(s=k[1],b=!n&&k[2],a=ge(k[3],"params")+"},"+ge(f=k[4]),C=k[5],T=k[6],A=k[8]&&k[8].replace(K,"$1"),(y="else"===i)?c&&c.push(k[7]):(R=0,u&&(c=k[7])&&(c=[c],R=u.push(1))),V=V||f[1]||f[2]||c||/view.(?!index)/.test(f[0]),(k=":"===i)?s&&(i=s===I?">":s+i):(b&&((A=pe(A,$)).tmplName=m+"/"+i,A.useViews=A.useViews||V,he(b,A),V=A.useViews,h.push(A)),y||(w=i,V=V||i&&(!E[i]||!E[i].flow),_=M,M=""),x=(x=e[r+1])&&"else"===x[0]),A=C?";\ntry{\nret+=":"\n+",g=y="",k&&(c||T||s&&s!==I)){if(j="return {"+a+"};",v='c("'+s+'",view,',(j=new Function("data,view,j,u"," // "+m+" "+R+" "+i+"\n"+j))._er=C,y=v+R+",",g=")",j._tag=i,n)return j;ce(j,c),p=!0}if(M+=k?(n?(C?"\ntry{\n":"")+"return ":A)+(p?(V=l=!(p=void 0),v+(c?(u[R-1]=j,R):"{"+a+"}")+")"):">"===i?(d=!0,"h("+f[0]+")"):"((v="+(f[0]||"data")+')!=null?v:"")'):(o=!0,"\n{view:view,tmpl:"+(b?h.length:"0")+","+a+"},"),w&&!x){if(M="["+M.slice(0,-1)+"]",v='t("'+w+'",view,this,',n||c){if((M=new Function("data,view,j,u"," // "+m+" "+R+" "+w+"\nreturn "+M+";"))._er=C,M._tag=w,c&&ce(u[R-1]=M,c),n)return M;y=v+R+",undefined,",g=")"}M=_+A+v+(R||M)+")",w=c=0}C&&(V=!0,M+=";\n}catch(e){ret"+(n?"urn ":"+=")+y+"j._err(e,view,"+C+")"+g+";}\n"+(n?"":"ret=ret"))}M="// "+m+"\nvar v"+(o?",t=j._tag":"")+(l?",c=j._cnvt":"")+(d?",h=j.converters.html":"")+(n?";\n":',ret=""\n')+($.debug?"debugger;":"")+M+(n?"\n":";\nreturn ret;"),F._dbgMode&&(M="try {\n"+M+"\n}catch(e){\nreturn j._err(e, view);\n}");try{M=new Function("data,view,j,u",M)}catch(e){B("Compiled template code:\n\n"+M+'\n: "'+e.message+'"')}return t&&(t.fn=M,t.useViews=!!V),M}function J(e,t){return e&&e!==t?t?y(y({},t),e):e:t&&y({},t)}function me(e){return G[e]||(G[e]="&#"+e.charCodeAt(0)+";")}function we(e,t,n){var r=this.jquery&&(this[0]||U('Unknown template: "'+this.selector+'"')),i=r.getAttribute(c);return N.call(i?l.data(r)[f]:V(r),e,t,n)}function be(e){return null!=e?A.test(e)&&(""+e).replace(Z,me)||e:""}if(R={jsviews:b,settings:function(e){y(F,e),ie(F._dbgMode),F.jsv&&F.jsv()},sub:{View:k,Err:n,tmplFn:L,parse:ve,extend:y,extendCtx:J,syntaxErr:B,onStore:{},_ths:$,_tg:function(){}},map:le,_cnvt:function(e,t,n,r){var i,s,a="number"==typeof n&&t.tmpl.bnds[n-1],o=t.linkCtx;void 0!==r?n=r={props:{},args:[r]}:a&&(n=a(t.data,t,R));s=n.args[0],(e||a)&&((i=o&&o.tag)||(i=y(new p._tg,{_:{inline:!o,bnd:a,unlinked:!0},tagName:":",cvt:e,flow:!0,tagCtx:n}),o&&((o.tag=i).linkCtx=o),n.ctx=J(n.ctx,(o?o.view:t).ctx)),i._er=r&&s,$(i,n),n.view=t,i.ctx=n.ctx||{},n.ctx=void 0,t._.tag=i,s=i.cvtArgs(i.convert||"true"!==e&&e)[0],s=a&&t._.onRender?t._.onRender(s,t,a):s,t._.tag=void 0);return null!=s?s:""},_tag:function(e,t,n,r,i,s){var a,o,d,l,p,u,c,f,g,v,h,m,w,b,x,_,y="",k=(t=t||T).linkCtx||0,j=t.ctx,C=n||t.tmpl,A="number"==typeof r&&t.tmpl.bnds[r-1];d="tag"===e._is?(e=(a=e).tagName,r=a.tagCtxs,a.template):(o=t.getRsc("tags",e)||U("Unknown tag: {{"+e+"}} "),o.template);void 0!==s?(y+=s,r=s=[{props:{},args:[]}]):A&&(r=A(t.data,t,R));for(f=r.length,c=0;c<f;c++)g=r[c],k&&k.tag&&(!c||k.tag._.inline)&&!a._er||((v=g.tmpl)&&(v=g.content=C.tmpls[v-1]),g.index=c,g.tmpl=d||v,g.render=N,g.view=t,g.ctx=J(g.ctx,j)),(n=g.props.tmpl)&&(n=""+n===n?t.getRsc("templates",n)||V(n):n,g.tmpl=n),a||(a=new o._ctr,h=!!a.init,a.parent=u=j&&j.tag,a.tagCtxs=r,_=a.dataMap,k&&(a._.inline=!1,(k.tag=a).linkCtx=k),(a._.bnd=A||k.fn)?a._.arrVws={}:a.dataBoundOnly&&U("{^{"+e+"}} tag must be data-bound")),r=a.tagCtxs,_=a.dataMap,g.tag=a,_&&r&&(g.map=r[c].map),a.flow||(v=g.ctx=g.ctx||{},l=a.parents=v.parentTags=j&&J(v.parentTags,j.parentTags)||{},u&&(l[u.tagName]=u),l[a.tagName]=v.tag=a);(A||k)&&(t._.tag=a);if(!(a._er=s)){for($(a,r[0]),a.rendering={},c=0;c<f;c++)g=a.tagCtx=r[c],b=g.props,w=a.cvtArgs(),(x=b.dataMap||_)&&(w.length||b.dataMap)&&((m=g.map)&&m.src===w[0]&&!i||(m&&m.src&&m.unmap(),m=g.map=x.map(w[0],b,void 0,!a._.bnd)),w=[m.tgt]),a.ctx=g.ctx,c||(h&&(x=a.template,a.init(g,k,a.ctx),h=void 0,a.template!==x&&(a._.tmpl=a.template)),k&&(k.attr=a.attr=k.attr||a.attr),p=a.attr,a._.noVws=p&&p!==I),b=void 0,a.render&&(b=a.render.apply(a,w)),w.length||(w=[t]),void 0===b&&(b=g.render(w.length?w[0]:t,!0)||(i?void 0:"")),y=y?y+(b||""):b;a.rendering=void 0}a.tagCtx=r[0],a.ctx=a.tagCtx.ctx,!a._.noVws||a._.inline&&(y="text"===p?M.html(y):"");return A&&t._.onRender?t._.onRender(y,t,A):y},_err:U},(n.prototype=new Error).constructor=n,ae.depends=function(){return[this.get("item"),"index"]},oe.depends="index",k.prototype={get:function(e,t){t||(t=e,e=void 0);var n,r,i,s,a=this,o=!t||"root"===t;if(e){if(!(s=a.type===t?a:void 0))if(n=a.views,a._.useKey){for(r in n)if(s=n[r].get(e,t))break}else for(r=0,i=n.length;!s&&r<i;r++)s=n[r].get(e,t)}else if(o)for(;a.parent.parent;)s=a=a.parent;else for(;a&&!s;)s=a.type===t?a:void 0,a=a.parent;return s},getIndex:oe,getRsc:function(e,t){for(var n,r,i=this;void 0===n&&i;)n=(r=i.tmpl&&i.tmpl[e])&&r[t],i=i.parent;return n||R[e][t]},hlp:function(e){var t,n=this,r=n.linkCtx,i=(n.ctx||{})[e];return(i=void 0===(i=void 0===i&&r&&r.ctx?r.ctx[e]:i)?s[e]:i)&&d(i)&&!i._wrp&&((t=function(){return i.apply(this&&this!==a?this:n,arguments)})._wrp=!0,y(t,i)),t||i},_is:"view"},!(t||l&&l.render)){for(e in h)ue(e,h[e]);V=R.templates,M=R.converters,s=R.helpers,E=R.tags,p=R.sub,F=R.settings,p._tg.prototype={baseApply:function(e){return this.base.apply(this,e)},cvtArgs:function(e){var t=this,n=t.tagCtx,r=n.view,i=n.args;return e=(e=t.convert||e)&&(""+e===e?r.getRsc("converters",e)||U("Unknown converter: '"+e+"'"):e),i=i.length||n.index?e?i.slice():i:[r.data],e&&(e.depends&&(t.depends=p.getDeps(t.depends,t,e.depends,e)),i[0]=e.apply(t,i)),i}},T=p.topView=new k,l?(l.fn.render=we,l.observable&&(y(p,l.views.sub),R.map=l.views.map)):(l={},w&&(a.jsrender=l),l.renderFile=l.__express=l.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},l.isFunction=function(e){return"function"==typeof e},l.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},p._jq=function(e){e!==l&&(y(e,l),(l=e).fn.render=we,delete l.jsrender)},l.jsrender=b),d=l.isFunction,_=l.isArray,l.render=X,l.views=R,l.templates=V=R.templates,F({debugMode:ie,delimiters:se,onError:function(e,t,n){return null==(e=t?void 0===n?"{Error: "+(e.message||e)+"}":d(n)?n(e,t):n:e)?"":e},_dbgMode:!1}),E({if:{render:function(e){var t=this.tagCtx;return this.rendering.done||!e&&(arguments.length||!t.index)?"":(this.rendering.done=!0,this.selected=t.index,t.render(t.view,!0))},flow:!0},for:{render:function(e){var t=!arguments.length,n=this.tagCtx,r="",i=0;return this.rendering.done||(void 0!==(e=t?n.view.data:e)&&(r+=n.render(e,t),i+=_(e)?e.length:1),(this.rendering.done=i)&&(this.selected=n.index)),r},flow:!0},props:{baseTag:"for",dataMap:le(function(e){var t,n,r=[];if(typeof e===v)for(t in e)(n=e[t])&&n.toJSON&&!n.toJSON()||d(n)||r.push({key:t,prop:n});return r}),flow:!0},include:{flow:!0},"*":{render:ne,flow:!0},":*":{render:ne,flow:!0},dbg:s.dbg=M.dbg=function(e){try{throw"dbg breakpoint"}catch(e){}return this.base?this.baseApply(arguments):e}}),M({html:be,attr:be,url:function(e){return null!=e?encodeURI(""+e):null===e?e:""}}),se()}return Y&&t.views.sub._jq(l),l||t});