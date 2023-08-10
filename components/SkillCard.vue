<template>
    <div class="skill-card">
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        skills: {
            type: Array,
            required: true
        }
    }
}
</script>
  
<style scoped>
.skill-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;  /* Agregado */
  flex: 1;      /* Agregado */
}
</style>

  