<template>
  <div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">{{msg}}</h3>
              <form>
                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                  <label for="inputEmail">Email </label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                  <label for="inputPassword">Senha</label>

                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Lembrar senha</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Entrar</button>
                <div class="text-center">
                  <a class="small" href="#">Esqueceu a senha?</a></div>
                <div>
                  <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Criar minha conta</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bem vindo ao Ucan!'
    }
  }
}
</script>

<style scoped>
  :root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login-heading{
  color: #007bff;
  font-family:Impact;
  font-size: 50px;
  
}

.login,
.image {
  min-height: 100vh;
}


.bg-image {
  background-size: cover;
  background-position: center;
  background-image: url('http://blueridgeoilpaint.com/wp-content/uploads/2017/02/0033_CERULEAN-BLUE.jpg'); 
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: .1.5rem;
  margin-top: 20px;
}

.form-label-group {
  position: relative;
  margin-bottom: 1.5rem;
 
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: 50px;

  border-radius: .2rem;
  margin-top: 10px
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: .1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: .1rem solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
  border-block-end-color: #007bff;
  
  
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
  
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 1rem;
  color:transparent;
}


</style>

