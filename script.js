let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});

let btn = document.querySelector("#btn");

btn.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
});
btn.addEventListener('mouseup', (e)=>{
    let msg = document.querySelector("#message");
    switch(e.button){
        case 0:
            msg.textContent ="Left mouse button is clicked";
            break;
        case 1:
            msg.textContent = "Middle mouse button is clicked";
            break;
        case 2:
            msg.textContent ="Right mouse button is clicked";
            break;
        default:
            msg.textContent = `Unknown mouse button code : ${e.button}`;
    }

});
document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});

let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('click', (e) => {
            let keys = [];

            if (e.shiftKey) keys.push('shift');
            if (e.ctrlKey) keys.push('ctrl');
            if (e.altKey) keys.push('alt');
            if (e.metaKey) keys.push('meta');

            let msg = document.querySelector('#messageKeys');
            msg.textContent = `Keys: ${keys.join('+')}`;
});

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});//directly click event initiates via parent ul time and memory saved rather than individual targeting

let btun = document.querySelector('.btun');

 btun.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);



const enter = document.querySelector("#enter");
const search = document.querySelector("#search");
const list = document.querySelector("#list");

enter.addEventListener("click", (event) => {
    event.preventDefault();

    const Item = search.value;
    search.value="";

    const lisst = document.createElement("li");
    const lisstText = document.createElement("span");
    const lisstBtn = document.createElement("button");

    lisst.appendChild(lisstText);
    lisstText.textContent= Item;
    lisst.appendChild(lisstBtn);
    lisstBtn.textContent= "Delete";
    list.appendChild(lisst);

    lisstBtn.addEventListener("click", ()=>{
        list.removeChild(lisst);
    });


});