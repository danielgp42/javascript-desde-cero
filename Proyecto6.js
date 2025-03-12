document.getElementById('comentario').addEventListener('submit', function(event) {
    event.preventDefault(); //evita que se recargue la pagina

    const comentariotexto = document.getElementById('comentariotexto').value;
    const listacomentarios = document.getElementById('listacomentarios'); 
    if (comentariotexto.trim() !== '') {
        const commentItem = document.createElement('lista');
        commentItem.classList.add('cm');

        const now = new Date();
        const dateTime = now.toLocaleString(); // Obtiene fecha y hora local

        commentItem.innerHTML = `
            <p>${comentariotexto}</p>
            <p class="comment-info">Publicado el ${dateTime} <button class="delete-btn">Eliminar</button></p>
        `;
        listacomentarios.appendChild(commentItem);
        document.getElementById('comentariotexto').value = '';
        commentItem.querySelector('.delete-btn').addEventListener('click', function() {//para borrar comentario
            commentItem.remove();
        });
    }
});
