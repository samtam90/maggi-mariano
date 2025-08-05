import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Citerna",
  canonical: links.servizi["centrifugazione-fanghi"]["citerna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Citerna",
  locationNames: { label: "Citerna", href: "citerna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
