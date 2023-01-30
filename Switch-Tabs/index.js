function setupTabs(){
  document.querySelectorAll('.tabs__button').forEach(button => {
    
    
    button.addEventListener('click', () => {

      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabsToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`)
      document.querySelectorAll('.tabs__content').forEach(content => {content.style.display = 'none'; })
      tabsToActivate.style.display = 'block';
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
})
  
//tabs__button--active"