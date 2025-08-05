import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gualdo Cattaneo",
  canonical: links.servizi["pulizia-fognature"]["gualdo-cattaneo"],
});
export default withBaseProps({
  title: "Pulizia fognature Gualdo Cattaneo",
  locationNames: { label: "Gualdo Cattaneo", href: "gualdo-cattaneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
