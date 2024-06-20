const clock = document.querySelector("h2#clock")

// clock.innerText = ""

// function sayHello() {
//   console.log("hello")
// }

// 5초마다 실행
// setInterval(sayHello, 5000)
// 5초 기다렸다 실행
// setTimeout(sayHello, 5000)


//.padstart or .padend

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)