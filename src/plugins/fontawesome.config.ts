import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlus, faLocationDot } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPlus)
library.add(faLocationDot)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
