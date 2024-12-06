document.addEventListener('DOMContentLoaded',function(){
        
        
        // Seleciona os elementos
        const resultadoDiv = document.getElementById('resultado');
        const btnVerificar = document.getElementById('btnVerificar');

        // Função que verifica se 5 é maior que 2
        function verificar() {
            const valor1 = 5;
            const valor2 = 2;

            // Avalia a condição
            if (valor1 > valor2) {
                resultadoDiv.textContent = "Positivo";
            } else {
                resultadoDiv.textContent = "Negativo";
            }
        }

      
        btnVerificar.addEventListener('click', verificar);
    })