const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql
const setType = require('./lot.js')
const data = require('./sample-data/data.js')
let items = data.itemData

const itemType = new GraphQLObjectType({
    name: 'setType',
    description: 'A child entity representing a single manufactured item.',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        serialCode: {
            type: GraphQLString
        },
        setId: {
            type: setType,
            resolve: (set) => {
                return items.find(item => item.setId == set.id)
            }
        }
    })
})

module.exports = itemType