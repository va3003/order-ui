<template>
  <div class="registration-container">

  <header><h1>User Registration Page</h1>
  </header>
  <div class="row mt-3">
    <div class="col-md-7 offset-md-3">
    <div class="card card-body text-center">
    <form @submit.prevent="registerUser">
    <div class="form-group row">
        <label for="uui" class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
        <input type="uui" class="form-control" id="uid" v-model="uid" placeholder="uuid15" required>
        </div>
      </div>
     <div class="form-group row">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
        <input type="username" class="form-control" id="username" v-model="username" placeholder="kc1237" required>
        </div>
      </div>
    <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
        <input type="email" class="form-control" id="email" v-model="email" placeholder="kc1237@gm.com" required>
        </div>
      </div>
    <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
        <input type="password" class="form-control" id="password" v-model="password" placeholder="123455" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="firstname" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
        <input type="firstname" class="form-control" id="firstname" v-model="firstname" placeholder="KC" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
        <input type="lastName" class="form-control" id="lastName" v-model="lastName" placeholder="CH" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="role" class="col-sm-2 col-form-label">Role</label>
            <div class="col-sm-10">
        <input type="role" class="form-control" id="role" v-model="role" placeholder="User" required>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    <router-link class= "btn btn-success m-2 float-end" to="/">Home</router-link>

  </div>
  </div>
  <footer>
    <p>Copyright &copy; 2024</p>
  </footer>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default{
  name:'UserRegistration',
  data(){
    return{
      uid:'',
      username:'',
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      role:'',
    }
  },
  methods:{
    async registerUser(){
      try{
        await axios.post("/api/auth/register",{
        userId:this.uid,
        username:this.username,
        email:this.email,
        password:this.password,
        firstname:this.firstname,
        lastname:this.lastname,
        role:this.role,
      });
      Swal.fire({
        icon:'success',
        title:'User registered successfully',
        showConfirmButton:false,
        timer:9000
      })
      }catch(error){
        if (error.response) {
        Swal.fire({
        icon:'error',
        title:'Error!',
        text: error.response.data.message
      })}else if (error.request) {
        Swal.fire({
        icon:'error',
        title:'Network Error!'
      })}
      }
    }
  }
}
</script>

<style scoped>
.registration-container {
  /* Add your styling here */
  .title {
    color: yellow;
  }

  .paragraph {
    font-size: 16px;
  }
}
</style>
