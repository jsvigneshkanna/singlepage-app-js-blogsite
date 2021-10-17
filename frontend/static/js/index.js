import BlogView from './views/BlogView.js'

const navigateTo = url => {
    history.pushState(null, null, url);
}

const router = async () => {
    const routes = [
        { path:'/', view: () => console.log('home view...') },
        { path:'/aboutme', view: () => console.log('aboutme view...') },
        { path:'/experience', view: () => console.log('experience view...') },
        { path:'/blogs', view: BlogView },
        { path:'/portfolio', view: () => console.log('portfolio view...') },
    ]

    const potentialMatch = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let matchRoute = potentialMatch.find(potentialMatch => potentialMatch.isMatch)
    if (!matchRoute) {
        matchRoute = {
            route: routes[0],
            isMatch: true
        }
    }
    const matchView = new matchRoute.route.view();
    document.querySelector('#app').innerHTML = await matchView.getHtml();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})