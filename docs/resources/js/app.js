import Vue from 'vue';
import TestComponent from '../../../src/components/TestComponent';

Vue.component('v-test-component', TestComponent);

new Vue({el: '#app'});
