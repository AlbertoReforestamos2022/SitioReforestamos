(() => {
    'use strict'
    /* Contendor general bot */
    const botContainer = document.querySelector('.bot');

    /* Render SVG´s */
    // Chat Glove
    const renderSvgChat = (node) => {
        const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        iconSVG.setAttribute('width', '40');
        iconSVG.setAttribute('height', '40');
        iconSVG.setAttribute('fill', 'currentColor');
        iconSVG.setAttribute('class', 'bi bi-chat-left-dots-fill');
        iconSVG.setAttribute('viewBox', '0 0 16 16');

        iconPath.setAttribute('d',
         'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
         );

        iconSVG.appendChild(iconPath);
        return node.appendChild(iconSVG)
    }
    // Chat Header Exit 
    const renderSvgExit = (exit) => {
        const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );
        const iconPath2 = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        iconSVG.setAttribute('width', '25');
        iconSVG.setAttribute('height', '25');
        iconSVG.setAttribute('fill', 'currentColor');
        iconSVG.setAttribute('class', 'bi bi-x-circle');
        iconSVG.setAttribute('viewBox', '0 0 16 16');

        iconPath.setAttribute('d',
         'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
         );

         iconPath2.setAttribute('d',
         'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
         );

        iconSVG.appendChild(iconPath);
        iconSVG.appendChild(iconPath2);
        return exit.appendChild(iconSVG);  
    }
    // Input Send 
    const renderSvgSend = (send) => {
        const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        iconSVG.setAttribute('width', '20');
        iconSVG.setAttribute('height', '20');
        iconSVG.setAttribute('fill', 'currentColor');
        iconSVG.setAttribute('class', 'bi bi-send-fill');
        iconSVG.setAttribute('viewBox', '0 0 16 16');

        iconPath.setAttribute('d',
         'M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z'
         );

        iconSVG.appendChild(iconPath);
        return send.appendChild(iconSVG)
    }

    /* Render Chat */
    // Glove chat
    const renderGloveChat = ()=> {
    /* Contendor boton chat */
    // .container__chat .chat__glove
        const chatGlove = document.createElement('div');
    // .button_chat_glove
        const bottonChatGlove = document.createElement('div');
    // button chat glove
        const bottonChat = document.createElement('button');

    /* ClassList.add */
        chatGlove.classList.add('container__chat', 'chat__glove');
        bottonChatGlove.classList.add('button_chat_glove');
        bottonChatGlove.setAttribute('id', 'chatGlove');
        bottonChat.classList.add('button__chat');

    /* AppendChild´s Glove*/
        bottonChatGlove.appendChild(bottonChat);
        chatGlove.appendChild(bottonChatGlove);
        botContainer.appendChild(chatGlove);
        renderSvgChat(bottonChat);

    return;
    }

    // Body Chat
    const renderChat = ()=> {
        /** Contenedores principales div */
        // Contendor principal .container__chat 
        const containerChat = document.createElement('div');
        containerChat.classList.add('container__chat');
        containerChat.setAttribute('id', 'chat');
        // .chat-header
        const chatHeader = document.createElement('div');
        chatHeader.classList.add('chat-header');
        // .chat-body 
        const chatBody = document.createElement('div');
        chatBody.classList.add('chat-body');
        // .chat-input
        const chatInput = document.createElement('div');
        chatInput.classList.add('chat-input')


        /* Contenedores subprincipales */
        // .chat-header
        const logo = document.createElement('div');
        logo.classList.add('logo');
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'img/logo rm 600x315 para web.png');
        logoImg.classList.add('p-1');
        logoImg.setAttribute('alt', 'Logo RMX');
        logo.appendChild(logoImg);
        
        const title = document.createElement('div');
        title.classList.add('title');

        const exit = document.createElement('div');
        exit.classList.add('exit');
        const buttonExit = document.createElement('button');
        buttonExit.classList.add('exit__button');
        buttonExit.setAttribute('id', 'salir');
        renderSvgExit(buttonExit);
        exit.appendChild(buttonExit)

        chatHeader.appendChild(logo);
        chatHeader.appendChild(title);
        chatHeader.appendChild(exit);


        // .chat-body
        const chatInfo = document.createElement('div');
        chatInfo.classList.add('chat__info');
        
        // .titulo__info
        const listaParrafos = (e) => {
            let contenido;
            let p; 

            for (let i = 0; i < tituloInfo.length; i++) {
                p = document.createElement("p");
                p.classList.add('titulo__info');
                contenido = tituloInfo[i];
                p.appendChild(document.createTextNode(contenido));
                chatInfo.appendChild(p);
            }
            return e;
        }
        listaParrafos(chatInfo);
        
        // .lista
        const ulLista = document.createElement('ul')
        ulLista.classList.add('lista', 'list-unstyled', 'm-0');

        chatBody.appendChild(ulLista);
        const listaopciones = (f) => {

        /** 
            let contenido; 
            let li;
            for(let i=0; i < listaOpciones.length; i++ ){
            li = document.createElement('li');
            contenido = listaOpciones[i].numero + "  " + listaOpciones[i].opcion;
            li.appendChild(document.createTextNode(contenido));
            ulLista.appendChild(li);
            }
        */

            listaOpciones.forEach(listaOpcion => {
                const {numero, opcion} = listaOpcion;
                const opcionHTML = document.createElement('li');

                opcionHTML.textContent = `
                ${numero}: ${opcion}
                `;
                ulLista.appendChild(opcionHTML);
            })

            return f;

        }
        listaopciones(chatBody);
        chatInfo.appendChild(ulLista);



        const elejirOpcion = document.createElement('p');
        elejirOpcion.classList.add('titulo__info', 'text-center');
        const elejirOpcionTexto = document.createTextNode('Escribe un número');
        elejirOpcion.appendChild(elejirOpcionTexto);
        chatInfo.appendChild(elejirOpcion)
        
        chatBody.appendChild(chatInfo);
        

        /* .chat-info */
        // .input-sec 
        const inputSec = document.createElement('div');
        inputSec.classList.add('input-sec');
        // input
        const inputResponse = document.createElement('input');
        inputResponse.setAttribute('type', 'number');
        inputResponse.setAttribute('id', 'txtInput');
        inputResponse.setAttribute('maxlength', '3');
        inputResponse.setAttribute('placeholder', 'Escribe un número');        
        inputSec.appendChild(inputResponse);

        // .send
        const sendbutton = document.createElement('div');
        sendbutton.classList.add('send'); 
        renderSvgSend(sendbutton);

        chatInput.appendChild(inputSec);
        chatInput.appendChild(sendbutton)
        
        /** AppendChild de todos los hijos*/
        containerChat.appendChild(chatHeader);
        containerChat.appendChild(chatBody);
        containerChat.appendChild(chatInput);
        botContainer.appendChild(containerChat);

        return;
    }

    /* Renderización Chat */
    renderGloveChat();
    renderChat();



    /** animation Glove-Container */
    const animationContainer = () => {
        const chat = document.querySelector('#chat');
        const salir = document.querySelector('.exit'); 
        const glove = document.querySelector('.chat__glove');
        const options = document.querySelector('.chat__info');
        const displayNone = 'disNo';
        const displayBlock = 'disBlo';
        const none = 'none';
        const block = 'block'

        chat.classList.add(displayNone);
        options.classList.add(displayNone);

    
        
        glove.addEventListener('click', glovechat => {
            const addChat = document.querySelector('#chat');
            glovechat.preventDefault(); 
        
            addChat.style.display = block;
            
            if(addChat.style.display = block){
                glove.style.display = none;
            }
    
            setTimeout(()=> {
                options.classList.remove(displayNone);
                options.classList.add(displayBlock);
            },1000)
        
        })
        
        salir.addEventListener('click', event =>{
            const removeChat = document.querySelector('#chat');
        
            event.preventDefault();
            removeChat.style.display = none;
            
            if (removeChat.style.display = none) {
                glove.style.display = block; 
            } else {
                glove.style.display = none; 
            }
        
        }); 
    }
    animationContainer();

    /** Chat Response */
    const chatResponse = () => {
        const chatBody = document.querySelector(".chat-body");
        const txtInput = document.querySelector("#txtInput");
        const send = document.querySelector(".send");
        
        send.addEventListener("click", () => renderUserMessage());
        
        txtInput.addEventListener("keyup", (event) => {
          if (event.keyCode === 13) {
            renderUserMessage();
          }
        });
        
        const renderUserMessage = () => {
          const userInput = txtInput.value;
          renderMessageEle(userInput, "user");
          txtInput.value = "";
          setTimeout(() => {
            renderChatbotResponse(userInput);
            setScrollPosition();
          }, 1000);
        };
        
        const renderChatbotResponse = (userInput) => {
          const res = getChatbotResponse(userInput);
          renderMessageEle(res);
        };
        
        const renderMessageEle = (txt, type) => {
          let className = "user-message";
          if (type !== "user") {
            className = "chatbot-message";
          }
          const messageEle = document.createElement("div");
          const txtNode = document.createTextNode(txt);
          messageEle.classList.add(className);
          messageEle.append(txtNode);
          chatBody.append(messageEle);
        };
        
        const getChatbotResponse = (userInput) => {
          return responseObj[userInput] == undefined || false
            ? "Ingresa un número"
            : responseObj[userInput];
        };
        
        const setScrollPosition = () => {
          if (chatBody.scrollHeight > 0) {
            chatBody.scrollTop = chatBody.scrollHeight;
          }
        };
    }

    chatResponse();


































    

})();




