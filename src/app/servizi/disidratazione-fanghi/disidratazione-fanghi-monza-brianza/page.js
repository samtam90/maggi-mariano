import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monza Brianza",
  canonical: links.servizi["disidratazione-fanghi"]["monza-brianza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monza Brianza",
  locationNames: { label: "Monza Brianza", href: "monza-brianza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
