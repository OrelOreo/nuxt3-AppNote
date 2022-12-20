<script setup lang="ts">
const { signOut, isLoggedIn } = useAuth()

</script>
<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/myprofile">Profile</NuxtLink>
                </li>
                <li v-if="isLoggedIn()" @click="signOut" class="logout">Logout</li>
            </ul>
         </nav>
    </div>
</template>

<style scoped>

    nav {
        background-color: black;
        height: 10vh;
    }

    ul {
        display: flex;      
        height: 100%;
        align-items: center;
        padding: 0 2rem;
    }

    li {
        color: white;
        margin-right: 1rem;
    }

    .logout {
        margin-left: auto;
        cursor: pointer;
    }
</style>