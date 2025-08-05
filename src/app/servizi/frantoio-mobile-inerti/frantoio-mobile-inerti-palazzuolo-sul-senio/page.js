import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Palazzuolo sul Senio",
  canonical: links.servizi["frantoio-mobile-inerti"]["palazzuolo-sul-senio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Palazzuolo sul Senio",
  locationNames: { label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
