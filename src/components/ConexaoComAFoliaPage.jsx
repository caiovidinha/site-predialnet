'use client'
import React, { useState, useEffect, useRef } from 'react';

const ConexaoComAFoliaPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedMapDate, setSelectedMapDate] = useState('todas');
  const [selectedMapRegion, setSelectedMapRegion] = useState('todas');
  const markersRef = useRef([]);
  const activeInfoWindowRef = useRef(null);

  const blocos = {
    '13 de Fevereiro de 2026 - Sexta de Carnaval': {
      'Centro': [
        { nome: 'Harmonia', local: 'Rua Sacadura Cabral, 355, Saúde', horario: '13h', estilo: '' },
        { nome: 'Carmelitas', local: 'Esquina da Ladeira de Santa Teresa com Rua Dias de Barros, Santa Teresa', horario: '13h', estilo: 'Bloco das Antigas' },
        { nome: 'Órfãos do Brizola', local: 'Rua do Teatro, 29, Centro', horario: '17h', estilo: '' },
        { nome: 'Bloco dos Bancários Vestiu Uma Camisinha Listrada e Saiu por Aí', local: 'Estátua Marielle Franco, Terminal Menezes Cortes, Centro', horario: '17h', estilo: '' },
        { nome: 'Boêmios da Lapa', local: 'Rua Alcindo Guanabara, 48, 395, Lapa', horario: '17h', estilo: '' },
        { nome: 'Te Vejo Por Dentro… Sou da Radiologia', local: 'Rua Joaquim Silva, 15, Lapa', horario: '17h', estilo: '' },
        { nome: 'Escorrega Mas Não Cai', local: 'Rua Sacadura Cabral, 168, Saúde', horario: '18h', estilo: '' },
        { nome: 'Embaixadores da Folia', local: 'Buraco do Lume (Nilo Peçanha/Graça Aranha), Centro', horario: '18h', estilo: '' },
      ],
      'Zona Sul': [
        { nome: 'Senta Que Eu Empurro', local: 'Largo do Machado, Catete', horario: '18h', estilo: '' },
        { nome: 'Rola Preguiçosa - Tarda Mas Não Falha', local: 'Epitácio Pessoa com Maria Quitéria, Ipanema', horario: '18h', estilo: '' },
      ],
      'Tijuca': [
        { nome: 'Banda do Jiló', local: 'Rua Pinto de Figueiredo, 26, Tijuca', horario: '16h', estilo: '' },
        { nome: 'Eu Sou Eu, Jacaré é Bicho D´Água', local: 'Rua Visconde de Abaeté, 137, Vila Isabel', horario: '16h', estilo: '' },
        { nome: 'Cata Latas do Grajaú', local: 'Praça Nobel, S/N, Grajaú', horario: '17h', estilo: '' },
        { nome: 'Banda dos 300 - Chega Mais Grajaú', local: 'Avenida Júlio Furtado, 84, Grajaú', horario: '18h', estilo: '' },
      ],
      'Zona Norte': [
        { nome: 'Bloco dos Ferroviários Aposentados', local: 'Rua do Parque Madureira, Rocha Miranda', horario: '16h', estilo: '' },
        { nome: 'Caramuela', local: 'Praça do Jardim do Méier, Méier', horario: '17h', estilo: '' },
        { nome: 'Vai Tomar no Azul', local: 'Praça Rio Grande do Norte, 31, Engenho de Dentro', horario: '18h', estilo: '' },
      ],
      'Zona Oeste': [
        { nome: 'Alegria do São Bento', local: 'Rua São Cristiano, 178, Bangu', horario: '18h', estilo: '' },
        { nome: 'Bloco da Sorveteria', local: 'Rua Barros de Alarcão, 464, Pedra de Guaratiba', horario: '18h', estilo: '' },
        { nome: 'Bloco das Piranhas do Jefinho', local: 'Rua Barros de Alarcão, 111, Pedra de Guaratiba', horario: '18h', estilo: '' },
        { nome: 'Meia Dúzia de Gatos Pingados', local: 'Avenida Cônego Vasconcelos, 30, Bangu', horario: '18h', estilo: '' },
      ],
    },
    '14 de Fevereiro de 2026 - Sábado de Carnaval': {
      'Centro & Paquetá': [
        { nome: 'Céu na Terra', local: 'Rua Alm. Alexandrino, Santa Teresa', horario: '7h', estilo: '' },
        { nome: 'Multibloco', local: 'Avenida Henrique Valadares, 75, Centro', horario: '7h', estilo: 'Mistureba de Samba, Marchinha, Olodum, Funk e Rock brasileiro' },
        { nome: 'Cordão da Bola Preta (Abertura do Carnaval)', local: 'Terminal Menezes Cortes, Centro', horario: '7h', estilo: 'Bloco das Antigas' },
        { nome: 'Cordão do Prata Preta', local: 'Praça da Harmonia, Gamboa', horario: '9h', estilo: '' },
        { nome: 'Bloco do Beco do Rato', local: 'Rua Joaquim Silva, 11, Lapa', horario: '10h', estilo: '' },
        { nome: 'Roda Mas Não Sai', local: 'Praça Presidente Aguirre Cerda, 17, Centro', horario: '10h', estilo: '' },
        { nome: 'Bloco da Terreirada', local: 'Quinta da Boa Vista, São Cristóvão', horario: '12h', estilo: '' },
        { nome: 'Bloco do Serragens', local: 'Rua Adelaide Alambari, 85, Paquetá', horario: '16h', estilo: '' },
        { nome: 'Dragões da Riachuelo (infantil)', local: 'Rua Riachuelo, 382, Centro', horario: '14h', estilo: '' },
        { nome: 'Flor de Lis', local: 'Largo São Francisco de Paula, Centro', horario: '14h', estilo: '' },
        { nome: 'Quilombo da Glória', local: 'Rua Cândido Mendes, 320, Glória', horario: '15h', estilo: '' },
        { nome: 'Bloco do Corso', local: 'Rua Pinheiro Freire, 40, Paquetá', horario: '16h', estilo: '' },
        { nome: 'Carioca da Gema', local: 'Rua dos Arcos, 24, Lapa', horario: '16h', estilo: '' },
        { nome: 'Bambas do Curuzu', local: 'Rua Curuzu, São Cristóvão', horario: '16h', estilo: '' },
        { nome: 'Batuquebato', local: 'Praça Quinze, 2, em frente ao Edifício da Bolsa de Valores, Centro', horario: '16h', estilo: '' },
        { nome: 'Eles Que Digam', local: 'Rua Nabuco de Freitas, 187, Santo Cristo', horario: '16h', estilo: '' },
        { nome: 'Aconteceu', local: 'Largo dos Neves, 412, Santa Teresa', horario: '16h', estilo: '' },
      ],
      'Zona Sul': [
        { nome: 'Amigos da Onça', local: 'Calçadão da Praia do Flamengo, 3, Flamengo', horario: '7h', estilo: '' },
        { nome: 'Blocobuster', local: 'Praça Almirante Júlio Noronha, 86, Leme', horario: '8h', estilo: '' },
        { nome: 'Bloco Brasil', local: 'Praça Júlio Noronha, Leme', horario: '12h', estilo: '' },
        { nome: 'Banda da Sá Ferreira', local: 'Rua Sá Ferreira, 12, Copacabana', horario: '12h', estilo: '' },
        { nome: 'Enredo do Meu Samba', local: 'Travessa dos Tamoios, 45, Flamengo', horario: '12h', estilo: '' },
        { nome: 'Bloco do Barbas', local: 'Rua General Polidoro, 156, Botafogo', horario: '11h', estilo: '' },
        { nome: 'Ordinários Elétricos', local: 'Avenida Infante Dom Henrique, 10, Flamengo', horario: '13h', estilo: '' },
        { nome: 'Fogo na Cueca', local: 'Rua Anita Garibaldi, 60, Copacabana', horario: '14h', estilo: '' },
        { nome: 'Banda de Ipanema', local: 'Rua Gomes Carneiro, 55, Ipanema', horario: '15h', estilo: '' },
        { nome: 'Amigos do Catete', local: 'Rua do Catete, 309, Catete', horario: '16h', estilo: '' },
        { nome: 'Remédio É o Samba', local: 'Av. Atlântica, 3264, Copacabana', horario: '16h', estilo: '' },
      ],
      'Grande Tijuca': [
        { nome: 'Olha Pá Mim', local: 'Praça Castilhos França, 49, Tijuca', horario: '14h', estilo: '' },
        { nome: 'Diversão Brasileira', local: 'Praça Comandante Xavier de Brito (Praça dos Cavalinhos), S/N, Tijuca', horario: '14h', estilo: '' },
        { nome: 'Brazukerê', local: 'Boulevard 28 de Setembro, 299, Vila Isabel', horario: '15h', estilo: '' },
        { nome: 'Banda do Largo da 2ª Feira', local: 'Rua Conde do Bonfim, 25, Tijuca', horario: '16h', estilo: '' },
        { nome: 'Chora 10', local: 'Rua São Miguel, 430, Tijuca', horario: '16h', estilo: '' },
        { nome: 'Seu Kuka e Eu do Grajaú', local: 'Rua Barão de Mesquita, 1032, Tijuca', horario: '16h', estilo: '' },
        { nome: 'Cordão Alegria da Tijuca', local: 'Rua Afonso Pena, 10, Tijuca', horario: '16h', estilo: '' },
      ],
      'Barra/Jacarepaguá': [
        { nome: 'Blocão da Barra', local: 'Praça do Ó, Barra', horario: '8h', estilo: '' },
        { nome: 'Carnaeco', local: 'Avenida Lúcio Costa, 3300, Barra da Tijuca', horario: '14h', estilo: '' },
        { nome: 'Bloco do Tio Tonho', local: 'Rua Caugula, 217, Curicica', horario: '15h', estilo: '' },
        { nome: 'Bloco Rio2Amores', local: 'Rua Mario Agostinelli, Barra Olímpica', horario: '16h', estilo: '' },
      ],
      'Ilha do Governador': [
        { nome: 'Verde de Branco do Zumbi', local: 'Rua Peixoto de Carvalho, 162, Zumbi', horario: '10h', estilo: '' },
        { nome: 'Quem Me Viu Mentiu', local: 'Praia do Zumbi, 25, Zumbi', horario: '13h', estilo: '' },
      ],
      'Zona Norte': [
        { nome: 'Cantinho do Urubu', local: 'Rua Manuel Marques, 140, Madureira', horario: '9h', estilo: '' },
        { nome: 'Tigre do Méier', local: 'Travessa Miracema, 29, Méier', horario: '14h', estilo: '' },
        { nome: 'Turma do Gato Futebol e Samba', local: 'Rua Djalma Dutra, 262, Pilares', horario: '14h', estilo: '' },
        { nome: 'Vinil Social da Abolição', local: 'Rua José dos Reis, 658, Engenho de Dentro', horario: '14h', estilo: '' },
        { nome: 'DNA Suburbano', local: 'Estrada do Portela, 165, Madureira', horario: '15h', estilo: '' },
        { nome: 'Amigos da Esquina', local: 'Rua Pernambuco, 874, Encantado', horario: '16h', estilo: '' },
        { nome: 'Ciganas Feiticeiras de Olaria', local: 'Rua Paranhos, 734, Olaria', horario: '17h', estilo: '' },
        { nome: 'Cachaceiros do Único', local: 'Rua Baronesa do Engenho Novo, 318, Engenho Novo', horario: '18h', estilo: '' },
      ],
      'Zona Oeste': [
        { nome: 'Cordão da Bola Laranja', local: 'Rua Jerônimo Barbalho, 86, Campo Grande', horario: '9h', estilo: '' },
        { nome: 'Bloco do Tamanco', local: 'Rua D, 19, Padre Miguel', horario: '11h', estilo: '' },
        { nome: 'Alta Pressão', local: 'Rua Coronel Agostinho, 161. Campo Grande', horario: '12h', estilo: '' },
        { nome: 'Flamorro', local: 'Rua Barros de Alarcão, 260, Pedra de Guaratiba', horario: '13h', estilo: '' },
        { nome: 'Tatudobem', local: 'Rua Samanduva, 10, Campo Grande', horario: '15h', estilo: '' },
        { nome: 'Panela dos Batuqueiros', local: 'Rua Antenor de Carvalho, 349, Bangu', horario: '16h', estilo: '' },
        { nome: 'Esquenta de Padre Miguel', local: 'Rua General Gomes de Castro, 168, Padre Miguel', horario: '17h', estilo: '' },
        { nome: 'Tigre do Coqueiro', local: 'Rua Barros de Alarcão, 279, Pedra de Guaratiba', horario: '17h', estilo: '' },
        { nome: 'Bloco do Caja', local: 'Rua Coronel Herculano Júnior, 53, Senador Vasconcelos', horario: '17h', estilo: '' },
        { nome: 'Bloco da Amizade', local: 'Praia Recôncavo, 450, Sepetiba', horario: '20h', estilo: '' },
      ],
    },
    '15 de Fevereiro de 2026 - Domingo de Carnaval': {
      'Centro & Paquetá': [
        { nome: 'Bloco 442', local: 'Largo São Francisco da Prainha, 5, Saúde', horario: '7h', estilo: '' },
        { nome: 'Bangalafumenga', local: 'Monumento dos Pracinhas, Glória', horario: '10h', estilo: '' },
        { nome: 'Banda do Bairro de Fátima', local: 'Avenida Nossa Senhora de Fátima, 88, Centro', horario: '10h', estilo: '' },
        { nome: 'Cordão do Boitatá', local: 'Praça XV, Centro', horario: '11h', estilo: '' },
        { nome: 'Marcha Nerd', local: 'Alameda das Sapucaias, São Cristóvão', horario: '12h', estilo: '' },
        { nome: 'Toca Rauuuul!', local: 'Praça Tiradentes, Centro', horario: '13h', estilo: 'Releituras de músicas do Raul Seixas' },
        { nome: 'Badalo de Santa Teresa', local: 'Rua Monte Alegre, 306, Santa Teresa', horario: '15h', estilo: '' },
        { nome: 'Bambas do Curuzu', local: 'Rua Curuzu, São Cristóvão', horario: '16h', estilo: '' },
        { nome: 'Arteiros da Glória', local: 'Rua da Glória, 190, Glória', horario: '16h', estilo: '' },
        { nome: 'Agytoê', local: 'Praça Cardeal Câmara, 71, Centro', horario: '16h', estilo: '' },
        { nome: 'Banda da Conceição', local: 'Praça Major Valo, 87, Saúde', horario: '17h', estilo: '' },
        { nome: 'Bloco Toma Uma', local: 'Praia Doutor Aristão, 88, Paquetá', horario: '18h', estilo: '' },
      ],
      'Zona Sul': [
        { nome: 'Areia', local: 'Posto 12, Leblon', horario: '7h', estilo: '' },
        { nome: 'Laranjada Samba Clube', local: 'Praça Jardim Laranjeiras, Laranjeiras', horario: '8h', estilo: '' },
        { nome: 'Divina Tretas (LGBTQUIAPN+)', local: 'Campo de Terra Batida do Aterro do Flamengo, Praia do Flamengo, 340', horario: '8h', estilo: '' },
        { nome: 'Que Merda É Essa', local: 'Bar Paz e Amor – Rua Garcia D\'Ávila, 173, esquina com Rua Nascimento Silva, Ipanema', horario: '8h', estilo: '' },
        { nome: 'É Tudo ou Nada', local: 'Rua Capistrano Abreu, 43, Botafogo', horario: '9h', estilo: '' },
        { nome: 'Bloco pra Iaiá', local: 'Praça Almirante Júlio de Noronha, 86, Leme', horario: '9h', estilo: '' },
        { nome: 'Banda do Lidinho (infantil)', local: 'Praça do Lido, Copacabana', horario: '13h', estilo: 'Infantil, desfila a frente da Banda do Lido' },
        { nome: 'Empolga às 9', local: 'Praça Almirante Júlio de Noronha, 1, Leme', horario: '13h', estilo: '' },
        { nome: 'Simpatia É Quase Amor', local: 'Rua Teixeira de Melo, 37, Ipanema', horario: '14h', estilo: '' },
        { nome: 'Império da Folia - Catete', local: 'Largo do Machado, em frente à Pizzaria Parmê, Catete', horario: '16h', estilo: '' },
        { nome: 'Banda do Lido de Copacabana', local: 'Praça do Lido, Copacabana', horario: '16h', estilo: '' },
      ],
      'Grande Tijuca': [
        { nome: 'Clube do Samba Enredo', local: 'Praça da Bandeira, 43, Praça da Bandeira', horario: '10h', estilo: '' },
        { nome: 'Quer Swingar Vem Pra Cá', local: 'Praça Barão de Drummond, S/N, Vila Isabel', horario: '11h', estilo: '' },
        { nome: 'Cordão da Tia Juca', local: 'Praça Saens Peña, 344, Tijuca', horario: '14h', estilo: '' },
        { nome: 'Gargalhada', local: 'Boulevard 28 de Setembro, 200, Vila Isabel', horario: '16h', estilo: '' },
        { nome: 'Perereca do Grajaú', local: 'Praça Edmundo Rêgo, 12, Grajaú', horario: '16h', estilo: '' },
        { nome: 'Piranhas da Senador Nabuco de Vila Isabel', local: 'Boulevard 28 de Setembro, 226, Vila Isabel', horario: '16h', estilo: '' },
        { nome: 'Balanço do Pinto', local: 'Rua Pinto de Figueiredo, 26A, Tijuca', horario: '17h', estilo: '' },
      ],
      'Barra/Jacarepaguá/Vargens, Recreio': [
        { nome: 'Buda da Barra', local: 'Av. Lúcio Costa, 3646, Barra', horario: '9h', estilo: '' },
        { nome: 'Fregobloco', local: 'Estrada dos Três Rios, 271, Freguesia', horario: '9h', estilo: '' },
        { nome: 'Asa Temperada', local: 'Estrada do Pacuí, 892, Vargem Grande', horario: '12h', estilo: '' },
        { nome: 'Banda do Recreio', local: 'Av. Lúcio Costa, 10, Recreio', horario: '14h', estilo: '' },
      ],
      'Ilha do Governador': [
        { nome: 'Vermelho e Branco da Z-10', local: 'Rua Alexandre Rosa, 1, Cacuia', horario: '9h', estilo: '' },
        { nome: 'Cabrito Mamador', local: 'Estrada do Dendê, 213, Tauá', horario: '13h', estilo: '' },
        { nome: 'Zimbauê', local: 'Praia da Guanabara, 1', horario: '14h', estilo: '' },
      ],
      'Zona Norte': [
        { nome: 'Charanga Talismã', local: 'Avenida Meriti, 18, Vila Kosmos', horario: '7h', estilo: '' },
        { nome: 'Xodó de Piedade', local: 'Rua João Pinheiro, 171, Piedade', horario: '14h', estilo: '' },
        { nome: 'Peru do Méier', local: 'Rua Manuela Barbosa, 12, Méier', horario: '14h', estilo: '' },
        { nome: 'Batikum Afro', local: 'Rua Soares Caldeiras, 115, Madureira', horario: '15h', estilo: '' },
        { nome: 'Bonecas Deslumbradas de Olaria', local: 'Rua Conselheiro Paulino, 567, Olaria', horario: '16h', estilo: '' },
        { nome: 'Bloco Tchetcheca', local: 'Rua Pernambuco, 179, Engenho de Dentro', horario: '16h', estilo: '' },
        { nome: 'Bloco Cervejeiro', local: 'Rua Sales Guimarães – Engenho de Dentro', horario: '16h', estilo: '' },
      ],
      'Zona Oeste': [
        { nome: 'Arrastão da Barra de Guaratiba', local: 'Estrada da Vendinha, 871, Barra de Guaratiba', horario: '10h', estilo: '' },
        { nome: 'Suvaco do Gato', local: 'Rua Sargento Newton Nascimento, 33, Paciência', horario: '12h', estilo: '' },
        { nome: 'Vem Que Eu Te Abraço', local: 'Rua C, 215, Padre Miguel', horario: '12h', estilo: '' },
        { nome: 'Vou Te Pescar', local: 'Rua C Dois, 18, Padre Miguel', horario: '12h', estilo: '' },
        { nome: 'Piranha Porra Loka', local: 'Travessa do Desterro, 7, Pedra de Guaratiba', horario: '14h', estilo: '' },
        { nome: 'Alegria de Palmares', local: 'Rua Soldado Elias de Sousa, 22, Paciência', horario: '12h', estilo: '' },
        { nome: 'Coroinha', local: 'Rua Barros de Alarcão, 230, Pedra de Guaratiba', horario: '15h', estilo: '' },
        { nome: 'Arrasta Sepetiba', local: 'Praça Washington Luís, 44, Sepetiba', horario: '15h', estilo: '' },
        { nome: 'Lama o Bloco', local: 'Rua da Floresta, 905, Sepetiba', horario: '16h', estilo: '' },
        { nome: 'Virilha de Minhoca', local: 'Rua Fonseca, 798, Bangu', horario: '17h', estilo: '' },
        { nome: 'Mau Mau de Bangu', local: 'Rua Minuanos, 264, Bangu', horario: '17h', estilo: '' },
        { nome: 'Tô Nem Aí', local: 'Rua Wilson Sousa Pinheiro, Paciência', horario: '17h', estilo: '' },
        { nome: 'Se Tu Fô Eu Vou', local: 'Rua Avaré, 523, Campo Grande', horario: '17h', estilo: '' },
        { nome: 'Grilo de Bangu', local: 'Ceilão, Bangu', horario: '18h', estilo: '' },
      ],
    },
    '16 de Fevereiro de 2026 - Segunda de Carnaval': {
      'Centro & Paquetá': [
        { nome: 'Que Pena, Amor', local: 'Buraco do Lume, Centro', horario: '7h', estilo: 'Raça Negra e muito mais do Pagode dos Anos 90' },
        { nome: 'Bloco Exagerado', local: 'Praça Tiradentes, Centro', horario: '8h', estilo: '' },
        { nome: 'Vem Cá Minha Flor', local: 'Avenida Marechal Câmara, 196, Centro', horario: '8h', estilo: '' },
        { nome: 'Sargento Pimenta', local: 'Avenida Infante Dom Henrique, 75, Flamengo', horario: '8h', estilo: '' },
        { nome: 'Turbilhão Carioca', local: 'Largo São Francisco de Paula, 48, Centro', horario: '13h', estilo: '' },
        { nome: 'Bloco da InsanaRJ', local: 'Avenida Henrique Valadares, 46, Centro', horario: '10h', estilo: '' },
        { nome: 'Dinossauros Nacionais', local: 'Largo São Francisco de Paula, Centro', horario: '12h', estilo: 'Rock Nacional dos Anos 80' },
        { nome: 'Vem Delícia', local: 'Praça Tiradentes, 40, Centro', horario: '13h', estilo: '' },
        { nome: 'Comuna Que Pariu!', local: 'Avenida Henrique Valadares, 28, Centro', horario: '15h', estilo: '' },
        { nome: 'Fundição dos Blocos', local: 'Rua dos Arcos, 24, Centro', horario: '15h', estilo: '' },
        { nome: 'Traz a Caçamba', local: 'Rua Joaquim Silva, 33, Lapa', horario: '15h', estilo: '' },
        { nome: 'Banda da Amizade', local: 'Rua Tadeu Kosciusko, 79, Centro', horario: '15h', estilo: '' },
        { nome: 'Eu Amo Cerveja', local: 'Rua Washington Luís, 1, Lapa', horario: '16h', estilo: '' },
        { nome: 'Infiéis', local: 'Largo Alexandre Herculano, Centro', horario: '16h', estilo: '' },
        { nome: 'Banda dos Inválidos', local: 'Rua dos Inválidos, 138, Centro', horario: '16h', estilo: '' },
        { nome: 'Bloco Regos Barros', local: 'Rua Rêgo Barros, 79, Santo Cristo', horario: '16h', estilo: '' },
        { nome: 'Aconteceu', local: 'Rua Almirante Alexandrino, 89, Santa Teresa', horario: '16h', estilo: '' },
        { nome: 'Bloco da Colônia', local: 'Praia José Bonifácio, 175, Paquetá', horario: '18h', estilo: '' },
      ],
      'Zona Sul': [
        { nome: 'Corre Atrás', local: 'Posto 11, Leblon', horario: '7h', estilo: '' },
        { nome: 'Virtual', local: 'Posto 1, Leme', horario: '8h', estilo: '' },
        { nome: 'Largo do Machadinho, Mas Não Largo do Suquinho (Infantil)', local: 'Largo do Machado, 19, Catete', horario: '9h', estilo: '' },
        { nome: 'A Rocha da Gávea', local: 'Rua Jardim Botânico, 733, Lagoa', horario: '9h', estilo: '' },
        { nome: 'Carvalho em Pé', local: 'Visconde de Caravelas, 14, Botafogo', horario: '10h', estilo: '' },
        { nome: 'Banda Clube Nobre do Bairro Peixoto (infantil)', local: 'Praça Edmundo Bittencourt, 721, Copacabana', horario: '11h', estilo: '' },
        { nome: 'Peru Sadio', local: 'Avenida Atlântica, 958, Leme', horario: '14h', estilo: '' },
        { nome: 'Império da Cruzada', local: 'Avenida Delfim Moreira, 12, Leblon', horario: '14h', estilo: '' },
        { nome: 'Samba é Saúde', local: 'Largo dos Leões, 81, Humaitá', horario: '15h', estilo: '' },
        { nome: 'Estica do Flamengo', local: 'Rua Marques de Abrantes, 100, Flamengo', horario: '16h', estilo: '' },
        { nome: 'Cabeça de Chave da Rua Duvivier', local: 'Rua Duvivier, 48, Copacabana', horario: '16h', estilo: '' },
      ],
      'Grande Tijuca': [
        { nome: 'Boêmios da Madrugada', local: 'Rua Doutor Otávio Kelly, 53, Tijuca', horario: '13h', estilo: '' },
        { nome: 'Balanço do Jamelão', local: 'Rua Rosa e Silva, 19, Grajaú', horario: '16h', estilo: '' },
      ],
      'Zona Sudoeste': [
        { nome: 'Medeiros Folia', local: 'Estrada do Pacuí, 911, Vargem Grande', horario: '9h', estilo: '' },
        { nome: 'Bloco das Divas', local: 'Avenida Lucio Costa, Posto 9, Recreio dos Bandeirantes', horario: '13h', estilo: '' },
        { nome: 'Banda do Riviera', local: 'Rua Rosalina Brand, 200, Barra da Tijuca', horario: '15h', estilo: '' },
      ],
      'Ilha do Governador': [
        { nome: 'Nova Geração do Zumbi', local: 'Rua Peixoto de Carvalho, 228, Zumbi', horario: '9h', estilo: '' },
        { nome: 'Banda Polvo da Ilha', local: 'Praça Iaiá Garcia, S/N, Ribeira', horario: '9h', estilo: '' },
        { nome: 'Banda Inimigos da Bebida', local: 'Praça Comandante Mege, 28, Cocotá', horario: '11h', estilo: '' },
        { nome: 'Furdunço Rio', local: 'Praia do Zumbi, 28, Zumbi', horario: '12h', estilo: '' },
        { nome: 'Seca Copo', local: 'Rua do Monjolo, 546, Pitangueiras', horario: '12h', estilo: '' },
        { nome: 'Acabou o Amor', local: 'Rua Domingos Mondim, 41, Tauá', horario: '13h', estilo: '' },
      ],
      'Zona Norte': [
        { nome: 'Papo de Cachaça', local: 'Rua Dias da Cruz, 269, Méier', horario: '16h', estilo: '' },
        { nome: 'Ciganas Feiticeiras de Olaria', local: 'Rua Paranhos, 432, Olaria', horario: '17h', estilo: '' },
      ],
      'Zona Oeste': [
        { nome: 'Olha Pra Quem Te Ama', local: 'Rua D, 340, Padre Miguel', horario: '12h', estilo: '' },
        { nome: 'Bloco Chaaaama!', local: 'Rua Professor Guilherme Lacort, 4 , Campo Grande', horario: '13h', estilo: '' },
        { nome: 'Tudo de Bom', local: 'Rua Figueiredo Camargo, 351, Bangu', horario: '14h', estilo: '' },
        { nome: 'Vermelho e Preto Coirmãos', local: 'Rua Castelo de Guimarães, Padre Miguel', horario: '15h', estilo: '' },
        { nome: 'Seu Lagarto Mama de Campo Grande', local: 'Rua Itaópolis, 7, Campo Grande', horario: '15h', estilo: '' },
        { nome: 'Encontro das Rodas de Samba', local: 'Rua B, 900, Padre Miguel', horario: '16h', estilo: '' },
        { nome: 'Unidos do Largo da Bica', local: 'Rua Marechal Galdino, 394, Santa Cruz', horario: '16h', estilo: '' },
        { nome: 'Amigos da Mocidade', local: 'Rua Fugueiredo Camargo, 292A, Bangu', horario: '17h', estilo: '' },
        { nome: 'Tigre do Coqueiro', local: 'Rua Barros de Alarcão, 279, Pedra de Guaratiba', horario: '17h', estilo: '' },
        { nome: 'Abraço do Urso', local: 'Estrada dos Sete Riachos, 339, Santíssimo', horario: '17h', estilo: '' },
      ],
    },
    '17 de Fevereiro de 2026 - Terça de Carnaval': {
      'Centro & Paquetá': [
        { nome: 'Fervo da Lud', local: 'Centro Cultural Banco do Brasil, Rua Primeiro de Março, 66, Centro', horario: '7h', estilo: '' },
        { nome: 'Carmelitas', local: 'Largo do Curvelo, Santa Teresa', horario: '8h', estilo: 'Bloco das Antigas' },
        { nome: 'Vamo ET', local: 'Memorial Getúlio Vargas, Glória', horario: '10h', estilo: '' },
        { nome: 'Cheiro na Testa', local: 'Rua Paschoal Carlos Magno, 141, Santa Teresa', horario: '11h', estilo: '' },
        { nome: 'Rio Maracatu', local: 'Rua Visconde Itaboraí, 18, Centro', horario: '13h', estilo: '' },
        { nome: 'Alô, Produção', local: 'Praça Luís de Camões, 374, Glória', horario: '13h', estilo: '' },
        { nome: 'Orquestra Voadora', local: 'Aterro do Flamengo, altura do Outeiro da Glória, Aterro', horario: '13h', estilo: '' },
        { nome: 'Se me Der, Eu Como', local: 'Praça Medalha Milagrosa, Rio Comprido', horario: '14h', estilo: '' },
        { nome: 'Dragões da Riachuelo (infantil)', local: 'Rua Riachuelo, 382, Centro', horario: '15h', estilo: '' },
        { nome: 'Banda da Amizade', local: 'Rua Tadeu Kosciusko, 79, Centro', horario: '15h', estilo: '' },
        { nome: 'Embalo de Santa Teresa', local: 'Rua Almirante Alexandrino, 1638, Santa Teresa', horario: '15h', estilo: '' },
        { nome: 'Bloco dos Primos', local: 'Rua Dona Polucena, 9, Paquetá', horario: '16h', estilo: '' },
        { nome: 'Banda das Quengas (LGBQIAPN+)', local: 'Rua Washington Luís, 10, Lapa', horario: '16h', estilo: '' },
        { nome: 'Enxota que eu vou', local: 'Praça Tiradentes, Centro', horario: '16h', estilo: '' },
        { nome: 'Banda da Glória', local: 'Rua do Russel, 32A, Glória', horario: '16h', estilo: '' },
        { nome: 'Universibloco', local: 'Largo São Francisco de Paula, 49, Centro', horario: '17h', estilo: '' },
      ],
      'Zona Sul': [
        { nome: 'Vagalume, O Verde', local: 'Rua Jardim Botânico com Pacheco Leão, Jardim Botânico', horario: '8h', estilo: '' },
        { nome: 'Empurra Que Pega do Leblon', local: 'Avenida Delfim Moreira, 992, Leblon', horario: '8h', estilo: '' },
        { nome: 'Bagunça Meu Coreto', local: 'Rua São Salvador, 56, Flamengo', horario: '9h', estilo: '' },
        { nome: 'Clube do Samba', local: 'Rua Santa Clara com Avenida Atlântica, Copacabana', horario: '9h', estilo: '' },
        { nome: 'Cardosão de Laranjeiras', local: 'Rua Cardoso Júnior, 5, Laranjeiras', horario: '9h', estilo: '' },
        { nome: 'Afoxé', local: 'Avenida Atlântica, 1702, Copacabana', horario: '9h', estilo: '' },
        { nome: 'Bloco Cachorro Cansado', local: 'Praça José de Alencar, Flamengo', horario: '10h', estilo: '' },
        { nome: 'Mocidade Dependente de Deus', local: 'Praia do Flamengo, 71, Flamengo', horario: '14h', estilo: '' },
        { nome: 'Sereias da Guanabara (LBTQIAPN+)', local: 'Praia do Flamengo, 340, Flamengo', horario: '15h', estilo: '' },
        { nome: 'Amigos da Sueca da Pedro Américo', local: 'Rua Pedro Américo, 371, Catete', horario: '10h', estilo: '' },
        { nome: 'Bloco Big Bang', local: 'Praça Almirante Júlio Noronha, 86, Leme', horario: '15h', estilo: '' },
        { nome: 'Largo do Machado, Mas Não Largo do Copo', local: 'Largo do Machado, 19, Catete', horario: '15h', estilo: '' },
        { nome: 'Último Gole', local: 'Praça Santos Dumont, Gávea', horario: '15h', estilo: '' },
        { nome: 'Banda de Ipanema', local: 'Rua Gomes Carneiro, 55, Ipanema', horario: '15h', estilo: '' },
        { nome: 'Bloco Pinta Mas Não Borra', local: 'Rua Voluntários da Pátria, 34, Botafogo', horario: '16h', estilo: '' },
        { nome: 'Meu Bem, Volto Já!', local: 'Avenida Princesa Isabel, esquina com Rua Barata Ribeiro, Copacabana', horario: '16h', estilo: '' },
      ],
      'Grande Tijuca': [
        { nome: 'Bloco do Moreira', local: 'Rua Almirante João Cândido do Brasil, 251, Maracanã', horario: '14h', estilo: '' },
        { nome: 'Banda da Saens Peña', local: 'Rua General Roca, 661, Tijuca', horario: '15h', estilo: '' },
        { nome: 'Mulheres da Vila', local: 'Boulevard 28 de Setembro, 200, Vila Isabel', horario: '15h', estilo: '' },
        { nome: 'Teimosos do Maracanã', local: 'Rua Visconde de Itamarati, 42, Maracanã', horario: '15h', estilo: '' },
        { nome: 'A Banda do Largo da Segunda Feira', local: 'Rua Conde de Bonfim, 25, Tijuca', horario: '16h', estilo: '' },
        { nome: 'Cata Latas do Grajaú', local: 'Rua Sá Viana, 442, Grajaú', horario: '16h', estilo: '' },
        { nome: 'Foliões do Verdun', local: 'Largo do Vedun, Grajaú', horario: '17h', estilo: '' },
      ],
      'Barra/Recreio/Jacarepaguá': [
        { nome: 'Bloco Me Chama', local: 'Avenida Lucio Costa, 3360, Barra', horario: '9h', estilo: '' },
        { nome: 'Gambá Cheiroso', local: 'Rua Bruno Giorgi, Barra Olímpica', horario: '16h', estilo: '' },
      ],
      'Ilha do Governador': [
        { nome: 'Batuke de Batom', local: 'Praia do Zumbi, 28, Zumbi', horario: '10h', estilo: '' },
        { nome: 'Aki Pra Você', local: 'Rua Romancista, 366, Freguesia', horario: '11h', estilo: '' },
        { nome: 'Tribo Cacuia', local: 'Rua Sargento João Lopes, 54, Cacuia', horario: '16h', estilo: '' },
        { nome: 'Block´n Roll', local: 'Rua Fernandes da Fonseca, 5, Ribeira', horario: '17h', estilo: '' },
      ],
      'Zona Norte': [
        { nome: 'Tudo Nosso', local: 'Galpão do Engenhão, Rua José dos Reis, Engenho de Dentro', horario: '13h', estilo: '' },
        { nome: 'Meu Peru é Seu', local: 'Rua Padre Manuel da Nóbrega, 76, Piedade', horario: '13h', estilo: '' },
        { nome: 'Limão do Picareta', local: 'Rua Jurubaiba, 460, Honório Gurgel', horario: '15h', estilo: '' },
        { nome: 'Embalo do Engenho Novo', local: 'Rua Manuela Barbosa, 10, Méier', horario: '16h', estilo: '' },
        { nome: 'Bloco do Limão de Jardim América', local: 'Praça Rivadavia Corrêa (Praça da Sete), Rua Monsenhor Castelo Branco, Jardim América', horario: '16h', estilo: '' },
        { nome: 'Bonecas Deslumbradas de Olaria', local: 'Rua Conselheiro Paulino, 567, Olaria', horario: '16h', estilo: '' },
        { nome: 'Cornos e Simpatizantes', local: 'Avenida dos Democráticos, 30, Manguinhos', horario: '17h', estilo: '' },
      ],
      'Zona Oeste': [
        { nome: 'Arrastão da Barra de Guaratiba', local: 'Estrada da Vendinha, 871, Barra de Guartiba', horario: '12h', estilo: '' },
        { nome: 'Fuzuê', local: 'Rua Tenente Hamilton Viana, 27, Bangu', horario: '12h', estilo: '' },
        { nome: 'Pegada de Malandro', local: 'Rua Figueiredo Camargo, 351, Bangu', horario: '13h', estilo: '' },
        { nome: 'Coroinha', local: 'Rua Barros de Alarcão, 230, Pedra de Guaratiba', horario: '15h', estilo: '' },
        { nome: 'Concentra Mas Não Sai', local: 'Travessa Passo da Pátria, 11, Santa Cruz', horario: '15h', estilo: '' },
        { nome: 'Não Pink no Meu Freud', local: 'Praça Eurípedes do Nascimento, 19, Padre Miguel', horario: '16h', estilo: '' },
        { nome: 'Bloco do Galho', local: 'Rua Abílio Barreto, Guaratiba', horario: '16h', estilo: '' },
        { nome: 'Virilha de Minhoca', local: 'Rua Fonseca, 768, Bangu', horario: '17h', estilo: '' },
      ],
    },
  };

  // Função de busca
  const filtrarBlocos = () => {
    if (!searchTerm.trim()) return blocos;

    const termoBusca = searchTerm.toLowerCase();
    const blocosFiltrados = {};

    Object.entries(blocos).forEach(([data, regioes]) => {
      const regioesFiltradas = {};
      
      Object.entries(regioes).forEach(([regiao, blocosList]) => {
        const blocosFiltrados = blocosList.filter(bloco => 
          bloco.nome.toLowerCase().includes(termoBusca) ||
          bloco.local.toLowerCase().includes(termoBusca) ||
          regiao.toLowerCase().includes(termoBusca)
        );
        
        if (blocosFiltrados.length > 0) {
          regioesFiltradas[regiao] = blocosFiltrados;
        }
      });
      
      if (Object.keys(regioesFiltradas).length > 0) {
        blocosFiltrados[data] = regioesFiltradas;
      }
    });

    return blocosFiltrados;
  };

  const blocosFiltrados = filtrarBlocos();
  const temResultados = Object.keys(blocosFiltrados).length > 0;

  // Obter todas as regiões únicas
  const getAllRegions = () => {
    const regions = new Set();
    Object.values(blocos).forEach(regioes => {
      Object.keys(regioes).forEach(regiao => regions.add(regiao));
    });
    return Array.from(regions).sort();
  };

  // Carregar Google Maps
  useEffect(() => {
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      initMap();
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyCDSX4R_nc9tva3kweFh2QYXZQCZIVBmGc';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup não necessário, o script permanece carregado
    };
  }, []);

  // Atualizar marcadores quando filtros mudarem
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      updateMarkers();
    }
  }, [selectedMapDate, selectedMapRegion, mapLoaded]);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    // Centro do Rio de Janeiro
    const center = { lat: -22.9068, lng: -43.1729 };
    
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 11,
      center: center,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    mapRef.current.mapInstance = map;
    updateMarkers();
  };

  const updateMarkers = () => {
    if (!mapRef.current || !mapRef.current.mapInstance || !window.google) return;

    const map = mapRef.current.mapInstance;

    // Limpar marcadores existentes
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Fechar InfoWindow ativa
    if (activeInfoWindowRef.current) {
      activeInfoWindowRef.current.close();
      activeInfoWindowRef.current = null;
    }

    // Criar marcadores filtrados
    Object.entries(blocos).forEach(([data, regioes]) => {
      // Filtrar por data
      if (selectedMapDate !== 'todas' && data !== selectedMapDate) {
        return;
      }

      Object.entries(regioes).forEach(([regiao, blocosList]) => {
        // Filtrar por região
        if (selectedMapRegion !== 'todas' && regiao !== selectedMapRegion) {
          return;
        }

        blocosList.forEach(bloco => {
          // Usar Geocoding API para converter endereço em coordenadas
          const geocoder = new window.google.maps.Geocoder();
          const address = `${bloco.local}, Rio de Janeiro, RJ`;
          
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK' && results[0]) {
              const marker = new window.google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: bloco.nome,
                icon: {
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: '#9c0004',
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2
                }
              });

              const infoWindow = new window.google.maps.InfoWindow({
                content: `
                  <div style="font-family: 'Bahnschrift', sans-serif; padding: 8px; max-width: 250px;">
                    <h3 style="color: #9c0004; font-size: 14px; font-weight: bold; margin: 0 0 8px 0;">
                      ${bloco.nome}
                    </h3>
                    <p style="font-size: 12px; color: #231f20; margin: 4px 0;">
                      <strong>Data:</strong> ${data.split(' - ')[0]}
                    </p>
                    <p style="font-size: 12px; color: #231f20; margin: 4px 0;">
                      <strong>Horário:</strong> ${bloco.horario}
                    </p>
                    <p style="font-size: 11px; color: #666; margin: 4px 0;">
                      <strong>Local:</strong> ${bloco.local}
                    </p>
                  </div>
                `
              });

              marker.addListener('click', () => {
                // Fechar InfoWindow anterior
                if (activeInfoWindowRef.current) {
                  activeInfoWindowRef.current.close();
                }
                // Abrir nova InfoWindow
                infoWindow.open(map, marker);
                activeInfoWindowRef.current = infoWindow;
              });

              markersRef.current.push(marker);
            }
          });
        });
      });
    });
  };

  return (
    <div className="bg-white text-slate-900" style={{ fontFamily: 'Bahnschrift, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Banner */}
      <header className="relative w-full">
        <img
          src="/img/bannerConexaoFolia.jpg"
          alt="Banner Conexão com a Folia - Predialnet"
          className="hidden md:block w-full h-auto object-cover"
        />
        
        <img
          src="/img/bannerConexaoFoliaMobile.jpg"
          alt="Banner Conexão com a Folia Mobile - Predialnet"
          className="md:hidden w-full h-auto object-cover"
        />
      </header>

      {/* Search Section */}
      <div className="max-w-[1200px] mx-auto my-6 px-[6%]">
        <div className="bg-[#f4f5f5] p-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar bloco por nome ou região..."
            className="w-full px-4 py-2.5 text-base border border-gray-300 focus:outline-none focus:border-[#9c0004] transition-colors"
            style={{ fontFamily: 'Bahnschrift, sans-serif' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-[6%] py-4">
        {!temResultados ? (
          <div className="text-center py-12 text-gray-400">
            <h3 className="text-xl font-semibold mb-2">Nenhum bloco encontrado</h3>
            <p>Tente buscar por outro nome ou região</p>
          </div>
        ) : (
          Object.entries(blocosFiltrados).map(([data, regioes], dataIndex) => (
            <section key={dataIndex} className="mb-6">
              {/* Data */}
              <div className="bg-[#f4f5f5] text-[#231f20] py-3 px-4 mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#9c0004] mb-0.5">
                  {data.split(' - ')[0]}
                </h2>
                <span className="text-sm text-gray-600 font-normal">
                  {data.split(' - ')[1]}
                </span>
              </div>

              {/* Regiões */}
              {Object.entries(regioes).map(([regiao, blocosList], regiaoIndex) => (
                <div
                  key={regiaoIndex}
                  className="bg-white p-4 mb-3 border border-gray-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#9c0004] mb-3">
                    {regiao}
                  </h3>

                  {/* Lista de Blocos */}
                  <div>
                    {blocosList.map((bloco, blocoIndex) => (
                      <div
                        key={blocoIndex}
                        className="py-2 mb-2 border-b border-gray-200 last:border-b-0"
                      >
                        <div className="font-semibold text-[#231f20] text-base mb-1">
                          {bloco.nome}
                        </div>
                        
                        <div className="text-gray-600 text-sm space-y-0.5">
                          <div>
                            <span className="font-medium">Horário:</span> {bloco.horario}
                          </div>
                          
                          <div>
                            <span className="font-medium">Local:</span> {bloco.local}
                          </div>
                          
                          {bloco.estilo && (
                            <div className="italic text-gray-500 text-xs mt-1">
                              <span className="font-medium">Estilo:</span> {bloco.estilo}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Banner fino depois de cada data */}
              <div className="my-6">
                <img
                  src={`/img/bannerData${dataIndex + 1}.jpg`}
                  alt="Banner depois da data"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '120px' }}
                />
              </div>
            </section>
          ))
        )}
      </main>

      {/* Mapa dos Blocos */}
      <section className="bg-[#f4f5f5] py-8 px-[6%] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#9c0004] text-center mb-6">
            Mapa dos Blocos de Carnaval 2026
          </h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Clique nos marcadores vermelhos para ver informações sobre cada bloco
          </p>

          {/* Filtros do Mapa */}
          <div className="bg-white p-4 mb-6 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Filtro por Data */}
              <div>
                <label className="block text-sm font-semibold text-[#231f20] mb-2">
                  Filtrar por Data:
                </label>
                <select
                  value={selectedMapDate}
                  onChange={(e) => setSelectedMapDate(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border border-gray-300 focus:outline-none focus:border-[#9c0004]"
                  style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                >
                  <option value="todas">Todas as Datas</option>
                  {Object.keys(blocos).map((data, idx) => (
                    <option key={idx} value={data}>
                      {data.split(' - ')[0]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por Região */}
              <div>
                <label className="block text-sm font-semibold text-[#231f20] mb-2">
                  Filtrar por Região:
                </label>
                <select
                  value={selectedMapRegion}
                  onChange={(e) => setSelectedMapRegion(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border border-gray-300 focus:outline-none focus:border-[#9c0004]"
                  style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                >
                  <option value="todas">Todas as Regiões</option>
                  {getAllRegions().map((regiao, idx) => (
                    <option key={idx} value={regiao}>
                      {regiao}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botão Limpar Filtros */}
            {(selectedMapDate !== 'todas' || selectedMapRegion !== 'todas') && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setSelectedMapDate('todas');
                    setSelectedMapRegion('todas');
                  }}
                  className="text-sm text-[#9c0004] hover:underline font-medium"
                  style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>

          <div 
            ref={mapRef} 
            className="w-full border-2 border-gray-300 bg-gray-100"
            style={{ height: '600px' }}
          />
        </div>
      </section>

      {/* Aviso Final */}
      <section className="bg-[#f4f5f5] py-8 px-[6%] mt-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-sm md:text-base text-gray-700 mb-2">
              <span className="font-semibold text-[#9c0004]">Importante:</span> Esta programação está sujeita a alterações. 
              Confirme sempre os horários e locais antes de sair de casa!
            </p>
            <p className="text-xs md:text-sm text-gray-600 mb-3">
              Aproveite o carnaval com responsabilidade e respeito!
            </p>
            <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
              Fonte: <a href="https://www.carnavalderua.rio/" target="_blank" rel="noopener noreferrer" className="text-[#9c0004] hover:underline font-medium">Site Oficial da Prefeitura do Rio de Janeiro</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConexaoComAFoliaPage;
