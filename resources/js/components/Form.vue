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
                <div class="mt-1 flex items-center">
                    <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            <input type='file' class="hidden" />
                        </svg>
                    </span>
                    <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cambiar foto
                    </button>
                </div>
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
export default {
    name: "Form",
    data(){
        return{
            name:'',
            description:'',
            img:'',
            quantity:0,
            price:0
        }
    },

    methods: {
        registerMenu(){
            return alert('hola mundo')
        }
    },
};
</script>
