import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Spoleto",
  canonical: links.servizi["pulizia-fognature"]["spoleto"],
});
export default withBaseProps({
  title: "Pulizia fognature Spoleto",
  locationNames: { label: "Spoleto", href: "spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
