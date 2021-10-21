/* eslint-env browser */
(function (){
    const themeButton = document.getElementById('toggle-button')

    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', currentTheme)

    themeButton.onclick = function toggleTheme () {
      let currentTheme = document.documentElement.getAttribute('data-theme')
      let targetTheme = currentTheme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.setItem('theme', targetTheme)
    }
  }())
