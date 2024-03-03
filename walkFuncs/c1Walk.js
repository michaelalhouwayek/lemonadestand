
function c1Walk() {
    customer = cust1 ; customer.show()
    standDest = parseFloat(standHTML.css("margin-left"))+15
    currentPos = parseFloat(customer.css("margin-left"))
    endDest =  window.innerWidth

    var walkingToLemonade = setInterval(function() {
        currentPos += 5
        customer.css("margin-left",currentPos+"px")
        
        if (customer.css("margin-left").match(/\d+/g)[0] >= standDest) {
        customerPromptPurchase() ; walkingOut1() ; clearInterval(walkingToLemonade)
        }
    }, 50);

    function walkingOut1() {
        console.log("Started")
        wo = setInterval(function() {
        currentPos += 5
        customer.css("margin-left",currentPos+"px")
        if (customer.css("margin-left").match(/\d+/g)[0] >= endDest) {
            c1Live = false ; customer.hide() ; clearInterval(wo)
        }
        }, 50);
    }
}
