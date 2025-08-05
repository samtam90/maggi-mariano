import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Radicofani",
  canonical: links.servizi["disidratazione-fanghi"]["radicofani"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Radicofani",
  locationNames: { label: "Radicofani", href: "radicofani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
