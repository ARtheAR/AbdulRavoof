//hides a tag

function hide_canvas_inst() {
    document.querySelector("#inst-canvas-holder").style.opacity = 0;
}

setTimeout("hide_canvas_inst()",5000);

//disables right click

document.oncontextmenu =new Function("return false;");

//scroll effect (opacity)

function hide_element(i) {
    window.addEventListener("scroll",()=>{
        let content = i
        let current_position = content.getBoundingClientRect().top;
        let screen_position = window.innerHeight;
        if (current_position < screen_position) {
            content.classList.add("active");
        }
        else {
            content.classList.remove("active");
        }
    });  
}

let headings_sub = document.querySelector(".headings-sub");
let headings = document.querySelector(".headings");
let timeline_subt = document.querySelector(".timeline_subt");

hide_element(headings_sub);
hide_element(headings);
hide_element(timeline_subt);