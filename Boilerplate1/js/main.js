//Exercise on bacbone models
var product = Backbone.Model.extend({
     initialize: function (){
    },
    getProductDescription:function(){
        var x = this.get("id")+" "+this.get("name");
        console.log(x);
    },
    validate: function(attrs,options){
         if(attrs.id.length==0)
            console.log("Id is null");
        else 
            console.log("Product id: "+attrs.id +" is valid");
    }
});

var productOne = product.extend({
    
})

var productOne = new product();
productOne.set({id:"product1",name:"CS"});
//product 2
var productTwo = new product();
productTwo.set({id:"product2",name:"Brava"});
//product 3
var productThree = new product();
productThree.set({id:"product3",name:"Blazon"});
//product 4
var productFour = new product();
productFour.set({id:"product4",name:"Wev"});
//checking
productOne.getProductDescription();
productTwo.getProductDescription();
productThree.getProductDescription();
productFour.getProductDescription();
productOne.isValid();
productTwo.isValid();
productThree.isValid();
productFour.isValid();
console.log("id:"+productOne.id+" name: "+productOne.get("name"));
console.log("id:"+productTwo.id+" name: "+productTwo.get("name"));
console.log("id:"+productThree.id+" name: "+productThree.get("name"));
console.log("id:"+productFour.id+" name: "+productFour.get("name"));

