import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Campi Bisenzio",
  canonical: links.servizi["frantoio-mobile-inerti"]["campi-bisenzio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Campi Bisenzio",
  locationNames: { label: "Campi Bisenzio", href: "campi-bisenzio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
