import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Foggia",
  canonical: links.servizi["centrifugazione-fanghi"]["foggia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Foggia",
  locationNames: { label: "Foggia", href: "foggia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
