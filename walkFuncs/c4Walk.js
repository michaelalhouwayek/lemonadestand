const Module4 =  {
    c4Walk: function(customer,standHTML) {
        customer.css("margin-left","-400px")
        customer.show()
        var standDest = parseFloat(standHTML.css("margin-left"))+15
        var currentPos = parseFloat(customer.css("margin-left"))
        var endDest =  window.innerWidth

        var walkingToLemonade = setInterval(function() {
            currentPos += 5
            customer.css("margin-left",currentPos+"px")
            
            if (customer.css("margin-left").match(/\d+/g)[0] >= standDest) {
            clearInterval(walkingToLemonade)

            var wo = setInterval(function() {
                currentPos += 5
                customer.css("margin-left",currentPos+"px")
                if (customer.css("margin-left").match(/\d+/g)[0] >= endDest) {
                    //c4Live = false ; 
                    customer.hide() ; clearInterval(wo)
                    customer.css("margin-left","-400px")
                }
            }, 50);
            }
        }, 50);
    }
}

export default Module4