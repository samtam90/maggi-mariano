import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Prato",
  canonical: links.servizi["centrifugazione-fanghi"]["prato"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Prato",
  locationNames: { label: "Prato", href: "prato" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
