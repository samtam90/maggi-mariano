import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Empoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["empoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Empoli",
  locationNames: { label: "Empoli", href: "empoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
