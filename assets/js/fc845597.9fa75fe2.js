"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[254],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),f=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=f(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=f(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var f=2;f<a;f++)o[f]=n[f];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},l="First Project",f={unversionedId:"guide/FirstProject",id:"guide/FirstProject",title:"First Project",description:"Create a Qt GUI application with either Qt creator or other supported IDE.",source:"@site/docs/guide/FirstProject.md",sourceDirName:"guide",slug:"/guide/FirstProject",permalink:"/QCefView/docs/guide/FirstProject",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/guide/FirstProject.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"default",previous:{title:"Guide",permalink:"/QCefView/docs/guide/"},next:{title:"Load WebApp Resource",permalink:"/QCefView/docs/guide/LoadWebResource"}},s=[{value:"Initialize QCefContext instance",id:"initialize-qcefcontext-instance",children:[],level:2},{value:"Create QCefView Instance",id:"create-qcefview-instance",children:[],level:2},{value:"Create a simple web page",id:"create-a-simple-web-page",children:[],level:2},{value:"Run the application",id:"run-the-application",children:[],level:2}],p={toc:s};function d(e){var t=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-project"},"First Project"),(0,a.kt)("p",null,"Create a Qt GUI application with either Qt creator or other supported IDE."),(0,a.kt)("h2",{id:"initialize-qcefcontext-instance"},"Initialize ",(0,a.kt)("a",{parentName:"h2",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext"))," instance"),(0,a.kt)("p",null,"To consume QCefView, the first step is to initialize an instance of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),". This is like the QApplication, there must be only one instance of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext"))," in the application lifecycle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <QApplication>\n#include <QCefContext.h>\n#include "MainWindow.h"\n\nint main(int argc, char* argv[])\n{\n  // build the application instance\n  QApplication a(argc, argv);\n\n  // build QCefConfig\n  QCefConfig config;\n  config.setUserAgent("QCefViewTest");\n  config.setLogLevel(QCefConfig::LOGSEVERITY_DEFAULT);\n  config.setBridgeObjectName("CallBridge");\n  config.setRemoteDebuggingPort(9000);\n  config.setBackgroundColor(QColor::fromRgba(qRgba(255, 0, 0, 255)));\n\n  // add command line args\n  config.addCommandLineSwitch("enable-media-stream");\n  config.addCommandLineSwitch("use-mock-keychain");\n  config.addCommandLineSwitch("allow-file-access-from-files");\n  config.addCommandLineSwitch("disable-spell-checking");\n  config.addCommandLineSwitch("disable-site-isolation-trials");\n  config.addCommandLineSwitch("enable-aggressive-domstorage-flushing");\n  config.addCommandLineSwitchWithValue("renderer-process-limit", "1");\n  config.addCommandLineSwitchWithValue("disable-features", "BlinkGenPropertyTrees,TranslateUI,site-per-process");\n\n  // initialize QCefContext instance with config\n  QCefContext cefContext(&a, argc, argv, &config);\n\n  MainWindow w;\n  w.show();\n\n  return a.exec();\n}\n')),(0,a.kt)("p",null,"As you can see we need a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig"))," to initialize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),". You could set some global parameters of CEF with ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig"))," instance, for example the log level, user agent name and debugging port. For more details please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefConfig"))," references."),(0,a.kt)("p",null,"Do not try to destruct the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext"))," instance explicitly or you will break the lifecycle of the CEF stuff."),(0,a.kt)("h2",{id:"create-qcefview-instance"},"Create QCefView Instance"),(0,a.kt)("p",null,"Once you have initialize ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefContext"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefContext")),", you can create ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/QCefView"},(0,a.kt)("inlineCode",{parentName:"a"},"QCefView"))," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"  // build settings for per QCefView\n  QCefSetting setting;\n  // here we just set the default background to blue\n  setting.setBackgroundColor(QColor::fromRgb(0, 0, 255));\n\n  // create the QCefView widget and add it to the layout container\n  cefViewWidget = new QCefView(uri, &setting, this);\n  ui.cefContainer->layout()->addWidget(cefViewWidget);\n  layout->addWidget(ui.cefContainer);\n")),(0,a.kt)("h2",{id:"create-a-simple-web-page"},"Create a simple web page"),(0,a.kt)("p",null,"Create a simple web page with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n  </head>\n  <body id="main" class="noselect">\n    <h1 align="center" style="font-size: 12pt">Web Area</h1>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"run-the-application"},"Run the application"),(0,a.kt)("p",null,"Now lets run the application."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Project",src:n(2631).Z})))}d.isMDXComponent=!0},2631:function(e,t,n){t.Z=n.p+"assets/images/first-project-96bc40d62f5500d3af40112fe6aced13.png"}}]);