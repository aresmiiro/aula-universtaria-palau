document.addEventListener('DOMContentLoaded', () => {


  const menuToggle = document.querySelector('#menu-toggle')
  const navbar = document.querySelector('#navbar')

  menuToggle.addEventListener('click', () => navbar.classList.toggle('hidden'))

  const menuDrowpDown = document.querySelector('#dropdownNavbarLink')

  const dropDown = document.querySelector('#dropdownNavbar')

  menuDrowpDown.addEventListener('click', () =>
  dropDown.classList.toggle('hidden'))

   const dropDownButton = document.querySelector('#dropdownButton')

   const dropDownNav = document.querySelector('#dropdownMenu')

    dropDownButton.addEventListener('click', () => dropDownNav.classList.toggle('hidden'))

})