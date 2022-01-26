const about = document.querySelector('.about')
const tabBtns = document.querySelectorAll('.tab-btn');
const allArticles = document.querySelectorAll('.content');


about.addEventListener('click',function(e){
    //get IDs of any element clicked (the article buttons)
    const id = e.target.dataset.id;

    //check if it contains data-id Attribute, remove and add active class
    if(id){
        //remove active from other buttons
        tabBtns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        });

        //Remove active class to hide other articles 
        allArticles.forEach(function(article){
            article.classList.remove("active")
        });

        //get the ID of the ELEMENT that matches the ID of the button clicked
        const elementId = document.getElementById(id); //the above target-id
        
        //add active class to the element with the MATCHED ID
        elementId.classList.add("active")
    }
})

