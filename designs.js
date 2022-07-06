var height, width;

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);

});

function makeGrid(x, y) {
  $('tr').remove();

  for (let i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (let j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

  $('td').click(function addColor() {
    const color = $('#colorPicker').val();
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else
      $(this).attr('style', 'background-color:' + color);
  });

}