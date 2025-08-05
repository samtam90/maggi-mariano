import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monteleone di Spoleto",
  canonical: links.servizi["pulizia-fognature"]["monteleone-di-spoleto"],
});
export default withBaseProps({
  title: "Pulizia fognature Monteleone di Spoleto",
  locationNames: { label: "Monteleone di Spoleto", href: "monteleone-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
