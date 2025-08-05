import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Panicale",
  canonical: links.servizi["disidratazione-fanghi"]["panicale"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Panicale",
  locationNames: { label: "Panicale", href: "panicale" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
