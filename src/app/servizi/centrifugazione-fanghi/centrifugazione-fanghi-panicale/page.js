import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Panicale",
  canonical: links.servizi["centrifugazione-fanghi"]["panicale"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Panicale",
  locationNames: { label: "Panicale", href: "panicale" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
