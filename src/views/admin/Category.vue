<template>
    <div>
        <modal modalHeading="Add New Category" :cond="showingAddModal" @modalClose="showingAddModal=false" >
            <table>
                <tr>
                    <td>
                        Category Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newCategory.name" placeholder="Category Name">
                        </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <textarea type="text" v-model="newCategory.description" placeholder="Description"/>
                        </td>
                </tr>
                <tr>
                    <td>
                        <button class="btnSave" @click="addNewCategory()">Save</button>
                    </td>
                </tr>
            </table>
        </modal>
        <div class="header">
            <h2>Categories</h2>
            <button class="addBtn" @click="showingAddModal = true">Add New</button>
        </div>
        <hr>
        <table class="nice-table">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            <tr :key="i" v-for="(newCategory, i) in newCategoryArray" >
                <td >{{newCategory.name}}</td>
                <td>{{newCategory.description}}</td>
                <td><button class="delete" @click="removeCategory(i)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Category',
    data () {
        return {
            showingAddModal: false,
            showingDeleteModal: false, 
            newCategory: {
                name: "",
                description: ""
            },
            newCategoryArray: []
        }
  },
  methods: {
      addNewCategory(){
          if (!this.newCategory.name) {
              alert("Give it a name")
        return;
      }
      if (!this.newCategory.description) {
              alert("Tell something about it")
        return;
      }

      this.newCategoryArray.push(this.newCategory);
      this.newCategory = {
                name: "",
                description: ""
            };
      this.saveCategory();
        console.log(this.newCategoryArray);
      },
       removeCategory(x) {
      this.newCategoryArray.splice(x, 1);
      this.saveCategory();
    },
      saveCategory() {
      const parsed = JSON.stringify(this.newCategoryArray);
      localStorage.setItem('newCategoryArray', parsed);
    }
  },
  mounted() {
    if (localStorage.getItem('newCategoryArray')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('newCategoryArray'));
      } catch(e) {
        localStorage.removeItem('newCategoryArray');
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
