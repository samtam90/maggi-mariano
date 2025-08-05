import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Giano dell'Umbria",
  canonical: links.servizi["frantoio-mobile-inerti"]["giano-dell-umbria"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Giano dell'Umbria",
  locationNames: { label: "Giano dell'Umbria", href: "giano-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
