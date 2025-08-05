import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Piacenza",
  canonical: links.servizi["disidratazione-fanghi"]["piacenza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Piacenza",
  locationNames: { label: "Piacenza", href: "piacenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
