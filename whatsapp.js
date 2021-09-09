    function asignarLink(){
        var txt = document.getElementById('form-text');
        txt = txt.value;
        var txtencoded = encodeURIComponent(txt);
        var link = `https://wa.me/542235224751?text=${txtencoded}`;
        console.log(link);
        var boton = document.getElementById("whatsappLink");
        boton.setAttribute("href", link);
    }