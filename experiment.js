$(document).ready(function() { 
    
    document.getElementById('start').click();
    var a = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        b,
        el = document.createElement('div');

    for(var i = 0, l = a.length; i < l; i++) {
        if(typeof el.style[a[i]] !== "undefined") {
            b = a[i];
            break;
        }
    }
    
        var angle = 360/60,
            date = new Date(),
            hour = date.getHours() % 12,
            minute = date.getMinutes(),
            second = date.getSeconds(),
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;

        if(b) {
            $('#minute')[0].style[b] = 'rotate('+angle * minute+'deg)';
            $('#second')[0].style[b] = 'rotate('+angle * second+'deg)';
            $('#hour')[0].style[b] = 'rotate('+hourAngle+'deg)';
        }
});
