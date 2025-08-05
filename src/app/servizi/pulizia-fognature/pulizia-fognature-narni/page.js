import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Narni",
  canonical: links.servizi["pulizia-fognature"]["narni"],
});
export default withBaseProps({
  title: "Pulizia fognature Narni",
  locationNames: { label: "Narni", href: "narni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
