import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Fiesole",
  canonical: links.servizi["pulizia-fognature"]["fiesole"],
});
export default withBaseProps({
  title: "Pulizia fognature Fiesole",
  locationNames: { label: "Fiesole", href: "fiesole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
