

export const switchTheme = () => { 
    let theme = document.querySelector('body')
    if(theme.classList == 'theme-light') theme.classList = 'theme-dark'
    else theme.classList = 'theme-light'
  }