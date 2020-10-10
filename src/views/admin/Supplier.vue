<template>
    <div>
        <modal modalHeading="Add New Supplier" :cond="showingAddModal" @modalClose="showingAddModal=false" >
            <table>
                <tr>
                    <td>
                        Supplier Name
                    </td>
                    <td>
                        <input type="text" id="newCatName" v-model="newSupplier.name" placeholder="Supplier Name">
                        </td>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <textarea type="text" v-model="newSupplier.description" placeholder="Description"/>
                        </td>
                </tr>
                <tr>
                    <td>
                        <button class="btnSave" @click="addNewSupplier()">Save</button>
                    </td>
                </tr>
            </table>
        </modal>
        <div class="header">
            <h2>Suppliers</h2>
            <button class="addBtn" @click="showingAddModal = true">Add New</button>
        </div>
        <hr>
        <table class="nice-table">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            <tr :key="i" v-for="(newSupplier, i) in newSupplierArray" >
                <td >{{newSupplier.name}}</td>
                <td>{{newSupplier.description}}</td>
                <td><button class="delete" @click="removeSupplier(i)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Supplier',
    data () {
        return {
            showingAddModal: false,
            newSupplier: {
                id: "",
                name: "",
                description: ""
            },
            newSupplierArray: []
        }
  },
  methods: {
      addNewSupplier(){
          if (!this.newSupplier.name) {
              alert("Give it a name")
        return;
      }
      if (!this.newSupplier.description) {
              alert("Tell something about it")
        return;
      }
        this.newSupplier.id = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
      this.newSupplierArray.push(this.newSupplier);
      this.newSupplier = {
                name: "",
                description: ""
            };
      this.saveSupplier();
        console.log(this.newSupplierArray);
      },
       removeSupplier(x) {
      this.newSupplierArray.splice(x, 1);
      this.saveSupplier();
    },
      saveSupplier() {
      const parsed = JSON.stringify(this.newSupplierArray);
      localStorage.setItem('newSupplierArray', parsed);
    }
  },
  mounted() {
    if (localStorage.getItem('newSupplierArray')) {
      try {
        this.newSupplierArray = JSON.parse(localStorage.getItem('newSupplierArray'));
      } catch(e) {
        localStorage.removeItem('newSupplierArray');
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
