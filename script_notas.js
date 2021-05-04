function exibir(){

       // capturar os campos
    
       var txtNome = document.getElementById('txtNome');
       var txtNota1 = document.getElementById('txtNota1');
       var txtNota2 = document.getElementById('txtNota2');
       var txtNota3 = document.getElementById('txtNota3');
       var txtNota4 = document.getElementById('txtNota4');
       var outResultado = document.getElementById('outResultado');

       // capturar os valores
        var Nome = txtNome.value;
       var Nota1 = Number(txtNota1.value);
       var Nota2 = Number(txtNota2.value);
       var Nota3 = Number(txtNota3.value);
       var Nota4 = Number(txtNota4.value);

       var NotaRec;
       var resultado = (Nota1 + Nota2 + Nota3 + Nota4) / 4;
       // construcao
    
        
       if(Nota1 + Nota2 + Nota3 + Nota4 >= 28){
           alert('Parabéns '  +Nome+  ' você foi aprovado, sua média foi : ' +resultado+ '.')
       }
       else{
           prompt( ' Você está de recuperação, sua média foi ' +resultado+ '. Digite a nota da recuperação:' ) 
       }

    //    if(NotaRec >= 7){
    //         alert('aprovado')
       
          
    //    return;

       
       
           
            
           
       

       
       
        
 
      
 
      







}


document.getElementById('btnExibir').addEventListener('click', exibir);