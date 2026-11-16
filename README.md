# Fred Motors — Automóveis Selecionados

Website independente com linguagem editorial premium, criado em Next.js + TypeScript para a **Fred Motors de Santa Cruz do Sul/RS**.

## Início rápido

1. Execute npm install
2. Execute npm run dev
3. Acesse http://localhost:3000

Para publicar, importe o repositório AlissonMeesPersonal/fredmotors na **Vercel**, framework Next.js, root directory na raiz. O deploy é acionado pelo branch main depois da conexão.

## Páginas disponíveis

- / — hero cinematográfico, seleção, essência, diferenciais e contatos
- /estoque — busca, filtros por categoria e ordenação
- /veiculos/[slug] — página individual de cada veículo, com detalhes e WhatsApp pré-preenchido

## Como atualizar o estoque nesta versão

Abra lib/vehicles.ts no GitHub e edite os objetos de vehicles. Cada objeto representa um anúncio: slug, brand, model, version, year, mileage, price, category, fuel, transmission, image, imageAlt e featured. Depois de salvar um commit, a Vercel publica a versão atualizada se estiver vinculada ao repositório.

**Observação:** este é um catálogo gerenciado pelo repositório, sem painel administrativo ou sincronização de estoque em tempo real. Um painel privado com uploads, inclusão, edição, venda/remoção e autenticação exige a etapa de backend (ex.: Neon + storage) e credenciais.

## Identidade e imagens

O Instagram não expôs uma versão estável da logo original para download automático. Foi implementada uma assinatura tipográfica editorial temporária. Substituir pelo arquivo oficial (SVG/PNG) fornecido pelo cliente antes da publicação definitiva.

As imagens do site são **editoriais ilustrativas**, não fotos reais de veículos do estoque. Quando receber fotos reais autorizadas, colocá-las em public/vehicles e trocar o campo image pelo caminho /vehicles/foto-do-carro.webp. A marca FRED MOTORS não afirma posse das imagens ilustrativas.

## Dados comerciais e fontes

Instagram: https://www.instagram.com/fredmotorss/
WhatsApp informado na vitrine pública: (51) 99863-1212
Endereço de atendimento anunciado: Rua São José, 1302, Bairro Goiás, Santa Cruz do Sul/RS
Anúncios-base consultados em 16/11/2026: https://www.carrosnaserra.com.br/revenda/santa-cruz-do-sul/fred-motors/bHVjYXNlZHVhcmRv

**Importante:** confirmar junto à Fred Motors os dados de contato, endereço e preços antes do lançamento, pois as fontes públicas podem mudar. As informações de anúncios são uma fotografia do dia da consulta, não um feed de estoque em tempo real.

## Próximos passos recomendados

1. Inserir logo oficial em alta resolução
2. Trocar todas as fotos ilustrativas pelas fotos do próprio estoque
3. Confirmar contatos/endereço e revisar as informações comerciais
4. Implementar painel protegido e banco de dados para operações de estoque
5. Publicar o domínio e gerar sitemap/analytics conforme necessidade
