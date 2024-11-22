
    // ................................................................................................................................... 
    // Header 

    function toggleMenu() {
        var mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('show');
    }

    

    function toggleMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode-header');

        const logoImage = document.querySelector('.logo img');
        logoImage.src = isDarkMode ? 'logo-dark.png' : 'logo.png';

        document.querySelectorAll('img').forEach(img => {
            if (!img.parentElement.classList.contains('logo')) {
                img.classList.toggle('dark-img');
            }
        });

        document.querySelectorAll('nav a, nav span, .dropbtn, .dropdown-content span').forEach(link => {
            link.classList.toggle('dark-mode-text');
        });

        document.body.style.backgroundColor = isDarkMode ? "#121212" : "#f2f2f2";
        document.body.style.color = isDarkMode ? "#121212" : "black";

        const modeToggleButton = document.querySelector('.mode-toggle button');
        if (isDarkMode) {
            modeToggleButton.innerHTML = 'Light Mode <i class="fas fa-sun"></i>';
        } else {
            modeToggleButton.innerHTML = 'Dark Mode <i class="fas fa-moon"></i>';
        }

        document.body.style.animation = isDarkMode ? 'darkModeAnimation 0.5s' : 'none';

        const oldTestamentTitle = document.getElementById('old-testament-title');
        const newTestamentTitle = document.getElementById('new-testament-title');

        if (oldTestamentTitle.classList.contains('dark-mode')) {
            oldTestamentTitle.classList.remove('dark-mode');
            oldTestamentTitle.style.color = '';
            oldTestamentTitle.style.backgroundColor = '#f2f2f2';
        } else {
            oldTestamentTitle.classList.add('dark-mode');
            oldTestamentTitle.style.color = 'white';
            oldTestamentTitle.style.backgroundColor = '#121212';
        }

        if (newTestamentTitle && newTestamentTitle.classList.contains('dark-mode')) {
            newTestamentTitle.classList.remove('dark-mode');
            newTestamentTitle.style.color = '';
            newTestamentTitle.style.backgroundColor = '#f2f2f2';
        } else if (newTestamentTitle) {
            newTestamentTitle.classList.add('dark-mode');
            newTestamentTitle.style.color = 'white';
            newTestamentTitle.style.backgroundColor = '#121212';
        }
    }

    // Acessibilidade 
    function toggleAccessibilityTool() {
        const tools = document.querySelector('.accessibility-tool');
        const button = document.querySelector('.accessibility-btn');
        tools.style.top = `60px`; // Posiciona as ferramentas logo abaixo do botão
        tools.style.left = `635px`; // Centraliza horizontalmente
        tools.style.display = tools.style.display === 'none' ? 'block' : 'none';
    }

    // Funções de acessibilidade
    function toggleAccessibilityTools() {
        const tools = document.getElementById('accessibilityTools');
        tools.style.display = tools.style.display === 'none' ? 'flex' : 'none';
    }

    function zoomIn() {
        const currentZoom = parseFloat(document.body.style.zoom || 1);
        if (currentZoom < 1.3) { // Limite de 30% além do zoom inicial
            document.body.style.zoom = (currentZoom + 0.1).toString();
        }
    }


    function zoomOut() {
        const currentZoom = parseFloat(document.body.style.zoom || 1);
        if (currentZoom > 0.7) {
            document.body.style.zoom = (currentZoom - 0.1).toString();
        }
    }


    function toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
        const button = document.getElementById('contrastButton');
        const pressed = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', !pressed);
    }

    function toggleLineHighlight() {
        const line = document.getElementById('readingLine');
        if (line.style.display === 'none' || line.style.display === '') {
            line.style.display = 'block';
            makeLineDraggable(line);
        } else {
            line.style.display = 'none';
        }
    }

    function makeLineDraggable(elem) {
        var pos1 = 0, pos2 = 0;
        elem.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos2 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos2 - e.clientY;
            pos2 = e.clientY;
            elem.style.top = (elem.offsetTop - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function toggleHighContrast() {
        var body = document.body;
        body.classList.toggle('high-contrast');
        var isPressed = body.classList.contains('high-contrast');
        document.getElementById('contrastButton').setAttribute('aria-pressed', isPressed);
    }


    // Variável que controla o estado de visibilidade do menu de acessibilidade
    let accessibilityMenuVisible = false;

    // Função para exibir ou ocultar o menu de acessibilidade
    function toggleAccessibilityTools(event) {
        event.stopPropagation(); // Impede que o clique se propague
        const tools = document.getElementById('accessibilityTools');
        accessibilityMenuVisible = !accessibilityMenuVisible; // Alterna o estado
        tools.style.display = accessibilityMenuVisible ? 'block' : 'none'; // Altera a exibição
    }

    // Fecha o menu de acessibilidade ao clicar fora do botão ou do menu
    document.addEventListener('click', function (event) {
        const tools = document.getElementById('accessibilityTools');
        const button = document.querySelector('.accessibility-button');

        // Verifica se o menu está aberto e se o clique ocorreu fora do botão e do menu
        if (accessibilityMenuVisible && !button.contains(event.target) && !tools.contains(event.target)) {
            tools.style.display = 'none'; // Fecha o menu
            accessibilityMenuVisible = false; // Atualiza o estado
        }
    });

    // Define a largura da tela para controlar a exibição do menu
    function checkScreenWidth() {
        const tools = document.getElementById('accessibilityTools');
        if (window.innerWidth < 600) {
            tools.style.display = 'none'; // Esconde o menu para telas pequenas
            accessibilityMenuVisible = false; // Reseta a visibilidade
        }
    }

    // Adiciona um listener para o redimensionamento da tela
    window.addEventListener('resize', checkScreenWidth);

    // Chama a função para verificar a largura da tela na carga inicial
    checkScreenWidth();

    // ................................................................................................................................ 


    // Tradutor
    document.getElementById('translate-btn').addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o document
        var menu = document.getElementById('translate-menu');
        menu.classList.toggle('hidden');
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        var menu = document.getElementById('translate-menu');
        var translateBtn = document.getElementById('translate-btn');

        // Verifica se o clique não foi no menu nem no botão de tradução
        if (!menu.classList.contains('hidden') && event.target !== menu && event.target !== translateBtn) {
            menu.classList.add('hidden'); // Fecha o menu
        }
    });

    function hideTranslateButton() {
        var translateBtn = document.getElementById('translate-btn');
        translateBtn.style.display = 'none';
    }


    // ................................................................................................................................... 
    // Menu versão 

    var version = ""; // Variável que será atualizada ao clicar nas opções do menu

    function toggleDropdown() {
        document.querySelector('.unique-dropdown').classList.toggle('show');
    }

    function selectOption(option, abbr) {
        version = abbr; // Atualiza a variável version com a abreviação da opção selecionada

        // Atualiza o texto do botão e mantém a seta
        var dropBtn = document.querySelector('.unique-dropbtn');
        dropBtn.innerHTML = option + '<span class="unique-arrow-down"></span>'; // Reconstrói o botão com a seta

        document.querySelector('.unique-dropdown').classList.remove('show');
    }

    // Fecha o dropdown ao clicar em qualquer lugar fora do menu ou botão
    document.addEventListener('click', function (event) {
        var dropdown = document.querySelector('.unique-dropdown');
        var dropBtn = document.querySelector('.unique-dropbtn');

        // Verifica se o clique foi fora do botão de dropdown e do menu
        if (!dropBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });


    // ...................................................................................................................................... 

    const dataNVI = [a];
    const dataAA = [];
    const dataACF = [];

    const data = { nvi: dataNVI, aa: dataAA, acf: dataACF };
    let currentVersion = 'nvi'; // Versão atual
    let currentBook = '';       // Livro atual
    let currentChapter = 1;     // Capítulo atual

    function displayChapters(book) {
        currentBook = book;
        const chapterContainer = document.getElementById('chapterButtons');
        chapterContainer.innerHTML = '';

        const bookData = data[currentVersion].find(b => b.abbrev === book); // Encontrar o livro na versão atual

        if (bookData) {
            const chapters = bookData.chapters;

            // Criar botões de capítulos
            chapters.forEach((chapter, index) => {
                const button = document.createElement('button');
                button.textContent = index + 1; // Número do capítulo
                button.onclick = () => displaySelectedChapter(book, index + 1); // Exibir capítulo selecionado
                chapterContainer.appendChild(button);
            });

            document.getElementById('chapterSection').style.display = 'block';
            document.getElementById('chapterSection').scrollIntoView({ behavior: 'smooth' });
        }
    }

    function displaySelectedChapter(book, chapter) {
        currentChapter = chapter;
        const outputContainer = document.getElementById('output');
        outputContainer.innerHTML = '';

        const bookData = data[currentVersion].find(b => b.abbrev === book); // Buscar o livro na versão selecionada

        if (bookData && bookData.chapters[chapter - 1]) {
            const chapterData = bookData.chapters[chapter - 1]; // Seleciona o capítulo correto
            document.getElementById('modalTitle').textContent = `${bookData.book} - Capítulo ${chapter}`;

            // Exibir os versículos do capítulo selecionado
            for (let verse in chapterData[chapter]) {
                const verseElement = document.createElement('p');
                verseElement.classList.add('verse');
                verseElement.innerHTML = `<span class="verse-number">${verse}</span>${chapterData[chapter][verse]}`;
                outputContainer.appendChild(verseElement);
            }
        }

        const modal = document.getElementById('myModal');
        modal.style.display = "flex";
    }

    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.getElementById('chapterSection').style.display = 'none';
        localStorage.setItem('modalClosed', 'true');
    }

    window.onload = function () {
        const modal = document.getElementById("myModal");
        if (localStorage.getItem('modalClosed') === 'true') {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    }

    window.onclick = function (event) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
            closeModal();
        }
    }

    function changeVersion(version) {
        currentVersion = version; // Atualiza a versão atual

        // Remove a seleção de todos os botões
        document.getElementById('btn-nvi').classList.remove('selected');
        document.getElementById('btn-aa').classList.remove('selected');
        document.getElementById('btn-acf').classList.remove('selected');

        // Adiciona a classe 'selected' ao botão da versão atual
        document.getElementById('btn-' + version).classList.add('selected');

        // Se já houver um livro e capítulo selecionados, atualiza o conteúdo
        if (currentBook) {
            displayChapters(currentBook); // Atualiza os capítulos da nova versão
            displaySelectedChapter(currentBook, currentChapter); // Exibe o capítulo atual na nova versão
        }
    }


    function navigateChapter(direction) {
        if (direction === 'prev' && currentChapter > 1) {
            displaySelectedChapter(currentBook, currentChapter - 1);
        } else if (direction === 'next') {
            const bookData = data[currentVersion].find(b => b.abbrev === currentBook);
            if (bookData && currentChapter < bookData.chapters.length) {
                displaySelectedChapter(currentBook, currentChapter + 1);
            }
        }
    }


    function displaySelectedChapter(book, chapter) {
        currentChapter = chapter;
        const outputContainer = document.getElementById('output');
        outputContainer.innerHTML = '';

        const bookData = data[currentVersion].find(b => b.abbrev === book);

        if (bookData && bookData.chapters[chapter - 1]) {
            const chapterData = bookData.chapters[chapter - 1];
            document.getElementById('modalTitle').textContent = `${bookData.book} - Capítulo ${chapter}`;

            // Exibir os versículos do capítulo
            for (let verse in chapterData[chapter]) {
                const verseElement = document.createElement('p');
                verseElement.classList.add('verse');
                verseElement.innerHTML = `<span class="verse-number">${verse}</span> ${chapterData[chapter][verse]}`;
                outputContainer.appendChild(verseElement);

                // Adiciona eventos para interação
                verseElement.onclick = () => selectVerse(verseElement, verse, chapter); // Selecionar versículo
                if (localStorage.getItem(`${book}-${chapter}-${verse}`)) {
                    verseElement.classList.add('highlighted'); // Aplica destaque se marcado
                }
            }
        }

        const modal = document.getElementById('myModal');
        modal.style.display = "flex";
    }

    function selectVerse(verseElement, verse, chapter) {
        // Mostra as opções ao clicar em um versículo
        const optionsContainer = document.getElementById('verseOptions');
        optionsContainer.style.display = 'block';

        // Evento para copiar o versículo
        document.getElementById('copyVerse').onclick = () => {
            navigator.clipboard.writeText(verseElement.textContent);
            alert('Versículo copiado!');
        };

        // Evento para compartilhar o versículo
        document.getElementById('shareVerse').onclick = () => {
            const shareText = verseElement.textContent;
            if (navigator.share) {
                navigator.share({
                    title: 'Versículo da Bíblia',
                    text: shareText,
                }).catch(console.error);
            } else {
                alert('Compartilhamento não suportado neste navegador.');
            }
        };

        // Evento para destacar o versículo
        document.getElementById('highlightVerse').onclick = () => {
            verseElement.classList.toggle('highlighted');
            if (verseElement.classList.contains('highlighted')) {
                localStorage.setItem(`${currentBook}-${currentChapter}-${verse}`, 'highlighted'); // Salva destaque
            } else {
                localStorage.removeItem(`${currentBook}-${currentChapter}-${verse}`); // Remove destaque
            }
        };
    }
    document.getElementById("closeOptions").addEventListener("click", function () {
        document.getElementById("verseOptions").style.display = "none"; // Esconde os botões
        // Aqui você pode adicionar qualquer lógica que precise ser executada ao fechar
    });

    // Exemplo de como mostrar os botões (caso precise):
    function showOptions() {
        document.getElementById("verseOptions").style.display = "flex"; // Mostra os botões
    }

    // Função de leitura 

    function leitura() {
        // Seleciona o contêiner de saída onde os versículos foram exibidos
        const outputContainer = document.getElementById('output');

        // Verifica se há versículos exibidos
        if (outputContainer.innerHTML.trim() === '') {
            alert('Nenhum versículo para ler.');
            return;
        }

        // Extrai o texto de cada versículo exibido
        const verseElements = outputContainer.querySelectorAll('.verse');
        let versesText = '';
        verseElements.forEach(verseElement => {
            versesText += verseElement.textContent + ' ';
        });

        // Converte o texto para fala usando a API Web Speech
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(versesText);
            utterance.lang = 'pt-BR'; // Define o idioma como português

            // Configurações adicionais de fala
            utterance.rate = 1; // Velocidade
            utterance.pitch = 1; // Tom

            // Lê o texto
            speechSynthesis.speak(utterance);
        } else {
            alert('Este navegador não suporta leitura de texto em voz.');
        }
    }

    function pararLeitura() {
        // Verifica se o speechSynthesis está falando e interrompe a leitura
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Cancela a leitura atual
        }
    }

    let lendo = false; // Variável para rastrear o estado da leitura

    function alternarLeitura() {
        if (lendo) {
            pararLeitura();
        } else {
            iniciarLeitura();
        }
    }

    function iniciarLeitura() {
        const outputContainer = document.getElementById('output');

        // Verifica se há versículos exibidos
        if (outputContainer.innerHTML.trim() === '') {
            alert('Nenhum versículo para ler.');
            return;
        }

        // Extrai o texto de cada versículo exibido
        const verseElements = outputContainer.querySelectorAll('.verse');
        let versesText = '';
        verseElements.forEach(verseElement => {
            versesText += verseElement.textContent + ' ';
        });

        // Converte o texto para fala usando a API Web Speech
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(versesText);
            utterance.lang = 'pt-BR';

            // Configurações adicionais de fala
            utterance.rate = 1;
            utterance.pitch = 1;

            // Atualiza o estado e o botão para "Parar"
            lendo = true;
            atualizarBotaoLeitura();

            // Define o que fazer ao terminar a leitura
            utterance.onend = () => {
                lendo = false;
                atualizarBotaoLeitura();
            };

            // Inicia a leitura
            speechSynthesis.speak(utterance);
        } else {
            alert('Este navegador não suporta leitura de texto em voz.');
        }
    }

    function pararLeitura() {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Cancela a leitura
        }
        lendo = false;
        atualizarBotaoLeitura(); // Atualiza o botão para "Leitura"
    }

    function atualizarBotaoLeitura() {
        const botao = document.querySelector('.leitura-button');
        const icone = document.getElementById('leituraIcon');

        if (lendo) {
            botao.innerHTML = '<i id="leituraIcon" class="fa fa-stop"></i> Parar';
        } else {
            botao.innerHTML = '<i id="leituraIcon" class="fa fa-volume-up"></i> Leitura';
        }
    }

    // ................................................................................................................................... 
    var version = ""; // Variável que será atualizada ao clicar nas opções do menu

    function toggleDropdown() {
        document.querySelector('.unique-dropdown').classList.toggle('show');
    }

    function selectOption(option, abbr) {
        version = abbr; // Atualiza a variável version com a abreviação da opção selecionada

        // Atualiza o texto do botão e mantém a seta
        var dropBtn = document.querySelector('.unique-dropbtn');
        dropBtn.innerHTML = option + '<span class="unique-arrow-down"></span>'; // Reconstrói o botão com a seta

        document.querySelector('.unique-dropdown').classList.remove('show');
    }

    // Fecha o dropdown ao clicar em qualquer lugar fora do menu ou botão
    document.addEventListener('click', function (event) {
        var dropdown = document.querySelector('.unique-dropdown');
        var dropBtn = document.querySelector('.unique-dropbtn');

        // Verifica se o clique foi fora do botão de dropdown e do menu
        if (!dropBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
    