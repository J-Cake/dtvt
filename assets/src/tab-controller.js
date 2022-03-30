window.tabController = function (container) {

    const tabHeader = document.createElement('nav');
    tabHeader.classList.add('tab-header');
    const tabBody = container.querySelector('.tab-body');

    for (const tab of container.querySelectorAll('.tab-body > .tab')) {
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab-header-button');
        tabButton.innerText = tab.getAttribute('data-heading');
        
        tabButton.addEventListener('click', function () {
                tabBody.scrollLeft = tab.offsetLeft - tab.offsetLeft % tab.offsetWidth;
                tabHeader.querySelector('.tab-header-button.active')?.classList.remove('active');
                tabButton.classList.add('active');
                window.location.hash = tab.id;
            });

        tabHeader.appendChild(tabButton);

    }

    container.insertBefore(tabHeader, tabBody);

}