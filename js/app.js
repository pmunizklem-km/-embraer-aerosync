const FOOD_DB = {
  cafe_da_manha: {
    title: "Café da Manhã", icon: "fa-sun", color: "#f39c12",
    items: [
      { nome: "Ovos mexidos (2 unidades)", qty: "2 ovos + 1 colher de chá de azeite", kcal: 180, protein: 14, carbs: 1, fat: 13,
        substituicoes: [
          { nome: "Omelete de claras (4 claras)", kcal: 70 },
          { nome: "Ovos pochê (2 unidades)", kcal: 160 },
          { nome: "Ovos cozidos (2 unidades)", kcal: 150 },
          { nome: "Omelete de queijo minas (2 ovos + 30g queijo)", kcal: 220 },
          { nome: "Ovos mexidos com espinafre (2 ovos + 100g)", kcal: 190 }
        ] },
      { nome: "Pão integral (2 fatias)", qty: "2 fatias (50g cada)", kcal: 220, protein: 8, carbs: 40, fat: 3,
        substituicoes: [
          { nome: "Tapioca (2 colheres de sopa)", kcal: 130 },
          { nome: "Pão de centeio (2 fatias)", kcal: 180 },
          { nome: "Crepioca (1 unidade)", kcal: 150 },
          { nome: "Panqueca de aveia (2 unidades)", kcal: 200 },
          { nome: "Pão de batata doce (2 fatias)", kcal: 160 }
        ] },
      { nome: "Café preto sem açúcar", qty: "200ml", kcal: 5, protein: 0, carbs: 0, fat: 0,
        substituicoes: [
          { nome: "Chá verde sem açúcar", kcal: 2 },
          { nome: "Café com leite desnatado (200ml)", kcal: 50 },
          { nome: "Chá de hibisco sem açúcar", kcal: 2 },
          { nome: "Café com leite de amêndoas (200ml)", kcal: 35 },
          { nome: "Chá de gengibre com limão", kcal: 5 }
        ] },
      { nome: "Banana (1 unidade)", qty: "1 unidade média (100g)", kcal: 90, protein: 1, carbs: 22, fat: 0,
        substituicoes: [
          { nome: "Maçã (1 unidade média)", kcal: 80 },
          { nome: "Mamão (1 fatia média)", kcal: 85 },
          { nome: "Pera (1 unidade média)", kcal: 95 },
          { nome: "Melancia (1 fatia média)", kcal: 70 },
          { nome: "Laranja (1 unidade média)", kcal: 60 }
        ] }
    ] },
  lanche_manha: {
    title: "Lanche da Manhã", icon: "fa-apple-alt", color: "#e67e22",
    items: [
      { nome: "Iogurte natural desnatado", qty: "1 pote (170g)", kcal: 90, protein: 10, carbs: 10, fat: 0,
        substituicoes: [
          { nome: "Iogurte grego natural (100g)", kcal: 120 },
          { nome: "Iogurte de soja (170g)", kcal: 95 },
          { nome: "Kefir (200ml)", kcal: 85 },
          { nome: "Iogurte de coco (170g)", kcal: 110 },
          { nome: "Queijo cottage (100g)", kcal: 80 }
        ] },
      { nome: "Castanhas (mix)", qty: "30g (cerca de 10 unidades)", kcal: 175, protein: 5, carbs: 6, fat: 15,
        substituicoes: [
          { nome: "Amêndoas (30g)", kcal: 170 },
          { nome: "Nozes (30g)", kcal: 185 },
          { nome: "Pasta de amendoim (1 colher sopa)", kcal: 100 },
          { nome: "Castanha de caju (30g)", kcal: 165 },
          { nome: "Semente de abóbora (30g)", kcal: 160 }
        ] }
    ] },
  almoco: {
    title: "Almoço", icon: "fa-utensils", color: "#27ae60",
    items: [
      { nome: "Peito de frango grelhado", qty: "150g", kcal: 248, protein: 46, carbs: 0, fat: 6,
        substituicoes: [
          { nome: "Salmão grelhado (150g)", kcal: 312 },
          { nome: "Carne magra grelhada (150g)", kcal: 285 },
          { nome: "Filé de tilápia grelhado (180g)", kcal: 220 },
          { nome: "Coxa de frango sem pele assada (150g)", kcal: 260 },
          { nome: "Lombo suíno grelhado (150g)", kcal: 270 },
          { nome: "Filé de frango à parmegiana (150g)", kcal: 320 }
        ] },
      { nome: "Arroz integral", qty: "200g cozido (4 colheres sopa)", kcal: 220, protein: 5, carbs: 46, fat: 2,
        substituicoes: [
          { nome: "Quinoa (200g cozida)", kcal: 240 },
          { nome: "Arroz de couve-flor (300g)", kcal: 75 },
          { nome: "Batata doce (200g cozida)", kcal: 180 },
          { nome: "Macarrão integral (200g cozido)", kcal: 210 },
          { nome: "Cuscuz marroquino (200g)", kcal: 200 },
          { nome: "Purê de batata baroa (200g)", kcal: 170 }
        ] },
      { nome: "Brócolis no vapor", qty: "150g", kcal: 50, protein: 4, carbs: 8, fat: 0,
        substituicoes: [
          { nome: "Couve-flor no vapor (150g)", kcal: 37 },
          { nome: "Espinafre refogado (150g)", kcal: 55 },
          { nome: "Vagem cozida (150g)", kcal: 60 },
          { nome: "Abobrinha grelhada (150g)", kcal: 40 },
          { nome: "Aspargos grelhados (150g)", kcal: 45 },
          { nome: "Quiabo refogado (150g)", kcal: 55 }
        ] },
      { nome: "Salada verde (alface, rúcula, tomate)", qty: "À vontade com 1 colher de azeite", kcal: 60, protein: 1, carbs: 4, fat: 5,
        substituicoes: [
          { nome: "Salada com molho de iogurte", kcal: 70 },
          { nome: "Salada de pepino e hortelã", kcal: 40 },
          { nome: "Salada de repolho e cenoura ralada", kcal: 50 },
          { nome: "Salada de grão de bico (100g)", kcal: 130 },
          { nome: "Salada de beterraba ralada", kcal: 55 }
        ] }
    ] },
  lanche_tarde: {
    title: "Lanche da Tarde", icon: "fa-cookie-bite", color: "#e74c3c",
    items: [
      { nome: "Frutas variadas", qty: "1 xícara (150g)", kcal: 75, protein: 1, carbs: 18, fat: 0,
        substituicoes: [
          { nome: "Vitamina de frutas (200ml)", kcal: 120 },
          { nome: "Suco natural de laranja (200ml)", kcal: 90 },
          { nome: "Frutas vermelhas congeladas (150g)", kcal: 55 },
          { nome: "Salada de frutas (150g)", kcal: 85 },
          { nome: "Smoothie verde (200ml)", kcal: 110 }
        ] },
      { nome: "Barra de cereal integral", qty: "1 unidade (30g)", kcal: 120, protein: 3, carbs: 20, fat: 4,
        substituicoes: [
          { nome: "Granola (30g)", kcal: 130 },
          { nome: "Torrada integral (2 unidades)", kcal: 110 },
          { nome: "Biscoito de arroz (4 unidades)", kcal: 100 },
          { nome: "Pão de forma integral (1 fatia)", kcal: 70 },
          { nome: "Cookie integral (1 unidade)", kcal: 90 }
        ] }
    ] },
  jantar: {
    title: "Jantar", icon: "fa-moon", color: "#8e44ad",
    items: [
      { nome: "Omelete de claras com legumes", qty: "4 claras + legumes à vontade", kcal: 180, protein: 16, carbs: 6, fat: 10,
        substituicoes: [
          { nome: "Sopa detox de legumes (300ml)", kcal: 120 },
          { nome: "Peixe grelhado com legumes (180g)", kcal: 220 },
          { nome: "Salada completa com atum (250g)", kcal: 200 },
          { nome: "Wrap integral com frango (1 unidade)", kcal: 250 },
          { nome: "Berinjela recheada com tofu (200g)", kcal: 180 }
        ] },
      { nome: "Abobrinha refogada", qty: "200g com alho e azeite", kcal: 70, protein: 3, carbs: 6, fat: 4,
        substituicoes: [
          { nome: "Berinjela grelhada (200g)", kcal: 65 },
          { nome: "Chuchu cozido (200g)", kcal: 40 },
          { nome: "Palmito cozido (200g)", kcal: 45 },
          { nome: "Tomate recheado (2 unidades)", kcal: 60 },
          { nome: "Cenoura refogada (200g)", kcal: 70 }
        ] }
    ] }
};

