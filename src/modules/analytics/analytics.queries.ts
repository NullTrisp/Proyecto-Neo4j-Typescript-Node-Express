import { queries } from "../../classes/datatypes/queries";

export const analyticsQueries: queries = {
  createAnalytics: {
    query:
      "CREATE (:Data {day: $day, infected_people: $infected_people, infected_people_num: $infected_people_num, infected_locations: $infected_locations, infected_locations_num: $infected_locations_num})",
  },
  getAnalytics: {
    query:
      "MATCH (n:Data) RETURN n ",
  },
};
