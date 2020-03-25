const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = 
{
    /*LISTAGEM DE ONGS*/
    async index (request, response)
    {

        /*VAI SELECIONAR TODOS OS ELEMENTOS (*) DA TABELA ongs*/
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response)
    {
        /*CADASTRO DE ONGS*/
        /*
        DENTRO DO 'OBJETO' (const { } = request.body) 
        CONTEM TODOS OS DADOS NECESSARIOS PARA CRIAÇÃO DO USUARIO 'ongs'
        */
        const { name, email, whatsapp, city, uf } = request.body;

        /*
            COM O PACOTE CRYPTO
        vamos usar a função randomBytes para gerar characteres aleatorios, toString para converter
        em string hexadecimal (numeros e letras)
        */
        const id = crypto.randomBytes(4).toString('HEX');


        /*VAI INSERIR DADOS PARA A TABELA 'ongs'*/
        /*await faz com que o servidor aguarde esse essa inserção para continuar*/
        await connection('ongs').insert(
        {
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })


        /*
        VAMOS RETORNAR O id CRIADO RANDOMICAMENTE PARA O USUARIO 
        APENAS DEPOIS DE INSERIR OS DADOS NO BANCO DE DADOS
        */
        return response.json({ id });
    }
};