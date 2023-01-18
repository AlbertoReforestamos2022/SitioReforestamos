/* Collapse Annual Reports */
const col = document.querySelectorAll('.button__colapse');
const colInfo = document.querySelector('.collapse__info')

function renderCollapse() {
    for(let i = 0; i<col.length; i++) {
        col[i].addEventListener('click', function() {
            this.classList.toggle('active');

            let content = this.nextElementSibling;
            if(content.style.display === "block"){
                content.style.display = "none";
                
            } else {
                content.style.display = "block";
            }
        })
    }
    return; 
}

renderCollapse();


// // Link redes sociales
// const facebook = document.querySelector('.facebook');
// const instagram = document.querySelector('.instagram');
// const linkedIn = document.querySelector('linkedin');
// const twitter = document.querySelector('twitter');
// const tikTok = document.querySelector('.tik-tok');
// const youTube = document.querySelector('.youtube');


// /* Menú Navegación  */
//     const menuReforestamos = document.querySelector('.menu__reforestamos');

//     // Render SVG Menu Donación
//     const renderDonacion = (donar) => {
//         const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//         const iconPath = document.createElementNS(
//             'http://www.w3.org/2000/svg',
//             'path'
//         );

//         iconSVG.setAttribute('width', '25');
//         iconSVG.setAttribute('height', '25');
//         iconSVG.setAttribute('fill', 'currentColor');
//         iconSVG.setAttribute('class', 'bi bi-piggy-bank-fill');
//         iconSVG.setAttribute('viewBox', '0 0 16 16');

//         iconPath.setAttribute('d',
//          'M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
//          );

//         iconSVG.appendChild(iconPath);
//         return donar.appendChild(iconSVG);
//     }

//     const renderAdopta = (adopta) => {
//         const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//         const iconPath = document.createElementNS(
//             'http://www.w3.org/2000/svg',
//             'path'
//         );

//         iconSVG.setAttribute('width', '25');
//         iconSVG.setAttribute('height', '25');
//         iconSVG.setAttribute('fill', 'currentColor');
//         iconSVG.setAttribute('class', 'bi bi-tree-fill');
//         iconSVG.setAttribute('viewBox', '0 0 16 16');

//         iconPath.setAttribute('d',
//          'M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z'
//          );

//         iconSVG.appendChild(iconPath);
//         return adopta.appendChild(iconSVG);     
//     }

//     const renderBoletin = (boletin) => {
//         const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//         const iconPath = document.createElementNS(
//             'http://www.w3.org/2000/svg',
//             'path'
//         );

//         const iconPath2 = document.createElementNS(
//             'http://www.w3.org/2000/svg',
//             'path'            
//         );

//         iconSVG.setAttribute('width', '25');
//         iconSVG.setAttribute('height', '25');
//         iconSVG.setAttribute('fill', 'currentColor');
//         iconSVG.setAttribute('class', 'bi bi-envelope-check-fill');
//         iconSVG.setAttribute('viewBox', '0 0 16 16');

//         iconPath.setAttribute('d',
//          'M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z'
//          );

//         iconPath2.setAttribute('d',
//             'M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z'
//         )

//         iconSVG.appendChild(iconPath);
//         iconSVG.appendChild(iconPath2);
//         return boletin.appendChild(iconSVG);    
//     }


//     const menuDonacion = () => {
//         /* Navegación Donacion .donacion .fixed-top .shadow-none */
//         const navDonacion = document.createElement('nav');
//         navDonacion.classList.add('donacion', 'fixed-top', 'shadow-none');

//         /* div .donacion-icono .container-xl .col .col-sm-12 .d-flex .justify-content-around  */
//         const donacionIconos = document.createElement('div');
//         donacionIconos.classList.add('donacion-icono', 'container-xl', 'col-sm-12', 'd-flex', 'justify-content-around');

//         /* a .navbar-brand .d-flex || SVG Cerdito */
//         const iconoDonacion = document.createElement('a');
//         iconoDonacion.classList.add('navbar-brand', 'd-flex');
//         iconoDonacion.setAttribute('href', 'https://donativos-reforestamosmexico.org/');
//         iconoDonacion.setAttribute('target', '_blank'); 
//         // texto Donación
//         const donacionTexto = document.createElement('p')
//         donacionTexto.classList.add('donar-span', 'ms-2');
//         const donarTxt = document.createTextNode('donar'.toUpperCase());
//         // appendChild icono Donación
//         donacionTexto.appendChild(donarTxt);
//         renderDonacion(iconoDonacion);

//         /* a .navbar-brand .d-flex || SVG Arbolito  */
//        const iconoAdopta = document.createElement('a');
//        iconoAdopta.classList.add('navbar-brand', 'd-flex');
//        iconoAdopta.setAttribute('href', 'adopta-un-arbol.html');
//        iconoAdopta.setAttribute('target', '_blank');
//        // texto Adopta
//        const adoptaTexto = document.createElement('p');
//        adoptaTexto.classList.add('donar-span', 'ms-2');
//        const adoptaTxt = document.createTextNode('!adopta un arbol!'.toUpperCase());
//        // appendChild icono Adopta 
//        adoptaTexto.appendChild(adoptaTxt);
//        renderAdopta(iconoAdopta);


//        /* a .navbar-brand .d-flex || SVG carta */
//        const iconoBoletin = document.createElement('a');
//        iconoBoletin.classList.add('navbar-brand', 'd-flex');
//        iconoBoletin.setAttribute('href', 'http://eepurl.com/h43BpX');
//        iconoBoletin.setAttribute('target', '_blank');
//        // texto boletín
//        const boletinTexto = document.createElement('p');
//        boletinTexto.classList.add('donar-span', 'ms-2');
//        const boletinTxt = document.createTextNode('boletín'.toUpperCase());
//        // appendChild icono Boletín
//        boletinTexto.appendChild(boletinTxt);
//        renderBoletin(iconoBoletin);

