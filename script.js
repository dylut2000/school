
function send(action) {

    const id = document.getElementById('number').value;

    const ui_data = { action, id };

   $.post("http://localhost:3000/", ui_data)
   .done(function(data) {
        console.log(data);
   });
}