import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  input: {
    height: 40,
    width: '80%',
    marginHorizontal: 4,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: 'whitesmoke',
    borderRadius: 10
  },
  inputButton: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  ingredientListContainer: {
    marginTop: 10,
  },
  ingredientContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 15,
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkButton: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 5,
  },
  editingContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  editIngredientContainer: {
    height: 30,
    backgroundColor: 'whitesmoke',
    width: '78%',
    flexDirection: 'row',
    marginLeft: 4,
    borderRadius: 10,
    alignItems: 'center',
  },
  ingredient: {
    fontSize: 18,
  },
  ingredientQuantity: {
    padding: 2,
    fontSize: 18,
  },
  boughtIngredientsContainer: {
    marginLeft: 4,
  },
  boughtIngredients: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 8,
  },
  boughtIngredientsHeader: {
    marginTop: 8,
    marginLeft: 14,
    marginBottom: 12,
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
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
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