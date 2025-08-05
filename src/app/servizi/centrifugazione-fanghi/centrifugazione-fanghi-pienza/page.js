import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pienza",
  canonical: links.servizi["centrifugazione-fanghi"]["pienza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pienza",
  locationNames: { label: "Pienza", href: "pienza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
