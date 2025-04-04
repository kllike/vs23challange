import { useState, useEffect } from "react" 
import MealItem from "./MealItem";

const Meals = () => {
    const [meals, serMeals] = useState([]);
    
    useEffect(() => {
        async function fetchMeals() {
            fetch("http://localhost:3001/meals")
            .then(response => response.json())
            .then(data => serMeals(data))
        }
        fetchMeals()
    }, [])

    return (
        <ul id="meals">
            { 
               meals.map(meal => <MealItem key={meal.id} meal={meal}/>)
            }
        </ul>
    )
}

export default Meals