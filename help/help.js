function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var allPanels = document.getElementsByClassName('panel');
    var allAccordions = document.getElementsByClassName('accordion');

    for (var i = 0; i < allPanels.length; i++) {
        if (allPanels[i].id !== sectionId) {
            allPanels[i].style.maxHeight = null;
            allAccordions[i].classList.remove('active');
        }
    }

    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        section.previousElementSibling.classList.remove('active');
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.previousElementSibling.classList.add('active');
    }
}
