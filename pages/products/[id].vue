<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam
      cupiditate tempore necessitatibus adipisci iusto voluptatibus, dolorem    
      consequatur vel, quis fugit officia. Placeat neque aut accusantium non
      quasi ut cupiditate.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
