import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Roma",
  canonical: links.servizi["centrifugazione-fanghi"]["roma"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Roma",
  locationNames: { label: "Roma", href: "roma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
