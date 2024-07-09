// import React from 'react';
// import styled from 'styled-components';

// const MealCharts = () => {
//   return (
//     <Container>
//       <Title>Meal Charts</Title>
//       <MealPlanContainer>
//         <MealPlanDay>
//           <DayTitle>Day 1</DayTitle>
//           <MealItem>
//             <MealName>Breakfast:</MealName>
//             <MealDescription>
//               Scrambled eggs (3 whole eggs, 2 egg whites)<br />
//               Whole grain toast (2 slices)<br />
//               Avocado (half)<br />
//               Orange juice or a piece of fruit
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Mid-Morning Snack:</MealName>
//             <MealDescription>
//               Greek yogurt (1 cup) with honey and mixed berries<br />
//               A handful of almonds
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Lunch:</MealName>
//             <MealDescription>
//               Grilled chicken breast (200g)<br />
//               Quinoa or brown rice (1 cup cooked)<br />
//               Steamed broccoli and carrots<br />
//               Mixed green salad with olive oil and balsamic vinegar
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Afternoon Snack:</MealName>
//             <MealDescription>
//               Protein shake (with whey protein, water or milk, and a banana)<br />
//               Rice cakes with peanut butter
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Dinner:</MealName>
//             <MealDescription>
//               Baked salmon (200g)<br />
//               Sweet potato (1 medium-sized)<br />
//               Asparagus or green beans<br />
//               Mixed green salad with a variety of veggies
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Evening Snack (optional):</MealName>
//             <MealDescription>
//               Cottage cheese (1 cup) with pineapple chunks
//             </MealDescription>
//           </MealItem>
//         </MealPlanDay>
//         <MealPlanDay>
//           <DayTitle>Day 2</DayTitle>
//           <MealItem>
//             <MealName>Breakfast:</MealName>
//             <MealDescription>
//               Oatmeal (1 cup cooked) with banana slices, chia seeds, and a drizzle of honey<br />
//               A glass of milk or a protein shake
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Mid-Morning Snack:</MealName>
//             <MealDescription>
//               Apple slices with almond butter<br />
//               A handful of walnuts
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Lunch:</MealName>
//             <MealDescription>
//               Turkey breast sandwich on whole grain bread with lettuce, tomato, and mustard<br />
//               Baby carrots with hummus<br />
//               A piece of fruit (e.g., apple or pear)
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Afternoon Snack:</MealName>
//             <MealDescription>
//               Hard-boiled eggs (2)<br />
//               A piece of dark chocolate
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Dinner:</MealName>
//             <MealDescription>
//               Grilled steak (200g) or lean beef<br />
//               Brown rice (1 cup cooked)<br />
//               Steamed spinach<br />
//               Mixed green salad with a variety of veggies
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Evening Snack (optional):</MealName>
//             <MealDescription>
//               Protein shake or a glass of milk
//             </MealDescription>
//           </MealItem>
//         </MealPlanDay>
//         <MealPlanDay>
//           <DayTitle>Day 3</DayTitle>
//           <MealItem>
//             <MealName>Breakfast:</MealName>
//             <MealDescription>
//               Smoothie with spinach, kale, banana, berries, and protein powder<br />
//               Whole grain toast with peanut butter
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Mid-Morning Snack:</MealName>
//             <MealDescription>
//               Cottage cheese (1 cup) with sliced peaches or mango<br />
//               A handful of cashews
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Lunch:</MealName>
//             <MealDescription>
//               Tuna salad (tuna, Greek yogurt, celery, onions, and a bit of mustard) on whole grain bread<br />
//               Mixed green salad with a variety of veggies
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Afternoon Snack:</MealName>
//             <MealDescription>
//               Protein bar<br />
//               Carrot sticks with guacamole
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Dinner:</MealName>
//             <MealDescription>
//               Grilled chicken thigh (200g)<br />
//               Whole grain pasta (1 cup cooked) with marinara sauce<br />
//               Steamed broccoli<br />
//               Mixed green salad with a variety of veggies
//             </MealDescription>
//           </MealItem>
//           <MealItem>
//             <MealName>Evening Snack (optional):</MealName>
//             <MealDescription>
//               A small bowl of mixed berries with a dollop of Greek yogurt
//             </MealDescription>
//           </MealItem>
//         </MealPlanDay>
//       </MealPlanContainer>
//       <Notes>
//         <h2>Hydration</h2>
//         <p>Drink plenty of water throughout the day, aiming for at least 3-4 liters. Include drinks like coconut water or sports drinks during intense workouts to replenish electrolytes.</p>
//         <h2>Supplements (if needed)</h2>
//         <ul>
//           <li>Whey protein</li>
//           <li>Creatine</li>
//           <li>Multivitamin</li>
//           <li>Fish oil</li>
//           <li>BCAAs (Branched-Chain Amino Acids)</li>
//         </ul>
//         <h2>Notes</h2>
//         <ul>
//           <li>Ensure you're getting enough sleep and recovery time.</li>
//           <li>Adjust the portion sizes based on your specific caloric needs and training intensity.</li>
//           <li>Consult with a nutritionist or dietitian to tailor the meal plan to your individual needs and goals.</li>
//         </ul>
//       </Notes>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #f8f8f8;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
// `;

