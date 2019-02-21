import React from "react";
import FilterControls from "../Components/FilterControls";
import { shallow } from "enzyme";

const parades = [
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

describe("FilterControls", () => {

  let wrapper;
  let filteredParades = [];

  beforeEach(() => {
    wrapper = shallow(
      <FilterControls
        parades={parades}
        // restaurants={this.state.restaurants} 
      />
    );
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({location: "", dayOrNight: "", date: ""});
  });

  it("should update the state when getClickedValue is called", () => {
    expect(wrapper.state("location")).toEqual( "" );
    wrapper.find("#location").simulate("change", { target: { value: "Metairie", id: "location"}});
    expect(wrapper.state("location")).toEqual("Metairie");

    expect(wrapper.state("dayOrNight")).toEqual( "" );
    wrapper.find("#dayOrNight").simulate("change", { target: { value: "AM", id: "dayOrNight"}});
    expect(wrapper.state("dayOrNight")).toEqual("AM");

    expect(wrapper.state("date")).toEqual( "" );
    wrapper.find("#date").simulate("change", { target: { value: "2/27/2019", id: "date"}});
    expect(wrapper.state("date")).toEqual("2/27/2019");
  });

  it("should filter the parades by location", () => {
    expect(filteredParades).toEqual( [] );
    expect(wrapper.state("location")).toEqual( "" );
    wrapper.find("#location").simulate("change", { target: { value: "Metairie", id: "location"}});
    const result = wrapper.instance().filterParades();
    expect(wrapper.state("location")).toEqual("Metairie");

    expect(result).toHaveLength( 2 );
  });

  it("should filter the parades by date", () => {
    expect(filteredParades).toEqual( [] );
    expect(wrapper.state("date")).toEqual( "" );
    wrapper.find("#date").simulate("change", { target: { value: "2/27/2019", id: "date"}});
    const result = wrapper.instance().filterParades();
    expect(wrapper.state("date")).toEqual("2/27/2019");
    

    expect(result).toHaveLength( 1 );
  });

  it("should filter the parades by time", () => {
    expect(filteredParades).toEqual( [] );
    expect(wrapper.state("dayOrNight")).toEqual( "" );
    wrapper.find("#dayOrNight").simulate("change", { target: { value: "am", id: "dayOrNight"}});
    const result = wrapper.instance().filterParades();
    expect(wrapper.state("dayOrNight")).toEqual("am");

    expect(result).toHaveLength( 1 );

  });

  it("should filter the parades by location, date, and time", () => {
    expect(filteredParades).toEqual( [] );

    expect(wrapper.state("location")).toEqual( "" );
    wrapper.find("#location").simulate("change", { target: { value: "Metairie", id: "location"}});
    expect(wrapper.state("location")).toEqual("Metairie");

    expect(wrapper.state("dayOrNight")).toEqual( "" );
    wrapper.find("#dayOrNight").simulate("change", { target: { value: "am", id: "dayOrNight"}});
    expect(wrapper.state("dayOrNight")).toEqual("am");

    expect(wrapper.state("date")).toEqual( "" );
    wrapper.find("#date").simulate("change", { target: { value: "2/27/2019", id: "date"}});
    expect(wrapper.state("date")).toEqual("2/27/2019");


    const result = wrapper.instance().filterParades();

    expect(result).toHaveLength( 1 );
  });

  it("should reset the filters upon user click", () => {
    wrapper.find("#location").simulate("change", { target: { value: "Metairie", id: "location"}});
    expect(wrapper.state("location")).toEqual("Metairie");

    wrapper.find("#dayOrNight").simulate("change", { target: { value: "am", id: "dayOrNight"}});
    expect(wrapper.state("dayOrNight")).toEqual("am");
    
    wrapper.find("#date").simulate("change", { target: { value: "2/27/2019", id: "date"}});
    expect(wrapper.state("date")).toEqual("2/27/2019");

    wrapper.instance().resetFilter();


    expect(wrapper.state()).toEqual({location: "", dayOrNight: "", date: ""});
  });

});

