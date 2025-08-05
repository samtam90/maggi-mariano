import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sesto Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["sesto-fiorentino"],
});
export default withBaseProps({
  title: "Pulizia fognature Sesto Fiorentino",
  locationNames: { label: "Sesto Fiorentino", href: "sesto-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
