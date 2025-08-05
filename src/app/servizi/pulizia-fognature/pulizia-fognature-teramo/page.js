import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Teramo",
  canonical: links.servizi["pulizia-fognature"]["teramo"],
});
export default withBaseProps({
  title: "Pulizia fognature Teramo",
  locationNames: { label: "Teramo", href: "teramo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
