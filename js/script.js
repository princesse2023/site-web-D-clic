const test = document.querySelector("nav");
             console.log(test);
             window.addEventListener("scroll",() =>{
                console.log(window.scrollY);
                if(window.scrollY>406){
                    test.style.top=0;
                }else{
                    test.style.top ="-80px";
                }
             })
let animation = anime({
    targets: 'h5',
    tranlateX: '40%',
})
const container_bissap = document.querySelector('.bissap');
    console.log('container_bissap');
    window.addEventListener('scroll', ( ) => {
        const{scrollTop , clientheight} = document.documentElement;
    })