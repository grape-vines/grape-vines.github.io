import { page, render } from './lib.js';

import homeView  from './views/home.js';
import certificatesView from './views/certificates.js';
import organizationsView from './views/organizations.js';
import sortsView from './views/sorts.js';
import questionsView from './views/questions.js';
import contactView from './views/contacts.js';
// import technologyView from './views/technology.js';



const main = document.querySelector('.main-container');


page.start();
page.redirect('/');
page('/',decorateContext, homeView);
page('/index.html',decorateContext, homeView);
page('/home',scrollToTop,decorateContext, homeView);
page('/certificates',scrollToTop,decorateContext,certificatesView);
page('/organizations',scrollToTop,decorateContext,organizationsView);
page('/questions',scrollToTop,decorateContext,questionsView);
page('/sorts',scrollToTop,decorateContext,sortsView);
page('/search',decorateContext,sortsView);
page('/contacts',scrollToTop,decorateContext,contactView);
// page('/technology',scrollToTop,decorateContext,technologyView);



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}

function scrollToTop(ctx, next) {
    window.scrollTo(0, 0);
    next();
}
