(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/modal.stories.tsx":"./src/stories/modal.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/modal.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Getting_Started",(function(){return modal_stories_Getting_Started}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var src_Modal=function Modal(_ref){var children=_ref.children,setModal=_ref.setModal,_ref$overlay_color=_ref.overlay_color,overlay_color=void 0===_ref$overlay_color?"rgba(49,49,49,0.8)":_ref$overlay_color,_ref$modal_color=_ref.modal_color,modal_color=void 0===_ref$modal_color?"white":_ref$modal_color,_ref$text_color=_ref.text_color,text_color=void 0===_ref$text_color?"black":_ref$text_color;return Object(jsx_runtime.jsxs)("div",{className:"modal",children:[Object(jsx_runtime.jsx)(Overlay,{onClick:function onClick(){return setModal(!1)},overlay_color:overlay_color}),Object(jsx_runtime.jsxs)(Content,{modal_color:modal_color,children:[Object(jsx_runtime.jsx)(CloseIcon,{onClick:function onClick(){return setModal(!1)},children:"X"}),Object(jsx_runtime.jsx)("p",{style:{color:text_color},children:children})]})]})};src_Modal.displayName="Modal";var src_0=src_Modal,Overlay=styled_components_browser_esm.a.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\tbackground: ",";\n"])),(function(props){return props.overlay_color})),Content=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n\tposition: absolute;\n\twidth: 50%;\n\tbackground-color: ",";\n\tborder-radius: 5px;\n\ttext-align: center;\n\tpadding: 2rem 0;\n\ttop: 40%;\n\tleft: 50%;\n    transform: translateX(-50%);\n\t@media screen and (max-width: 500px) {\n\t    width: 60%;\n    \tpadding: 4rem 1rem;\n\t    font-size: 1.2rem;\n\t}\n"])),(function(_ref2){return _ref2.modal_color})),CloseIcon=styled_components_browser_esm.a.span(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n\tposition: absolute;\n\ttop: -10px;\n\tright: -10px;\n\tcursor: pointer;\n\tborder-radius: 50%;\n\tbackground: black;\n\tcolor: white;\n\tpadding: 5px 10px;\n"])));try{src_Modal.displayName="Modal",src_Modal.__docgenInfo={description:"\na simple modal component.",displayName:"Modal",props:{setModal:{defaultValue:null,description:"",name:"setModal",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},overlay_color:{defaultValue:{value:"rgba(49,49,49,0.8)"},description:"",name:"overlay_color",required:!1,type:{name:"string"}},modal_color:{defaultValue:{value:"white"},description:"",name:"modal_color",required:!1,type:{name:"string"}},text_color:{defaultValue:{value:"black"},description:"",name:"text_color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#Modal"]={docgenInfo:src_Modal.__docgenInfo,name:"Modal",path:"src/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{src.displayName="src",src.__docgenInfo={description:"\na simple modal component.",displayName:"src",props:{setModal:{defaultValue:null,description:"",name:"setModal",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},overlay_color:{defaultValue:{value:"rgba(49,49,49,0.8)"},description:"",name:"overlay_color",required:!1,type:{name:"string"}},modal_color:{defaultValue:{value:"white"},description:"",name:"modal_color",required:!1,type:{name:"string"}},text_color:{defaultValue:{value:"black"},description:"",name:"text_color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"LIBRARY/Modal",component:src_0,argTypes:{setModal:{description:"create a state for the component and pass it the setModal prop",table:{defaultValue:{summary:"setModal={setIsOpen}"},disable:!0}},isOpen:{description:"modal visibility state",table:{defaultValue:{summary:!1},type:{summary:"boolean",detail:"const [isOpen, setIsOpen] = useState(false); "}}}},args:{isOpen:!1}};var modal_stories_Getting_Started=function Getting_Started(args){var _useArgs2=_slicedToArray(Object(hooks.c)(),2),isOpen=_useArgs2[0].isOpen,updateArgs=_useArgs2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h1",{children:"Modal Tester"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return updateArgs({isOpen:!isOpen})},children:"Click me !"}),!!isOpen&&Object(jsx_runtime.jsx)(src_0,Object.assign({},args,{setModal:function setModal(){return updateArgs({isOpen:!isOpen})},children:"Modal successfully created !"}))]})};modal_stories_Getting_Started.parameters=Object.assign({storySource:{source:"(args: ComponentMeta<typeof Modal>) => {\r\n\tconst [{ isOpen }, updateArgs] = useArgs()\r\n\treturn (\r\n\t\t<>\r\n\t\t\t<h1>Modal Tester</h1>\r\n\t\t\t<button onClick={() => updateArgs({ isOpen: !isOpen })}>\r\n\t\t\t\tClick me !\r\n\t\t\t</button>\r\n\t\t\t{!!isOpen && (\r\n\t\t\t\t<Modal\r\n\t\t\t\t\t{...args}\r\n\t\t\t\t\tsetModal={() => updateArgs({ isOpen: !isOpen })}\r\n\t\t\t\t>\r\n\t\t\t\t\tModal successfully created !\r\n\t\t\t\t</Modal>\r\n\t\t\t)}\r\n\t\t</>\r\n\t)\r\n}"}},modal_stories_Getting_Started.parameters);try{modal_stories_Getting_Started.displayName="Getting_Started",modal_stories_Getting_Started.__docgenInfo={description:"",displayName:"Getting_Started",props:{decorators:{defaultValue:null,description:"",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactFramework, Args>[]"}},parameters:{defaultValue:null,description:"",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"",name:"args",required:!1,type:{name:"Partial<Props>"}},argTypes:{defaultValue:null,description:"",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Props>>"}},loaders:{defaultValue:null,description:"",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactFramework, Args>[]"}},render:{defaultValue:null,description:"",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactFramework, Props>"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},includeStories:{defaultValue:null,description:"",name:"includeStories",required:!1,type:{name:"StoryDescriptor"}},excludeStories:{defaultValue:null,description:"",name:"excludeStories",required:!1,type:{name:"StoryDescriptor"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ComponentType<any>"}},subcomponents:{defaultValue:null,description:"",name:"subcomponents",required:!1,type:{name:"Record<string, ComponentType<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/modal.stories.tsx#Getting_Started"]={docgenInfo:modal_stories_Getting_Started.__docgenInfo,name:"Getting_Started",path:"src/stories/modal.stories.tsx#Getting_Started"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);