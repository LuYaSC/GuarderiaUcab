/**
 * Ajax action to api rest
*/
function crear_asistencia(){
    $.ajax({
      type : "POST",
      url : "api/asistencias/crear",
      data : $('#crear_asistencia_form').serialize(),
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
  $('#crear_asistencia').click(function(e) {
    e.defaultPrevented;
    crear_asistencia();
  });
  $('#crear_asistencia_form').keypress(function(e) {
      e.defaultPrevented;
      if(e.which == 13) {
          crear_asistencia();
      }
  });