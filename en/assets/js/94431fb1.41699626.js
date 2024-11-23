"use strict";(self.webpackChunkcloud_learnc=self.webpackChunkcloud_learnc||[]).push([[1909],{9818:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"tutorial-extras/quiz","title":"How To Add A Quiz","description":"How to add a Quiz for the IOTA Wiki.","source":"@site/docs/tutorial-extras/quiz.mdx","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/quiz","permalink":"/learn/en/docs/tutorial-extras/quiz","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/quiz.mdx","tags":[{"inline":true,"label":"how to","permalink":"/learn/en/docs/tags/how-to"}],"version":"current","frontMatter":{"tags":["how to"],"description":"How to add a Quiz for the IOTA Wiki.","image":"/img/iota-wiki.png"},"sidebar":"tutorialSidebar","previous":{"title":"Slidev","permalink":"/learn/en/docs/tutorial-extras/slidev"},"next":{"title":"Planning","permalink":"/learn/en/docs/category/planning"}}');var r=s(4848),o=s(8453),i=s(9034);const a=JSON.parse('[{"questionText":"What is the capital of France?","answerOptions":[{"answerText":"New York","isCorrect":false},{"answerText":"London","isCorrect":false},{"answerText":"Paris","isCorrect":true},{"answerText":"Dublin","isCorrect":false}]},{"questionText":"Who is CEO of Tesla?","answerOptions":[{"answerText":"Jeff Bezos","isCorrect":false},{"answerText":"Elon Musk","isCorrect":true},{"answerText":"Bill Gates","isCorrect":false},{"answerText":"Tony Stark","isCorrect":false}]},{"questionText":"The iPhone was created by which company?","answerOptions":[{"answerText":"Apple","isCorrect":true},{"answerText":"Intel","isCorrect":false},{"answerText":"Amazon","isCorrect":false},{"answerText":"Microsoft","isCorrect":false}]},{"questionText":"How many Harry Potter books are there?","answerOptions":[{"answerText":"1","isCorrect":false},{"answerText":"4","isCorrect":false},{"answerText":"6","isCorrect":false},{"answerText":"7","isCorrect":true}]}]'),c={tags:["how to"],description:"How to add a Quiz for the IOTA Wiki.",image:"/img/iota-wiki.png"},l="How To Add A Quiz",u={},d=[{value:"Example Quiz",id:"example-quiz",level:2},{value:"Add Your Quiz",id:"add-your-quiz",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-add-a-quiz",children:"How To Add A Quiz"})}),"\n",(0,r.jsx)(t.p,{children:"You can simply add a Quiz to every page you like in the Wiki!"}),"\n",(0,r.jsx)(t.h2,{id:"example-quiz",children:"Example Quiz"}),"\n",(0,r.jsx)(i.A,{questions:a}),"\n",(0,r.jsx)(t.h2,{id:"add-your-quiz",children:"Add Your Quiz"}),"\n",(0,r.jsx)(t.p,{children:"Just add the following lines on top of the page."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import Quiz from '@site/src/components/Quiz';\nimport questions from './example-questions.json';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Make sure that the Quiz path fits your folder structure. You may need to remove or add some ",(0,r.jsx)(t.code,{children:"../"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Add your questions in a seperate ",(0,r.jsx)(t.code,{children:".json"})," file with the following format:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "questionText": "First Question?",\n    "answerOptions": [\n      { "answerText": "1. Answer", "isCorrect": false },\n      { "answerText": "2. Answer", "isCorrect": false },\n      { "answerText": "3. Answer", "isCorrect": true },\n      { "answerText": "4. Answer", "isCorrect": false }\n    ]\n  },\n  ...\n]\n'})}),"\n",(0,r.jsx)(t.p,{children:"Now you need to include the Quiz components where you want to show it"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\n## Your Quiz\n\n<Quiz questions={questions} />\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"That's all. Congratulations, you have created your own Quiz!"})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9034:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(6540),r=s(4848);function o(e){const{questions:t}=e;(0,n.useEffect)((()=>{setTimeout((()=>{h()}),1e3)}),[t]);const[s,o]=(0,n.useState)(0),[i,a]=(0,n.useState)(!1),[c,l]=(0,n.useState)(0),[u,d]=(0,n.useState)(-1),h=()=>{a(!1),l(0),o(0)};return(0,r.jsx)("div",{className:"app",children:i?(0,r.jsxs)("div",{className:"score-section",children:[(0,r.jsxs)("p",{children:["You scored ",c," out of ",t.length]}),(0,r.jsx)("a",{className:"button button--outline button--primary",onClick:()=>h(),children:"Replay"})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsxs)("h3",{children:["Question ",s+1,"/",t.length]})}),(0,r.jsx)("div",{className:"card__body",children:t[s]?.questionText}),(0,r.jsx)("div",{className:"card__footer",children:t[s]?.answerOptions.map(((e,n)=>(0,r.jsx)("button",{className:`button button--block button--primary margin-bottom--xs   ${u>=0&&e.isCorrect?"button--success":""} ${u!==n||e.isCorrect?"":"button--danger"}`,onClick:()=>((e,n)=>{d(n),e&&l(c+1),setTimeout((()=>{const e=s+1;e<t.length?o(e):a(!0),d(-1)}),1e3)})(e.isCorrect,n),children:e.answerText},"answer-"+n)))})]})})})}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);