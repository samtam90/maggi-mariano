import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Massa Martana",
  canonical: links.servizi["pulizia-fognature"]["massa-martana"],
});
export default withBaseProps({
  title: "Pulizia fognature Massa Martana",
  locationNames: { label: "Massa Martana", href: "massa-martana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
