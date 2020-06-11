import handlerActionMixin from 'src/app/infrastructure/view/mixins/handlerActionMixin'
import handlerCreateDataMixin from 'src/app/infrastructure/view/mixins/handlerCreateDataMixin'
import handlerDeleteDataMixin from 'src/app/infrastructure/view/mixins/handlerDeleteDataMixin'
import handlerUpdateDataMixin from 'src/app/infrastructure/view/mixins/handlerUpdateDataMixin'

export default {
  mixins: [
    handlerActionMixin,
    handlerCreateDataMixin,
    handlerDeleteDataMixin,
    handlerUpdateDataMixin
  ]
}
