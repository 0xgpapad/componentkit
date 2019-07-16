(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return l}),t.d(n,"rightToc",function(){return r}),t.d(n,"default",function(){return m});t(0);var i=t(135);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={title:"Lifecycle Methods"},r=[{value:"Ordering",id:"ordering",children:[{value:"Mounting",id:"mounting",children:[]},{value:"Remounting",id:"remounting",children:[]},{value:"Unmounting",id:"unmounting",children:[]},{value:"Updating",id:"updating",children:[]}]},{value:"Uses",id:"uses",children:[{value:"Mutating the View",id:"mutating-the-view",children:[]}]}],c={rightToc:r},b="wrapper";function m(e){var n=e.components,t=o(e,["components"]);return Object(i.b)(b,a({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",a({parentName:"p"},{href:"/docs/component-controllers"}),"Component controllers")," expose lifecycle methods that allow you to perform custom operations as components mount, unmount, update, and acquire views."),Object(i.b)("div",{class:"note"},Object(i.b)("p",null,"Whenever possible, avoid using lifecycle methods. Think of them as an emergency escape hatch for integrating with stateful code.")),Object(i.b)("h2",null,Object(i.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"ordering"})),Object(i.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#ordering"}),"#"),"Ordering"),Object(i.b)("p",null,"Lifecycle methods have the following defined ordering."),Object(i.b)("h3",null,Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"mounting"})),Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#mounting"}),"#"),"Mounting"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"willMount")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")," ",Object(i.b)("em",{parentName:"li"},"if")," the controller's component has a view"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"didMount")," after the component ",Object(i.b)("em",{parentName:"li"},"and")," all of its children are mounted")),Object(i.b)("h3",null,Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"remounting"})),Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#remounting"}),"#"),"Remounting"),Object(i.b)("p",null,"Remounting occurs when the controller's component is already mounted and either the component is being updated or the root component is being attached to a different view."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"willRemount")),Object(i.b)("li",{parentName:"ol"},"If the controller's component creates a view and its previous view cannot be recycled:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"didRemount"))),Object(i.b)("h3",null,Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"unmounting"})),Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#unmounting"}),"#"),"Unmounting"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"willUnmount")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView")," ",Object(i.b)("em",{parentName:"li"},"if")," the controller's component has a view"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"didUnmount"))),Object(i.b)("div",{class:"note-important"},Object(i.b)("p",null,"There are no guarantees that the component's children or parents are mounted in ",Object(i.b)("inlineCode",{parentName:"p"},"willUnmount")," or ",Object(i.b)("inlineCode",{parentName:"p"},"componentWillRelinquishView"),". You ",Object(i.b)("b",null,"must not")," use ",Object(i.b)("inlineCode",{parentName:"p"},"CKComponentActionSend")," or any other method that assumes the component's parents are mounted.")),Object(i.b)("h3",null,Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"updating"})),Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#updating"}),"#"),"Updating"),Object(i.b)("p",null,"The controller's component can be updated to a new version of the component as part of the mounting or remounting process. In this case, you'll receive the following callbacks:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"willUpdateComponent")," before ",Object(i.b)("inlineCode",{parentName:"li"},"willMount")," or ",Object(i.b)("inlineCode",{parentName:"li"},"willRemount")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"didUpdateComponent")," after ",Object(i.b)("inlineCode",{parentName:"li"},"didMount")," or ",Object(i.b)("inlineCode",{parentName:"li"},"didRemount"))),Object(i.b)("h2",null,Object(i.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"uses"})),Object(i.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#uses"}),"#"),"Uses"),Object(i.b)("h3",null,Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"mutating-the-view"})),Object(i.b)("a",a({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#mutating-the-view"}),"#"),"Mutating the View"),Object(i.b)("p",null,"Generally views are a hidden implementation detail of ComponentKit, but you may need to break that abstraction:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Animations that cannot be implemented using ",Object(i.b)("inlineCode",{parentName:"li"},"animationsFromPreviousComponent:"),". Be sure you remove all animations in ",Object(i.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView"),"."),Object(i.b)("li",{parentName:"ul"},"Interfacing with views that only expose event callbacks via a delegate API. Make the component controller the view's delegate in ",Object(i.b)("inlineCode",{parentName:"li"},"componentDidAcquireView")," and nil out the view's delegate in ",Object(i.b)("inlineCode",{parentName:"li"},"componentWillRelinquishView"),".")),Object(i.b)("div",{class:"note"},Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidAcquireView")," and ",Object(i.b)("inlineCode",{parentName:"p"},"componentWillRelinquishView")," implementations you may only reference the view via the component controller's ",Object(i.b)("inlineCode",{parentName:"p"},"view")," property. Remember, these lifecycle methods are called before the component has finished being mounted. Trying to use the component's view context will not work until the component has been mounted.")))}m.isMDXComponent=!0}}]);