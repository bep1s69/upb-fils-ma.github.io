"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1148],{65072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var i=r(17624),s=r(4552);const n={},a="Blackjack Game",c={id:"project/2024/cristian.iacobescu/index",title:"Blackjack Game",description:"Using the Raspberry Pi Pico W to automate the logic for a Blackjack game",source:"@site/docs/project/2024/cristian.iacobescu/index.md",sourceDirName:"project/2024/cristian.iacobescu",slug:"/project/2024/cristian.iacobescu/",permalink:"/docs/project/2024/cristian.iacobescu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/cristian.iacobescu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chicken Invaders",permalink:"/docs/project/2024/antonio.pelmus/"},next:{title:"Radar Secure System",permalink:"/docs/project/2024/cristiana.precup/"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"blackjack-game",children:"Blackjack Game"}),"\n",(0,i.jsx)(t.p,{children:"Using the Raspberry Pi Pico W to automate the logic for a Blackjack game"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Author"}),": Iacobescu Cristian Mario ",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,i.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-MarioMario7.git",children:"https://github.com/UPB-FILS-MA/project-MarioMario7.git"})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This project facilitates a Blackjack game that allows the 'dealer' to use a barcode scanner to input the cards. The project will involve programming the Raspberry Pi Pico W to manage the game logic, display the game interface, and interact with the barcode scanner to read the cards. There are also different behaviors that correspond to different events and game states."}),"\n",(0,i.jsx)(t.p,{children:"The choices for the players will be made using a simple web interface, and communication between the server and the Pico-side logic will be established via socket communication, utilizing the Pico's integrated Wi-Fi module."}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"What pushed me to choose this project was that, while observing a similar approach bring used to facilitate online Blackjack games, I was struck by the innate simplicity of the setup and the use of relatively inexpensive parts being used by multi-million-dollar companies worldwide on a day-to-day basis."}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Raspberry Pi Pico:"})," Used for handling the game logic, controlling the scanner, LEDs, LCD and buzzer. Also for communicating with the server trough the sockets."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Passive Buzzer"})," : Reacts to varying game events."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"RGB LEDs"})," : Reacts to game events / Used to show where the next card should be placed (Player/Dealer)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Barcode Scanner Module(+ RS232 -> TTL Adaptor)"})," : Barcodes are scanned from the cards and are then used for the game logic, if the serial sent matches one of the ones stored in the dictionary and if it wasn't previously scanned in the current round (if any of the conditions are false, it will create a placeholder card object and suspend the game until a rescan is done successfully). The adaptor is needed as the Raspberry Pi Pico W doesn't support RS232 communication. We will use Transistor-To-Transistor Logic communication through the Pico's pins that support UART communication."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Linear Potentiometer + Push Button"}),": The potentiometer is used for choosing the bet for the new round, and the push button is used to confirm the bet and start the round."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"16x02 LCD"}),": Used to display relevant information for pre/current/post game states."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website Interface"})," : Allows the user to select the choices for the game (Insurance, Hit, Stand, Double Down, Split). Communicating with the Pico trough the sockets of the web server to send/recieve information relevant to the current round. The server will run on a local machine, no connections other than the Pico are inteded."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Archictecture Diagram",src:r(56456).c+"",width:"570",height:"467"})}),"\n",(0,i.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,i.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,i.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,i.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,i.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsx)(t.p,{children:"We will use a Raspberry Pi Pico W as the microcontroller. A potentiometer is used for getting the player's 'bet', and a push used to confirm the bet (an RC Filter will be used to ensure no switch bounce happens). The main piece of this project is the barcode scanner, which scans the barcodes from the playing cards and facilitates a way to connect the real-life events to the microcontroller for handling the logic behind the game. An adaptor is needed for it since it uses RS232 communication, which is not supported by the Pico. We also use an LCD to display relevant information, and the RGB LEDs and buzzer to react to game events."}),"\n",(0,i.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"KiCAD Schematic",src:r(73372).c+"",width:"1545",height:"835"})}),"\n",(0,i.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Device"}),(0,i.jsx)(t.th,{children:"Usage"}),(0,i.jsx)(t.th,{children:"Price"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Raspberry Pi Pico W"})}),(0,i.jsx)(t.td,{children:"The microcontroller"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Breadboard830"}),(0,i.jsx)(t.td,{children:"The main breadboard"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/163-kit-breadboard830-65xfire-jumper-sursa-alimentare-335v.html",children:"10 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Linear Potentiometer"}),(0,i.jsx)(t.td,{children:"Set the bet"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/193-potentiometru-10k.html#/96-valoare_rezistenta-10k",children:"2.5 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Push Button"}),(0,i.jsx)(t.td,{children:"Confirm Bet"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/home/97-buton-mic-push-button-trough-hole.html?search_query=push+button&results=30",children:"0.50 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=235",children:"RGB LED"})}),(0,i.jsx)(t.td,{children:"Display player turn and game state"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/271-led-tricolor-cu-catod-comun.html",children:"2.50 x 4 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Barcode Scanner"}),(0,i.jsx)(t.td,{children:"Scan the QR Codes on the cards"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/home/2815-modul-scanner-coduri-de-bare-e2100-rs232.html",children:"80 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=379",children:"RS232 -> TTL Adaptor"})}),(0,i.jsx)(t.td,{children:"Connect the scanner module to the pico"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/1852-modul-fpc-groundstudio.html#/431-numar_pini-12",children:"6 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Buzzer Module (Passive)"}),(0,i.jsx)(t.td,{children:"React to game events"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/home/89-modul-buzzer.html#/63-tip-pasiv",children:"4 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mini Breadboard"}),(0,i.jsx)(t.td,{children:"Breadboard for the LEDs"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/35-breadboard-170-puncte.html#/8-culoare-alb",children:"3 x 4 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=53",children:"1602 LCD Screen with I2C Interface"})}),(0,i.jsx)(t.td,{children:"Display game details"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/lcds/62-1602-lcd-with-i2c-interface-and-yellow-green-backlight.html",children:"15 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Capacitor (1 uF)"}),(0,i.jsx)(t.td,{children:"Debounce button to avoid unwanted input"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://ardushop.ro/ro/home/2708-condensator-electrolitic-alege-valoarea.html?gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZpg3s-VVKIPilWtcM-0Po90QrGbxYJy50oCzWjlC8kihEiA7bCG7GBoCudMQAvD_BwE",children:"0.25 RON"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Library"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Usage"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.rs/heapless/0.8.0/heapless/",children:"heapless"})}),(0,i.jsx)(t.td,{children:"Data structure library"}),(0,i.jsx)(t.td,{children:"Used for String vectors"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-rp/git/rp2040/index.html",children:"embassy_rp"})}),(0,i.jsx)(t.td,{children:"Embassy Hardware Abstraction Layer (HAL) for the Raspberry Pi RP2040 microcontroller"}),(0,i.jsx)(t.td,{children:"Used to program the Pico"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-sync/git/default/index.html",children:"embassy_sync"})}),(0,i.jsx)(t.td,{children:"Synchronization primitives and data structures with async support"}),(0,i.jsx)(t.td,{children:"Used for communicating through different tasks"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://crates.io/crates/embassy-executor",children:"embassy-executor"})}),(0,i.jsx)(t.td,{children:"An async/await executor designed for embedded usage"}),(0,i.jsx)(t.td,{children:"Used for task execution"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.rs/ag-lcd/0.2.0/ag_lcd//",children:"ag_lcd"})}),(0,i.jsx)(t.td,{children:"Library that allows developers to control a HITACHI HD44780 LCD screen with one or two 16-character lines"}),(0,i.jsx)(t.td,{children:"Used to operate the LCD"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.rs/heapless/0.8.0/heapless/",children:"port_expander"})}),(0,i.jsx)(t.td,{children:"Abstraction for I2C port-expanders"}),(0,i.jsx)(t.td,{children:"Used for handling the Pcf8574 I/O Expander"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://meliorgames.com/gambling/live-dealer-online-casinos-recognize-cards/",children:"How do online BJ games work ?"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://how2electronics.com/barcode-qr-code-reader-using-arduino-qr-scanner-module/",children:"Barcode Scanner Project"}),"\r\n..."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},56456:(e,t,r)=>{r.d(t,{c:()=>i});const i=r.p+"assets/images/architecture-236bb1e9bc001587fb1f77c3061d8482.png"},73372:(e,t,r)=>{r.d(t,{c:()=>i});const i=r.p+"assets/images/kicad-d4f3f678c7a4139c765d3194c71ef604.PNG"},4552:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>a});var i=r(11504);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);