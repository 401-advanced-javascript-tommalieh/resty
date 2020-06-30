import React from 'react';
import {shallow, mount} from 'enzyme';
// import renderer from 'react-test-renderer';

import Form from '../../components/form/form.js';

describe('<Form/>', () => {
  it('renders correctly at the start of the app', () => {
    const form = shallow(<Form/>);
    expect(form.find('button').exists()).toBeTruthy();
  });
  it('changes state url on text input change', () => {
    const form = mount(<Form/>);
    const textInput = form.find('#url');
    // console.log(textInput);
    textInput.simulate('change', {target: {value: 'abc'}});
    expect(form.state('url')).toEqual('abc');
  });
  it('changes state method on radio input change', () => {
    const form = mount(<Form/>);
    // const radioInput = form.find('input').filterWhere((item) => {
    //     return item.prop('type') === 'radio';
    //   }).first();
    // console.log(radioInput.toString());
    // radioInput.simulate('change', {target: {checked: true}});
    // expect(form.state('method')).toEqual('get');
    form.find('input[type="radio"]').at(1).simulate('change',{ target: { value: 'get' } });
    expect(form.state('method')).toEqual('get');
  });
  // it('display user request', () => {
  //   const form = mount(<Form/>);
  //   form.find('input[type="radio"]').at(1).simulate('change',{ target: { value: 'get' } });
  //   form.find('#url').simulate('change', {target: {value: 'abc'}});

  //   expect(form.find('div').html()).toEqual('<div id="formResult"><span>get</span><span>abc</span></div>');
  // });
  // it('should empty the output and reset the state on submission', () => {
  //   const form = mount(<Form/>);
  //   form.find('input[type="radio"]').at(1).simulate('change',{ target: { value: 'get' } });
  //   form.find('#url').simulate('change', {target: {value: 'abc'}});
  //   expect(form.state('method')).toEqual('get');
  //   expect(form.state('url')).toEqual('abc');
  //   expect(form.find('div').html()).toEqual('<div id="formResult"><span>get</span><span>abc</span></div>');

  //   form.simulate('submit');
  //   // console.log(form.state('url'))
  //   expect(form.state('method')).toEqual('');
  //   expect(form.state('url')).toEqual('');
  //   expect(form.find('div').html()).toEqual('<div id="formResult"><span></span><span></span></div>');
  // });
  // it('obeys the styling rules for checkboxes', () => {
  //     const form = mount(<Form/>);
  //     let checkBoxStyle = form.find('input[type="radio"]').at(1);
  //     // const style = form.getComputedStyle(checkBoxStyle);
  //     console.log(checkBoxStyle)
  //     // console.log(style)

  //     expect(checkBoxStyle).toHaveStyleRule('color', 'black');
  // });
});