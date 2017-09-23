document.getElementById('inputForm').addEventListener('submit', saveData);

function saveData(e) {

  var myName = document.getElementById('mName').value;
  var myIncome = document.getElementById('mIncome').value;
  var myHousing = document.getElementById('mHousing').value;
  var myUtilities = document.getElementById('mUtilities').value;
  var myFood = document.getElementById('mFood').value;
  var myTransportation = document.getElementById('mTransportation').value;
  var myDebt = document.getElementById('mDebt').value;
  var mySaving = document.getElementById('mSaving').value;
  var myClothing = document.getElementById('mClothing').value;
  var myEntertainment = document.getElementById('mEntertainment').value;
  var myCarInsurance = document.getElementById('mCarInsurance').value;
  var id = chance.guid();


  var plan = {
    name: myName,
    income: myIncome,
    housing: myHousing,
    utilities: myUtilities,
    food: myFood,
    transportation: myTransportation,
    debt: myDebt,
    saving: mySaving,
    clothing: myClothing,
    entertainment: myEntertainment,
    carInsurance: myCarInsurance,
    id: id
  }

  if(localStorage.getItem('plans') === null){
    var plans = [];
    plans.push(plan);
    localStorage.setItem('plans', JSON.stringify(plans));
  }else {
    var plans = JSON.parse(localStorage.getItem('plans'));
    plans.push(plan);
    localStorage.setItem('plans', JSON.stringify(plans));
  }

  document.getElementById('inputForm').reset();

  fetchData();
  e.preventDefault();
}

function deleteRecord(id) {
  var plans = JSON.parse(localStorage.getItem('plans'));
  for(var i = 0; i < plans.length; i++){
    if(plans[i].id === id){
      plans.splice(i,1);
    }
  }
  localStorage.setItem('plans', JSON.stringify(plans));
  fetchData();
}

function fetchData() {

  var plans = JSON.parse(localStorage.getItem('plans'));
  document.getElementById('showResult').innerHTML = ' ';

  for(var i = 0; i < plans.length; i++) {

    var mName = plans[i].name;
    var mIncome = parseInt(plans[i].income);
    var mHousing = parseInt(plans[i].housing);
    var mUtilities = parseInt(plans[i].utilities);
    var mFood = parseInt(plans[i].food);
    var mTransportation = parseInt(plans[i].transportation);
    var mDebt = parseInt(plans[i].debt);
    var mSaving = parseInt(plans[i].saving);
    var mClothing = parseInt(plans[i].clothing);
    var mEntertainment = parseInt(plans[i].entertainment);
    var mCarInsurance = parseInt(plans[i].carInsurance);
    var id = plans[i].id;


    var totalSpent = mHousing + mUtilities + mFood + mTransportation + mDebt + mSaving + mClothing + mEntertainment + mCarInsurance;
    var totalMoneyLeft = mIncome - totalSpent;


    document.getElementById('showResult').innerHTML += '<div class="well">' +
  																									 '<h3>Summary'	+ '</h4>' +
                                                     '<hr width="100%" style="border: 2px dashed #C0C0C0" color="#FFFFFF" size="6">' +
  																									 '<h4>Name: '	+ mName + '</h4>' +
                                                     '<h4>My Income: $'	+ mIncome + '</h4>' +
  																									 '<h4>Housing: $'	+ mHousing + '</h4>' +
                                                     '<h4>Utilities: $'	+ mUtilities + '</h4>' +
                                                     '<h4>Food: $'	+ mFood + '</h4>' +
                                                     '<h4>Transportation: $'	+ mTransportation + '</h4>' +
                                                     '<h4>Debt: $'	+ mDebt + '</h4>' +
                                                     '<h4>Saving: $'	+ mSaving + '</h4>' +
                                                     '<h4>Clothing: $'	+ mClothing + '</h4>' +
                                                     '<h4>Entertainment: $'	+ mEntertainment + '</h4>' +
                                                     '<h4>CarInsurance: $'	+ mCarInsurance + '</h4>' +
                                                     '<table class="table table-striped">' + '</br> ' +
                                                        '<thead>' +
                                                            '<tr>' +
                                                              //'<th>#' + '</th>' +
                                                              '<th>Name' + '</th>' +
                                                              '<th>Total Income' + '</th>' +
                                                              '<th>Total Expenses' + '</th>' +
                                                              '<th>Total Save' + '</th>' +
                                                            '</tr>' +
                                                        '</thead>' +
                                                        '<tbody>' +
                                                            '<tr>' +
                                                                //'<th scrope="row">1' + '</th>' +
                                                                '<td>' + mName + '</td>' +
                                                                '<td>$' + mIncome + '</td>' +
                                                                '<td>$' + totalSpent + '</td>' +
                                                                '<td>$' + totalMoneyLeft + '</td>' +
                                                            '</tr>' +
                                                        '</tbody>' +
                                                     '</table>' +
  																									 '<a href="#" onclick=deleteRecord(\''+id+'\') class="btn btn-danger">Delete</a>' +
  																									 '</div>'
  }
}
