let toggle = document.querySelector('.toggle');

function activeLink()
{
    var navigationList = document.querySelectorAll('.navigation ul li');
    navigationList.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    });
}

function activeHovered()
{
    var navigationList = document.querySelectorAll('.navigation ul li');
    navigationList.forEach((item) => {
        item.addEventListener('mouseover', activeLink)
    });
}

toggle.addEventListener('click', () =>{
    var sidebar = document.querySelector('.sidebar');
    var logo = document.querySelector('.logo');
    var profile = document.querySelector('.profile');
    var logout = document.querySelector('.logout');
    var main = document.querySelector('main');

    sidebar.classList.toggle('close');
    logo.classList.toggle('hidden');
    profile.classList.toggle('hidden');
    logout.classList.toggle('active');
    main.classList.toggle('active');

});

activeHovered();