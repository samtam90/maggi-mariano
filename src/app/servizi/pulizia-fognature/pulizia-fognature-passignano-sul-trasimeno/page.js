import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Passignano sul Trasimeno",
  canonical: links.servizi["pulizia-fognature"]["passignano-sul-trasimeno"],
});
export default withBaseProps({
  title: "Pulizia fognature Passignano sul Trasimeno",
  locationNames: { label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
