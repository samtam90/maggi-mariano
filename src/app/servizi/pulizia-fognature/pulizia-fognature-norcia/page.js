import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Norcia",
  canonical: links.servizi["pulizia-fognature"]["norcia"],
});
export default withBaseProps({
  title: "Pulizia fognature Norcia",
  locationNames: { label: "Norcia", href: "norcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
