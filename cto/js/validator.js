import Inputmask from "inputmask";
import JustValidate from "just-validate";

export function formValidation() {
  const telCall = document.querySelector("#tel-callback");
  const callMask = new Inputmask("+38 (999) 999 99 99");
  callMask.mask(telCall);

  const validatorCall = new JustValidate("#form-callback", {
    errorLabelStyle: {
      color: "#d81414",
      fontSize: "14px",
      marginBottom: "10px",
    },
  });
  validatorCall
    .addField("#name-callback", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для заповнення",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "поле має містити не менше 3 символів",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "поле має містити не більше 15 символів",
      },
    ])
    .addField("#tel-callback", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для заповнення",
      },
      {
        rule: "function",
        validator: function () {
          const phone = telCall.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: "поле має містити 10 символів",
      },
    ])
    .addField(
      "#select-callback",
      [
        {
          rule: "required",
          errorMessage: "Поле обов'язкове для вибору",
        },
      ],
      { errorsContainer: ".select-anchor" }
    )
    .onSuccess((e) => {
      console.log(...new FormData(e.target));
      console.log(e.target.reset());
    });
  const inputTel = document.querySelector(".input-tel");
  const inputMask = new Inputmask("+38 (999) 999 99 99");
  inputMask.mask(inputTel);

  const validatorReviews = new JustValidate("#form", {
    errorLabelStyle: {
      color: "#d81414",
      fontSize: "14px",
      marginBottom: "10px",
    },
  });

  validatorReviews
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для заповнення",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "поле має містити не менше 3 символів",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "поле має містити не більше 15 символів",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для заповнення",
      },
      {
        rule: "email",
        errorMessage: "Формат електронної пошти недійсний",
      },
    ])
    .addField("#tel", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для заповнення",
      },
      {
        rule: "function",
        validator: function () {
          const phone = inputTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: "поле має містити 10 символів",
      },
    ])
    .addField(
      "#select",
      [
        {
          rule: "required",
          errorMessage: "Поле обов'язкове для вибору",
        },
      ],
      { errorsContainer: ".select-wrap" }
    )
    .addRequiredGroup("#radioGroup", "Поле обов'язкове для вибору")
    .addField("#personal-data", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для вибору",
      },
    ])
    .addField("#textarea", [
      {
        rule: "required",
        errorMessage: "Поле обов'язкове для вибору",
      },
      {
        rule: "minLength",
        value: 20,
        errorMessage: "поле має містити не менше 20 символів",
      },
      {
        rule: "maxLength",
        value: 500,
        errorMessage: "поле має містити не більше 500 символів",
      },
    ])
    .onSuccess((e) => {
      console.log(...new FormData(e.target));
      console.log(e.target.reset());
    });
}
