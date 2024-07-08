import logo from './logo.svg';
import './App.css';
import omelette from './image-omelette.jpeg'

function App() {
  return (
    <div className ="App">
     <div>
     <img 
          src = {omelette}
          alt = "omelette"
          className = "img"/>
     </div>
        
          <div className = "heading1">
          <h1>Simple Omelette Recipe</h1>
          <p>An easy and quick dish,perfect for any meal.This classic omelette combines beaten eggs<br></br>
          cooked to perfection, optionally filled with your choice of cheese, vegetables,or meats.
          </p>
          </div>
          
          <div className = "prep-time">
          <h2>Preparation time</h2>
          
          <ul>
            <li><strong>Total:</strong> Approximately 10 minutes</li>
            <li><strong>Preparation:</strong> 5 minutes</li>
            <li><strong>Cooking:</strong> 5 minutes</li>
          </ul>
          </div>

          <div className = "ingredi">

          <h3>Ingredients</h3>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables,cooked meats, herbs</li>
          </ul>
          </div>

          <div className = "instruct">

          <h3>Instructions</h3>
          <ol>
            <li><strong>Beat the eggs:</strong> In a bowl,beat the eggswith a pinch of salt and pepper until they are<br></br>
            well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the<br></br>
            pan to ensure the eggs evenly coat the surface.</li>
            <li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly<br></br>
             runny in the middle,sprinkle your chosen fillings over one half of the omelette.</li>
            <li><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it<br></br>
            over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
          </ol>
          </div>

          <div className = "nutri">
            <h3>Nutrition</h3>
           
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>

          <tr>
            <td><strong>Calories</strong></td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td><strong>Carbs </strong> </td>
            <td>0g</td>
          </tr>
          <tr>
            <td><strong>Protein </strong></td>
            <td>20g</td>
          </tr>
          <tr>
            <td><strong>Fat </strong></td>
            <td>22g</td>
          </tr>git 
          
            </table>


          </div>     
    </div>
  );
}

export default App;
