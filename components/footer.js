class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #f59e0b;
                }
            </style>
            <footer class="bg-gray-800/80 backdrop-blur-md">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold mb-4 flex items-center">
                                <i data-feather="film" class="mr-2 text-primary"></i>
                                Symphony Studios
                            </h3>
                            <p class="text-gray-400">
                                Transformando narrativas em experiências visuais épicas.
                            </p>
                            <p class="text-gray-500 text-sm mt-2">
                                Powered by High-End Automation & Human Creativity
                            </p>
</div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="text-gray-400 hover:text-white transition">Home</a></li>
                                <li><a href="shorts.html" class="text-gray-400 hover:text-white transition">Shorts</a></li>
                                <li><a href="contact.html" class="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="youtube"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-white">
                                    <i data-feather="facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                        <p>© ${new Date().getFullYear()} Symphony Studios. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
