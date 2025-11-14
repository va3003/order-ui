<template>
  <div class="login-container">
    <!-- Wrap all your existing template content in a single root div -->
    <h1>Login</h1>
      <div class="row mt-2">
    <div class="col-md-7 offset-md-3">
    <div class="card card-body text-center">
    <form @submit.prevent="login">
      <!-- Your form elements -->
      <div class="form-group">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
        <input type="username" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
    </div>
    <!-- Any other elements you had at the root level -->
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      axios.post('/api/auth/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        // Handle successful login
        Swal.fire({
          title: 'Login Successful!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch(error => {
        // Handle login error
        Swal.fire({
          title: 'Login Failed',
          text: error,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
    }
  }
}
</script>

<style scoped>
.login-container {
  /* Add your styling here */
}
</style>
