# 🌴 GTA IA

> **Não é só um jogo.** Escolha uma lenda de Dev City. Ou tire uma selfie e vire uma.

Tela de seleção de personagem inspirada no visual de GTA, feita com HTML, CSS e JavaScript puro. Ao clicar em cada personagem, o nome, a imagem e o fundo da tela mudam. Também é possível enviar uma foto da galeria ou tirar uma selfie com a câmera para ocupar o lugar do personagem.

---

## 📸 Preview

Acesse: 

---

## ✨ Funcionalidades

- 🎮 **Seleção de personagem**: Lucia, Jason e CJ, cada um com seu próprio fundo.
- 🔤 **Nome gigante dinâmico** atrás do personagem, no estilo das telas de loading do GTA.
- 🖼️ **Troca de background** sincronizada com o personagem escolhido.
- 📷 **Foto do usuário**: envio pela galeria ou captura direta pela câmera.
- 📱 **100% responsivo**: celular em pé, celular deitado, tablet e desktop.
- 🎨 Visual com a fonte **Bangers** e paleta rosa/amarelo neon.

---

## 🧱 Tecnologias

- HTML5
- CSS3 (variáveis CSS, `clamp()`, `min()`, `dvh`, media queries)
- JavaScript (DOM, `getUserMedia`, `Canvas`, `FormData`)
- [Google Fonts: Bangers](https://fonts.google.com/specimen/Bangers)

---

## 📁 Estrutura do projeto

```
gta-ia/
├── img/
│   ├── background.jpg
│   ├── background1.jpg
│   ├── background2.jpg
│   ├── lucia.png
│   ├── jason.png
│   └── cj.png
├── index.html
├── scripts.js
└── styles.css
```

---

## 🚀 Como rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gta-ia.git
   ```

2. Abra a pasta no **VS Code**.
3. Rode com a extensão **Live Server** (clique direito em `index.html` → *Open with Live Server*).

> ⚠️ A câmera só funciona em `localhost`, `127.0.0.1` ou em páginas com `https`. Abrir o arquivo direto no navegador (`file://`) não libera o acesso.

---

## 🧠 Como funciona

Cada bolinha do menu guarda as informações do personagem em atributos `data-*`:

```html
<img class="avatar" src="img/jason.png" data-nome="Jason" data-fundo="img/background1.jpg">
```

Ao clicar, o JavaScript lê esses dados e atualiza o nome, a imagem do personagem e o `background-image` do `body`.

O botão 📸 abre um menu com duas opções:

- **Galeria**: abre o seletor de arquivos e mostra a imagem escolhida.
- **Câmera**: abre o vídeo ao vivo, captura o frame em um `canvas` e usa a imagem gerada.

---

> 🔐 **Importante:** a chave de API nunca deve ficar no front-end. Use sempre um servidor intermediário.

---

## 🙏 Créditos

Este projeto foi desenvolvido com o apoio das aulas do **Rodolfo Mori | DevClub**, na **Missão Programação com IA do Zero - Edição GTA! 🎮**. Obrigada pelo conteúdo e por ensinar a construir com IA desde o primeiro passo! 💜

- 🎓 [DevClub](https://aulas.devclub.com.br/)

---

## ⚖️ Aviso

Este é um projeto de estudo, sem fins comerciais. Qualquer referência visual a GTA pertence aos seus respectivos detentores de direitos (Rockstar Games). Este projeto não é afiliado nem endossado por eles.
