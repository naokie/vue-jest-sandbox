import { shallow } from 'vue-test-utils'
import MessageList from '../src/components/MessageList'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(MessageList, {
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
