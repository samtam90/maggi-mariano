import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Attigliano",
  canonical: links.servizi["pulizia-fognature"]["attigliano"],
});
export default withBaseProps({
  title: "Pulizia fognature Attigliano",
  locationNames: { label: "Attigliano", href: "attigliano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
