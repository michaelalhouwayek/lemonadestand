function c2Walk() {
    customer = cust2 ; customer.show()
    standDest = parseFloat(standHTML.css("margin-left"))+15
    currentPos = parseFloat(customer.css("margin-left"))
    endDest =  window.innerWidth
  
    var walkingToLemonade = setInterval(function() {
      currentPos += 5
      customer.css("margin-left",currentPos+"px")
      
      if (customer.css("margin-left").match(/\d+/g)[0] >= standDest) {
        customerPromptPurchase() ; walkingOut() ; clearInterval(walkingToLemonade)
      }
    }, 50);
    
    function walkingOut() {
      console.log("Started")
      wo = setInterval(function() {
        currentPos += 5
        customer.css("margin-left",currentPos+"px")
        if (customer.css("margin-left").match(/\d+/g)[0] >= endDest) {
          c2Live = false ; customer.hide() ; clearInterval(wo)
        }
      }, 50);
    }
  }