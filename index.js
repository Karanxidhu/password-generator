class generate {
    numGen() {
      let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      let index = Math.floor(Math.random() * 9) + 1
      return num[index]
    }
    
    capitalAlphaGen() {
      let capAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      let index = Math.floor(Math.random() * 25) + 1
      return capAlpha[index].toUpperCase()
    }
    
    AlphaGen() {
      let Alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      let index = Math.floor(Math.random() * 25) + 1
      return Alpha[index]
    }
  
  }
  
  class passwords extends generate {
    weakPassword() {
      this.password = `${this.numGen()}`
      for (let i = 0; i < 8; i++) {
        this.password += `${this.numGen()}`
      }
      return this.password
    }
    
    strongPassword() {
      this.password = `${this.capitalAlphaGen()}`
      for (let i = 0; i < 8; i++) {
        this.password += `${this.AlphaGen()}`
      }
      this.password +=`${this.numGen()}`
      return this.password
    }
    
    funnyPassword() {
    let funny = ['incorrect','tryagain','password','username','you','trylater','username','return']
      let index = Math.floor(Math.random() * 8) + 1
      return funny[index]
    }
  }
  let idPass = new passwords()
  console.log(idPass.strongPassword())