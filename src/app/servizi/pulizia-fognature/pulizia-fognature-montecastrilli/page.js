import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montecastrilli",
  canonical: links.servizi["pulizia-fognature"]["montecastrilli"],
});
export default withBaseProps({
  title: "Pulizia fognature Montecastrilli",
  locationNames: { label: "Montecastrilli", href: "montecastrilli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
