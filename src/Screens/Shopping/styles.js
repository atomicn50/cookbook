import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 315,
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'whitesmoke'
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    margin: 4,
  },
  ingredient: {
    fontSize: 18,
  },
  ingredientQuantity: {
    padding: 2,
    fontSize: 18,
  },
  boughtIngredientsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 8,
  },
  boughtIngredientsHeader: {
    margin: 12,
    fontSize: 20,
    color: 'orangered',
    fontWeight: 'bold'
  },
  boughtIngredientQuantity: {
    padding: 2,
    fontSize: 18,
    color: 'dimgray',
    textDecorationLine: 'line-through',
  },
  boughtIngredient: {
    fontSize: 18,
    color: 'dimgray',
    textDecorationLine: 'line-through',
  },
  clearListButtonContainer: {
    position: 'absolute', 
    top: 500,
    left: 150,
  },
  clearListButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: 'orangered',
  },
  clearListText: {
    fontWeight: '700',
    color:'white',
    padding: 8,
  }
});