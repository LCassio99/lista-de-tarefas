$('form').on('submit', function (e) {
    e.preventDefault()

    const novaTarefa = $('#nova-tarefa').val()
    const addTarefa = $('<li></li>')

    $(`<li>${novaTarefa}</li>`).appendTo(addTarefa)

    $(addTarefa).appendTo('ul')
    $('#nova-tarefa').val('')
    
})

$('ul').on('click', 'li', function () {
    $(this).wrap('<s>')
    console.log($(this))
})

