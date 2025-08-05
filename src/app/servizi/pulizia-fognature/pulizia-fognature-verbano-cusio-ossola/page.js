import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Verbano-Cusio-Ossola",
  canonical: links.servizi["pulizia-fognature"]["verbano-cusio-ossola"],
});
export default withBaseProps({
  title: "Pulizia fognature Verbano-Cusio-Ossola",
  locationNames: { label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
