webpackJsonp([0,3],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RenderMap=t.StringToTypeMap=t.beforeInput=t.Editor=void 0;var r=n(2),i=o(r),a=n(332),l=o(a),u=n(330),c=o(u);t.Editor=i["default"],t.beforeInput=l["default"],t.StringToTypeMap=a.StringToTypeMap,t.RenderMap=c["default"]},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){switch(e.getType()){case T.Block.BLOCKQUOTE:return"block block-quote RichEditor-blockquote";case T.Block.UNSTYLED:return"block block-paragraph";case T.Block.ATOMIC:return"block block-atomic";case T.Block.CAPTION:return"block block-caption";case T.Block.TODO:return"block block-paragraph block-todo";case T.Block.BLOCKQUOTE_CAPTION:return"block block-quote RichEditor-blockquote block-quote-caption";default:return"block"}}Object.defineProperty(t,"__esModule",{value:!0});var c,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(3),n(5),n(6);var f=n(7),d=o(f),p=n(37),h=n(306),g=n(307),y=o(g),b=n(310),v=o(b),k=n(317),m=o(k),O=(n(326),n(330)),E=o(O),S=n(331),C=o(S),T=n(316),w=n(332),B=o(w),_=n(315),I=n(333),R=o(I),D=(c={},l(c,T.Inline.HIGHLIGHT,{backgroundColor:"yellow"}),l(c,T.Inline.CODE,{fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',margin:"4px 0",fontSize:"0.9em",padding:"1px 3px",color:"#555",backgroundColor:"#fcfcfc",border:"1px solid #ccc",borderBottomColor:"#bbb",borderRadius:3,boxShadow:"inset 0 -1px 0 #bbb"}),c),L=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e)),o=new p.CompositeDecorator([{strategy:I.findLinkEntities,component:R["default"]}]);return n.state={editorState:p.EditorState.createEmpty(o),showURLInput:!1,editorEnabled:!0,urlValue:""},e.value&&(n.state.editorState=p.EditorState.push(n.state.editorState,(0,p.convertFromRaw)(e.value))),n.focus=function(){return n.refs.editor.focus()},n.onChange=function(e){n.state.editorEnabled&&n.setState({editorState:e})},n.onClick=function(){n.state.editorEnabled||n.setState({editorEnabled:!0},function(){n.focus()})},n.logData=n.logData.bind(n),n.onClick=n.onClick.bind(n),n.onTab=n.onTab.bind(n),n.handleKeyCommand=n.handleKeyCommand.bind(n),n.handleBeforeInput=n.handleBeforeInput.bind(n),n.handleReturn=n.handleReturn.bind(n),n.toggleBlockType=n._toggleBlockType.bind(n),n.toggleInlineStyle=n._toggleInlineStyle.bind(n),n.toggleEdit=n.toggleEdit.bind(n),n.loadSavedData=n.loadSavedData.bind(n),n.setLink=n.setLink.bind(n),n.addMedia=n.addMedia.bind(n),n.onChangeData=n.onChangeData.bind(n),n.blockRendererFn=(0,m["default"])(n.onChangeData),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.focus()}},{key:"onTab",value:function(e){var t=this.state.editorState,n=p.RichUtils.onTab(e,t,2);n!==t&&this.onChange(n)}},{key:"logData",value:function(e){console.log((0,p.convertToRaw)(this.state.editorState.getCurrentContent())),console.log(this.state.editorState.getSelection().toJS()),window.sel=this.state.editorState.getSelection()}},{key:"setLink",value:function(e){var t=this,n=this.state.editorState,o=n.getSelection(),r=null;""!==e&&(r=p.Entity.create(T.Entity.LINK,"MUTABLE",{url:e})),this.setState({editorState:p.RichUtils.toggleLink(n,o,r)},function(){setTimeout(function(){return t.refs.editor.focus()},0)})}},{key:"onChangeData",value:function(e,t){this.onChange((0,_.updateDataOfBlock)(this.state.editorState,e,t))}},{key:"addMedia",value:function(){var e=window.prompt("Enter a URL");if(e){var t=p.Entity.create("image","IMMUTABLE",{src:e});this.onChange(p.AtomicBlockUtils.insertAtomicBlock(this.state.editorState,t," "))}}},{key:"handleDroppedFiles",value:function(e,t){console.log(e.toJS()),console.log(t)}},{key:"handleKeyCommand",value:function(e){if("editor-save"===e)return window.localStorage.editor=JSON.stringify((0,p.convertToRaw)(this.state.editorState.getCurrentContent())),window.localStorage.tmp=JSON.stringify((0,p.convertToRaw)(this.state.editorState.getCurrentContent())),!0;if("showlinkinput"===e)return this.refs.toolbar&&this.refs.toolbar.showLinkInput(null,!0),!0;if("add-new-block"===e){var t=this.state.editorState;return this.onChange((0,_.addNewBlock)(t,T.Block.BLOCKQUOTE)),!0}if("load-saved-data"===e)return this.loadSavedData(),!0;var n=this.state.editorState,o=(0,_.getCurrentBlock)(n);if(0==e.indexOf("changetype:")){var r=e.split(":")[1],i=o.getType();return i==T.Block.ATOMIC||"media"==i?!1:(i==T.Block.BLOCKQUOTE&&r==T.Block.CAPTION?r=T.Block.BLOCKQUOTE_CAPTION:i==T.Block.BLOCKQUOTE_CAPTION&&r==T.Block.CAPTION&&(r=T.Block.BLOCKQUOTE),this.onChange(p.RichUtils.toggleBlockType(n,r)),!0)}var a=p.RichUtils.handleKeyCommand(n,e);return a?(this.onChange(a),!0):!1}},{key:"handleBeforeInput",value:function(e){return this.props.beforeInput(this.state.editorState,e,this.onChange,this.props.stringToTypeMap)}},{key:"handleReturn",value:function(e){return e.shiftKey?(this.onChange(p.RichUtils.insertSoftNewline(this.state.editorState)),!0):!1}},{key:"_toggleBlockType",value:function(e){this.onChange(p.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(p.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"toggleEdit",value:function(e){this.setState({editorEnabled:!this.state.editorEnabled})}},{key:"loadSavedData",value:function(){var e=this,t=window.localStorage.getItem("editor");if(null===t)return void console.log("No data found.");try{var n=JSON.parse(t);console.log(n),this.setState({editorState:p.EditorState.push(this.state.editorState,(0,p.convertFromRaw)(n))},function(){return e.refs.editor.focus()})}catch(o){console.log(o),console.log("Could not load data.")}}},{key:"render",value:function(){var e=this.state,t=e.editorState,n=(e.showURLInput,e.editorEnabled);e.urlValue;return d["default"].createElement("div",{className:"RichEditor-root"},d["default"].createElement("div",{className:"RichEditor-editor"},d["default"].createElement(p.Editor,{ref:"editor",editorState:t,blockRendererFn:this.blockRendererFn,blockStyleFn:u,onChange:this.onChange,onTab:this.onTab,blockRenderMap:this.props.blockRenderMap,handleKeyCommand:this.handleKeyCommand,handleBeforeInput:this.handleBeforeInput,handleDroppedFiles:this.handleDroppedFiles,handleReturn:this.handleReturn,customStyleMap:D,readOnly:!n,keyBindingFn:C["default"],placeholder:"Write your story...",spellCheck:!1}),n?d["default"].createElement(y["default"],{editorState:t,addMedia:this.addMedia}):null,d["default"].createElement(v["default"],{ref:"toolbar",editorState:t,toggleBlockType:this.toggleBlockType,toggleInlineStyle:this.toggleInlineStyle,editorEnabled:n,setLink:this.setLink,focus:this.focus})),d["default"].createElement("div",{className:"editor-action"},d["default"].createElement("button",{onClick:this.logData},"Log State"),d["default"].createElement("button",{onClick:this.toggleEdit},"Toggle Edit")))}}]),t}(d["default"].Component);(0,h.Map)();L.defaultProps={beforeInput:B["default"],stringToTypeMap:w.StringToTypeMap,blockRenderMap:E["default"]},t["default"]=L},3:function(e,t){},5:3,6:3,307:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(308);var u=n(7),c=o(u),s=n(309),f=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={style:{},visible:!1},n.node=null,n.blockKey="",n.blockType="",n.blockLength=-1,n.findNode=n.findNode.bind(n),n.hideBlock=n.hideBlock.bind(n),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.editorState,n=t.getCurrentContent(),o=t.getSelection();if(!o.isCollapsed()||o.anchorKey!=o.focusKey)return void this.hideBlock();var r=n.getBlockForKey(o.anchorKey),i=r.getKey();return r.getType()!==this.blockType?(this.blockType=r.getType(),void setTimeout(this.findNode,0)):this.blockKey===i?void this.setState({visible:!0}):(this.blockKey=i,void setTimeout(this.findNode,0))}},{key:"hideBlock",value:function(){this.state.visible&&this.setState({visible:!1})}},{key:"findNode",value:function(){var e=(0,s.getSelectedBlockNode)(window);if(e!==this.node){if(!e)return void this.setState({visible:!1});e.getBoundingClientRect();this.node=e,this.setState({visible:!0,style:{top:e.offsetTop}})}}},{key:"render",value:function(){return this.state.visible?c["default"].createElement("button",{onClick:this.props.addMedia,className:"add-button",style:this.state.style},"+"):null}}]),t}(c["default"].Component);t["default"]=f},308:3,309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getSelectionRect=function(e){var t=e.getRangeAt(0).getBoundingClientRect(),n=t&&t.top?t:e.getRangeAt(0).getClientRects()[0];if(!n){if(!e.anchorNode||!e.anchorNode.getBoundingClientRect)return null;n=e.anchorNode.getBoundingClientRect(),n.isEmptyline=!0}return n},t.getSelection=function(e){var t=null;return e.getSelection?t=e.getSelection():e.document.getSelection?t=e.document.getSelection():e.document.selection&&(t=e.document.selection.createRange().text),t},t.getSelectedBlockNode=function(e){var t=e.getSelection();if(0==t.rangeCount)return null;window.sel=t;var n=t.getRangeAt(0).startContainer;do{if(n.getAttribute&&"true"===n.getAttribute("data-block"))return n;n=n.parentNode}while(null!==n);return null}},310:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(311);var u=n(7),c=o(u),s=n(88),f=o(s),d=n(37),p=n(312),h=o(p),g=n(314),y=o(g),b=n(309),v=n(315);window.getVisibleSelectionRect=d.getVisibleSelectionRect;var k=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showURLInput:!1,urlInputValue:"",style:{top:0,left:0}},n.onKeyDown=n.onKeyDown.bind(n),n.onChange=n.onChange.bind(n),n.showLinkInput=n.showLinkInput.bind(n),n.hasDimension=!1,n.rect={},n.forceHide=!1,n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.editorState;if(e.editorEnabled){var n=t.getSelection();if(n.isCollapsed())return void(this.state.showURLInput&&this.setState({showURLInput:!1}));var o=(0,b.getSelection)(window);if(o.rangeCount){var r=(o.getRangeAt(0).startContainer.parentNode,(0,b.getSelectionRect)(o));if(this.hasDimension){var i=r.left-this.rect.width;r.width>=this.rect.width&&(i=(r.width-this.rect.width)/2),this.setState({style:{top:r.top-this.rect.height-50,width:this.rect.width,left:i}})}else this.setState({style:{top:r.top-100,left:(r.left+r.width-341)/2,width:341}})}}}},{key:"componentDidUpdate",value:function(){this.forceHide=!1;var e=f["default"].findDOMNode(this);e&&(this.rect=f["default"].findDOMNode(this).getBoundingClientRect(),this.hasDimension=!0)}},{key:"onKeyDown",value:function(e){var t=this;13===e.which?(e.preventDefault(),e.stopPropagation(),this.props.setLink(this.state.urlInputValue),this.setState({showURLInput:!1,urlInputValue:""},function(){return t.props.focus()})):27===e.which&&(e.preventDefault(),e.stopPropagation(),this.setState({showURLInput:!1,urlInputValue:""},function(){return t.props.focus()}))}},{key:"onChange",value:function(e){this.setState({urlInputValue:e.target.value})}},{key:"showLinkInput",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];n||(e.preventDefault(),e.stopPropagation());var o=this.props.editorState,r=o.getSelection();if(r.isCollapsed())return void this.props.focus();var i=(0,v.getCurrentBlock)(o),a="",l=!1;i.findEntityRanges(function(e){var t=e.getEntity();return a=t,null!==t&&"LINK"===d.Entity.get(t).getType()},function(e,n){var o=r.getAnchorOffset(),i=r.getFocusOffset();if(r.getIsBackward()&&(o=r.getFocusOffset(),i=r.getAnchorOffset()),e==o&&n==i){l=!0;var u=d.Entity.get(a).getData(),c=u.url;t.setState({showURLInput:!0,urlInputValue:c},function(){setTimeout(function(){t.refs.urlinput.focus(),t.refs.urlinput.select()},0)})}}),l||this.setState({showURLInput:!0},function(){setTimeout(function(){t.refs.urlinput.focus()},0)})}},{key:"render",value:function(){var e=this.props,t=e.editorState,n=e.editorEnabled,o=this.state,r=o.showURLInput,i=o.urlInputValue,a=o.style;return!n||t.getSelection().isCollapsed()?null:r?c["default"].createElement("div",{className:"editor-toolbar",style:a},c["default"].createElement("div",{className:"RichEditor-controls",style:{display:"block"}},c["default"].createElement("input",{ref:"urlinput",type:"text",className:"url-input",onKeyDown:this.onKeyDown,onChange:this.onChange,placeholder:"Press ENTER or ESC",value:i}))):c["default"].createElement("div",{className:"editor-toolbar",style:a},c["default"].createElement(h["default"],{editorState:t,onToggle:this.props.toggleBlockType,buttons:m}),c["default"].createElement(y["default"],{editorState:t,onToggle:this.props.toggleInlineStyle,buttons:O}),c["default"].createElement("div",{className:"RichEditor-controls"},c["default"].createElement("a",{className:"RichEditor-linkButton",href:"#",onClick:this.showLinkInput},"#")))}}]),t}(c["default"].Component);t["default"]=k;var m=[{label:"T",style:"header-three"},{label:"N",style:"unstyled"},{label:"Q",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"}],O=[{label:c["default"].createElement("b",null,"B"),style:"BOLD"},{label:c["default"].createElement("i",null,"I"),style:"ITALIC"},{label:c["default"].createElement("u",null,"U"),style:"UNDERLINE"},{label:c["default"].createElement("strike",null,"S"),style:"STRIKETHROUGH"},{label:"Hi",style:"HIGHLIGHT"}]},311:3,312:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(37),l=n(313),u=o(l);t["default"]=function(e){var t=e.editorState,n=a.RichUtils.getCurrentBlockType(t);return i["default"].createElement("div",{className:"RichEditor-controls"},e.buttons.map(function(t){return i["default"].createElement(u["default"],{key:t.label,active:t.style===n,label:t.label,onToggle:e.onToggle,style:t.style})}))}},313:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(7),c=o(u),s=function(e){function t(){r(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return a(t,e),l(t,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),c["default"].createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),t}(c["default"].Component);t["default"]=s},314:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(313),l=o(a);t["default"]=function(e){var t=e.editorState.getCurrentInlineStyle();return i["default"].createElement("div",{className:"RichEditor-controls"},e.buttons.map(function(n){return i["default"].createElement(l["default"],{key:n.style,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})}))}},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateDataOfBlock=t.resetBlockWithType=t.addNewBlock=t.getCurrentBlock=t.getDefaultBlockData=void 0;var o=n(37),r=n(316),i=t.getDefaultBlockData=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(e){case r.Block.TODO:return{checked:!1};default:return t}},a=t.getCurrentBlock=function(e){var t=e.getSelection(),n=e.getCurrentContent(),o=n.getBlockForKey(t.getStartKey());return o};t.addNewBlock=function(){var e=arguments.length<=0||void 0===arguments[0]?r.Block.UNSTYLED:arguments[0],t=editorState.getSelection();if(!t.isCollapsed())return console.log("selection not collapsed"),editorState;var n=editorState.getCurrentContent(),l=t.getStartKey(),u=n.getBlockMap(),c=a(editorState);if(!c)return console.log("no current block"),editorState;if(0==c.getLength()){if(c.getType()==e)return console.log("same block types"),editorState;var s=c.merge({type:e,data:i(e)}),f=n.merge({blockMap:u.set(l,s),selectionAfter:t});return o.EditorState.push(editorState,f,"change-block-type")}return console.log("block length > 0"),editorState},t.resetBlockWithType=function(e){var t=arguments.length<=1||void 0===arguments[1]?r.Block.UNSTYLED:arguments[1],n=e.getCurrentContent(),a=e.getSelection(),l=a.getStartKey(),u=n.getBlockMap(),c=u.get(l),s="",f=c.getText();c.getLength()>=2&&(s=f.substr(1)),console.log(u.toJS());var d=c.merge({text:s,type:t,data:i(t)}),p=n.merge({blockMap:u.set(l,d),selectionAfter:a.merge({anchorOffset:0,focusOffset:0})});return console.log(p.getBlockMap().toJS()),o.EditorState.push(e,p,"change-block-type")},t.updateDataOfBlock=function(e,t,n){var r=e.getCurrentContent(),i=(r.getBlockMap(),t.merge({data:n})),a=r.merge({blockMap:r.getBlockMap().set(t.getKey(),i)});return o.EditorState.push(e,a,"change-block-type")}},316:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.Block={UNSTYLED:"unstyled",OL:"ordered-list-item",UL:"unordered-list-item",H1:"header-one",H2:"header-two",H3:"header-three",H4:"header-four",H5:"header-five",H6:"header-six",CODE:"code-block",BLOCKQUOTE:"blockquote",PULLQUOTE:"pullquote",ATOMIC:"atomic",BLOCKQUOTE_CAPTION:"block-quote-caption",CAPTION:"caption",TODO:"todo"},o=t.Inline={BOLD:"BOLD",CODE:"CODE",ITALIC:"ITALIC",STRIKETHROUGH:"STRIKETHROUGH",UNDERLINE:"UNDERLINE",HIGHLIGHT:"HIGHLIGHT"},r=t.Entity={LINK:"LINK"};t["default"]={Block:n,Inline:o,Entity:r}},317:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(318),i=o(r),a=n(320),l=o(a),u=n(322),c=o(u),s=n(324),f=o(s),d=n(316);t["default"]=function(e){return function(t){var n=t.getType();switch(n){case d.Block.BLOCKQUOTE_CAPTION:return{component:i["default"]};case d.Block.CAPTION:return{component:l["default"]};case d.Block.ATOMIC:return{component:c["default"],editable:!1};case d.Block.TODO:return{component:f["default"],props:{onChangeData:e}};default:return null}}}},318:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(319);var r=n(7),i=o(r),a=n(37);t["default"]=function(e){return i["default"].createElement("cite",null,i["default"].createElement(a.EditorBlock,e))}},319:3,320:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(321);var r=n(7),i=o(r),a=n(37);t["default"]=function(e){return i["default"].createElement(a.EditorBlock,e)}},321:3,322:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(323);var r=n(7),i=o(r),a=n(37);t["default"]=function(e){var t=a.Entity.get(e.block.getEntityAt(0)),n=t.getData(),o=t.getType();return"image"===o?i["default"].createElement("div",{className:"block-atomic-wrapper"},i["default"].createElement("img",{src:n.src}),i["default"].createElement("div",{className:"block-atomic-controls"},i["default"].createElement("button",null,"×"))):i["default"].createElement("p",null,"No supported block for ",o)}},323:3,324:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(325);var u=n(7),c=o(u),s=n(37),f=(n(315),function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.updateData=n.updateData.bind(n),n}return a(t,e),l(t,[{key:"updateData",value:function(e){var t=this.props,n=t.block,o=t.blockProps,r=o.onChangeData,i=n.getData(),a=i.has("checked")&&i.get("checked")===!0,l=i.set("checked",!a);r(n,l)}},{key:"render",value:function(){var e=this.props.block.getData(),t=e.get("checked")===!0;return c["default"].createElement("div",null,c["default"].createElement("input",{type:"checkbox",checked:t,onChange:this.updateData}),c["default"].createElement(s.EditorBlock,this.props))}}]),t}(c["default"].Component));t["default"]=f},325:3,326:function(e,t,n){(function(e,o){function r(e,n){var o={seen:[],stylize:a};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),g(n)?o.showHidden=n:n&&t._extend(o,n),O(o.showHidden)&&(o.showHidden=!1),O(o.depth)&&(o.depth=2),O(o.colors)&&(o.colors=!1),O(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=i),u(o,e,o.depth)}function i(e,t){var n=r.styles[t];return n?"["+r.colors[n][0]+"m"+e+"["+r.colors[n][1]+"m":e}function a(e,t){return e}function l(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function u(e,n,o){if(e.customInspect&&n&&w(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(o,e);return k(r)||(r=u(e,r,o)),r}var i=c(e,n);if(i)return i;var a=Object.keys(n),g=l(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),T(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return s(n);if(0===a.length){if(w(n)){var y=n.name?": "+n.name:"";return e.stylize("[Function"+y+"]","special")}if(E(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(C(n))return e.stylize(Date.prototype.toString.call(n),"date");if(T(n))return s(n)}var b="",v=!1,m=["{","}"];if(h(n)&&(v=!0,m=["[","]"]),w(n)){var O=n.name?": "+n.name:"";b=" [Function"+O+"]"}if(E(n)&&(b=" "+RegExp.prototype.toString.call(n)),C(n)&&(b=" "+Date.prototype.toUTCString.call(n)),T(n)&&(b=" "+s(n)),0===a.length&&(!v||0==n.length))return m[0]+b+m[1];if(0>o)return E(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var S;return S=v?f(e,n,o,g,a):a.map(function(t){return d(e,n,o,g,t,v)}),e.seen.pop(),p(S,b,m)}function c(e,t){if(O(t))return e.stylize("undefined","undefined");if(k(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):y(t)?e.stylize("null","null"):void 0}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,o,r){for(var i=[],a=0,l=t.length;l>a;++a)D(t,String(a))?i.push(d(e,t,n,o,String(a),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(d(e,t,n,o,r,!0))}),i}function d(e,t,n,o,r,i){var a,l,c;if(c=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]},c.get?l=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(l=e.stylize("[Setter]","special")),D(o,r)||(a="["+r+"]"),l||(e.seen.indexOf(c.value)<0?(l=y(n)?u(e,c.value,null):u(e,c.value,n-1),l.indexOf("\n")>-1&&(l=i?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n"))):l=e.stylize("[Circular]","special")),O(a)){if(i&&r.match(/^\d+$/))return l;a=JSON.stringify(""+r),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+l}function p(e,t,n){var o=0,r=e.reduce(function(e,t){return o++,t.indexOf("\n")>=0&&o++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function h(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function y(e){return null===e}function b(e){return null==e}function v(e){return"number"==typeof e}function k(e){return"string"==typeof e}function m(e){return"symbol"==typeof e}function O(e){return void 0===e}function E(e){return S(e)&&"[object RegExp]"===_(e)}function S(e){return"object"==typeof e&&null!==e}function C(e){return S(e)&&"[object Date]"===_(e)}function T(e){return S(e)&&("[object Error]"===_(e)||e instanceof Error)}function w(e){return"function"==typeof e}function B(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function _(e){return Object.prototype.toString.call(e)}function I(e){return 10>e?"0"+e.toString(10):e.toString(10)}function R(){var e=new Date,t=[I(e.getHours()),I(e.getMinutes()),I(e.getSeconds())].join(":");return[e.getDate(),j[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var L=/%[sdj%]/g;t.format=function(e){if(!k(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(r(arguments[n]));return t.join(" ")}for(var n=1,o=arguments,i=o.length,a=String(e).replace(L,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),l=o[n];i>n;l=o[++n])a+=y(l)||!S(l)?" "+l:" "+r(l);return a},t.deprecate=function(n,r){function i(){if(!a){if(o.throwDeprecation)throw new Error(r);o.traceDeprecation?console.trace(r):console.error(r),a=!0}return n.apply(this,arguments)}if(O(e.process))return function(){return t.deprecate(n,r).apply(this,arguments)};if(o.noDeprecation===!0)return n;var a=!1;return i};var M,N={};t.debuglog=function(e){if(O(M)&&(M=o.env.NODE_DEBUG||""),e=e.toUpperCase(),!N[e])if(new RegExp("\\b"+e+"\\b","i").test(M)){var n=o.pid;N[e]=function(){var o=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,o)}}else N[e]=function(){};return N[e]},t.inspect=r,r.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},r.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=g,t.isNull=y,t.isNullOrUndefined=b,t.isNumber=v,t.isString=k,t.isSymbol=m,t.isUndefined=O,t.isRegExp=E,t.isObject=S,t.isDate=C,t.isError=T,t.isFunction=w,t.isPrimitive=B,t.isBuffer=n(328);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",R(),t.format.apply(t,arguments))},t.inherits=n(329),t._extend=function(e,t){if(!t||!S(t))return e;for(var n=Object.keys(t),o=n.length;o--;)e[n[o]]=t[n[o]];return e}}).call(t,function(){return this}(),n(327))},328:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},329:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(306),r=n(37),i=(0,o.Map)({caption:{element:"cite"},"block-quote-caption":{element:"blockquote"},todo:{element:"div"}}).merge(r.DefaultDraftBlockRenderMap);t["default"]=i},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(37),r=o.KeyBindingUtil.hasCommandModifier;t["default"]=function(e){if(r(e)&&83==e.keyCode)return"editor-save";if(e.altKey===!0){if(e.shiftKey===!0)switch(e.keyCode){case 65:return"add-new-block";case 68:return"load-saved-data";case 69:return"toggle-edit-mode";default:return(0,o.getDefaultKeyBinding)(e)}switch(e.keyCode){case 49:return"changetype:ordered-list-item";case 50:return"showlinkinput";case 51:return"changetype:header-three";case 56:return"changetype:unordered-list-item";case 188:return"changetype:caption";case 190:return"changetype:unstyled";case 222:return"changetype:blockquote";default:return(0,o.getDefaultKeyBinding)(e)}}return(0,o.getDefaultKeyBinding)(e)}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{
value:!0}),t.StringToTypeMap=void 0;var o=n(315),r=n(316),i=t.StringToTypeMap={"--":r.Block.BLOCKQUOTE+":"+r.Block.BLOCKQUOTE_CAPTION+":"+r.Block.CAPTION,'""':r.Block.BLOCKQUOTE,"> ":r.Block.BLOCKQUOTE,"''":r.Block.BLOCKQUOTE,"*.":r.Block.UL,"* ":r.Block.UL,"- ":r.Block.UL,"1.":r.Block.OL,"##":r.Block.H2,"==":r.Block.UNSTYLED,"[]":r.Block.TODO};t["default"]=function(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?i:arguments[3],a=e.getSelection(),l=(0,o.getCurrentBlock)(e),u=l.getType(),c=l.getLength();if(a.getAnchorOffset()>1||c>1)return!1;var s=r[l.getText()[0]+t];if(!s)return!1;var f=s.split(":");if(f.length<1||f.length>3)return!1;var d=f[0];if(1==f.length){if(u==f[0])return!1}else if(2==f.length){if(u==f[1])return!1;u==f[0]&&(d=f[1])}else if(3==f.length){if(u==f[2])return!1;d=u==f[0]?f[1]:f[2]}return n((0,o.resetBlockWithType)(e,d)),!0}},333:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.findLinkEntities=void 0;var r=n(7),i=o(r),a=n(37);t.findLinkEntities=function(e,t){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===a.Entity.get(t).getType()},t)};t["default"]=function(e){var t=a.Entity.get(e.entityKey).getData(),n=t.url;return i["default"].createElement("a",{className:"draft-link hint--bottom",href:n,target:"_blank"},e.children)}}});
//# sourceMappingURL=medium-draft.93a63cb3dba7ba442759.js.map