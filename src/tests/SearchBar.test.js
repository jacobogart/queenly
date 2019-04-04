import React from 'react';
import SearchBar from '../components/SearchBar';
import { shallow } from 'enzyme';

const mockUpdateResults = jest.fn();
const mockSelectResult = jest.fn();
const mockSearchResults = [
  {
    "bio": "",
    "facebook": "https://www.facebook.com/Sasha-Belle-1457446307864946/",
    "id": 118,
    "imageURL":
      "https://scontent-ort2-1.cdninstagram.com/vp/9e8e535948a6840c9778f3948b3bcd4c/5D2AB39C/t51.2885-19/s320x320/54196427_312652559394918_5887169852254191616_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
    "instagram": "https://www.instagram.com/sashabelley/?hl=en",
    "name": "Sasha Belle",
    "shows": ["Drag Matinee"],
    "twitter": "https://twitter.com/sashabelle3?lang=en"
  }
];

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchBar updateResults={mockUpdateResults}
                 selectResult={mockSelectResult} 
                 mockSearchResults={mockSearchResults} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state('searchQuery').toEqual(''));
  });

  it('should update searchQuery on change', () => {
    wrapper.find('.searchTerm').simulate('change');

    expect(mockUpdateResults).toBeCalled();
    // expect(wrapper.state('searchQuery').toEqual(''));

    // wrapper.instance().handleChange( {target: {value: 'Sasha'} } );

    // expect(wrapper.state('searchQuery').toEqual('Sasha'))
  });
});




