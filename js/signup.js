let price_plan = document.querySelector('.price-plan-display');

price_plan.innerHTML =  sessionStorage.getItem('target');

price_plan.firstElementChild.lastElementChild.style.display  = 'none';


