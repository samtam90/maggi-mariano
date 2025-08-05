import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cetona",
  canonical: links.servizi["disidratazione-fanghi"]["cetona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cetona",
  locationNames: { label: "Cetona", href: "cetona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
