import * as graphql from 'graphql';
import fetch from './util/fetch';
import apiKey from '../../env';
import { Food } from '../types/index';


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = graphql;

interface ServingAPI{
  label: string;
  value: string;
}
interface NutrientAPI {
  nutrient_id: string;
  value: string;
  measures: ServingAPI[];
}

interface FoodAPI{
  desc: {manu: string ; ndbno: string; name: string};
  nutrients: NutrientAPI[];
}

interface API {
  food: FoodAPI;
}

const MacroType = new GraphQLObjectType({
  name: 'Macros',
  fields: {
    calories: { type: GraphQLInt },
    fat: { type: GraphQLInt },
    protein: { type: GraphQLInt },
    carbs: { type: GraphQLInt },
    fiber: { type: GraphQLInt },
  },
});

const ServingType = new GraphQLObjectType({
  name: 'Serving',
  fields: {
    quantity: { type: GraphQLString },
    macros: { type: MacroType },
  },
});

const FoodType = new GraphQLObjectType({
  name: 'Food',
  fields: {
    ndbno: { type: GraphQLInt },
    name: { type: GraphQLString },
    manu: { type: GraphQLString },
    servings: { type: new GraphQLList(ServingType) },
  },
});

const FoodListType = new GraphQLList(FoodType);

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    foodList: {
      type: FoodListType,
      args: { q: { type: GraphQLString } },
      resolve(parentValue, args) {
        const { q } = args;
        const url = `https://api.nal.usda.gov/ndb/search?api_key=${apiKey}&q=${q}&max=10`;
        return fetch(url)
          .then((data) => {
            const items = JSON.parse(data).list.item;
            const reportsURL = items.reduce(
              (acc: string, { ndbno }: {ndbno: string}) => `${acc}&ndbno=${ndbno}`,
              `https://api.nal.usda.gov/ndb/V2/reports?api_key=${apiKey}&format=JSON`,
            );

            return fetch(reportsURL)
              .then((res) => {
                const { foods } = JSON.parse(res);
                return foods.map(({ food }: API): Food => {
                  const { ndbno } = food.desc;
                  const { name } = food.desc;
                  const { manu } = food.desc;
                  const servings = [{
                    quantity: '100g',
                    macros: {
                      calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                    },
                  }];
                  food.nutrients.forEach((nutrient) => {
                    switch (nutrient.nutrient_id) {
                      case '208':
                        servings[0].macros.calories = parseInt(nutrient.value, 10);
                        nutrient.measures.forEach((serving, i) => {
                          if (!servings[i]) {
                            servings.push({
                              quantity: serving.label,
                              macros: {
                                calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                              },
                            });
                          }
                          servings[i].macros.calories = parseInt(serving.value, 10);
                        });
                        break;

                      case '203':
                        servings[0].macros.protein = parseInt(nutrient.value, 10);
                        nutrient.measures.forEach((serving, i) => {
                          if (!servings[i]) {
                            servings.push({
                              quantity: serving.label,
                              macros: {
                                calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                              },
                            });
                          }
                          servings[i].macros.protein = parseInt(serving.value, 10);
                        });
                        break;
                      case '204':
                        servings[0].macros.fat = parseInt(nutrient.value, 10);
                        nutrient.measures.forEach((serving, i) => {
                          if (!servings[i]) {
                            servings.push({
                              quantity: serving.label,
                              macros: {
                                calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                              },
                            });
                          }
                          servings[i].macros.fat = parseInt(serving.value, 10);
                        });
                        break;
                      case '205':
                        servings[0].macros.carbs = parseInt(nutrient.value, 10);
                        nutrient.measures.forEach((serving, i) => {
                          if (!servings[i]) {
                            servings.push({
                              quantity: serving.label,
                              macros: {
                                calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                              },
                            });
                          }
                          servings[i].macros.carbs = parseInt(serving.value, 10);
                        });
                        break;
                      case '291':
                        servings[0].macros.fiber = parseInt(nutrient.value, 10);
                        nutrient.measures.forEach((serving, i) => {
                          if (!servings[i]) {
                            servings.push({
                              quantity: serving.label,
                              macros: {
                                calories: 0, fat: 0, protein: 0, carbs: 0, fiber: 0,
                              },
                            });
                          }
                          servings[i].macros.fiber = parseInt(serving.value, 10);
                        });
                        break;
                      default:
                    }
                  });
                  // const servingsArr = Object.entries(servings).map(([label, val]) => (
                  //   { quantity: label, ...val }
                  // ));
                  // for (label in servings) {
                  //   servingsArr.push({ quantity: label, ...servings[label] });
                  // }

                  // Food.updateOne(
                  //   { ndbno },
                  //   {
                  //     ndbno, name, manu, servings: servingsArr,
                  //   },
                  //   { upsert: true },
                  // ).catch(e => console.log('insert err', e));
                  return {
                    ndbno, name, manu, servings,
                  };
                });
              });
          });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
