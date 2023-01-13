<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consectetur,
      eius ratione cumque vitae pariatur recusandae quia delectus ducimus earum
      expedita debitis autem, maiores molestias inventore alias aperiam
      blanditiis voluptates?
    </p>
    <div>{{ data }}</div>
    <div>{{ currencyData }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("api/ninja?name=mario", {
  method: "post",
  body: { age: 30 },
});
const { data: currencyData } = await useFetch("api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
