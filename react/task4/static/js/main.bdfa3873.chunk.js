(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{73:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=n(32),c=n(69),u=n(128),s=n(135),m=n(130),d={backgroundColor:"#b71c1c",color:"#fff"},p={justifyContent:"center",marginRight:"80px"},f={textAlign:"center",fontSize:22,marginTop:"30px",fontFamily:"Arial"},h={display:"flex",flexWrap:"wrap",justifyContent:"center"},v={indicatorColor:"secondary"},b={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"250px",margin:"auto"},y={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"450px",margin:"auto"},g={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"250px"},E=["/react/task4/about/","/react/task4/counters/","/react/task4/login/","/react/task4/"],C=function(){var e=!1,t=r.a.useState(function(){return"/react/task4/404/"===window.location.pathname||-1===E.indexOf(window.location.pathname)?(e=!0,!1):3!==E.indexOf(window.location.pathname)&&E.indexOf(window.location.pathname)}),n=Object(c.a)(t,2),a=n[0],o=n[1];var l=!0===e?{display:"none"}:{};return r.a.createElement("div",{style:l},r.a.createElement(u.a,{square:!0},r.a.createElement(s.a,{value:a,centered:!0,style:v,onChange:function(e,t){o(t)}},r.a.createElement(m.a,{label:"about us",component:i.b,to:"/react/task4/about"}),r.a.createElement(m.a,{label:"counters",component:i.b,to:"/react/task4/counters"}),r.a.createElement(m.a,{label:"sign in",component:i.b,to:"/react/task4/login"}))))},w=n(30),O=n(47),S=n(29),k=n(50),j=n(48),x=n(11),I=n(51),R=n(132),F=n(131),D=function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:f},e.counterState.count),r.a.createElement(F.a,{container:!0,style:p,spacing:5},r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleIncrement(e.counterState.id)}},"+")),r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleDecrement(e.counterState.id)}},"-")),r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleReset(e.counterState.id)}},"reset"))))},P=function(e){return r.a.createElement(D,e)},B=n(68),T=n.n(B),U=[{count:0,id:1}],A=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(k.a)(this,Object(j.a)(t).call(this,e))).randomInteger=function(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)},n.handleIncrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count+1,id:t.id}:t});n.setState({counters:t})},n.handleDecrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count-1,id:t.id}:t});n.setState({counters:t})},n.handleReset=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:0,id:t.id}:t});n.setState({counters:t})},n.handleAddCounter=function(){var e=n.state.counters.map(function(e){return e.count%2===0&&0!==e.count?{count:e.count+1,id:e.id}:e});e=e.concat([{count:0,id:n.randomInteger(0,1e6)}]),n.setState({counters:e})},n.handleRemoveCounter=function(){var e=n.state.counters;e.length>1&&(e=e.map(function(e){return e.count%2!==0&&0!==e.count?{count:e.count-1,id:e.id}:e})).pop(),n.setState({counters:e})},n.handleResetCounter=function(){n.setState({counters:U})},n.state={counters:U},n.handleIncrement=n.handleIncrement.bind(Object(x.a)(n)),n.handleDecrement=n.handleDecrement.bind(Object(x.a)(n)),n.handleReset=n.handleReset.bind(Object(x.a)(n)),console.log("constructor:CounterParent"),n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount:CounterParent")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate:CounterParent"),t.counters!==this.state.counters}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate:CounterParent"),t.counters.length>30&&t.counters.length<this.state.counters.length?document.querySelector("#counters:last-child"):null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("componentDidUpdate:CounterParent"),null!==n&&(console.log(n),T()(n,{offset:1e3,align:"bottom",duration:1500}))}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount:CounterParent")}},{key:"render",value:function(){var e=this;return console.log("render:CounterParent"),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:f},this.state.counters.length),r.a.createElement(F.a,{container:!0,style:p,spacing:5},r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{onClick:function(){return e.handleAddCounter()}},"add counter")),r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{onClick:function(){return e.handleRemoveCounter()}},"remove counter")),r.a.createElement(F.a,{item:!0},r.a.createElement(R.a,{onClick:function(){return e.handleResetCounter()}},"reset counter"))),r.a.createElement("div",{id:"counters",style:h},this.state.counters.map(function(t){return r.a.createElement(P,{handleReset:e.handleReset,handleIncrement:e.handleIncrement,handleDecrement:e.handleDecrement,key:t.id,counterState:t})})))}}]),t}(r.a.Component),W=function(){return r.a.createElement("div",{style:f},r.a.createElement("h1",null,"About company!"))},q=n(39);var M=n(134),L=function(e){var t=e.formState.formControls.email.value?e.formState.formControls.email.value:" ",n=e.formState.formControls.password.value?e.formState.formControls.password.value:" ",a=e.formState.data?e.formState.data:" ";return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:b,onSubmit:function(t){return e.handleSubmit(t)},onReset:e.handleFormReset},r.a.createElement("div",{style:g},e.renderInputs(),r.a.createElement(R.a,{type:"submit",style:d,onClick:function(t){return e.onClickButton(t)}}," Send "))),r.a.createElement("div",{style:b},r.a.createElement(M.a,{id:"outlined-email",label:"Email",value:t,margin:"normal",InputProps:{readOnly:!0},helperText:"Real time email",variant:"outlined"}),r.a.createElement(M.a,{id:"outlined-password",label:"Password",value:n,margin:"normal",InputProps:{readOnly:!0},helperText:"Real time password",variant:"outlined"})),r.a.createElement("div",{style:y},r.a.createElement(M.a,{id:"outlined-data",label:"Data to be sent",style:{width:450},value:a,margin:"normal",InputProps:{readOnly:!0},variant:"outlined"})))},z={data:null,formControls:{email:{id:"outlined-email-input",value:"",type:"email",label:"Email",name:"email",margin:"normal",variant:"outlined",autoComplete:"email",helperText:"",error:!1,validation:{required:!0,email:!0}},password:{id:"outlined-password-input",value:"",type:"password",label:"Password",name:"password",margin:"normal",variant:"outlined",autoComplete:"current-password",helperText:"",error:!1,validation:{required:!0,minLength:6}}}},J=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(k.a)(this,Object(j.a)(t).call(this,e))).setInputsError=function(e,t,a){e.error=!n.validateControl(e.value,e.validation),e.error&&"email"===e.type?e.helperText="Invalid email adress.":e.error&&"password"===e.type?e.helperText="Min. pass length 6 characters.":e.helperText="",t[a]=e,n.setState({formControls:t})},n.validateControl=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),n)},n.validateForm=function(e){var t=!0,a=Object(q.a)({},n.state.formControls);return Object.keys(n.state.formControls).forEach(function(e){var r=Object(q.a)({},n.state.formControls[e]);n.setInputsError(r,a,e),t&=!r.error}),t||e.preventDefault(),t},n.onChangeHandler=function(e,t){var a=Object(q.a)({},n.state.formControls),r=Object(q.a)({},a[t]);r.value=e.target.value,n.setInputsError(r,a,t)},n.onClickButton=function(e){return n.validateForm(e)},n.renderInputs=function(){return Object.keys(n.state.formControls).map(function(e,t){var a=n.state.formControls[e];return r.a.createElement(M.a,{key:e+t,type:a.type,id:a.id,value:a.value,label:a.label,name:a.name,margin:a.margin,variant:a.variant,autoComplete:a.autoComplete,helperText:a.helperText,error:a.error,onChange:function(t){return n.onChangeHandler(t,e)}})})},n.stringifyFormData=function(e){var t={},n=!0,a=!1,r=void 0;try{for(var o,l=e.keys()[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t[i]=e.get(i)}}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return JSON.stringify(t)},n.handleFormReset=function(e){n.setState(function(){return z})},n.state=z,n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n.handleFormReset=n.handleFormReset.bind(Object(x.a)(n)),n.setInputsError=n.setInputsError.bind(Object(x.a)(n)),n.validateControl=n.validateControl.bind(Object(x.a)(n)),n.validateForm=n.validateForm.bind(Object(x.a)(n)),n.onClickButton=n.onClickButton.bind(Object(x.a)(n)),n.renderInputs=n.renderInputs.bind(Object(x.a)(n)),n.stringifyFormData=n.stringifyFormData.bind(Object(x.a)(n)),n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"handleSubmit",value:function(e){var t=new FormData(e.target);e.preventDefault(),e.target.reset(),this.setState({data:this.stringifyFormData(t)}),console.log("Email: "+this.state.formControls.email.value+" Password: "+this.state.formControls.password.value)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{formState:this.state,handleSubmit:this.handleSubmit,handleFormReset:this.handleFormReset,onClickButton:this.onClickButton,renderInputs:this.renderInputs}))}}]),t}(r.a.Component),H=n(133),Z=function(){return r.a.createElement("div",{style:f},r.a.createElement(H.a,{variant:"h1",component:"h2",gutterBottom:!0},"OOPS, ERROR 404"))},N=function(){return r.a.createElement("main",null,r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/"}),r.a.createElement(w.b,{exact:!0,path:"/about",component:W}),r.a.createElement(w.b,{exact:!0,path:"/counters",component:A}),r.a.createElement(w.b,{exact:!0,path:"/login",component:J}),r.a.createElement(w.b,{exact:!0,path:"/404",component:Z}),r.a.createElement(w.a,{to:"/404"})))},$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(N,null))};l.a.render(r.a.createElement(i.a,null,r.a.createElement($,null)),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.bdfa3873.chunk.js.map