const panels = document.querySelectorAll('.panel');

function toggLeOpen(e) {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggLeOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));