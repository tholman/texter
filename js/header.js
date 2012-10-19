var headers = [document.getElementById('back'), document.getElementById('info-tab')] ;
var headerMouseDown = false;
var headerToggleTimeOut = [];
    
document.addEventListener( 'mousedown', function() {
    headerMouseDown = true;
}, false );
    
document.addEventListener( 'mouseup', function() {
    headerMouseDown = false;
}, false );
    
for (var i = 0; i < headers.length; i++ ) {

    headerToggleTimeOut.push( -1 );
    
    headers[i].addEventListener('mouseover', function() {
    
        if (!headerMouseDown) {

            interval = clearInterval( interval );
            
            var _this = this;
            
            clearTimeout( headerToggleTimeOut );
            
            headerToggleTimeOut[i] = setTimeout( function() {
                _this.setAttribute( 'class', 'open' )
            }, 50 );
        }
                                                 
    }, false);
            
    headers[i].addEventListener('mouseout', function() {

        var _this = this;                    
        
        clearTimeout( headerToggleTimeOut );
        
        headerToggleTimeOut[i] = setTimeout( function() {
            _this.setAttribute( 'class', '' )
        }, 50 );
            
    }, false);                   
}

function pulseHeader() {
        
    if (interval == undefined) { return };    
    headers[1].setAttribute( 'class', 'highlight');
    
    setTimeout( function() {
        if (interval == undefined) { return };
        headers[1].setAttribute( 'class', '');
        
        setTimeout( function() {
            if (interval == undefined) { return };
            headers[1].setAttribute( 'class', 'highlight');
            
            setTimeout( function() {
                if (interval == undefined) { return };
                headers[1].setAttribute( 'class', '');
                                             
            }, 400 );
            
        }, 400 );
        
    }, 400 ); 
}

var interval = setInterval( function() {
    pulseHeader();
}, 10000 );