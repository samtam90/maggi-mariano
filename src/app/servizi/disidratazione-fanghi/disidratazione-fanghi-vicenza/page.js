import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vicenza",
  canonical: links.servizi["disidratazione-fanghi"]["vicenza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vicenza",
  locationNames: { label: "Vicenza", href: "vicenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
