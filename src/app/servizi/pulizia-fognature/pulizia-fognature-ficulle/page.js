import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ficulle",
  canonical: links.servizi["pulizia-fognature"]["ficulle"],
});
export default withBaseProps({
  title: "Pulizia fognature Ficulle",
  locationNames: { label: "Ficulle", href: "ficulle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
