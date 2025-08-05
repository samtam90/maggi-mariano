import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castiglion Fiorentino",
  canonical: links.servizi["frantoio-mobile-inerti"]["castiglion-fiorentino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castiglion Fiorentino",
  locationNames: { label: "Castiglion Fiorentino", href: "castiglion-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
