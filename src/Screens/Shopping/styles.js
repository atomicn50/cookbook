import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  input: {
    height: 40,
    width: '80%',
    marginHorizontal: 6,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'whitesmoke'
  },
  inputButton: {
    marginHorizontal: 10,
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