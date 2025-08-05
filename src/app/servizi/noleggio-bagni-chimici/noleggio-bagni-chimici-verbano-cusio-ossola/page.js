import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verbano-Cusio-Ossola",
  canonical: links.servizi["noleggio-bagni-chimici"]["verbano-cusio-ossola"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Verbano-Cusio-Ossola",
  locationNames: { label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
