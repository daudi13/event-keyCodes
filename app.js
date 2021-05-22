
const theContainer = document.querySelector('body');

window.addEventListener('keydown', (e) => {
    theContainer.innerHTML = `<div class="container">
        <div class="showCode" id="showCode">${e.code}</div>
        <div class="meanings">
            <div class="box">
                <p>event.Key</p>
                <div class="box-meaning">
                    <div id="eventKey" class="event">${e.key === ' ' ? 'space': e.key}</div>
                </div>
            </div>
            <div class="box">
                <p>event.Key</p>
                <div class="box-meaning">
                    <div id="eventKeyCode" class="event">${e.keyCode}</div>
                </div>
            </div>
            <div class="box">
                <p>event.Key</p>
                <div class="box-meaning">
                    <div id="eventcode" class="event">${e.code}</div>
                </div>
            </div>
        </div>
    </div>`
    console.log(e);
})