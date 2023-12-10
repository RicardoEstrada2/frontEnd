<script setup>
import { ref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

const makers = ref(null)

const headers = ref([
  { title: 'Id', align: 'start', sortable: false, key: 'id' },
  { title: 'Name', align: 'start', sortable: false, key: 'name' },
  { title: 'Logo', align: 'start', sortable: false, key: 'logo' },
  { title: 'Active', align: 'start', sortable: false, key: 'is_active' },
])

const itemsPerPage = ref(5)

onMounted(async () => {
  // fetch('http://localhost:8000/api/v1/makers').then(res => res.json()).then(data => {
  //   makers.value = data
  // })
  try {
    const response = await fetch('laravelapi-production-8f1e.up.railway.app/api/v1/makers')

    makers.value = await response.json()

    // console.log(makers.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  return { makers }
})

// fetch('http://localhost:8000/api/v1/makers').then(res => res.json()).then(data => {
//   makers.value = data
// })
</script>

<template>
  <h1>Makers</h1>
  <div v-if="makers">
    <VDataTable
      v-model:items-per-page="itemsPerPage"
      :items="makers.data"
      :headers="headers"
    />
    <!--    <ul> -->
    <!--      <li -->
    <!--        v-for="maker in makers.data" -->
    <!--        :key="maker.id" -->
    <!--      > -->
    <!--        {{ maker.name }} -->
    <!--      </li> -->
    <!--    </ul> -->
  </div>
  <div v-if="!makers">
    <div>...Loading</div>
  </div>
</template>
