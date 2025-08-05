import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Torrita di Siena",
  canonical: links.servizi["centrifugazione-fanghi"]["torrita-di-siena"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Torrita di Siena",
  locationNames: { label: "Torrita di Siena", href: "torrita-di-siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
