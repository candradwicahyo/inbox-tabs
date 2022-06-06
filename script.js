window.onload = () => {
  
  const times = document.querySelectorAll('.time');
  times.forEach(time => getRandomTime(time));
  
  function getRandomTime(param) {
    const limit = 60;
    const getNumber = Math.floor((Math.random() * limit) + 1);
    const result = `${getNumber} minutes ago`;
    param.textContent = result;
  }
  
  const texts = document.querySelectorAll('.text');
  texts.forEach(text => limit(text));
  
  function limit(text) {
    const limit = 100;
    
    if (text.textContent.length > limit) {
      const oldText = text.textContent;
      const newText = text.textContent.substring(0, limit);
      text.textContent = `${newText} ...`;
      
      const button = text.nextElementSibling;
      button.classList.remove('d-none');
      readMore(text, oldText, newText, button);
    } 
    
  }
  
  function readMore(text, oldText, newText, button) {
    button.addEventListener('click', function() {
      if (this.textContent == 'Read More') text.textContent = oldText;
      if (this.textContent == 'Read Less') text.textContent = newText;
      this.textContent = (this.textContent == 'Read More') ? 'Read Less' : 'Read More';
    });
  }
  
  const list = document.querySelectorAll('.list');
  
  function addClass(target, classname) {
    const elements = (typeof target == 'string') ? document.querySelectorAll(target) : target;
    elements.forEach(element => {
      element.addEventListener('click', function() {
        elements.forEach(element => element.classList.remove(classname));
        this.classList.add(classname);
        filter(this.textContent);
      });
    });
  }
  
  addClass(list, 'active');
  
  const contents = document.querySelectorAll('.content');
  
  function filter(list) {
    contents.forEach(content => {
      const type = content.dataset.type;
      content.style.display = (list.toLowerCase() == type.toLowerCase() || list.toLowerCase() == 'all') ? '' : 'none';
    });
  }
   
}