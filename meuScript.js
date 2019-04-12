window.onload = () => {
    // 1- Mostre um alerta com o número de caracteres de uma string
    const variavelClique = document.querySelector('.cliqueDoBotao');
    const guardarNome = 'Felipe Passos';

    variavelClique.addEventListener('click', () => {
        alert(guardarNome.length);
    });
    // 2 - Ligue e desligue uma lampada mudando seu src
    const variavelLampadaOff = document.querySelector('#off');
    const variavelLampadaOn = document.querySelector('#on');
    const mudarLampada = document.querySelector('.lampada');

    variavelLampadaOff.addEventListener('click', () => {
        mudarLampada.src = 'img/off.jpg';
    });

    variavelLampadaOn.addEventListener('click', () => {
        mudarLampada.src = 'img/on.jpg';
    });

    // 3 - Mude agora o src da imagem ao passar o mouse na lampada
    const mudarLampada2 = document.querySelector('.lampadaOver');

    mudarLampada2.addEventListener('mouseover', () => {
        mudarLampada2.src = 'img/on.jpg';
    });

    mudarLampada2.addEventListener('mouseout', () => {
        mudarLampada2.src = 'img/off.jpg';
    });


    // 4- Alerta em nome e sobrenome colocados
    const meuAlerta = document.querySelector('.alerta');

    meuAlerta.addEventListener('click', () => {
        const meuNome = document.querySelector('#nome').value;
        const meuSobrenome = document.querySelector('#sobrenome').value;

        alert('Olá, ' + ' ' + meuNome + ' ' + meuSobrenome);
    });

    // 5- Soma de dois inputs e colocar no resultado
    const meuBotaoSomar = document.querySelector('.botaoSomar');

    meuBotaoSomar.addEventListener('click', () => {
        const soma1 = parseFloat(document.getElementById('soma').value, 10);
        const soma2 = parseFloat(document.getElementById('soma2').value, 10);
        const resultado = document.querySelector('#resultado');
        resultado.value = soma1 + soma2;
    });

    // 6- Mudar cor do background-color
    const pMudarCor = document.querySelector('#cor');
    const botaoVerde = document.querySelector('.verde');
    const botaoVermelho = document.querySelector('.vermelho');

    botaoVerde.addEventListener('click', () => {
        pMudarCor.style.backgroundColor = 'green';
    });

    botaoVermelho.addEventListener('click', () => {
        pMudarCor.style.backgroundColor = 'red';
    });

    // 7 - Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    // E Exiba a quantidade/comprimento que ele tem com a função .length
    const deuses = ['Aegir', 'Aud', 'Balder'];
    console.log(deuses.length);

    // 8 - E exiba um a um com alert()
    // De preferencia para laços de repetição (for, forEach, while, do{}while)
    const mostrarUmAUm = () => {
        deuses.forEach((element) => {
            alert(element);
        });
    };
    const botaoDeuses = document.querySelector('#botaoDeuses');
    botaoDeuses.addEventListener('click', () => {
        mostrarUmAUm();
    });
    // 9 - Map
    const mostrarComMap = () => {
        deuses.map(element => alert(element));
    };
    const botaomap = document.querySelector('#botaomap');
    botaomap.addEventListener('click', () => {
        mostrarComMap();
    });

    // 10 - Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push()
    deuses.push('Loki', 'Odin', 'Frey');
    console.log(deuses);

    // 11 - Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função .length

    // 12 - Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
    // E exiba de forma crescente @dica: .sort
    const numbers = [5, 7, 1, 8, 9];
    numbers.sort();
    console.log(numbers);

    // 13 - Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
    // E exiba de forma decrescente.
    numbers.sort((a, b) => b - a);

    // 14 - Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
    const deuses2 = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
    document.querySelector('#nomes').innerHTML = deuses2;

    // 15
    // const repetir = () => {
    //     for (let i = 0; i <= 10; i++) { // eslint-disable-line no-plusplus
    //         document.querySelector('#repeticao').innerHTML = 'repetição';
    //     }
    // };

    // 16 - data e hora
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    var diaMesAno = dia + '/' + '/' + (mes+1) + '/' + ano;

    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    var horaMinSeg = hora + ':' + min + ':' + seg;

};