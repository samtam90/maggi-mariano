import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cetona",
  canonical: links.servizi["centrifugazione-fanghi"]["cetona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cetona",
  locationNames: { label: "Cetona", href: "cetona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
