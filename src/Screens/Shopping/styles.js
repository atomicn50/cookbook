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
    alignItems: 'center',
    marginTop: 4,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editingContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
    alignItems: 'center',
  },
  editIngredientContainer: {
    backgroundColor: 'whitesmoke',
    width: '68%',
    flexDirection: 'row',
    marginLeft: 4,
    borderRadius: 10,
    alignItems: 'center',
    height: 33,
    marginBottom: 1,
  },
  test: {
    marginLeft: 8,
  },
  edited: {
    fontSize: 18,
    paddingVertical: 4
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