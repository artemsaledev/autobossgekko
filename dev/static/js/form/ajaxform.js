$(document).ready(function() {
          $('.form_sub').click(function(){
              $.ajax({
                  type: "POST", //указываем что метод отправки POST
                  url:"form.php", // указываем адрес обработчика
                  data:$('.form_modal_window').serialize(), //указываем данные которые будут передаваться обработчику
                /* Мы указываем id формы - $('#callbacks'), и методом serialize() забираем значения всех полей. */
                  error:function(){$("#erconts").html("Произошла ошибка!");},
                /* если произойдет ошибка в элементе с id erconts выведется сообщение*/
                  beforeSend: function() {
                      $("#erconts").html("<p style='color: orangered;'>Отправляем данные...</p>");
                  },
                  success: function(result){
                    /* В случае удачной обработки и отправки выполнится следующий код*/
                      $('#erconts').html(result);
                      checkThis();
                  }
              });
              return false;
          });
      });