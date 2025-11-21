function canVote(){

    if (age.value >= 18){
        // yes 
        result.textContent = "You can vote"
    }else{
        //no
         result.textContent = "You can't vote"
    }

}