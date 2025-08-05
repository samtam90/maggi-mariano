import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Valfabbrica",
  canonical: links.servizi["disidratazione-fanghi"]["valfabbrica"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Valfabbrica",
  locationNames: { label: "Valfabbrica", href: "valfabbrica" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
