import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Brescia",
  canonical: links.servizi["pulizia-fognature"]["brescia"],
});
export default withBaseProps({
  title: "Pulizia fognature Brescia",
  locationNames: { label: "Brescia", href: "brescia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
