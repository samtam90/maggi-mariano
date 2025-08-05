import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pergine Valdarno",
  canonical: links.servizi["frantoio-mobile-inerti"]["pergine-valdarno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pergine Valdarno",
  locationNames: { label: "Pergine Valdarno", href: "pergine-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
