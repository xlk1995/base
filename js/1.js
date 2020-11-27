
let clikeMe = document.getElementById('clikeMe')
clikeMe.addEventListener('click', () => {
  run()
})
let startMonth = 0
let startDate = 0
let startYear = 0
let endMonth = 0
let endDate = 0
let endYear = 0
let total = 0
let totalEnd = 0
let sum = 0
function run () {
  startMonth = parseInt(document.querySelector('#startMonth1').value)
  startDate = parseInt(document.querySelector('#startDate1').value)
  startYear = parseInt(document.querySelector('#startYear1').value)
  console.log(`${startYear}-${startMonth}-${startDate}`);

  endMonth = parseInt(document.querySelector('#endMonth1').value)
  endDate = parseInt(document.querySelector('#endDate1').value)
  endYear = parseInt(document.querySelector('#endYear1').value)
  console.log(`${endYear}-${endMonth}-${endDate}`);

  if (startYear === endYear) {
    total += startDate
    countStartMonth()
    console.log(total);
    totalEnd += endDate
    countEndMonth()
    console.log(totalEnd)
    sum = totalEnd - total
    console.log(sum);

  } else {
    total += startDate
    countStartMonth()
    if ((endYear % 4 === 0 && endYear % 100 === 0) || endYear % 400 === 0) {
      total = 366 - total + 1
    } else {
      total = 365 - total + 1
    }
    console.log(total)
    sum += total
    countEndMonth()
    sum += totalEnd


    const totalYear = endYear - startYear
    let tempYear = startYear
      for (let i = 0; i < totalYear - 1; i++) {
        tempYear++
        if ((tempYear % 4 === 0 && tempYear % 100 === 0) || tempYear % 400 === 0) {
          sum += 366
        } else {
          sum += 365
        }
      }
    


    console.log(`共有${sum}天`)
    total = 0
    totalEnd = 0
    sum = 0 
  }


}
function countStartMonth () {
  for (let i = 1; i < startMonth; i++) {
    switch (i) {
      case 1: ;
      case 3: ;
      case 5: ;
      case 7: ;
      case 8: ;
      case 10: ;
      case 12:
        total += 31
        break;
      case 4: ;
      case 6: ;
      case 9: ;
      case 11:
        total += 30
        break;
      default:
        if ((startYear % 4 === 0 && startYear % 100 === 0) || startYear % 400 === 0) {
          total += 29
        } else {
          total += 28
        }
        break;
    }
  }
}

function countEndMonth () {
  for (let i = 1; i < endMonth; i++) {
    debugger
    switch (i) {
      case 1: ;
      case 3: ;
      case 5: ;
      case 7: ;
      case 8: ;
      case 10: ;
      case 12:
        totalEnd += 31
        break;
      case 4: ;
      case 6: ;
      case 9: ;
      case 11:
        totalEnd += 30
        break;
      default:
        if ((endYear % 4 === 0 && endYear % 100 === 0) || endYear % 400 === 0) {
          totalEnd += 29
        } else {
          totalEnd += 28
        }
        break;
    }
  }
}