const VEGAN_FOOD = {
  cafe_da_manha: [
    { nome: "Smoothie de banana com leite vegetal", qty: "300ml", kcal: 160 },
    { nome: "Pão integral com pasta de amendoim", qty: "2 fatias + 1 colher sopa", kcal: 280 },
    { nome: "Tapioca com coco ralado", qty: "2 colheres + 1 colher coco", kcal: 200 },
    { nome: "Mingau de aveia com leite vegetal", qty: "300ml", kcal: 220 },
    { nome: "Panqueca de banana vegana (2 unidades)", qty: "2 unidades", kcal: 240 }
  ],
  lanche_manha: [
    { nome: "Frutas da estação", qty: "200g", kcal: 80 },
    { nome: "Mix de castanhas", qty: "30g", kcal: 170 },
    { nome: "Húmus com palitos de cenoura", qty: "100g + 100g", kcal: 150 },
    { nome: "Barrinha vegana de cacau", qty: "1 unidade (35g)", kcal: 130 },
    { nome: "Chips de banana verde assada", qty: "50g", kcal: 110 }
  ],
  almoco: [
    { nome: "Tofu grelhado com legumes", qty: "200g tofu + 200g legumes", kcal: 280 },
    { nome: "Quinoa com grão de bico e salada", qty: "300g", kcal: 340 },
    { nome: "Lentilha com arroz integral e couve", qty: "300g", kcal: 320 },
    { nome: "Strogonoff de cogumelos com arroz", qty: "350g", kcal: 300 },
    { nome: "Curry de grão de bico com arroz basmati", qty: "350g", kcal: 360 }
  ],
  lanche_tarde: [
    { nome: "Suco verde detox", qty: "300ml", kcal: 70 },
    { nome: "Frutas secas (damascos, tâmaras)", qty: "40g", kcal: 120 },
    { nome: "Leite vegetal batido com frutas", qty: "250ml", kcal: 100 },
    { nome: "Pão de queijo vegano (2 unidades)", qty: "2 unidades", kcal: 140 },
    { nome: "Bolinho de aveia e banana (2 unidades)", qty: "2 unidades", kcal: 160 }
  ],
  jantar: [
    { nome: "Sopa de legumes com grão de bico", qty: "350ml", kcal: 180 },
    { nome: "Salada de quinoa com abacate", qty: "300g", kcal: 280 },
    { nome: "Wrap integral com patê de tofu e salada", qty: "1 unidade grande", kcal: 250 },
    { nome: "Lasanha de berinjela vegana (200g)", qty: "200g", kcal: 220 },
    { nome: "Creme de abóbora com gengibre (300ml)", qty: "300ml", kcal: 150 }
  ]
};

