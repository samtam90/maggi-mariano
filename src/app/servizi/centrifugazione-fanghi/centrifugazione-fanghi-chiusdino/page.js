import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Chiusdino",
  canonical: links.servizi["centrifugazione-fanghi"]["chiusdino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Chiusdino",
  locationNames: { label: "Chiusdino", href: "chiusdino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
