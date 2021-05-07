//which are in?
function inArray(array1,array2){
    //...
    let givenString = array2.join("-");
    let ans = [];
    for(const str of array1){
        if(givenString.includes(str)){
            ans.push(str);
        }
    }
    return ans.sort((a,b)=>{
        for(let i=0;i<Math.max(a.length,b.length);i++){
            if(a[i]!==b[i]) return a.charCodeAt(i)-b.charCodeAt(i);
        }
    });
  }

//array.diff
function arrayDiff(a, b) {
    const ans=[];
    for(const el of a){
      if(!(b.includes(el))){
        ans.push(el);
      }
    }
    return ans;
    
  }
//elimination tournament
const tourney = array => {
    let ans = [[...array]];
    let temp = []
    while(array.length>1){
      for(let i=0;i<array.length;i+=2){
        temp.push(Math.max(array[i], array[i+1]));
      }
      if(array.length%2){
        temp.pop();
        temp.unshift(array[array.length-1]);
      }
      ans.push([...temp]);
      array = [...temp];
      temp = [];
    }
    return ans;
  }

  //move zeros to the end
  var moveZeros = function (arr) {
    // TODO: Program me
    const ans=[];
    const zeros=[];
    for(const element of arr){
      if(element!==0){
        ans.push(element);
      }
      else{
        zeros.push(element);
      }
    }
    return ans.concat(zeros);  
  }

  //coding meetup
  function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(el=>{
        if((el.firstName.split("").reduce((a,b,i)=>a+el.firstName.charCodeAt(i), 0)%2)){
            return el;
        }
    });
  }