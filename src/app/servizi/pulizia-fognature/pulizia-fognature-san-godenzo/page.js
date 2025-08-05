import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Godenzo",
  canonical: links.servizi["pulizia-fognature"]["san-godenzo"],
});
export default withBaseProps({
  title: "Pulizia fognature San Godenzo",
  locationNames: { label: "San Godenzo", href: "san-godenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