const WORKOUT_DAYS = {
  segunda: {
    nome: "Segunda-feira", titulo: "Peito", cor: "#e74c3c", icone: "fa-dumbbell",
    exercises: [
      { nome: "Supino com Halteres", musculo: "Peitoral, Ombro Anterior, Tríceps", series: "4 séries de 8-12 repetições",
        icon: "fa-arrow-up", color: "#c0392b",
        steps: [
          "Deite-se em um banco reto segurando um halter em cada mão.",
          "Posicione os halteres na altura do peito com as palmas voltadas para frente.",
          "Empurre os halteres para cima até estender completamente os braços.",
          "Não trave os cotovelos no topo do movimento.",
          "Desça lentamente os halteres até a altura do peito.",
          "Mantenha os pés firmes no chão e o abdômen contraído."
        ] },
      { nome: "Flexão de Braço", musculo: "Peitoral, Tríceps, Ombro Anterior", series: "4 séries de 10-15 repetições",
        icon: "fa-hand-peace", color: "#e74c3c",
        steps: [
          "Deite-se de barriga para baixo com as mãos apoiadas no chão na largura dos ombros.",
          "Estenda os braços e mantenha o corpo reto formando uma linha reta.",
          "Flexione os cotovelos descendo o peito em direção ao chão.",
          "Pare quando os cotovelos formarem 90 graus.",
          "Empurre o chão para voltar à posição inicial.",
          "Mantenha o abdômen contraído para não arquear as costas."
        ] },
      { nome: "Crucifixo com Halteres", musculo: "Peitoral, Ombro Anterior", series: "3 séries de 10-12 repetições",
        icon: "fa-arrows-alt-h", color: "#e74c3c",
        steps: [
          "Deite em um banco reto com halteres acima do peito, palmas voltadas uma para a outra.",
          "Mantenha uma leve flexão nos cotovelos durante todo o movimento.",
          "Abra os braços lateralmente até sentir alongamento no peitoral.",
          "Contraia o peitoral para voltar à posição inicial.",
          "Expire ao subir e inspire ao descer.",
          "Nao estique completamente os braços para manter tensão no peitoral."
        ] },
      { nome: "Flexão Declinada", musculo: "Peitoral Superior, Ombro Anterior, Tríceps", series: "3 séries de 10-12 repetições",
        icon: "fa-arrow-down", color: "#c0392b",
        steps: [
          "Posicione os pes em um banco ou superficie elevada.",
          "Coloque as maos no chao na largura dos ombros.",
          "Mantenha o corpo reto formando uma linha reta da cabeca aos pes.",
          "Flexione os cotovelos descendo o peito em direcao ao chao.",
          "Empurre de volta a posicao inicial com forca.",
          "Maior enfase no peitoral superior e ombros."
        ] }
    ] },
  terca: {
    nome: "Terça-feira", titulo: "Costas e Bíceps", cor: "#3498db", icone: "fa-dumbbell",
    exercises: [
      { nome: "Remada Curvada com Halteres", musculo: "Costas (Latíssimo do dorso), Bíceps", series: "4 séries de 10-12 repetições",
        icon: "fa-hand-rock", color: "#2980b9",
        steps: [
          "Segure um halter em cada mão com as palmas voltadas para o corpo.",
          "Incline o tronco para frente mantendo a coluna reta, cerca de 45 graus.",
          "Deixe os braços pendurados naturalmente.",
          "Puxe os halteres em direção ao quadril, apertando as escápulas.",
          "Segure por 1 segundo no topo do movimento.",
          "Desça lentamente os halteres até a posição inicial."
        ] },
      { nome: "Puxada Alta na Polia", musculo: "Costas, Bíceps, Ombro Posterior", series: "4 séries de 12 repetições",
        icon: "fa-arrow-down", color: "#1abc9c",
        steps: [
          "Sente-se no aparelho de polia alta e ajuste o suporte para as coxas.",
          "Segure a barra com as mãos mais abertas que a largura dos ombros.",
          "Incline levemente o tronco para trás.",
          "Puxe a barra em direção ao peito, apertando as escápulas.",
          "Expire durante a puxada.",
          "Volte lentamente à posição inicial controlando o peso."
        ] },
      { nome: "Rosca Direta com Halteres", musculo: "Bíceps", series: "4 séries de 10-12 repetições",
        icon: "fa-dumbbell", color: "#3498db",
        steps: [
          "Fique em pé com halteres nas mãos e palmas voltadas para frente.",
          "Mantenha os cotovelos colados ao tronco.",
          "Eleve os halteres em direção aos ombros contraindo o bíceps.",
          "Apenas os antebraços devem se mover.",
          "Segure por 1 segundo no topo apertando o bíceps.",
          "Desça lentamente até a posição inicial."
        ] },
      { nome: "Rosca Martelo", musculo: "Bíceps (Braquial), Antebraço", series: "3 séries de 10-12 repetições",
        icon: "fa-hand-rock", color: "#2980b9",
        steps: [
          "Fique em pé com halteres nas mãos e palmas voltadas uma para a outra.",
          "Mantenha os cotovelos colados ao tronco.",
          "Eleve os halteres em direção aos ombros sem girar os punhos.",
          "Segure por 1 segundo no topo.",
          "Desça lentamente até a posição inicial.",
          "Mantenha o movimento controlado sem balançar o corpo."
        ] },
      { nome: "Encolhimento de Ombros com Halteres", musculo: "Trapézio, Ombros", series: "4 séries de 12-15 repetições",
        icon: "fa-arrow-up", color: "#3498db",
        steps: [
          "Fique em pe com halteres ao lado do corpo e bracos estendidos.",
          "Mantenha os ombros relaxados e a coluna ereta.",
          "Eleve os ombros em direcao as orelhas o maximo possivel.",
          "Segure por 2 segundos no topo contraindo o trapezio.",
          "Desca lentamente ate a posicao inicial.",
          "Nao gire os ombros, apenas movimento vertical puro."
        ] }
    ] },
  quarta: {
    nome: "Quarta-feira", titulo: "Pernas e Abdômen", cor: "#27ae60", icone: "fa-dumbbell",
    exercises: [
      { nome: "Agachamento Completo", musculo: "Quadríceps, Glúteos, Posterior", series: "4 séries de 12-15 repetições",
        icon: "fa-child", color: "#27ae60",
        steps: [
          "Fique em pé com os pés afastados na largura dos ombros.",
          "Mantenha a coluna ereta e o abdômen contraído.",
          "Flexione os joelhos e empurre o quadril para trás como se fosse sentar.",
          "Desça até que as coxas fiquem paralelas ao chão.",
          "Expire ao subir voltando à posição inicial.",
          "Mantenha os joelhos alinhados com os pés durante todo o movimento."
        ] },
      { nome: "Afundo com Halteres", musculo: "Quadríceps, Glúteos, Posterior de Coxa", series: "3 séries de 10-12 repetições por perna",
        icon: "fa-walking", color: "#2ecc71",
        steps: [
          "Fique em pé com halteres ao lado do corpo e pés na largura do quadril.",
          "Dê um passo à frente com uma perna.",
          "Flexione ambos os joelhos até formar 90 graus.",
          "O joelho da perna de trás deve quase tocar o chão.",
          "Empurre com a perna da frente para voltar à posição inicial.",
          "Mantenha o tronco ereto durante todo o movimento."
        ] },
      { nome: "Elevação de Panturrilha", musculo: "Panturrilha (Gastrocnêmio, Sóleo)", series: "4 séries de 15-20 repetições",
        icon: "fa-tooth", color: "#fd79a8",
        steps: [
          "Fique em pé com a ponta dos pés apoiada em um degrau.",
          "Os calcanhares devem ficar pendurados para fora.",
          "Eleve os calcanhares o máximo possível ficando na ponta dos pés.",
          "Segure por 2 segundos no topo contraindo a panturrilha.",
          "Desça lentamente até abaixo do nível do degrau para alongar.",
          "Para mais intensidade, faça um exercício de cada vez com halteres."
        ] },
      { nome: "Stiff com Halteres", musculo: "Posterior de Coxa, Glúteos, Lombar", series: "3 séries de 10-12 repetições",
        icon: "fa-arrow-down", color: "#27ae60",
        steps: [
          "Fique em pe com halteres na frente das coxas.",
          "Mantenha as pernas estendidas ou levemente flexionadas.",
          "Incline o tronco para frente empurrando o quadril para tras.",
          "Desca os halteres ao longo das pernas mantendo a coluna reta.",
          "Sinta o alongamento no posterior de coxa.",
          "Volte a posicao inicial contraindo o posterior e gluteos."
        ] },
      { nome: "Ponte (Glúteos)", musculo: "Glúteos, Lombar, Abdômen", series: "3 séries de 15 repetições",
        icon: "fa-undo-alt", color: "#2ecc71",
        steps: [
          "Deite-se de costas com joelhos flexionados e pes apoiados no chao.",
          "Bracos ao lado do corpo com palmas para baixo.",
          "Eleve o quadril contraindo os gluteos ate formar uma linha reta.",
          "Segure por 2 segundos no topo apertando os gluteos.",
          "Desca lentamente sem tocar o chao.",
          "Mantenha o abdomen contraido durante todo o movimento."
        ] },
      { nome: "Prancha", musculo: "Abdômen, Core, Lombar", series: "3 séries de 30-60 segundos",
        icon: "fa-undo-alt", color: "#e67e22",
        steps: [
          "Deite-se de barriga para baixo e apoie os antebraços no chão.",
          "Os cotovelos devem estar alinhados com os ombros.",
          "Eleve o corpo apoiando apenas nos antebraços e pontas dos pés.",
          "Mantenha o corpo reto formando uma linha reta da cabeça aos calcanhares.",
          "Contraia o abdômen e os glúteos para manter a posição.",
          "Respire profundamente e mantenha a posição pelo tempo determinado."
        ] },
      { nome: "Abdominal Remador", musculo: "Abdômen Completo", series: "3 séries de 15-20 repetições",
        icon: "fa-couch", color: "#6c5ce7",
        steps: [
          "Deite-se no chão com joelhos flexionados e pés apoiados.",
          "Coloque as mãos atrás da cabeça sem puxar o pescoço.",
          "Eleve o tronco em direção aos joelhos contraindo o abdômen.",
          "Expire ao subir e inspire ao descer.",
          "Não levante a lombar do chão.",
          "Desça lentamente sem relaxar o abdômen."
        ] }
    ] },
  quinta: {
    nome: "Quinta-feira", titulo: "Ombro e Tríceps", cor: "#9b59b6", icone: "fa-dumbbell",
    exercises: [
      { nome: "Desenvolvimento com Halteres", musculo: "Ombro (Deltoide), Tríceps", series: "4 séries de 8-12 repetições",
        icon: "fa-arrow-up", color: "#8e44ad",
        steps: [
          "Sente-se em um banco com encosto e segure halteres na altura dos ombros.",
          "Mantenha as palmas voltadas para frente e cotovelos a 90 graus.",
          "Empurre os halteres para cima até estender completamente os braços.",
          "Não trave os cotovelos no topo.",
          "Desça lentamente os halteres até a altura dos ombros.",
          "Mantenha o abdômen contraído e a coluna apoiada no encosto."
        ] },
      { nome: "Elevação Lateral", musculo: "Ombro (Deltoide Lateral)", series: "3 séries de 12-15 repetições",
        icon: "fa-arrows-alt-h", color: "#00b894",
        steps: [
          "Fique em pé com halteres leves nas mãos ao lado do corpo.",
          "Mantenha uma leve flexão nos cotovelos.",
          "Eleve os braços lateralmente até a altura dos ombros.",
          "As palmas devem ficar voltadas para baixo.",
          "Segure por 1 segundo no topo.",
          "Desça lentamente controlando o movimento."
        ] },
      { nome: "Elevação Frontal", musculo: "Ombro (Deltoide Anterior)", series: "3 séries de 12-15 repetições",
        icon: "fa-arrow-up", color: "#a29bfe",
        steps: [
          "Fique em pe com halteres na frente das coxas e palmas voltadas para tras.",
          "Mantenha os bracos estendidos com leve flexao nos cotovelos.",
          "Eleve os bracos a frente ate a altura dos ombros.",
          "Segure por 1 segundo no topo.",
          "Desca lentamente controlando o movimento.",
          "Mantenha o tronco ereto sem balancar o corpo."
        ] },
      { nome: "Tríceps Testa com Halteres", musculo: "Tríceps", series: "3 séries de 12-15 repetições",
        icon: "fa-hand-paper", color: "#e91e63",
        steps: [
          "Deite-se em um banco reto segurando um halter com ambas as mãos.",
          "Estenda os braços para cima, perpendiculares ao chão.",
          "Flexione os cotovelos levando o halter em direção à testa.",
          "Mantenha os braços parados, apenas os antebraços se movem.",
          "Estenda os braços novamente voltando à posição inicial.",
          "Não abra os cotovelos para os lados durante o movimento."
        ] },
      { nome: "Tríceps Coice com Halteres", musculo: "Tríceps", series: "3 séries de 12-15 repetições",
        icon: "fa-hand-rock", color: "#9b59b6",
        steps: [
          "Incline o tronco para frente com a coluna reta, cerca de 45 graus.",
          "Segure um halter com o braco colado ao tronco e cotovelo a 90 graus.",
          "Estenda o braco para tras contraindo o triceps.",
          "Apenas o antebraco deve se mover.",
          "Segure por 1 segundo no topo contraindo o triceps.",
          "Volte lentamente a posicao inicial controlando o peso."
        ] }
    ] },
  sexta: {
    nome: "Sexta-feira", titulo: "Cardio / Full Body", cor: "#f39c12", icone: "fa-heartbeat",
    exercises: [
      { nome: "Burpee", musculo: "Corpo Inteiro (Cardio)", series: "4 séries de 10-15 repetições",
        icon: "fa-running", color: "#e67e22",
        steps: [
          "Fique em pé com os pés na largura dos ombros.",
          "Agache e coloque as mãos no chão à sua frente.",
          "Pule com os pés para trás ficando na posição de flexão.",
          "Execute uma flexão de braço completa.",
          "Puxe os pés de volta para perto das mãos em um pulo.",
          "Salte verticalmente com os braços estendidos acima da cabeça."
        ] },
      { nome: "Mountain Climber", musculo: "Abdômen, Quadríceps, Cardio", series: "4 séries de 30 segundos",
        icon: "fa-mountain", color: "#f1c40f",
        steps: [
          "Comece na posição de prancha alta com braços estendidos.",
          "Mantenha o corpo reto da cabeça aos calcanhares.",
          "Leve um joelho em direção ao peito rapidamente.",
          "Volte à posição inicial e alterne a perna.",
          "Mantenha o movimento contínuo e rápido.",
          "Respire de forma regular durante o exercício."
        ] },
      { nome: "Polichinelo (Jumping Jack)", musculo: "Corpo Inteiro, Cardio", series: "3 séries de 30-45 segundos",
        icon: "fa-arrows-alt", color: "#f39c12",
        steps: [
          "Fique em pe com bracos ao lado do corpo e pes juntos.",
          "Salte abrindo as pernas para os lados.",
          "Simultaneamente, eleve os bracos acima da cabeca.",
          "Salte novamente voltando a posicao inicial.",
          "Mantenha o movimento continuo e ritmado.",
          "Respire de forma regular durante o exercicio."
        ] },
      { nome: "Joelho Alto (Corrida Estacionária)", musculo: "Quadríceps, Abdômen, Cardio", series: "3 séries de 30 segundos",
        icon: "fa-running", color: "#e67e22",
        steps: [
          "Fique em pe com os pes na largura do quadril.",
          "Eleve alternadamente os joelhos em direcao ao peito.",
          "Mantenha o movimento rapido e continuo.",
          "Balance os bracos para manter o ritmo.",
          "Mantenha o abdomen contraido e a coluna ereta.",
          "Realize o mais rapido possivel com controle."
        ] },
      { nome: "Pular Corda Simulado", musculo: "Panturrilha, Cardio, Coordenação", series: "3 séries de 45 segundos",
        icon: "fa-arrow-up", color: "#f39c12",
        steps: [
          "Fique em pe com os pes juntos e bracos ao lado do corpo.",
          "Simule o movimento de pular corda com as maos.",
          "Salte levemente com os pes, alternando ou com os dois juntos.",
          "Mantenha o movimento continuo e ritmado.",
          "Aterre suavemente na ponta dos pes.",
          "Mantenha o abdomen contraido e olhar para frente."
        ] }
    ] }
};

