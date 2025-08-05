import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ficulle",
  canonical: links.servizi["frantoio-mobile-inerti"]["ficulle"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ficulle",
  locationNames: { label: "Ficulle", href: "ficulle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
