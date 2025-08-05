import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montaione",
  canonical: links.servizi["pulizia-fognature"]["montaione"],
});
export default withBaseProps({
  title: "Pulizia fognature Montaione",
  locationNames: { label: "Montaione", href: "montaione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
