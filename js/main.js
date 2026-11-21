document.addEventListener("DOMContentLoaded", function(){

    const portfolioitems = document.querySelectorAll(".main-text-box");

    const filterButtons = document.querySelectorAll(".main-filter-btn");
    filterButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const filter = this.getAttribute("data-filter");
            portfolioitems.forEach((item) => {
                if(filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        })
    })

})