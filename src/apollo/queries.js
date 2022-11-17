import {gql} from "@apollo/client";

export const getAllCategoriesWithProducts = gql`
    query {
        categories{
            name
            products{
                id
                name
                inStock
                gallery
                description
                attributes{
                    id
                    name
                    type
                    items{
                        id
                        displayValue
                        value
                    }
                }
                brand
                prices{
                    currency{
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`;


export const getCategoriesName = gql`
    query {
        categories{
            name
        }
    }
`

export const getCurrencies = gql`
    query {
        currencies{
            label
            symbol
        }
    }
`

export const getProductByIdQuery = gql`
    query ($id: String!) {
        product(id: $id) {
            id
            name
            gallery
            description
            category
            attributes{
                name
                type
                items{
                    displayValue
                    value
                }
            }
            prices{
                currency{
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
`




