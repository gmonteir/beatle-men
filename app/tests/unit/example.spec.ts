import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import AddressItem from '@/components/AddressItem.vue';
import CreditCardItem from '@/components/CreditCardItem.vue';
import CartItem from '@/components/CartItem.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('AddressItem.vue', () => {
  it('renders props.address when passed', () => {
    const address = {
      street1: '1234 hello world',
      street2: 'Apt #000',
      city: 'San Luis Obispo',
      state: 'California',
      zip: '93405'
    }
    const wrapper = shallowMount(AddressItem, {
      propsData: { address },
    });
    expect(wrapper.text()).to.include(address.street1);
    expect(wrapper.text()).to.include(address.street2);
    expect(wrapper.text()).to.include(address.city);
    expect(wrapper.text()).to.include(address.state);
    expect(wrapper.text()).to.include(address.zip);
  });
});

describe('CreditCardItem.vue', () => {
  it('renders props.card when passed', () => {
    const card = {
      firstName: '1234 hello world',
      lastName: 'Apt #000',
      number: 'San Luis Obispo',
      month: 'California',
      year: '93405',
      cvv: '12345'
    }
    const wrapper = shallowMount(CreditCardItem, {
      propsData: { card },
    });
    expect(wrapper.text()).to.include(card.firstName);
    expect(wrapper.text()).to.include(card.lastName);
    expect(wrapper.text()).to.include(card.number);
    expect(wrapper.text()).to.include(card.month);
    expect(wrapper.text()).to.include(card.year);
    expect(wrapper.text()).to.include(card.cvv);
  });
});

describe('CartItem.vue', () => {
  it('renders props.item when passed', () => {
    const item = {
      name: 'mountain bike',
      description: 'a really cool bike',
      price: '10.00',
      userQuantity: 5,
      total: '50.00',
    }
    const wrapper = shallowMount(CartItem, {
      propsData: { item },
    });
    expect(wrapper.text()).to.include(item.name);
    expect(wrapper.text()).to.include(item.description);
    expect(wrapper.text()).to.include(item.price);
    expect(wrapper.text()).to.include(item.userQuantity);
    expect(wrapper.text()).to.include(item.total);
  });
});
