var categoryArray = ['Woodwind', 'Brass', 'Percussion'];

//Multidimensional array for products. Need to be in same order as categories
var productArray = [
  ['Clarinet', 'Flute', 'Oboe','Saxophone'],
  ['Trumpet', 'Trumbone', 'Tuba', 'Baritone'],
  ['Snare', 'Xylophone', 'Timpani', 'Cymbal']
];

//Multidimensional array for prices. Needs to be in the same places as product array
var priceArray = [
  [120,99.99, 201.57,100],
  [200, 300, 400, 288],
  [220.67, 500, 3000, 100]
];

//When a category dropdown is selected this is called
function changedCategory(category)
{ 
  var cartRow = category.closest('.cartRow'); //The row we  are working on
  var product = cartRow.find('.product');
  var price = cartRow.find('.price');
  var quantity = cartRow.find('.quantity');
  var category = cartRow.find('.category');
  var subtotal = cartRow.find('.subtotal');
  
  subtotal.html('0.00');
  price.html('0.00');
  
  if(category.value == '')
  {
    //They haven't selected a category. Stop here
    $(product).html($("<option>Please Select Category First</option>"));
    calculateSubtotal(quantity);
    return;
  }
    
  //Default option
  $(product).html($("<option></option>").attr("value",'').text("Select One"));
  
  //Get the products for the category and add them to the product dropdown in the same row
  var products = productArray[parseInt(category.val())];
  products.forEach(function(item,index){
    $(product).append($("<option></option>").attr("value",index).text(item));
  });
}

function changedProduct(product)
{
  var cartRow = product.closest('.cartRow'); //Row we are working on
  var price = cartRow.find('.price');
  var quantity = cartRow.find('.quantity');
  var category = cartRow.find('.category');
  var subtotal = cartRow.find('.subtotal');
  
  //Calculate the item price
  var itemPrice = priceArray[parseInt(category.val())][parseInt(product.val())]; 
  
  //if product dropdown is on default option parseInt will say it's zero. Check that we have a real product
  if(product.val() == '')
  {
    price.html('0.00');
  }
  else
  {
    price.html(itemPrice); 
  }
  
  //Set subtotals and total
  calculateSubtotal(quantity);
}

//Add a row so we can add a product
function addRow()
{
  //The row everything goes in 
  var row = $('<tr>').addClass('cartRow');
  
  //Inputs we are going to use
  var category = $('<select>').addClass('category').attr('name','category');
  var product = $('<select>').addClass('product').attr('name','product');
  var quantity = $('<input type="text" value="1" class="quantity" name="quantity">');
  
  //Add defaults to dropdowns
  category.html('<option value="">Please Select</option>');
  product.html('<option value="">Please Select Category First</option>');
  
  //Add all the categories we have to the category dropdown
  categoryArray.forEach(function(value, index){
    category.append($('<option>').attr("value",index).text(value + ' Instruments'))
  });
  
  //Add everything to the row
  row.append($('<td>').append(category));
  row.append($('<td>').append(product));
  row.append($('<td>').html('0.00').addClass('price'));
  row.append($('<td>').append(quantity));
  row.append($('<td>').html('0.00').addClass('subtotal'));
  
  //Add the row to the table
  $('#cart').append(row);
}

//Add up all the subtotals and show it as total value
function calculateTotal()
{
  //start at 0
  var total = 0.00;
  
  //Get all the subtotals and add them to total one at a time
  $('.subtotal').each(function(index, element){
    total+= parseFloat($(element).html());
  });
  
  //Show total price with two decimal places
  $(".totalPrice").html(total.toFixed(2));
}

//calculate subtotal for this row
function calculateSubtotal(quantity)
{
  var cartRow = quantity.closest('.cartRow'); //Row we are working on
  var price = cartRow.find('.price');
  var subtotal = cartRow.find('.subtotal');
  var temp = parseInt(quantity.val()) * parseFloat(price.html())
  subtotal.html(temp.toFixed(2)); //show only two decimal places for subtotals
  calculateTotal(); //update totals
}



$( document ).ready(function() {
  //Add a row so we have something to work with
  addRow();

  //hide form till we need to submit
  $('#registration').hide();
  
  //Add functions to #cart so they will be there on the new rows
  $('#cart').on( 'change','.category', function(){changedCategory($(this))});
  $('#cart').on( 'change','.product', function(){changedProduct($(this))});
  $('#cart').on( 'change','.quantity', function(){calculateSubtotal($(this))});
  
  //When add product is clicked we get a new row
  $('#addProduct').on('click', function(){addRow()});

  $('#submit').on('click',function(){
    $('#cart').slideUp(1000, function(){
      $('#registration').slideDown(1000);    
    });
  });
});
