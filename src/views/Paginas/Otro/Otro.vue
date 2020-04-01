<template>
  <div>
    <section class="content">
      <div class="box">
        <div class="box-body">
         <h1>Vue Select</h1>
          <v-select :options="options" :reduce="country => country.code" label="country" v-model="selected" />
        </div>
        {{selected}}
      </div>
    </section>
  </div>
</template>

<script>


export default {
  data () {
    return {
      options: [
        ' ',
        {code: 'CA', country: 'Canada'},
        {code: 'CL', country: 'chile'},
        {code: 'PR', country: 'peru'}
      ],
      selected : 'ca'
    }
  }
}
</script>
