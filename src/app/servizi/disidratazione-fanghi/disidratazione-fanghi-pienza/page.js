import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pienza",
  canonical: links.servizi["disidratazione-fanghi"]["pienza"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pienza",
  locationNames: { label: "Pienza", href: "pienza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
