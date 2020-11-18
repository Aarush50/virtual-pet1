class Food{
    constructor(){
        var foodStock;
        var lastFed;
    }
       getfoodStock(){
            var fStock=database.ref('Food');
         fStock.on("value",function(data){
                foodStock=data.val();
                 
            })
        }
        updatefoodStock(Food){
            database.ref('/').update({
                foodStock:Food
            })
        }
         deductFood(){
          if(keyWentDown(UP_ARROW)){
              foodStock=foodStock-1;
          }
        }
}