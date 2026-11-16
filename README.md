# Fred Motors — Digital Automotive Atelier

Site Next.js 16 / React 19 / Three.js / React Three Fiber para a Fred Motors. O conceito 2.0 é um **showroom WebGL 3D** com storytelling em quatro capítulos ao rolar a página, catálogo editorial, páginas individuais dos veículos e atendimento por WhatsApp.

## Rodar localmente
- npm install
- npm run dev
- npm run build
- npm run lint

## Publicação
- GitHub: https://github.com/AlissonMeesPersonal/fredmotors
- Vercel: https://fredmotors.vercel.app
- Projeto Vercel: fredmotors (produção: main)

## Experiência de rolagem 3D
- components/concept-car-3d.tsx — escultura automotiva 3D *conceitual*, criada com geometria Three.js; não reproduz nenhum carro do estoque
- components/showroom-experience.tsx — quatro capítulos, progresso de scroll, orbitamento de câmera, transições e controles para pular a experiência
- app/page.tsx — manifesto, seleção assimétrica, imagem editorial, contato
- app/globals.css — sistema visual proprietário (grafite, papel e vermelho)
- Layout responsivo e alternativa estática quando WebGL não estiver disponível ou o usuário preferir movimento reduzido

## Estoque temporário
A fonte de dados desta etapa é lib/vehicles.ts. O conteúdo é de anúncios públicos consultados em 16/11/2026, **não** estoque verificado em tempo real. Edite a lista vehicles[] e faça commit em main para atualizar o site. O catálogo permite busca por marca/modelo/ano, filtros por tipo, ordenação e página individual com WhatsApp pré-preenchido.

**Ainda não há painel privado de gestão de estoque.** É necessário autenticação, backend, upload de arquivos e banco de dados antes de liberar edição por usuários de loja.

## Logo e fotos
A marca no cabeçalho ainda é provisória porque não foi possível extrair do Instagram uma logo de alta resolução. Solicitar PNG/SVG oficial. Fotos externas são **ilustrativas**, identificadas assim no site e devem ser substituídas por fotos reais autorizadas. Os dados de veículos, preços, endereço e WhatsApp precisam ser confirmados pela Fred Motors antes do lançamento comercial.

Instagram: https://www.instagram.com/fredmotorss/
Contato provisório de anúncios públicos: (51) 99863-1212
Endereço de anúncio: Rua São José, 1302, Bairro Goiás, Santa Cruz do Sul, RS.

## Próxima fase
Adicionar painel seguro para cadastrar, atualizar, marcar vendidos e excluir veículos, upload de fotos, storage e sincronização em tempo real. Substituir conceito 3D por modelo GLB licenciado/aprovado se houver arte 3D oficial.
