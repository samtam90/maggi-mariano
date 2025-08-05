import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Chieti",
  canonical: links.servizi["centrifugazione-fanghi"]["chieti"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Chieti",
  locationNames: { label: "Chieti", href: "chieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
