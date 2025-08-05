import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Potenza",
  canonical: links.servizi["disidratazione-fanghi"]["potenza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Potenza",
  locationNames: { label: "Potenza", href: "potenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
