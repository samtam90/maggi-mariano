import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Giorgio",
  canonical: links.servizi["pulizia-fognature"]["castel-giorgio"],
});
export default withBaseProps({
  title: "Pulizia fognature Castel Giorgio",
  locationNames: { label: "Castel Giorgio", href: "castel-giorgio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
