(this["webpackJsonpantd-group-slider-example"]=this["webpackJsonpantd-group-slider-example"]||[]).push([[0],{60:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);a(61);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),s=a(58),o=a(33),c=a(77),p=a(76),d=a(56),m=a(75),u=a(55),g=a(78),h=a(79);function f(e,t="",a="-"){if(!e||2!==e.length)return t;const n=e[0],r=e[1];return t.replace(/{{range}}/,"".concat(n).concat(a).concat(r))}const E=({leftText:e,rightText:t,children:a})=>r.a.createElement("div",{className:"antd-group-slider-item__description"},r.a.createElement("div",{className:"antd-group-slider-item__description-left-text"},e),a,r.a.createElement("div",{className:"antd-group-slider-item__description-right-text"},t));class x extends r.a.Component{constructor(...e){super(...e),this.state={right:this.props.value[1],left:this.props.value[0]},this.onChange=e=>{const t=Object(o.a)(e,2),a=t[0],n=t[1],r=a===this.state.left?n:a;this.setState({right:Math.max(this.state.left,r)})},this.calculateMarks=e=>{const t=Math.floor(e/2);return{0:"0",[t]:t.toString(),[e]:e.toString()}},this.renderDescription=()=>{const e=this.props.descriptionConfig||{},t=e.placeholder,a=e.type,n=e.separator,l=e.leftText,i=e.leftAddonText,s=e.rightText,o=e.rightAddonText;if("none"===a)return r.a.createElement(r.a.Fragment,null);const p=[this.state.left,this.state.right],d={className:"antd-group-slider-item__description",placeholder:f(p,t||"Description for range {{range}}",n),defaultValue:this.props.initialDescription,onChange:e=>this.props.updateDescription(e.target.value)};if("input"===a){const e=Object.assign({},d,{addonBefore:f(p,i,n),addonAfter:f(p,o,n)});return r.a.createElement(E,{range:p,leftText:f(p,l,n),rightText:f(p,s,n)},r.a.createElement(c.a,e))}return r.a.createElement(E,{range:p,leftText:f(p,l,n),rightText:f(p,s,n)},r.a.createElement(c.a.TextArea,d))}}render(){const e=this.state,t=e.left,a=e.right,n=this.props.marks||this.calculateMarks(this.props.max);return r.a.createElement("div",{className:"antd-group-slider-item"},r.a.createElement(p.a,{className:"antd-group-slider-item__slider",range:!0,min:0,max:this.props.max,marks:n,value:[t,a],onChange:this.onChange,onAfterChange:e=>{this.props.onAfterRangeChange(e),this.setState({right:this.props.value[1],left:this.props.value[0]})}}),this.renderDescription())}}function v(e,t={fillGaps:!0}){if(!t.fillGaps)return e;if(e.ranges&&e.ranges.length<2)return e;const a=e.descriptions;return function(e,t){let a=[...e],n=[...t];for(let r=a.length-1;r>0;r--){const e=r-1;if(_(a,e,r)){const t=N(a,e,r);a.splice(r,0,t),n.splice(r,0,"")}}return{ranges:a,descriptions:n}}(function(e){return e.map(e=>[Math.min(...e),Math.max(...e)])}(e.ranges),a)}function _(e,t,a){return e[a][0]-e[t][1]>1}function N(e,t,a){return[e[t][1]+1,e[a][0]-1]}const b=({children:e})=>r.a.createElement(d.a,{trigger:"hover",placement:"top",title:"Only can add range if the point range is not fully covered"},e);var C=e=>{let t=e.min,a=void 0===t?0:t,l=e.max,i=void 0===l?100:l,c=Object(s.a)(e,["min","max"]);const p=Object(n.useState)([[a,i]]),d=Object(o.a)(p,2),f=d[0],E=d[1],_=Object(n.useState)([]),N=Object(o.a)(_,2),C=N[0],T=N[1];Object(n.useEffect)(()=>{if(c.initialValues){const e=v(c.initialValues,c.initialValuesConfig),t=e.ranges,a=e.descriptions;E(t),T(a)}},[]);const y=()=>{const e=new Set;return f.forEach(t=>{const a=Object(o.a)(t,2),n=a[0],r=a[1];for(let l=n;l<=r;l++)l>=0&&l<=100&&e.add(l)}),e.size===parseInt(i)+1};Object(n.useEffect)(()=>{c.onChange&&c.onChange({ranges:f,descriptions:C,isFullRange:y()})},[f,C]);const k=c.removeButtonText||"Remove last range",w=c.addButtonText||"Add more range",S=r.a.createElement(u.a,{className:"antd-group-slider__btn-add-range",disabled:(()=>{const e=f.length-1;return f[e][1]>i-2})(),ghost:!0,type:"primary",onClick:()=>{const e=[...f],t=f.length-1,a=f[t][1];e.push([a+1,i]),E(e)}},w);return r.a.createElement("div",{className:"antd-group-slider"},f.map((e,t)=>r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(x,{marks:c.marks,descriptionConfig:c.descriptionConfig,onAfterRangeChange:e=>((e,t)=>{const a=function(e,t,a){let n=[...e],r=t[1];const l=n[a+1];if(l){const e=l[1];r>=e-1?(r=e-1,l[0]=l[1]):l[0]=r+1}return n[a][1]=r,n}(f,e,t);E(a)})(e,t),updateDescription:e=>((e,t)=>{const a=[...C];a[t]=e,T(a)})(e,t),initialDescription:C[t],value:e,max:i}),c.showDivider?r.a.createElement(m.a,null):r.a.createElement(r.a.Fragment,null))),r.a.createElement(g.a,{className:"antd-group-slider__footer",gutter:4},r.a.createElement(h.a,{span:12},y()?r.a.createElement(b,null,S):S),r.a.createElement(h.a,{span:12},r.a.createElement(u.a,{className:"antd-group-slider__btn-remove-range",danger:!0,disabled:f.length<=1,onClick:()=>{f.pop();const e=f.length-1;f[e][1]=i,E([...f]),C.pop(),T([...C])}},k))))};a(69),a(70);var T=()=>r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},"antd-group-slider"),r.a.createElement("img",{className:"header__logo",src:"./favicon.png",alt:"logo"})),r.a.createElement("h3",null,"NPM:"," ",r.a.createElement("a",{href:"https://www.npmjs.com/package/antd-group-slider",target:"_blank",rel:"noopener noreferrer"},"https://www.npmjs.com/package/antd-group-slider")),r.a.createElement("h3",null,"GitHub:"," ",r.a.createElement("a",{href:"https://github.com/huyennbl/antd-group-slider",target:"_blank",rel:"noopener noreferrer"},"https://github.com/huyennbl/antd-group-slider")),r.a.createElement("p",{className:"intro"},r.a.createElement("strong",null,"antd-group-slider")," provides a group of sliders that help to input multiple related range-data. It has data sync between sliders on every range change that which would help the user to avoid accidental missing range during actions."),r.a.createElement("p",{className:"note"},"Please first have a look at"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ant.design/components/slider/"},"Ant Slider")," ","to have a general idea of the use case of this component."),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider />")),r.a.createElement(C,null)),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider \n  initialValues={{\n    ranges: [\n      [0, 25],\n      [50, 100]\n    ],\n    descriptions: ['First', 'Third']\n  }}\n/>")),r.a.createElement(C,{initialValues:{ranges:[[0,25],[50,100]],descriptions:["First","Third"]}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider \n  initialValues={{\n    ranges: [\n      [0, 25],\n      [50, 100]\n    ],\n    descriptions: ['First', 'Second']\n  }}\n  initialValuesConfig={{\n    fillGaps: false\n  }}\n/>")),r.a.createElement(C,{initialValues:{ranges:[[0,25],[50,100]],descriptions:["First","Second"]},initialValuesConfig:{fillGaps:!1}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  max={500}\n  addButtonText='More range'\n  removeButtonText='Remove last'\n/>")),r.a.createElement(C,{max:500,addButtonText:"More range",removeButtonText:"Remove last"})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    placeholder: 'Waiting for description of range {{range}}',\n    leftText: 'Description of {{range}}: '\n  }}\n/>")),r.a.createElement(C,{descriptionConfig:{placeholder:"Waiting for description of range {{range}}",leftText:"Description of {{range}}: "}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    leftAddonText: 'Description of {{range}}: ', // addonText only works with type='input'\n    type: 'input'\n  }}\n/>")),r.a.createElement(C,{descriptionConfig:{leftAddonText:"Description of {{range}}: ",type:"input"}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider\n  descriptionConfig={{\n    type: 'none'\n  }}\n/>")),r.a.createElement(C,{descriptionConfig:{type:"none"}})),r.a.createElement("div",{className:"example"},r.a.createElement("div",{className:"example__code"},r.a.createElement("pre",null,"<GroupSlider showDivider />")),r.a.createElement(C,{showDivider:!0})));i.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.7ebfded6.chunk.js.map