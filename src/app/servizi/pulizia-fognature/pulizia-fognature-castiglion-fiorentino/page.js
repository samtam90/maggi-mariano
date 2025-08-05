import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglion Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["castiglion-fiorentino"],
});
export default withBaseProps({
  title: "Pulizia fognature Castiglion Fiorentino",
  locationNames: { label: "Castiglion Fiorentino", href: "castiglion-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
