// Top Bar Hover 
const toggleShow = () => {
    document.getElementById('features-dropdown').classList.toggle('show');
}
window.onclick = (event) => {
    if(!event.target.matches('.features-dropbtn')) {
        let dropdowns = document.getElementsByClassName('features-dropdown-content');
        dropdowns.forEach(openDropdown => {
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }); 
    }
} 

    let featuresBtn = document.querySelector('.features-dropbtn');
    featuresBtn.addEventListener('click', toggleShow);

