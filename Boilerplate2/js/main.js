//Exercise on bacbone Collections
var product = Backbone.Model.extend({
     initialize: function (){
         this.render();
    },
    render: function(){
        console.log("This is Backbone model for product");
    }
});

//Creating backbone collection product collection
var productCollection = Backbone.Collection.extend({
    model: product
});

//Adding all the created products in to the collection
var productOne = new productCollection([
    new product({id:"product1",name:"CS"}),
    new product({id:"product2",name:"Brava"}),
    new product({id:"product3",name:"Blazon"}),
    new product({id:"product4",name:"Captiva"})
]);

//Find a product based on attribute from an collection
var findObj = productOne.findWhere({id:"product3"});
if(findObj!=undefined)
    console.log(findObj);
else
    console.log("No such product ivalid attribute entered!");



