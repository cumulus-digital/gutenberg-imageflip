!function(e){function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(1)},function(e,n,t){"use strict";var a=t(2),l=(t.n(a),t(3)),r=(t.n(l),wp.editor),o=r.InnerBlocks,c=r.URLInput,i=r.MediaUpload,m=r.MediaUploadCheck,u=(r.PlainText,wp.editor),p=u.InspectorControls,g=u.ColorPalette,d=(wp.i18n.__,wp.blocks.registerBlockType),f=wp.components,s=(f.BaseControl,f.ToggleControl),b=f.RangeControl,w=f.SelectControl,k=f.Button,v=(f.Panel,f.PanelBody),I=f.PanelRow;wp.compose.withInstanceId;d("cmls/block-vflipcard",{title:"ImageFlip",icon:"format-gallery",category:"common",keywords:["image","hover","flip","imageflip","vflipcard","flip card","card"],attributes:{url:{},newWindow:{type:"boolean",default:!1},frontImage:{type:"string",default:null},frontImageSizing:{type:"string",default:"cover"},frontImageSizePercent:{type:"integer",default:"100"},frontColor:{type:"string",default:"transparent"},backContentPadding:{type:"integer",default:5},backImage:{type:"string",default:null},backImageSizing:{type:"string",default:"cover"},backImageSizePercent:{type:"integer",default:"100"},backColor:{type:"string",default:"transparent"},frontContent:{type:"array",source:"children",selector:".vflipcard-front"},backContent:{type:"array",source:"children",selector:"h2"},showSide:{type:"string",default:"front"}},edit:function(e){var n=e.attributes,t=e.isSelected,a=e.className,l=e.setAttributes,r=function(e,t,a,l){return n[a]?wp.element.createElement("div",{class:"vflipcard-image"},wp.element.createElement("img",{src:n[a],className:"vflipcard-${side}-bg-image",alt:"vFlipCard Background"}),wp.element.createElement(k,{onClick:e,className:"button button-large"},"Change ",l)):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(k,{onClick:e,className:"button button-large"},"Choose ",l))};return wp.element.createElement("div",{className:a+" vflipcard-show-"+n.showSide},wp.element.createElement(k,{className:"vflipcard-flipper",onClick:function(){l({showSide:"front"===n.showSide?"back":"front"})}},"front"===n.showSide?"Front":"Back"," (Flip it!)"),wp.element.createElement("a",{href:n.url,target:n.newWindow&&"_blank",rel:n.newWindow&&"noopener noreferrer",className:"vflipcard-container",onClick:function(e){e.preventDefault()}},wp.element.createElement("div",{className:"vflipcard-face vflipcard-front",style:{backgroundImage:n.frontImage?"url("+n.frontImage+")":"none",backgroundColor:n.frontColor,backgroundSize:"percent"==n.frontImageSizing?n.frontImageSizePercent+"%":n.frontImageSizing}}),wp.element.createElement("div",{className:"vflipcard-face vflipcard-back",style:{backgroundImage:n.backImage?"url("+n.backImage+")":"none",backgroundColor:n.backColor}},wp.element.createElement("div",{class:"vflipcard-back-body",style:{padding:n.backContentPadding+"%"}},wp.element.createElement("div",null,wp.element.createElement(o,null))))),wp.element.createElement(p,null,wp.element.createElement(v,{title:"Link",initialOpen:!1},wp.element.createElement(I,null,wp.element.createElement(c,{value:n.url,autoFocus:!1,onChange:function(e){return l({url:e})},disableSuggestions:!t,isFullWidth:!0,hasBorder:!0})),wp.element.createElement(I,null,wp.element.createElement(s,{label:"Open link in new window",checked:!!n.newWindow,onChange:function(){return l({newWindow:!n.newWindow})}}))),wp.element.createElement(v,{title:"Front"},wp.element.createElement(I,null,wp.element.createElement(g,{id:"vflipcard-front-bgcolor",value:n.frontColor,onChange:function(e){l({frontColor:e})},label:"Background color"})),wp.element.createElement(I,null,wp.element.createElement(m,null,wp.element.createElement(i,{id:"vflipcard-front-bgimage",label:"Front Background Image",onSelect:function(e){l({frontImage:e.sizes.full.url})},type:"image",value:n.frontImage,render:function(e){var n=e.open;return r(n,0,"frontImage","Background Image")}}))),n.frontImage&&wp.element.createElement("p",null,wp.element.createElement("a",{href:"#",onClick:function(){return l({frontImage:null})}},"Remove Image")),n.frontImage&&wp.element.createElement(w,{label:"Sizing Method",value:n.frontImageSizing,options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"Percent",value:"percent"}],onChange:function(e){l({frontImageSizing:e})}}),"percent"==n.frontImageSizing&&wp.element.createElement(I,null,wp.element.createElement(b,{value:n.frontImageSizePercent,onChange:function(e){return l({frontImageSizePercent:e})},min:0,max:200}))),wp.element.createElement(v,{title:"Back"},wp.element.createElement("div",null,"Content Padding %"),wp.element.createElement(b,{value:n.backContentPadding,onChange:function(e){return l({backContentPadding:e})},min:0,max:20,isFullWidth:!0}),wp.element.createElement(I,null,wp.element.createElement(g,{id:"vflipcard-back-bgcolor",value:n.backColor,onChange:function(e){l({backColor:e})},label:"Background color"})),wp.element.createElement(I,null,wp.element.createElement(m,null,wp.element.createElement(i,{id:"vflipcard-front-bgimage",label:"Front Background Image",onSelect:function(e){l({backImage:e.url})},type:"image",value:n.backImage,render:function(e){var n=e.open;return r(n,0,"backImage","Background Image")}}))),n.backImage&&wp.element.createElement("p",null,wp.element.createElement("a",{href:"#",onClick:function(){return l({backImage:null})}},"Remove Image")),n.backImage&&wp.element.createElement(w,{label:"Sizing Method",value:n.backImageSizing,options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"Percent",value:"percent"}],onChange:function(e){l({backImageSizing:e})}}),"percent"==n.backImageSizing&&wp.element.createElement(I,null,wp.element.createElement(b,{value:n.backImageSizePercent,onChange:function(e){return l({backImageSizePercent:e})},min:0,max:200})))))},save:function(e){var n=e.attributes,t=e.className;return wp.element.createElement("div",{className:t},wp.element.createElement("label",null,wp.element.createElement("input",{type:"checkbox",className:"vflipcard-toggle"}),wp.element.createElement("a",{href:n.url,target:n.newWindow&&"_blank",rel:n.newWindow&&"noopener noreferrer",className:"vflipcard-container"},wp.element.createElement("div",{className:"vflipcard-face vflipcard-front",style:{backgroundImage:n.frontImage?"url("+n.frontImage+")":"none",backgroundColor:n.frontColor,backgroundSize:"percent"==n.frontImageSizing?n.frontImageSizePercent+"%":n.frontImageSizing}},wp.element.createElement("div",{className:"vflipcard-front-body"})),wp.element.createElement("div",{className:"vflipcard-face vflipcard-back",style:{backgroundImage:n.backImage?"url("+n.backImage+")":"none",backgroundColor:n.backColor,backgroundSize:"percent"==n.backImageSizing?n.backImageSizePercent+"%":n.backImageSizing}},wp.element.createElement("div",{class:"vflipcard-back-body",style:{padding:n.backContentPadding+"%"}},wp.element.createElement("div",null,wp.element.createElement(o.Content,null)))))))}})},function(e,n){},function(e,n){}]);