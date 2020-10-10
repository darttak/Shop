<template>
    <div>
        <modal modalHeading="Add New Supplier" :cond="showingAddModal" @modalClose="showingAddModal=false" >
            <table>
                <tr>
                    <td>
                        Supplier Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newProduct.name" placeholder="Supplier Name">
                        </td>
                </tr>
                <tr>
                    <td>
                        Category
                    </td>
                    <td>
                        <select name="" id="">
                            <option value="">Select One</option>
                            <option :key="cat" v-for="cat in newCategoryArray"></option>
                        </select>
                        </td>
                </tr>
                <tr>
                    <td>
                        Supplier
                    </td>
                    <td>
                        <select name="" id="">
                            <option value="">Select One</option>
                        </select>
                        </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <textarea type="text" v-model="newProduct.description" placeholder="Description"/>
                        </td>
                </tr>
                <tr>
                    <td>
                        <button class="btnSave" @click="addnewProduct()">Save</button>
                    </td>
                </tr>
            </table>
        </modal>
        <div class="header">
            <h2>All Products</h2>
            <button class="addBtn" @click="showingAddModal = true">Add New</button>
        </div>
        <hr>
        <table class="nice-table">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            <tr :key="i" v-for="(newProduct, i) in newProductArray" >
                <td >{{newProduct.name}a}</td>
                <td>{{newProduct.description}}</td>
                <td><button class="delete" @click="removeSupplier(i)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import newCategoryArray from './Category'
export default {
    name: 'Supplier',
    data () {
        return {
            showingAddModal: false,
            newProduct: {
                name: "",
                description: ""
            },
            newProductArray: []
        }
  },
  methods: {
      addnewProduct(){
          if (!this.newProduct.name) {
              alert("Give it a name")
        return;
      }
      if (!this.newProduct.description) {
              alert("Tell something about it")
        return;
      }

      this.newProductArray.push(this.newProduct);
      this.newProduct = {
                name: "",
                description: ""
            };
      this.saveSupplier();
        console.log(this.newProductArray);
      },
       removeSupplier(x) {
      this.newProductArray.splice(x, 1);
      this.saveSupplier();
    },
      saveSupplier() {
      const parsed = JSON.stringify(this.newProductArray);
      localStorage.setItem('newProductArray', parsed);
    }
  },
  mounted() {
    if (localStorage.getItem('newProductArray')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('newProductArray'));
      } catch(e) {
        localStorage.removeItem('newProductArray');
      }
    }
  }
}
</script>

<style scoped>
    .addBtn{
        float: right;
    }
</style>
