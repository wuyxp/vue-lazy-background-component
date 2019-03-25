import { Vue, Component } from 'vue-property-decorator'

@Component
class Home extends Vue {
  public name: string = 'My'
  public render(h){
    return (
      <div>
        {this.name}
      </div>
    )
  }
}
export default Home