// const MealPlanContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const MealPlanDay = styled.div`
//   background-color: #fff;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// const DayTitle = styled.h2`
//   margin-bottom: 10px;
// `;

// const MealItem = styled.div`
//   margin-bottom: 15px;
// `;

// const MealName = styled.p`
//   font-weight: bold;
// `;

// const MealDescription = styled.p`
//   margin-left: 20px;
// `;

// const Notes = styled.div`
//   width: 100%;
//   margin-top: 20px;

//   h2 {
//     margin-bottom: 10px;
//   }

//   ul {
//     padding-left: 20px;
//   }
// `;

// export default MealCharts;


import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for background color change
const changeBackgroundColor = keyframes`
  0% { background-color: #f8f8f8; }
  25% { background-color: #e0f7fa; }
  50% { background-color: #ffecb3; }
  75% { background-color: #ffe0b2; }
  100% { background-color: #f8f8f8; }
`;

// Keyframes for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MealCharts = () => {
  return (
    <Container>
      <Title>Meal Charts</Title>
      <MealPlanContainer>
        <MealPlanDay>
          <DayTitle>Day 1</DayTitle>
          <MealItem>
            <MealName>Breakfast:</MealName>
            <MealDescription>
              Scrambled eggs (3 whole eggs, 2 egg whites)<br />
              Whole grain toast (2 slices)<br />
              Avocado (half)<br />
              Orange juice or a piece of fruit
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Mid-Morning Snack:</MealName>
            <MealDescription>
              Greek yogurt (1 cup) with honey and mixed berries<br />
              A handful of almonds
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Lunch:</MealName>
            <MealDescription>
              Grilled chicken breast (200g)<br />
              Quinoa or brown rice (1 cup cooked)<br />
              Steamed broccoli and carrots<br />
              Mixed green salad with olive oil and balsamic vinegar
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Afternoon Snack:</MealName>
            <MealDescription>
              Protein shake (with whey protein, water or milk, and a banana)<br />
              Rice cakes with peanut butter
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Dinner:</MealName>
            <MealDescription>
              Baked salmon (200g)<br />
              Sweet potato (1 medium-sized)<br />
              Asparagus or green beans<br />
              Mixed green salad with a variety of veggies
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Evening Snack (optional):</MealName>
            <MealDescription>
              Cottage cheese (1 cup) with pineapple chunks
            </MealDescription>
          </MealItem>
        </MealPlanDay>
        <MealPlanDay>
          <DayTitle>Day 2</DayTitle>
          <MealItem>
            <MealName>Breakfast:</MealName>
            <MealDescription>
              Oatmeal (1 cup cooked) with banana slices, chia seeds, and a drizzle of honey<br />
              A glass of milk or a protein shake
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Mid-Morning Snack:</MealName>
            <MealDescription>
              Apple slices with almond butter<br />
              A handful of walnuts
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Lunch:</MealName>
            <MealDescription>
              Turkey breast sandwich on whole grain bread with lettuce, tomato, and mustard<br />
              Baby carrots with hummus<br />
              A piece of fruit (e.g., apple or pear)
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Afternoon Snack:</MealName>
            <MealDescription>
              Hard-boiled eggs (2)<br />
              A piece of dark chocolate
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Dinner:</MealName>
            <MealDescription>
              Grilled steak (200g) or lean beef<br />
              Brown rice (1 cup cooked)<br />
              Steamed spinach<br />
              Mixed green salad with a variety of veggies
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Evening Snack (optional):</MealName>
            <MealDescription>
              Protein shake or a glass of milk
            </MealDescription>
          </MealItem>
        </MealPlanDay>
        <MealPlanDay>
          <DayTitle>Day 3</DayTitle>
          <MealItem>
            <MealName>Breakfast:</MealName>
            <MealDescription>
              Smoothie with spinach, kale, banana, berries, and protein powder<br />
              Whole grain toast with peanut butter
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Mid-Morning Snack:</MealName>
            <MealDescription>
              Cottage cheese (1 cup) with sliced peaches or mango<br />
              A handful of cashews
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Lunch:</MealName>
            <MealDescription>
              Tuna salad (tuna, Greek yogurt, celery, onions, and a bit of mustard) on whole grain bread<br />
              Mixed green salad with a variety of veggies
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Afternoon Snack:</MealName>
            <MealDescription>
              Protein bar<br />
              Carrot sticks with guacamole
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Dinner:</MealName>
            <MealDescription>
              Grilled chicken thigh (200g)<br />
              Whole grain pasta (1 cup cooked) with marinara sauce<br />
              Steamed broccoli<br />
              Mixed green salad with a variety of veggies
            </MealDescription>
          </MealItem>
          <MealItem>
            <MealName>Evening Snack (optional):</MealName>
            <MealDescription>
              A small bowl of mixed berries with a dollop of Greek yogurt
            </MealDescription>
          </MealItem>
        </MealPlanDay>
      </MealPlanContainer>
      <Notes>
        <h2>Hydration</h2>
        <p>Drink plenty of water throughout the day, aiming for at least 3-4 liters. Include drinks like coconut water or sports drinks during intense workouts to replenish electrolytes.</p>
        <h2>Supplements (if needed)</h2>
        <ul>
          <li>Whey protein</li>
          <li>Creatine</li>
          <li>Multivitamin</li>
          <li>Fish oil</li>
          <li>BCAAs (Branched-Chain Amino Acids)</li>
        </ul>
        <h2>Notes</h2>
        <ul>
          <li>Ensure you're getting enough sleep and recovery time.</li>
          <li>Adjust the portion sizes based on your specific caloric needs and training intensity.</li>
          <li>Consult with a nutritionist or dietitian to tailor the meal plan to your individual needs and goals.</li>
        </ul>
      </Notes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  animation: ${changeBackgroundColor} 8s infinite;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #2c3e50;
  animation: ${fadeIn} 1s ease-in-out;
`;

const MealPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MealPlanDay = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const DayTitle = styled.h2`
  margin-bottom: 10px;
  color: #3498db;
`;

const MealItem = styled.div`
  margin-bottom: 15px;
`;

const MealName = styled.p`
  font-weight: bold;
  color: #e74c3c;
`;

const MealDescription = styled.p`
  margin-left: 20px;
  color: #34495e;
`;

const Notes = styled.div`
  width: 100%;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    margin-bottom: 10px;
    color: #8e44ad;
  }

  p, ul {
    color: #2c3e50;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
    color: #27ae60;
  }
`;

export default MealCharts;
