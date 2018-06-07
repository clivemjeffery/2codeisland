// TAB: setup
var fullMap = background.backgroundImage;
background.backgroundImage = ':capture_29';
background.backgroundImage = ':capture_26';
background.backgroundImage = ':capture_27';
background.backgroundImage = ':capture_28';
background.backgroundImage = fullMap;
popupAlert('You have arrived at the island.');
background.backgroundImage = ':capture_25';
popupAlert('Now, complete your quest!');
// TAB: scroller
var mapY = 0;
var mapX = 0;
var mapOver = 2;
var mapUnder = 0;
var maps = [
        [
            ':capture_25',
            ':capture_26',
            '',
            ''
        ],
        [
            ':capture_27',
            ':capture_28'
        ],
        [],
        []
    ];
var mapCol = maps[mapX];
var setMap = function () {
    var mapCapture = ':capture_29';
    if (mapX >= mapUnder && mapX < mapOver) {
        print('map X in range');
        mapCol = maps[mapX];
        if (mapY >= mapUnder && mapY < mapOver) {
            print('map Y in range');
            mapCapture = mapCol[mapY];
        }
    }
    print('mapX=' + mapX + ' mapY=' + mapY + ' so map=' + mapCapture);
    background.backgroundImage = mapCapture;
};
// TAB: robo moves
var roboStep = 0.5;
var roboLasty = robo.y;
var roboLastx = robo.x;
this.onKey(UPKEY, function () {
    roboLasty = robo.y;
    robo.y -= roboStep;
    if (ignoreCase(robo.y) != ignoreCase(roboLasty - roboStep)) {
        mapY += 1;
        setMap.call();
        ;
    }
});
this.onKey(DOWNKEY, function () {
    roboLasty = robo.y;
    robo.y += roboStep;
    if (ignoreCase(robo.y) != ignoreCase(roboLasty + roboStep)) {
        mapY -= 1;
        setMap.call();
        ;
    }
});
this.onKey(RIGHTKEY, function () {
    roboLastx = robo.x;
    robo.x += roboStep;
    if (ignoreCase(robo.x) != ignoreCase(roboLastx + roboStep)) {
        mapX += 1;
        setMap.call();
        ;
    }
});
this.onKey(LEFTKEY, function () {
    roboLastx = robo.x;
    robo.x -= roboStep;
    if (ignoreCase(robo.x) != ignoreCase(roboLastx - roboStep)) {
        mapX -= 1;
        setMap.call();
        ;
    }
});