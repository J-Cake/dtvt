window.tabController = function (container, noHash = false) {

    const tabHeader = document.createElement('nav');
    tabHeader.classList.add('tab-header');
    const tabBody = container.querySelector('.tab-body');

    for (const tab of container.querySelectorAll('.tab-body > .tab')) {
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab-header-button');
        tabButton.innerText = tab.getAttribute('data-heading');

        tabButton.addEventListener('click', function () {
            const dest = tabBody.scrollLeft = tab.offsetLeft - tab.offsetLeft % tab.offsetWidth;
            setTimeout(() => tabBody.scrollLeft !== dest ? tabBody.scrollLeft = dest : void 0, 200); // correct for scroll lag
            tabHeader.querySelector('.tab-header-button.active')?.classList.remove('active');
            tabButton.classList.add('active');

            if (!noHash)
                window.location.hash = tab.id;
        });

        tabHeader.appendChild(tabButton);
    }

    container.insertBefore(tabHeader, tabBody);

}