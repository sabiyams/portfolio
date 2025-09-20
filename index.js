// Toggle menu
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
        
        // Scroll sections active link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
        
        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                
                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                };
            });
            
            // Remove toggle icon and navbar when click navbar link (scroll)
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };
        
        // Resume functionality
        document.getElementById('view-resume-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume viewing functionality would be implemented here. You would typically embed a PDF or show a detailed resume section.');
        });
        
        document.getElementById('download-resume-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download functionality would be implemented here. This would trigger a download of your PDF resume.');
        });
        
        document.getElementById('share-resume-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume sharing functionality would be implemented here. This would open sharing options.');
        });