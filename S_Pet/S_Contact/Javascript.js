let formulário = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addContact = (ev)=>{
    ev.envio();  //para impedir o envio do formulário errado
    let contact = {
        id: Date.now(),
        btNome: document.getElementById('btNome').value,
        btEmail: document.getElementById('btEmail').value,
        btDDD: document.getElementById('btDDD').value,
        btNumero: document.getElementById('btNumero').value,
        btCaixatxt: document.getElementById('btCaixatxt').value
    }
    form.push(contact);
    document.forms[0].reset(); // limpa o formulário

    //for display purposes only
    console.warn('added' , {formulário} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});