import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Asciano",
  canonical: links.servizi["centrifugazione-fanghi"]["asciano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Asciano",
  locationNames: { label: "Asciano", href: "asciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
