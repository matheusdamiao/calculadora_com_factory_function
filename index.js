function criaCalculadora() {
  return {
    //Atributos

    display: document.querySelector(".display"),

    // Métodos

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("conta inválida!");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("conta inválida!");
        return;
      }
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = "";
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
