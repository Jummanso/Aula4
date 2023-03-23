/*Fazer um programa que pede para o usuário entrar
com um nome e, na sequência, o programa imprime na tela os
caracteres que estão em posições pares.*/

nome = "Lucas Moura";
i = 0;
while( i < nome.length){
    if( i%2 == 0){
        console.log(nome[i]);
    }
   
    i = i + 1;
}