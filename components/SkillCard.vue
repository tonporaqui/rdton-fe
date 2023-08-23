<template>
    <section class="p-20 sm:p-20 md:p-10 lg:p-8 mt-32 sm:mt-32 md:mt-30 lg:mt-20">
        <h2 class="text-3xl font-extrabold mb-6 text-indigo-950 dark:text-yellow-500 text-center">Stack</h2>
        <!-- Contenedor de las tarjetas con diseño de cuadrícula -->
        <div class="flex justify-center">
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <!-- Iterar sobre las habilidades para mostrar cada item -->
                <div v-for="(skill, index) in skills" :key="skill.id"
                    class="transition transform hover:scale-105 p-1 bg-white dark:bg-gray-800 rounded-lg shadow-md dark: shadow-gray-800"
                    :data-aos="getAosEffect(index)" :data-aos-delay="(index + 1) * 100">

                    <h3 class="text-xl  font-semibold mb-2 text-indigo-800 dark:text-yellow-400">{{ skill.title }}</h3>

                    <ul>
                        <li v-for="description in skill.description" :key="description">
                            <!-- Mostrar icono y descripción -->
                            <Icon :name=description.icon></Icon>
                            <span class="pl-1 leading-relaxed text-indigo-950 dark:text-yellow-200">{{ description.title }}</span>
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
        }
    }
}
</script>
