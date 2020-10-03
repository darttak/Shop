<template>
    <div>
        <div class="header">
            <h1>My shop</h1>
            <a href="#">Logout</a>
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
  }
}
</script>

<style scoped>

</style>
