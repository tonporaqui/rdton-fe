<template>
    <section id="timeline-section" class="p-20 mt-32 sm:p-20 md:p-10 lg:p-8">
        <h2 class="text-3xl font-extrabold mb-6 text-indigo-950 dark:text-yellow-500 text-center">
            Mí Time Line
        </h2>
        <div class="flex justify-center">
            <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>

                <div v-for="(event, index) in timeLineMe" :key="index" 
                     :class="event.type === 'Estudios' ? 'mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline' : 'mb-8 flex justify-between items-center w-full right-timeline'"
                     :data-aos="getAosEffect(event.type)" :data-aos-delay="(index + 1) * 100">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">
                            {{ index + 1 }}
                        </h1>
                    </div>
                    <div :class="event.type === 'Estudios' ? 'order-1 bg-white dark:bg-blue-800 rounded-lg shadow-xl w-5/12 px-6 py-4 flex flex-col items-start' : 'order-1 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 flex flex-col items-start'">
                        <!-- Contenedor para el ícono y el tipo -->
                        <div class="flex flex-col items-center mb-2">
                            <Icon :name="event.icon" size="27px" 
                                  :class="event.type === 'Estudios' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-yellow-200'">
                            </Icon>
                            <h2 class="leading-relaxed mt-2" 
                                :class="event.type === 'Estudios' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-yellow-200'">
                                {{ event.type }}
                            </h2>
                        </div>

                        <h3 class="mb-2 font-bold" 
                            :class="event.type === 'Estudios' ? 'text-blue-900 dark:text-blue-400' : 'text-gray-800 dark:text-yellow-400'">
                            {{ event.title }}
                        </h3>
                        <p class="mb-2 leading-relaxed" 
                           :class="event.type === 'Estudios' ? 'text-blue-900 dark:text-blue-400' : 'text-gray-900 dark:text-yellow-400'">
                            {{ event.institution || event.company }}
                        </p>
                        <p class="text-sm" 
                           :class="event.type === 'Estudios' ? 'text-blue-800 dark:text-blue-300' : 'text-indigo-700 dark:text-yellow-300'">
                            {{ formatDate(event.startDate) }} -
                            {{ event.endDate ? formatDate(event.endDate) : "Presente" }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        timeLineMe: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getAosEffect(type) {
            return type === "Estudios" ? "fade-left" : "fade-right";
        },
        formatDate(dateStr) {
            const date = new Date(dateStr + "-01");
            return date.toLocaleString("es-ES", { month: "long", year: "numeric" });
        },
    },
};
</script>
