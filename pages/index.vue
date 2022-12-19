<script setup lang="ts">
import useSupaBase from '~~/composables/useSupabase';

    const {supabase} = useSupaBase()

</script>

<template>
    <div>
        <div class="container">
           <AuthCard />
        </div>
    </div>
</template>


<style scoped>

    .container  {
        max-width: 50%;
        height: 90vh;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>