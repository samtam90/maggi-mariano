import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lugnano in Teverina",
  canonical: links.servizi["pulizia-fognature"]["lugnano-in-teverina"],
});
export default withBaseProps({
  title: "Pulizia fognature Lugnano in Teverina",
  locationNames: { label: "Lugnano in Teverina", href: "lugnano-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
