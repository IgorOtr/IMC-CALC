const calcular = document.getElementById('calcular');

function imc(){        
    const nome = document.getElementById('nome').value; 
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1); 

        let classificacao = ''; 

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }
        else if(valorIMC < 25){
            classificacao = 'no seu peso ideal. Parabêns!'
        }
        else if(valorIMC < 30){
            classificacao = 'levemente acima do seu peso ideal.'
        }
        else if(valorIMC > 30){
            classificacao = 'totalmente acima do seu peso ideal.'
        }
        resultado.textContent = `Olá ${nome}. Seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = 'Preencha todos os campos!';
    }

}

calcular.addEventListener('click', imc);