let currentPlan = {};

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dietafit_plano');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.nome) {
        document.getElementById('nome').value = data.nome || '';
        document.getElementById('idade').value = data.idade || '';
        document.getElementById('genero').value = data.genero || '';
        document.getElementById('altura').value = data.altura || '';
        document.getElementById('pesoAtual').value = data.pesoAtual || '';
        document.getElementById('pesoAlvo').value = data.pesoAlvo || '';
        document.getElementById('atividade').value = data.atividade || '';
        if (data.objetivos) {
          document.querySelectorAll('input[name="objetivos"]').forEach(cb => {
            cb.checked = data.objetivos.includes(cb.value);
          });
        }
        if (data.restricoes) {
          document.querySelectorAll('input[name="restricoes"]').forEach(cb => {
            cb.checked = data.restricoes.includes(cb.value);
          });
        }
      }
    } catch (e) {}
  }
});

function toggleMobileMenu() {
  document.querySelector('.nav-links').classList.toggle('mobile-open');
}

function lerRestricoes() {
  return Array.from(document.querySelectorAll('input[name="restricoes"]:checked')).map(cb => cb.value);
}

function lerObjetivos() {
  return Array.from(document.querySelectorAll('input[name="objetivos"]:checked')).map(cb => cb.value);
}

function calcularBMR(peso, altura, idade, genero) {
  if (genero === 'masculino') return 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
  return 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
}

