/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.widget( "prodev.card", {
 
    // Default options.
    options: {
        image: "icons/coffee.png",
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
        if(this.options.status == 'BLOCKED')
        {
            status = 'disabled';
        }
        else if(this.options.status == 'OPEN')
        {
            status = '';
        }
        box += '    <button class="ui-btn ui-btn-inline waves-effect waves-button" ' + status + '>';
        box += '        <div class="nd2-card card-media-right card-media-small" id="' + this.options.id + '">';
        box += '            <div class="card-media"><img src="./img/' + this.options.image + '"></div>';
        box += '            <div class="card-title">';
        box += '                <h3 class="card-primary-title">' + this.options.title + this.options.id  + '</h3>';
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
        box += '    <div class="nd2-card card-media-right card-media-small wow fadeInDown" data-id="' + this.options.id  + '">';
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