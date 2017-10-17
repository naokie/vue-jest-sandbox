import { mount } from 'vue-test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message.vue'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
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

  it('is a MessagaeList component', () => {
    expect(cmp.is(MessageList)).toBe(true)
    expect(cmp.is('ul')).toBe(true)
  })

  it('contains a Message component', () => {
    expect(cmp.contains(Message)).toBe(true)
    expect(cmp.contains('.message')).toBe(true)
  })

  it('Both MessageList and Message are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true)
    expect(cmp.find(Message).isVueInstance()).toBe(true)
  })

  it('Message element exists', () => {
    expect(cmp.find('.message').exists()).toBe(true)
  })

  it('Message is no empty', () => {
    expect(cmp.find(Message).isEmpty()).toBe(false)
  })

  it('Message has a class attribute set to "message"', () => {
    expect(cmp.find(Message).hasAttribute('class', 'message')).toBe(true)
  })

  it('Message component has the .message class', () => {
    expect(cmp.find(Message).hasClass('message')).toBe(true)
  })

  it('Message component has style padding-top: 10px', () => {
    expect(cmp.find(Message).hasStyle('padding-top', '10px')).toBe(true)
  })
})