function calcularTDEE(bmr, atividade) { return bmr * parseFloat(atividade); }

function calcularIMC(peso, altura) { return peso / ((altura / 100) * (altura / 100)); }

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade Grau I";
  if (imc < 40) return "Obesidade Grau II";
  return "Obesidade Grau III";
}

function gerarPlano() {
  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const genero = document.getElementById('genero').value;
  const altura = parseFloat(document.getElementById('altura').value);
  const pesoAtual = parseFloat(document.getElementById('pesoAtual').value);
  const pesoAlvo = parseFloat(document.getElementById('pesoAlvo').value);
  const atividade = document.getElementById('atividade').value;
  const objetivos = lerObjetivos();
  const restricoes = lerRestricoes();

  if (!nome || !idade || !genero || !altura || !pesoAtual || !pesoAlvo || !atividade || !objetivos.length) {
    alert('Por favor, preencha todos os campos e selecione ao menos um objetivo.');
    return;
  }

  localStorage.setItem('dietafit_plano', JSON.stringify({
    nome, idade, genero, altura, pesoAtual, pesoAlvo, atividade, objetivos, restricoes
  }));

  const btn = document.getElementById('btnGerar');
  btn.classList.add('loading');
  btn.disabled = true;

  setTimeout(() => {
    const bmr = calcularBMR(pesoAtual, altura, idade, genero);
    const tdee = calcularTDEE(bmr, atividade);
    let caloriasDiarias, proteinPct, carbPct, fatPct;

    const hasPerder = objetivos.includes('perder') || objetivos.includes('definir');
    const hasGanhar = objetivos.includes('ganhar') || objetivos.includes('definir') || objetivos.includes('forca');
    const hasManter = objetivos.includes('manter');
    const hasCondicionamento = objetivos.includes('condicionamento');

    if (hasPerder && !hasGanhar) {
      caloriasDiarias = Math.round(tdee * 0.8);
      proteinPct = 0.40; carbPct = 0.30; fatPct = 0.30;
    } else if (hasGanhar && !hasPerder) {
      caloriasDiarias = Math.round(tdee * 1.15);
      proteinPct = 0.35; carbPct = 0.40; fatPct = 0.25;
    } else if (hasPerder && hasGanhar) {
      caloriasDiarias = Math.round(tdee * 0.95);
      proteinPct = 0.40; carbPct = 0.35; fatPct = 0.25;
    } else if (hasCondicionamento) {
      caloriasDiarias = Math.round(tdee * 1.0);
      proteinPct = 0.30; carbPct = 0.45; fatPct = 0.25;
    } else {
      caloriasDiarias = Math.round(tdee);
      proteinPct = 0.30; carbPct = 0.40; fatPct = 0.30;
    }

    const proteinasG = Math.round((caloriasDiarias * proteinPct) / 4);
    const carboidratosG = Math.round((caloriasDiarias * carbPct) / 4);
    const gordurasG = Math.round((caloriasDiarias * fatPct) / 9);
    const imcAtual = calcularIMC(pesoAtual, altura);
    const imcClass = classificarIMC(imcAtual);
    const semanas = Math.round(Math.abs(pesoAtual - pesoAlvo) / 0.5);
    const isVegano = restricoes.includes('vegano');

    const dieta = gerarDieta(isVegano);
    const treino = gerarTreino(objetivos);

    currentPlan = { nome, idade, altura, pesoAtual, pesoAlvo, genero, objetivos, caloriasDiarias, proteinasG, carboidratosG, gordurasG, imcAtual, imcClass, semanas, dieta, treino };

    document.getElementById('saudacaoNome').textContent = `Olá, ${nome}! Este é seu plano`;
    document.getElementById('caloriasDiarias').textContent = caloriasDiarias;
    document.getElementById('proteinasMacro').textContent = proteinasG;
    document.getElementById('carboidratosMacro').textContent = carboidratosG;
    document.getElementById('gordurasMacro').textContent = gordurasG;
    document.getElementById('imcAtual').textContent = imcAtual.toFixed(1);
    document.getElementById('imcClassificacao').textContent = imcClass;
    document.getElementById('tempoEstimado').textContent = semanas;

    const segments = document.querySelector('.macro-bar').querySelectorAll('.macro-bar-segment');
    segments[0].style.width = `${Math.round(proteinPct * 100)}%`;
    segments[0].querySelector('span').textContent = `Proteínas ${Math.round(proteinPct * 100)}%`;
    segments[1].style.width = `${Math.round(carbPct * 100)}%`;
    segments[1].querySelector('span').textContent = `Carboidratos ${Math.round(carbPct * 100)}%`;
    segments[2].style.width = `${Math.round(fatPct * 100)}%`;
    segments[2].querySelector('span').textContent = `Gorduras ${Math.round(fatPct * 100)}%`;

    renderizarDieta(dieta);
    renderizarTreino(treino);

    document.getElementById('resultados').style.display = 'block';
    document.getElementById('resultados').classList.add('active');
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth', block: 'start' });

    btn.classList.remove('loading');
    btn.disabled = false;
  }, 1200);
}

