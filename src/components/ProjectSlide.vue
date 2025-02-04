<script lang="ts">
export default {
    props: {
        projects: Array<{
            name: String,
            route: String,
            reflection: String,
            image: String
        }>
    },
    data() {
        // return {
        //     current: 
        // }
    }
};
</script>

<template>
    <div class="card">
        {{ projects.map((value: any) => {
            console.log(value)
            if (value.route === $route.params.name){
                return value.name;
            }
        }) }}
    </div>
</template>