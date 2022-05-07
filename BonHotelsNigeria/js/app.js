$('.date').focus(e=>{
    e.target.type = 'date'
}).blur(e=>{
    if(e.target.value==''){
        e.target.type = 'text'
    }else{
        e.target.type = 'date'
    }
})

$('.hamburger__menu').click(e=>{
    e.target.classList.toggle('.active')
})

$('.checkbox').change(e=>{
    console.log(e.target.checked)
    if(e.target.checked == true){
        $('.header__navigation').addClass('active')
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    }else{
        $('.header__navigation').removeClass('active')
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }
    
})