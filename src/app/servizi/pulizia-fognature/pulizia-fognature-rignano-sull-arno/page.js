import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rignano sull'Arno",
  canonical: links.servizi["pulizia-fognature"]["rignano-sull-arno"],
});
export default withBaseProps({
  title: "Pulizia fognature Rignano sull'Arno",
  locationNames: { label: "Rignano sull'Arno", href: "rignano-sull-arno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
