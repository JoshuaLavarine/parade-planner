import React from "react";
import Restaurant from "../Components/Restaurant";
import { shallow } from "enzyme";

const mockRestaurants = [
  {
    "name": "Acme Oyster House",
    "location": "Metairie",
    "distance_to_parade": ".5 miles",
    "walk_to_parade": "10 minutes",
    "cuisine": ["seafood", "cajun", "creole", "classics"],
    "rating": 4.5,
    "img": "https://www.neworleansonline.com/images/slideshows/listings/2952/05.jpg",
    "website": "https://acmeoyster.com/metairie/"
  },
  {
    "name": "Zea Rotisserie & Bar",
    "location": "Metairie",
    "distance_to_parade": "1.7 miles",
    "walk_to_parade": "35 minutes",
    "cuisine": ["eclectic", "beer", "mediterranean", "teas"],
    "rating": 4.5,
    "img": "https://resizer.otstatic.com/v2/photos/wide-huge/24439769.jpg",
    "website": "http://zearestaurants.com/locations/metairie/"
  }];

describe("Restaurant", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Restaurant sortedRestaurants={mockRestaurants}
      />
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
});