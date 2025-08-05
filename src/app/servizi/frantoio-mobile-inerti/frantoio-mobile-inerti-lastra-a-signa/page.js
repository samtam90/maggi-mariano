import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lastra a Signa",
  canonical: links.servizi["frantoio-mobile-inerti"]["lastra-a-signa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lastra a Signa",
  locationNames: { label: "Lastra a Signa", href: "lastra-a-signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