//         // Icono Donación
//         iconoDonacion.appendChild(donacionTexto);
//         donacionIconos.appendChild(iconoDonacion);
//         // Icono Adopta
//         iconoAdopta.appendChild(adoptaTexto);
//         donacionIconos.appendChild(iconoAdopta);
//         // Icono Boletín 
//        iconoBoletin.appendChild(boletinTexto);
//        donacionIconos.appendChild(iconoBoletin);
//         // Nav general .
//         navDonacion.appendChild(donacionIconos);
//         menuReforestamos.appendChild(navDonacion);

//         return; 
//     }


//     const menuPrincipal = ()=> {
//         /* Nav principal */
//         const navPrincipal = document.createElement('div');
//         navPrincipal.classList.add('navbar','navbar-expand-xl', 'bg-white', 'shadow-none', 'fixed-top', 'menu');
//         //div .container .d-flex
//         const divMenu = document.createElement('div');
//         divMenu.classList.add('container', 'd-flex');
//         // imagen logo a 
//         const imagenLogo = document.createElement('a');
//         imagenLogo.classList.add('navbar-brand', 'logo');
//         imagenLogo.setAttribute('href', 'index.html')
//         // imagen Logo img
//         const logoImg = document.createElement('img');
//         logoImg.classList.add('img-fluid');
//         logoImg.setAttribute('src', 'img/logo rm 600x315 para web.png');
//         logoImg.setAttribute('alt', 'Logo Reforestamos Méxcio');
//         // appendChild Logo
//         imagenLogo.appendChild(logoImg);

//         /* button haburgesa para menu responsive */
//         const btnMenuResponsive = document.createElement('button');
//         btnMenuResponsive.classList.add('navbar-toggler', 'border-0');
//         btnMenuResponsive.setAttribute('type', 'button');
//         btnMenuResponsive.setAttribute('data-bs-toggle', 'offcanvas');
//         btnMenuResponsive.setAttribute('data-bs-target', '#menuPrincipal');
//         btnMenuResponsive.setAttribute('aria-controls', 'offcanvasNavbarLight')
//         // span btn
//         const btnMenuResponsiveSpan = document.createElement('span');
//         btnMenuResponsiveSpan.classList.add('navbar-toggler-icon');
//         btnMenuResponsive.appendChild(btnMenuResponsiveSpan);
        

//         /* offcavas Menu-Principal */
//         const offCanvaMenu = document.createElement('div')
//         offCanvaMenu.classList.add('offcanvas', 'offcanvas-end', 'mt-0');
//         offCanvaMenu.setAttribute('tabindex', '-1');
//         offCanvaMenu.setAttribute('id', 'menuPrincipal');
//         offCanvaMenu.setAttribute('aria-labelledby', 'offcanvasNavbarLightLabel');
//         // div offCanvaHeader
//         const offCanvaMenuHeader = document.createElement('div');
//         offCanvaMenuHeader.classList.add('offcanvas-header');
//         // button offCanvaHeader
//         const btnOffCanvaMenuHeader = document.createElement('button');
//         btnOffCanvaMenuHeader.setAttribute('type', 'button');
//         btnOffCanvaMenuHeader.classList.add('btn-close');
//         btnOffCanvaMenuHeader.setAttribute('data-bs-dismiss', 'offcanvas');
//         btnOffCanvaMenuHeader.setAttribute('aria-label', 'Close');
//         // appendChild btnOffCanvaMenu - offCanvaMenuHeader
//         offCanvaMenuHeader.appendChild(btnOffCanvaMenuHeader);
//         offCanvaMenu.appendChild(offCanvaMenuHeader);
//         // offcanva body
//         const offCanvaBody = document.createElement('div');
//         offCanvaBody.classList.add('offcanvas-body');
//         offCanvaMenu.appendChild(offCanvaBody);
//         // offcanva body - ul 
//         const offCanvaNavUl = document.createElement('ul');
//         offCanvaNavUl.classList.add('navbar-nav', 'flex-grow-1', 'mx-auto');
//         // nav-item dropdown
//         // nav-item dropdown li - 1  
//         const offCanvaNavItem1 = document.createElement('li');
//         offCanvaNavItem1.classList.add('nav-item', 'dropdown');
//         const offCanvaNavItemA = document.createElement('a');
//         offCanvaNavItemA.classList.add('nav-link', 'dropdown-toggle');
//         offCanvaNavItemA.setAttribute('href', '#');
//         offCanvaNavItemA.setAttribute('data-bs-toggle', 'dropdown');
//         const offcanvaNavItemTxt = document.createTextNode('¿Qué Hacemos?');
//         offCanvaNavItemA.appendChild(offcanvaNavItemTxt);
//         offCanvaNavItem1.appendChild(offCanvaNavItemA);
//         offCanvaNavUl.appendChild(offCanvaNavItem1);
        
//         offCanvaMenu.appendChild(offCanvaNavItemA);
        
        



//         // appendChild Logo
//         divMenu.appendChild(imagenLogo);
//         // appendChild btn 
//         divMenu.appendChild(btnMenuResponsive);
//         // appendChild offcanvaMenu - menu principal
//         divMenu.appendChild(offCanvaMenu);
//         // appendChild

//         // appendChild menu principal - Menu Reforestamos MX
//         navPrincipal.appendChild(divMenu);
//         menuReforestamos.appendChild(navPrincipal);
//         return;
//     }

//     menuDonacion();
//     menuPrincipal();