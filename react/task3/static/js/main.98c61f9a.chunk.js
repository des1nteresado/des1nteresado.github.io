(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),u=n(23),l=n(53),i=n(103),s=n(108),m=n(104),d={backgroundColor:"#b71c1c"},h={justifyContent:"center",marginRight:"80px"},p={textAlign:"center",fontSize:22},f={display:"flex",flexWrap:"wrap",justifyContent:"center"},E={indicatorColor:"secondary"},v=["/about","/counters","/"],b=function(){var e=!1,t=o.a.useState(function(){return"/404"===window.location.pathname||-1===v.indexOf(window.location.pathname)?(e=!0,!1):2!==v.indexOf(window.location.pathname)&&v.indexOf(window.location.pathname)}),n=Object(l.a)(t,2),a=n[0],r=n[1];var c=!0===e?{display:"none"}:{};return o.a.createElement("div",{style:c},o.a.createElement(i.a,{square:!0},o.a.createElement(s.a,{value:a,centered:!0,style:E,onChange:function(e,t){r(t)}},o.a.createElement(m.a,{label:"about us",component:u.b,to:"/react/task3/about"}),o.a.createElement(m.a,{label:"counters",component:u.b,to:"/react/task3/counters"}))))},y=n(19),g=n(50),C=n(25),k=n(54),S=n(51),w=n(12),O=n(55),R=n(106),j=n(105),D=function(e){return o.a.createElement("div",null,o.a.createElement("p",{style:p},e.counterState.count),o.a.createElement(j.a,{container:!0,style:h,spacing:5},o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleIncrement(e.counterState.id)}},"+")),o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleDecrement(e.counterState.id)}},"-")),o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{style:d,variant:"contained",color:"primary",onClick:function(){return e.handleReset(e.counterState.id)}},"reset"))))},x=function(e){return o.a.createElement(D,e)},I=n(52),P=n.n(I),U=[{count:0,id:1}],A=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(k.a)(this,Object(S.a)(t).call(this,e))).randomInteger=function(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)},n.handleIncrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count+1,id:t.id}:t});n.setState({counters:t})},n.handleDecrement=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:t.count-1,id:t.id}:t});n.setState({counters:t})},n.handleReset=function(e){var t=n.state.counters.map(function(t){return t.id===e?{count:0,id:t.id}:t});n.setState({counters:t})},n.handleAddCounter=function(){var e=n.state.counters.map(function(e){return e.count%2===0&&0!==e.count?{count:e.count+1,id:e.id}:e});e=e.concat([{count:0,id:n.randomInteger(0,1e6)}]),n.setState({counters:e})},n.handleRemoveCounter=function(){var e=n.state.counters;e.length>1&&(e=e.map(function(e){return e.count%2!==0&&0!==e.count?{count:e.count-1,id:e.id}:e})).pop(),n.setState({counters:e})},n.handleResetCounter=function(){n.setState({counters:U})},n.state={counters:U},n.handleIncrement=n.handleIncrement.bind(Object(w.a)(n)),n.handleDecrement=n.handleDecrement.bind(Object(w.a)(n)),n.handleReset=n.handleReset.bind(Object(w.a)(n)),console.log("constructor:CounterParent"),n}return Object(O.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount:CounterParent")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate:CounterParent"),t.counters!==this.state.counters}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate:CounterParent"),t.counters.length>30&&t.counters.length<this.state.counters.length?document.querySelector("#counters:last-child"):null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("componentDidUpdate:CounterParent"),null!==n&&(console.log(n),P()(n,{offset:1e3,align:"bottom",duration:1500}))}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount:CounterParent")}},{key:"render",value:function(){var e=this;return console.log("render:CounterParent"),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:p},this.state.counters.length),o.a.createElement(j.a,{container:!0,style:h,spacing:5},o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{onClick:function(){return e.handleAddCounter()}},"add counter")),o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{onClick:function(){return e.handleRemoveCounter()}},"remove counter")),o.a.createElement(j.a,{item:!0},o.a.createElement(R.a,{onClick:function(){return e.handleResetCounter()}},"reset counter"))),o.a.createElement("div",{id:"counters",style:f},this.state.counters.map(function(t){return o.a.createElement(x,{handleReset:e.handleReset,handleIncrement:e.handleIncrement,handleDecrement:e.handleDecrement,key:t.id,counterState:t})})))}}]),t}(o.a.Component),B=function(){return o.a.createElement("div",{style:p},o.a.createElement("h1",null,"About company!"))},M=n(107),W=function(){return o.a.createElement("div",{style:p},o.a.createElement(M.a,{variant:"h1",component:"h2",gutterBottom:!0},"OOPS, ERROR 404"))},q=function(){return o.a.createElement("main",null,o.a.createElement(y.d,null,o.a.createElement(y.b,{exact:!0,path:"/react/task3/"}),o.a.createElement(y.b,{path:"/react/task3/about",component:B}),o.a.createElement(y.b,{path:"/react/task3/counters",component:A}),o.a.createElement(y.b,{path:"/react/task3/404",component:W}),o.a.createElement(y.a,{to:"/react/task3/404"})))},J=function(){return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement(q,null))};c.a.render(o.a.createElement(u.a,null,o.a.createElement(J,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.98c61f9a.chunk.js.map