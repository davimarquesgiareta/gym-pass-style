# APP

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastras;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuáro logado;
- [x] Deve ser possível o usuário obter o histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 100km);
- [x] Deve ser possível o usuário academias pelo nome;
- [x] Deve ser possível usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadatrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [] O check-in só pode ser validado por adminstradores;
- [] A academia só pode ser cadastrada por administradores;

## RFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por páginas;
- [] O usuário deve ser identificado por um JWT (JSON Web Token);


## DOCKER 
- docker compose up -d   (rodar o container)
- docker ps              (ver os containers que estão rodando)


## PRISMA
- npx prisma studio      (rodar o prisma em modo navegador para ver as tabelas criadas)