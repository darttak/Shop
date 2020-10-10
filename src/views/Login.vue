<template>
  <div class="login">
    <div class="loginHeader">User Login</div>
    <div class="loginContainer">
      <table>
        <tr>
          <td>Username</td>
          <td>:</td>
          <td>
            <input type="text" placeholder="username" v-model="user.username" />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>:</td>
          <td>
            <input type="password" placeholder="password" v-model="user.password" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <button @click="loginNow()">Submit</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
   
  },
  methods: {
    loginNow() {
      console.log(this.user);
      this.$eventBus.$emit("loadingStatus", true);

      this.$axios.post("https://run.mocky.io/v3/b4f1f0ef-4d01-4db3-b71c-4909ce8c1cb2?mocky-delay=600ms", this.user).then(res => {
        this.$eventBus.$emit("loadingStatus", false);
        console.log(res);
        if (res.data.error) {
          alert(res.data.message);
        } else {
          this.$router.push({name: 'admin'});
        }
      });
    }
  }
};
</script>
