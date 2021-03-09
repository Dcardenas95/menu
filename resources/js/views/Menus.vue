<template>
    <div class="container bg-blue-500 mt-5">
        <div class="grid grid-cols-3">
            <div>
                <h1 class="text-center text-yellow-800 uppercase text-xl font-bold">
                    Menus Del Dia
                </h1>
            </div>
            <div class="mt-2">
                <Form/>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
import Form from '../components/Form.vue'

export default {
    name:'Menu',
    components:{
        Form,
    },
    mounted(){

    }
}
</script>
