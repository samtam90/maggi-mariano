import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Passignano sul Trasimeno",
  canonical: links.servizi["frantoio-mobile-inerti"]["passignano-sul-trasimeno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Passignano sul Trasimeno",
  locationNames: { label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
