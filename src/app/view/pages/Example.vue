<template>
  <q-page class="q-pa-xl">
    <form-factory
      class-factory="row q-col-gutter-sm"
      :form="form"
      :fields="fields"
    />
    <list-component separator="true" :data="list">
      <div slot-scope="row" style="display: contents">
        <q-item-section>
          <q-item-label>{{ row.row.description }}</q-item-label>
          <q-item-label caption>{{ row.row.caption }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon :name="row.row.icon" color="yellow" />
        </q-item-section>
      </div>
    </list-component>
  </q-page>
</template>

<script>
import FormFactory from '../components/general/form/FormFactory'
import ExampleFormBuilder from '../../infrastructure/builder/forms/ExampleFormBuilder'
import ListComponent from '../components/general/list/ListComponent'

export default {
  name: 'PageIndex',
  components: {
    FormFactory,
    ListComponent
  },
  data () {
    return {
      fields: new ExampleFormBuilder(),
      form: {
        text: '',
        select: '',
        multSelect: [],
        check: false,
        radio: 1,
        radioGroup: 1,
        radioToggle: [],
        date: ''
      },
      list: [
        {
          description: 'Desc 1',
          caption: 'Cap 1',
          icon: 'star'
        },
        {
          description: 'Desc 2',
          caption: 'Cap 2',
          icon: 'label'
        },
        {
          description: 'Desc 3',
          caption: 'Cap 3',
          icon: 'person'
        }
      ]
    }
  }
}
</script>
