




(function () {

const style = document.createElement("style");
style.textContent = `
.login-trigger {
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f2c94c, #ff9f1c);
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.login-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 13, 0.75);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 9999;
}

.login-overlay.active {
  opacity: 1;
  pointer-events: all;
}

.login-modal {
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  border-radius: 20px;
  background: radial-gradient(circle at top, #170043ff, #1e0037ff);
  color: #fff;
  position: relative;
  transform: scale(0.8) translateY(30px);
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow:
    0 0 40px rgba(40, 0, 77, 1),
    0 30px 60px rgba(0,0,0,0.6);
}

.login-overlay.active .login-modal {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 18px;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #aaa;
  cursor: pointer;
}

.input-group {
  position: relative;
  margin-bottom: 1.8rem;
}

.input-group input {
  width: 100%;
  padding: 0.9rem;
  background: transparent;
  border: 1px solid #380091ff;
  border-radius: 10px;
  color: #fff;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
  transition: 0.3s ease;
  background: #0b0f16;
  padding: 0 6px;
}

.input-group input:focus + label,
.input-group input:valid + label {
  top: -8px;
  font-size: 0.75rem;
  color: #4ccbf2ff;
}

.login-btn {
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: none;
  color: white;
  background: linear-gradient(135deg, #6200ffff, #7438ffff);
  font-weight: 700;
  cursor: pointer;
}

.login-alt {
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #ffffffffrgba(183, 183, 183, 1)1c);
  font-weight: 700;
  cursor: pointer;
   margin-bottom: 10px;
}


.login-footer {
  margin-top: 1.4rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
 
}

.login-footer a {
  color: #8f2dffff;
  text-decoration: none;
}


`;




const overlay = document.createElement("div");
overlay.className = "login-overlay";

overlay.innerHTML = `
  <div class="login-modal">
    <button class="close-btn">&times;</button>
    <h2>Welcome.</h2>
    <p>Log in to access your armory</p>

    <div class="input-group">
      <input type="email" required />
      <label>Email</label>
    </div>

    <div class="input-group">
      <input type="password" required />
      <label>Password</label>
    </div>

    <button class="login-btn">Sign In</button>

    <hr></hr>
    <h3 class="text-center mb-4">or</h3>

    <button class="login-alt">Log in with Google</button>
    <button class="login-alt">Log in with Facebook</button>


    <div class="login-footer">
      <a href="#">Forgot password?</a>
      <a href="#">Create account</a>
    </div>
  </div>
`;

  if (window.__loginPopupLoaded) return;
  window.__loginPopupLoaded = true;

  // ---- styles ----

  document.head.appendChild(style);

  document.body.appendChild(overlay);

  // ---- logic ----
  const loginBtn = document.getElementById("loginbutton");
  loginBtn.onclick = () => overlay.classList.add("active");
  overlay.onclick = e => {
    if (e.target === overlay || e.target.classList.contains("close-btn")) {
      overlay.classList.remove("active");
    }
  };
})();




