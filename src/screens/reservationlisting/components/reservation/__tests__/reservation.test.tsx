
import React from 'react'
import { mount, shallow } from 'enzyme'
import Reservation, { Props } from '../index'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });
describe('Reservation', () => {
  it('renders ', () => {

    const props: Props = {
      reservation: {
        __typename: 'Reservation',
        id: 1,
        name: 'Conrad',
        hotelName: 'Hilton',
        arrivalDate: '01/01/2000',
        departureDate: '01/02/2000'
      }

    }
    const wrapper = mount(<Reservation {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

