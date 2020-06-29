<template>
  <div>
    <q-separator dark style="height: 2px;" color="teal-5"/>

    <form-factory
      :fields="fields"
      :form="form"
    />

    <div v-if="form.mode === '2'">
      <div v-for="(item, index) in form.dates" :key="index" class="row secondary-bg-color">
        <div class="col-xs-8">
          <q-input
            type="date"
            v-model="form.dates[index]"
            filled
            label="Date"
            dark
            color="white"
            class="secondary-bg-color"
            style="margin: 0% 11% 10% 35%;"
          />
        </div>
        <div class="col-xs-4">
          <q-btn
            v-if="form.mode === '2'"
            icon="delete"
            round
            color="red"
            @click="remove(index)"
            style="margin-top: 5%;"
          />
        </div>
      </div>
    </div>

    <div class="secondary-bg-color">
      <q-btn
        v-if="form.mode === '2'"
        label="Add Date"
        color="teal-5"
        class="full-width"
        @click="add"
      />
    </div>
  </div>
</template>

<script>
import FormFactory from '../general/form/FormFactory'
import DateBuilder from 'src/app/infrastructure/builder/forms/DateBuilder'

export default {
  name: 'PageIndex',
  data () {
    return {
      fields: new DateBuilder()
    }
  },
  props: {
    form: {
      type: Object,
      require: true
    }
  },
  components: {
    FormFactory
  },
  methods: {
    add () {
      this.form.dates.push('')
    },
    remove (position) {
      this.form.dates = this.form.dates.filter((item, index) => {
        return position !== index
      })
    }
  }
}
</script>

<style>
</style>
