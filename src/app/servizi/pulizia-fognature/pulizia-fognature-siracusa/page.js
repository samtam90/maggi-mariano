import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Siracusa",
  canonical: links.servizi["pulizia-fognature"]["siracusa"],
});
export default withBaseProps({
  title: "Pulizia fognature Siracusa",
  locationNames: { label: "Siracusa", href: "siracusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
