import React from "react";
import Card from "../Components/Card";
import { shallow } from "enzyme";

describe("Card", () => {

  const mockParades = [
    {
      "name": "Krewe of Little Rascals",
      "location": "Metairie",
      "dayOrNight": "pm",
      "startTime": "12:00pm",
      "date": "2/17/2019",
      "themes": ["children", "cars", "family"],
      "numberOfFloats": 85,
      "id": 1,
      "img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/37872354-littlerascals2-jpg0_cc32794e-5056-a36a-08469bbb1ddece75.jpg"
  
    },
    {
      "name": "Krewe of Excalibur",
      "location": "Metairie",
      "dayOrNight": "am",
      "startTime": "7:00am",
      "date": "2/27/2019",
      "themes": ["trucks", "floats", "medieval", "magic"],
      "numberOfFloats": 112,
      "id": 2,
      "img": "https://www.hlimg.com/images/events/738X538/25mardi6502_1546063931e.jpg"
    },
    {
      "name": "Krewe of Babylon",
      "location": "Uptown New Orleans",
      "dayOrNight": "pm",
      "startTime": "5:30pm",
      "date": "2/26/2019",
      "themes": ["kings", "knights", "tradition", "legend"],
      "numberOfFloats": 35,
      "id": 3,
      "img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2015/02/0212-babylon-knights.jpg"
    }
  ];
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
  
  const mockToggleCard = jest.fn();
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card parades={mockParades}
        restaurants={mockRestaurants}
        id={1}
        toggle={mockToggleCard}/>
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggle function when button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockToggleCard).toHaveBeenCalled();
  });

});