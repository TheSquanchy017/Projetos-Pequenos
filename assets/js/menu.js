const $toggle = document.querySelector('#toggle');
const $menu = document.querySelector('.side-menu');
const $cardHeader = document.querySelector('.card-header')

$toggle.addEventListener('click', animaMenu);


function animaMenu(){
        $toggle.classList.toggle('on');
        $menu.classList.toggle('menu_active');    
        if($toggle.classList.contains('on')){
            $menu.style.boxShadow = 'none';           
        }  else{
            $menu.style.boxShadow = '0px 0px, -5px 4px 27px 2px  black';            
        }
}
    
function toggleSideMenu(){
    $menu.style.color = 'blue'; 
}
