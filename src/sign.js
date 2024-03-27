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

// validation이 완료되었는지 확인하는 변수
let isEmailValid = false;
let isPasswordValid = false;

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
 * @returns {void}
 */
const validateEmail = ({ target }) => {
  const email = target.value;

  // email이 있는지 확인
  if (!email) {
    nonEmailMsg.classList.remove("hide");
  } else {
    nonEmailMsg.classList.add("hide");
  }

  // 이메일 유효성 검사
  if (email && !EMAIL_REGEXP.test(email)) {
    invalidEmailMsg.classList.remove("hide");
  } else {
    invalidEmailMsg.classList.add("hide");
  }

  // 이메일 유효성 검사 후, input 박스의 border 색상을 결정합니다.
  if (email && EMAIL_REGEXP.test(email)) {
    emailInput.classList.remove("err");
    isEmailValid = true;
  } else {
    emailInput.classList.add("err");
  }
};

/**
 * 비밀번호 유효성을 검사하는 함수입니다.
 * @param {Event} event - 이벤트 객체
 * @returns {void}
 */
const validatePassword = ({ target }) => {
  const password = target.value;
  if (!password) {
    invalidPasswordMsg.classList.remove("hide");
    return;
  } else {
    invalidPasswordMsg.classList.add("hide");
    isPasswordValid = true;
  }
};

/**
 * 주어진 경로로 POST 요청을 보내는 함수입니다.
 * @param {string} path - 요청을 보낼 경로
 * @param {Object} data - 요청에 포함될 데이터
 * @param {string} authorized - 인증 토큰 (선택적)
 * @returns {Promise<Object>} - 응답 데이터를 담은 Promise 객체
 */
const postRequest = async (path, data, authorized) => {
  const res = await fetch(`https://bootcamp-api.codeit.kr/${path}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Autorization: authorized ? `Bearer ${authorized}` : "",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

/**
 * 로그인을 제출하는 함수입니다.
 * @returns {void}
 */
const submitLogin = async () => {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  if (isEmailValid && isPasswordValid) {
    const res = await postRequest("api/sign-in", { email: emailValue, password: passwordValue }, null);
    window.localStorage.setItem("accessToken", res.accessToken);
    window.location.href = "folder.html";
  } else {
    validateEmail({ target: emailInput });
    validatePassword({ target: passwordInput });
  }
};

/**
 * 비밀번호의 눈 아이콘을 클릭했을 때, 비밀번호를 보여주거나 가리는 함수입니다.
 * @param {string} type - 비밀번호의 타입입니다. 현재는 PASSWORD만 가능합니다.
 * @returns {void}
 */
const handlePasswordVisibilityToggle = (type) => {
  const passwordType = PASSWORD_CONFIG[type];
  const passwordAttribute = PASSWORD_CONFIG[type].INPUT.getAttribute("type");

  const isPasswordVisible = passwordAttribute !== "password";
  passwordType.INPUT.setAttribute("type", isPasswordVisible ? "password" : "text");
  passwordType.EYE_OFF.classList.toggle("none");
  passwordType.EYE_ON.classList.toggle("none");
};

/**
 * 해당 함수는 로딩 시 호출되는 함수입니다.
 * 만약 accessToken이 존재한다면 "folder.html"로 페이지를 이동합니다.
 * @returns {void}
 */
const handleOnLoading = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "folder.html";
  }
};

// Event Listener 등록
document.addEventListener("DOMContentLoaded", handleOnLoading);
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
eyeBtn.addEventListener("click", () => handlePasswordVisibilityToggle("PASSWORD"));
submitBtn.addEventListener("click", submitLogin);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitLogin();
  }
});
