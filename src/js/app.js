import elementControler from './modules/elementControler';
; (() => {
  const wrapper = document.getElementById('wrapper')
  const mainElements = {
    htmlBox: document.getElementById('htmlBox'),
    cssBox: document.getElementById('cssBox'),
    jsBox: document.getElementById('jsBox'),
  }

  const languagesItems = {
    htmlItems: ["emmet", "pug", "BEM", "camelcase", "snakecase", "kebabcase"],
    cssItems: ["mixin", "CSS Modules", "scss", "RWD", "grid layout", "import"],
    jsItems: ["this", "コールバック関数", "class", "スコープ", "クロージャ", "Gulp", "Webpack", "npm",]
  }

  let didCreateHtmlItem = true
  let didCreateCssItem = true
  let didCreateJsItem = true
  let existsHtmlItem = false
  let existsCssItem = false
  let existsJsItem = false
  let createdhtmlItem = []
  let createdcssItem = []
  let createdjsItem = []


  const htmlControler = new elementControler(languagesItems.htmlItems, createdhtmlItem, "htmlItem", )

  const cssControler = new elementControler(languagesItems.cssItems, createdcssItem, "cssItem", )

  const jsControler = new elementControler(languagesItems.jsItems, createdjsItem, "jsItem")


  const techSearch = (createdItems, languagesList) => {
    for (let item = 0; item < languagesList.length; item++) {
      createdItems[item].addEventListener('click', () => {
        const searchURL = 'https://www.google.com/search?q=';
        window.open(searchURL + languagesList[item])
      })
    }
  }


  const animateTranslate = (target, time, length, index, offset) => {
    const angle = 360 / length
    const degree = angle * index + Math.floor(Math.random() * 10) + offset
    const hypotenuse = 100 + (200 - 100)
    const start = {
      X: -50,
      Y: -50,
    }
    const end = {
      X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),
      Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse),
    }
    const startTime = Date.now()
    const update = () => {
      const now = Date.now()
      const timeDiff = (now - startTime)
      const progress = timeDiff / time
      if (progress < 0 || progress > 1) {
        return
      }
      const resultX = Math.floor((start.X + end.X - start.X) * progress)
      const resultY = Math.floor((start.Y + end.Y - start.Y) * progress)
      target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
      requestAnimationFrame(update)
    }
    update()
  }

  const chnageTranslate = (target, time, length, index, offset) => {
    const angle = 240 / length
    const degree = angle * index + Math.floor(Math.random() * 4) + offset
    const hypotenuse = 100 + (200 - 100)
    const start = {
      X: -50,
      Y: -50,
    }
    const end = {
      X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),
      Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse),
    }
    const startTime = Date.now()
    const update = () => {
      const now = Date.now()
      const timeDiff = (now - startTime)
      const progress = timeDiff / time
      if (progress < 0 || progress > 1) {
        return
      }
      const resultX = Math.floor((start.X + end.X - start.X) * progress)
      const resultY = Math.floor((start.Y + end.Y - start.Y) * progress)
      target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`
      requestAnimationFrame(update)
    }
    update()
  }

  mainElements.htmlBox.addEventListener('click', (element) => {
    if (didCreateHtmlItem) {
      htmlControler.createElements()
      htmlControler.appendElements()
      techSearch(createdhtmlItem, languagesItems.htmlItems)
      const offset = Math.random() * 360
      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
        createdhtmlItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
        createdhtmlItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
        animateTranslate(createdhtmlItem[itemIndex], 1000, languagesItems.htmlItems.length, itemIndex, offset)
      }
      existsHtmlItem = true
      if (existsCssItem === true || existsJsItem === true) {
        const offset = Math.random() + 160
        for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {
          createdhtmlItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
          createdhtmlItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
          chnageTranslate(createdhtmlItem[itemIndex], 1000, languagesItems.htmlItems.length, itemIndex, offset)
        }
      }
    }
    didCreateHtmlItem = false
  })

  mainElements.cssBox.addEventListener('click', (element) => {
    if (didCreateCssItem) {
      cssControler.createElements()
      cssControler.appendElements()
      techSearch(createdcssItem, languagesItems.cssItems)
      const offset = Math.random() * 360
      for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {
        createdcssItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
        createdcssItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
        animateTranslate(createdcssItem[itemIndex], 1000, languagesItems.cssItems.length, itemIndex, offset)
      }
      existsCssItem = true
      if (existsHtmlItem === true || existsJsItem === true) {
        // const offset = Math.random() + 30
        const offset = Math.random() + 50
        for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {
          createdcssItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
          createdcssItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
          chnageTranslate(createdcssItem[itemIndex], 1000, languagesItems.cssItems.length, itemIndex, offset)
        }
      }
    }
    didCreateCssItem = false
  })

  mainElements.jsBox.addEventListener('click', (element) => {
    if (didCreateJsItem) {
      jsControler.createElements()
      jsControler.appendElements()
      techSearch(createdjsItem, languagesItems.jsItems)
      const offset = Math.random() * 360
      for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {
        createdjsItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
        createdjsItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
        animateTranslate(createdjsItem[itemIndex], 1000, languagesItems.jsItems.length, itemIndex, offset)
      }
      existsJsItem = true
      if (existsHtmlItem === true || existsCssItem === true) {
        // const offset = Math.random() + -80
        const offset = Math.random() - 80
        for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {
          // const offset = Math.random() + 330
          createdjsItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + "%"
          createdjsItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + "%"
          chnageTranslate(createdjsItem[itemIndex], 1000, languagesItems.jsItems.length, itemIndex, offset)
        }
      }
    }
    didCreateJsItem = false
  })

})()
