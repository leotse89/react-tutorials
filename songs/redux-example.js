console.clear();

//ppl dropping off a form
const createPolicy = (name, amount) => {
  return { //action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }
  };
}

//reducers
const claimHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action
    return [...oldListOfClaims, action.payload];
  }
  
  //we don't care the action
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action
    return bagOfMoney - action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
}

const policies = (listOfPlicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPlicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPlicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPlicies;
}

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Leo', 30));
store.dispatch(createPolicy('Mike', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Leo', 50));

store.dispatch(deletePolicy('Mike'));

console.log(store.getState());