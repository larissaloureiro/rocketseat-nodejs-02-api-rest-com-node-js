## RF, RN e RNF
### RF - Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

### RN - Regras de Negócios

- [x] A transação pode ser do tipo crédito (que somará ao valor total) ou débito (que subtrairá);
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou


### RNF - Requisitos Não Funcionais

- [ ]

## Testes
### Unitários
- Testam exclusivamente uma unidade da sua aplicação

### Integração
- Testa a comunicação entre duas ou mais unidades

### E2E - Ponta a ponta
- Testes que simulam um usuário operando na nossa aplicação

### Pirãmide de testes
- [+] E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)
- [++] Integração
- [+++] Unitários