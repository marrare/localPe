const list = [
    {
      id: 1,
      name: 'Catedral Central de Petrolina',
      avatar_url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/8c/de/catedral-igreja-sagrado.jpg',
      description: 'Localizada no centro da cidade, na praça que hoje leva o nome do bispo visionário, a catedral foi construída com pedras retiradas do próprio local e de pedreiras próximas. Com um estilo neogótico, tem fachada imponente, composta por uma única porta central e duas enormes torres, além de um conjunto de 57 vitrais. Essas e outras características arquitetônicas fazem da catedral um dos principais pontos de visita de Petrolina.',
      category: "Igreja"
    },
    {
      id: 2,
      name: 'Marco Zero',
      avatar_url: 'https://www.gov.br/turismo/pt-br/assuntos/noticias/foto-da-semana-marco-zero-em-recife-pe-1/120321_marcozero_recife-foto-sol-pulquerio-pcr.jpg/@@images/248b8cf6-eaa1-4879-b15d-f0dc2c1ac55a.jpeg',
      description: 'O Marco Zero, na Praça Rio Branco, é conhecido como local de fundação da cidade do Recife e também como ponto inicial de contagem das distâncias calculadas a partir da cidade. O lugar é um dos pontos mais importantes na capital Pernambucana, pois é também uma região de forte movimento durante o Carnaval. ',
      category: "Praça"
    },
    {
      id: 3,
      name: 'Forte Orange',
      avatar_url: 'http://www.abih-pe.com.br/2013/wp-content/uploads/2013/09/itamaraca.jpg',
      description: 'Fortaleza de Santa Cruz de Itamaracá, mais conhecida como Forte Orange, é uma fortificação localizada na ilha de Itamaracá, no litoral do estado brasileiro de Pernambuco, 34 km ao norte do Recife. Trata-se do maior forte em pedra do Nordeste do país. Chairman',
      category: "Monumento Histórico"
    },
    {
        id: 4,
        name: 'Igreja do Sagrado Coração de Jesus',
        avatar_url: 'https://i.pinimg.com/originals/44/60/ba/4460baf69018a9cd63ccf38477c3cac3.jpg',
        description: 'Há 26 anos a velha cidade de Petrolândia, no Sertão de Pernambuco, foi inundada para a construção da Usina Hidrelétrica Luiz Gonzaga. Após a inundação, apenas o topo da Igreja do Sagrado Coração de Jesus ficou visível. Hoje, por conta da estiagem, o volume do Lago de Itaparica reduziu e praticamente metade da estrutura do templo pode ser visualizada.',
        category: "Monumento Histórico"
    },
    { 
        id: 5,
        name: 'Praia de Calhetas',
        avatar_url: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/galeria/57964_w840h525_1537985174cabo-de-santo-agostinho.jpg',
        description: 'A Praia de Calhetas é uma praia do município de Cabo de Santo Agostinho, no estado de Pernambuco, Brasil.[1] Está situada na face norte do cabo de Santo Agostinho.',
        category: "Praia"
    },
    {   
      id: 6,
        name: 'Praia dos Carneiros',
        avatar_url: 'https://www.guiadasemana.com.br/contentFiles/image/2018/09/FEA/galeria/57964_w840h525_1537985748praia-dos-carneiros.jpg',
        description: 'A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco, cercado por um mar lindo, cheio de piscinas naturais.',
        category: "Praia"
    },
    {   
        id: 7,
        name: 'Rua do Bom Jesus',
        avatar_url: 'https://www.edublin.com.br/wp-content/uploads/2021/08/rua-mais-bonita-do-mundo-Rua-do-Bom-Jesus.jpg',
        description: 'Eleita a terceira rua mais bonita do mundo, a Rua do Bom Jesus está localizada no centro histórico da capital pernambucana, região chamada de Recife Antigo. A via é atualmente um dos principais pontos turísticos do município e guarda uma história riquíssima, que remonta à ocupação holandesa no Nordeste brasileiro. Mais recentemente, o bairro se tornou sede de importantes iniciativas tecnológicas. ',
        category: "Monumento Histórico"
    },
    { 
      id: 8,
      name: 'Cachoeira Véu da Noiva',
      avatar_url: 'https://mapio.net/images-p/17988848.jpg',
      description: 'Cartão postal da Chapada de Guimarães, a cachoeira do Véu de Noiva é formada pelo rio Coxipó com 86 metros de queda livre, é o principal ponto de visitação do Parque Nacional. Além da cachoeira, o vale e as escarpas do morro – formadas de arenito – aumentam a beleza do local. A cachoeira pode ser observada a partir de um mirante próximo à administração do parque. No local, existe um restaurante típico regional muito bem adaptado à paisagem e o ecoturista pode obter informações no centro de visitantes e comprar artesanato na lojinha.',
      category: "Cachoeira"
    },
    {
      id: 9,
      name: 'Parque Pedra Furada',
      avatar_url: 'https://www.guiadoturista.net/imgs/2018/09/1b7a636fd4a9b3000ce480782967cfeb.jpg',
      description: 'O principal ponto turístico da cidade, a famosa Pedra Furada, que fica em um parque municipal construído em 1985. O local conta com uma das mais belas paisagens da região e para chegar até lá é preciso subir uma escadaria de 360 degraus.',
      category: "Parque"
    },
    {
      id: 10,
      name: 'Vale do Catimbau',
      avatar_url: 'http://correiope.com.br/wp-content/uploads/2020/11/25f910474a448e2c46619ac0c8e1089c.jpg',
      subtitle: 'O Parque Nacional do Catimbau, também conhecido como Vale do Catimbau, é um parque nacional brasileiro do estado de Pernambuco. Criado em 22 de agosto de 2002, abrange os municípios de Buíque, Ibimirim, Sertânia e Tupanatinga, entre o Agreste e o Sertão pernambucano. O parque é o segundo do estado. ',
      category: "Parque"
    },
    {
      id: 11,
      name: 'Forte das Cinco Pontas',
      avatar_url: 'https://pbs.twimg.com/media/EC-GTsvXUAAMZzl.jpg',
      description: ' O Forte de São Tiago das Cinco Pontas é um dos monumentos mais expressivos do patrimônio colonial brasileiro. Construído em 1630, durante a ocupação holandesa nas áreas em que hoje estão as cidades de Recife e Olinda, o espaço abriga o Museu da Cidade do Recife, que tem em seu acervo fotografias, mapas e fragmentos arqueológicos que representam a história da evolução urbana do Recife do século XVII aos dias atuais.',
      category: "Monumento Histórico"
    },
    {
      id: 12,
      name: 'Parque das Esculturas',
      avatar_url: 'https://pbs.twimg.com/media/DVbRBAVW4AAl4i1.jpg',
      description: 'O Parque de Esculturas Francisco Brennand foi inaugurado em 29 de dezembro 2000, idealizado pelo artista pernambucano Francisco Brennand, integrando o projeto “Eu vi o mundo… Ele Começava no Recife” para comemoração dos 500 anos do descobrimento do Brasil.',
      category: "Parque"
    },
    {
      id: 13,
      name: 'Parque Dona Lindu',
      avatar_url: 'https://i.pinimg.com/originals/3b/b1/f3/3bb1f37166f98375e5c834b233537977.jpg',
      description: 'O Parque Dona Lindu é um parque da cidade do Recife, capital do estado brasileiro de Pernambuco. Está localizado no bairro de Boa Viagem, entre as avenidas Boa Viagem e Visconde de Jequitinhonha. O local antes pertencera à Aeronáutica. Foi projetado pelo arquiteto Oscar Niemeyer.',
      category: "Parque"

    },
    {
      id: 14,
      name: 'Orla de Boa Viagem',
      avatar_url: 'https://www.viajali.com.br/wp-content/uploads/2018/02/boa-viagem-pe-1-730x547.jpg',
      description: 'A Praia de Boa Viagem é a praia urbana mais famosa da cidade do Recife, capital do estado brasileiro de Pernambuco. Com aproximadamente oito quilômetros (8 km) de extensão, está situada no bairro homônimo, Zona Sul da capital pernambucana, delimitada pela Praia do Pina ao norte e pela Praia de Piedade ao sul. A orla dispõe de parque, jardim e espaços de prática desportiva.',
      category: "Praia"
    },
    {
      id: 15,
      name: 'Porto de Galinhas',
      avatar_url: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/12/Porto-de-Galinhas-O-que-fazer-Capa-3.jpg',
      description: 'Considerado um dos melhores destinos do litoral do nordeste brasileiro, Porto de Galinhas é um distrito da cidade de Ipojuca, no estado de Pernambuco e fica a cerca de 60 km do aeroporto Guararapes em Recife, a capital do estado. Um lugar perfeito para quem deseja sair da rotina e descansar na beira do mar enquanto conhece algumas das melhores praias do nosso país. ',
      category: "Praia"
    },
    {
      id: 16,
      name: 'Enseada dos Corais',
      avatar_url: 'https://i.pinimg.com/originals/f0/2f/c4/f02fc40e34afa78af96148844260a062.jpg',
      description: 'Praia tranquila de grande litoral, é conhecida por sua beleza e clima agradável. Ainda pouco explorada pelo turismo, se mantém praticamente ao natural, com vegetação nativa e alguns coqueiros. Costuma receber um bom número de turistas durante a alta temporada, que aproveitam para relaxar, tomar um delicioso banho de mar e repor as energias. É um lugar ideal para o descanso, e no restante do ano fica praticamente deserta.',
      category: "Praia"
    },
    {
      id: 17,
      name: 'Ponta de Pedras',
      avatar_url: 'https://i.pinimg.com/originals/fa/d8/94/fad894953ff493579a8601ac2c99d9e8.jpg',
      description: 'A Praia da Ponta de Pedras é uma exceção entre as praias nos arredores de Alter do Chão. Além da areia branca e fina, ela é marcada também por formações rochosas. O visual é raro e por isso a praia se difere das demais. Localizada às margens do Rio Tapajós, a Praia da Ponta de Pedras é um belo cenário para curtir durante todo o dia. Com ampla oferta de restaurantes, a Praia da Ponta de Pedras é um ótimo destino para os turistas que preferem praia com infraestrutura. ',
      category: "Praia"
    },
    {
      id: 18,
      name: 'Ruínas Carmelitas',
      avatar_url: 'https://partiupelomundo.com/wp-content/uploads/2016/03/DSC09635-e1459185435729.jpg',
      description: ' Próximo a praia Calhetas, ficam as ruínas históricas da Vila de Nazaré, que abriga um forte português do século 17, antigas casas no estilo colonial, a antiga casa do faroleiro, o Farol Santo Agostinho, as ruínas do Convento Carmelita e a igreja de Nossa Senhora de Nazaré (edificação também portuguesa do século 16), no ponto mais alto do Cabo de Santo Agostinho.',
      category: "Monumento Histórico"
    },
    {
      id: 19,
      name: 'Praia do Cupe',
      avatar_url: 'http://destinoportodegalinhas.com.br/blog/wp-content/uploads/2021/05/foto07-832x1024.jpg',
      description: 'Praia do Cupe é uma praia localizada no município de Ipojuca, litoral sul do estado de Pernambuco. A Praia do Cupe é uma das maiores da região, com 4,5 km de extensão de orla. A praia se destaca por possuir ondas fortes e selvagens, bastante propício a prática de surf.',
      category: "Praia"
    },
    
   
  ]

  export default list;
