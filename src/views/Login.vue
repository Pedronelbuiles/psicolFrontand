<script setup>
import {ref} from 'vue'
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore()
const form =ref({email: '', password: ''})
</script>
<template>
    <div class="row mt-5">
        <div class="col-md-4 offset-md-4">
            <div class="card border border-dark">
                <div class="card-header bg-dark border border-dark text-light">
                    Iniciar sesion
                </div>
                <div class="card-body">
                    <form @submit.prevent="$event => authStore.login(form)">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-at"></i>
                            </span>
                            <input autofocus type="email" v-model="form.email" placeholder="Correo electrónico" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-key"></i>
                            </span>
                            <input type="password" v-model="form.password" placeholder="contraseña" class="form-control">
                        </div>
                        <div class="d-grid col-10 mx-auto">
                            <button class="btn btn-dark">Ingresar</button>
                        </div>
                        <div class="d-grid col-10 mx-auto mt-3 text-center">
                            <router-link :to="{ path: 'register' }">Registro</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>