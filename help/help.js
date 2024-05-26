function toggleSection(id) {
    const panel = document.getElementById(id);
    const acc = panel.previousElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      acc.classList.remove('active');
    } else {
      document.querySelectorAll('.panel').forEach(p => p.style.maxHeight = null);
      document.querySelectorAll('.accordion').forEach(a => a.classList.remove('active'));
      
      panel.style.maxHeight = panel.scrollHeight + 'px';
      acc.classList.add('active');
    }
  }
  