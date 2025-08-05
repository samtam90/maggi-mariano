import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gualdo Tadino",
  canonical: links.servizi["pulizia-fognature"]["gualdo-tadino"],
});
export default withBaseProps({
  title: "Pulizia fognature Gualdo Tadino",
  locationNames: { label: "Gualdo Tadino", href: "gualdo-tadino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
