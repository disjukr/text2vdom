(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7OsV":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return p}));var o=n("Fcif"),b=n("dV/x"),a=(n("mXGw"),n("/FXl")),c=n("TjRS");n("aD51");const r=["components"],i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!Object.prototype.hasOwnProperty.call(i,"__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});const m={_frontmatter:i},l=c.a;function p(t){let{components:e}=t,n=Object(b.a)(t,r);return Object(a.b)(l,Object(o.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"text2vdom"},"text2vdom"),Object(a.b)("p",null,"jsx스럽게 생긴 문자열을 파싱하여 React 노드로 변환해줍니다."),Object(a.b)("p",null,"번역텍스트 사이에 리액트 컴포넌트를 끼워넣고 싶은 경우에 사용하기 위해 만들었습니다."),Object(a.b)("h2",{id:"설치하기"},"설치하기"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install text2vdom\n")),Object(a.b)("h2",{id:"사용법"},"사용법"),Object(a.b)("p",null,"DEMO: ",Object(a.b)("a",{parentName:"p",href:"https://disjukr.github.io/text2vdom"},"https://disjukr.github.io/text2vdom")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import $ from 'text2vdom';\n\nconst text = `\n    react-dom에서 <b>기본 지원되는 태그는</b> 바로 사용할 수 있습니다.<br/>\n    <b>중첩된 <i>태그 사용</i></b>도 지원됩니다.<br/>\n    부등호를 쓰고싶으면 &lt;이렇게&gt; 사용해야합니다.<br/>\n    애트리뷰트는 쌍따옴표를 두르는 경우가 허용됩니다만,\n    그 정도로 복잡한 표현이 필요하다면 <my-tag>커스텀 태그</my-tag>를 사용하세요.<br/>\n    애트리뷰트 안에서 쌍따옴표를 사용하고 싶으면 \"&quot;이렇게&quot; 사용해야합니다.\"<br/>\n    다른 html 엔티티를 지원하지는 않습니다.\n`;\n\nconst MyComponent = () => <div>\n    { $(text, {\n        'my-tag': ({ children }) => <a href='https://github.com/disjukr'>\n            { children }\n        </a>,\n    }) }\n</div>;\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-0b314273a91266d5a744.js.map