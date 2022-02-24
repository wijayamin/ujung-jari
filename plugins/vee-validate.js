import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate'
import { required, length, min, email, confirmed } from 'vee-validate/dist/rules'
import id from 'vee-validate/dist/locale/id.json'

extend('required', required)
extend('length', length)
extend('email', email)
extend('min', min)
extend('confirmed', confirmed)
localize('id', id)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)