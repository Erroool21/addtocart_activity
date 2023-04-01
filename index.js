let product = {
    cart: [],
    showcart(){
        let ItemsInCart = "";
        let Items = document.getElementById("cart");
        let overallcost = 0;
        product.cart.forEach(function(itemincart){
        ItemsInCart += `<li>Item: ${itemincart.item} Price: ${itemincart.price}</li>`;
        overallcost += itemincart.price;
        });
        Items.innerHTML = ItemsInCart;
        document.getElementById('total').innerHTML = (`Total Price: ₱ ${overallcost}`);
    }
}


const addToCart = function(){
    
    product.cart.push({item: "RTX 3050 ", 
    price: 18000
}
);
    product.showcart();
}

const addToCart1 = function(){
    
    product.cart.push({item: "RTX 3050Ti ", 
    price: 20000
}
);
    product.showcart();
}

const addToCart2 = function(){
    
    product.cart.push({item: "RTX 4060 ", 
    price: 92000
}
);
    product.showcart();
}
const addToCart3 = function(){
    
    product.cart.push({item: "RTX 4070 ", 
    price: 99858
}

);
    product.showcart();
}

const addToCart4 = function(){
    
    product.cart.push({item: "Razer BlackWidow V3 Pro", 
    price: 4950
}
);
    product.showcart();
}

const addToCart5 = function(){
    
    product.cart.push({item: "Razer BlackWidow", 
    price: 4450
}
);
    product.showcart();
}
const addToCart6 = function(){
    
    product.cart.push({item: "Huntsman V2", 
    price: 12995
}
);
    product.showcart();
}
const addToCart7 = function(){
    
    product.cart.push({item: "Razer PBT Keycap", 
    price: 2295
}
);
    product.showcart();
}

const del = function(){
    product.cart.pop();
    product.showcart();
}
product.showcart();