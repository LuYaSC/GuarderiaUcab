/**
 * Ajax action to api rest
*/
function ajustes(){
  $.ajax({
    type : "POST",
    url : "api/ajustes/editar",
    data : $('#ajustes_form').serialize(),
    success : function(json) {
      alert(json.success);
      alert(json.message);
      if(json.success == 1) {
        setTimeout(function(){
            location.reload();
        },1000);
      }
    },
    error : function(xhr, status) {
      alert('Ha ocurrido un problema.');
    }
  });
}

/**
 * Events
 *  
 * @param {*} e 
 */
$('#ajustes').click(function(e) {
  e.defaultPrevented;
  ajustes();
});
$('#ajustes_form').keypress(function(e) {
    e.defaultPrevented;
    if(e.which == 13) {
        ajustes();
    }
});