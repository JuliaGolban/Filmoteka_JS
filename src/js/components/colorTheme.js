function theme(){
    const toggleTheme = document.querySelector('#toggle-theme-btn');
    const sun = document.querySelector('.sun');
    const moon =document.querySelector('.moon');
   

    if(localStorage.getItem('theme') !== null){
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    toggleTheme.addEventListener('click', () => {

        if(document.documentElement.hasAttribute('data-theme')){
            document.documentElement.removeAttribute('data-theme')
            moon.classList.toggle('is-hidden')
            sun.classList.toggle('is-hidden')

            localStorage.removeItem('theme')
        }
        else{
            document.documentElement.setAttribute('data-theme', 'dark')
            sun.classList.toggle('is-hidden')
            moon.classList.toggle('is-hidden')
            localStorage.setItem('theme', 'dark')
        }
 
    })
 

}

theme();