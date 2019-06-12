(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){e.exports=n(242)},242:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),c=n(39),i=n(126),u=n(272),s=n(279),m=n(274),d={backgroundColor:"#b71c1c",color:"#fff"},p={justifyContent:"center",marginRight:"80px"},h={textAlign:"center",fontSize:22,marginTop:"30px"},f={display:"flex",flexWrap:"wrap",justifyContent:"center"},v={indicatorColor:"secondary"},b={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"250px",margin:"auto"},E={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"250px"},g=["/react/task4/about","/react/task4/counters","/react/task4/login","/"],y=function(){var e=!1,t=r.a.useState(function(){return"/react/task4/404"===window.location.pathname||-1===g.indexOf(window.location.pathname)?(e=!0,!1):3!==g.indexOf(window.location.pathname)&&g.indexOf(window.location.pathname)}),n=Object(i.a)(t,2),a=n[0],o=n[1];var l=!0===e?{display:"none"}:{};return r.a.createElement("div",{style:l},r.a.createElement(u.a,{square:!0},r.a.createElement(s.a,{value:a,centered:!0,style:v,onChange:function(e,t){o(t)}},r.a.createElement(m.a,{label:"about us",component:c.b,to:"/react/task4/about"}),r.a.createElement(m.a,{label:"counters",component:c.b,to:"/react/task4/counters"}),r.a.createElement(m.a,{label:"sign in",component:c.b,to:"/react/task4/login"}))))},C=n(34),k=n(68),S=n(33),O=n(71),w=n(69),j=n(11),x=n(72),I=n(276),R=n(275),F=function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:h},e.counterState.count),r.a.createElement(R.a,{container:!0,style:p,spacing:5},r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleIncrement(e.counterState.id)}},"+")),r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleDecrement(e.counterState.id)}},"-")),r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleReset(e.counterState.id)}},"reset"))))},D=function(e){return r.a.createElement(F,e)},P=n(124),B=n.n(P),T=[{count:0,id:1}],U=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(O.a)(this,Object(w.a)(t).call(this,e))).randomInteger=function(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)},n.handleIncrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count+1,id:t.id}:t});n.setState({counters:t})},n.handleDecrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count-1,id:t.id}:t});n.setState({counters:t})},n.handleReset=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:0,id:t.id}:t});n.setState({counters:t})},n.handleAddCounter=function(){var e=n.state.counters.map(function(e){return e.count%2===0&&0!==e.count?{count:e.count+1,id:e.id}:e});e=e.concat([{count:0,id:n.randomInteger(0,1e6)}]),n.setState({counters:e})},n.handleRemoveCounter=function(){var e=n.state.counters;e.length>1&&(e=e.map(function(e){return e.count%2!==0&&0!==e.count?{count:e.count-1,id:e.id}:e})).pop(),n.setState({counters:e})},n.handleResetCounter=function(){n.setState({counters:T})},n.state={counters:T},n.handleIncrement=n.handleIncrement.bind(Object(j.a)(n)),n.handleDecrement=n.handleDecrement.bind(Object(j.a)(n)),n.handleReset=n.handleReset.bind(Object(j.a)(n)),console.log("constructor:CounterParent"),n}return Object(x.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount:CounterParent")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate:CounterParent"),t.counters!==this.state.counters}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate:CounterParent"),t.counters.length>30&&t.counters.length<this.state.counters.length?document.querySelector("#counters:last-child"):null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("componentDidUpdate:CounterParent"),null!==n&&(console.log(n),B()(n,{offset:1e3,align:"bottom",duration:1500}))}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount:CounterParent")}},{key:"render",value:function(){var e=this;return console.log("render:CounterParent"),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:h},this.state.counters.length),r.a.createElement(R.a,{container:!0,style:p,spacing:5},r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{onClick:function(){return e.handleAddCounter()}},"add counter")),r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{onClick:function(){return e.handleRemoveCounter()}},"remove counter")),r.a.createElement(R.a,{item:!0},r.a.createElement(I.a,{onClick:function(){return e.handleResetCounter()}},"reset counter"))),r.a.createElement("div",{id:"counters",style:f},this.state.counters.map(function(t){return r.a.createElement(D,{handleReset:e.handleReset,handleIncrement:e.handleIncrement,handleDecrement:e.handleDecrement,key:t.id,counterState:t})})))}}]),t}(r.a.Component),A=function(){return r.a.createElement("div",{style:h},r.a.createElement("h1",null,"About company!"))},q=n(55);var M=n(278),W=n(277),L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:b,onSubmit:function(t){return e.handleSubmit(t)},onReset:e.handleFormReset},r.a.createElement("div",{style:E},e.renderInputs(),r.a.createElement(I.a,{type:"submit",style:d,onClick:function(t){return e.onClickButton(t)}}," Send "))),r.a.createElement("div",{style:h},r.a.createElement(W.a,{variant:"h5"},"Email: ",e.formState.formControls.email.value),r.a.createElement(W.a,{variant:"h5"},"Password: ",e.formState.formControls.password.value),r.a.createElement(W.a,{variant:"h5"},"Data to be sent:"),r.a.createElement(W.a,{variant:"h5"},e.formState.data)))},z=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(O.a)(this,Object(w.a)(t).call(this,e))).initialState={data:null,formControls:{email:{id:"outlined-email-input",value:"",type:"email",label:"Email",name:"email",margin:"normal",variant:"outlined",autoComplete:"email",helperText:"",error:!1,validation:{required:!0,email:!0}},password:{id:"outlined-password-input",value:"",type:"password",label:"Password",name:"password",margin:"normal",variant:"outlined",autoComplete:"current-password",helperText:"",error:!1,validation:{required:!0,minLength:6}}}},n.setInputsError=function(e,t,a){e.error=!n.validateControl(e.value,e.validation),e.error&&"email"===e.type?e.helperText="Invalid email adress.":e.error&&"password"===e.type?e.helperText="Min. pass length 6 characters.":e.helperText="",t[a]=e,n.setState({formControls:t})},n.validateControl=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),n)},n.validateForm=function(e){var t=!0,a=Object(q.a)({},n.state.formControls);return Object.keys(n.state.formControls).forEach(function(e){var r=Object(q.a)({},n.state.formControls[e]);n.setInputsError(r,a,e),t&=!r.error}),t||e.preventDefault(),t},n.onChangeHandler=function(e,t){var a=Object(q.a)({},n.state.formControls),r=Object(q.a)({},a[t]);r.value=e.target.value,n.setInputsError(r,a,t)},n.onClickButton=function(e){return n.validateForm(e)},n.renderInputs=function(){return Object.keys(n.state.formControls).map(function(e,t){var a=n.state.formControls[e];return r.a.createElement(M.a,{key:e+t,type:a.type,id:a.id,value:a.value,label:a.label,name:a.name,margin:a.margin,variant:a.variant,autoComplete:a.autoComplete,helperText:a.helperText,error:a.error,onChange:function(t){return n.onChangeHandler(t,e)}})})},n.stringifyFormData=function(e){var t={},n=!0,a=!1,r=void 0;try{for(var o,l=e.keys()[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value;t[c]=e.get(c)}}catch(i){a=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return JSON.stringify(t)},n.handleFormReset=function(e){n.setState(function(){return n.initialState})},n.state=n.initialState,n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.handleFormReset=n.handleFormReset.bind(Object(j.a)(n)),n.setInputsError=n.setInputsError.bind(Object(j.a)(n)),n.validateControl=n.validateControl.bind(Object(j.a)(n)),n.validateForm=n.validateForm.bind(Object(j.a)(n)),n.onClickButton=n.onClickButton.bind(Object(j.a)(n)),n.renderInputs=n.renderInputs.bind(Object(j.a)(n)),n.stringifyFormData=n.stringifyFormData.bind(Object(j.a)(n)),n}return Object(x.a)(t,e),Object(S.a)(t,[{key:"handleSubmit",value:function(e){var t=new FormData(e.target);e.preventDefault(),e.target.reset(),this.setState({data:this.stringifyFormData(t)}),console.log("Email: "+this.state.formControls.email.value+" Password: "+this.state.formControls.password.value)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{formState:this.state,handleSubmit:this.handleSubmit,handleFormReset:this.handleFormReset,onClickButton:this.onClickButton,renderInputs:this.renderInputs}))}}]),t}(r.a.Component),J=function(){return r.a.createElement("div",{style:h},r.a.createElement(W.a,{variant:"h1",component:"h2",gutterBottom:!0},"OOPS, ERROR 404"))},H=function(){return r.a.createElement("main",null,r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/react/task4/"}),r.a.createElement(C.b,{path:"/react/task4/about",component:A}),r.a.createElement(C.b,{path:"/react/task4/counters",component:U}),r.a.createElement(C.b,{path:"/react/task4/login",component:z}),r.a.createElement(C.b,{path:"/react/task4/404",component:J}),r.a.createElement(C.a,{to:"/react/task4/404"})))},Z=n(125),N=n.n(Z),$=function(){return r.a.createElement(N.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(H,null)))};l.a.render(r.a.createElement(c.a,null,r.a.createElement($,null)),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.30bb0ad5.chunk.js.map