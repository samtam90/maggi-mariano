import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Murlo",
  canonical: links.servizi["centrifugazione-fanghi"]["murlo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Murlo",
  locationNames: { label: "Murlo", href: "murlo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
