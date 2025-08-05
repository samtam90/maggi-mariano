import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gubbio",
  canonical: links.servizi["pulizia-fognature"]["gubbio"],
});
export default withBaseProps({
  title: "Pulizia fognature Gubbio",
  locationNames: { label: "Gubbio", href: "gubbio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
