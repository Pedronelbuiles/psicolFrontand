<script setup>
import {ref,nextTick} from 'vue'
import { show_alert, sendRequest } from '../../functions';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
axios.defaults.headers.common['Authorization'] = 'Bearer '+authStore.authToken;
const form = ref({document: '', name: '', last_name: '', phone: '', email: '', adress: '', city: ''})
const documentInput = ref('');
const nameInput = ref('');
const lastNameInput = ref('');
const phoneInput = ref('');
const emailInput = ref('');
const adressInput = ref('');
const cityInput = ref('');
const save = () => {
    sendRequest('POST', form.value, '/api/professors','');
    form.value.name = '';
    form.value.document = '';
    form.value.last_name = '';
    form.value.phone = '';
    form.value.email = '';
    form.value.adress = '';
    form.value.city = '';
    nextTick(() => nameInput.value.focus())
}
</script>
<template>
    <div class="row mt-5">
        <div class="col-md-4 offset-md-4">
            <div class="card border border-dark">
                <div class="card-header bg-dark border border-dark text-light">
                    Crear Profesor
                </div>
                <div class="card-body">
                    <form @submit.prevent="save">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input autofocus type="text" v-model="form.document" placeholder="Documento" class="form-control" required ref="documentInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="text" v-model="form.name" placeholder="Nombre" class="form-control" required ref="nameInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="text" v-model="form.last_name" placeholder="Apellido" class="form-control" required ref="lastNameInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="text" v-model="form.phone" placeholder="Teléfono" class="form-control" required ref="phoneInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="email" v-model="form.email" placeholder="Correo" class="form-control" required ref="emailInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="text" v-model="form.adress" placeholder="Dirección" class="form-control" required ref="adressInput">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-building"></i>
                            </span>
                            <input type="text" v-model="form.city" placeholder="Ciudad" class="form-control" required ref="cityInput">
                        </div>
                        <div class="d-grid col-10 mx-auto">
                            <button class="btn btn-dark">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>