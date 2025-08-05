import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Vibo Valentia",
  canonical: links.servizi["frantoio-mobile-inerti"]["vibo-valentia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Vibo Valentia",
  locationNames: { label: "Vibo Valentia", href: "vibo-valentia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
