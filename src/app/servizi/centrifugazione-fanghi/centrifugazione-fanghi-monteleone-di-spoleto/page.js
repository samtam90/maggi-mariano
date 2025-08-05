import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monteleone di Spoleto",
  canonical: links.servizi["centrifugazione-fanghi"]["monteleone-di-spoleto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monteleone di Spoleto",
  locationNames: { label: "Monteleone di Spoleto", href: "monteleone-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
