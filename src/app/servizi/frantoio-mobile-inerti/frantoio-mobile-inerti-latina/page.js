import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Latina",
  canonical: links.servizi["frantoio-mobile-inerti"]["latina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Latina",
  locationNames: { label: "Latina", href: "latina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
