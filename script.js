// pegar o botao, pegar o form e pegar base onde vai ficar novo form
const buttonNext = document.querySelector("#buttonNext");
const formPrimary = document.querySelector("#form-primary");
const formPlan = document.createElement("form");
const buttonGo = document.querySelector("#button-go");
const btnTransition = document.querySelector("#btn-transition");
const base = document.querySelector("#base");

buttonGo.style.visibility = "hidden";
// ficar ouvindo o clique do botão
// tira o formulario antigo
// e coloca o novo formulario
buttonNext.addEventListener("click", function () {
  formPlan.classList.add("plan");
  formPlan.classList.add("form");

  buttonGo.style.display = "flex";
  btnTransition.style.justifyContent = "space-between";
  formPrimary.style.display = "none";
  formPlan.innerHTML = ` 
         <h1>Select your plan</h1>
         <p>You have the option of monthly or yearly biling.</p>
        <div class="planArcade">
          <div>
           <img src="../assets/images/icon-arcade.svg" alt="">
          </div>
          <div>
           <h3>Arcade</h3>
           <p>$9/mo</p>
          </div>
        </div>  
        <div class="planArcade">
          <div>
           <img src="../assets/images/icon-advanced.svg" alt="">
          </div>
          <div>
           <h3>Advanced</h3>
           <p>$9/mo</p>
          </div>
        </div> 
        <div class="planArcade">
          <div>
           <img src="../assets/images/icon-pro.svg" alt="">
          </div>
          <div>
           <h3>Pro</h3>
           <p>$9/mo</p>
          </div>
        </div> 
        <div class="monthlyYearly">
          <div>
           Monthly
          </div>
          <div class="monthlyYearlyClick">
           <span></span>
          </div>
          <div>
           yearly
          </div>
        </div>
    `;
  base.appendChild(formPlan);
});
