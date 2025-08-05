import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Udine",
  canonical: links.servizi["disidratazione-fanghi"]["udine"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Udine",
  locationNames: { label: "Udine", href: "udine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
