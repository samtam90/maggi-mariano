import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Assisi",
  canonical: links.servizi["pulizia-fognature"]["assisi"],
});
export default withBaseProps({
  title: "Pulizia fognature Assisi",
  locationNames: { label: "Assisi", href: "assisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
