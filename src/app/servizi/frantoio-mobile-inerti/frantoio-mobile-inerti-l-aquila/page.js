import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti L'Aquila",
  canonical: links.servizi["frantoio-mobile-inerti"]["l-aquila"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti L'Aquila",
  locationNames: { label: "L'Aquila", href: "l-aquila" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
