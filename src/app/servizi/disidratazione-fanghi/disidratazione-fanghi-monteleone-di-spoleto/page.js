import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monteleone di Spoleto",
  canonical: links.servizi["disidratazione-fanghi"]["monteleone-di-spoleto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monteleone di Spoleto",
  locationNames: { label: "Monteleone di Spoleto", href: "monteleone-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
