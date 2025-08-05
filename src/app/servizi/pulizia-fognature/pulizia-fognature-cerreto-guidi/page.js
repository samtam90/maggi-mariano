import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cerreto Guidi",
  canonical: links.servizi["pulizia-fognature"]["cerreto-guidi"],
});
export default withBaseProps({
  title: "Pulizia fognature Cerreto Guidi",
  locationNames: { label: "Cerreto Guidi", href: "cerreto-guidi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
