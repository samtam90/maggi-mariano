import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cascia",
  canonical: links.servizi["pulizia-fognature"]["cascia"],
});
export default withBaseProps({
  title: "Pulizia fognature Cascia",
  locationNames: { label: "Cascia", href: "cascia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
