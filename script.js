// JavaScript source code


function loadChatbox() {

    if ($(".close-box")[0]) {
        // Do something if class exists
        $("#chatBox").removeClass("close-box");
        $("#chatBox").addClass("open-box");
    } else {
        $("#chatBox").addClass("open-box");
    }
}

function unLoadChatbox() {

    if ($(".open-box")[0]) {
        $("#chatBox").removeClass("open-box");
        $("#chatBox").addClass("close-box");
    } else {
        $("#chatBox").addClass("close-box");
    }
}

