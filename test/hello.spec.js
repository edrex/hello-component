import Hello from 'lib/index';
import ReactTestUtils from 'react/lib/ReactTestUtils'
import React from 'react';

// https://facebook.github.io/react/docs/test-utils.html
// http://www.asbjornenge.com/wwc/testing_react_components.html

describe('Hello', function(){
  it('renders as an h1 with hello string', function(){
    let shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(Hello, {name: "foo"}));
    let result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('h1');
    expect(result.props.children).to.equal("Hello, foo.");
  });
});
