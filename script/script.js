//hides a tag

function hide_canvas_inst() {
    document.querySelector("#inst-canvas-holder").style.opacity = 0;
}

setTimeout("hide_canvas_inst()",5000);

//disables right click

document.oncontextmenu =new Function("return false;");

