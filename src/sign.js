const email = document.querySelector(".email");
const emailInput = document.querySelector("#email");

const nonEmailMsg = document.querySelector(".nonEmail");
const invalidEmailMsg = document.querySelector(".invalidEmail");

const password = document.querySelector(".password");
const passwordInput = document.querySelector("#password");
const invalidPasswordMsg = document.querySelector(".invalidPassword");

const submitBtn = document.querySelector(".loginBtn");

const eyeOn = document.querySelector(".eyeOn");
const eyeOff = document.querySelector(".eye-off");
const eyeBtn = document.querySelector(".eyeBtn");

// Test 계정
const TEST_EMAIL = "test@codeit.com";
const TEST_PASSWORD = "codeit101";

// 이메일 유효성 검사를 위한 정규표현식
const EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// 비밀번호 Attribute 변환을 위한 객체
const PASSWORD_CONFIG = {
  PASSWORD: { INPUT: passwordInput, EYE_ON: eyeOn, EYE_OFF: eyeOff },
};

/**
 * 이메일 유효성을 검사하는 함수입니다.
 * @param {Event} event - 이벤트 객체
 */
const emailValidation = ({ target }) => {
  const email = target.value;

  // email이 있는지 확인
  if (!email) {
    nonEmailMsg.classList.remove("errNone");
  } else {
    nonEmailMsg.classList.add("errNone");
  }

  // 이메일 유효성 검사
  if (email && !EMAIL_REGEXP.test(email)) {
    invalidEmailMsg.classList.remove("errNone");
  } else {
    invalidEmailMsg.classList.add("errNone");
  }

  // 이메일 유효성 검사 후, input 박스의 border 색상을 결정합니다.
  if (email && EMAIL_REGEXP.test(email)) {
    emailInput.classList.remove("err");
    isEmailValid = true;
  } else {
    emailInput.classList.add("err");
  }
};

// 비밀번호 검사 함수
/**
 * 비밀번호 유효성을 검사하는 함수입니다.
 * @param {Event} event - 이벤트 객체
 */
const passwordValidator = ({ target }) => {
  const password = target.value;
  if (!password) {
    invalidPasswordMsg.classList.remove("errNone");
  }
};

// 로그인 버튼 클릭 시 이벤트 함수
const submitLogin = () => {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  if (emailValue === TEST_EMAIL && passwordValue === TEST_PASSWORD) {
    location.href = "/folder.html";
  } else {
    emailValidation({ target: emailInput });
    passwordValidator({ target: passwordInput });
  }
};

/**
 * 비밀번호의 눈 아이콘을 클릭했을 때, 비밀번호를 보여주거나 가리는 함수입니다.
 * @param {string} type - 비밀번호의 타입입니다. 현재는 PASSWORD만 가능합니다.
 */
const handleToPasswordEye = (type) => {
  const passwordType = PASSWORD_CONFIG[type];
  const passwordAttribute = PASSWORD_CONFIG[type].INPUT.getAttribute("type");

  if (passwordAttribute === "password") {
    passwordType.INPUT.setAttribute("type", "text");
    passwordType.EYE_OFF.classList.toggle("none");
    passwordType.EYE_ON.classList.toggle("none");
    return;
  } else {
    passwordType.INPUT.setAttribute("type", "password");
    passwordType.EYE_OFF.classList.toggle("none");
    passwordType.EYE_ON.classList.toggle("none");
    return;
  }
};

// Event Listener 등록
emailInput.addEventListener("focusout", emailValidation);
passwordInput.addEventListener("focusout", passwordValidator);
submitBtn.addEventListener("click", submitLogin);
eyeBtn.addEventListener("click", () => handleToPasswordEye("PASSWORD"));
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitLogin();
  }
});
