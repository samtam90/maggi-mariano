import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Campi Bisenzio",
  canonical: links.servizi["pulizia-fognature"]["campi-bisenzio"],
});
export default withBaseProps({
  title: "Pulizia fognature Campi Bisenzio",
  locationNames: { label: "Campi Bisenzio", href: "campi-bisenzio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
