/* Variables initalized, including globals from other js libraries */
/*global $  */

$('#form').validator().on('submit', function (e) {
  console.log(1)
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
    console.log(5)
  } else {
    // everything looks good!
    var json = JSON.stringify($('form').serializeArray())
    console.log()('sometext' + json)
  }
})
