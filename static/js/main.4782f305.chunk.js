(this["webpackJsonpantd-group-slider-example"]=this["webpackJsonpantd-group-slider-example"]||[]).push([[0],{56:function(e,t,n){e.exports=n(69)},57:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);n(57);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),l=n(75),c=n(74),s=n(73),p=n(76),d=n(77),m=n(53);function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){if(void 0===t&&(t=""),void 0===n&&(n="-"),!e||2!==e.length)return t;var a=e[0],r=e[1];return t.replace(/{{range}}/,""+a+n+r)}var f=function(e){var t=e.leftText,n=e.rightText,a=e.children;return r.a.createElement("div",{className:"antd-group-slider-item__description"},r.a.createElement("div",{className:"antd-group-slider-item__description-left-text"},t),a,r.a.createElement("div",{className:"antd-group-slider-item__description-right-text"},n))},h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={right:t.props.value[1],left:t.props.value[0]},t.onChange=function(e){var n=e[0],a=e[1],r=n===t.state.left?a:n;t.setState({right:Math.max(t.state.left,r)})},t.calculateMarks=function(e){var t,n=Math.floor(e/2);return(t={0:"0"})[n]=n.toString(),t[e]=e.toString(),t},t.renderDescription=function(){var e=t.props.descriptionConfig||{},n=e.placeholder,a=e.type,i=e.separator,o=e.leftText,c=e.leftAddonText,s=e.rightText,p=e.rightAddonText;if("none"===a)return r.a.createElement(r.a.Fragment,null);var d=[t.state.left,t.state.right],m={className:"antd-group-slider-item__description",placeholder:g(d,n||"Description for range {{range}}",i),defaultValue:t.props.initialDescription,onChange:function(e){return t.props.updateDescription(e.target.value)}};if("input"===a){var u=Object.assign({},m,{addonBefore:g(d,c,i),addonAfter:g(d,p,i)});return r.a.createElement(f,{range:d,leftText:g(d,o,i),rightText:g(d,s,i)},r.a.createElement(l.a,u))}return r.a.createElement(f,{range:d,leftText:g(d,o,i),rightText:g(d,s,i)},r.a.createElement(l.a.TextArea,m))},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n),a.prototype.render=function(){var e=this,t=this.state,n=t.left,a=t.right,i=this.props.marks||this.calculateMarks(this.props.max);return r.a.createElement("div",{className:"antd-group-slider-item"},r.a.createElement(c.a,{className:"antd-group-slider-item__slider",range:!0,min:0,max:this.props.max,marks:i,value:[n,a],onChange:this.onChange,onAfterChange:function(t){return e.props.onAfterRangeChange(t)}}),this.renderDescription())},a}(r.a.Component),v=function(e){var t=e.min,n=void 0===t?0:t,i=e.max,o=void 0===i?100:i,l=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["min","max"]),c=Object(a.useState)([[n,o]]),u=c[0],g=c[1],f=Object(a.useState)([]),v=f[0],E=f[1];Object(a.useEffect)((function(){if(l.initialValues){var e=l.initialValues,t=e.ranges,n=e.descriptions;g(t),E(n)}}),[]);var x=function(){var e=new Set;return u.forEach((function(t){for(var n=t[0],a=t[1],r=n;r<=a;r++)r>=0&&r<=100&&e.add(r)})),e.size===parseInt(o)+1};Object(a.useEffect)((function(){l.onChange&&l.onChange({ranges:u,descriptions:v,isFullRange:x()})}),[u,v]);var _=l.removeButtonText||"Remove last range",y=l.addButtonText||"Add more range";return r.a.createElement("div",{className:"antd-group-slider"},u.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(h,{marks:l.marks,descriptionConfig:l.descriptionConfig,onAfterRangeChange:function(e){return function(e,t){var n=e[1],a=u[t+1];if(a){var r=a[1];n>=r-1?(n=r-2,a[0]=a[1]-1):a[0]=n+1}u[t][1]=n,g([].concat(u))}(e,t)},updateDescription:function(e){return function(e,t){var n=[].concat(v);n[t]=e,E(n)}(e,t)},initialDescription:v[t],value:e,max:o}),l.showDivider?r.a.createElement(s.a,null):r.a.createElement(r.a.Fragment,null))})),r.a.createElement(p.a,{className:"antd-group-slider__footer",gutter:4},r.a.createElement(d.a,{span:12},r.a.createElement(m.a,{className:"antd-group-slider__btn-add-range",disabled:function(){var e=u.length-1;return u[e][1]>o-2}(),ghost:!0,type:"primary",onClick:function(){var e=[].concat(u),t=u.length-1,n=u[t][1];e.push([n+1,o]),g(e)}},y)),r.a.createElement(d.a,{span:12},r.a.createElement(m.a,{className:"antd-group-slider__btn-remove-range",danger:!0,disabled:u.length<=1,onClick:function(){u.pop();var e=u.length-1;u[e][1]=o,g([].concat(u)),v.pop(),E([].concat(v))}},_))))},E=(n(67),n(68),function(){return r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement("h1",{style:{color:"darkred"}},"antd-group-slider"),r.a.createElement("h3",null,"NPM:"," ",r.a.createElement("a",{href:"https://www.npmjs.com/package/antd-group-slider",target:"_blank"},"https://www.npmjs.com/package/antd-group-slider")),r.a.createElement("h3",null,"GitHub:"," ",r.a.createElement("a",{href:"https://github.com/huyennbl/antd-group-slider",target:"_blank"},"https://github.com/huyennbl/antd-group-slider")),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider />")),r.a.createElement(v,null)),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  max={500}\n  addButtonText='More range'\n  removeButtonText='Remove last'\n/>")),r.a.createElement(v,{max:500,addButtonText:"More range",removeButtonText:"Remove last"})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    placeholder: 'Waiting for description of range {{range}}',\n    leftText: 'Description of {{range}}: '\n  }}\n/>")),r.a.createElement(v,{descriptionConfig:{placeholder:"Waiting for description of range {{range}}",leftText:"Description of {{range}}: "}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    leftAddonText: 'Description of {{range}}: ', // addonText only works with type='input'\n    type: 'input'\n  }}\n/>")),r.a.createElement(v,{descriptionConfig:{leftAddonText:"Description of {{range}}: ",type:"input"}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    type: 'none'\n  }}\n/>")),r.a.createElement(v,{descriptionConfig:{type:"none"}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider showDivider />")),r.a.createElement(v,{showDivider:!0})))});o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4782f305.chunk.js.map