import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Acquasparta",
  canonical: links.servizi["pulizia-fognature"]["acquasparta"],
});
export default withBaseProps({
  title: "Pulizia fognature Acquasparta",
  locationNames: { label: "Acquasparta", href: "acquasparta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
