document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const modal = document.querySelector('.modal');
    const mascaraModal = document.querySelector('.mascara-modal');
    const menuRecolher = document.getElementById('menu-recolher');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Verificar se elementos existem
    if (!modal || !mascaraModal || !menuRecolher || !navMenu) {
        console.error('Elementos necessários não encontrados.');
        return;
    }
    
    // Animação ao carregar a página
    setTimeout(() => {
        document.body.classList.add('carregado');
    }, 300);
    
    // Função para mostrar o modal
    window.mostrarModal = () => {
        modal.classList.add('ativo');
        mascaraModal.classList.add('ativo');
        document.body.style.overflow = 'hidden'; // Previne rolagem enquanto modal está aberto
        
        // Acessibilidade - foco no modal
        modal.setAttribute('aria-hidden', 'false');
        
        // Registrar tecla Escape para fechar o modal
        document.addEventListener('keydown', fecharModalComEsc);
    };
    
    // Função para esconder o modal
    window.esconderModal = () => {
        modal.classList.remove('ativo');
        mascaraModal.classList.remove('ativo');
        document.body.style.overflow = ''; // Restaura rolagem
        
        // Acessibilidade
        modal.setAttribute('aria-hidden', 'true');
        
        // Remover listener de tecla Escape
        document.removeEventListener('keydown', fecharModalComEsc);
    };
    
    // Função para fechar o modal com a tecla Escape
    function fecharModalComEsc(event) {
        if (event.key === 'Escape') {
            esconderModal();
        }
    }
    
    // Listener para fechar o modal clicando na máscara
    mascaraModal.addEventListener('click', esconderModal);
    
    // Impedir propagação de cliques no modal para que não feche ao clicar nele
    modal.addEventListener('click', (event) => {
        event.stopPropagation();
        
        // Permitir fechar o modal se o clique não for no iframe
        if (!event.target.closest('iframe') && event.target !== modal) {
            esconderModal();
        }
    });
    
    // Controle do menu mobile
    menuRecolher.addEventListener('click', () => {
        menuRecolher.classList.toggle('ativo');
        navMenu.classList.toggle('ativo');
        
        // Acessibilidade
        const expandido = menuRecolher.classList.contains('ativo');
        menuRecolher.setAttribute('aria-expanded', expandido);
    });
    
    // Fechar o menu quando clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuRecolher.classList.remove('ativo');
            navMenu.classList.remove('ativo');
            menuRecolher.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuRecolher.contains(event.target) && navMenu.classList.contains('ativo')) {
            menuRecolher.classList.remove('ativo');
            navMenu.classList.remove('ativo');
            menuRecolher.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Rolagem suave para links de âncora
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Não processar cliques que abrem o modal
            if (this.hasAttribute('onclick') && this.getAttribute('onclick').includes('mostrarModal()')) {
                return;
            }
            
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Rolagem suave
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Cabeçalho com efeito de encolhimento na rolagem
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('compacto');
        } else {
            header.classList.remove('compacto');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animação de fadeIn para elementos ao rolar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animarElementos = document.querySelectorAll('.menu-item, .avaliacao-item, .sobre-texto, .sobre-imagem');
    animarElementos.forEach(el => {
        el.classList.add('animar-entrada');
        observer.observe(el);
    });
    
    // Lazy loading para imagens
    if ('loading' in HTMLImageElement.prototype) {
        // Browser suporta lazy-loading nativo
        const imagens = document.querySelectorAll('img[data-src]');
        imagens.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    } else {
        // Fallback para browsers que não suportam
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
});

// Adiciona classes para animações durante a rolagem
function adicionarAnimacaoScroll() {
    const seletor = '.titulo, .botao-link, .sobre-texto h3, .sobre-texto p, .menu-item, .avaliacao-item';
    const elementos = document.querySelectorAll(seletor);
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animado');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    elementos.forEach(elemento => {
        animationObserver.observe(elemento);
    });
}

// Iniciar animações de scroll depois que a página estiver carregada
window.addEventListener('load', adicionarAnimacaoScroll);