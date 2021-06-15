let btn = document.querySelector('.btn-cookie');
let main_div = document.querySelector('.accept-cookie');
let btn_group = document.querySelectorAll('.group-btn');
btn.addEventListener('click', function(){
      main_div.style.display = 'none';
      document.cookie = "username=waqas";
});

btn_group.forEach(function(btns){
   btns.addEventListener('click',function(e){
      let  target = e.currentTarget.parentElement.parentElement;
       sessionStorage.setItem('target',target.innerHTML);
       e.currentTarget.href = 'signup.html';
   
      
   });
  

});


