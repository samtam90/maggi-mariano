import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Foggia",
  canonical: links.servizi["disidratazione-fanghi"]["foggia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Foggia",
  locationNames: { label: "Foggia", href: "foggia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
