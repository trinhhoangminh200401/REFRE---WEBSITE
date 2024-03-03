import About from './pages/About.js';
import DetailNew from './pages/DetailNew.js';
import HomePage from './pages/Homepage.js';
import Natural from './pages/Natural.js';
import News from './pages/News.js';
import Product from './pages/Product.js';
import QNA from './pages/Qna.js';
import Quiz from './pages/Quiz.js';
import Whitening from './pages/Whitening.js';
 import Policy from './pages/Policy.js';

function handlePageLogic (currentPage)
{

    switch (currentPage)
    {
                 
          case `NewDetail.html`:
            const detailNew = new DetailNew() 
            detailNew.inititiallize()
            break;
        case ``:
        case `index.html`:
            const homepage = new HomePage()
            homepage.initialize()
            break;
        case`about.html`:
        case `About.html`:
            const about = new About();
            about.init();
            break;
        case`natural.html`:
        case `Natural.html`:
            const natural = new Natural()
            natural.initialize()
            break;
        case`whitening.html`:
        case `Whitening.html`:
            const whitening = new Whitening()
            whitening.initialize()
            break;
        case `Quiz.html`:
            const quiz = new Quiz()
            quiz.initialize()
            break;
        case `News.html`:
            const news = new News()
            news.initialize()
            break;
        case `Product.html`:
            const product = new Product()
            product.initialize()
        case `QnA.html`:
            new QNA()
            break;
        case `Policy.html`:
        case `Partner.html`:
        case `PaymentPolicy.html`:
        case `PolicyOnline.html`:    
        case `PolicyRegcognize.html`:
        case `PolicySecure.html`:
            new Policy()
            break;
        
        default:
        
    }
}

function checkPageContext() {
    const currentPage = window.location.href;
    
    if (currentPage === 'https://gilded-sunflower-1080d8.netlify.app/') {
        handlePageLogic('index.html'); 
    } else {
        const currentPagePath = currentPage.split('/').pop();
        handlePageLogic(currentPagePath); // Xử lý trang hiện tại
    }
}

checkPageContext();

