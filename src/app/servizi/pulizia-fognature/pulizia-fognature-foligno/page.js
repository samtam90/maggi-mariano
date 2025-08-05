import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Foligno",
  canonical: links.servizi["pulizia-fognature"]["foligno"],
});
export default withBaseProps({
  title: "Pulizia fognature Foligno",
  locationNames: { label: "Foligno", href: "foligno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
