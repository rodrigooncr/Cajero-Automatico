const name =  document.getElementById('name');
const email =  document.getElementById('email');
const password =  document.getElementById('password');
const form =  document.getElementById('form');
const parrafo =  document.getElementById('warnings');
const body =  document.querySelector('body');
const formElements = document.querySelector('.form')
let nameUser = '';
let saldoUser = 0;

form.addEventListener('submit',e=>{
    e.preventDefault();
    let warnings = '';
    let pass = false;
    parrafo.innerHTML = '' ;
    

    
    cuentas.forEach(user =>{

        if(name.value == user.name && email.value== user.mail && password.value == user.pass ){
            pass = true;
            nameUser= user.name;
            saldoUser = user.saldo;
    
        }

       
    })
  

    
    if(pass ==  true){

    
        parrafo.innerHTML = `enter`;
        formElements.style.display = "none";
        form.innerHTML = `<h2>Bienvenido ${nameUser}</h2> <br>`;
        form.innerHTML += `<h2>Tu saldo es $${saldoUser}</h2>`;
        form.innerHTML += '<input type="number" id="deposito">';

        form.innerHTML += ' <button style="margin:2rem">Ingresar monto</button><input type="number" id="retiro" > <button style="margin:2rem">Retirar Monto</button>  </div>'
       
           
         
        form.addEventListener('click',(e)=>{
            e.preventDefault();

            if(e.target.textContent =='Ingresar monto'){

               
               
               if((saldoUser + Number(document.getElementById("deposito").value))>990){
                form.innerHTML = `<h2>Bienvenido ${nameUser}</h2> <br>`;
                form.innerHTML += `<h2>Tu nuevo saldo es $${saldoUser}</h2>`;
                form.innerHTML += '<input type="number" id="deposito">';
                form.innerHTML += ' <button style="margin:2rem">Ingresar monto</button><input type="number" id="retiro" > <button style="margin:2rem">Retirar Monto</button>  </div>'
                form.innerHTML += ' <p>No puedes tener mas de $990 <br> en tu cuenta,intenta <br>con otra cantidad</p>'

               }else{
                saldoUser += Number(document.getElementById("deposito").value);
                form.innerHTML = `<h2>Bienvenido ${nameUser}</h2> <br>`;
                form.innerHTML += `<h2>Tu nuevo saldo es $${saldoUser}</h2>`;
                form.innerHTML += '<input type="number" id="deposito">';
                form.innerHTML += ' <button style="margin:2rem">Ingresar monto</button><input type="number" id="retiro" > <button style="margin:2rem">Retirar Monto</button>  </div>'
                form.innerHTML += ' <p>Deposito exitoso.</p>'
               }
          
            }

            if(e.target.textContent =='Retirar Monto'){

               
               
                if((saldoUser - Number(document.getElementById("retiro").value))<10){
                 form.innerHTML = `<h2>Bienvenido ${nameUser}</h2> <br>`;
                 form.innerHTML += `<h2>Tu nuevo saldo es $${saldoUser}</h2>`;
                 form.innerHTML += '<input type="number" id="deposito">';
                 form.innerHTML += ' <button style="margin:2rem">Ingresar monto</button><input type="number" id="retiro" > <button style="margin:2rem">Retirar Monto</button>  </div>'
                 form.innerHTML += ' <p>No puedes tener menos de $10</p>'
 
                }else{
                 saldoUser -= Number(document.getElementById("retiro").value);
                 form.innerHTML = `<h2>Bienvenido ${nameUser}</h2> <br>`;
                 form.innerHTML += `<h2>Tu nuevo saldo es $${saldoUser}</h2>`;
                 form.innerHTML += '<input type="number" id="deposito">';
                 form.innerHTML += ' <button style="margin:2rem">Ingresar monto</button><input type="number" id="retiro" > <button style="margin:2rem">Retirar Monto</button>  </div>'
                 form.innerHTML += ' <p>Retiro exitoso.</p>'
                }
           
             }
                 
        

          

            
        })
       

   


        
    }else{
        warnings ='Usuario incorrecto.'
        parrafo.innerHTML = warnings;
      
    }




});

