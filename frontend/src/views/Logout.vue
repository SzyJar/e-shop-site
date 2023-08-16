<template>
<div class="logout">
  <h1>You have been logged out.</h1>
  <p>Thanks for being with us!</p>
</div>

</template>

<script>
export default {
}
</script>

<style scoped>
.logout {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
}
h1, p {
    margin: 0;
    padding: 20px;
    background: white;
    color: black;
    width: 100%;
}
</style>