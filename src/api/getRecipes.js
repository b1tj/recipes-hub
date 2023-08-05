import axios from 'axios'

export const getRecipes = async (numberRecipes) => {
    try {
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${numberRecipes}`
        )
        return res.data.recipes
    } catch (err) {
        console.log(err)
        return []
    }
}

// get recipe by query with expected result
export const getRecipesByQuery = async (query, number = 10) => {
    try {
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=${number}`
        )
        return res.data.results
    } catch (err) {
        console.log(err)
        return []
    }
}
