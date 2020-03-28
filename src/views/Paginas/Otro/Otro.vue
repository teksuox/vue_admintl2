<template>
  <div>
    <section class="content">
      <div class="box">
        <div class="box-body">
          Otra Pagina oe!!!
          
          <vue-select class="vue-select2" name="select2"
                :options="options2" :model.sync="result2"
                :searchable="true" language="en-US">
        </vue-select>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {
    "vue-select": require("vue-select2")
  },
  data () {
    return {
      options1: [
      "value1",
      "value2",
      "value3"
    ],
    options2: [{
      text: "name1",
      value: "value1"
    }, {
      text: "name2",
      value: "value2"
    }, {
      text: "name3",
      value: "value3"
    }],
    options3: [{
      label: "group1",
      options: [{
        text: "name1",
        value: "value1"
      }, {
        text: "name2",
        value: "value2"
      }, {
        text: "name3",
        value: "value3"
      }]
    }, {
      label: "group2",
      options: [{
        text: "name4",
        value: "value4"
      }, {
        text: "name5",
        value: "value5"
      }, {
        text: "name6",
        value: "value6"
      }]
    }],
    result1: "",
    result2: "",
    result3: ""
    }
  }
}
</script>
