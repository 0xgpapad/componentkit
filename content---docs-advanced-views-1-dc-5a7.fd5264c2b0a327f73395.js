(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return o}),n.d(t,"rightToc",function(){return s}),n.d(t,"default",function(){return p});n(0);var i=n(133);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={title:"Advanced Views"},s=[],c={rightToc:s},l="wrapper";function p(e){var t=e.components,n=r(e,["components"]);return Object(i.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Back in ",Object(i.b)("a",a({parentName:"p"},{href:"/docs/views"}),"Views")," we glossed over ",Object(i.b)("inlineCode",{parentName:"p"},"CKComponentViewClass")," and ",Object(i.b)("inlineCode",{parentName:"p"},"CKComponentViewAttribute"),". But there's a surprising amount of power hiding here!"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CKComponentViewClass")," describes how to create a ",Object(i.b)("inlineCode",{parentName:"p"},"UIView"),". Usually you pass an Objective-C class like ",Object(i.b)("inlineCode",{parentName:"p"},"[UIImageView class]"),", and ComponentKit will automatically create a view by invoking the designated initializer ",Object(i.b)("inlineCode",{parentName:"p"},"-initWithFrame:"),"."),Object(i.b)("p",null,"But of course, not all views can be created with ",Object(i.b)("inlineCode",{parentName:"p"},"-initWithFrame:"),". For these cases, there's an advanced constructor that takes a function pointer:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"CKComponentViewClass(UIView *(*factory)(void));\n")),Object(i.b)("p",null,"This allows you to use almost any view with ComponentKit. Here's one example:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),'static UIView *authorViewForOscarWilde(void) {\n  return [[AuthorView alloc] initWithName:@"Oscar Fingal O\'Flahertie Wills Wilde"];\n}\n// ...\n[CKComponent newWithView:{&authorViewForOscarWilde} size:{50, 50}]\n')),Object(i.b)("div",{class:"note-important"},Object(i.b)("p",null,"However, the factory takes no arguments; you can't pass any properties from a particular component to a view's ",Object(i.b)("inlineCode",{parentName:"p"},"-init"),", since views must be arbitrarily recycled between components. If your view takes properties in ",Object(i.b)("inlineCode",{parentName:"p"},"-init"),", one possible pattern is to create a wrapping view with setter methods that tear down and re-create the problematic view as a subview.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CKComponentViewAttribute")," has similar underpinnings. Usually you pass a ",Object(i.b)("inlineCode",{parentName:"p"},"SEL"),", but under the hood they're basically just arbitrary blocks paired with a unique identifier:"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"struct CKComponentViewAttribute {\n  std::string identifier;\n  void (^applicator)(id view, id value);\n  void (^unapplicator)(id view, id value);\n  void (^updater)(id view, id oldValue, id newValue);\n};\n")),Object(i.b)("p",null,'This allows you to express arbitrarily complex operations on the view, like "call this method with these N arguments". The only restriction is that you must box up the inputs to the block in a single ',Object(i.b)("inlineCode",{parentName:"p"},"id")," so ComponentKit can determine if it has changed across recyclings."),Object(i.b)("div",{class:"note"},Object(i.b)("p",null,"How does passing a ",Object(i.b)("inlineCode",{parentName:"p"},"Class")," or ",Object(i.b)("inlineCode",{parentName:"p"},"SEL")," work for these classes? They each have a single-argument constructor that takes a ",Object(i.b)("inlineCode",{parentName:"p"},"Class"),"/",Object(i.b)("inlineCode",{parentName:"p"},"SEL")," and creates an object that creates the right thing. C++ implicitly calls this constructor when you pass a ",Object(i.b)("inlineCode",{parentName:"p"},"Class"),"/",Object(i.b)("inlineCode",{parentName:"p"},"SEL"),".")))}p.isMDXComponent=!0}}]);