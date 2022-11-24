$().ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
       const input = $('.input-add').val()
       const addItem = $('<li class="li-add"></li>')
       const linkA = $(`<a href="#" >${input}</a>`).appendTo(addItem);

       $(addItem).appendTo('ul')
       $('.input-add').val('')

      $('a').click(function(){
        $(this).toggleClass('risca');
      })
 
    })
})