import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'API 2 - FUNCIONANDO',
            description: 'Testando APIs na mesma porta com proxy reverso',
            termsOfService: 'http://localhost:3010/api/v1/terms',
            contact: {
                email: 'suporte@educ.al.gov.br',
            },
            version: '1.0.0',
        },
        tags: [
            {
                name: 'User',
                description: 'Endpoints related to user',
            },

        ],
    },
    apis: ['./src/swagger/routes/*.ts'],
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
