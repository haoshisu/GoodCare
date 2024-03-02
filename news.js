document.addEventListener('DOMContentLoaded', function() {
        // 获取所有页面链接
        var pageLinks = document.querySelectorAll('.pagination .page-link');

        // 为每个页面链接添加单击事件监听器
        pageLinks.forEach(function(pageLink) {
            pageLink.addEventListener('click', function(event) {
                // 阻止默认行为，防止页面跳转
                event.preventDefault();

                // 移除所有页面链接的 .active 类
                pageLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // 将 .active 类添加到被点击的页面链接
                pageLink.classList.add('active');
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有侧边栏链接
        var sidebarLinks = document.querySelectorAll('.w3-sidebar .w3-bar-item');

        // 为每个侧边栏链接添加单击事件监听器
        sidebarLinks.forEach(function(sidebarLink) {
            sidebarLink.addEventListener('click', function(event) {
                // 阻止默认行为，防止页面跳转
                event.preventDefault();

                // 移除所有侧边栏链接的 .active 类
                sidebarLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // 将 .active 类添加到被点击的侧边栏链接
                sidebarLink.classList.add('active');
            });
        });
    });