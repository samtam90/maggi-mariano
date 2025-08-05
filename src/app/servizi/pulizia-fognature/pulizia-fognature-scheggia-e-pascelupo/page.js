import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Scheggia e Pascelupo",
  canonical: links.servizi["pulizia-fognature"]["scheggia-e-pascelupo"],
});
export default withBaseProps({
  title: "Pulizia fognature Scheggia e Pascelupo",
  locationNames: { label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
