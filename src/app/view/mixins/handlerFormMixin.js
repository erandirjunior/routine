import handlerActionMixin from './handlerActionMixin'
import handlerCreateDataMixin from './handlerCreateDataMixin'
import handlerDeleteDataMixin from './handlerDeleteDataMixin'
import handlerUpdateDataMixin from './handlerUpdateDataMixin'

export default {
  mixins: [
    handlerActionMixin,
    handlerCreateDataMixin,
    handlerDeleteDataMixin,
    handlerUpdateDataMixin
  ]
}
