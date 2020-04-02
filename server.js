const express = require('express');
const expressGraphQL = require('express-graphql');
const port = '8080'
const data = require('./sample-data/data.js')
const setType = require('./types/lot.js')
const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} = graphql

const app = express()

const rootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            setType: {
                type: new GraphQLList(setType),
                description: 'List of all lots',
                resolve: () => data.setData
            }
        })
    })
})

app.use(
    '/graphql',
    expressGraphQL({
        schema: rootSchema,
        graphiql: true
    })
)

app.listen(port, () => {
    console.log(`*** Server Running on port ${port} ***`);
})