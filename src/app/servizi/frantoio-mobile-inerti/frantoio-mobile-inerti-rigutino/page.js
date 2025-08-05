import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rigutino",
  canonical: links.servizi["frantoio-mobile-inerti"]["rigutino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rigutino",
  locationNames: { label: "Rigutino", href: "rigutino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
