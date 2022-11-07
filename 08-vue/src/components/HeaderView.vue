<template>
  <div>
    <hr />
    <input type="number" v-model="number1" /><br />
    <input type="number" v-model="number2" /><br />
    <input type="number" v-model="total" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      total: 0,
    };
  },

  computed: {
    nameAndSurname() {
      return this.name + " " + this.surname;
    },

    watch: {
      /* eski ve yeni degerleri alabiliriz. */
      number1(newValue, oldValue) {
        this.total = parseInt(this.number1) + parseInt(this.number2);
      },
      number2(newValue, oldValue) {
        this.total = parseInt(this.number1) + parseInt(this.number2);
      },
      /*
      Datalarimizi izleyerek, data'larimizda bir degisiklik oldugu zaman
      istenen islemleri yaptirmak icin kullanabilecegimiz bir metot.
      */
    },
  },
};
</script>

<style></style>
