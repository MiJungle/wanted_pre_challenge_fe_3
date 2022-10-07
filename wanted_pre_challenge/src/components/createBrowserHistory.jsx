let globalHistory = window.history;

function createBrowserHistory(){
    let listeners = []

    function push(pathname){
        globalHistory.pushState({},'', pathname)
        notifyListeners(pathname)
    }
    
    function listen(listener){
        listeners.push(listener)
    }
    
    function notifyListeners(...args) {
        listeners.forEach(listener => listener(...args))
    }
    
    window.onpopstate = function(){
        notifyListeners(window.location.pathname)
    }
    return {
        listeners,
        listen,
        push
    }
}
export default createBrowserHistory