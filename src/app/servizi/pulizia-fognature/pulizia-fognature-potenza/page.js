import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Potenza",
  canonical: links.servizi["pulizia-fognature"]["potenza"],
});
export default withBaseProps({
  title: "Pulizia fognature Potenza",
  locationNames: { label: "Potenza", href: "potenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
