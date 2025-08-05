import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Perugia",
  canonical: links.servizi["pulizia-fognature"]["perugia"],
});
export default withBaseProps({
  title: "Pulizia fognature Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
