import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Piacenza",
  canonical: links.servizi["pulizia-fognature"]["piacenza"],
});
export default withBaseProps({
  title: "Pulizia fognature Piacenza",
  locationNames: { label: "Piacenza", href: "piacenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
