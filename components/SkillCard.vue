<template>
    <section class="p-8">
        <h2 class="text-3xl font-extrabold mb-6 dark:text-white">Stack</h2>
        <!-- Contenedor de las tarjetas con diseño de cuadrícula -->
        <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Iterar sobre las habilidades para mostrar cada item -->
                <div v-for="(skill, index) in skills" :key="skill.id"
                    class="transition transform hover:scale-105 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                    :data-aos="getAosEffect(index)" :data-aos-delay="(index + 1) * 100">

                    <h2 class="text-3xl font-extrabold mb-6 dark:text-white">{{ skill.title }}</h2>

                    <ul>
                        <li v-for="description in skill.description" :key="description">
                            <!-- Mostrar icono y descripción -->
                            <Icon :name=description.icon></Icon>
                            <span>{{ description.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        skills: {
            type: Array,
            required: true
        }
    },
    methods: {
        getAosEffect(index) {
            const effects = ["fade-up-right", "fade-up-left", "fade-up", "zoom-in"];
            return effects[index % effects.length];
        },
        // Esta función retorna la ruta del icono
        getIconPath(description) {
            return `/assets/icons/${description}.png`;
        }
    }
}
</script>
