import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sogliano al Rubicone",
  canonical: links.servizi["disidratazione-fanghi"]["sogliano-al-rubicone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sogliano al Rubicone",
  locationNames: { label: "Sogliano al Rubicone", href: "sogliano-al-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