function gerarDieta(isVegano) {
  const dieta = {};
  for (const [refeicao, data] of Object.entries(FOOD_DB)) {
    dieta[refeicao] = { ...data, items: data.items.map(item => ({ ...item })), totalKcal: data.items.reduce((sum, i) => sum + i.kcal, 0) };
  }
  return dieta;
}

function renderizarDieta(dieta) {
  const grid = document.getElementById('dietaGrid');
  grid.innerHTML = '';
  const refeicoesOrdem = ['cafe_da_manha', 'lanche_manha', 'almoco', 'lanche_tarde', 'jantar'];
  const nomes = { cafe_da_manha: 'Café da Manhã', lanche_manha: 'Lanche da Manhã', almoco: 'Almoço', lanche_tarde: 'Lanche da Tarde', jantar: 'Jantar' };
  const icons = { cafe_da_manha: 'fa-sun', lanche_manha: 'fa-apple-alt', almoco: 'fa-utensils', lanche_tarde: 'fa-cookie-bite', jantar: 'fa-moon' };
  const cores = { cafe_da_manha: '#f39c12', lanche_manha: '#e67e22', almoco: '#27ae60', lanche_tarde: '#e74c3c', jantar: '#8e44ad' };
  const horarios = { cafe_da_manha: '06:00 - 08:00', lanche_manha: '09:30 - 10:30', almoco: '12:00 - 13:30', lanche_tarde: '15:30 - 16:30', jantar: '19:00 - 20:30' };

  for (const key of refeicoesOrdem) {
    const meal = dieta[key];
    if (!meal) continue;
    const totalKcal = meal.items.reduce((sum, i) => sum + i.kcal, 0);
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.id = `meal-${key}`;
    card.innerHTML = `
      <div class="meal-header" onclick="toggleMeal('${key}')">
        <i class="fas ${icons[key]}" style="background:${cores[key]}"></i>
        <h3>${nomes[key]}</h3>
        <span class="meal-time">${horarios[key]}</span>
        <span class="meal-calories">${totalKcal} kcal</span>
        <i class="fas fa-chevron-down meal-toggle"></i>
      </div>
      <div class="meal-body">
        <div class="meal-items" id="items-${key}">
          ${meal.items.map((item, idx) => `
            <div class="meal-item">
              <div class="meal-item-info">
                <span class="meal-item-name">${item.nome}</span>
                <span class="meal-item-qty">${item.qty}</span>
                <button class="substitution-btn" onclick="mostrarSubstituicoes('${key}', ${idx})">
                  <i class="fas fa-exchange-alt"></i> Substituir (${item.substituicoes.length} opções)
                </button>
                <div class="substitution-options" id="subs-${key}-${idx}">
                  ${item.substituicoes.map(sub => `
                    <div class="substitution-option" onclick="substituirItem('${key}', ${idx}, '${sub.nome}', ${sub.kcal})">
                      <span class="sub-name">${sub.nome}</span>
                      <span class="sub-kcal">${sub.kcal} kcal</span>
                    </div>
                  `).join('')}
                </div>
              </div>
              <span class="meal-item-kcal">${item.kcal} kcal</span>
            </div>
          `).join('')}
        </div>
      </div>`;
    grid.appendChild(card);
  }
}

