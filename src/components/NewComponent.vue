<script>
import { defineComponent } from 'vue'
import OriginalComponent from '../components/OriginalComponent.vue';
export default defineComponent({
    extends: OriginalComponent,
    mounted() {
        // console.log('New Component mounted')
    },
    methods: {
        myMethod() {
        console.log('MyExtendedComponent method')
        }
    }
})
</script>
<!-- <template>
    <div>New Template</div>
    <OriginalComponent msg="original value" />
    <OriginalComponent msg="overridden value" />
</template> -->