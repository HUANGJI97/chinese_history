let table = document.getElementsByTagName('table')[0]
let tb = table.getElementsByTagName("tr")

let arr = []
for(let i = 0; i < tb.length; i++) {
  let td = tb[i].getElementsByTagName('td')
  let tda = Array.from(td)
  
  if(td.length == 5) {
    tda.splice(0, 1)
  }
  if(td.length == 6) {
    tda.splice(0, 1)
    tda.splice(2, 1)
  }
  if(tda.length > 3) {
      arr.push({
        "dynasty": tda[0].innerText || td[0].innerText,
        "dynastyCn": "",
        "socialFormation": "",
        "startYear": tda[1].innerText.slice(0, 5) || td[1].innerText.slice(0, 5),
        "endYear": tda[1].innerText.slice(6, 10) || td[1].innerText.slice(6, 10),
        "year": tda[1].innerText || td[1].innerText,
        "lengthOfDynasty": tda[1].innerText.slice(12) || td[1].innerText.slice(12),
        "founder": tda[2].innerText || td[2].innerText,
        "capital": tda[3].innerText || td[3].innerText,
        "period": null
      })
  }
}

let data = JSON.stringify(arr)

let blob = new Blob([data], {type: 'text/json'})
const a = document.createElement('a')
a.href = window.URL.createObjectURL(blob)
a.download = 'dyn.json'
a.click()

