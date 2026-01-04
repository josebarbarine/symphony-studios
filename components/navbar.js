class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .nav-link {
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #f59e0b;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .active::after {
                    width: 100%;
                }
            </style>
            <nav class="bg-gray-800/80 backdrop-blur-md fixed w-full z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <a href="index.html" class="flex items-center space-x-2">
                                <i data-feather="film" class="text-primary"></i>
                                <span class="text-xl font-bold text-white">Symphony Studios</span>
                            </a>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-8">
                                <a href="index.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
                                <a href="shorts.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Shorts</a>
                                <a href="contact.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-gray-800">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="index.html" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
                        <a href="shorts.html" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Shorts</a>
                        <a href="contact.html" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.innerHTML = feather.icons.x.toSvg();
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = feather.icons.menu.toSvg();
            }
        });

        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        this.shadowRoot.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active', 'text-white');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
