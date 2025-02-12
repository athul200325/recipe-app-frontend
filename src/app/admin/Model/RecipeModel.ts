export class RecipeModel{
    name?:String
    ingredients?:Array<string>
    instructions?:Array<string>
    prepTimeMinutes?:number
    cookTimeMinutes?:number
    servings?:number
    difficulty?:string
    cuisine?:string
    caloriesPerServing?:number
    image?:string
    mealType?:Array<string>

}