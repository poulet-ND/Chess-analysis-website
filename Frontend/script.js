// import chess

actual_board = [];
board_container = document.getElementById("board container")
piece_container = document.getElementById("piece_container");
piece_style_path = "assets/board area/pieces/classical style (merida)/"
piece_path = {
    "R":piece_style_path+"wR.svg",
    "B":piece_style_path+"wB.svg",
    "N":piece_style_path+"wN.svg",
    "K":piece_style_path+"wK.svg",
    "Q":piece_style_path+"wQ.svg",
    "P":piece_style_path+"wP.svg",
    "r":piece_style_path+"bR.svg",
    "b":piece_style_path+"bB.svg",
    "n":piece_style_path+"bN.svg",
    "k":piece_style_path+"bK.svg",
    "q":piece_style_path+"bQ.svg",
    "p":piece_style_path+"bP.svg"
};

function initialize(){
    let board = [
        {1:"R", 2:"N", 3:"B", 4:"K", 5:"Q", 6:"B", 7:"N", 8:"R"},
        {1:"P", 2:"P", 3:"P", 4:"P", 5:"P", 6:"P", 7:"P", 8:"P"},
        {},
        {},
        {},
        {},
        {1:"p", 2:"p", 3:"p", 4:"p", 5:"p", 6:"p", 7:"p", 8:"p"},
        {1:"r", 2:"n", 3:"b", 4:"k", 5:"q", 6:"b", 7:"n", 8:"r"}
    ];
    return board
};

function show_board(){
    for (let row=0; row<8; row++){
        for(const [column, piece] of Object.entries(actual_board[row])){
            // create element
            piece_img = document.createElement("img");
            // style and position
            piece_img.classList.add("piece");
            piece_img.src = piece_path[piece];
            piece_img.style.top = "calc(min(95vh, 95vw)/8*"+String(row)+")";
            piece_img.style.left = "calc(min(95vh, 95vw)/8*"+String(column-1)+")";
            // drag event
            piece_img.draggable = true;
            piece_img.ondragstart = "piece_dragstart_handler("+row+","+column+")";
            piece_img.ondragend = "piece_dragend_handler(event)";
            // append to board
            piece_container.append(piece_img);
        }
    }
}

function board_click_handler(event){
    // get column end row by Math.floor(MOUSE_POS_RELATIVE_to_BOARD * 8 / BOARD_WIDTH)
    board_rect = board_container.getBoundingClientRect();
    column = Math.floor((event.clientX-board_rect.x)*8/board_container.clientWidth)+1;
    row    = Math.floor((event.clientY-board_rect.y)*8/board_container.clientHeight)+1;
    alert("SAN: "+column+row); // ! Sometimes, the column or row become 9. Let see what kind of bugs it creates
}
function piece_dragstart_handler(event){}
function piece_dragend_handler(event){}

actual_board = initialize();
show_board();
console.log(actual_board);