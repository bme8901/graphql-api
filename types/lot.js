const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql

const setType = new GraphQLObjectType({
    name: 'setType',
    description: 'A parent entity representing a manufacturing unit or bundle',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        lotCode: {
            type: GraphQLString
        }
    })
})

module.exports = setType