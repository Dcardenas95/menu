<template>
    <div>
        <div
            class=" shadow-md bg-gray-200 rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-auto w-96 pt-5"
        >
            <div class="mb-4">
                <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                >
                    Nombre del plato :
                </label>
                <input
                    class="block  focus:border-indigo-500 text-sm font-bold mb-2 rounded-md w-full"
                    type="text"
                    v-model='name'
                />
            </div>

            <div class="mb-6">
                <label for="about"
                    class="block text-grey-darker text-sm font-bold mb-2"
                >
                    Descripcion :
                </label>
                <div class="mt-1">
                    <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        v-model='description'
                    ></textarea>
                </div>
            </div>
            <div class="mx-auto">
                <label  class="block text-grey-darker text-sm font-bold mb-2">
                    Photo
                </label>
                <MyInput/>
            </div>

            <div class="mb-4">
                <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                >
                    Precio :
                </label>
                <input
                    class="block text-grey-darker text-sm font-bold mb-2 rounded-md w-full"
                    type="number"
                    v-model='price'
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                >
                    Cantidad :
                </label>
                <input
                    class="block text-grey-darker text-sm font-bold mb-2 rounded-md w-full"
                    type="number"
                    v-model="quantity"
                />
            </div>

            <div class="flex items-center justify-between mx-auto">
                <button
                    class="bg-blue-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                    type="button"
                    @click="registerMenu"

                >
                    Crear Menu
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import MyInput from '../components/Input.vue'
export default {
    name: "Form",
    data(){
        return{
            name:'',
            description:'',
            img:'',
            quantity:0,
            price:0,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },

    components:{
        MyInput
    },

    methods: {
        registerMenu(){
            axios.post('/menu/registrar',{
                    'name': this.name,
                    'description': this.description,
                    'img' : this.img,
                    'quantity' : this.quantity,
                    'price' : this.price,
                }).then(function (response) {
                    console.log('enviado correctamente');
                }).catch(function (error) {
                    console.log(error);
                });
        },
    }
};
</script>
