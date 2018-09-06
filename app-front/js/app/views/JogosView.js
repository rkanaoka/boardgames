class JogosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }


    template(model) {
        console.log(model.jogos);
        return `
            <ul class="collection">
                ${model._jogos.map(n => `

                    <li id="${n.id}" class="collection-item avatar">
                        <img src="${n.imgUrl}" alt="" class="circle">
                        <span class="title">${n.titulo}</span>
                        <p>First Line <br>
                        Second Line
                        </p>
                        <a href="#" class="waves-effect waves-light btn" onclick="jogosController.removeJogo(event)">Remover</a>
                    </li>
                    
                `).join('')}
            </ul>
        `;
    }
}
