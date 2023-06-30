"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2611],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@lokalise/styled/dist/tokens/variants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>e});const e=(t,a,c)=>n=>a["function"==typeof t?t(n):n[t]??c]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,accent:()=>accent,active:()=>active,asALink:()=>asALink,bothIcons:()=>bothIcons,danger:()=>danger,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,extraSmall:()=>extraSmall,large:()=>large,leftIcon:()=>leftIcon,loading:()=>loading,medium:()=>medium,primary:()=>primary,rightIcon:()=>rightIcon,secondary:()=>secondary,small:()=>small,tertiary:()=>tertiary,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/foundations/icons/iconsStoryArray.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const{leftIcon:LeftIconComponent,rightIcon:RightIconComponent,...restArgs}=args,leftIcon=LeftIconComponent?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LeftIconComponent,{}):void 0,rightIcon=RightIconComponent?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RightIconComponent,{}):void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.z,{leftIcon,rightIcon,...restArgs})};const accent=Template.bind({});accent.storyName="Accent",accent.args={appearance:"accent",children:"Accent"},accent.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const danger=Template.bind({});danger.storyName="Danger",danger.args={appearance:"danger",children:"Danger"},danger.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const warning=Template.bind({});warning.storyName="Warning",warning.args={appearance:"warning",children:"Warning"},warning.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const primary=Template.bind({});primary.storyName="Primary",primary.args={variant:"primary",children:"Primary"},primary.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const secondary=Template.bind({});secondary.storyName="Secondary",secondary.args={variant:"secondary",children:"Secondary"},secondary.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const tertiary=Template.bind({});tertiary.storyName="Tertiary",tertiary.args={variant:"tertiary",children:"Tertiary"},tertiary.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const extraSmall=Template.bind({});extraSmall.storyName="Extra Small",extraSmall.args={appearance:"accent",variant:"primary",children:"Extra Small",size:"xs"},extraSmall.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const small=Template.bind({});small.storyName="Small",small.args={appearance:"accent",variant:"primary",children:"Small",size:"sm"},small.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const medium=Template.bind({});medium.storyName="Medium",medium.args={appearance:"accent",variant:"primary",children:"Medium",size:"md"},medium.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const large=Template.bind({});large.storyName="Large",large.args={appearance:"accent",variant:"primary",children:"Large",size:"lg"},large.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const active=Template.bind({});active.storyName="Active",active.args={active:!0,appearance:"accent",variant:"primary",children:"Active"},active.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={disabled:!0,appearance:"accent",variant:"primary",children:"Disabled"},disabled.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const loading=Template.bind({});loading.storyName="Loading",loading.args={children:"Loading",appearance:"accent",variant:"primary",loading:!0},loading.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const asALink=Template.bind({});asALink.storyName="As a Link",asALink.args={href:"https://lokalise.com/",rel:"noreferrer",target:"_blank",children:"Anchor Link"},asALink.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const leftIcon=Template.bind({});leftIcon.storyName="Left icon",leftIcon.args={appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",children:"Left icon"},leftIcon.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const rightIcon=Template.bind({});rightIcon.storyName="Right icon",rightIcon.args={appearance:"accent",variant:"primary",rightIcon:"CircleCheckIcon",children:"Right icon"},rightIcon.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const bothIcons=Template.bind({});bothIcons.storyName="Both icons",bothIcons.args={appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",rightIcon:"CircleCheckIcon",children:"Both icons"},bothIcons.parameters={storySource:{source:"args => {\n  const {\n    leftIcon: LeftIconComponent,\n    rightIcon: RightIconComponent,\n    ...restArgs\n  } = args;\n  const leftIcon = LeftIconComponent ? <LeftIconComponent /> : undefined;\n  const rightIcon = RightIconComponent ? <RightIconComponent /> : undefined;\n  return <Button leftIcon={leftIcon} rightIcon={rightIcon} {...restArgs} />;\n}"}};const componentMeta={title:"Components/Button",parameters:{controls:{sort:"requiredFirst"}},component:_Button__WEBPACK_IMPORTED_MODULE_3__.z,argTypes:{onClick:{action:""},leftIcon:{options:_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i.map((([iconName])=>iconName)),mapping:Object.fromEntries(_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i),control:{type:"select"}},rightIcon:{options:_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i.map((([iconName])=>iconName)),mapping:Object.fromEntries(_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i),control:{type:"select"}}},tags:["stories-mdx"],includeStories:["accent","danger","warning","primary","secondary","tertiary","extraSmall","small","medium","large","active","disabled","loading","asALink","leftIcon","rightIcon","bothIcons"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.z,parameters:{controls:{sort:"requiredFirst"}},argTypes:{onClick:{action:""},leftIcon:{options:_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i.map((([iconName])=>iconName)),mapping:Object.fromEntries(_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i),control:{type:"select"}},rightIcon:{options:_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i.map((([iconName])=>iconName)),mapping:Object.fromEntries(_foundations_icons_iconsStoryArray__WEBPACK_IMPORTED_MODULE_5__.i),control:{type:"select"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Buttons are interactive elements. They are used to perform specific actions in the UI."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { Button } from '@lokalise/louis';\n\nexport default () => <Button>My Button</Button>;\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4028%3A25591",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Button"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Button__WEBPACK_IMPORTED_MODULE_3__.z,sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"warning"})," appearance is used only with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"primary"})," variant and will be removed in the future."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Accent",args:{appearance:"accent",children:"Accent"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Danger",args:{appearance:"danger",children:"Danger"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Warning",args:{appearance:"warning",children:"Warning"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Primary",args:{variant:"primary",children:"Primary"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Secondary",args:{variant:"secondary",children:"Secondary"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Tertiary",args:{variant:"tertiary",children:"Tertiary"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Extra Small",args:{appearance:"accent",variant:"primary",children:"Extra Small",size:"xs"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Small",args:{appearance:"accent",variant:"primary",children:"Small",size:"sm"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Medium",args:{appearance:"accent",variant:"primary",children:"Medium",size:"md"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Large",args:{appearance:"accent",variant:"primary",children:"Large",size:"lg"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Active",args:{active:!0,appearance:"accent",variant:"primary",children:"Active"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Disabled",args:{disabled:!0,appearance:"accent",variant:"primary",children:"Disabled"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Loading",args:{children:"Loading",appearance:"accent",variant:"primary",loading:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"as-a-link",children:"As a Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"As a Link",args:{href:"https://lokalise.com/",rel:"noreferrer",target:"_blank",children:"Anchor Link"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"with-icons",children:"With Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Left icon",args:{appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",children:"Left icon"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Right icon",args:{appearance:"accent",variant:"primary",rightIcon:"CircleCheckIcon",children:"Right icon"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Both icons",args:{appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",rightIcon:"CircleCheckIcon",children:"Both icons"},children:Template.bind({})})]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),theme=__webpack_require__("./src/utils/theme/index.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const isDisabledModifier=style=>(0,modifier.c)((_ref=>{let{isLoading}=_ref;return!isLoading}),styled_components_browser_esm.iv`
			&:disabled {
				${style}
			}
		`),defineAppearance=input=>styled_components_browser_esm.iv`
	// Idle
	${input.idle};

	// Hover
	&:hover:not([disabled]):not([aria-expanded='true']) {
		${input.hover};
	}

	// Pressed
	&:active:not([disabled]):not([aria-expanded='true']),
	&:focus:active:not([disabled]):not([aria-expanded='true']) {
		${input.active};
	}

	// Activated
	${(0,modifier.c)("active",input.active)};

	// Disabled
	${isDisabledModifier(input.disabled)}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"Button__Container",componentId:"sc-wyblvi-0"})(["display:inline-flex;align-items:center;background-color:transparent;border:1px solid transparent;text-decoration:none;vertical-align:middle;border-radius:",";cursor:pointer;position:relative;transition:all ",";box-sizing:border-box;font-family:",";",";"," ",";",";"],(0,theme.S3)("radius.m"),(0,theme.S3)("transition.default"),(0,theme.S3)("font.family.default"),isDisabledModifier(styled_components_browser_esm.iv`
			cursor: not-allowed;
		`),(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			font-size: 11px;
			padding: ${(0,theme.W0)(0,2)};
			height: 20px;
			line-height: 12px;
		`,sm:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(0,3)};
			height: ${(0,theme.S3)("size.height.input.small")};
			${(0,theme.cp)("body.action.caption")};
		`,md:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(0,3)};
			height: ${(0,theme.S3)("size.height.input.default")};
			${(0,theme.cp)("body.action.small")};
		`,lg:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(0,4)};
			height: 45px;
			${(0,theme.cp)("body.action.base")};
		`}),(0,variants.o)("appearance",{accent:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.primary.default")};
				--button-appearance-secondary-color: ${(0,theme.S3)("color.text.action.primary")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.primary.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.primary.hover")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.S3)("color.text.disabled")};
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.disabled")};
				--button-appearance-tertiary-color: ${(0,theme.S3)("color.border.disabled")};
				--button-appearance-quaternary-color: ${(0,theme.S3)("color.background.surface.middle")};
			`}),danger:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.danger.default")};
				--button-appearance-secondary-color: ${(0,theme.S3)("color.text.action.danger")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.danger.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.action.danger.hover")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.S3)("color.text.disabled")};
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.disabled")};
				--button-appearance-tertiary-color: ${(0,theme.S3)("color.border.disabled")};
				--button-appearance-quaternary-color: ${(0,theme.S3)("color.background.surface.middle")};
			`}),warning:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.deprecated.interactive.yellow.idle")};
				--button-appearance-secondary-color: ${(0,theme.S3)("color.deprecated.content.buttonText2")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.deprecated.interactive.yellow.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.S3)("color.deprecated.interactive.yellow.hover")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.S3)("color.text.disabled")};
				--button-appearance-primary-color: ${(0,theme.S3)("color.background.disabled")};
				--button-appearance-tertiary-color: ${(0,theme.S3)("color.border.disabled")};
				--button-appearance-quaternary-color: ${(0,theme.S3)("color.background.surface.middle")};
			`})}),(0,variants.o)("variant",{primary:styled_components_browser_esm.iv`
			background-color: var(--button-appearance-primary-color);
			color: var(--button-appearance-secondary-color);
		`,secondary:styled_components_browser_esm.iv`
			background-color: transparent;
			border-width: 1px;
			border-color: var(--button-appearance-primary-color);
			color: var(--button-appearance-primary-color);

			${isDisabledModifier(styled_components_browser_esm.iv`
					color: var(--button-appearance-secondary-color);
					border: 1px solid var(--button-appearance-tertiary-color);
					background-color: var(--button-appearance-quaternary-color);
				`)}
		`,tertiary:styled_components_browser_esm.iv`
			background-color: transparent;
			border-color: transparent;
			color: var(--button-appearance-primary-color);

			${isDisabledModifier(styled_components_browser_esm.iv`
					color: var(--button-appearance-secondary-color);
				`)}
		`})),Content=styled_components_browser_esm.ZP.span.withConfig({displayName:"Button__Content",componentId:"sc-wyblvi-1"})(["display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;width:100%;"," ",""],(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(1)};
		`,sm:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`,md:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`,lg:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`}),(0,modifier.c)("isHidden",styled_components_browser_esm.iv`
			opacity: 0;
		`)),Text=styled_components_browser_esm.ZP.span.withConfig({displayName:"Button__Text",componentId:"sc-wyblvi-2"})(["position:relative;align-items:center;display:inline-flex;white-space:nowrap;",""],(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			top: 0;
		`,sm:styled_components_browser_esm.iv`
			top: 0;
		`,md:styled_components_browser_esm.iv`
			top: 0;
		`,lg:styled_components_browser_esm.iv`
			top: -1px; // Make text visually centered
		`})),StyledLoadingSign=(0,styled_components_browser_esm.ZP)(LoadingSign.X).withConfig({displayName:"Button__StyledLoadingSign",componentId:"sc-wyblvi-3"})(["font-size:1.3em;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",type="button",appearance="accent",variant="tertiary",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,appearance,variant,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"accent"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"warning"'},{value:'"accent"'}]}},variant:{defaultValue:{value:"tertiary"},description:"Change the button variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Pressable__Root",componentId:"sc-1gn6gwf-0"})(["cursor:pointer;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isAnchor=props=>void 0!==props.href,Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return isAnchor(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{isAnchor.displayName="Pressable",isAnchor.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Button-Button-stories-mdx.17280807.iframe.bundle.js.map