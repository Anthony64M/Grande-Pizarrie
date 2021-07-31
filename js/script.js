$(document).ready(function(){
    $ (function(){
        $("#pizza"). change(function(){
            let pizzaFlavour = $("#pizza option:selected").text();
            $(".data ul").append("<li>" + "PIZZA FLAVOUR:  "+  pizzaFlavour  + "</li>");
        })
})
function Pizza(size, crust, toppings, number){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
};

Pizza.prototype.price = function(){
    let total = (this.size +this.crust +this.toppings)* this.number;
    return total;
}

// $(document).ready(function(){
//     $ (function(){
//         $("#pizza"). change(function(){
//             let pizzaFlavour = $("#pizza option:selected").text();
//             $(".data ul").append("<li>" + "PIZZA FLAVOUR:  "+  pizzaFlavour  + "</li>");
//         })
// })
$(function(){
    $("#size"). change(function(){
      let pizzaSize = $("#size option:selected").text();
      $(".data ul").append("<li>" + "PIZZA SIZE:   " +   pizzaSize + "</li>");
    })
  })
  $(function(){
    $("#crust"). change(function(){
      let fevCrust = $("#crust option:selected").text();
      $(".data ul").append("<li>" + "CRUST:   " +   fevCrust + "</li>");
    })
  })
  $(function(){
    $("#toppings"). change(function(){
      let fevToppings = $("#toppings option:selected").text();
      $(".data ul").append("<li>" + "TOPPINGS:  " +  fevToppings + "</li>");
    })
  })
  $("#pizzaOrder").submit(function(event){
    event.preventDefault();
    let size = parseInt($("#size").val());
    let crust = parseInt($("#crust").val());
    let toppings = parseInt($("#toppings").val());
    let number = parseInt($("#number").val());
    let userPizza = new Pizza(size,crust,toppings, number);

    $(".pizz ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");
    $(".pizz li").remove();
    $(".pizz ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");

    });

});

$(".deliver").click(function () {
  $('.data').slideUp();
  $('.deliver').hide();
  $('.delivernot').hide();
  $('.cdata-overlay form').show();
});


$(".delivernot").click(function () {
$(alert("Thank you, Grande is processing your order"));

});
