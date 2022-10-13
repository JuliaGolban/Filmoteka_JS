function theme(){
    const toggleTheme = document.querySelector('#toggle-theme-btn');
    // const sun = document.querySelector()
    if(localStorage.getItem('theme') !== null){
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    toggleTheme.addEventListener('click', () => {

        if(document.documentElement.hasAttribute('data-theme')){
            document.documentElement.removeAttribute('data-theme')
            localStorage.removeItem('theme')
        }
        else{
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
 
    })
 

}

theme();