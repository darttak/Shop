<template>
    <div>
        <modal modalHeading="Add New Supplier" :cond="showingAddModal" @modalClose="showingAddModal=false" >
            <table>
                <tr>
                    <td>
                        Product Name
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
                        <select v-model="newProduct.category">
                            <option value="">Select One</option>
                            <option :key=newCat.id v-for="newCat in newCategory" >{{newCat.name}}</option>
                        </select>
                        </td>
                </tr>
                <tr>
                    <td>
                        Supplier
                    </td>
                    <td>
                        <select v-model="newProduct.supplier">
                            <option value="">Select One</option>
                            <option :key=newSup.id v-for="newSup in newSupplier" >{{newSup.name}}</option>
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
                        Price
                    </td>
                    <td>
                        <input type="text" v-model="newProduct.price" placeholder="0">
                    </td>
                </tr>
                <tr>
                    <td>
                        Image
                    </td>
                    <td>
                        <input type="file" id="image" @change="onfileChange">
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <progress :value="percent" max="100" v-if="percent != 0 && percent != 100"></progress>
                        <span v-if="percent != 0 && percent != 100"></span> <br><br>
                        <img :src="newProduct.image" alt="No Image Selected">
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
                <th>Category</th>
                <th>Supplier</th>
                <th>Price</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            <tr :key="i" v-for="(newProduct, i) in newProductArray" >
                <td >{{newProduct.name}}</td>
                <td>{{newProduct.category}}</td>
                <td>{{newProduct.supplier}}</td>
                <td>{{newProduct.price}}</td>
               <td>{{newProduct.description}}</td>
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
             newSupplier: [],
             newCategory: [],
             newProduct: {
                 name: "",
                 description: "",
                 supplier: "",
                 category: "",
                 price: 0,
                 image: require('@/assets/icons8-image-100.png')
             },
             newProductArray: [],
             percent: 0
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
       onfileChange(e){
           var files = e.target.files || e.dataTransfers.files;
           var file = files[0];
           var fd = new FormData();
           fd.append("fileToUpload", file, file.name);

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
         this.newProductArray = JSON.parse(localStorage.getItem('newProductArray'));
         this.newCategory = JSON.parse(localStorage.getItem('newCategoryArray'));
         this.newSupplier = JSON.parse(localStorage.getItem('newSupplierArray'));
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
