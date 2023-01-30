function setupTab(){
  console.log(2+2)
  document.querySelectorAll('.tabs__button').forEach(button => {
    
    button.addEventListener('click', () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      
      // Hide All tabs Content
      document.querySelectorAll('.tabs__content').forEach(content => 
        {content.style.display = 'none'});
      // show clicked buttons respective tab
      const activeTab = tabsContainer.querySelector(`.tabs__content[data-tab='${tabNumber}']`);
      activeTab.style.display = 'block';
      // remove style from all  button
      sideBar.querySelectorAll('.tabs__button').forEach(b => {
        b.classList.remove('tabs__button--active');
      })
      button.classList.add('tabs__button--active')


    })
  })

}

document.addEventListener('DOMContentLoaded', () => {
  setupTab();
})