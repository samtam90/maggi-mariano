import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Torino",
  canonical: links.servizi["centrifugazione-fanghi"]["torino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Torino",
  locationNames: { label: "Torino", href: "torino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
