import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Collazzone",
  canonical: links.servizi["disidratazione-fanghi"]["collazzone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Collazzone",
  locationNames: { label: "Collazzone", href: "collazzone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
