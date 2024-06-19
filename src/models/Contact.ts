import * as enums from '../utils/enums/Contact'

class Contact {
  name: string
  category: enums.Category
  group: enums.Group
  email: string
  phone: string
  id: number

  constructor(
    name: string,
    category: enums.Category,
    group: enums.Group,
    email: string,
    phone: string,
    id: number
  ) {
    this.name = name
    this.category = category
    this.group = group
    this.email = email
    this.phone = phone
    this.id = id
  }
}

export default Contact
