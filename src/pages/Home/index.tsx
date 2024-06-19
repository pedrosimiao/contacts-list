import Sidebar from '../../containers/Sidebar'
import ContactList from '../../containers/ContactList'
import AddButton from '../../components/AddButton'

const Home = () => (
  <>
    <Sidebar showFilters />
    <ContactList />
    <AddButton />
  </>
)

export default Home
