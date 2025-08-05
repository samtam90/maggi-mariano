import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Como",
  canonical: links.servizi["pulizia-fognature"]["como"],
});
export default withBaseProps({
  title: "Pulizia fognature Como",
  locationNames: { label: "Como", href: "como" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
