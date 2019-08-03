

var input = document.getElementById('itemInput');


input.addEventListener('keypress', function () {

    if (event.keyCode === 13) {
        console.log(input.value);

        var elemento = document.createElement('li');
        elemento.setAttribute('class', 'list-group-item');

        var row = document.createElement('div');
        row.setAttribute('class', 'row');

        var tabcheck = document.createElement('div');
        tabcheck.setAttribute('class','col-1');
        row.appendChild(tabcheck);

        var check = document.createElement('input');
        check.setAttribute('class', 'check');
        check.setAttribute('type', 'checkbox');
        tabcheck.appendChild(check);

        var tabText = document.createElement('div');
        tabText.setAttribute('class','col-8');
        row.appendChild(tabText);
        
        var texto = document.createElement('p');
        texto.innerText = input.value;
        texto.setAttribute('class', 'font-weight-bold');
        tabText.appendChild(texto);

        var tabDel = document.createElement('div');
        tabDel.setAttribute('class','col-1');
        row.appendChild(tabDel);

        var btnDel = document.createElement('span');
        btnDel.setAttribute('type','button');
        btnDel.setAttribute('class','badge badge-pill badge-danger');
        btnDel.innerText = 'X';
        tabDel.appendChild(btnDel);   

        input.value = null;


        check.addEventListener('click', function () {
            if (check.checked) {
                texto.style.textDecoration = 'line-through';  
                texto.style.color = 'gray';
            } else{
                texto.style.textDecoration = 'none';  
                texto.style.color = 'initial';
            }
        });

        btnDel.addEventListener('click', function () {
            elemento.remove();
        });

        var lista = document.querySelector('.list-group');

        elemento.appendChild(row);
        
        lista.appendChild(elemento);
    }
});