import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Deruta",
  canonical: links.servizi["frantoio-mobile-inerti"]["deruta"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Deruta",
  locationNames: { label: "Deruta", href: "deruta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
