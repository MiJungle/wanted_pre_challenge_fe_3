import React from "react";

function Link({to, children}){
    function preventReload(event){
        event.preventDefault();
        window.history.pushState({},"",to);
        const navigationEvent = new PopStateEvent("navigate");
        window.dispatchEvent(navigationEvent)
    }

    return (
        <a href={to} onClick = {preventReload}>
            {children}
        </a>
    );
};

export default Link;
