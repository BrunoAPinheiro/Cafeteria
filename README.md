
# ☕ Cafeteria Moderna

![Banner do Projeto](https://github.com/BrunoAPinheiro/Cafeteria/blob/main/img/mockup%20pc.png?raw=true)

## 📋 Visão Geral

Um site elegante e imersivo para uma cafeteria premium, desenvolvido com as mais modernas tecnologias web. O projeto oferece uma experiência visual sofisticada, com animações suaves, design responsivo e interações intuitivas que elevam a experiência do usuário.

### 🔄 Evolução do Projeto

Este projeto teve origem em um conceito básico criado por Rodolfo Mori (DevClub), que incluía apenas um mapa, botões não funcionais e elementos visuais simples. Bruno de Almeida Pinheiro transformou completamente o projeto, adicionando:

- Design responsivo completo
- Funcionalidades interativas
- Animações avançadas
- Nova estrutura de conteúdo e seções
- Melhorias de acessibilidade e performance
- Estilização moderna com variáveis CSS

Todas as melhorias de funcionalidade, design, código e experiência do usuário foram implementadas por Bruno de Almeida Pinheiro.

### ✨ Demonstração

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Desktop</strong></td>
      <td align="center"><strong>Tablet</strong></td>
      <td align="center"><strong>Mobile</strong></td>
    </tr>
    <tr>
      <td><img src="https://github.com/BrunoAPinheiro/Cafeteria/blob/main/img/mockup%20pc.png?raw=true" width="600px"></td>
      <td><img src="https://github.com/BrunoAPinheiro/Cafeteria/blob/main/img/Mockup%20tablet.png?raw=true" width="300px"></td>
      <td><img src="https://github.com/BrunoAPinheiro/Cafeteria/blob/main/img/Mockup%20cell.png?raw=true" width="150px"></td>
    </tr>
  </table>
</div>

## 🚀 Funcionalidades Principais

- **Experiência Visual Imersiva** - Vídeo de fundo que estabelece um ambiente acolhedor
- **Design Responsivo** - Adaptação perfeita para dispositivos móveis, tablets e desktops
- **Menu Interativo** - Apresentação elegante dos produtos da cafeteria
- **Seção de Avaliações** - Feedback real dos clientes para construir credibilidade
- **Modal de Localização** - Mapa interativo integrado com Google Maps
- **Animações Sofisticadas** - Elementos de UI com animações sutis ao navegar e interagir
- **Navegação Suave** - Rolagem suave entre as seções da página
- **Acessibilidade** - Implementação de ARIA para maior inclusão

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Tecnologia | Descrição |
|------------|-----------|
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> | Estrutura semântica e acessível |
| <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> | Design responsivo com variáveis CSS e animações modernas |
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> | Interatividade avançada e animações customizadas |
| <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" /> | Ícones vetoriais de alta qualidade |
| <img src="https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white" /> | Integração de mapas interativos |

</div>

## 🌟 Recursos Técnicos Avançados

### Front-end

- **Sistema de Variáveis CSS** - Manutenção facilitada com cores, espaçamentos e estilos padronizados
- **Intersection Observer API** - Implementação de animações baseadas na visibilidade dos elementos
- **CSS Grid e Flexbox** - Layout moderno e flexível
- **Meta Tags Otimizadas** - SEO aprimorado e compartilhamento em redes sociais

### Performance & Acessibilidade

- **Otimização de Imagens** - Dimensões e formatos apropriados para carregamento rápido
- **Lazy Loading** - Carregamento preguiçoso de imagens para melhor performance
- **Atributos ARIA** - Melhor experiência para usuários com leitores de tela
- **Navegação por Teclado** - Acessibilidade aprimorada para usuários que não utilizam mouse

## 📂 Estrutura do Projeto

```
Cafeteria/
├── img/                  # Imagens e recursos visuais
│   ├── logo.png          # Logo da cafeteria
│   ├── home-img.jpeg     # Imagem de destaque da página inicial
│   ├── menu-*.jpg        # Imagens dos produtos do menu
│   └── cliente-*.jpg     # Imagens de perfil dos clientes
├── videos/
│   └── coffe.mp4         # Vídeo de fundo
├── index.html            # Estrutura HTML principal
├── styles.css            # Estilos e animações
├── scripts.js            # Funcionalidades interativas
└── README.md             # Documentação do projeto
```

## 📱 Responsividade

O design foi meticulosamente adaptado para diversos tamanhos de tela:

- **Desktop (> 992px)** - Experiência completa com todas as funcionalidades
- **Tablet (768px - 992px)** - Layout adaptado para uso confortável em tablets
- **Mobile (< 768px)** - Interface otimizada com menu hambúrguer e conteúdo reorganizado

## 💻 Uso e Implementação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet para carregar fontes e mapa

### Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cafeteria.git
   cd cafeteria
   ```

2. Abra o arquivo `index.html` em seu navegador ou configure um servidor local:
   ```bash
   # Usando Python (exemplo)
   python -m http.server 8000
   ```

3. Acesse `http://localhost:8000` em seu navegador.

## 🔧 Personalização

### Alterando o Conteúdo

Para personalizar o conteúdo da cafeteria:

1. Edite o arquivo `index.html` para alterar textos, preços e descrições
2. Substitua as imagens em `/img` mantendo os mesmos nomes de arquivo
3. Para substituir o vídeo de fundo, coloque seu vídeo em `/videos` com o nome `coffe.mp4`

### Alterando o Estilo

Para personalizar as cores e o estilo:

1. Modifique as variáveis CSS no início do arquivo `styles.css`:
   ```css
   :root {
     --main-color: #seu-codigo-de-cor;
     --bg: #seu-codigo-de-cor;
     /* outras variáveis */
   }
   ```

## 🚀 Melhorias Futuras

- [ ] Implementação de modo escuro
- [ ] Integração com sistema de pedidos online
- [ ] Otimização para PWA (Progressive Web App)
- [ ] Suporte para múltiplos idiomas
- [ ] Animações de microinteração adicionais

## 📊 Performance e Otimizações

O projeto foi desenvolvido com foco em performance, implementando:

- **CSS e JavaScript minificados** para carregamento mais rápido
- **Lazy loading de imagens** para otimizar a velocidade de carregamento
- **Cache eficiente** de recursos estáticos
- **Código semântico** para melhor indexação em motores de busca

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

O código original básico é de autoria de Rodolfo Mori (DevClub), enquanto todas as melhorias, funcionalidades avançadas e modernizações são de autoria de Bruno de Almeida Pinheiro.

## 👨‍💻 Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/BrunoAPinheiro">
        <img src="https://github.com/identicons/BrunoAPinheiro.png" width="100px;" alt="Avatar de Bruno"/><br>
        <sub><b>Bruno de Almeida Pinheiro</b></sub>
      </a>
      <p><small>Desenvolvimento avançado, responsividade, animações, funcionalidades interativas e melhorias de UI/UX</small></p>
    </td>
    <td align="center">
      <a href="https://github.com/rodolfomori">
        <img src="https://github.com/identicons/rodolfomori.png" width="100px;" alt="Avatar de Rodolfo"/><br>
        <sub><b>Rodolfo Mori</b></sub>
      </a>
      <p><small>Conceito inicial e estrutura básica</small></p>
    </td>
  </tr>
</table>

---

<div align="center">
  <p>☕ Transformado com paixão por código</p>
  
  ![Visitas](https://visitor-badge.laobi.icu/badge?page_id=BrunoAPinheiro.Cafeteria)
</div>
</qodoArtifact>