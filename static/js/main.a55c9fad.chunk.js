(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(255)},136:function(e,t,a){},137:function(e,t,a){e.exports=a.p+"static/media/sp1.b3339c88.png"},138:function(e,t,a){e.exports=a.p+"static/media/scope1.131006b7.png"},139:function(e,t,a){e.exports=a.p+"static/media/scope2.db1fecb6.png"},166:function(e,t){},168:function(e,t){},203:function(e,t){},204:function(e,t){},255:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),i=(a(136),a(9)),c=a(16),s=a(17),u=a(19),m=a(18),h=a(20),d=a(258),b=a(259);function E(e){return l.a.createElement(d.a,null,l.a.createElement(b.a,{fluid:!0},l.a.createElement(d.a,null,l.a.createElement("h1",null,e.title)),l.a.createElement(d.a,null,l.a.createElement("p",null,e.text))))}var p=a(265),f=a(262),v=a(264),g=a(261);function y(e){return l.a.createElement(E,{text:"For those of you who do not know, I absolutely love mathematics, and everything that has to do with the field. That's why I am making my puzzle math based! If it was up to me I would have made it PDE focused, but thats a little unfair. Oh well guess I'll have to settle for a number theory problem instead. P.s: These numbers are a little big, it might be worthwhile to shrink them into smaller pieces.",title:"Math, Numbers, and Algorithms"})}var w=a(79),O=a.n(w),k=a(260),j=a(126),z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={angle:0},e.rotate5=e.rotate5.bind(Object(i.a)(e)),e.rotate10=e.rotate10.bind(Object(i.a)(e)),e.rotate20=e.rotate20.bind(Object(i.a)(e)),e.rotate90=e.rotate90.bind(Object(i.a)(e)),e.reset=e.reset.bind(Object(i.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"rotate5",value:function(){var e=this.state.angle+5;(e>360||e<0)&&(e%=360),this.setState({angle:e})}},{key:"rotate10",value:function(){var e=this.state.angle+10;(e>360||e<0)&&(e%=360),this.setState({angle:e})}},{key:"rotate20",value:function(){var e=this.state.angle+20;(e>360||e<0)&&(e%=360),this.setState({angle:e})}},{key:"rotate90",value:function(){var e=this.state.angle+90;(e>360||e<0)&&(e%=360),this.setState({angle:e})}},{key:"reset",value:function(){this.setState({angle:0})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(k.a,null,l.a.createElement(E,{title:"Programming Is Fun!",text:'Welcome to my puzzle! Fill in the blanks to complete  the hint by using the tool bar!  Hint: You can always hear depressed *** *** students say "LMAO",  but a part of the word is cut off since they must run to class, and sometimes reversed  because they had only one hour of sleep and do not know what they are talking about.  Some students love this phrase so much that they even use it when they program.  They always say it when they complain to you, like "O, LMAO!" (Hint2: answer is 4 digits)'})),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(k.a,null,l.a.createElement("div",{style:{color:"#126BDF",fontweight:"bold",fontSize:"28px",fontFamily:'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'}},"Tool Bar")),l.a.createElement(k.a,null,l.a.createElement("div",{style:{color:"grey"}},"Drag the tools around the map to find hints! You could also rotate the scopes.")),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(d.a,null,l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement(g.a,{onClick:this.rotate5},"Rotate 5 degrees")),l.a.createElement(j.a,null,l.a.createElement(g.a,{onClick:this.rotate10},"Rotate 10 degrees"))),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement(g.a,{onClick:this.rotate20},"Rotate 20 degrees")),l.a.createElement(j.a,null,l.a.createElement(g.a,{onClick:this.rotate90},"Rotate 90 degrees"))),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement(g.a,{onClick:this.reset},"Reset")))))),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement("img",{src:a(137),alt:"Background"}))),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(d.a,null,l.a.createElement(k.a,null,l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement("img",{style:{transform:"rotate(".concat(this.state.angle,"deg)")},src:a(138),alt:"Scope"})))),l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement("img",{style:{transform:"rotate(".concat(this.state.angle,"deg)")},src:a(139),alt:"Scope"})))))))))}}]),t}(l.a.Component);function C(){return l.a.createElement(z,null)}var S=0,T={width:20,marginLeft:"2200%"},x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(i.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.state={value:"",disabled:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.state.disabled||(this.props.answer===this.state.value.toUpperCase()?(S++,console.log(S),this.state.disabled=!0,alert("Correct")):alert("NO"),e.preventDefault())}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.value,style:T,onChange:this.handleChange,disabled:this.state.disabled}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:" ",style:T}))}}]),t}(l.a.Component);function I(e){return 13===e.numCorrect?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null,l.a.createElement("center",null,"314159"))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null,l.a.createElement("center",null,"The secret number will appear here.")))}var H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).key=["S","T","A","T","E","N"," ","I","S","L","A","N","D"],e.hints=["***First Cipher***","D - 12","A - 2","N - 5","I - 7","E - 4","L - 9","space - 6","***Second Cipher***","H - 0","G - 1","G - 3","H - 8","Z - 10","M - 11"],e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{text:"There are two ciphers, that is all. Guess each character and hit the button below to see if that is the correct answer for that box. Hint #1: find where they go. Hint #2: It's opposite day.",title:"What is the WORST place on God's green Earth?"}),l.a.createElement(d.a,null,l.a.createElement(I,{numCorrect:S}),l.a.createElement(k.a,null,this.key.map(function(e){return l.a.createElement(x,{answer:e})}))),this.hints.map(function(e){return l.a.createElement("h3",null,l.a.createElement("center",null,e))}))}}]),t}(l.a.Component);function W(){return l.a.createElement(H,null)}var A=a(266);function D(){return l.a.createElement(A.a,null,["92,842,061",'"156,839',"844,118","3,337","21,229","989",'84,098,626"',"11,122","968,208,014,697","989"].map(function(e,t){return l.a.createElement(A.a.Item,{key:t},l.a.createElement("img",{className:"d-block w-100",src:a(82)}),l.a.createElement(A.a.Caption,null,l.a.createElement("h1",null,e)))}))}var N=a(263),P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(N.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,{id:"contained-modal-title-vcenter"},"Congratulations!")),l.a.createElement(N.a.Body,null,l.a.createElement("h4",null,"You got the answer correct and solved all of our puzzles!")),l.a.createElement(N.a.Footer,null,l.a.createElement(g.a,{onClick:this.props.onHide},"Close")))}}]),t}(l.a.Component),B={background:"transparent",border:"none",padding:"0"};function R(e){return l.a.createElement("div",null,"Welcome! Your timer begins now.",l.a.createElement("br",null),"Your journey has begun! To s",l.a.createElement("button",{style:B,onClick:e.switch},"tart"),", the entrance must be found first. // TODO: fill in intro :D")}var F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(G,{time:this.props.time})))}}]),t}(l.a.Component),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=parseInt(this.props.time);return l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:40}},"Time elapsed: "+("0"+Math.floor(e/3600)).slice(-2)+":"+("0"+Math.floor(e/60)%60).slice(-2)+":"+("0"+e%60).slice(-2)))}}]),t}(l.a.Component),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={page1:!0,time:0,answer:"",hasWon:!1,modalShow:!1},e.toggleHidden=e.toggleHidden.bind(Object(i.a)(e)),e.startTimer=e.startTimer.bind(Object(i.a)(e)),e.stopTimer=e.stopTimer.bind(Object(i.a)(e)),e.comp=e.comp.bind(Object(i.a)(e)),e.startTimer(),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"startTimer",value:function(){var e=this;this.timer=setInterval(function(){return e.setState({time:e.state.time+1})},1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"toggleHidden",value:function(){this.setState({page1:!this.state.page1})}},{key:"comp",value:function(){a(162).verify(this.state.answer,"sha1$c0d128bc$1$4cc4058edddd6aec3b8d0be44dbace5c1f69eec6")&&(this.setState({modalShow:!0}),this.stopTimer())}},{key:"render",value:function(){var e=this;return this.hasWon&&this.stopTimer(),this.state.page1?l.a.createElement("div",null,l.a.createElement(F,{time:this.state.time}),l.a.createElement("div",null,l.a.createElement(R,{switch:this.toggleHidden}))):l.a.createElement("div",null,l.a.createElement(F,{time:this.state.time}),l.a.createElement("div",null,l.a.createElement(p.a,{defaultActiveKey:"home",id:"uncontrolled-tab-example"},l.a.createElement(f.a,{eventKey:"home",title:"Home"},l.a.createElement(E,{title:"Welcome to the Intern's Puzzles!",text:"Welcome to our intern puzzle page! We had  a lot of fun with the boxes, and we wanted to make our own box. Unfortunately, we have absolutely no woodworking skills, only programming skills. As you can see we had to make do with what we had. To solve this puzzle set you must solve all four of our puzzles (in any order), take the sum of all the answers (they should be numbers, so if you get words you're doing it wrong), and then add ##### to the result. That number will be the combination to the lock puzzle. Good luck!"}),l.a.createElement(d.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Group,{controlId:"formAns"},l.a.createElement(v.a.Label,null,"Your Answer"),l.a.createElement(v.a.Control,{type:"ans",placeholder:"Enter answer",onChange:function(t){return e.state.answer=t.target.value}}),l.a.createElement(v.a.Text,{className:"text-muted"},"XD"))),l.a.createElement(g.a,{onClick:this.comp},"Submit"),l.a.createElement(P,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})}}))),l.a.createElement(f.a,{eventKey:"puzzle1",title:"Joe's Puzzle",id:"joesPuzzle"},l.a.createElement(y,null),l.a.createElement(d.a,null,l.a.createElement(D,null))),l.a.createElement(f.a,{eventKey:"puzzle2",title:"Sophie's Puzzle"},l.a.createElement(C,null)),l.a.createElement(f.a,{eventKey:"puzzle3",title:"Mahamadou's Puzzle"},l.a.createElement(W,null)),l.a.createElement(f.a,{eventKey:"puzzle4",title:"Nathan's Puzzle"}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(function(){return l.a.createElement(M,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a.p+"static/media/black.aeb4c53c.jpg"}},[[131,1,2]]]);
//# sourceMappingURL=main.a55c9fad.chunk.js.map