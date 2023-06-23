$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        success: function(response) {
            console.log(response)
          if (response == `"success"`) {
            alert('Запрос отправлен');
            // Дополнительные действия при успешной отправке запроса
          } else {
           
            alert('Произошла ошибка');
            // Дополнительные действия при ошибке отправки запроса
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert('Произошла ошибка' + errorThrown);
          
          // Дополнительные действия при ошибке AJAX-запроса
        }
      });
    });
  });