<template>
    <div>
        <div class="header">
            <h1>My shop</h1>
            <a class="logout" href="#" @click="logoutNow()">Logout</a>
        </div>
        <div class="sidebar">
            <ul class="nav">
                <li>
                    <router-link to="/admin/category">Category</router-link>
                </li>
                <li>
                    <router-link to="/admin/supplier">Supplier</router-link>
                </li>
                <li>
                    <router-link to="/admin/product">Product</router-link>
                </li>
                <li>
                    <router-link to="/admin/shop">Shop</router-link>
                </li>
            </ul>
        </div>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin',
    data () {
        return {
            
        }
  },
  methods: {
      logoutNow() {
          localStorage.setItem('token', '');
          this.$router.push({name: 'login'})
      }
  }
}
</script>

<style scoped>
    .logout{
        float: right;
    }
    .nav{
        float: left;
    }
    ul{
        list-style-type: none;
    }
</style>
