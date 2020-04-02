const { uuid }  = require('uuidv4');

const setData = [
    {id: 1, lotCode: uuid()},
    {id: 2, lotCode: uuid()},
]

const itemData = [
    {id: 1, serialCode: uuid(), setId: 1},
    {id: 2, serialCode: uuid(), setId: 1},
    {id: 3, serialCode: uuid(), setId: 1},
    {id: 4, serialCode: uuid(), setId: 2},
    {id: 5, serialCode: uuid(), setId: 2},
    {id: 6, serialCode: uuid(), setId: 2},
    {id: 7, serialCode: uuid(), setId: 2},
    {id: 8, serialCode: uuid(), setId: 2}
]

module.exports = { setData, itemData }