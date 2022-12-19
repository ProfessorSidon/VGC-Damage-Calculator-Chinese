var SETDEX_XY = {};
var SETDEX_CUSTOM_XY = {};

var components = [
    SETDEX_SHOWDOWN,
    SETDEX_NUGGETBRIDGE,
    //SETDEX_CUSTOM_XY
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_XY[p] = $.extend(SETDEX_XY[p], sourceDex[p])
            }
        }
    }
}

var reloadXYScript = function()
{
    console.log(SETDEX_CUSTOM_XY);
    components = [
    SETDEX_SHOWDOWN,
    SETDEX_NUGGETBRIDGE,
    SETDEX_CUSTOM_XY
];

for (var i=0; i<components.length; i++) {
    sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_XY[p] = $.extend(SETDEX_XY[p], sourceDex[p])
            }
        }
    }
}
}