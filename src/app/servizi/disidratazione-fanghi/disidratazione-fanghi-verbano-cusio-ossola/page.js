import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Verbano-Cusio-Ossola",
  canonical: links.servizi["disidratazione-fanghi"]["verbano-cusio-ossola"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Verbano-Cusio-Ossola",
  locationNames: { label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
