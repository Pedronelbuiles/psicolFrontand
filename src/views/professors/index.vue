<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue'
import { confirmation } from '../../functions';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
axios.defaults.headers.common['Authorization'] = 'Bearer '+authStore.authToken;
onMounted(() => {getProfessors()})
const professors = ref([]);
const load = ref(false);
const getProfessors = async () => {
    await axios.get('/api/professors').then(
        response => (professors.value = response.data));
        load.value = true
}
const deleteProfessor = (id,name) => {
    confirmation(name,('/api/professors/'+id), '/profressors');
}
</script>
<template>
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="d-grid col-10 mx-auto">
                <router-link :to="{ path: 'create' }" class="btn btn-dark">
                    <i class="fa-solid fa-circle-plus"> Add</i>
                </router-link>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card border border-white text-center" v-if="!load">
                <div class="card-body">
                    <img src="/loader.gif" alt="" class="img-fluid">
                </div>
            </div>
            <div class="table-responsive" v-else>
                <table class="table table-bordered table-hover">
                    <thead><tr><th>#</th><th>Professor</th><th></th><th></th></tr></thead>
                    <tbody class="table-group-divider">
                        <tr v-for="pro, i in professors" :key="pro.id">
                            <td>{{(i+1)}}</td>
                            <td>{{pro.name}}</td>
                            <td>
                                <router-link :to="{ path: 'edit/'+pro.id}" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="$event => deleteProfessor(pro.id,pro.name)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
</template>