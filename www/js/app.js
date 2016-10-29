/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.widget( "prodev.card", {
 
    // Default options.
    options: {
        image: "./img/icons/coffee.png",
        title: "Comida",
        text: "fecha",
        type : "",        
        status: "BLOCKED",
        id : "",
        html: ""
    },
 
    _create: function() {
        var box = '';
        var status = 'disabled';
        if(this.options.registered != true)
        {
            status = '';
        }
        box += '    <button class="ui-btn ui-btn-inline waves-effect waves-button btn-card data-card="opciones" " ' + status + ' data-id="' + this.options.id  + '">';
        box += '        <div class="nd2-card card-media-right card-media-small wow fadeInDown" id="' + this.options.id + '">';
        box += '            <div class="card-media"><img src="' + this.options.image + '"></div>';
        box += '            <div class="card-title">';
        box += '                <h3 class="card-primary-title">' + this.options.title + '</h3>';
        box += '                <h6 class="card-subtitle">' + this.options.text + '</h6>';
        box += '            </div>';
        box += '        </div>';
        box += '    </button>';

        //this.element.append(box);
        this.options.html = box;
    }
 
});

$.widget( "prodev.avatar", {
 
    // Default options.
    options: {
        image: "./img/logo.png",
        title: "Nombre no disponible",
        text: "Información no disponible",
        type : "",
        id : "",
        html: ""
    },
 
    _create: function() {
        var box = '';
        box += '    <div class="nd2-card card-media-right card-media-small wow fadeInDown" data-card="persona" data-id="' + this.options.id  + '">';
        box += '        <div class="card-media"><img src="' + this.options.image + '"></div>';
        box += '        <div class="card-title">';
        box += '            <h3 class="card-primary-title">' + this.options.title + '</h3>';
        box += '            <h6 class="card-subtitle">' + this.options.text + '</h6>';
        box += '        </div>';
        box += '    </div>';

        //this.element.append(box);
        this.options.html = box;
    }
 
});

/*
 * jQuery UI Autocomplete HTML Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 */
(function( $ ) {

var proto = $.ui.autocomplete.prototype,
	initSource = proto._initSource;

function filter( array, term ) {
	var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
	return $.grep( array, function(value) {
		return matcher.test( $( "<div>" ).html( value.label || value.value || value ).text() );
	});
}

$.extend( proto, {
	_initSource: function() {
		if ( this.options.html && $.isArray(this.options.source) ) {
			this.source = function( request, response ) {
				response( filter( this.options.source, request.term ) );
			};
		} else {
			initSource.call( this );
		}
	},

	_renderItem: function( ul, item) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( $( "<a></a>" )[ this.options.html ? "html" : "text" ]( item.label ) )
			.appendTo( ul );
	}
});

})( jQuery );