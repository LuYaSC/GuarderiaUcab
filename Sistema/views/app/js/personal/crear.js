
/**
 * Ajax action to api rest
*/
function crear_empleado(){
    $.ajax({
      type : "POST",
      url : "api/personal/crear",
      data : $('#crear_personal_form').serialize(),
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
  $('#crear_personal').click(function(e) {
    e.defaultPrevented;
    crear_empleado();
  });
  $('#crear_personal_form').keypress(function(e) {
      e.defaultPrevented;
      if(e.which == 13) {
          crear_empleado();
      }
  });