function toggleMeal(mealId) { document.getElementById(`meal-${mealId}`).classList.toggle('open'); }

function mostrarSubstituicoes(refeicao, itemIdx) { document.getElementById(`subs-${refeicao}-${itemIdx}`).classList.toggle('show'); }

function substituirItem(refeicao, itemIdx, novoNome, novaKcal) {
  const meal = currentPlan.dieta[refeicao];
  if (!meal) return;
  meal.items[itemIdx].nome = novoNome;
  meal.items[itemIdx].kcal = novaKcal;
  document.getElementById(`subs-${refeicao}-${itemIdx}`).classList.remove('show');
  renderizarDieta(currentPlan.dieta);
}

function gerarTreino(objetivos) {
  const plan = {};
  const hasGanhar = objetivos.includes('ganhar') || objetivos.includes('definir') || objetivos.includes('forca');
  const hasPerder = objetivos.includes('perder') || objetivos.includes('definir');
  const hasForca = objetivos.includes('forca');

  for (const [dayKey, dayData] of Object.entries(WORKOUT_DAYS)) {
    const exercises = dayData.exercises.map(ex => {
      const ex2 = { ...ex };
      if (hasForca) ex2.series = ex2.series.replace(/\d+[-–]\d+/, '6-8').replace(/\d+[-–]\d+ segundos/, '20-30 segundos');
      else if (hasGanhar && !hasPerder) ex2.series = ex2.series.replace(/\d+[-–]\d+/, '8-12');
      else if (hasPerder && !hasGanhar) ex2.series = ex2.series.replace(/\d+[-–]\d+/, '15-20').replace(/\d+[-–]\d+ segundos/, '40-60 segundos');
      return ex2;
    });
    plan[dayKey] = { ...dayData, exercises };
  }
  return plan;
}

function renderizarTreino(treino) {
  const grid = document.getElementById('treinoGrid');
  grid.innerHTML = '';
  const daysOrder = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

  for (const dayKey of daysOrder) {
    const day = treino[dayKey];
    if (!day) continue;
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    dayCard.id = `day-${dayKey}`;

    let exercisesHtml = '';
    day.exercises.forEach((ex, idx) => {
      exercisesHtml += `
        <div class="exercise-card" id="exercise-${dayKey}-${idx}">
          <div class="exercise-header" onclick="toggleExercise('${dayKey}', ${idx})">
            <div class="exercise-icon" style="background:${ex.color}">
              <i class="fas ${ex.icon}"></i>
            </div>
            <h3>${ex.nome}</h3>
            <span class="exercise-muscle">${ex.musculo}</span>
            <span class="exercise-sets">${ex.series}</span>
            <i class="fas fa-chevron-down exercise-toggle"></i>
          </div>
          <div class="exercise-body">
            <ol class="exercise-steps">
              ${ex.steps.map(s => `<li>${s}</li>`).join('')}
            </ol>
          </div>
        </div>`;
    });

    dayCard.innerHTML = `
      <div class="day-header" onclick="toggleDay('${dayKey}')">
        <div class="day-header-left">
          <i class="fas ${day.icone}" style="color:${day.cor}"></i>
          <h3>${day.nome}</h3>
          <span class="day-title">${day.titulo}</span>
        </div>
        <div class="day-header-right">
          <span class="day-exercises-count">${day.exercises.length} exercícios</span>
          <i class="fas fa-chevron-down day-toggle"></i>
        </div>
      </div>
      <div class="day-body">
        ${exercisesHtml}
      </div>`;
    grid.appendChild(dayCard);
  }
}

function toggleDay(dayKey) { document.getElementById(`day-${dayKey}`).classList.toggle('open'); }

function toggleExercise(dayKey, idx) { document.getElementById(`exercise-${dayKey}-${idx}`).classList.toggle('open'); }

function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
}

