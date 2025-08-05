import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Barberino di Mugello",
  canonical: links.servizi["frantoio-mobile-inerti"]["barberino-di-mugello"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Barberino di Mugello",
  locationNames: { label: "Barberino di Mugello", href: "barberino-di-mugello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