function gerarPDF() {
  if (!currentPlan.dieta) {
    alert('Gere um plano primeiro!');
    return;
  }

  const btn = document.querySelector('.btn-pdf');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';

  const p = currentPlan;
  const objLabels = { perder:'Perder Peso', ganhar:'Ganhar Massa Muscular', definir:'Definir', forca:'Ganhar Forca', manter:'Manter Peso', condicionamento:'Melhorar Condicionamento' };
  const genLabel = { masculino:'Masculino', feminino:'Feminino' };
  const refOrdem = ['cafe_da_manha','lanche_manha','almoco','lanche_tarde','jantar'];
  const refNomes = { cafe_da_manha:'Cafe da Manha', lanche_manha:'Lanche da Manha', almoco:'Almoco', lanche_tarde:'Lanche da Tarde', jantar:'Jantar' };
  const refHorarios = { cafe_da_manha:'06:00-08:00', lanche_manha:'09:30-10:30', almoco:'12:00-13:30', lanche_tarde:'15:30-16:30', jantar:'19:00-20:30' };
  const daysOrder = ['segunda','terca','quarta','quinta','sexta'];
  const dayNames = { segunda:'Segunda-feira', terca:'Terca-feira', quarta:'Quarta-feira', quinta:'Quinta-feira', sexta:'Sexta-feira' };

  let mealsHtml = '';
  for (const key of refOrdem) {
    const meal = p.dieta[key];
    if (!meal) continue;
    const total = meal.items.reduce((s, i) => s + i.kcal, 0);
    mealsHtml += `<div style="margin-bottom:10px;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
      <div style="background:#2ecc71;color:#fff;padding:8px 12px;font-size:13px;font-weight:700;">${refNomes[key]} (${refHorarios[key]}) &mdash; ${total} kcal</div>
      <table style="width:100%;border-collapse:collapse;">`;
    for (const i of meal.items) {
      mealsHtml += `<tr><td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:12px;"><strong>${i.nome}</strong><br><span style="color:#888;font-size:10px;">${i.qty}</span></td>
        <td style="padding:5px 10px;border-bottom:1px solid #eee;text-align:right;font-weight:700;color:#2ecc71;font-size:12px;white-space:nowrap;">${i.kcal} kcal</td></tr>`;
      if (i.substituicoes && i.substituicoes.length) {
        mealsHtml += `<tr><td colspan="2" style="padding:2px 10px 6px 10px;font-size:10px;color:#888;border-bottom:1px solid #eee;">
          <em>Substitutos:</em> ${i.substituicoes.map(s => `<span style="display:inline-block;margin:1px 4px 1px 0;padding:1px 6px;background:#f0fdf4;border-radius:3px;border:1px solid #d4edda;">${s.nome} (${s.kcal} kcal)</span>`).join(', ')}
        </td></tr>`;
      }
    }
    mealsHtml += `</table></div>`;
  }

  let workoutsHtml = '';
  for (const dayKey of daysOrder) {
    const day = p.treino[dayKey];
    if (!day || !day.exercises.length) continue;
    workoutsHtml += `<div style="margin-bottom:10px;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
      <div style="background:#3498db;color:#fff;padding:8px 12px;font-size:13px;font-weight:700;">${dayNames[dayKey]} &mdash; ${day.titulo}</div>`;
    let idx = 0;
    for (const ex of day.exercises) {
      idx++;
      workoutsHtml += `<div style="padding:8px 12px;border-bottom:1px solid #eee;font-size:12px;">
        <strong>${idx}. ${ex.nome}</strong> <span style="color:#888;font-size:10px;">| ${ex.musculo} | ${ex.series}</span>
        <ol style="margin:4px 0 0 16px;font-size:11px;color:#444;">${ex.steps.map(s => `<li style="margin-bottom:2px;">${s}</li>`).join('')}</ol>
      </div>`;
    }
    workoutsHtml += `</div>`;
  }

  const objetivosStr = p.objetivos.map(o => objLabels[o]||o).join(', ');

  const style = `*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:Arial,Helvetica,sans-serif;color:#222;padding:20px;font-size:12px;}
h1{font-size:22px;color:#1a1a2e;text-align:center;}
.sub{text-align:center;color:#666;font-size:13px;margin:4px 0 16px;}
hr{border:none;border-top:2px solid #2ecc71;margin-bottom:16px;}
h2{font-size:16px;color:#1a1a2e;border-bottom:2px solid #eee;padding-bottom:5px;margin:14px 0 8px;}
table.dados{width:100%;border-collapse:collapse;margin:6px 0;}
table.dados td{padding:3px 8px;font-size:12px;}
table.dados td:first-child{font-weight:600;width:160px;}
.footer{text-align:center;margin-top:20px;padding-top:10px;border-top:2px solid #eee;font-size:10px;color:#999;}
.footer p{margin:2px 0;}
@media print{body{padding:10px;}}`;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>DietaFit - ${p.nome}</title><style>${style}</style></head>
<body><h1>DietaFit AI</h1><p class="sub">Plano Personalizado de Dieta e Treino</p><hr>
<h2>Dados do Usuario</h2>
<table class="dados">
<tr><td>Nome</td><td>${p.nome}</td></tr>
<tr><td>Idade / Genero</td><td>${p.idade} anos / ${genLabel[p.genero]||p.genero}</td></tr>
<tr><td>Altura / Peso</td><td>${p.altura}cm / ${p.pesoAtual}kg (alvo: ${p.pesoAlvo}kg)</td></tr>
<tr><td>Objetivos</td><td>${objetivosStr}</td></tr>
<tr><td>Calorias Diarias</td><td><strong>${p.caloriasDiarias} kcal</strong></td></tr>
<tr><td>Macronutrientes</td><td>Proteinas: ${p.proteinasG}g | Carboidratos: ${p.carboidratosG}g | Gorduras: ${p.gordurasG}g</td></tr>
<tr><td>IMC</td><td>${p.imcAtual.toFixed(1)} (${p.imcClass})</td></tr>
<tr><td>Tempo Estimado</td><td>~${p.semanas} semanas</td></tr>
</table>
<h2>Plano Alimentar</h2>${mealsHtml}
<h2>Plano de Treino</h2>${workoutsHtml}
<div class="footer"><p>Consulte sempre um profissional de saude antes de iniciar qualquer dieta ou programa de exercicios.</p><p>Gerado por DietaFit AI</p></div>
</body></html>`;

  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:999999;background:#fff;';
  document.body.appendChild(iframe);
  iframe.contentDocument.write(html);
  iframe.contentDocument.close();

  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch(e) {
      const w = window.open('', '_blank');
      if (w) { w.document.write(html); w.document.close(); setTimeout(() => { w.print(); }, 500); }
      else alert('Permita popups para gerar o PDF ou use Ctrl+P.');
    }
    setTimeout(() => {
      document.body.removeChild(iframe);
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-file-pdf"></i> Salvar como PDF';
    }, 2000);
  }, 500);
}
